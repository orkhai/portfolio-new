"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="w-1/2 shrink-0 px-3 md:w-5/12 lg:w-2/12 xl:w-2/12">
      <div className="logo">
        <Link className="logo-white hidden dark:block" href="/">
          <Image src="/images/logo.webp" alt="Logo" width={115} height={35} />
        </Link>

        <Link className="logo-black dark:hidden" href="/">
          <Image
            src="/images/logo-black.webp"
            alt="Logo"
            width={115}
            height={35}
          />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
