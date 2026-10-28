import { FaExternalLinkAlt, FaGithub, FaGooglePlay } from "react-icons/fa";
import { useLanguage } from "../i18n/context";

export interface ProjectLinks {
  live?: string;
  github?: string;
  api?: string;
  playStore?: string;
  website?: string;
}

interface Item extends ProjectLinks {
  image: string;
  title: string;
  desc: string;
  tags: string[];
}

export const ProjectLinkButtons = ({ links }: { links: ProjectLinks }) => {
  const { t } = useLanguage();
  const buttons = [
    { href: links.live, label: t.projects.links.live, icon: FaExternalLinkAlt, className: "bg-red-500 hover:bg-red-600" },
    { href: links.playStore, label: t.projects.links.playStore, icon: FaGooglePlay, className: "bg-black hover:bg-black/80" },
    { href: links.github, label: t.projects.links.github, icon: FaGithub, className: "bg-black hover:bg-black/80" },
    { href: links.api, label: t.projects.links.api, icon: FaGithub, className: "bg-black/80 hover:bg-black/70" },
    { href: links.website, label: t.projects.links.website, icon: FaExternalLinkAlt, className: "bg-gray-600 hover:bg-gray-700" },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {buttons
        .filter((button) => button.href)
        .map(({ href, label, icon: Icon, className }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-white text-sm font-semibold px-3 py-2 rounded-md ${className}`}
          >
            <Icon className="w-4 h-4" aria-hidden="true" />
            {label}
          </a>
        ))}
    </div>
  );
};

export const TagList = ({ tags }: { tags: string[] }) => (
  <ul className="flex flex-wrap gap-1.5">
    {tags.map((tag) => (
      <li key={tag} className="rounded-full bg-white border border-red-200 px-2 py-0.5 text-xs font-semibold text-red-700">
        {tag}
      </li>
    ))}
  </ul>
);

const Cards = ({ item }: { item: Item }) => {
  const { t } = useLanguage();

  return (
    <article className="flex flex-col border border-red-500 rounded-lg w-full max-w-[400px] h-full bg-red-50 overflow-hidden">
      <img
        src={item.image}
        alt={`${t.projects.screenshotAlt} ${item.title}`}
        loading="lazy"
        decoding="async"
        width={800}
        height={400}
        className="w-full h-auto aspect-[2/1] object-cover object-top"
      />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="font-semibold text-xl">{item.title}</h3>
        <p className="text-gray-700 flex-1">{item.desc}</p>
        <TagList tags={item.tags} />
        <ProjectLinkButtons links={item} />
      </div>
    </article>
  );
};

export default Cards;
