import ProjectCard from '../components/ProjectCard'
import PlexoShop from '/PlexoShop.png'
import PatsSS from '/PatsSoftwareSolutions.png'
import IAMarketing from '/MarketingIAGenerator.png'
import RecipeFinder from '/IARecipeFinder.png'
import ShoesFraksma from '/LandingShoesFraksma.png'
import RapCollection from '/RapCollection.jpg'
import TierMaker from '/TierMaker.png'
import GithubApi from '/github.jpg'
import DigginTheMovies from '/DigginTheMovies.jpg'
import NewsApp from '/NewsApp.jpg'
import PatsOldPortfolio from '/OldPortfolio.png'

const Projects = () => {

    const projectJson = [
        {
          title: 'Plexo Shop',
          desc: 'un sitio web de comercio electrónico moderno y receptivo que vende productos de moda y belleza.',
          image: PlexoShop,
          live: "https://plexoshop.vercel.app/",
          github: "https://github.com/LizethVictoria20/Final-Project---BootcampUTP"
        },
        {
          title: 'PAT´S SOFTWARE SOLUTIONS',
          desc: 'un sitio web moderno y receptivo que ofrece servicios de desarrollo web y móvil.',
          image: PatsSS,
          live: "https://pats-software-solutions.vercel.app/",
          github: "https://github.com/davidpatjus/PATS-SOFTWARE-SOLUTIONS"
        },
        {
          title: 'Marketing IA Generator',
          desc: 'un SaaS que genera contenido de marketing utilizando inteligencia artificial.',
          image: IAMarketing,
          live: "https://pats-marketing-ia-generator.vercel.app/",
          github: "https://github.com/davidpatjus/Marketing-IA-Generator"
        },
        {
          title: 'IA Recipe Finder',
          desc: 'sitio web que permite encontrar recetas de cocina utilizando inteligencia artificial.',
          image: RecipeFinder,
          live: "https://ia-recipe-finder.vercel.app/",
          github: "https://github.com/davidpatjus/IA-Recipe-Finder"
        },
        {
          title: 'Landing Fraksma Sport',
          desc: 'una landing page moderna y receptiva para una tienda de zapatos deportivos.',
          image: ShoesFraksma,
          live: "https://fraksmasport.co/landing-zapatos",
          github: "https://github.com/davidpatjus/Fraksma_Shoes_Landing"
        },
        {
          title: 'RAP Collection',
          desc: 'Pagina Web con biblioteca de albums de rap colombiano.',
          image: RapCollection,
          live: "https://pats-rap-collection.vercel.app/",
          github: "https://github.com/davidpatjus/PATS-RAP-COLLECTION"
        },
        {
          title: 'Diggin The Movies',
          desc: 'una aplicación web que permite a los usuarios buscar y ver información sobre películas, personas y series de televisión.',
          image: DigginTheMovies,
          live: "https://patsdigginthemovies.netlify.app/",
          github: "https://github.com/davidpatjus/DigginTheMovies",
          api: "https://github.com/davidpatjus/TMDB-API"
        },
        {
          title: 'News App',
          desc: 'una aplicación web que permite a los usuarios buscar y ver noticias de todo el mundo.',
          image: NewsApp,
          live: "https://patsnewsapp.netlify.app/",
          github: "https://github.com/davidpatjus/News-App",
          api: "https://github.com/davidpatjus/NEWS-API"
        },
        {
          title: 'Pats English old Portfolio',
          desc: 'mi antiguo portafolio personal en ingles.',
          image: PatsOldPortfolio,
          live: "https://pat-s-life-portfolio.vercel.app/",
          github: "https://github.com/davidpatjus/PAT-S-LIFE-PORTFOLIO"
        },
        {
          title: 'Tier Maker',
          desc: 'una aplicación web que permite a los usuarios crear y compartir sus propias listas de clasificación.',
          image: TierMaker,
          live: "https://patstiermaker.netlify.app/",
          github: "https://github.com/davidpatjus/PATS-TIER-MAKER"
        },
        {
          title: 'Github API',
          desc: 'una API que permite a los usuarios buscar y ver información de los repositorios de Github.',
          image: GithubApi,
          github: "https://github.com/davidpatjus/GITHUB-API"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>Mis Proyectos</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <ProjectCard item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects