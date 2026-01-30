import type { Metadata } from "next";
import { DM_Sans, EB_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import { OffcanvasProvider } from "@/context/OffcanvasContext";
import Offcanvas from "@/components/Offcanvas";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Orkhai Dickson | Full-Stack & Mobile Developer",
    template: "%s | Orkhai Dickson",
  },
  description:
    "Full-stack and mobile developer specializing in MERN stack, NestJS, SQL databases, and Flutter. I build scalable, high-performance web and mobile applications.",
  keywords: [
    "Next.js developer",
    "Full stack developer",
    "React developer",
    "NestJS developer",
    "Web application developer",
    "MERN stack developer",
    "Flutter developer",
    "Mobile app developer",
  ],
  metadataBase: new URL("https://orkhai.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://orkhai.dev",
    siteName: "Orkhai Dickson Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem('theme') || 'dark';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${ebGaramond.variable} font-sans text-sm leading-6.5 antialiased`}
      >
        <OffcanvasProvider>
          <ThemeProvider>
            <Offcanvas />
            <Header />
            {children}
          </ThemeProvider>
        </OffcanvasProvider>
      </body>
    </html>
  );
}
