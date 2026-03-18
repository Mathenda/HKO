type ImageLoaderProps = { src: string; width: number; quality?: number };

export default function blobImageLoader({ src }: ImageLoaderProps): string {
  return `${process.env.NEXT_PUBLIC_BLOB_BASE_URL}${src}`;
}
