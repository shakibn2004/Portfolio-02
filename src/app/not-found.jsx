"use client";

import Link from "next/link";
import CustomCursor from "@/components/CustomCursor";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-400 text-gray-100 px-4 py-12">
      <CustomCursor />

      {/* Background Decorative Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl text-center space-y-8">
        {/* Large 404 Display */}
        <div className="relative inline-block">
          <h1 className="text-8xl sm:text-9xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-accent-300 to-indigo-400 select-none animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 text-8xl sm:text-9xl font-black tracking-widest text-accent-500/20 blur-md pointer-events-none select-none">
            404
          </div>
        </div>

        {/* Messaging */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-100">
            Lost in Cyberspace?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
            The page you are looking for doesn’t exist or has been moved to another dimension.
          </p>
        </div>

        {/* Terminal/Code snippet graphic */}
        <div className="bg-dark-300/80 border border-gray-800 rounded-xl p-4 max-w-md mx-auto text-left shadow-2xl font-mono text-sm space-y-2 backdrop-blur-sm">
          <div className="flex items-center space-x-2 pb-2 border-b border-gray-800/60">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
            <span className="text-xs text-gray-500 font-sans ml-2">system.log</span>
          </div>
          <p className="text-gray-400">
            <span className="text-accent-400">&gt;</span> STATUS_CODE: <span className="text-red-400">ERR_NOT_FOUND</span>
          </p>
          <p className="text-gray-400">
            <span className="text-accent-400">&gt;</span> LOCATION: <span className="text-yellow-400">unknown_route</span>
          </p>
          <p className="text-gray-500 text-xs">
            <span className="text-emerald-400">&gt;</span> Recommendation: Navigate back to safety.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-lg font-medium text-white bg-accent-500 hover:bg-accent-600 transition-all duration-200 shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 active:scale-95 flex items-center justify-center space-x-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Back to Home</span>
          </Link>
          <Link
            href="/#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-lg font-medium text-gray-300 border border-gray-700 hover:border-gray-500 hover:text-white bg-dark-300/50 hover:bg-dark-300 transition-all duration-200 active:scale-95 flex items-center justify-center space-x-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
