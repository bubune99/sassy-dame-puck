import { getDesignSettings } from "@/lib/settings";
import { DEFAULT_DESIGN_SETTINGS } from "@/lib/settings/types";

const SHADOW_MAP: Record<string, string> = {
  none: "none",
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
};

export default async function DesignTokenStyle() {
  let settings = DEFAULT_DESIGN_SETTINGS;

  try {
    settings = await getDesignSettings();
  } catch {
    // DB unavailable during build — use defaults
    return null;
  }

  const css = `:root {
  --ds-primary: ${settings.primaryColor};
  --ds-secondary: ${settings.secondaryColor};
  --ds-accent: ${settings.accentColor};
  --ds-neutral: ${settings.neutralColor};
  --ds-text: ${settings.textColor};
  --ds-text-muted: ${settings.textMutedColor};
  --ds-background: ${settings.backgroundColor};
  --ds-heading-font: ${settings.headingFont || "inherit"};
  --ds-body-font: ${settings.bodyFont || "inherit"};
  --ds-base-font-size: ${settings.baseFontSize};
  --ds-border-radius: ${settings.borderRadius};
  --ds-shadow: ${SHADOW_MAP[settings.shadowStyle] || SHADOW_MAP.sm};
}`;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
