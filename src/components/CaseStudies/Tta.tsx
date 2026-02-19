import { Globe } from "lucide-react";
import Image from "next/image";
import ProjectCarousel from "../ProjectCarousel";

const Tta = () => {
  return (
    <section className="border-border bg-background flex flex-col border-t px-5 py-10 sm:px-20 xl:px-52">
      <div className="flex flex-col gap-11 2xl:flex-row">
        <div className="border-border relative flex aspect-4/3 w-full items-center justify-center rounded-lg border 2xl:basis-[70%]">
          <div className="absolute h-full w-full overflow-hidden opacity-40 transition-opacity duration-1000">
            <Image
              alt="TTA project image background"
              width={100}
              height={100}
              className="animate-scale-rotate absolute top-0 left-0 -z-5 h-full w-full rounded-full object-cover opacity-40 blur-3xl filter dark:opacity-20"
              style={{ color: "transparent" }}
              src="/images/tta.png"
            />
          </div>
          <ProjectCarousel
            images={[
              "/images/tta.png",
              "/images/tta-2.png",
              "/images/tta-3.png",
            ]}
            link="https://trustedadvisorslaw.com"
          />
        </div>
        <div className="mt-8 w-full space-y-10 2xl:basis-[30%]">
          <div>
            <h1 className="text-3xl font-bold">The Trusted Advisors</h1>
            <p className="text-lg text-gray-500">
              A complete redesign of the website for a reputable law firm based
              in Nigeria, focused on modernizing the firm&#39;s digital presence
              while preserving its professional credibility.
            </p>
            <div className="bg-border mt-4 h-px w-full shrink-0" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">What Is It ?</h2>
            <p className="mt-4 text-lg text-balance">
              The project introduced a refreshed visual identity, improved
              content structure, and a CMS-driven publishing system to allow the
              firm to manage articles and updates independently.
            </p>
          </div>
          <div className="bg-border h-px w-full shrink-0" />
          <div>
            <h2 className="text-2xl font-bold">Tools &amp; Technologies</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                Next.js
              </div>
              <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                CSS
              </div>
              <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                Headless CMS
              </div>
              <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                SEO-optimized
              </div>
            </div>
          </div>
          <div className="bg-border h-px w-full shrink-0" />
          <a
            className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 items-center justify-center rounded-md border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
            href="https://trustedadvisorslaw.com"
            target="_blank"
          >
            <Globe className="mr-2 h-4 w-4" />
            Visit Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tta;
