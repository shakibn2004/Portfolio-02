import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { PROJECTS } from "@/data/projectsData";
import { SITE } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return { title: "Project not found" };
  const title = `${project.title}`;
  const url = `/projects/${project.id}`;
  return {
    title,
    description: project.desc,
    keywords: [project.name, ...project.tech, "Nazmus Shakib project"],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description: project.desc,
      images: [{ url: project.image, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.desc,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const index = PROJECTS.findIndex((p) => p.id === id);
  if (index === -1) notFound();
  const project = PROJECTS[index];
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    headline: project.title,
    description: project.desc,
    url: `${SITE.url}/projects/${project.id}`,
    image: `${SITE.url}${project.image}`,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    keywords: project.tech.join(", "),
    sameAs: [project.live, project.github],
    author: { "@type": "Person", name: SITE.name, url: SITE.url },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />

      <main id="main" className="grain pt-28 sm:pt-36">
        <article>
          {/* Header */}
          <header className="shell">
            <Link href="/#projects" className="group inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
              <ArrowLeft className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:-translate-x-1" />
              All work
            </Link>

            <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <h1
                  className="font-display text-[clamp(3.5rem,14vw,9rem)] font-semibold leading-[0.88] tracking-[-0.03em] text-fg"
                  style={{ fontVariationSettings: '"wdth" 86, "opsz" 96' }}
                >
                  {project.name}
                </h1>
                <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted sm:text-2xl">{project.tagline}</p>
              </div>
              <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
                  Visit live site
                  <ArrowUpRight className="btn-icon h-4 w-4" />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  <FaGithub className="h-4 w-4" />
                  Code
                </a>
              </div>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-y-6 border-t border-line pt-6 text-sm sm:grid-cols-4">
              <div>
                <dt className="text-subtle">Status</dt>
                <dd className="mt-1 inline-flex items-center gap-2 text-fg">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {project.status}
                </dd>
              </div>
              <div className="col-span-1 sm:col-span-3">
                <dt className="text-subtle">Stack</dt>
                <dd className="mt-1 text-fg">{project.tech.join(", ")}</dd>
              </div>
            </dl>
          </header>

          {/* Hero image */}
          <div className="shell mt-12 sm:mt-16">
            <Reveal y={40}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-line bg-surface sm:aspect-[16/9]">
                <Image
                  src={project.image}
                  alt={`${project.name} — landing page`}
                  fill
                  priority
                  sizes="(min-width: 1280px) 1180px, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </Reveal>
          </div>

          {/* Body */}
          <div className="shell section grid gap-16 lg:grid-cols-12 lg:gap-10">
            <div className="space-y-20 lg:col-span-7">
              <section aria-labelledby="overview">
                <h2 id="overview" className="text-3xl font-semibold tracking-tight text-fg">Overview</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted">{project.desc}</p>
              </section>

              <section aria-labelledby="challenges">
                <h2 id="challenges" className="text-3xl font-semibold tracking-tight text-fg">The hard parts</h2>
                <ol className="mt-6 divide-y divide-line border-y border-line">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="grid grid-cols-[40px_1fr] gap-4 py-6">
                      <span className="font-mono text-sm tabular-nums text-subtle">{String(i + 1).padStart(2, "0")}</span>
                      <p className="leading-relaxed text-fg/85">{c}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section aria-labelledby="next-steps">
                <h2 id="next-steps" className="text-3xl font-semibold tracking-tight text-fg">What I&rsquo;d build next</h2>
                <ul className="mt-6 space-y-4">
                  {project.improvements.map((imp, i) => (
                    <li key={i} className="flex gap-4 leading-relaxed text-muted">
                      <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-line-strong" />
                      {imp}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="rounded-3xl border border-line bg-surface p-7 lg:sticky lg:top-28">
                <h2 className="text-lg font-semibold tracking-tight text-fg">Built with</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li key={t} className="rounded-full border border-line px-3 py-1 text-[13px] text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 space-y-1 border-t border-line pt-5 text-[15px]">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-2 text-fg">
                    <span className="link-draw">Live site</span>
                    <ArrowUpRight className="h-4 w-4 text-subtle transition-colors group-hover:text-signal" />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-2 text-fg">
                    <span className="link-draw">Source code</span>
                    <FaGithub className="h-4 w-4 text-subtle transition-colors group-hover:text-signal" />
                  </a>
                </div>
                <Link href="/#contact" className="btn btn-solid mt-6 w-full">
                  Start a similar project
                </Link>
              </div>
            </aside>
          </div>
        </article>

        {/* Next project */}
        <nav aria-label="Next project" className="border-t border-line">
          <Link href={`/projects/${next.id}`} className="group shell flex items-center justify-between gap-6 py-16 sm:py-24">
            <span>
              <span className="block text-sm text-muted">Next project</span>
              <span
                className="mt-2 block font-display text-[clamp(2.5rem,9vw,6.5rem)] font-semibold leading-none tracking-[-0.03em] text-fg transition-colors duration-500 group-hover:text-signal"
                style={{ fontVariationSettings: '"wdth" 86, "opsz" 96' }}
              >
                {next.name}
              </span>
            </span>
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-line-strong transition-all duration-500 ease-out-expo group-hover:border-signal group-hover:bg-signal group-hover:text-signal-ink sm:h-20 sm:w-20">
              <ArrowRight className="h-6 w-6 transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
            </span>
          </Link>
        </nav>
      </main>

      <Footer />
    </>
  );
}
