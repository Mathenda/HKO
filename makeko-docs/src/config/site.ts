const BLOB = "https://qiqe4rknb11or570.public.blob.vercel-storage.com";
export const blobUrl = (path: string) => `${BLOB}${path}`;

// Site configuration
export const siteConfig = {
  underConstruction: false, // Set to false to make the site live
};
