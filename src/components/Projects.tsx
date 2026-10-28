import ProjectCard, { ProjectLinkButtons, ProjectLinks, TagList } from '../components/ProjectCard'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/context'
import { ProjectId } from '../i18n/translations'
import PaleroSoft from '/PaleroSoft.webp'
import PlexoShop from '/PlexoShop.webp'
import PatsSS from '/PatsSoftwareSolutions.webp'
import IAMarketing from '/MarketingIAGenerator.webp'
import RecipeFinder from '/IARecipeFinder.webp'
import ShoesFraksma from '/LandingShoesFraksma.webp'
import LandingPolosFraksma from '/LandingPolosFraksma.webp'
import RapCollection from '/RapCollection.webp'
import TierMaker from '/TierMaker.webp'
import GithubApi from '/github.webp'
import DigginTheMovies from '/DigginTheMovies.webp'
import NewsApp from '/NewsApp.webp'
import PatsOldPortfolio from '/OldPortfolio.webp'
import CruzDelSur from '/CruzDelSur.webp'
import AutorBlog from '/AutorBlog.webp'
import LearningNuxt from '/Nuxt.webp'
import InteriorIADesigner from '/InteriorIADesign.webp'
import PatsInfographic from '/PatsInfographic.webp'
import ArkanoidGame from '/arkanoidGameJS.webp'

interface Project extends ProjectLinks {
  id: ProjectId;
  image: string;
  tags: string[];
}

const FEATURED: Project = {
  id: 'paleroSoft',
  image: PaleroSoft,
  tags: ['Next.js', 'NestJS', 'TypeScript', 'Supabase Storage', 'Daily.co', 'PWA'],
  live: "https://palero-soft-app.vercel.app/",
  playStore: "https://play.google.com/store/apps/details?id=com.palerosoft.app&hl=es_CO",
  website: "https://www.mentenuevamarketing.com/",
}

