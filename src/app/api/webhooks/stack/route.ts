/**
 * Stack Auth Webhook Handler
 *
 * Receives user events from Stack Auth and syncs to local database.
 * Configure webhook URL in Stack Auth dashboard:
 *   https://your-domain.com/api/webhooks/stack
 */

import { NextRequest, NextResponse } from "next/server";
import { syncUser } from "@/lib/auth/sync";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;

    switch (type) {
      case "user.created":
      case "user.updated": {
        await syncUser({
          id: data.id,
          primaryEmail: data.primary_email || data.primaryEmail,
          displayName: data.display_name || data.displayName,
          serverMetadata: data.server_metadata || data.serverMetadata,
        });
        break;
      }
      case "user.deleted": {
        // Soft-delete or mark inactive — don't hard delete to preserve references
        console.log(`User deleted from Stack Auth: ${data.id}`);
        break;
      }
      default:
        console.log(`Unhandled Stack Auth webhook: ${type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Stack Auth webhook error:", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
