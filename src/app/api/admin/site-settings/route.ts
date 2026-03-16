/**
 * Site Settings API
 *
 * GET /api/admin/site-settings - Get current site settings
 * PUT /api/admin/site-settings - Update site settings
 */

import { NextRequest, NextResponse } from 'next/server';
import { getSettings, updateSettings } from '../../../../lib/settings';

const DEFAULT_SITE_SETTINGS = {
  header: null,
  footer: null,
  announcementBar: null,
  showAnnouncementBar: false,
  siteName: 'My Site',
  siteTagline: '',
  logoUrl: '',
  logoAlt: '',
  faviconUrl: '',
  socialLinks: {},
  defaultMetaTitle: '',
  defaultMetaDescription: '',
  defaultOgImage: '',
  contactEmail: '',
  contactPhone: '',
  businessAddress: '',
};

export async function GET() {
  try {
    const settings = await getSettings('general', DEFAULT_SITE_SETTINGS);
    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch site settings' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();

    const allowedFields = [
      'header', 'footer', 'announcementBar', 'showAnnouncementBar',
      'siteName', 'siteTagline', 'logoUrl', 'logoAlt', 'faviconUrl',
      'socialLinks', 'defaultMetaTitle', 'defaultMetaDescription',
      'defaultOgImage', 'contactEmail', 'contactPhone', 'businessAddress',
    ];

    const updateData: Record<string, unknown> = {};
    for (const field of allowedFields) {
      if (field in body) {
        updateData[field] = body[field];
      }
    }

    await updateSettings('general', updateData);
    const settings = await getSettings('general', DEFAULT_SITE_SETTINGS);
    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error updating site settings:', error);
    return NextResponse.json(
      { error: 'Failed to update site settings' },
      { status: 500 }
    );
  }
}
