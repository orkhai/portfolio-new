import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="dark:border-footer-dark border-footer m-0 border-t py-15">
      <div>
        <div className="relative mx-auto w-full max-w-325 px-5 md:px-3">
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full max-w-full shrink-0 px-3 md:w-1/3 lg:w-1/3">
              <div className="text-center">
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
            <div className="w-full max-w-full shrink-0 px-3 md:w-1/3 lg:w-1/3">
              <div className="text-center text-sm leading-9.25 font-bold tracking-wider text-black dark:text-white">
                © {new Date().getFullYear()}{" "}
                <strong className="font-funnel-display text-base">
                  orkhai
                </strong>
                . All rights reserved
              </div>
            </div>
            <div className="w-full max-w-full shrink-0 px-3 md:w-1/3 lg:w-1/3">
              <div className="text-center text-sm leading-9.25 font-bold tracking-wider text-black dark:text-white">
                Built with Next.js, Typescript and Tailwind CSS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
