import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./layout/Container";
import { InViewGroup, InViewItem } from "./motion/InView";
import { NAV_LINKS, CONTACT } from "@/lib/site-config";
import { FOCUS_RING } from "@/lib/ui";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-charcoal pt-24 pb-10 md:pt-28">
      <Container>
        <InViewGroup>
          <InViewItem className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
            <div>
              <Logo />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-muted">
                Comfortable, modern accommodation in Addis Ababa designed for peaceful stays.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
                Quick Links
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`rounded-sm text-sm text-cream-muted transition-colors hover:text-cream ${FOCUS_RING}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
                Contact
              </h3>
              <ul className="mt-5 flex flex-col gap-3 text-sm">
                <li>
                  <a
                    href={CONTACT.phoneHref}
                    className={`rounded-sm text-cream-muted transition-colors hover:text-cream ${FOCUS_RING}`}
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.secondaryPhoneHref}
                    className={`rounded-sm text-cream-muted transition-colors hover:text-cream ${FOCUS_RING}`}
                  >
                    {CONTACT.secondaryPhoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.emailHref}
                    className={`rounded-sm text-cream-muted transition-colors hover:text-cream ${FOCUS_RING}`}
                  >
                    {CONTACT.emailDisplay}
                  </a>
                </li>
                <li className="text-cream-muted">{CONTACT.location}</li>
              </ul>
            </div>

            <div className="flex flex-col items-center gap-8 pt-4 md:col-span-3">
              <span aria-hidden="true" className="flex items-center gap-3">
                <span className="h-px w-9 bg-brass/70" />
                <span className="h-2 w-2 rotate-45 border border-brass" />
                <span className="h-px w-9 bg-brass/70" />
              </span>

              <div className="flex w-full flex-col gap-3 border-t border-hairline pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                <p className="text-xs text-cream-muted">
                  © 2026 My Guest House. All rights reserved.
                </p>
                <p className="text-xs text-cream-muted">Designed and developed with care.</p>
              </div>
            </div>
          </InViewItem>
        </InViewGroup>
      </Container>
    </footer>
  );
}
