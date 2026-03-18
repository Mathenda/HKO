"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { MouseEvent, useEffect } from "react";
import { blobUrl } from "@/config/site";

interface ImageLightboxProps {
  src: string | null;
  alt: string;
  onClose: () => void;
}

export default function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  useEffect(() => {
    if (!src) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-100 bg-black/95 backdrop-blur-sm p-1 md:p-2"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen image viewer"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close fullscreen image"
          >
            <X size={20} />
          </button>

          <div className="flex h-full w-full items-center justify-center">
            <motion.img
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={src.startsWith("http") ? src : blobUrl(src)}
              alt={alt}
              className="h-auto w-auto max-h-[98vh] max-w-[98vw] object-contain"
              onClick={(event: MouseEvent<HTMLImageElement>) => event.stopPropagation()}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
