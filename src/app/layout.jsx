import "./globals.css";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE } from "@/lib/site";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--ff-display",
  display: "swap",
});

const sans = Geist({
  subsets: ["latin"],
  variable: "--ff-sans",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--ff-mono",
  display: "swap",
});

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c0d10" },
    { media: "(prefers-color-scheme: light)", color: "#f5f5f2" },
  ],
};

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  applicationName: `${SITE.shortName} Portfolio`,
  keywords: SITE.keywords,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: `${SITE.name} — Portfolio`,
    title: SITE.title,
    description: SITE.description,
    locale: SITE.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    creator: SITE.twitterHandle,
    site: SITE.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Set GOOGLE_SITE_VERIFICATION in Vercel env vars (value from Google Search Console → HTML tag method)
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  // favicon.ico, icon.svg and apple-icon.png in /app are picked up automatically
};

const themeScript = `
  (function() {
    try {
      var saved = localStorage.getItem('portfolio-theme');
      var theme = saved || 'dark';
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {}
    // Safety net: if the app hasn't started within 3s, show all content without animation
    setTimeout(function () {
      var d = document.documentElement;
      if (!d.hasAttribute('data-ready')) d.className += ' no-motion';
    }, 3000);
  })();
`;

const noScriptCss =
  '[style*="opacity:0"]:not([aria-hidden]){opacity:1!important}' +
  '[style*="transform:"]:not([aria-hidden]){transform:none!important}' +
  '[style*="clip-path:"]:not([aria-hidden]){clip-path:none!important}';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: noScriptCss }} />
        </noscript>
      </head>
      <body className="font-sans antialiased">
        <a href="#main" className="skip-link">Skip to content</a>
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}