import ProjectCard from '../components/ProjectCard'
import PlexoShop from '/PlexoShop.png'
import PatsSS from '/PatsSoftwareSolutions.png'
import IAMarketing from '/MarketingIAGenerator.png'
import RecipeFinder from '/IARecipeFinder.png'
import ShoesFraksma from '/LandingShoesFraksma.png'
import LandingPolosFraksma from '/LandingPolosFraksma.png'
import RapCollection from '/RapCollection.jpg'
import TierMaker from '/TierMaker.png'
import GithubApi from '/github.jpg'
import DigginTheMovies from '/DigginTheMovies.jpg'
import NewsApp from '/NewsApp.jpg'
import PatsOldPortfolio from '/OldPortfolio.png'
import CruzDelSur from '/CruzDelSur.png'
import AutorBlog from '/AutorBlog.png'
import LearningNuxt from '/Nuxt.png'
import InteriorIADesigner from '/InteriorIADesign.png'
import PatsInfographic from '/PatsInfographic.png'
import ArkanoidGame from '/arkanoidGameJS.png'

const Projects = () => {

    const projectJson = [
        {
          title: 'Plexo Shop',
          desc: 'un sitio web de comercio electrónico moderno y receptivo que vende productos de moda y belleza.',
          image: PlexoShop,
          live: "https://plexoshop.vercel.app/",
          github: "https://github.com/LizethVictoria20/Final-Project---BootcampUTP",
          api: "https://github.com/davidpatjus/PLEXO-API"
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
          title: 'Interior IA Designer',
          desc: 'una aplicación web que permite a los usuarios crear y diseños de interiores utilizando inteligencia artificial.',
          image: InteriorIADesigner,
          live: "https://interior-designer-ia.vercel.app/",
          github: "https://github.com/davidpatjus/INTERIOR-DESIGNER-IA"
        },
        {
          title: 'Autor Blog Strapi',
          desc: 'Plantilla moderna para un blog usando strapi como CMS para agregar contenido desde un dashboard.',
          image: AutorBlog,
          live: "https://autor-blog-template.vercel.app/",
          github: "https://github.com/davidpatjus/Autor-Blog-Template"
        },
        {
          title: 'Arkanoid Retro',
          desc: 'Un juego clásico de romper ladrillos con una bola y una paleta.',
          image: ArkanoidGame,
          live: "https://arkanoidgamejs.netlify.app/",
          github: "https://github.com/davidpatjus/ArkanoidGameJS"
        },
        {
          title: 'Pats Infographic',
          desc: 'Mi infografía personal profesional con objetivos profesionales y personales.',
          image: PatsInfographic,
          live: "https://pats-infographic.vercel.app/",
          github: "https://github.com/davidpatjus/PATS-INFOGRAPHIC"
        },
        {
          title: 'Cruz Del Sur',
          desc: 'Pagina Web de una empresa inmobiliaria desarrollada a partir de una plantilla y conectada con strapi.',
          image: CruzDelSur,
          live: "https://cdelsur.com/",
        },
        {
          title: 'IA Recipe Finder',
          desc: 'sitio web que permite encontrar recetas de cocina utilizando inteligencia artificial.',
          image: RecipeFinder,
          live: "https://ia-recipe-finder.vercel.app/",
          github: "https://github.com/davidpatjus/IA-Recipe-Finder"
        },
        {
          title: 'Landing Calzado Fraksma Sport',
          desc: 'una landing page moderna y receptiva para una tienda de zapatos deportivos.',
          image: ShoesFraksma,
          live: "https://fraksma-shoes-landing.vercel.app/",
          github: "https://github.com/davidpatjus/Fraksma_Shoes_Landing"
        },
        {
          title: 'Landing Polos Fraksma Sport',
          desc: 'Una landing promocional para el black friday de una tienda de ropa deportiva.',
          image: LandingPolosFraksma,
          live: "https://fraksma-polos-landing.vercel.app/",
          github: "https://github.com/davidpatjus/Fraksma_Polos_Landing"
        },
        {
          title: 'RAP Collection',
          desc: 'Pagina Web con biblioteca de albums de rap colombiano.',
          image: RapCollection,
          live: "https://pats-rap-collection.vercel.app/",
          github: "https://github.com/davidpatjus/PATS-RAP-COLLECTION"
        },
        {
          title: 'Introducing Nuxt',
          desc: 'aplicación web hecha en nuxt con vuetify que incluye un CRUD de productos, auth, lyfecicle y demas caracteristicas del framework.',
          image: LearningNuxt,
          live: "https://nuxt-learning-proyect.vercel.app/",
          github: "https://github.com/davidpatjus/NUXT-LEARNING-PROYECT"
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
            {projectJson.map((items, key) => {
                return <ProjectCard key={key} item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects