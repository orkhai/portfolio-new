import Link from "next/link";

const DesktopNav = () => {
  return (
    <div className="hidden shrink-0 px-3 lg:block lg:w-7/12 xl:w-1/2">
      <div>
        <nav className="tp-main-menu-content">
          <ul>
            <li className="mr-10 inline-block">
              <Link
                href="/"
                className="text-black-5 relative inline-block py-5.75 text-base font-medium dark:text-white"
              >
                Home
              </Link>
            </li>
            <li className="mr-10 inline-block">
              <Link
                href="/projects"
                className="text-black-5 relative inline-block py-5.75 text-base font-medium dark:text-white"
              >
                Projects
              </Link>
            </li>
            <li className="inline-block">
              <Link
                href="/contact"
                className="text-black-5 relative inline-block py-5.75 text-base font-medium dark:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DesktopNav;
