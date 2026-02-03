import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      className="bg-transparent bg-[linear-gradient(0deg,#ffffff_0%,#f0ebe3_100%)] pb-30 md:pb-45 dark:bg-[linear-gradient(0deg,#31363c_0%,#222831_100%)]"
      id="started-section"
    >
      <div className="relative flex w-full items-center px-5 md:px-3">
        <div className="w-full">
          <div className="relative z-2">
            <div className="relative pt-30 text-center md:pt-35 lg:pt-10">
              <div className="mt-12 min-h-40 max-w-full lg:mt-36">
                <div className="text-sm font-bold tracking-wider text-black uppercase md:text-base dark:text-white">
                  <span>
                    Hey there, <b>I&#39;m</b>{" "}
                  </span>
                </div>
                <h1 className="mt-3.75 text-[40px] leading-[1.2] font-bold tracking-wider text-white uppercase text-shadow-[2px_2px_#000,-2px_2px_#000,2px_-2px_#000,-2px_-2px_#000,5px_5px_0_rgba(0,0,0,0.2)] md:text-[64px] xl:text-[90px]">
                  <span>
                    <b className="text-gold">Orkhai</b> Dickson{" "}
                  </span>
                </h1>
                <div className="text-sm font-bold tracking-wider text-black uppercase md:text-base dark:text-white">
                  <strong className="font-caveat ml-2.5 text-[24px] font-bold normal-case md:text-[30px]">
                    a Software Developer
                  </strong>
                </div>
              </div>
              <div className="mx-auto max-w-130 py-10 text-center text-[18px]">
                <div>
                  <p className="opacity-80">
                    A fullstack and mobile developer passionate about crafting
                    seamless user experiences I thrive at the intersection of
                    creativity and functionality.
                  </p>
                </div>
                <div className="mt-7.5 leading-none">
                  <a
                    href="https://github.com/orkhai"
                    target="blank"
                    className="relative mt-0 mr-3.75 ml-0 inline-block align-top text-[22px] font-black text-black dark:text-white"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://twitter.com/orkhai_"
                    target="blank"
                    className="relative mt-0 mr-3.75 ml-0 inline-block align-top text-[22px] font-black text-black dark:text-white"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="https://linkedin.com/in/orkhai"
                    target="blank"
                    className="relative mt-0 mr-3.75 ml-0 inline-block align-top text-[22px] font-black text-black dark:text-white"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className="mx-auto flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#"
                  className="btn dark:border-vline-dark relative inline-block h-13 rounded-[56px] border-2 border-black bg-transparent px-7.5 text-center align-top text-sm leading-12 font-bold tracking-wider text-black uppercase shadow-[5px_5px_rgba(0,0,0,0.2)] dark:text-white dark:shadow-[5px_5px_rgba(255,255,255,0.1)]"
                >
                  <span>Contact Me</span>
                </a>
                <a
                  href="#"
                  className="btn dark:border-vline-dark relative inline-block h-13 rounded-[56px] border-2 border-black bg-transparent px-7.5 text-center align-top text-sm leading-12 font-bold tracking-wider text-black uppercase shadow-[5px_5px_rgba(0,0,0,0.2)] dark:text-white dark:shadow-[5px_5px_rgba(255,255,255,0.1)]"
                >
                  <span>View Projects</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
