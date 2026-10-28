import { FaBriefcase, FaExternalLinkAlt, FaGooglePlay } from "react-icons/fa";
import { useLanguage } from "../i18n/context";
import { ExperienceId } from "../i18n/translations";
import SectionHeading from "./SectionHeading";

interface ExperienceEntry {
  id: ExperienceId;
  tags: string[];
  links?: { label: "playStore" | "live" | "website"; href: string }[];
}

const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "menteNueva",
    tags: ["Next.js", "NestJS", "TypeScript", "Supabase", "Daily.co", "PWA", "Google Play"],
    links: [
      { label: "playStore", href: "https://play.google.com/store/apps/details?id=com.palerosoft.app&hl=es_CO" },
      { label: "live", href: "https://palero-soft-app.vercel.app/" },
      { label: "website", href: "https://www.mentenuevamarketing.com/" },
    ],
  },
  {
    id: "freelance",
    tags: ["Next.js", "React", "Node.js", "Strapi", "Shopify", "Gemini", "Docker", "Nginx"],
  },
  {
    id: "rapeluches",
    tags: ["Community Management", "Social Media", "Customer Support"],
  },
];

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label={t.experience.label} title={t.experience.title} subtitle={t.experience.subtitle} />
        <ol className="relative border-l-2 border-red-200 ml-3 space-y-12">
          {EXPERIENCE.map(({ id, tags, links }) => {
            const item = t.experience.items[id];
            return (
              <li key={id} className="ml-8">
                <span className="absolute -left-[17px] flex h-8 w-8 items-center justify-center rounded-full bg-red-500 ring-4 ring-white">
                  <FaBriefcase className="h-4 w-4 text-white" aria-hidden="true" />
                </span>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.role} <span className="text-red-500">· {item.company}</span>
                  </h3>
                  <time className="text-sm font-medium text-gray-500 shrink-0">{item.period}</time>
                </div>
                <p className="mt-2 text-gray-700">{item.summary}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-600">
                  {item.highlights.map((highlight) => (
                    <li key={highlight.slice(0, 32)}>{highlight}</li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-red-50 border border-red-200 px-3 py-0.5 text-xs font-semibold text-red-700">
                      {tag}
                    </li>
                  ))}
                </ul>
                {links && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md bg-black px-3 py-1.5 text-sm font-semibold text-white hover:bg-black/80"
                      >
                        {link.label === "playStore" ? (
                          <FaGooglePlay className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <FaExternalLinkAlt className="h-3 w-3" aria-hidden="true" />
                        )}
                        {t.projects.links[link.label]}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
