import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Process from "../components/Process";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ScrollProgress from "../components/ScrollProgress";
import { SITE } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/#person`,
      name: SITE.name,
      alternateName: ["Nazmus Shakib", "Shakib"],
      url: SITE.url,
      image: `${SITE.url}${SITE.image}`,
      email: `mailto:${SITE.email}`,
      jobTitle: SITE.jobTitle,
      description: SITE.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.location.city,
        addressRegion: SITE.location.region,
        addressCountry: SITE.location.countryCode,
      },
      knowsAbout: SITE.skills,
      sameAs: SITE.sameAs,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: `${SITE.name} — Portfolio`,
      inLanguage: "en",
      publisher: { "@id": `${SITE.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE.url}/#profilepage`,
      url: SITE.url,
      name: SITE.title,
      isPartOf: { "@id": `${SITE.url}/#website` },
      mainEntity: { "@id": `${SITE.url}/#person` },
    },
  ],
};


export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ScrollProgress />
      <Navbar />
      <main id="main" className="grain">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
