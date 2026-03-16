"use client";

import { useEffect } from "react";

const SHADOW_MAP: Record<string, string> = {
  none: "none",
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
};

const TOKEN_MAP: Record<string, string> = {
  primaryColor: "--ds-primary",
  secondaryColor: "--ds-secondary",
  accentColor: "--ds-accent",
  neutralColor: "--ds-neutral",
  textColor: "--ds-text",
  textMutedColor: "--ds-text-muted",
  backgroundColor: "--ds-background",
  headingFont: "--ds-heading-font",
  bodyFont: "--ds-body-font",
  baseFontSize: "--ds-base-font-size",
  borderRadius: "--ds-border-radius",
};

export default function DesignTokenStyleClient() {
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/settings?group=design");
        if (!res.ok) return;
        const data = await res.json();
        const settings = data.design;
        if (!settings) return;

        const root = document.documentElement;
        for (const [key, cssVar] of Object.entries(TOKEN_MAP)) {
          const value = settings[key];
          if (value) {
            root.style.setProperty(
              cssVar,
              key.endsWith("Font") && !value ? "inherit" : value
            );
          }
        }
        if (settings.shadowStyle) {
          root.style.setProperty(
            "--ds-shadow",
            SHADOW_MAP[settings.shadowStyle] || SHADOW_MAP.sm
          );
        }
      } catch {
        // Silently fail — editor still works without tokens
      }
    }
    load();
  }, []);

  return null;
}
