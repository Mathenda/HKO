import { put } from "@vercel/blob";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, "../public/Residential/Residential1/upscale.png");
const blobKey = "Residential/Residential1/upscale.png";

const fileBuffer = await readFile(filePath);

const blob = await put(blobKey, fileBuffer, {
  access: "public",
  contentType: "image/png",
  addRandomSuffix: false,
});

console.log(`✓ ${blobKey} → ${blob.url}`);