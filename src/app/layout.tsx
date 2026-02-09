import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orkhai",
  category: "Portfolio",
  authors: { name: "Orkhai Dickson" },
  keywords:
    "Orkhai,Orkhai.dev,Orkhai Software Engineer,Orkhai Web Developer,Orkhai Fullstack Developer,Orkhai Frontend Developer,Orkhai Backend Developer,Orkhai Mobile Developer,Orkhai Web Designer,Orkhai Web Developer Nigeria,Orkhai Fullstack Developer Nigeria,Orkhai Frontend Developer Nigeria,Orkhai Backend Developer Nigeria,Orkhai Mobile Developer Nigeria,Orkhai Web Designer Nigeria,Portfolio Orkhai,Portfolio Orkhai.dev,Projects Orkhai,Projects Orkhai.dev,Contact Orkhai,Contact Orkhai.dev,Orkhai Dickson,JavaScript Developer,React Developer,Next.js Developer,TypeScript Developer,Node.js Developer,Software Development,Web Applications,Responsive Design,Modern Web Development,Portfolio Website",
  description:
    "Orkhai Dickson, a full-stack and mobile developer crafting user-centered digital experiences with expertise in mobile and web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased font-inter`}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
