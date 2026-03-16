export type SettingGroup =
  | "general"
  | "branding"
  | "storage"
  | "security"
  | "design";

export interface BrandingSettings {
  siteName: string;
  siteTagline?: string;
  logoUrl?: string;
  logoAlt?: string;
  logoDarkUrl?: string;
  faviconUrl?: string;
  ogImageUrl?: string;
  primaryColor?: string;
  accentColor?: string;
}

export interface GeneralSettings {
  siteName: string;
  siteUrl: string;
  supportEmail: string;
  timezone: string;
  currency: string;
  locale: string;
}

export interface StorageSettings {
  provider: "s3" | "r2" | "local";
  bucket?: string;
  region?: string;
  accessKeyId?: string;
  secretAccessKey?: string;
  endpoint?: string;
  publicUrl?: string;
  maxFileSize: number;
  allowedFileTypes: string[];
}

export interface SecuritySettings {
  allowRegistration: boolean;
  requireEmailVerification: boolean;
  sessionTimeout: number;
  maxLoginAttempts: number;
  lockoutDuration: number;
  twoFactorEnabled: boolean;
  passwordMinLength: number;
  passwordRequireUppercase: boolean;
  passwordRequireNumbers: boolean;
  passwordRequireSymbols: boolean;
}

export interface DesignSettings {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  neutralColor: string;
  textColor: string;
  textMutedColor: string;
  backgroundColor: string;
  headingFont: string;
  bodyFont: string;
  baseFontSize: string;
  borderRadius: string;
  shadowStyle: "none" | "sm" | "md" | "lg";
}

export interface EnvVarStatus {
  name: string;
  configured: boolean;
  required: boolean;
  group: SettingGroup;
  description: string;
}

export const DEFAULT_BRANDING_SETTINGS: BrandingSettings = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "My Site",
  primaryColor: "#0066cc",
  accentColor: "#6366f1",
};

export const DEFAULT_GENERAL_SETTINGS: GeneralSettings = {
  siteName: "My Site",
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  supportEmail: "support@example.com",
  timezone: "America/New_York",
  currency: "USD",
  locale: "en-US",
};

export const DEFAULT_STORAGE_SETTINGS: StorageSettings = {
  provider: "local",
  maxFileSize: 50,
  allowedFileTypes: ["image/*", "application/pdf"],
};

export const DEFAULT_SECURITY_SETTINGS: SecuritySettings = {
  allowRegistration: false,
  requireEmailVerification: false,
  sessionTimeout: 60,
  maxLoginAttempts: 5,
  lockoutDuration: 15,
  twoFactorEnabled: false,
  passwordMinLength: 8,
  passwordRequireUppercase: true,
  passwordRequireNumbers: true,
  passwordRequireSymbols: false,
};

export const DEFAULT_DESIGN_SETTINGS: DesignSettings = {
  primaryColor: "#0066cc",
  secondaryColor: "#6b7280",
  accentColor: "#6366f1",
  neutralColor: "#f1f5f9",
  textColor: "#0f172a",
  textMutedColor: "#64748b",
  backgroundColor: "#ffffff",
  headingFont: "",
  bodyFont: "",
  baseFontSize: "16px",
  borderRadius: "8px",
  shadowStyle: "sm",
};

export const REQUIRED_ENV_VARS: EnvVarStatus[] = [
  { name: "DATABASE_URL", configured: false, required: true, group: "general", description: "PostgreSQL connection string" },
  { name: "ENCRYPTION_KEY", configured: false, required: true, group: "security", description: "32-byte hex encryption key" },
];
