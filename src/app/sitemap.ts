import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

export const dynamic = "force-static";

const siteUrl = "https://portfolio-pedromori.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/` },
    ...projects.map((project) => ({ url: `${siteUrl}/projetos/${project.slug}` })),
  ];
}
