"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Layers, Image, ArrowRight, Plus } from "lucide-react";

interface DashboardStats {
  totalPages: number;
  publishedPages: number;
  totalMedia: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({ totalPages: 0, publishedPages: 0, totalMedia: 0 });

  useEffect(() => {
    async function fetchStats() {
      try {
        const [pagesRes, mediaRes] = await Promise.all([
          fetch("/api/admin/pages?limit=1"),
          fetch("/api/media?limit=1"),
        ]);
        const pagesData = pagesRes.ok ? await pagesRes.json() : { total: 0 };
        const mediaData = mediaRes.ok ? await mediaRes.json() : { total: 0 };
        setStats({
          totalPages: pagesData.total || 0,
          publishedPages: pagesData.publishedCount || 0,
          totalMedia: mediaData.total || 0,
        });
      } catch {}
    }
    fetchStats();
  }, []);

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome to your page builder</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 mb-8">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">Total Pages</span>
            <Layers className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{stats.totalPages}</div>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">Media Files</span>
            <Image className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{stats.totalMedia}</div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold mb-1">Pages</h3>
          <p className="text-sm text-muted-foreground mb-4">Create and manage your website pages</p>
          <div className="space-y-2">
            <Link
              href="/admin/pages/new"
              className="flex items-center justify-between w-full rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-medium"
            >
              <span className="flex items-center gap-2"><Plus className="h-4 w-4" /> New Page</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/admin/pages"
              className="flex items-center justify-between w-full rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent"
            >
              <span>View All Pages</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold mb-1">Media</h3>
          <p className="text-sm text-muted-foreground mb-4">Upload and organize your media files</p>
          <Link
            href="/admin/media"
            className="flex items-center justify-between w-full rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-medium"
          >
            <span className="flex items-center gap-2"><Image className="h-4 w-4" /> Open Media Manager</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
