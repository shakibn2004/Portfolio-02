import { SITE } from "@/lib/site";
import { PROJECTS } from "@/data/projectsData";

export default function sitemap() {
  const now = new Date();
  return [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${SITE.url}${SITE.image}`],
    },
    ...PROJECTS.map((p) => ({
      url: `${SITE.url}/projects/${p.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${SITE.url}${p.image}`],
    })),
  ];
}
