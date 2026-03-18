type ImageLoaderProps = { src: string; width: number; quality?: number };

const BLOB_BASE_URL = "https://qiqe4rknb11or570.public.blob.vercel-storage.com";

export default function blobImageLoader({ src }: ImageLoaderProps): string {
  if (src.startsWith("http")) return src;
  return `${BLOB_BASE_URL}${src}`;
}
