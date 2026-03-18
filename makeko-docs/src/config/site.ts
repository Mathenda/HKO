const BLOB = process.env.NEXT_PUBLIC_BLOB_BASE_URL ?? "";
export const blobUrl = (path: string) => `${BLOB}${path}`;

// Site configuration
export const siteConfig = {
  underConstruction: false, // Set to false to make the site live
};
