"use client";

import { useOffcanvas } from "@/context/OffcanvasContext";
import { useTheme } from "@/context/ThemeContext";

const Buttons = () => {
  const { openMenu } = useOffcanvas();
  const { toggleTheme } = useTheme();

  return (
    <div className="w-1/2 shrink-0 px-3 md:w-7/12 lg:w-3/12 xl:w-4/12">
      <div className="flex items-center justify-end">
        <div className="border-none text-center">
          <label
            className="border-header-toggle dark:border-header-toggle-dark relative z-1 m-auto flex w-18.5 cursor-pointer items-center rounded-[100px] border-[1.5px] bg-transparent p-0.75 font-medium text-white"
            htmlFor="theme"
          >
            <span className="ml-1.25 flex h-6.5 w-6.5 -translate-x-1 -translate-y-px items-center justify-center leading-5.25">
              <svg
                className="translate-x-px translate-y-px"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.0448 11.0454C9.70165 11.0454 11.0448 9.7023 11.0448 8.04544C11.0448 6.38859 9.70165 5.04544 8.0448 5.04544C6.38795 5.04544 5.0448 6.38859 5.0448 8.04544C5.0448 9.7023 6.38795 11.0454 8.0448 11.0454Z"
                  fill="currentColor"
                />
                <path
                  d="M8 1.5V2.68182"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 13.3182V14.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.40198 3.40277L4.24107 4.24186"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.7584 11.7581L12.5975 12.5972"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.5 8H2.68182"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3174 8H14.4992"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.40198 12.5972L4.24107 11.7581"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.7584 4.24186L12.5975 3.40277"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <input
              type="checkbox"
              className="hidden"
              id="theme"
              onChange={() => {
                toggleTheme();
              }}
            />
            <i className="dark:text-black-1 bg-black-5 absolute top-1/2 left-1.25 z-[-1] h-6.5 w-6.5 -translate-y-1/2 rounded-[30px] text-white transition-all duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] dark:left-[calc(100%-31px)] dark:bg-white" />
            <span className="ml-0.75 flex h-6.5 w-6.5 translate-x-0.5 translate-y-0 items-center justify-center leading-5.25 text-black">
              <svg
                className="translate-x-px translate-y-px"
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.54054C11.8949 7.67776 11.4681 8.76152 10.7696 9.66503C10.071 10.5685 9.12957 11.2544 8.05544 11.6424C6.9813 12.0304 5.81888 12.1044 4.70419 11.8559C3.5895 11.6073 2.56866 11.0465 1.7611 10.2389C0.953538 9.43135 0.39267 8.4105 0.144121 7.29581C-0.104428 6.18112 -0.0303768 5.0187 0.357609 3.94457C0.745595 2.87043 1.43147 1.929 2.33497 1.23045C3.23848 0.531888 4.32224 0.105093 5.45946 0C4.79365 0.900756 4.47327 2.01056 4.55656 3.12758C4.63986 4.24459 5.12132 5.2946 5.91336 6.08664C6.7054 6.87869 7.75541 7.36014 8.87242 7.44344C9.98944 7.52673 11.0992 7.20635 12 6.54054Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </label>
        </div>

        <div className="ml-5 h-4 leading-4 lg:hidden">
          <button
            className="relative inline-block h-4 w-5.5 -translate-y-1.75 leading-4"
            onClick={openMenu}
          >
            <span className="bg-black-5 before:bg-black-5 after:bg-black-5 absolute left-0 h-0.5 w-5.5 rounded-[3px] content-[''] before:absolute before:left-0 before:-mt-1.75 before:h-0.5 before:w-2.5 before:rounded-[3px] before:content-[''] after:absolute after:left-0 after:mt-1.75 after:h-0.5 after:w-2.5 after:rounded-[3px] after:content-[''] dark:bg-white dark:before:bg-white dark:after:bg-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
