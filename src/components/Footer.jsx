"use client";

import { usePathname, useRouter } from "next/navigation";
import { FaGithub, FaLinkedin, FaSquareUpwork, FaYoutube, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { ArrowUp } from "lucide-react";
import Logo from "./Logo";
import { scrollToSection } from "./SmoothScroll";

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

const SOCIALS = [
  { name: "GitHub", icon: FaGithub, href: "https://github.com/shakibn2004" },
  { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/shakibn2004/" },
  { name: "Upwork", icon: FaSquareUpwork, href: "https://www.upwork.com/freelancers/~01cb62e6ec492a8827" },
  { name: "X", icon: FaXTwitter, href: "https://x.com/shakibn2004" },
  { name: "Facebook", icon: FaFacebook, href: "https://www.facebook.com/shakibn2004" },
  { name: "YouTube", icon: FaYoutube, href: "https://www.youtube.com/@NazmusShakibVlogs" },
];

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const go = (id) => (pathname === "/" ? scrollToSection(id) : router.push(id === "home" ? "/" : `/#${id}`));

  return (
    <footer className="border-t border-line">
      <div className="shell pb-12 pt-16 sm:pt-20">
        <p className="text-muted">Have a project in mind?</p>
        <a
          href="mailto:shakibn2004@gmail.com"
          className="group mt-3 inline-block font-display font-semibold leading-none tracking-[-0.025em] text-fg"
          style={{ fontSize: "clamp(1.9rem, 6.6vw, 6rem)", fontVariationSettings: '"wdth" 88, "opsz" 96' }}
        >
          <span className="link-draw [background-size:0%_3px] group-hover:[background-size:100%_3px]">
            shakibn2004@gmail.com
          </span>
        </a>

        <div className="mt-16 grid gap-10 border-t border-line pt-10 sm:mt-24 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line-strong bg-surface text-fg">
              <Logo className="h-5 w-5" />
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Md Nazmus Shakib — software engineer and full-stack web developer at KUET, Khulna, Bangladesh,
              working with clients worldwide.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button onClick={() => go(n.id)} className="link-draw text-muted hover:text-fg">
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex flex-wrap gap-2 md:justify-end" aria-label="Social profiles">
            {SOCIALS.map(({ name, icon: Icon, href }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors duration-300 hover:border-fg hover:text-fg"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex items-center justify-between gap-4 text-sm text-subtle">
          <p>© {new Date().getFullYear()} Md Nazmus Shakib</p>
          <button onClick={() => go("home")} className="group inline-flex items-center gap-2 hover:text-fg">
            Back to top
            <ArrowUp className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
