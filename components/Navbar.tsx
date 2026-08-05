"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { Container } from "./layout/Container";
import { NAV_LINKS, CONTACT } from "@/lib/site-config";
import { FOCUS_RING } from "@/lib/ui";

const EASE = [0.22, 1, 0.36, 1] as const;

const NAV_LINK_BASE =
  "relative pb-1.5 text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-200 after:content-[''] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-brass after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100";

/** Probe point (px from top) used to sample which section sits behind the floating navbar. */
const NAV_PROBE_Y = 64;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#top");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const lightSections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-nav-theme="light"]')
    );

    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      setIsLight(
        lightSections.some((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= NAV_PROBE_Y && rect.bottom >= NAV_PROBE_Y;
        })
      );
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    firstLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <Container className="pt-4 md:pt-5">
        <nav
          aria-label="Primary"
          className={`flex items-center justify-between rounded-full px-5 py-3.5 transition-all duration-200 ease-out md:px-7 ${
            isLight
              ? "border border-charcoal/10 bg-cream/75 shadow-lg shadow-charcoal/5 backdrop-blur-xl"
              : scrolled
                ? "border border-cream/15 bg-cream/[0.08] shadow-lg shadow-black/10 backdrop-blur-xl"
                : "border border-cream/10 bg-cream/[0.04] backdrop-blur-md"
          }`}
        >
          <Link
            href="#top"
            aria-label="My Guest House — Home"
            className={`relative rounded-sm ${FOCUS_RING}`}
          >
            {/* Crossfade rather than swap so the mark never hard-cuts out of sync with the pill's background fade. */}
            <span className={`block transition-opacity duration-200 ${isLight ? "opacity-0" : "opacity-100"}`}>
              <Logo compact />
            </span>
            <span
              className={`absolute inset-0 block transition-opacity duration-200 ${isLight ? "opacity-100" : "opacity-0"}`}
            >
              <Logo compact light />
            </span>
          </Link>

          <div className="flex items-center gap-10">
            <ul className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map((link) => {
                const isActive = link.href === activeHref;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`${NAV_LINK_BASE} rounded-sm ${
                        isLight
                          ? `hover:text-charcoal ${isActive ? "text-charcoal after:scale-x-100" : "text-charcoal/60"}`
                          : `hover:text-cream ${isActive ? "text-cream after:scale-x-100" : "text-cream-muted"}`
                      } ${FOCUS_RING}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href={CONTACT.phoneHref}
              className={`hidden items-center rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-200 ease-out md:inline-flex ${FOCUS_RING} ${
                isLight
                  ? "border-brass/60 text-charcoal hover:border-brass hover:bg-brass/10"
                  : "border-brass/50 text-brass-light hover:border-brass hover:bg-brass/10"
              }`}
            >
              Book Your Stay
            </Link>

            <button
              ref={toggleRef}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
              className={`inline-flex items-center justify-center rounded-full p-2 transition-colors duration-200 md:hidden ${FOCUS_RING} ${
                isLight ? "text-charcoal" : "text-cream"
              }`}
            >
              {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className={`mt-3 overflow-hidden rounded-2xl border shadow-lg backdrop-blur-xl md:hidden ${
                isLight
                  ? "border-charcoal/10 bg-cream/90 shadow-charcoal/5"
                  : "border-cream/15 bg-cream/[0.06] shadow-black/10"
              }`}
            >
              <ul className="flex flex-col gap-1 px-3 py-4">
                {NAV_LINKS.map((link, index) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      ref={index === 0 ? firstLinkRef : undefined}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-3 py-3 text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-200 ${FOCUS_RING} ${
                        isLight
                          ? "text-charcoal/70 hover:bg-charcoal/5 hover:text-charcoal"
                          : "text-cream-muted hover:bg-cream/5 hover:text-cream"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="px-3 pt-3">
                  <Link
                    href={CONTACT.phoneHref}
                    onClick={() => setOpen(false)}
                    className={`inline-flex w-full items-center justify-center rounded-full border px-5 py-3 text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-200 ${FOCUS_RING} ${
                      isLight
                        ? "border-brass/60 text-charcoal hover:border-brass hover:bg-brass/10"
                        : "border-brass/50 text-brass-light hover:border-brass hover:bg-brass/10"
                    }`}
                  >
                    Book Your Stay
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}
