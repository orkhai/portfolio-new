import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="dark:bg-black-base relative z-1 overflow-hidden bg-white">
      <div className="absolute right-10 bottom-12.5 z-99">
        <span className="after:bg-black-5 absolute bottom-[calc(100%+20px)] left-4.75 inline-block h-40 w-px bg-[linear-gradient(180deg,rgba(37,37,37,0)_0%,rgba(37,37,37,0.5)_100%)] after:absolute after:-bottom-px after:-left-px after:h-0.75 after:w-0.75 after:-translate-y-px after:rounded-[50%] after:content-[''] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.5)_100%)] dark:after:bg-white" />
        <div className="flex flex-col">
          <a
            href="#"
            className="bg-black-5 mb-2.5 flex h-10 w-10 items-center justify-center rounded-[50%] border-[1.5px] border-transparent text-center text-lg leading-10.25 text-white dark:bg-white/20"
          >
            <svg
              width={17}
              height={15}
              viewBox="0 0 17 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.25 13.75H4.75C2.5 13.75 1 12.625 1 10V4.75C1 2.125 2.5 1 4.75 1L12.25 1C14.5 1 16 2.125 16 4.75V10C16 12.625 14.5 13.75 12.25 13.75Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.25 5.12488L9.9025 6.99988C9.13 7.61488 7.8625 7.61488 7.09 6.99988L4.75 5.12488"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#"
            className="bg-black-5 mb-2.5 flex h-10 w-10 items-center justify-center rounded-[50%] border-[1.5px] border-transparent text-center text-lg leading-10.25 text-white dark:bg-white/20"
          >
            <svg
              width={18}
              height={17}
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.50589 12.2494C4.57662 15.836 9.16278 17.0648 12.7494 14.9941C14.2113 14.15 15.2816 12.888 15.8962 11.4461C16.7895 9.35066 16.7208 6.87526 15.4941 4.75063C14.2674 2.62599 12.1581 1.32872 9.89669 1.05462C8.34063 0.866 6.71259 1.16183 5.25063 2.00589C1.66403 4.07662 0.435172 8.66278 2.50589 12.2494Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12.712 14.9291C12.712 14.9291 12.0079 9.98655 10.5004 7.37547C8.99289 4.76439 5.28862 2.07143 5.28862 2.07143M5.68375 15.1123C6.79479 11.7605 12.3392 8.04512 16.3967 8.93525M12.3103 1.90808C11.1945 5.22332 5.75659 8.88441 1.71802 8.08903"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </a>
          <a
            href="#"
            className="bg-black-5 flex h-10 w-10 items-center justify-center rounded-[50%] border-[1.5px] border-transparent text-center text-lg leading-10.25 text-white dark:bg-white/20"
          >
            <svg
              width={17}
              height={11}
              viewBox="0 0 17 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.50008H6.25009C7.52511 5.50008 8.50013 6.47509 8.50013 7.75012C8.50013 9.02514 7.52511 10.0002 6.25009 10.0002H1.75001C1.30001 10.0002 1 9.70015 1 9.25014V1.75001C1 1.30001 1.30001 1 1.75001 1H5.50008C6.7751 1 7.75012 1.97502 7.75012 3.25004C7.75012 4.52506 6.7751 5.50008 5.50008 5.50008H1Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M9.99988 7.00005H16C16 5.35002 14.65 4 12.9999 4C11.3499 4 9.99988 5.35002 9.99988 7.00005ZM9.99988 7.00005C9.99988 8.65008 11.3499 10.0001 12.9999 10.0001H14.275"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.1249 2.125H11.8749"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <div>
        <div
          className="absolute top-0 left-0 z-[-1] hidden h-full w-full dark:block"
          style={{
            backgroundImage: "url('/images/hero-overlay.webp')",
          }}
        />
        <div
          className="absolute top-0 left-0 z-[-1] block h-full w-full dark:hidden"
          style={{
            backgroundImage: "url('/images/hero-overlay-2.webp')",
          }}
        />
        <span className="dark:bg-blurr-3 bg-blurr-4 absolute -top-8.75 left-26.75 z-[-2] inline-block h-100 w-100 rounded-[400px] blur-[150px] dark:rounded-[50%]" />
      </div>
      <div className="mx-auto w-full px-3 md:max-w-180 lg:max-w-240 xl:max-w-285">
        <div className="flex items-end">
          <div className="w-full">
            <div className="-mr-27.5 pt-37.5 pb-17.5 md:pt-42.5 md:pb-10 lg:pt-55 lg:pb-45">
              <div className="relative z-1 pr-0 md:pr-20 lg:pr-0">
                <span className="text-black-5 -mb-0.75 flex items-center font-serif text-2xl leading-none font-bold dark:text-white">
                  Hello There!
                  <Image
                    src="/images/hero-hand.webp"
                    alt="wave"
                    height={40}
                    width={40}
                  />
                </span>
                <h3 className="text-black-5 mb-6.25 text-[35px] leading-none font-bold md:text-[70px] lg:text-[75px] xl:text-[100px] dark:text-white">
                  I am Orkhai, <br />
                  Software Developer
                </h3>
                <p className="text-hero-dark dark:text-hero mb-8.25 pr-32.5 pl-0 text-base leading-[1.4] md:pl-22.5 md:text-[20px]">
                  The combination of my passion for design, code &amp;
                  interaction web design world.
                </p>
                <div className="pl-0 md:pl-25">
                  <div className="mr-2 inline-block">
                    <Link
                      href="/contact"
                      className="border-header-border text-black-5 relative z-1 flex h-32 w-32 items-center justify-center overflow-hidden rounded-[50%] border text-lg leading-[1.22] font-medium dark:border-white/16 dark:text-white"
                    >
                      <span>
                        Get <br />
                        In Touch
                      </span>
                      <span className="ml-2 translate-y-2.25">
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 1L1 11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2.98874 1.01725L10.9991 1L10.9826 9.01105"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                  <div className="inline-block">
                    <Link
                      href="/projects"
                      className="border-header-border text-black-5 relative z-1 flex h-32 w-32 items-center justify-center overflow-hidden rounded-[50%] border text-lg leading-[1.22] font-medium dark:border-white/16 dark:text-white"
                    >
                      <span>
                        View <br />
                        Projects
                      </span>
                      <span className="ml-2 translate-y-2.25">
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 1L1 11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2.98874 1.01725L10.9991 1L10.9826 9.01105"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="absolute -bottom-30 left-0 hidden h-87.75 md:block">
                  <a href="#down">
                    <span className="after:bg-black-1 absolute top-0 left-0 inline-block h-79.25 w-px bg-[linear-gradient(180deg,rgba(37,37,37,0)_0%,rgba(37,37,37,0.5)_100%)] after:absolute after:-bottom-px after:-left-px after:h-0.75 after:w-0.75 after:-translate-y-px after:rounded-[50%] after:content-[''] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.5)_100%)] dark:after:bg-white" />
                    <span className="after:border-black-5 border-black-5 absolute bottom-0 left-0 inline-block h-6 w-4 translate-x-[-50%] rounded-3xl border-[1.5px] after:absolute after:top-1.5 after:right-1.5 after:left-1.25 after:h-1 after:w-1 after:rounded-[50%] after:border after:content-[''] dark:border dark:border-white dark:after:border-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
