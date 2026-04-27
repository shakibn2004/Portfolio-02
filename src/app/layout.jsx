import "./globals.css";

export const metadata = {
  title:       "Md. Rahim | MERN Stack Developer",
  description: "Professional MERN Stack Web Developer — React, Node.js, MongoDB, Next.js",
  keywords:    "MERN Stack, React, Node.js, MongoDB, Next.js, Full Stack Developer, Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        /> */}
      </head>
      <body className="bg-dark-400 text-gray-100 font-display antialiased">
        {children}
      </body>
    </html>
  );
}
