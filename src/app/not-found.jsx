import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main id="main" className="grain flex min-h-screen items-center">
      <div className="shell py-24">
        <p className="text-muted">Error 404</p>
        <h1
          className="mt-4 font-display font-semibold leading-[0.88] tracking-[-0.03em] text-fg"
          style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)", fontVariationSettings: '"wdth" 84, "opsz" 96' }}
        >
          This page
          <br />
          doesn&rsquo;t exist.
        </h1>
        <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
          The link may be broken, or the page may have moved. Head back to the homepage to see my work.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-solid">
            <ArrowLeft className="h-4 w-4" />
            Back to homepage
          </Link>
          <Link href="/#contact" className="btn btn-ghost">
            Contact me
          </Link>
        </div>
      </div>
    </main>
  );
}
