import Link from 'next/link';
import { Button } from '../../../../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../../components/ui/card';
import { ArrowLeft, PanelTop, PanelBottom, Bell } from 'lucide-react';

export default function LayoutPage() {
  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/admin/pages">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Site Layout</h1>
          <p className="text-sm text-muted-foreground">
            Configure your global header, footer, and announcement bar
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100">
                <PanelTop className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <CardTitle>Header</CardTitle>
                <CardDescription>Site navigation and branding</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/admin/pages/layout/header">Edit Header</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-100">
                <PanelBottom className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <CardTitle>Footer</CardTitle>
                <CardDescription>Links, social media, and copyright</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/admin/pages/layout/footer">Edit Footer</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-100">
                <Bell className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <CardTitle>Announcement Bar</CardTitle>
                <CardDescription>Promotions, alerts, and notices</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/admin/pages/layout/announcement">Edit Announcement</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
