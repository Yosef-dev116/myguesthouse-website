import type { LucideIcon } from "lucide-react";
import { FOCUS_RING } from "@/lib/ui";
import { InViewItem } from "./motion/InView";
import { NestedStaggerIcon, NestedStaggerList, NestedStaggerRow } from "./motion/NestedStagger";

export type AmenityItem = {
  label: string;
  icon: LucideIcon;
  href?: string;
};

export function AmenityGroup({
  title,
  items,
}: {
  title: string;
  items: AmenityItem[];
}) {
  return (
    <div>
      <InViewItem className="flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-6 bg-brass" />
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">{title}</h3>
      </InViewItem>

      <InViewItem className="mt-5">
        <NestedStaggerList className="flex flex-col gap-3">
          {items.map(({ label, icon: Icon, href }) => (
            <NestedStaggerRow key={label} className="flex items-center gap-3">
              <NestedStaggerIcon>
                <Icon className="h-[19px] w-[19px] shrink-0 text-brass" aria-hidden="true" />
              </NestedStaggerIcon>
              {href ? (
                <a
                  href={href}
                  className={`rounded-sm text-sm text-cream-muted transition-colors hover:text-cream ${FOCUS_RING}`}
                >
                  {label}
                </a>
              ) : (
                <span className="text-sm text-cream-muted">{label}</span>
              )}
            </NestedStaggerRow>
          ))}
        </NestedStaggerList>
      </InViewItem>
    </div>
  );
}
