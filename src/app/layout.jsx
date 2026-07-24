import "./globals.css";
import { Outfit, Space_Mono } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Nazmus Shakib | Full-Stack Developer",
  description: "Professional Full-Stack Web Developer — React, Node.js, MongoDB, Next.js",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceMono.variable}`}>
      <body className="bg-dark-400 text-gray-100 font-display antialiased">
        {children}
      </body>
    </html>
  );
}