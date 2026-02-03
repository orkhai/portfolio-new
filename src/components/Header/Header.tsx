"use client";

import { useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-90 w-full p-7.5 px-5 md:p-7.5">
      <div>
        <div className="-mx-3 flex flex-wrap items-center justify-between">
          <Logo />
          <div className="w-auto max-w-full shrink-0 px-3 text-right sm:w-2/3">
            <ThemeToggle />

            <button
              className="relative top-0 right-0 z-3 mt-0 ml-auto inline-block h-7.5 w-7 cursor-pointer align-middle"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span
                className={`absolute left-0 mt-0 block h-0.5 w-full bg-black transition-all duration-300 ease-[cubic-bezier(0.3,0,0.3,1)] dark:bg-white ${menuOpen ? "top-3.5 -rotate-45" : "top-2"}`}
              />
              <span
                className={`absolute bottom-2 left-0 mt-0 block h-0.5 w-full bg-black transition-all duration-300 ease-[cubic-bezier(0.3,0,0.3,1)] dark:bg-white ${menuOpen ? "top-3.5 rotate-45" : "top-auto"}`}
              />
            </button>

            <div
              className={`dark:before:bg-menu-overlay-dark fixed top-0 z-2 h-full w-lg before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-white before:transition-all before:duration-1000 before:ease-[cubic-bezier(0.3,0,0.3,1)] before:content-[''] ${menuOpen ? "visible right-0 opacity-100 before:skew-[0deg,0deg]" : "r-[612px] invisible opacity-0 before:skew-[10deg,0deg]"} `}
            >
              <div
                className={`absolute top-0 left-0 z-3 flex h-[calc(100%-140px)] w-full items-center px-3.75 py-0 md:mt-0 md:h-full md:p-0 ${menuOpen ? "overflow-auto" : "overflow-hidden"}`}
              >
                <div className="relative m-auto w-full max-w-325 p-0 px-5">
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full max-w-full shrink-0 px-3">
                      <div className="relative pl-35 lg:pt-20 lg:pr-15 lg:pb-10 lg:pl-32.5">
                        <ul className="m-0 p-0 text-left">
                          <li className="mb-5">
                            <Link
                              className="relative inline-block align-top text-[22px] leading-none font-bold tracking-wider text-black uppercase dark:text-white"
                              href="/"
                            >
                              Home
                            </Link>
                          </li>
                          <li className="mb-5">
                            <Link
                              className="relative inline-block align-top text-[22px] leading-none font-bold tracking-wider text-black uppercase dark:text-white"
                              href="/projects"
                            >
                              Projects
                            </Link>
                          </li>
                          <li className="mb-5">
                            <Link
                              className="relative inline-block align-top text-[22px] leading-none font-bold tracking-wider text-black uppercase dark:text-white"
                              href="/contact"
                            >
                              Contact
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="relative z-3 mt-7.5 ml-35 text-left opacity-100 lg:mt-0 lg:ml-32.5">
                        <a
                          href="https://github.com/orkhai"
                          target="blank"
                          className="relative mr-3.5 inline-block align-top leading-none text-black opacity-100 dark:text-white"
                        >
                          <FaGithub size={20} />
                        </a>
                        <a
                          href="https://twitter.com/orkhai_"
                          target="blank"
                          className="relative mr-3.5 inline-block align-top leading-none text-black opacity-100 dark:text-white"
                        >
                          <FaXTwitter size={20} />
                        </a>
                        <a
                          href="https://linkedin.com/in/orkhai"
                          target="blank"
                          className="relative mr-3.5 inline-block align-top leading-none text-black opacity-100 dark:text-white"
                        >
                          <FaLinkedinIn size={20} />
                        </a>
                      </div>
                      <div className="dark:bg-vline-dark dark:after:bg-vline-dark-2 dark:after:border-vline-dark dark:before:bg-vline-dark-2 dark:before:border-vline-dark absolute -top-15 -bottom-17.5 left-27.5 z-3 block w-0.5 bg-black before:absolute before:-top-3.75 before:-left-3.75 before:z-1 before:h-7.5 before:w-7.5 before:rounded-[30px] before:border-2 before:border-black before:bg-white before:shadow-[5px_5px_rgba(0,0,0,0.2)] before:content-[''] after:absolute after:-bottom-3.75 after:-left-3.75 after:z-1 after:h-7.5 after:w-7.5 after:rounded-[30px] after:border-2 after:border-black after:bg-white after:shadow-[5px_5px_rgba(0,0,0,0.2)] after:content-[''] lg:top-0 lg:left-18.75 dark:opacity-60 dark:before:border-2 dark:before:shadow-[5px_5px_rgba(255,255,255,0.1)] dark:after:border-2 dark:after:shadow-[5px_5px_rgba(255,255,255,0.1)]">
                        <span className="absolute -bottom-47 -left-42 block h-56.5 w-56.5 bg-contain bg-no-repeat dark:opacity-60" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-full h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
