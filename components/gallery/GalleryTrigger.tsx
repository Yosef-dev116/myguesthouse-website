"use client";

import type { ReactNode } from "react";
import { FOCUS_RING } from "@/lib/ui";
import { useLightbox } from "./LightboxProvider";

export function GalleryTrigger({
  index,
  label,
  className = "",
  children,
}: {
  index: number;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  const { open } = useLightbox();

  return (
    <button
      type="button"
      onClick={() => open(index)}
      aria-label={`Open larger view of ${label}`}
      className={`group block w-full rounded-2xl text-left ${FOCUS_RING} ${className}`}
    >
      {children}
    </button>
  );
}
