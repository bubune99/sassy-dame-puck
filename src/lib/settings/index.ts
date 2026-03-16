import { prisma } from '../db'
import { encrypt, safeDecrypt, isEncrypted } from '../encryption'
import type {
  SettingGroup,
  BrandingSettings,
  GeneralSettings,
  StorageSettings,
  SecuritySettings,
  DesignSettings,
  EnvVarStatus,
} from './types'
import {
  REQUIRED_ENV_VARS,
  DEFAULT_BRANDING_SETTINGS,
  DEFAULT_GENERAL_SETTINGS,
  DEFAULT_STORAGE_SETTINGS,
  DEFAULT_SECURITY_SETTINGS,
  DEFAULT_DESIGN_SETTINGS,
} from './types'

const SENSITIVE_KEYS: Record<SettingGroup, string[]> = {
  storage: ['accessKeyId', 'secretAccessKey'],
  branding: [],
  general: [],
  security: [],
  design: [],
}

const settingsCache: Map<SettingGroup, { data: any; timestamp: number }> = new Map()
const CACHE_TTL = 60 * 1000

export async function getSettings<T>(
  group: SettingGroup,
  defaults: T
): Promise<T> {
  const cached = settingsCache.get(group)
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data as T
  }

  const records = await prisma.setting.findMany({ where: { group } })
  const settings = { ...defaults } as any
  const sensitiveKeys = SENSITIVE_KEYS[group] || []

  for (const record of records) {
    const key = record.key.replace(`${group}.`, '')
    let value = record.value

    if (sensitiveKeys.includes(key) && record.encrypted && isEncrypted(value)) {
      const decrypted = safeDecrypt(value)
      if (decrypted === value && isEncrypted(decrypted)) {
        console.warn(`Decryption failed for ${group}.${key} — check ENCRYPTION_KEY`)
        value = ''
      } else {
        value = decrypted
      }
    }

    try {
      settings[key] = JSON.parse(value)
    } catch {
      settings[key] = value
    }
  }

  settingsCache.set(group, { data: settings, timestamp: Date.now() })
  return settings as T
}

export async function updateSettings(
  group: SettingGroup,
  settings: Record<string, any>
): Promise<void> {
  const sensitiveKeys = SENSITIVE_KEYS[group] || []

  for (const [key, value] of Object.entries(settings)) {
    if (value === undefined || value === '********') continue

    const fullKey = `${group}.${key}`
    const isSensitive = sensitiveKeys.includes(key)

    let stringValue = typeof value === 'string' ? value : JSON.stringify(value)
    if (isSensitive && stringValue && stringValue !== '') {
      stringValue = encrypt(stringValue)
    }

    await prisma.setting.upsert({
      where: { key: fullKey },
      create: { key: fullKey, value: stringValue, group, encrypted: isSensitive },
      update: { value: stringValue, encrypted: isSensitive },
    })
  }

  settingsCache.delete(group)
}

export function clearSettingsCache(group?: SettingGroup): void {
  if (group) {
    settingsCache.delete(group)
  } else {
    settingsCache.clear()
  }
}

export async function getBrandingSettings(): Promise<BrandingSettings> {
  return getSettings('branding', DEFAULT_BRANDING_SETTINGS)
}

export async function getGeneralSettings(): Promise<GeneralSettings> {
  return getSettings('general', DEFAULT_GENERAL_SETTINGS)
}

export async function getStorageSettings(): Promise<StorageSettings> {
  const settings = await getSettings('storage', DEFAULT_STORAGE_SETTINGS) as StorageSettings & { accountId?: string }

  if (!settings.bucket) settings.bucket = process.env.S3_BUCKET || process.env.R2_BUCKET || process.env.R2_BUCKET_NAME
  if (!settings.region) settings.region = process.env.S3_REGION || 'auto'
  if (!settings.accessKeyId) settings.accessKeyId = process.env.S3_ACCESS_KEY_ID || process.env.R2_ACCESS_KEY_ID
  if (!settings.secretAccessKey) settings.secretAccessKey = process.env.S3_SECRET_ACCESS_KEY || process.env.R2_SECRET_ACCESS_KEY

  if (!settings.endpoint) {
    if (process.env.S3_ENDPOINT) {
      settings.endpoint = process.env.S3_ENDPOINT
    } else {
      const accountId = process.env.R2_ACCOUNT_ID || settings.accountId
      if (accountId) {
        settings.endpoint = `https://${accountId}.r2.cloudflarestorage.com`
      }
    }
  }

  if (!settings.publicUrl) settings.publicUrl = process.env.R2_PUBLIC_URL

  if (process.env.R2_BUCKET || process.env.R2_BUCKET_NAME || process.env.R2_ACCOUNT_ID) {
    settings.provider = 'r2'
  }

  return settings
}

export async function getSecuritySettings(): Promise<SecuritySettings> {
  return getSettings('security', DEFAULT_SECURITY_SETTINGS)
}

export async function getDesignSettings(): Promise<DesignSettings> {
  return getSettings('design', DEFAULT_DESIGN_SETTINGS)
}

export function getEnvVarStatus(): EnvVarStatus[] {
  return REQUIRED_ENV_VARS.map((envVar) => ({
    ...envVar,
    configured: !!process.env[envVar.name],
  }))
}

export async function getAllSettings() {
  const [branding, general, storage, security, design] = await Promise.all([
    getBrandingSettings(),
    getGeneralSettings(),
    getStorageSettings(),
    getSecuritySettings(),
    getDesignSettings(),
  ])

  return {
    branding,
    general,
    storage: {
      ...storage,
      secretAccessKey: storage.secretAccessKey ? '********' : undefined,
    },
    security,
    design,
    envVars: getEnvVarStatus(),
  }
}

export * from './types'
