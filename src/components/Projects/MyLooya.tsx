import Image from "next/image";
import ProjectCarousel from "../ProjectCarousel";
import { Globe } from "lucide-react";

const MyLooya = () => {
  return (
    <section className="border-border bg-background flex flex-col border-t px-5 py-10 sm:px-20 xl:px-52">
      <div className="flex flex-col gap-11 2xl:flex-row">
        <div className="border-border relative flex aspect-4/3 w-full items-center justify-center rounded-lg border 2xl:basis-[70%]">
          <div className="absolute h-full w-full overflow-hidden opacity-40 transition-opacity duration-1000">
            <Image
              alt="MyLooya project image background"
              width={100}
              height={100}
              className="animate-scale-rotate absolute top-0 left-0 -z-5 h-full w-full rounded-full object-cover opacity-40 blur-3xl filter dark:opacity-20"
              style={{ color: "transparent" }}
              src="/images/mylooya.svg"
            />
          </div>
          <ProjectCarousel
            images={[
              "/images/mylooya-1.png",
              "/images/mylooya-2.png",
              "/images/mylooya.svg",
              "/images/mylooya-3.png",
            ]}
            link="https://www.mylooya.com"
          />
        </div>
        <div className="mt-8 w-full space-y-10 2xl:basis-[30%]">
          <div>
            <h1 className="text-3xl font-bold">MyLooya</h1>
            <p className="text-lg text-gray-500">
              A full-stack law office management platform designed specifically
              for African legal workflows, digitizing and automating
              traditionally manual, paper-heavy processes used by law firms.
            </p>
            <div className="bg-border mt-4 h-px w-full shrink-0" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">What Is It ?</h2>
            <p className="mt-4 text-lg text-balance">
              The system enables law firms to manage clients, briefs, documents,
              billing, internal communication, and reporting from a single,
              secure web application. The project includes both a feature-rich
              internal web app and a high-conversion public landing page for
              marketing, onboarding and content publishing.
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
                Tailwind CSS
              </div>
              <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                Node.js
              </div>
              <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                Express
              </div>
              <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                MongoDB
              </div>
            </div>
          </div>
          <div className="bg-border h-px w-full shrink-0" />
          <a
            className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 items-center justify-center rounded-md border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
            href="https://www.mylooya.com"
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

export default MyLooya;
