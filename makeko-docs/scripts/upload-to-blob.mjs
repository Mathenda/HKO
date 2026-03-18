/**
 * One-time script to upload all images from /public to Vercel Blob.
 * Run with: node scripts/upload-to-blob.mjs
 * Requires BLOB_READ_WRITE_TOKEN in your environment or .env.local
 */

import { put } from "@vercel/blob";
import { readFile, readdir, stat } from "fs/promises";
import { join, relative } from "path";

const PUBLIC_DIR = new URL("../public", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".wdp"]);

async function* walk(dir) {
  for (const entry of await readdir(dir)) {
    const full = join(dir, entry);
    const s = await stat(full);
    if (s.isDirectory()) {
      yield* walk(full);
    } else {
      const ext = entry.slice(entry.lastIndexOf(".")).toLowerCase();
      if (IMAGE_EXTENSIONS.has(ext)) yield full;
    }
  }
}

async function main() {
  let uploaded = 0;
  let skipped = 0;

  for await (const filePath of walk(PUBLIC_DIR)) {
    const blobKey = relative(PUBLIC_DIR, filePath).replace(/\\/g, "/");
    const fileBuffer = await readFile(filePath);
    const ext = filePath.slice(filePath.lastIndexOf(".") + 1).toLowerCase();
    const contentType =
      ext === "jpg" || ext === "jpeg" ? "image/jpeg"
      : ext === "png" ? "image/png"
      : ext === "webp" ? "image/webp"
      : ext === "gif" ? "image/gif"
      : ext === "svg" ? "image/svg+xml"
      : "application/octet-stream";

    try {
      const blob = await put(blobKey, fileBuffer, {
        access: "public",
        contentType,
        addRandomSuffix: false,
      });
      console.log(`✓ ${blobKey} → ${blob.url}`);
      uploaded++;
    } catch (err) {
      console.error(`✗ ${blobKey}: ${err.message}`);
      skipped++;
    }
  }

  console.log(`\nDone. ${uploaded} uploaded, ${skipped} failed.`);
}

main();
