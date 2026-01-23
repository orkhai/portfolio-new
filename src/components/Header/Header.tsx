import DesktopNav from "./DesktopNav";
import Buttons from "./Buttons";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <div className="absolute top-0 right-0 left-0 z-99 w-full py-3.75 lg:py-0">
        <span className="dark:bg-header-border-dark bg-header-border absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2" />
        <div className="mx-auto w-full px-3 md:max-w-180 lg:max-w-240 xl:max-w-331.25">
          <div className="relative">
            <div className="-mx-3 flex flex-wrap items-center">
              <Logo />
              <DesktopNav />
              <Buttons />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
