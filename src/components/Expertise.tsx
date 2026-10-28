import { IconType } from "react-icons";
import { FaCloud, FaRobot } from "react-icons/fa";
import {
  SiGooglegemini,
  SiVercel,
  SiDocker,
  SiNginx,
  SiLetsencrypt,
  SiLinux,
  SiGithubactions,
  SiMicrosoftazure,
  SiRailway,
  SiNetlify,
  SiSupabase,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { useLanguage } from "../i18n/context";
import SectionHeading from "./SectionHeading";

interface Tool {
  name: string;
  icon?: IconType;
}

const AI_TOOLS: Tool[] = [
  { name: "LLM APIs" },
  { name: "Gemini", icon: SiGooglegemini },
  { name: "Replicate" },
  { name: "Vercel AI SDK", icon: SiVercel },
  { name: "MCP" },
  { name: "n8n" },
];

const DEVOPS_TOOLS: Tool[] = [
  { name: "Linux VPS", icon: SiLinux },
  { name: "Nginx", icon: SiNginx },
  { name: "Let's Encrypt", icon: SiLetsencrypt },
  { name: "Docker", icon: SiDocker },
  { name: "CI/CD", icon: SiGithubactions },
  { name: "AWS", icon: FaAws },
  { name: "Azure", icon: SiMicrosoftazure },
  { name: "Vercel", icon: SiVercel },
  { name: "Netlify", icon: SiNetlify },
  { name: "Railway", icon: SiRailway },
  { name: "Supabase", icon: SiSupabase },
];

interface PanelProps {
  title: string;
  icon: IconType;
  items: { title: string; desc: string }[];
  tools: Tool[];
}

const Panel = ({ title, icon: Icon, items, tools }: PanelProps) => (
  <div className="flex flex-col gap-6 rounded-xl border-2 border-red-200 bg-white p-6 md:p-8 shadow-lg shadow-red-200">
    <div className="flex items-center gap-3">
      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500 text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    </div>
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.title}>
          <p className="font-semibold text-gray-900">{item.title}</p>
          <p className="text-gray-600">{item.desc}</p>
        </li>
      ))}
    </ul>
    <ul className="mt-auto flex flex-wrap gap-2 border-t border-red-100 pt-5">
      {tools.map(({ name, icon: ToolIcon }) => (
        <li key={name} className="inline-flex items-center gap-1.5 rounded-lg border border-red-300 px-2 py-1 text-sm font-semibold">
          {ToolIcon && <ToolIcon className="h-4 w-4 text-gray-800" aria-hidden="true" />}
          {name}
        </li>
      ))}
    </ul>
  </div>
);

const Expertise = () => {
  const { t } = useLanguage();

  return (
    <section id="expertise" className="relative bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label={t.expertise.label} title={t.expertise.title} subtitle={t.expertise.subtitle} />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Panel title={t.expertise.ai.title} icon={FaRobot} items={t.expertise.ai.items} tools={AI_TOOLS} />
          <Panel title={t.expertise.devops.title} icon={FaCloud} items={t.expertise.devops.items} tools={DEVOPS_TOOLS} />
        </div>
      </div>
    </section>
  );
};

export default Expertise;
