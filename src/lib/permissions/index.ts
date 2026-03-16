export const PERMISSIONS = {
  PAGES_VIEW: "pages.view",
  PAGES_CREATE: "pages.create",
  PAGES_EDIT: "pages.edit",
  PAGES_DELETE: "pages.delete",
  MEDIA_VIEW: "media.view",
  MEDIA_UPLOAD: "media.upload",
  MEDIA_DELETE: "media.delete",
  SETTINGS_VIEW: "settings.view",
  SETTINGS_EDIT: "settings.edit",
};

export async function logAuditEvent(_event: {
  userId: string;
  userEmail: string;
  action: string;
  targetType: string;
  targetId: string;
  details?: Record<string, unknown>;
}): Promise<void> {
  // No-op in standalone builder
}

export type UserWithPermissions = {
  permissions: Set<string>;
};