const PROJECTS: Project[] = [
  {
    id: 'marketingIA',
    image: IAMarketing,
    tags: ['Next.js', 'Gemini API', 'Clerk', 'Drizzle', 'Neon', 'Mercado Pago'],
    live: "https://pats-marketing-ia-generator.vercel.app/",
    github: "https://github.com/davidpatjus/Marketing-IA-Generator"
  },
  {
    id: 'interiorIA',
    image: InteriorIADesigner,
    tags: ['Next.js', 'Replicate', 'AWS S3', 'Clerk', 'Drizzle', 'PayPal'],
    live: "https://interior-designer-ia.vercel.app/",
    github: "https://github.com/davidpatjus/INTERIOR-DESIGNER-IA"
  },
  {
    id: 'recipeFinder',
    image: RecipeFinder,
    tags: ['Next.js', 'Gemini API', 'Clerk', 'Supabase', 'Drizzle'],
    live: "https://ia-recipe-finder.vercel.app/",
    github: "https://github.com/davidpatjus/IA-Recipe-Finder"
  },
  {
    id: 'plexoShop',
    image: PlexoShop,
    tags: ['Express', 'Sequelize', 'MySQL', 'JWT', 'Stripe', 'AWS S3'],
    live: "https://plexoshop.vercel.app/",
    github: "https://github.com/LizethVictoria20/Final-Project---BootcampUTP",
    api: "https://github.com/davidpatjus/PLEXO-API"
  },
  {
    id: 'cruzDelSur',
    image: CruzDelSur,
    tags: ['Strapi', 'Headless CMS'],
    live: "https://cdelsur.com/",
  },
  {
    id: 'patsSoftwareSolutions',
    image: PatsSS,
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    live: "https://pats-software-solutions.vercel.app/",
    github: "https://github.com/davidpatjus/PATS-SOFTWARE-SOLUTIONS"
  },
  {
    id: 'autorBlog',
    image: AutorBlog,
    tags: ['Strapi', 'Vite', 'Tailwind'],
    live: "https://autor-blog-template.vercel.app/",
    github: "https://github.com/davidpatjus/Autor-Blog-Template"
  },
  {
    id: 'polosFraksma',
    image: LandingPolosFraksma,
    tags: ['React', 'TypeScript', 'Radix UI', 'Framer Motion'],
    live: "https://fraksma-polos-landing.vercel.app/",
    github: "https://github.com/davidpatjus/Fraksma_Polos_Landing"
  },
  {
    id: 'shoesFraksma',
    image: ShoesFraksma,
    tags: ['HTML', 'CSS', 'JavaScript'],
    live: "https://fraksma-shoes-landing.vercel.app/",
    github: "https://github.com/davidpatjus/Fraksma_Shoes_Landing"
  },
  {
    id: 'rapCollection',
    image: RapCollection,
    tags: ['Next.js', 'TypeScript', 'Framer Motion'],
    live: "https://pats-rap-collection.vercel.app/",
    github: "https://github.com/davidpatjus/PATS-RAP-COLLECTION"
  },
  {
    id: 'nuxt',
    image: LearningNuxt,
    tags: ['Nuxt 3', 'Vue', 'Vuetify'],
    live: "https://nuxt-learning-proyect.vercel.app/",
    github: "https://github.com/davidpatjus/NUXT-LEARNING-PROYECT"
  },
  {
    id: 'digginTheMovies',
    image: DigginTheMovies,
    tags: ['React', 'React Router', 'Express', 'TMDB API'],
    live: "https://patsdigginthemovies.netlify.app/",
    github: "https://github.com/davidpatjus/DigginTheMovies",
    api: "https://github.com/davidpatjus/TMDB-API"
  },
  {
    id: 'newsApp',
    image: NewsApp,
    tags: ['React', 'Redux Toolkit', 'RTK Query', 'Express'],
    live: "https://patsnewsapp.netlify.app/",
    github: "https://github.com/davidpatjus/News-App",
    api: "https://github.com/davidpatjus/NEWS-API"
  },
  {
    id: 'githubApi',
    image: GithubApi,
    tags: ['Express', 'Octokit', 'PostgreSQL'],
    github: "https://github.com/davidpatjus/GITHUB-API"
  },
  {
    id: 'patsInfographic',
    image: PatsInfographic,
    tags: ['React', 'TypeScript', 'Framer Motion'],
    live: "https://pats-infographic.vercel.app/",
    github: "https://github.com/davidpatjus/PATS-INFOGRAPHIC"
  },
  {
    id: 'arkanoid',
    image: ArkanoidGame,
    tags: ['JavaScript', 'HTML', 'CSS'],
    live: "https://arkanoidgamejs.netlify.app/",
    github: "https://github.com/davidpatjus/ArkanoidGameJS"
  },
  {
    id: 'tierMaker',
    image: TierMaker,
    tags: ['JavaScript', 'HTML', 'CSS'],
    live: "https://patstiermaker.netlify.app/",
    github: "https://github.com/davidpatjus/PATS-TIER-MAKER"
  },
  {
    id: 'oldPortfolio',
    image: PatsOldPortfolio,
    tags: ['Next.js', 'Framer Motion', 'Swiper'],
    live: "https://pat-s-life-portfolio.vercel.app/",
    github: "https://github.com/davidpatjus/PAT-S-LIFE-PORTFOLIO"
  },
]

const Projects = () => {
  const { t } = useLanguage()
  const featured = t.projects.items[FEATURED.id]

  return (
    <section id='projects' className='relative bg-gray-700 py-16 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <SectionHeading label={t.projects.label} title={t.projects.title} subtitle={t.projects.subtitle} dark />

        <article className='mb-12 grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-xl border-2 border-red-500 bg-red-50 shadow-xl shadow-red-500/30'>
          <img
            src={FEATURED.image}
            alt={`${t.projects.screenshotAlt} ${featured.title}`}
            width={800}
            height={400}
            loading='lazy'
            className='h-full w-full object-cover'
          />
          <div className='flex flex-col gap-4 p-6 lg:p-8'>
            <span className='w-max rounded-full bg-red-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white'>
              {t.projects.featuredBadge}
            </span>
            <h3 className='text-2xl md:text-3xl font-bold text-gray-900'>{featured.title}</h3>
            <p className='text-gray-700'>{featured.desc}</p>
            <div>
              <h4 className='mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500'>{t.projects.modulesTitle}</h4>
              <ul className='flex flex-wrap gap-1.5'>
                {t.projects.modules.map((module) => (
                  <li key={module} className='rounded-md bg-gray-800 px-2 py-0.5 text-xs font-medium text-white'>{module}</li>
                ))}
              </ul>
            </div>
            <TagList tags={FEATURED.tags} />
            <ProjectLinkButtons links={FEATURED} />
          </div>
        </article>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10'>
            {PROJECTS.map((project) => {
                return <ProjectCard key={project.id} item={{ ...project, ...t.projects.items[project.id] }}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
