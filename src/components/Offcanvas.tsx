"use client";

import { useOffcanvas } from "@/context/OffcanvasContext";
import Link from "next/link";

const Offcanvas = () => {
  const { isMenuOpen, closeMenu } = useOffcanvas();

  return (
    <div
      className={`dark:border-header-border-dark fixed top-0 right-0 z-9999 h-full w-full transform overflow-x-hidden overflow-y-scroll bg-white p-12.5 transition-transform duration-300 ease-out md:w-112.5 dark:border dark:bg-black ${isMenuOpen ? "translate-x-0" : "translate-x-[calc(100%+80px)]"}`}
    >
      <div>
        <span className="bg-blurr absolute -top-10 -left-60 z-[-1] hidden h-100 w-100 rounded-[400px] blur-[150px] dark:inline-block" />
      </div>
      <div>
        <span className="bg-blurr-2 absolute -right-102.5 -bottom-67.5 z-[-1] hidden h-150 w-150 rounded-[600px] blur-[190px] dark:inline-block" />
      </div>
      <div>
        <div className="mb-22.5 flex items-center justify-between">
          <div>
            <button
              className="text-black-5 dark:text-white/60"
              onClick={closeMenu}
            >
              <svg
                width={37}
                height={38}
                viewBox="0 0 37 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.19141 9.80762L27.5762 28.1924"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.19141 28.1924L27.5762 9.80761"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <div className="mb-7.5 h-full pb-15 md:pb-10 lg:hidden">
            <nav>
              <ul className="static block text-lg">
                <li className="relative w-full border-b border-b-black/20 dark:border-b-white/12">
                  <Link
                    href="/"
                    className="text-black-5 relative block py-3.5 leading-none font-medium dark:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li className="relative w-full border-b border-b-black/20 dark:border-b-white/12">
                  <Link
                    href="/projects"
                    className="text-black-5 relative block py-3.5 leading-none font-medium dark:text-white"
                  >
                    Projects
                  </Link>
                </li>
                <li className="relative w-full">
                  <Link
                    href="/contact"
                    className="text-black-5 relative block py-3.5 leading-none font-medium dark:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;
