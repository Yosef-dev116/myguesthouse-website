import Image from "next/image";
import lobbyImage from "@/public/images/lobby.png";
import { Container } from "./layout/Container";
import { DetailCard } from "./DetailCard";
import { InViewGroup, InViewItem } from "./motion/InView";

const SUPPORTING_POINTS = [
  "Warm, personal hospitality",
  "Peaceful atmosphere",
  "Convenient Addis Ababa location",
  "Direct and simple booking",
];

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-28 overflow-x-clip border-t border-hairline bg-charcoal-elevated py-24 sm:py-28 md:py-36"
    >
      <Container>
        <div className="grid gap-16 md:grid-cols-12 md:items-start md:gap-x-10">
          <InViewGroup className="md:col-span-5">
            <InViewItem>
              <div className="relative aspect-square w-full overflow-hidden rounded-t-[4rem] rounded-b-xl shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]">
                <Image
                  src={lobbyImage}
                  alt="The lobby at My Guest House, with a modern glass and timber partition and greenery near the entrance"
                  fill
                  sizes="(min-width: 768px) 38vw, 90vw"
                  placeholder="blur"
                  className="scale-[1.2] object-cover object-[50%_45%]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
                />
              </div>
            </InViewItem>

            <InViewItem className="relative z-10 mx-6 -mt-8 max-w-xs sm:mx-8 md:mx-0 md:ml-10 md:-mt-14">
              <DetailCard />
            </InViewItem>
          </InViewGroup>

          <InViewGroup className="flex flex-col items-start gap-8 md:col-span-7 md:col-start-6 md:pt-4">
            <InViewItem className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-brass" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cream-muted">
                About My Guest House
              </span>
            </InViewItem>

            <InViewItem>
              <h2 className="text-balance text-3xl font-medium leading-[1.15] tracking-tight text-cream sm:text-4xl md:text-5xl">
                A calm place to return to after a day in Addis.
              </h2>
            </InViewItem>

            <InViewItem>
              <p className="max-w-[52ch] text-lg leading-relaxed text-cream-muted">
                My Guest House offers a welcoming stay shaped by comfort, personal service, and a
                relaxed atmosphere. Whether guests are visiting Addis Ababa for work, family, or
                exploration, the aim is simple: provide a clean, peaceful place that feels easy to
                settle into.
              </p>
            </InViewItem>

            <InViewItem className="w-full">
              <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {SUPPORTING_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass"
                    />
                    <span className="text-cream-muted">{point}</span>
                  </li>
                ))}
              </ul>
            </InViewItem>
          </InViewGroup>
        </div>
      </Container>
    </section>
  );
}
