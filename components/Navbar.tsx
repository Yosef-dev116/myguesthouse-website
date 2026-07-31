"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { Container } from "./layout/Container";
import { NAV_LINKS, CONTACT } from "@/lib/site-config";

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-light focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal";

const EASE = [0.22, 1, 0.36, 1] as const;

const NAV_LINK_BASE =
  "relative pb-1 text-sm font-medium transition-colors duration-300 after:content-[''] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-brass after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-cream hover:after:scale-x-100";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "border-b border-hairline bg-charcoal-glass shadow-lg shadow-black/20 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <nav aria-label="Primary" className="flex items-center justify-between py-5 md:py-6">
          <Link href="#top" aria-label="My Guest House — Home" className={`rounded-sm ${FOCUS_RING}`}>
            <Logo />
          </Link>

          <div className="flex items-center gap-10">
            <ul className="hidden items-center gap-9 md:flex">
              {NAV_LINKS.map((link) => {
                const isActive = link.href === "#top";
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`${NAV_LINK_BASE} rounded-sm ${
                        isActive ? "text-cream after:scale-x-100" : "text-cream-muted"
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
              className={`hidden items-center rounded-full border border-brass/60 bg-brass/10 px-5 py-2.5 text-sm font-semibold tracking-wide text-brass-light transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brass/20 hover:shadow-[0_8px_24px_-10px_rgba(184,134,62,0.55)] active:translate-y-0 active:scale-[0.97] md:inline-flex ${FOCUS_RING}`}
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
              className={`inline-flex items-center justify-center rounded-md p-2 text-cream transition-colors md:hidden ${FOCUS_RING}`}
            >
              {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden border-t border-hairline bg-charcoal-glass backdrop-blur-lg md:hidden"
          >
            <Container>
              <ul className="flex flex-col gap-1 py-4">
                {NAV_LINKS.map((link, index) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      ref={index === 0 ? firstLinkRef : undefined}
                      onClick={() => setOpen(false)}
                      className={`block rounded-md px-2 py-3 text-base font-medium text-cream-muted transition-colors duration-300 hover:bg-cream/5 hover:text-cream ${FOCUS_RING}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    href={CONTACT.phoneHref}
                    onClick={() => setOpen(false)}
                    className={`inline-flex w-full items-center justify-center rounded-full border border-brass/60 bg-brass/10 px-5 py-3 text-sm font-semibold tracking-wide text-brass-light transition-colors duration-300 hover:bg-brass/20 ${FOCUS_RING}`}
                  >
                    Book Your Stay
                  </Link>
                </li>
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
