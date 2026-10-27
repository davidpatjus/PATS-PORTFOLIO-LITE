export type Language = 'es' | 'en'

export type ProjectId =
  | 'plexoShop'
  | 'patsSoftwareSolutions'
  | 'marketingIA'
  | 'interiorIA'
  | 'autorBlog'
  | 'arkanoid'
  | 'patsInfographic'
  | 'cruzDelSur'
  | 'recipeFinder'
  | 'shoesFraksma'
  | 'polosFraksma'
  | 'rapCollection'
  | 'nuxt'
  | 'digginTheMovies'
  | 'newsApp'
  | 'oldPortfolio'
  | 'tierMaker'
  | 'githubApi'

const es = {
  meta: {
    title: 'David Patiño | Portafolio',
    description:
      'Portafolio de David Patiño, desarrollador Full-Stack de Pereira, Colombia. Proyectos con React, Next.js, Vue, Nuxt, Node y más.',
  },
  header: {
    about: 'Sobre mi',
    projects: 'Proyectos',
    contact: 'Contacto',
    openMenu: 'Abrir menú principal',
    switchLanguage: 'Switch to English',
  },
  hero: {
    greeting: 'Hola,',
    iAm: 'Soy David',
    role: 'Desarrollador De Software',
    intro:
      'Soy un apasionado desarrollador full-stack dedicado a convertir ideas innovadoras en potentes soluciones digitales. Con una sólida base en desarrollo frontend y backend, doy vida a visiones a través de código limpio y eficiente y diseños cautivadores. Explora mis proyectos para ver cómo la creatividad se une a la tecnología, y vamos a transformar tu próxima gran idea en realidad juntos.',
    cta: 'Contáctame',
    photoAlt: 'Foto de David Patiño',
  },
  about: {
    label: 'Sobre mi',
    title: 'Hola, Soy David Patiño',
    subtitle:
      'Desarrollador Full-Stack especializado en desarrollo web, con una pasión por crear aplicaciones intuitivas y escalables.',
    storyTitle: 'Mi Historia',
    story:
      'Soy un desarrollador Full-Stack junior dedicado, comprometido, autosuficiente, autoexigente y entusiasta de Pereira, Colombia. Actualmente estudio Ingeniería de Sistemas e Informática en la Universidad Tecnológica de Pereira, desde niño tengo una profunda pasión por crear soluciones digitales innovadoras que acorten la brecha entre la tecnología y la experiencia del usuario.',
    skillsTitle: 'Mis Habilidades',
    interestsTitle: 'Mis Intereses',
    interests:
      'Me apasiona la música, especialmente el hip hop y el rap colombiano, y sueño con aplicar mis habilidades para impactar positivamente en la industria musical. Mi constante búsqueda por aprender y mejorar me motiva a enfrentar y superar retos, asegurando que siempre aporto valor a cualquier equipo de desarrollo.',
  },
  projects: {
    title: 'Mis Proyectos',
    screenshotAlt: 'Captura del proyecto',
    items: {
      plexoShop: {
        title: 'Plexo Shop',
        desc: 'Un sitio web de comercio electrónico moderno y receptivo que vende productos de moda y belleza.',
      },
      patsSoftwareSolutions: {
        title: 'PAT´S SOFTWARE SOLUTIONS',
        desc: 'Un sitio web moderno y receptivo que ofrece servicios de desarrollo web y móvil.',
      },
      marketingIA: {
        title: 'Marketing IA Generator',
        desc: 'Un SaaS que genera contenido de marketing utilizando inteligencia artificial.',
      },
      interiorIA: {
        title: 'Interior IA Designer',
        desc: 'Una aplicación web que permite a los usuarios crear diseños de interiores utilizando inteligencia artificial.',
      },
      autorBlog: {
        title: 'Autor Blog Strapi',
        desc: 'Plantilla moderna para un blog usando Strapi como CMS para agregar contenido desde un dashboard.',
      },
      arkanoid: {
        title: 'Arkanoid Retro',
        desc: 'Un juego clásico de romper ladrillos con una bola y una paleta.',
      },
      patsInfographic: {
        title: 'Pats Infographic',
        desc: 'Mi infografía personal profesional con objetivos profesionales y personales.',
      },
      cruzDelSur: {
        title: 'Cruz Del Sur',
        desc: 'Página web de una empresa inmobiliaria desarrollada a partir de una plantilla y conectada con Strapi.',
      },
      recipeFinder: {
        title: 'IA Recipe Finder',
        desc: 'Sitio web que permite encontrar recetas de cocina utilizando inteligencia artificial.',
      },
      shoesFraksma: {
        title: 'Landing Calzado Fraksma Sport',
        desc: 'Una landing page moderna y receptiva para una tienda de zapatos deportivos.',
      },
      polosFraksma: {
        title: 'Landing Polos Fraksma Sport',
        desc: 'Una landing promocional para el Black Friday de una tienda de ropa deportiva.',
      },
      rapCollection: {
        title: 'RAP Collection',
        desc: 'Página web con biblioteca de álbumes de rap colombiano.',
      },
      nuxt: {
        title: 'Introducing Nuxt',
        desc: 'Aplicación web hecha en Nuxt con Vuetify que incluye un CRUD de productos, auth, lifecycle y demás características del framework.',
      },
      digginTheMovies: {
        title: 'Diggin The Movies',
        desc: 'Una aplicación web que permite a los usuarios buscar y ver información sobre películas, personas y series de televisión.',
      },
      newsApp: {
        title: 'News App',
        desc: 'Una aplicación web que permite a los usuarios buscar y ver noticias de todo el mundo.',
      },
      oldPortfolio: {
        title: 'Pats Portafolio Antiguo (Inglés)',
        desc: 'Mi antiguo portafolio personal en inglés.',
      },
      tierMaker: {
        title: 'Tier Maker',
        desc: 'Una aplicación web que permite a los usuarios crear y compartir sus propias listas de clasificación.',
      },
      githubApi: {
        title: 'Github API',
        desc: 'Una API que permite a los usuarios buscar y ver información de los repositorios de Github.',
      },
    } satisfies Record<ProjectId, { title: string; desc: string }>,
  },
  contact: {
    title: 'Ponte en Contacto',
    subtitle: 'Siempre estoy abierto a nuevas oportunidades y colaboraciones. ¡No dudes en ponerte en contacto!',
    formTitle: 'Contáctame',
    nameLabel: 'Nombre',
    namePlaceholder: 'Nombre Completo',
    emailLabel: 'Correo',
    emailPlaceholder: 'Email',
    messageLabel: 'Mensaje',
    messagePlaceholder: 'Escribe Tu Mensaje',
    submit: 'Enviar Mensaje',
    whatsappMessage: (name: string, email: string, message: string) =>
      `👾 Hola David, soy ${name} (${email}).\n\n${message}`,
  },
  whatsappGreeting: '👾 Hola David, ¿cómo estás? Estoy interesado en tus servicios. 👾',
}

