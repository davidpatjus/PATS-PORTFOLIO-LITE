import { IconType } from "react-icons";
import { FaGraduationCap } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiAngular,
  SiAstro,
  SiTailwindcss,
  SiBootstrap,
  SiVuetify,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiDjango,
  SiGraphql,
  SiJsonwebtokens,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiFirebase,
  SiDrizzle,
  SiSequelize,
  SiPython,
  SiCplusplus,
  SiPhp,
  SiGit,
  SiDocker,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { useLanguage } from "../i18n/context";
import { SkillGroupId } from "../i18n/translations";
import SectionHeading from "./SectionHeading";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

const SKILLS: Record<SkillGroupId, Skill[]> = {
  frontend: [
    { name: "HTML", icon: SiHtml5, color: "text-orange-600" },
    { name: "CSS", icon: SiCss3, color: "text-blue-600" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
    { name: "Vue", icon: SiVuedotjs, color: "text-green-500" },
    { name: "Nuxt", icon: SiNuxtdotjs, color: "text-green-400" },
    { name: "Angular", icon: SiAngular, color: "text-red-600" },
    { name: "Astro", icon: SiAstro, color: "text-orange-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
    { name: "Vuetify", icon: SiVuetify, color: "text-blue-500" },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
    { name: "Express", icon: SiExpress, color: "text-black" },
    { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
    { name: "Django", icon: SiDjango, color: "text-green-800" },
    { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
    { name: "JWT", icon: SiJsonwebtokens, color: "text-purple-700" },
  ],
  databases: [
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-700" },
    { name: "MySQL", icon: SiMysql, color: "text-cyan-900" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
    { name: "Firebase", icon: SiFirebase, color: "text-amber-500" },
    { name: "Drizzle ORM", icon: SiDrizzle, color: "text-lime-600" },
    { name: "Sequelize", icon: SiSequelize, color: "text-blue-600" },
  ],
  tools: [
    { name: "Python", icon: SiPython, color: "text-blue-600" },
    { name: "C++", icon: SiCplusplus, color: "text-blue-800" },
    { name: "PHP", icon: SiPhp, color: "text-indigo-700" },
    { name: "Git", icon: SiGit, color: "text-orange-500" },
    { name: "Docker", icon: SiDocker, color: "text-sky-500" },
    { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    { name: "Figma", icon: SiFigma, color: "text-pink-500" },
  ],
};

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="relative" id="about">
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label={t.about.label} title={t.about.title} subtitle={t.about.subtitle} />
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">{t.about.profileTitle}</h3>
                <div className="mt-4 space-y-4 text-lg text-gray-600">
                  {t.about.profile.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">{t.about.educationTitle}</h3>
                <ul className="mt-4 space-y-4">
                  {t.about.education.map((item) => (
                    <li key={item.title} className="flex gap-4 rounded-lg border border-red-200 bg-white p-4">
                      <FaGraduationCap className="mt-1 h-6 w-6 shrink-0 text-red-500" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-500">
                          {item.place} · {item.period}
                        </p>
                        <p className="mt-1 text-gray-600">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-2 border-red-200 rounded-lg p-5 md:p-7 flex flex-col gap-6 shadow-lg shadow-red-300 bg-white h-max">
              <h3 className="text-2xl font-semibold text-red-600 text-center">{t.about.skillsTitle}</h3>
              {(Object.keys(SKILLS) as SkillGroupId[]).map((group) => (
                <div key={group}>
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    {t.about.skillGroups[group]}
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {SKILLS[group].map(({ name, icon: Icon, color }) => (
                      <li
                        key={name}
                        className="border border-red-300 flex items-center gap-2 px-2 py-1 rounded-lg shadow-sm shadow-red-200"
                      >
                        <Icon className={`w-6 h-6 ${color}`} aria-hidden="true" />
                        <span className="font-semibold text-sm">{name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">{t.about.interestsTitle}</h3>
            <p className="mt-4 text-lg text-gray-600">{t.about.interests}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
