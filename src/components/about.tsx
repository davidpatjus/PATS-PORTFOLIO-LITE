import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaAngular,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiNestjs,
  SiNextdotjs,
} from "react-icons/si";

const About = () => {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
              Sobre mi
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hola, Soy David Patiño
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Desarrollador Full-Stack especializado en desarrollo web, con una pasión por crear aplicaciones intuitivas y escalables.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Mi Historia
                </h3>
                <p className="mt-4 text-lg text-gray-600">
									Soy un desarrollador web apasionado con experiencia en React,
									Next.js y tecnologías web modernas. Me encanta crear sitios
									web hermosos y funcionales que resuelven problemas del mundo
									real.
                </p>
                {/* <img src={MernStack} alt="" className='p-2 rounded-lg w-52 mt-4' /> */}
              </div>
              <div className="border-2 border-red-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                <h3 className="text-2xl font-semibold text-red-600">
                  Mis Habilidades
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
                    <FaReact className="w-8 rounded-full h-8 text-cyan-400" />
                    <span className="font-semibold">React</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <SiTypescript className="w-8 h-8 text-blue-500" />
                    <span className="font-semibold">TypeScript</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <SiTailwindcss className="w-8 rounded-full h-8 text-cyan-500" />
                    <span className="font-semibold">Tailwind Css</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <FaAngular className="w-10 h-8 text-red-600" />
                    <span className="font-semibold">Angular</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <FaNodeJs className="w-10 h-8 text-green-500" />
                    <span className="font-semibold">Node Js</span>
                  </div>
                  <div className="border border-red-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <SiPostgresql className="w-10 h-8 text-cyan-700" />
                    <span className="font-semibold">PostgreSQL</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <SiNestjs className="w-10 h-8 text-red-500" />
                    <span className="font-semibold">Nest Js</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <SiNextdotjs className="w-9 h-8" />
                    <span className="font-semibold">Next Js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              Mis Intereses
            </h3>
            <p className="mt-4 text-lg text-gray-600">
							Me encanta aprender nuevas tecnologías y compartir conocimientos
							con la comunidad. Siempre estoy buscando oportunidades para
							colaborar en proyectos interesantes y desafiantes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
