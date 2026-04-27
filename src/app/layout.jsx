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
  title: "Md. Rahim | MERN Stack Developer",
  description: "Professional MERN Stack Web Developer — React, Node.js, MongoDB, Next.js",
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