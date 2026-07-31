import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { CONTACT } from "@/lib/site-config";
import { FOCUS_RING } from "@/lib/ui";

export function DetailCard() {
  return (
    <div className="rounded-2xl border border-hairline bg-charcoal/80 p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] backdrop-blur-sm sm:p-7">
      <span aria-hidden="true" className="mb-4 block h-px w-8 bg-brass" />
      <h3 className="text-lg font-medium text-cream">Simple, direct booking</h3>
      <p className="mt-2 text-sm leading-relaxed text-cream-muted">
        Speak directly with the guest house to ask questions, confirm availability, or plan your
        stay.
      </p>

      <div className="mt-5 flex flex-col gap-3 text-sm">
        <Link
          href={CONTACT.phoneHref}
          className={`inline-flex items-center gap-2.5 rounded-sm text-cream transition-colors hover:text-brass-light ${FOCUS_RING}`}
        >
          <Phone className="h-4 w-4 text-brass" aria-hidden="true" />
          {CONTACT.phoneDisplay}
        </Link>
        <Link
          href={CONTACT.emailHref}
          className={`inline-flex items-center gap-2.5 rounded-sm text-cream transition-colors hover:text-brass-light ${FOCUS_RING}`}
        >
          <Mail className="h-4 w-4 text-brass" aria-hidden="true" />
          {CONTACT.emailDisplay}
        </Link>
      </div>
    </div>
  );
}
