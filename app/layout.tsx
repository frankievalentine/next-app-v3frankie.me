import "@/styles/globals.css"

import type { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

// import localFont from "next/font/local";
// import clsx from "clsx";
// import { Analytics } from "@vercel/analytics/react";

// const kaisei = localFont({
//   src: "../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
//   weight: "700",
//   variable: "--font-kaisei",
//   display: "swap",
// });

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "Frankie",
      url: "https://v3frankie.me",
    },
  ],
  creator: "Frankie",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@v3frankie",
  },
  icons: [
    {
      rel: "icon",
      type: "image/ico",
      sizes: "any",
      url: "/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/public/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      url: "/public/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "152x152",
      url: "/public/apple-touch-icon.png",
    },
  ],
  manifest: `${siteConfig.url}/site.webmanifest`,
  // verification: {
  //   google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
  //   yandex: "14d2e73487fa6c71",
  // },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background min-h-screen antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
          {/* <Analytics /> */}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
