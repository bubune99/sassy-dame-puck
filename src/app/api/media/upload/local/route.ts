import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key") || "";
    if (!key) {
      return NextResponse.json({ error: "Missing key parameter" }, { status: 400 });
    }
    const buffer = await request.arrayBuffer();
    const filePath = join(process.cwd(), "public", "uploads", key);
    const dir = filePath.substring(0, filePath.lastIndexOf("/"));
    await mkdir(dir, { recursive: true });
    await writeFile(filePath, Buffer.from(buffer));
    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.error("Local upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
