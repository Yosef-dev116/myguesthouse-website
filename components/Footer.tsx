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

            <div className="flex flex-col gap-4 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between md:col-span-3">
              <p className="text-xs text-cream-muted">
                © 2026 My Guest House. All rights reserved.
              </p>
              <p className="text-xs text-cream-muted">Designed and developed with care.</p>
            </div>
          </InViewItem>
        </InViewGroup>
      </Container>
    </footer>
  );
}
