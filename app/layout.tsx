import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Career Compass",
    template: "%s | Career Compass"
  },
  description:
    "A modern interface for exploring and testing the Career Recommendation Engine API.",
  metadataBase: new URL("https://career-compass.example.com"),
  openGraph: {
    title: "Career Compass",
    description:
      "A modern interface for exploring and testing the Career Recommendation Engine API.",
    url: "https://career-compass.example.com",
    siteName: "Career Compass",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Career Compass"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Compass",
    description:
      "A modern interface for exploring and testing the Career Recommendation Engine API.",
    images: ["/og-image.svg"],
    creator: "@careercompass"
  },
  keywords: [
    "career recommendations",
    "machine learning",
    "api demo",
    "next.js",
    "tailwind css",
    "framer motion"
  ],
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_rgba(15,23,42,0.6))] blur-3xl" />
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Toaster richColors position="top-right" closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
