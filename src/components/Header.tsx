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

const Header = () => {
  const { theme, setTheme } = useTheme();

  const pathname = usePathname();

  const effectiveTheme: "light" | "dark" =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;

  const Icon = effectiveTheme === "dark" ? <MoonIcon /> : <SunIcon />;

  return (
    <header className="flex place-items-center sticky top-0 z-50 py-4 h-20">
      <div className="w-full mx-auto flex justify-between items-center px-5 sm:px-20 xl:px-52">
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
            <div className="text-2xl font-bold bg-[linear-gradient(180deg,hsl(263,31%,15%)_0%,#000_200%)] dark:bg-[linear-gradient(180deg,hsl(263,77%,73%)_0%,#000_200%)] bg-clip-text text-transparent">
              Orkhai.dev
            </div>
          </Link>
          <nav className="hidden md:flex gap-10">
            <Link
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              href="/"
            >
              Home
            </Link>
            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              href="/projects"
            >
              Projects
            </a>
            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
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
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 w-10 bg-[radial-gradient(146.13%_118.42%_at_50%_-15.5%,hsla(0,0%,100%,.04)_0,hsla(0,0%,100%,0)_99.59%),linear-gradient(180deg,rgba(46,51,90,0),rgba(28,27,51,.04))] cursor-pointer"
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
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden bg-gradient-gray"
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
                <p className="text-sm text-muted-foreground" />
                <nav className="flex flex-col gap-6 text-lg p-6">
                  <Link
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 ${pathname === "/" ? "bg-accent" : ""} `}
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 ${pathname === "/projects" ? "bg-accent" : ""} `}
                    href="/projects"
                  >
                    Projects
                  </Link>
                  <a
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                    href="mailto:contact@orkhai.dev"
                  >
                    Contact
                  </a>
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
