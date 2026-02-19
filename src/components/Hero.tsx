import { AtSign, GalleryHorizontalEnd } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[url(/images/square.svg)] bg-size-[30px] bg-repeat text-start">
      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden p-6 after:absolute after:top-0 after:left-auto after:z-[-1] after:h-[90%] after:w-175 after:bg-[radial-gradient(at_38%_100%,hsla(331_100%_50%)_0px,transparent_40%),radial-gradient(at_97%_50%,hsla(0_100%_59%)_0px,transparent_50%),radial-gradient(at_80%_130%,hsla(198_100%_50%)_0px,transparent_50%),radial-gradient(at_20%_160%,hsla(34_100%_65%)_0px,transparent_50%)] after:blur-[100px] after:content-[''] dark:after:bg-[radial-gradient(at_38%_100%,hsla(0_100%_50%/0.3)_0px,transparent_40%),radial-gradient(at_97%_50%,hsla(262_100%_59%/0.38)_0px,transparent_50%),radial-gradient(at_80%_130%,hsla(198_100%_50%/0.62)_0px,transparent_50%),radial-gradient(at_20%_160%,hsla(34_100%_65%/0.37)_0px,transparent_50%)]">
        <div className="grid grid-cols-1">
          <div className="flex flex-col gap-10 pb-8 md:flex-row md:items-center">
            <Image
              alt="3D Avatar"
              priority
              width={128}
              height={128}
              className="w-32"
              style={{ color: "transparent" }}
              src="/images/3d-avatar.png"
            />
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Hey, I&#39;m{" "}
              <span className="bg-[linear-gradient(180deg,hsl(263,31%,15%)_0%,#000_200%)] bg-clip-text text-transparent dark:bg-[linear-gradient(180deg,hsl(263,77%,73%)_0%,#000_200%)]">
                Orkhai
              </span>
              <div className="inline-block">✨</div>
              <br />A{" "}
              <span className="bg-[linear-gradient(180deg,hsl(263,31%,15%)_0%,#000_200%)] bg-clip-text text-transparent dark:bg-[linear-gradient(180deg,hsl(263,77%,73%)_0%,#000_200%)]">
                Software Developer
              </span>
            </h1>
          </div>
          <p className="bg-foreground max-w-187.5 bg-clip-text text-xl text-transparent">
            A <span className="font-bold">fullstack and mobile developer</span>{" "}
            with solid expertise and passionate about crafting seamless user
            experiences at the intersection of creativity and functionality.
          </p>
          <div className="mt-8 flex max-w-150 flex-col justify-between gap-8 lg:flex-row lg:items-center lg:gap-0">
            <div className="flex gap-2 lg:gap-4">
              <a
                className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 items-center justify-center rounded-md border px-4 py-2 text-sm font-medium whitespace-nowrap shadow-xl transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                href="mailto:contact@orkhai.dev"
              >
                <AtSign className="mr-2 h-5 w-5" />
                Contact Me
              </a>
              <Link
                className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 items-center justify-center rounded-md border px-4 py-2 text-sm font-medium whitespace-nowrap shadow-xl transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                href="/case-studies"
              >
                <GalleryHorizontalEnd className="mr-2 h-5 w-5" />
                View Work
              </Link>
            </div>
            <div className="bg-foreground hidden h-4 w-px shrink-0 lg:block" />
            <div className="flex items-center gap-14 px-5 pb-10 text-xl sm:pb-0 md:gap-8">
              <a href="https://github.com/orkhai" target="_blank">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/orkhai" target="_blank">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
              <a href="https://twitter.com/orkhai_" target="_blank">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
