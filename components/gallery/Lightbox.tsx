"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { FOCUS_RING } from "@/lib/ui";
import { useLightbox } from "./LightboxProvider";

export type GalleryImageData = {
  src: StaticImageData;
  alt: string;
  caption: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;
const CAPTION_ID = "gallery-lightbox-caption";

const noopSubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );
}

export function Lightbox({ images }: { images: GalleryImageData[] }) {
  const { openIndex, close } = useLightbox();
  const mounted = useMounted();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (openIndex === null) return;

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }

      if (event.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openIndex, close]);

  if (!mounted) return null;

  const image = openIndex !== null ? images[openIndex] : null;

  return createPortal(
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: EASE }}
          onClick={close}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={CAPTION_ID}
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: EASE }}
            className="relative flex max-h-full w-full max-w-3xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              aria-label="Close image view"
              className={`absolute -top-12 right-0 inline-flex items-center gap-2 rounded-full border border-hairline px-4 py-2 text-sm font-medium text-cream transition-colors hover:border-brass/60 hover:text-brass-light ${FOCUS_RING}`}
            >
              <X className="h-4 w-4" aria-hidden="true" />
              Close
            </button>

            <Image
              src={image.src}
              alt={image.alt}
              placeholder="blur"
              sizes="(min-width: 768px) 70vw, 90vw"
              className="h-auto max-h-[70vh] w-auto rounded-2xl border border-hairline object-contain"
            />

            <p
              id={CAPTION_ID}
              className="mt-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-cream-muted"
            >
              {image.caption}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
