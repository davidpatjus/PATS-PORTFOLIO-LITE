import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaGitAlt,
  FaBootstrap,
  FaVuejs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiNestjs,
  SiNextdotjs,
  SiCplusplus,
  SiMysql, 
  SiExpress,
  SiAstro,
  SiVuetify,
  SiNuxtdotjs,
} from "react-icons/si";
import { useLanguage } from "../i18n/context";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
              {t.about.label}
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {t.about.title}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              {t.about.subtitle}
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {t.about.storyTitle}
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  {t.about.story}
                </p>
                {/* <img src={MernStack} alt="" className='p-2 rounded-lg w-52 mt-4' /> */}
              </div>
              <div className="border-2 border-red-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                <h3 className="text-2xl font-semibold text-red-600">
                  {t.about.skillsTitle}
                </h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <FaHtml5 className="w-10 h-8 text-orange-600" />
                    <span className="font-semibold">HTML</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <FaCss3 className="w-8 h-8 text-cyan-500" />
                    <span className="font-semibold">CSS</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <FaJsSquare className="w-10 h-8 text-yellow-400" />
                    <span className="font-semibold">Javascript</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <SiTypescript className="w-8 h-8 text-blue-500" />
                    <span className="font-semibold">TypeScript</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <FaReact className="w-8 rounded-full h-8 text-cyan-400" />
                    <span className="font-semibold">React</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <FaVuejs className="w-8 rounded-full h-8 text-green-500" />
                    <span className="font-semibold">Vue</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <SiNextdotjs className="w-9 h-8" />
                    <span className="font-semibold">Next JS</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <SiNuxtdotjs className="w-9 h-8 text-green-400" />
                    <span className="font-semibold">Nuxt</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <FaAngular className="w-10 h-8 text-red-600" />
                    <span className="font-semibold">Angular</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <SiAstro className="w-10 h-8 text-orange-500" />
                    <span className="font-semibold">Astro</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <SiTailwindcss className="w-8 rounded-full h-8 text-cyan-500" />
                    <span className="font-semibold">Tailwind CSS</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <SiVuetify className="w-8 rounded-full h-8   text-blue-500" />
                    <span className="font-semibold">Vuetify 3</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <FaBootstrap  className="w-8 rounded-full h-8 text-purple-600" />
                    <span className="font-semibold">Bootstrap</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <FaNodeJs className="w-10 h-8 text-green-500" />
                    <span className="font-semibold">Node JS</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <SiExpress className="w-10 h-8 " />
                    <span className="font-semibold">Express</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <SiNestjs className="w-10 h-8 text-red-500" />
                    <span className="font-semibold">Nest JS</span>
                  </div>
                  <div className="border border-red-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <SiPostgresql className="w-10 h-8 text-cyan-700" />
                    <span className="font-semibold">PostgreSQL</span>
                  </div>
                  <div className="border border-red-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <SiMysql className="w-10 h-8 text-cyan-900" />
                    <span className="font-semibold">MySQL</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <FaPython className="w-9 h-8 text-yellow-400" />
                    <span className="font-semibold">Python</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <SiCplusplus className="w-9 h-8 text-blue-800" />
                    <span className="font-semibold">C++</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <FaPhp className="w-9 h-8 text-cyan-900" />
                    <span className="font-semibold">php</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <FaGitAlt className="w-9 h-8 text-orange-500" />
                    <span className="font-semibold">Git</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              {t.about.interestsTitle}
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              {t.about.interests}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
