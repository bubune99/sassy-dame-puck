"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader2, Save } from "lucide-react";

interface StorageSettings {
  provider: string;
  bucket: string;
  region: string;
  publicUrl: string;
}

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState<Record<string, any>>({});

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/settings?group=storage");
        if (res.ok) {
          const data = await res.json();
          setSettings(data);
        }
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="p-6 lg:p-8 flex items-center justify-center min-h-[50vh]">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-2">Settings</h1>
      <p className="text-muted-foreground mb-8">
        Configure storage and site settings.
      </p>

      <div className="rounded-lg border bg-card p-6">
        <h2 className="font-semibold mb-4">Storage</h2>
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium">Provider</label>
            <p className="text-sm text-muted-foreground mt-1">
              {settings.provider || "local"} — configured via environment variables
            </p>
          </div>
          {settings.bucket && (
            <div>
              <label className="text-sm font-medium">Bucket</label>
              <p className="text-sm text-muted-foreground mt-1">{settings.bucket}</p>
            </div>
          )}
          {settings.publicUrl && (
            <div>
              <label className="text-sm font-medium">Public URL</label>
              <p className="text-sm text-muted-foreground mt-1">{settings.publicUrl}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