export type Translations = typeof es

const en: Translations = {
  meta: {
    title: 'David Patiño | Portfolio',
    description:
      'Portfolio of David Patiño, Full-Stack developer from Pereira, Colombia. Projects built with React, Next.js, Vue, Nuxt, Node and more.',
  },
  header: {
    about: 'About me',
    projects: 'Projects',
    contact: 'Contact',
    openMenu: 'Open main menu',
    switchLanguage: 'Cambiar a español',
  },
  hero: {
    greeting: 'Hi,',
    iAm: "I'm David",
    role: 'Software Developer',
    intro:
      "I'm a passionate full-stack developer dedicated to turning innovative ideas into powerful digital solutions. With a solid foundation in both frontend and backend development, I bring visions to life through clean, efficient code and captivating designs. Explore my projects to see how creativity meets technology, and let's turn your next big idea into reality together.",
    cta: 'Contact me',
    photoAlt: 'Photo of David Patiño',
  },
  about: {
    label: 'About me',
    title: "Hi, I'm David Patiño",
    subtitle: 'Full-Stack developer specialized in web development, passionate about building intuitive and scalable applications.',
    storyTitle: 'My Story',
    story:
      "I'm a dedicated, committed, self-motivated, demanding and enthusiastic junior Full-Stack developer from Pereira, Colombia. I'm currently studying Systems and Computer Engineering at the Universidad Tecnológica de Pereira, and since I was a kid I've had a deep passion for building innovative digital solutions that bridge the gap between technology and user experience.",
    skillsTitle: 'My Skills',
    interestsTitle: 'My Interests',
    interests:
      "I'm passionate about music, especially hip hop and Colombian rap, and I dream of using my skills to make a positive impact on the music industry. My constant drive to learn and improve motivates me to face and overcome challenges, making sure I always add value to any development team.",
  },
  projects: {
    title: 'My Projects',
    screenshotAlt: 'Screenshot of the project',
    items: {
      plexoShop: {
        title: 'Plexo Shop',
        desc: 'A modern, responsive e-commerce website selling fashion and beauty products.',
      },
      patsSoftwareSolutions: {
        title: 'PAT´S SOFTWARE SOLUTIONS',
        desc: 'A modern, responsive website offering web and mobile development services.',
      },
      marketingIA: {
        title: 'Marketing AI Generator',
        desc: 'A SaaS that generates marketing content using artificial intelligence.',
      },
      interiorIA: {
        title: 'Interior AI Designer',
        desc: 'A web app that lets users create interior designs using artificial intelligence.',
      },
      autorBlog: {
        title: 'Author Blog Strapi',
        desc: 'A modern blog template using Strapi as a CMS to add content from a dashboard.',
      },
      arkanoid: {
        title: 'Arkanoid Retro',
        desc: 'A classic brick-breaking game with a ball and a paddle.',
      },
      patsInfographic: {
        title: 'Pats Infographic',
        desc: 'My personal professional infographic with career and personal goals.',
      },
      cruzDelSur: {
        title: 'Cruz Del Sur',
        desc: 'Website for a real estate company, built from a template and connected to Strapi.',
      },
      recipeFinder: {
        title: 'AI Recipe Finder',
        desc: 'A website that helps you find cooking recipes using artificial intelligence.',
      },
      shoesFraksma: {
        title: 'Fraksma Sport Shoes Landing',
        desc: 'A modern, responsive landing page for a sports shoe store.',
      },
      polosFraksma: {
        title: 'Fraksma Sport Polos Landing',
        desc: 'A Black Friday promotional landing page for a sportswear store.',
      },
      rapCollection: {
        title: 'RAP Collection',
        desc: 'A website with a library of Colombian rap albums.',
      },
      nuxt: {
        title: 'Introducing Nuxt',
        desc: 'A web app built with Nuxt and Vuetify featuring a product CRUD, auth, lifecycle hooks and other framework features.',
      },
      digginTheMovies: {
        title: 'Diggin The Movies',
        desc: 'A web app that lets users search and view information about movies, people and TV shows.',
      },
      newsApp: {
        title: 'News App',
        desc: 'A web app that lets users search and read news from around the world.',
      },
      oldPortfolio: {
        title: 'Pats Old English Portfolio',
        desc: 'My previous personal portfolio, in English.',
      },
      tierMaker: {
        title: 'Tier Maker',
        desc: 'A web app that lets users create and share their own tier lists.',
      },
      githubApi: {
        title: 'Github API',
        desc: 'An API that lets users search and view information about Github repositories.',
      },
    },
  },
  contact: {
    title: 'Get in Touch',
    subtitle: "I'm always open to new opportunities and collaborations. Feel free to reach out!",
    formTitle: 'Contact me',
    nameLabel: 'Name',
    namePlaceholder: 'Full Name',
    emailLabel: 'Email',
    emailPlaceholder: 'Email',
    messageLabel: 'Message',
    messagePlaceholder: 'Write your message',
    submit: 'Send Message',
    whatsappMessage: (name: string, email: string, message: string) =>
      `👾 Hi David, I'm ${name} (${email}).\n\n${message}`,
  },
  whatsappGreeting: '👾 Hi David, how are you? I am interested in your services. 👾',
}

export const translations: Record<Language, Translations> = { es, en }
