import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const themeScript = `
(function () {
  try {
    const theme = localStorage.getItem("theme") || "dark";
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark =
      theme === "dark" || (theme === "system" && systemDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } catch (_) {}
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://orkhai.dev"),
  title: {
    default: "Orkhai | Full Stack & Mobile Developer",
    template: "%s | Orkhai",
  },
  category: "Portfolio",
  authors: { name: "Orkhai Dickson" },
  keywords: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Flutter Developer",
    "Mobile Developer",
    "Next.js Developer",
    "React Developer Nigeria",
  ],
  description:
    "Full Stack and Mobile Developer specializing in MERN stack and Flutter. I build scalable web and mobile apps, admin dashboards and e-commerce platforms.",
  openGraph: {
    title: "Orkhai | Full Stack & Mobile Developer",
    description:
      "I build scalable, production-ready web and mobile applications using MERN and Flutter",
    url: "https://yourdomain.com",
    siteName: "Orkhai",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orkhai | Full Stack Developer",
    description:
      "Full Stack & Mobile Developer building scalable web and mobile applications.",
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
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} font-inter antialiased`}>
        <ThemeProvider>
          <Header />
          <Toaster
            position="top-right"
            toastOptions={{ style: { fontFamily: "Inter" } }}
            richColors
          />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
