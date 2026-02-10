import { SendHorizonal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="border-border bg-background flex min-h-250 flex-col border-t px-5 py-10 sm:px-20 xl:px-52">
      <div>
        <h1 className="mb-2 text-4xl font-bold">Projects</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Here you will find a selection of projects I have worked on.
        </p>
      </div>

      <div
        className="grid grid-cols-1 gap-x-6 pt-8 md:hidden"
        style={{
          alignItems: "start",
        }}
      >
        <div className="grid grid-cols-[minmax(0px,1fr)] gap-y-6">
          <Link href="/projects/think-like-a-pianist">
            <div className="dark:border-border group relative overflow-hidden rounded-lg border border-gray-300">
              <div className="relative">
                <Image
                  src="/images/tlp.png"
                  alt="Preview of Think Like a Piaint website"
                  height={600}
                  width={600}
                  className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ color: "transparent" }}
                />

                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <div className="p-4">
                    <h1 className="text-xl font-bold text-white">
                      Think Like a Pianist
                    </h1>
                    <p className="text-white">
                      An e-learning platform for pianists to learn and grow on
                      the keys
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        React
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Node.js
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Express
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Redux
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        MongoDB
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/projects/mylooya">
            <div className="dark:border-border group relative overflow-hidden rounded-lg border border-gray-300">
              <div className="relative">
                <Image
                  src="/images/mylooya.svg"
                  alt="Preview of MyLooya"
                  height={600}
                  width={600}
                  className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ color: "transparent" }}
                />

                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <div className="p-4">
                    <h1 className="text-xl font-bold text-white">MyLooya</h1>
                    <p className="text-white">
                      A full-stack law office management platform designed
                      specifically for African legal workflows
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Next.js
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Tailwind CSS
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Node.js
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Express
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        MongoDB
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <div className="flex min-h-62.5 items-center justify-center rounded-lg">
            <div className="flex flex-col items-center gap-4">
              <Image
                alt="A smiling face shaped like a message bubble"
                width={80}
                height={80}
                src="/images/contact_smile.webp"
                style={{ color: "transparent" }}
              />
              <h1 className="text-xl font-bold">Let&#39;s Work Together!</h1>
              <p className="text-gray-500">
                Have a project in mind? Let&#39;s talk about it.
              </p>
              <a
                className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 items-center justify-center rounded-md border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                href="mailto:contact@orkhai.dev"
              >
                <SendHorizonal className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hidden grid-cols-2 gap-x-3 pt-8 md:grid"
        style={{
          alignItems: "start",
        }}
      >
        <div className="grid grid-cols-[minmax(0px,1fr)] gap-y-3">
          <Link href="/projects/think-like-a-pianist">
            <div className="dark:border-border group relative overflow-hidden rounded-lg border border-gray-300">
              <div className="relative">
                <Image
                  src="/images/tlp.png"
                  alt="Preview of Think Like a Piaint website"
                  height={600}
                  width={600}
                  className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ color: "transparent" }}
                />

                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <div className="p-4">
                    <h1 className="text-xl font-bold text-white">
                      Think Like a Pianist
                    </h1>
                    <p className="text-white">
                      An e-learning platform for pianists to learn and grow on
                      the keys
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        React
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Node.js
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Express
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Redux
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        MongoDB
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-[minmax(0px,1fr)] gap-y-3">
          <Link href="/projects/mylooya">
            <div className="dark:border-border group relative overflow-hidden rounded-lg border border-gray-300">
              <div className="relative">
                <Image
                  src="/images/mylooya.svg"
                  alt="Preview of MyLooya"
                  height={600}
                  width={600}
                  className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ color: "transparent" }}
                />

                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <div className="p-4">
                    <h1 className="text-xl font-bold text-white">MyLooya</h1>
                    <p className="text-white">
                      A full-stack law office management platform designed
                      specifically for African legal workflows
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Next.js
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Tailwind CSS
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Node.js
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Express
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        MongoDB
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <div className="flex min-h-62.5 items-center justify-center rounded-lg">
            <div className="flex flex-col items-center gap-4">
              <Image
                alt="A smiling face shaped like a message bubble"
                width={80}
                height={80}
                src="/images/contact_smile.webp"
                style={{ color: "transparent" }}
              />
              <h1 className="text-xl font-bold">Let&#39;s Work Together!</h1>
              <p className="text-gray-500">
                Have a project in mind? Let&#39;s talk about it.
              </p>
              <a
                className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 items-center justify-center rounded-md border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                href="mailto:contact@orkhai.dev"
              >
                <SendHorizonal className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
