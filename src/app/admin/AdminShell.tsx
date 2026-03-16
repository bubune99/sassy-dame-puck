"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../../hooks/use-auth";
import {
  LayoutDashboard,
  LogOut,
  Menu,
  X,
  ArrowLeft,
  Settings,
  Image,
  Layers,
} from "lucide-react";

const navigationGroups = [
  {
    name: "Main",
    items: [
      { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    ],
  },
  {
    name: "Content",
    items: [
      { name: "Pages", href: "/admin/pages", icon: Layers },
      { name: "Media", href: "/admin/media", icon: Image },
    ],
  },
  {
    name: "System",
    items: [
      { name: "Settings", href: "/admin/settings", icon: Settings },
    ],
  },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const { user, signOut } = useAuth();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [expandedGroups, setExpandedGroups] = useState<string[]>(["Main", "Content", "System"]);

  const toggleGroup = (groupName: string) => {
    setExpandedGroups((prev) =>
      prev.includes(groupName)
        ? prev.filter((g) => g !== groupName)
        : [...prev, groupName]
    );
  };

  const isActiveLink = (href: string) => {
    if (href === "/admin") return pathname === href;
    return pathname?.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-md bg-card border border-border"
        >
          {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-56 bg-card border-r border-border transform transition-transform duration-200 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="px-4 py-4 border-b border-border">
            <Link href="/admin" className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                P
              </div>
              <span className="font-semibold text-lg">Page Builder</span>
            </Link>
          </div>

          {/* User info */}
          <div className="px-4 py-3 border-b border-border">
            <p className="text-sm font-medium">{user?.displayName || "Admin"}</p>
            <p className="text-xs text-muted-foreground">{user?.primaryEmail}</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 overflow-y-auto">
            <div className="space-y-4">
              {navigationGroups.map((group) => (
                <div key={group.name}>
                  <button
                    onClick={() => toggleGroup(group.name)}
                    className="flex items-center justify-between w-full px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hover:text-foreground transition-colors"
                  >
                    {group.name}
                  </button>
                  {expandedGroups.includes(group.name) && (
                    <ul className="mt-1 space-y-0.5">
                      {group.items.map((item) => {
                        const Icon = item.icon;
                        const isActive = isActiveLink(item.href);
                        return (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                                isActive
                                  ? "bg-primary text-primary-foreground"
                                  : "hover:bg-accent hover:text-accent-foreground"
                              }`}
                            >
                              <Icon className="h-4 w-4" />
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors mb-2"
            >
              <ArrowLeft className="h-4 w-4" />
              View Site
            </Link>
            <button
              onClick={() => signOut()}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors w-full"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-56">
        <header className="sticky top-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
          <div className="flex items-center h-16 px-6 lg:px-8">
            <span className="text-sm text-muted-foreground">Puck Page Builder</span>
          </div>
        </header>
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
      </div>
    </div>
  );
}
