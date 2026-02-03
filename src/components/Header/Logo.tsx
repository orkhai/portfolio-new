import Link from "next/link";

const Logo = () => {
  return (
    <div className="w-auto max-w-full shrink-0 px-3 sm:w-1/3">
      <div className="float-left mr-7.5">
        <Link
          href="/"
          className="font-funnel-display text-foreground dark:text-foreground-dark text-2xl font-semibold"
        >
          orkhai
        </Link>
      </div>
    </div>
  );
};

export default Logo;
