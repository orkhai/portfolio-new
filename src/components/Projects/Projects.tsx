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
          <Link href="/projects/mylooya">
            <div className="dark:border-border group relative overflow-hidden rounded-lg border border-gray-300">
              <div className="relative">
                <Image
                  src="/images/mylooya-1.png"
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
                      specifically for African legal workflows, digitizing and
                      automating traditionally manual, paper-heavy processes
                      used by law firms.
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
          <Link href="/projects/tlp">
            <div className="dark:border-border group relative overflow-hidden rounded-lg border border-gray-300">
              <div className="relative">
                <Image
                  src="/images/tlp-1.png"
                  alt="Preview of Think Like a Pianist"
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
                      A full-stack and mobile subscription-based e-learning
                      platform designed to help users learn and improve their
                      piano skills through structured video lessons.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        React
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Flutter
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
          <Link href="/projects/earnabler">
            <div className="dark:border-border group relative overflow-hidden rounded-lg border border-gray-300">
              <div className="relative">
                <Image
                  src="/images/earnabler.png"
                  alt="Preview of EARNabler"
                  height={600}
                  width={600}
                  className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ color: "transparent" }}
                />

                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <div className="p-4">
                    <h1 className="text-xl font-bold text-white">EARNabler</h1>
                    <p className="text-white">
                      A full-stack investment and financial education product
                      that allows users to register, complete KYC verification,
                      and invest in curated investment options across multiple
                      sectors.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Next.js
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Flutter
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
          <Link href="/projects/tta">
            <div className="dark:border-border group relative overflow-hidden rounded-lg border border-gray-300">
              <div className="relative">
                <Image
                  src="/images/tta.png"
                  alt="Preview of TTA"
                  height={600}
                  width={600}
                  className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ color: "transparent" }}
                />

                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <div className="p-4">
                    <h1 className="text-xl font-bold text-white">
                      The Trusted Advisors
                    </h1>
                    <p className="text-white">
                      A complete redesign of the website for a reputable law
                      firm based in Nigeria, focused on modernizing the
                      firm&#39;s digital presence while preserving its
                      professional credibility.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Next.js
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        CSS
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Headless CMS
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        SEO-optimized
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/projects/dikins">
            <div className="dark:border-border group relative overflow-hidden rounded-lg border border-gray-300">
              <div className="relative">
                <Image
                  src="/images/dikins.png"
                  alt="Preview of Dikins"
                  height={600}
                  width={600}
                  className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ color: "transparent" }}
                />

                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <div className="p-4">
                    <h1 className="text-xl font-bold text-white">
                      Dikins Multiventures
                    </h1>
                    <p className="text-white">
                      A modern corporate website built for a consumer goods
                      company producing naturally processed, organic products
                      focused on promoting healthy living.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Next.js
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        React
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        CSS
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        SEO-optimized
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/projects/bmo">
            <div className="dark:border-border group relative overflow-hidden rounded-lg border border-gray-300">
              <div className="relative">
                <Image
                  src="/images/bmo.png"
                  alt="Preview of BMO"
                  height={600}
                  width={600}
                  className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ color: "transparent" }}
                />

                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <div className="p-4">
                    <h1 className="text-xl font-bold text-white">
                      BMO Foundation
                    </h1>
                    <p className="text-white">
                      A full-stack web platform built for a charitable
                      foundation focused on education, women empowerment, and
                      community outreach.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Next.js
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
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Payment integration
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/projects/danso">
            <div className="dark:border-border group relative overflow-hidden rounded-lg border border-gray-300">
              <div className="relative">
                <Image
                  src="/images/danso.png"
                  alt="Preview of Danso"
                  height={600}
                  width={600}
                  className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ color: "transparent" }}
                />

                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <div className="p-4">
                    <h1 className="text-xl font-bold text-white">
                      Danso Group
                    </h1>
                    <p className="text-white">
                      A corporate website built for an oil and gas company with
                      diversified business interests, designed to clearly
                      present the company&#39;s operations, expertise, and
                      service offerings across multiple sectors.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        React
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        CSS
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        SEO-optimized
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
          <Link href="/projects/mylooya">
            <div className="dark:border-border group relative overflow-hidden rounded-lg border border-gray-300">
              <div className="relative">
                <Image
                  src="/images/mylooya-1.png"
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
                      specifically for African legal workflows, digitizing and
                      automating traditionally manual, paper-heavy processes
                      used by law firms.
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
          <Link href="/projects/earnabler">
            <div className="dark:border-border group relative overflow-hidden rounded-lg border border-gray-300">
              <div className="relative">
                <Image
                  src="/images/earnabler.png"
                  alt="Preview of EARNabler"
                  height={600}
                  width={600}
                  className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ color: "transparent" }}
                />

                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <div className="p-4">
                    <h1 className="text-xl font-bold text-white">EARNabler</h1>
                    <p className="text-white">
                      A full-stack investment and financial education product
                      that allows users to register, complete KYC verification,
                      and invest in curated investment options across multiple
                      sectors.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Next.js
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Flutter
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
          <Link href="/projects/dikins">
            <div className="dark:border-border group relative overflow-hidden rounded-lg border border-gray-300">
              <div className="relative">
                <Image
                  src="/images/dikins.png"
                  alt="Preview of Dikins"
                  height={600}
                  width={600}
                  className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ color: "transparent" }}
                />

                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <div className="p-4">
                    <h1 className="text-xl font-bold text-white">
                      Dikins Multiventures
                    </h1>
                    <p className="text-white">
                      A modern corporate website built for a consumer goods
                      company producing naturally processed, organic products
                      focused on promoting healthy living.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Next.js
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        React
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        CSS
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        SEO-optimized
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/projects/danso">
            <div className="dark:border-border group relative overflow-hidden rounded-lg border border-gray-300">
              <div className="relative">
                <Image
                  src="/images/danso.png"
                  alt="Preview of Danso"
                  height={600}
                  width={600}
                  className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ color: "transparent" }}
                />

                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <div className="p-4">
                    <h1 className="text-xl font-bold text-white">
                      Danso Group
                    </h1>
                    <p className="text-white">
                      A corporate website built for an oil and gas company with
                      diversified business interests, designed to clearly
                      present the company&#39;s operations, expertise, and
                      service offerings across multiple sectors.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        React
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        CSS
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        SEO-optimized
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-[minmax(0px,1fr)] gap-y-3">
          <Link href="/projects/tlp">
            <div className="dark:border-border group relative overflow-hidden rounded-lg border border-gray-300">
              <div className="relative">
                <Image
                  src="/images/tlp-1.png"
                  alt="Preview of Think Like a Pianist"
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
                      A full-stack and mobile subscription-based e-learning
                      platform designed to help users learn and improve their
                      piano skills through structured video lessons.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        React
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Flutter
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
          <Link href="/projects/tta">
            <div className="dark:border-border group relative overflow-hidden rounded-lg border border-gray-300">
              <div className="relative">
                <Image
                  src="/images/tta.png"
                  alt="Preview of TTA"
                  height={600}
                  width={600}
                  className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ color: "transparent" }}
                />

                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <div className="p-4">
                    <h1 className="text-xl font-bold text-white">
                      The Trusted Advisors
                    </h1>
                    <p className="text-white">
                      A complete redesign of the website for a reputable law
                      firm based in Nigeria, focused on modernizing the
                      firm&#39;s digital presence while preserving its
                      professional credibility.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Next.js
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        CSS
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Headless CMS
                      </div>
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        SEO-optimized
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/projects/bmo">
            <div className="dark:border-border group relative overflow-hidden rounded-lg border border-gray-300">
              <div className="relative">
                <Image
                  src="/images/bmo.png"
                  alt="Preview of BMO"
                  height={600}
                  width={600}
                  className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ color: "transparent" }}
                />

                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <div className="p-4">
                    <h1 className="text-xl font-bold text-white">
                      BMO Foundation
                    </h1>
                    <p className="text-white">
                      A full-stack web platform built for a charitable
                      foundation focused on education, women empowerment, and
                      community outreach.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Next.js
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
                      <div className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Payment integration
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
