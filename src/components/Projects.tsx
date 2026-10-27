import ProjectCard from '../components/ProjectCard'
import { useLanguage } from '../i18n/context'
import { ProjectId } from '../i18n/translations'
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

interface Project {
  id: ProjectId;
  image: string;
  live?: string;
  github?: string;
  api?: string;
}

const Projects = () => {
    const { t } = useLanguage()

    const projectJson: Project[] = [
        {
          id: 'plexoShop',
          image: PlexoShop,
          live: "https://plexoshop.vercel.app/",
          github: "https://github.com/LizethVictoria20/Final-Project---BootcampUTP",
          api: "https://github.com/davidpatjus/PLEXO-API"
        },
        {
          id: 'patsSoftwareSolutions',
          image: PatsSS,
          live: "https://pats-software-solutions.vercel.app/",
          github: "https://github.com/davidpatjus/PATS-SOFTWARE-SOLUTIONS"
        },
        {
          id: 'marketingIA',
          image: IAMarketing,
          live: "https://pats-marketing-ia-generator.vercel.app/",
          github: "https://github.com/davidpatjus/Marketing-IA-Generator"
        },
        {
          id: 'interiorIA',
          image: InteriorIADesigner,
          live: "https://interior-designer-ia.vercel.app/",
          github: "https://github.com/davidpatjus/INTERIOR-DESIGNER-IA"
        },
        {
          id: 'autorBlog',
          image: AutorBlog,
          live: "https://autor-blog-template.vercel.app/",
          github: "https://github.com/davidpatjus/Autor-Blog-Template"
        },
        {
          id: 'arkanoid',
          image: ArkanoidGame,
          live: "https://arkanoidgamejs.netlify.app/",
          github: "https://github.com/davidpatjus/ArkanoidGameJS"
        },
        {
          id: 'patsInfographic',
          image: PatsInfographic,
          live: "https://pats-infographic.vercel.app/",
          github: "https://github.com/davidpatjus/PATS-INFOGRAPHIC"
        },
        {
          id: 'cruzDelSur',
          image: CruzDelSur,
          live: "https://cdelsur.com/",
        },
        {
          id: 'recipeFinder',
          image: RecipeFinder,
          live: "https://ia-recipe-finder.vercel.app/",
          github: "https://github.com/davidpatjus/IA-Recipe-Finder"
        },
        {
          id: 'shoesFraksma',
          image: ShoesFraksma,
          live: "https://fraksma-shoes-landing.vercel.app/",
          github: "https://github.com/davidpatjus/Fraksma_Shoes_Landing"
        },
        {
          id: 'polosFraksma',
          image: LandingPolosFraksma,
          live: "https://fraksma-polos-landing.vercel.app/",
          github: "https://github.com/davidpatjus/Fraksma_Polos_Landing"
        },
        {
          id: 'rapCollection',
          image: RapCollection,
          live: "https://pats-rap-collection.vercel.app/",
          github: "https://github.com/davidpatjus/PATS-RAP-COLLECTION"
        },
        {
          id: 'nuxt',
          image: LearningNuxt,
          live: "https://nuxt-learning-proyect.vercel.app/",
          github: "https://github.com/davidpatjus/NUXT-LEARNING-PROYECT"
        },
        {
          id: 'digginTheMovies',
          image: DigginTheMovies,
          live: "https://patsdigginthemovies.netlify.app/",
          github: "https://github.com/davidpatjus/DigginTheMovies",
          api: "https://github.com/davidpatjus/TMDB-API"
        },
        {
          id: 'newsApp',
          image: NewsApp,
          live: "https://patsnewsapp.netlify.app/",
          github: "https://github.com/davidpatjus/News-App",
          api: "https://github.com/davidpatjus/NEWS-API"
        },
        {
          id: 'oldPortfolio',
          image: PatsOldPortfolio,
          live: "https://pat-s-life-portfolio.vercel.app/",
          github: "https://github.com/davidpatjus/PAT-S-LIFE-PORTFOLIO"
        },
        {
          id: 'tierMaker',
          image: TierMaker,
          live: "https://patstiermaker.netlify.app/",
          github: "https://github.com/davidpatjus/PATS-TIER-MAKER"
        },
        {
          id: 'githubApi',
          image: GithubApi,
          github: "https://github.com/davidpatjus/GITHUB-API"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>{t.projects.title}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((project) => {
                return <ProjectCard key={project.id} item={{ ...project, ...t.projects.items[project.id] }}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects