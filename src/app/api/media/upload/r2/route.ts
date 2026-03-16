import { NextRequest, NextResponse } from "next/server";
import { getStorageSettings } from "@/lib/settings";

/**
 * Server-side R2 upload proxy
 *
 * Bypasses CORS issues by uploading from server to R2 instead of client → R2.
 * Client sends file to this endpoint, server forwards to R2 with credentials.
 */
export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key");
    const contentType = searchParams.get("contentType") || "application/octet-stream";

    if (!key) {
      return NextResponse.json({ error: "Missing key parameter" }, { status: 400 });
    }

    const settings = await getStorageSettings();
    if (!settings.bucket || !settings.accessKeyId || !settings.secretAccessKey || !settings.endpoint) {
      return NextResponse.json({ error: "R2 storage not configured" }, { status: 500 });
    }

    const { S3Client, PutObjectCommand } = await import("@aws-sdk/client-s3");

    const client = new S3Client({
      region: "auto",
      endpoint: settings.endpoint,
      credentials: {
        accessKeyId: settings.accessKeyId,
        secretAccessKey: settings.secretAccessKey,
      },
      forcePathStyle: true,
    });

    const body = await request.arrayBuffer();

    await client.send(
      new PutObjectCommand({
        Bucket: settings.bucket,
        Key: key,
        Body: Buffer.from(body),
        ContentType: contentType,
      })
    );

    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.error("R2 upload proxy error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
