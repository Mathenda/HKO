"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { MouseEvent, useEffect } from "react";
import { blobUrl } from "@/config/site";

interface ImageLightboxProps {
  images: string[];
  index: number | null;
  alt: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ImageLightbox({ images, index, alt, onClose, onNext, onPrev }: ImageLightboxProps) {
  const isOpen = index !== null && images.length > 0;
  const src = isOpen ? images[index!] : null;
  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {isOpen && (
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
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 z-10"
            aria-label="Close fullscreen image"
          >
            <X size={20} />
          </button>

          {hasMultiple && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium z-10 pointer-events-none">
              {index! + 1} / {images.length}
            </div>
          )}

          {hasMultiple && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {hasMultiple && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-16 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 z-10"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          )}

          <div className="flex h-full w-full items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={src}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.15 }}
                src={src!.startsWith("http") ? src! : blobUrl(src!)}
                alt={alt}
                className="h-auto w-auto max-h-[90vh] max-w-[85vw] object-contain"
                onClick={(event: MouseEvent<HTMLImageElement>) => event.stopPropagation()}
              />
            </AnimatePresence>
          </div>

          {hasMultiple && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-200 ${i === index ? "w-4 bg-white" : "w-1.5 bg-white/40"}`}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
