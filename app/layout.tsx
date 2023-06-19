import "@/styles/globals.css";
// import clsx from "clsx";
// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import Sidebar from "../components/sidebar";
// import { Analytics } from "@vercel/analytics/react";

// favicon HEAD
{
  /* <link rel="apple-touch-icon-precomposed" sizes="57x57" href="https://www.v3frankie.me/apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://www.v3frankie.me/apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://www.v3frankie.me/apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://www.v3frankie.me/apple-touch-icon-144x144.png" />
<link rel="apple-touch-icon-precomposed" sizes="60x60" href="https://www.v3frankie.me/apple-touch-icon-60x60.png" />
<link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://www.v3frankie.me/apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon-precomposed" sizes="76x76" href="https://www.v3frankie.me/apple-touch-icon-76x76.png" />
<link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://www.v3frankie.me/apple-touch-icon-152x152.png" />
<link rel="icon" type="image/png" href="https://www.v3frankie.me/favicon-196x196.png" sizes="196x196" />
<link rel="icon" type="image/png" href="https://www.v3frankie.me/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/png" href="https://www.v3frankie.me/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="https://www.v3frankie.me/favicon-16x16.png" sizes="16x16" />
<link rel="icon" type="image/png" href="https://www.v3frankie.me/favicon-128.png" sizes="128x128" />
<meta name="application-name" content="v3frankie.me - Frankie Valentine"/>
<meta name="msapplication-TileColor" content="#FFFFFF" />
<meta name="msapplication-TileImage" content="https://www.v3frankie.me/mstile-144x144.png" />
<meta name="msapplication-square70x70logo" content="https://www.v3frankie.me/mstile-70x70.png" />
<meta name="msapplication-square150x150logo" content="https://www.v3frankie.me/mstile-150x150.png" />
<meta name="msapplication-wide310x150logo" content="https://www.v3frankie.me/mstile-310x150.png" />
<meta name="msapplication-square310x310logo" content="https://www.v3frankie.me/mstile-310x310.png" />
<meta name="msapplication-notification" content="frequency=30;polling-uri=https://notifications.buildmypinnedsite.com/?feed=https://www.v3frankie.me/sitemap.xml&amp;id=1;polling-uri2=https://notifications.buildmypinnedsite.com/?feed=https://www.v3frankie.me/sitemap.xml&amp;id=2;polling-uri3=https://notifications.buildmypinnedsite.com/?feed=https://www.v3frankie.me/sitemap.xml&amp;id=3;polling-uri4=https://notifications.buildmypinnedsite.com/?feed=https://www.v3frankie.me/sitemap.xml&amp;id=4;polling-uri5=https://notifications.buildmypinnedsite.com/?feed=https://www.v3frankie.me/sitemap.xml&amp;id=5;cycle=1" /> */
}

// const kaisei = localFont({
//   src: "../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
//   weight: "700",
//   variable: "--font-kaisei",
//   display: "swap",
// });

// export const metadata: Metadata = {
//   title: {
//     default: "Lee Robinson",
//     template: "%s | Lee Robinson",
//   },
//   description: "Developer, writer, and creator.",
//   openGraph: {
//     title: "Lee Robinson",
//     description: "Developer, writer, and creator.",
//     url: "https://leerob.io",
//     siteName: "Lee Robinson",
//     images: [
//       {
//         url: "https://leerob.io/og.jpg",
//         width: 1920,
//         height: 1080,
//       },
//     ],
//     locale: "en-US",
//     type: "website",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   twitter: {
//     title: "Lee Robinson",
//     card: "summary_large_image",
//   },
//   icons: {
//     shortcut: "/favicon.ico",
//   },
//   verification: {
//     google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
//     yandex: "14d2e73487fa6c71",
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
          {/* <Analytics /> */}
        </main>
      </body>
    </html>
  );
}
