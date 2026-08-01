"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { Lightbox, type GalleryImageData } from "./Lightbox";

type LightboxContextValue = {
  openIndex: number | null;
  open: (index: number) => void;
  close: () => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error("useLightbox must be used within a LightboxProvider");
  }
  return context;
}

export function LightboxProvider({
  images,
  children,
}: {
  images: GalleryImageData[];
  children: ReactNode;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const open = useCallback((index: number) => {
    triggerRef.current = document.activeElement as HTMLElement;
    setOpenIndex(index);
  }, []);

  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (openIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [openIndex]);

  return (
    <LightboxContext.Provider value={{ openIndex, open, close }}>
      {children}
      <Lightbox images={images} />
    </LightboxContext.Provider>
  );
}
