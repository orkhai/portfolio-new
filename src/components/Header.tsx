"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { MenuIcon, MoonIcon, SunIcon, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const effectiveTheme: "light" | "dark" =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;

  const Icon = effectiveTheme === "dark" ? <MoonIcon /> : <SunIcon />;

  return (
    // <header className={"sticky top-0 z-50 flex h-20 place-items-center py-4"}>
    <header
      className={clsx(
        "sticky top-0 z-50 flex h-20 place-items-center py-4 transition-all duration-300",
        scrolled
          ? "bg-background/80 border-border border-b backdrop-blur-2xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full items-center justify-between px-5 sm:px-20 xl:px-52">
        <div className="flex items-center gap-10">
          <Link className="flex items-center gap-2" href="/">
            <Image
              alt="Orkhai.dev Logo"
              priority
              width={22}
              height={22}
              style={{ color: "transparent" }}
              src="/images/logo.svg"
            />
            <div className="bg-[linear-gradient(180deg,hsl(263,31%,15%)_0%,#000_200%)] bg-clip-text text-2xl font-bold text-transparent dark:bg-[linear-gradient(180deg,hsl(263,77%,73%)_0%,#000_200%)]">
              Orkhai.dev
            </div>
          </Link>
          <nav className="hidden gap-10 md:flex">
            <Link
              className="ring-offset-background focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/"
            >
              Home
            </Link>
            <a
              className="ring-offset-background focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/case-studies"
            >
              Case Studies
            </a>
            <a
              className="ring-offset-background focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="mailto:contact@orkhai.dev"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="ring-offset-background focus-visible:ring-ring border-input hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border bg-[radial-gradient(146.13%_118.42%_at_50%_-15.5%,hsla(0,0%,100%,.04)_0,hsla(0,0%,100%,0)_99.59%),linear-gradient(180deg,rgba(46,51,90,0),rgba(28,27,51,.04))] text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                {Icon}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => setTheme("light")}
                >
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => setTheme("dark")}
                >
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => setTheme("system")}
                >
                  System
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Drawer direction="top">
            <DrawerTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="ring-offset-background focus-visible:ring-ring border-input hover:bg-accent hover:text-accent-foreground bg-gradient-gray inline-flex h-10 w-10 items-center justify-center rounded-md border text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:hidden"
              >
                <MenuIcon height={24} width={24} />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="rounded-0 md:hidden">
              <DrawerHeader>
                <DrawerTitle className="hidden">Mobile menu</DrawerTitle>
                <DrawerClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-1 right-1"
                  >
                    <X />
                  </Button>
                </DrawerClose>
              </DrawerHeader>

              <div className="flex flex-col space-y-2 text-center sm:text-left">
                <p className="text-muted-foreground text-sm" />
                <nav className="flex flex-col gap-6 p-6 text-lg">
                  <DrawerClose asChild>
                    <Link
                      className={`ring-offset-background focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${pathname === "/" ? "bg-accent" : ""} `}
                      href="/"
                    >
                      Home
                    </Link>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <Link
                      className={`ring-offset-background focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${pathname === "/case-studies" ? "bg-accent" : ""} `}
                      href="/case-studies"
                    >
                      Case Studies
                    </Link>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <a
                      className="ring-offset-background focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                      href="mailto:contact@orkhai.dev"
                    >
                      Contact
                    </a>
                  </DrawerClose>
                </nav>
                <p />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;
