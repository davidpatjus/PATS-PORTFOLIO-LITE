export type Language = 'es' | 'en'

export type ProjectId =
  | 'paleroSoft'
  | 'marketingIA'
  | 'interiorIA'
  | 'recipeFinder'
  | 'plexoShop'
  | 'cruzDelSur'
  | 'patsSoftwareSolutions'
  | 'autorBlog'
  | 'polosFraksma'
  | 'shoesFraksma'
  | 'rapCollection'
  | 'nuxt'
  | 'digginTheMovies'
  | 'newsApp'
  | 'githubApi'
  | 'patsInfographic'
  | 'arkanoid'
  | 'tierMaker'
  | 'oldPortfolio'

export type ExperienceId = 'menteNueva' | 'freelance' | 'rapeluches'

export type SkillGroupId = 'frontend' | 'backend' | 'databases' | 'tools'

interface ProjectText {
  title: string
  desc: string
}

interface ExperienceText {
  role: string
  company: string
  period: string
  summary: string
  highlights: string[]
}

interface ExpertiseItem {
  title: string
  desc: string
}

const es = {
  meta: {
    title: 'David Patiño | Desarrollador Full-Stack · IA y DevOps',
    description:
      'Portafolio de David Patiño, desarrollador Full-Stack de Pereira, Colombia. Next.js, NestJS, React, Node.js, integración de LLMs, agentes de IA, n8n, Docker y despliegues en VPS y nube.',
  },
  header: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    projects: 'Proyectos',
    expertise: 'IA y DevOps',
    contact: 'Contacto',
    openMenu: 'Abrir menú principal',
    switchLanguage: 'Switch to English',
    downloadCv: 'Descargar CV',
  },
  hero: {
    badge: 'Disponible para nuevas oportunidades',
    greeting: 'Hola,',
    iAm: 'Soy David',
    role: 'Desarrollador Full-Stack · IA y Automatización',
    intro:
      'Construyo productos web completos: desde la interfaz hasta la API, la base de datos y el despliegue. Trabajo principalmente con TypeScript, Next.js, React y NestJS, integro modelos de lenguaje y automatizaciones en flujos reales de negocio, y llevo las aplicaciones a producción en VPS, nube y tiendas de aplicaciones.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Contáctame',
    ctaCv: 'Descargar CV',
    photoAlt: 'Foto de David Patiño',
    stats: [
      { value: '+3', label: 'años construyendo productos web' },
      { value: '+15', label: 'proyectos desplegados' },
      { value: '1', label: 'app publicada en Google Play' },
    ],
  },
  about: {
    label: 'Sobre mí',
    title: 'Ingeniería de software con visión de producto',
    subtitle:
      'Desarrollador Full-Stack de Pereira, Colombia, enfocado en crear aplicaciones escalables, mantenibles y que resuelvan problemas reales de negocio.',
    profileTitle: 'Perfil',
    profile: [
      'Soy estudiante de Ingeniería de Sistemas y Computación en la Universidad Tecnológica de Pereira y desarrollador Full-Stack con experiencia en entornos de agencia y proyectos freelance. Mi experiencia más reciente fue en Mente Nueva Marketing, donde desarrollé PaleroSoft, un CRM con Next.js y NestJS publicado como PWA en Google Play.',
      'Me muevo con comodidad en todo el ciclo de vida de una aplicación: modelado de datos, diseño de APIs REST, autenticación, interfaces responsivas, integración de servicios de terceros (pagos, almacenamiento, videollamadas, IA) y despliegue con Docker, Nginx y certificados SSL.',
      'Mi formación en marketing digital me da una perspectiva distinta: entiendo cómo el software impacta en la conversión, la experiencia del usuario y los objetivos del cliente, y lo aplico al tomar decisiones técnicas.',
    ],
    educationTitle: 'Formación',
    education: [
      {
        title: 'Ingeniería de Sistemas y Computación',
        place: 'Universidad Tecnológica de Pereira (UTP)',
        period: 'En curso',
        desc: 'Algoritmos, estructuras de datos, arquitectura de software, patrones de diseño, redes y servidores.',
      },
      {
        title: 'Coding Bootcamp Full-Stack III y IV',
        place: 'Universidad Tecnológica de Pereira (UTP)',
        period: 'Completado',
        desc: 'Desarrollo frontend y backend, bases de datos, UX/UI y SEO, trabajando en equipo sobre proyectos reales con mentoría.',
      },
    ],
    skillsTitle: 'Stack técnico',
    skillGroups: {
      frontend: 'Frontend',
      backend: 'Backend y APIs',
      databases: 'Bases de datos y ORMs',
      tools: 'Lenguajes y herramientas',
    } satisfies Record<SkillGroupId, string>,
    interestsTitle: 'Más allá del código',
    interests:
      'Me apasionan la música, especialmente el hip hop y el rap colombiano, los videojuegos y la creación de contenido. Me motiva construir tecnología en la intersección de estas industrias y aprender constantemente nuevas herramientas para aportar valor a cualquier equipo.',
  },
  experience: {
    label: 'Experiencia',
    title: 'Trayectoria profesional',
    subtitle: 'Proyectos reales, clientes reales y productos en producción.',
    featuredProject: 'Proyecto destacado',
    items: {
      menteNueva: {
        role: 'Desarrollador Full-Stack',
        company: 'Mente Nueva Marketing',
        period: 'May 2025 – Feb 2026',
        summary:
          'Agencia de marketing digital. Desarrollo de PaleroSoft, plataforma CRM y de gestión de proyectos publicada en Google Play bajo la marca de la agencia.',
        highlights: [
          'Desarrollo full-stack de PaleroSoft con Next.js en el frontend y NestJS en el backend, organizado en módulos independientes.',
          'Implementación de los módulos de autenticación, usuarios, clientes, proyectos, tareas, comentarios, chat y facturación.',
          'Integración de videollamadas con Daily.co para reuniones y de Supabase Storage para la gestión de archivos.',
          'Empaquetado de la aplicación como PWA instalable y publicación en Google Play Store.',
        ],
      },
      freelance: {
        role: 'Desarrollador Full-Stack y Marketing Digital',
        company: 'Freelance',
        period: '2022 – Actualidad',
        summary:
          'Diseño, desarrollo y despliegue de productos web para clientes y proyectos propios, desde landing pages hasta SaaS con IA y pagos.',
        highlights: [
          'SaaS con IA generativa: Marketing IA Generator (Gemini, suscripciones con Mercado Pago) e Interior IA Designer (Replicate, AWS S3, pagos con PayPal).',
          'Sitios con CMS headless Strapi para Cruz del Sur (inmobiliaria en Uruguay) y una plataforma de blog para autores.',
          'Fraksma Sport: gestión de e-commerce en Shopify, landing pages promocionales y campañas de marketing digital.',
          'Despliegues en VPS con Docker, Nginx y SSL, y en plataformas como Vercel, Netlify y Railway.',
        ],
      },
      rapeluches: {
        role: 'Community Manager y Atención al Cliente',
        company: 'Rapeluches',
        period: '2019 – 2022',
        summary: 'Tienda de retail en Pereira, Colombia.',
        highlights: [
          'Gestión de redes sociales, creación de contenido y atención al cliente por canales digitales.',
          'Administración de catálogos digitales y estrategias de marketing para aumentar ventas.',
        ],
      },
    } satisfies Record<ExperienceId, ExperienceText>,
  },
  projects: {
    label: 'Portafolio',
    title: 'Proyectos',
    subtitle: 'Una selección de productos que he diseñado, desarrollado y desplegado.',
    featuredBadge: 'Proyecto destacado',
    modulesTitle: 'Módulos',
    modules: ['Auth', 'Usuarios', 'Clientes', 'Proyectos', 'Tareas', 'Comentarios', 'Chat', 'Facturas', 'Reuniones (Daily.co)', 'Storage (Supabase)'],
    screenshotAlt: 'Captura del proyecto',
    links: {
      live: 'Ver demo',
      github: 'Código',
      api: 'API',
      playStore: 'Google Play',
      website: 'Agencia',
    },
    items: {
      paleroSoft: {
        title: 'PaleroSoft · CRM',
        desc: 'Plataforma CRM y de gestión de proyectos para agencias y equipos remotos: proyectos, tareas, chat, reuniones por video, facturación y gestión de clientes en una sola aplicación. Frontend en Next.js y API modular en NestJS, empaquetada como PWA y publicada en Google Play por Mente Nueva Marketing.',
      },
      marketingIA: {
        title: 'Marketing IA Generator',
        desc: 'SaaS que genera contenido de marketing con IA generativa (Google Gemini). Incluye autenticación con Clerk, historial en PostgreSQL serverless (Neon) con Drizzle ORM, editor de texto enriquecido y suscripciones con Mercado Pago.',
      },
      interiorIA: {
        title: 'Interior IA Designer',
        desc: 'Aplicación que rediseña espacios interiores a partir de una foto usando modelos de imagen en Replicate. Almacena imágenes en AWS S3 con URLs prefirmadas, usa Clerk para autenticación, Drizzle + Neon como base de datos y un sistema de créditos con PayPal.',
      },
      recipeFinder: {
        title: 'IA Recipe Finder',
        desc: 'Buscador de recetas con IA: genera recetas a partir de ingredientes con Google Gemini, guarda favoritos por usuario con Clerk y persiste los datos en PostgreSQL (Supabase) mediante Drizzle ORM.',
      },
      plexoShop: {
        title: 'Plexo Shop',
        desc: 'E-commerce de moda y belleza desarrollado en equipo durante el bootcamp. Construí la API REST con Express, Sequelize y MySQL: autenticación JWT, validación con Zod, pagos con Stripe, carga de imágenes a AWS S3 y correos transaccionales con Brevo.',
      },
      cruzDelSur: {
        title: 'Cruz Del Sur',
        desc: 'Sitio web en producción para una empresa inmobiliaria en Uruguay, con catálogo de propiedades administrable desde Strapi como CMS headless.',
      },
      patsSoftwareSolutions: {
        title: 'PAT´S Software Solutions',
        desc: 'Sitio corporativo para servicios de desarrollo web y móvil, construido con Next.js, TypeScript, Tailwind CSS y animaciones con Framer Motion.',
      },
      autorBlog: {
        title: 'Autor Blog',
        desc: 'Plantilla de blog para autores con contenido administrado desde Strapi, construida con Vite y Tailwind CSS.',
      },
      polosFraksma: {
        title: 'Landing Polos Fraksma Sport',
        desc: 'Landing promocional de Black Friday para una tienda de ropa deportiva, con React, TypeScript, componentes Radix UI y animaciones con Framer Motion.',
      },
      shoesFraksma: {
        title: 'Landing Calzado Fraksma Sport',
        desc: 'Landing page responsiva para la línea de calzado deportivo de Fraksma Sport, enfocada en conversión.',
      },
      rapCollection: {
        title: 'RAP Collection',
        desc: 'Biblioteca web de álbumes de rap colombiano construida con Next.js, TypeScript y Framer Motion.',
      },
      nuxt: {
        title: 'Introducing Nuxt',
        desc: 'Aplicación con Nuxt 3 y Vuetify que explora el framework: CRUD de productos, autenticación, rutas, ciclo de vida y componentes reutilizables.',
      },
      digginTheMovies: {
        title: 'Diggin The Movies',
        desc: 'Explorador de películas, series y personas con React y React Router, consumiendo una API propia en Express que actúa como proxy de TMDB para proteger la API key.',
      },
      newsApp: {
        title: 'News App',
        desc: 'Portal de noticias internacionales con React, Redux Toolkit y RTK Query, respaldado por una API propia en Express.',
      },
      githubApi: {
        title: 'Github API',
        desc: 'API REST en Express que consulta repositorios de GitHub mediante Octokit y almacena resultados en PostgreSQL.',
      },
      patsInfographic: {
        title: 'Pats Infographic',
        desc: 'Infografía profesional interactiva con mis objetivos de carrera, construida con React, TypeScript y Framer Motion.',
      },
      arkanoid: {
        title: 'Arkanoid Retro',
        desc: 'Juego clásico de romper ladrillos desarrollado en JavaScript puro, sin frameworks.',
      },
      tierMaker: {
        title: 'Tier Maker',
        desc: 'Herramienta para crear listas de clasificación arrastrando imágenes, hecha con HTML, CSS y JavaScript puro.',
      },
      oldPortfolio: {
        title: 'Portafolio anterior (inglés)',
        desc: 'Mi primer portafolio personal, construido con Next.js, Framer Motion, Swiper y tsParticles.',
      },
    } satisfies Record<ProjectId, ProjectText>,
  },
  expertise: {
    label: 'Especialidades',
    title: 'IA, automatización y DevOps',
    subtitle:
      'Además del desarrollo full-stack, integro inteligencia artificial en productos reales y me encargo de que las aplicaciones lleguen a producción de forma segura.',
    ai: {
      title: 'Inteligencia Artificial y Automatización',
      items: [
        {
          title: 'Integración de LLMs',
          desc: 'Consumo de APIs de modelos de lenguaje e imagen (Google Gemini, Replicate y otros) para generar contenido, recetas y diseños dentro de productos SaaS.',
        },
        {
          title: 'Vercel AI SDK',
          desc: 'Interfaces de chat con respuestas en streaming, tool calling y salidas estructuradas en aplicaciones Next.js.',
        },
        {
          title: 'Agentes de IA',
          desc: 'Diseño de agentes que razonan en varios pasos y ejecutan herramientas para completar tareas sobre datos y APIs reales.',
        },
        {
          title: 'Model Context Protocol (MCP)',
          desc: 'Conexión de LLMs con herramientas, archivos y servicios externos mediante servidores MCP.',
        },
        {
          title: 'Automatizaciones con n8n',
          desc: 'Flujos con webhooks, integraciones entre APIs y pasos con LLMs para automatizar procesos de negocio y marketing.',
        },
      ] satisfies ExpertiseItem[],
    },
    devops: {
      title: 'DevOps y Cloud',
      items: [
        {
          title: 'Servidores VPS Linux',
          desc: 'Configuración y despliegue de aplicaciones Node.js y Next.js en VPS, gestión de procesos y dominios.',
        },
        {
          title: 'Nginx, proxies y SSL',
          desc: 'Reverse proxy con Nginx, certificados SSL de Let’s Encrypt con Certbot y configuración de DNS.',
        },
        {
          title: 'Docker y Docker Compose',
          desc: 'Contenerización de frontends, APIs y bases de datos para entornos reproducibles de desarrollo y producción.',
        },
        {
          title: 'CI/CD',
          desc: 'Pipelines de integración y despliegue continuo para publicar cambios de forma automática y confiable.',
        },
        {
          title: 'AWS, Azure y PaaS',
          desc: 'Servicios en la nube como AWS S3, despliegues en Azure y plataformas como Vercel, Netlify, Railway y Supabase.',
        },
      ] satisfies ExpertiseItem[],
    },
  },
  contact: {
    label: 'Contacto',
    title: 'Trabajemos juntos',
    subtitle:
      'Estoy buscando nuevas oportunidades como desarrollador Full-Stack. Si tienes una vacante, un proyecto o una idea, escríbeme y te respondo pronto.',
    location: 'Pereira, Colombia',
    formTitle: 'Envíame un mensaje',
    nameLabel: 'Nombre',
    namePlaceholder: 'Tu nombre completo',
    emailLabel: 'Correo',
    emailPlaceholder: 'tu@correo.com',
    messageLabel: 'Mensaje',
    messagePlaceholder: 'Cuéntame sobre la vacante o el proyecto',
    submit: 'Enviar por WhatsApp',
    whatsappMessage: (name: string, email: string, message: string) =>
      `👾 Hola David, soy ${name} (${email}).\n\n${message}`,
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    builtWith: 'Hecho con React, TypeScript y Tailwind CSS.',
  },
  cvFile: '/cv/David-Patino-CV-ES.pdf',
  whatsappGreeting: '👾 Hola David, ¿cómo estás? Vi tu portafolio y me gustaría hablar contigo. 👾',
}

export type Translations = typeof es

const en: Translations = {
  meta: {
    title: 'David Patiño | Full-Stack Developer · AI & DevOps',
    description:
      'Portfolio of David Patiño, Full-Stack developer from Pereira, Colombia. Next.js, NestJS, React, Node.js, LLM integration, AI agents, n8n, Docker and deployments on VPS and cloud.',
  },
  header: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    expertise: 'AI & DevOps',
    contact: 'Contact',
    openMenu: 'Open main menu',
    switchLanguage: 'Cambiar a español',
    downloadCv: 'Download CV',
  },
  hero: {
    badge: 'Open to new opportunities',
    greeting: 'Hi,',
    iAm: "I'm David",
    role: 'Full-Stack Developer · AI & Automation',
    intro:
      'I build complete web products: from the interface to the API, the database and the deployment. I mainly work with TypeScript, Next.js, React and NestJS, I integrate language models and automations into real business workflows, and I ship applications to production on VPS, cloud and app stores.',
    ctaProjects: 'View projects',
    ctaContact: 'Contact me',
    ctaCv: 'Download CV',
    photoAlt: 'Photo of David Patiño',
    stats: [
      { value: '3+', label: 'years building web products' },
      { value: '15+', label: 'deployed projects' },
      { value: '1', label: 'app published on Google Play' },
    ],
  },
  about: {
    label: 'About',
    title: 'Software engineering with a product mindset',
    subtitle:
      'Full-Stack developer from Pereira, Colombia, focused on building scalable, maintainable applications that solve real business problems.',
    profileTitle: 'Profile',
    profile: [
      "I'm a Systems and Computer Engineering student at the Universidad Tecnológica de Pereira and a Full-Stack developer with experience in agency and freelance environments. Most recently I worked at Mente Nueva Marketing, where I developed PaleroSoft, a CRM built with Next.js and NestJS and published as a PWA on Google Play.",
      "I'm comfortable across the whole application lifecycle: data modeling, REST API design, authentication, responsive interfaces, third-party integrations (payments, storage, video calls, AI) and deployment with Docker, Nginx and SSL certificates.",
      'My background in digital marketing gives me a different perspective: I understand how software affects conversion, user experience and client goals, and I bring that into my technical decisions.',
    ],
    educationTitle: 'Education',
    education: [
      {
        title: 'Systems and Computer Engineering',
        place: 'Universidad Tecnológica de Pereira (UTP)',
        period: 'In progress',
        desc: 'Algorithms, data structures, software architecture, design patterns, networking and servers.',
      },
      {
        title: 'Full-Stack Coding Bootcamp III & IV',
        place: 'Universidad Tecnológica de Pereira (UTP)',
        period: 'Completed',
        desc: 'Frontend and backend development, databases, UX/UI and SEO, working in teams on real projects with mentorship.',
      },
    ],
    skillsTitle: 'Tech stack',
    skillGroups: {
      frontend: 'Frontend',
      backend: 'Backend & APIs',
      databases: 'Databases & ORMs',
      tools: 'Languages & tools',
    },
    interestsTitle: 'Beyond code',
    interests:
      "I'm passionate about music, especially hip hop and Colombian rap, video games and content creation. I'm driven to build technology at the intersection of these industries and to keep learning new tools so I can add value to any team.",
  },
  experience: {
    label: 'Experience',
    title: 'Professional journey',
    subtitle: 'Real projects, real clients and products running in production.',
    featuredProject: 'Featured project',
    items: {
      menteNueva: {
        role: 'Full-Stack Developer',
        company: 'Mente Nueva Marketing',
        period: 'May 2025 – Feb 2026',
        summary:
          'Digital marketing agency. Developed PaleroSoft, a CRM and project management platform published on Google Play under the agency’s brand.',
        highlights: [
          'Full-stack development of PaleroSoft with Next.js on the frontend and NestJS on the backend, organized into independent modules.',
          'Built the authentication, users, clients, projects, tasks, comments, chat and invoicing modules.',
          'Integrated Daily.co video calls for meetings and Supabase Storage for file management.',
          'Packaged the application as an installable PWA and published it on the Google Play Store.',
        ],
      },
      freelance: {
        role: 'Full-Stack Developer & Digital Marketing',
        company: 'Freelance',
        period: '2022 – Present',
        summary:
          'Design, development and deployment of web products for clients and personal projects, from landing pages to AI-powered SaaS with payments.',
        highlights: [
          'Generative AI SaaS: Marketing IA Generator (Gemini, Mercado Pago subscriptions) and Interior IA Designer (Replicate, AWS S3, PayPal payments).',
          'Websites powered by Strapi as a headless CMS for Cruz del Sur (a real estate company in Uruguay) and a blogging platform for authors.',
          'Fraksma Sport: Shopify e-commerce management, promotional landing pages and digital marketing campaigns.',
          'Deployments on VPS with Docker, Nginx and SSL, and on platforms such as Vercel, Netlify and Railway.',
        ],
      },
      rapeluches: {
        role: 'Community Manager & Customer Support',
        company: 'Rapeluches',
        period: '2019 – 2022',
        summary: 'Retail store in Pereira, Colombia.',
        highlights: [
          'Social media management, content creation and customer support through digital channels.',
          'Managed digital catalogs and marketing strategies to increase sales.',
        ],
      },
    },
  },
  projects: {
    label: 'Portfolio',
    title: 'Projects',
    subtitle: "A selection of products I've designed, built and deployed.",
    featuredBadge: 'Featured project',
    modulesTitle: 'Modules',
    modules: ['Auth', 'Users', 'Clients', 'Projects', 'Tasks', 'Comments', 'Chat', 'Invoices', 'Meetings (Daily.co)', 'Storage (Supabase)'],
    screenshotAlt: 'Screenshot of the project',
    links: {
      live: 'Live demo',
      github: 'Code',
      api: 'API',
      playStore: 'Google Play',
      website: 'Agency',
    },
    items: {
      paleroSoft: {
        title: 'PaleroSoft · CRM',
        desc: 'CRM and project management platform for agencies and remote teams: projects, tasks, chat, video meetings, invoicing and client management in a single app. Next.js frontend and a modular NestJS API, packaged as a PWA and published on Google Play by Mente Nueva Marketing.',
      },
      marketingIA: {
        title: 'Marketing AI Generator',
        desc: 'SaaS that generates marketing content with generative AI (Google Gemini). Features Clerk authentication, history stored in serverless PostgreSQL (Neon) with Drizzle ORM, a rich text editor and Mercado Pago subscriptions.',
      },
      interiorIA: {
        title: 'Interior AI Designer',
        desc: 'App that redesigns interior spaces from a photo using image models on Replicate. Stores images in AWS S3 with presigned URLs, uses Clerk for auth, Drizzle + Neon as the database and a PayPal credit system.',
      },
      recipeFinder: {
        title: 'AI Recipe Finder',
        desc: 'AI recipe finder: generates recipes from ingredients with Google Gemini, saves per-user favorites with Clerk and persists data in PostgreSQL (Supabase) through Drizzle ORM.',
      },
      plexoShop: {
        title: 'Plexo Shop',
        desc: 'Fashion and beauty e-commerce built as a team during the bootcamp. I built the REST API with Express, Sequelize and MySQL: JWT authentication, Zod validation, Stripe payments, image uploads to AWS S3 and transactional emails with Brevo.',
      },
      cruzDelSur: {
        title: 'Cruz Del Sur',
        desc: 'Production website for a real estate company in Uruguay, with a property catalog managed from Strapi as a headless CMS.',
      },
      patsSoftwareSolutions: {
        title: 'PAT´S Software Solutions',
        desc: 'Corporate website for web and mobile development services, built with Next.js, TypeScript, Tailwind CSS and Framer Motion animations.',
      },
      autorBlog: {
        title: 'Author Blog',
        desc: 'Blog template for authors with content managed from Strapi, built with Vite and Tailwind CSS.',
      },
      polosFraksma: {
        title: 'Fraksma Sport Polos Landing',
        desc: 'Black Friday promotional landing for a sportswear store, built with React, TypeScript, Radix UI components and Framer Motion animations.',
      },
      shoesFraksma: {
        title: 'Fraksma Sport Shoes Landing',
        desc: 'Conversion-focused responsive landing page for Fraksma Sport’s athletic footwear line.',
      },
      rapCollection: {
        title: 'RAP Collection',
        desc: 'Web library of Colombian rap albums built with Next.js, TypeScript and Framer Motion.',
      },
      nuxt: {
        title: 'Introducing Nuxt',
        desc: 'Nuxt 3 and Vuetify app exploring the framework: product CRUD, authentication, routing, lifecycle hooks and reusable components.',
      },
      digginTheMovies: {
        title: 'Diggin The Movies',
        desc: 'Movie, TV show and people explorer built with React and React Router, consuming my own Express API that proxies TMDB to keep the API key private.',
      },
      newsApp: {
        title: 'News App',
        desc: 'International news portal built with React, Redux Toolkit and RTK Query, backed by my own Express API.',
      },
      githubApi: {
        title: 'Github API',
        desc: 'Express REST API that queries GitHub repositories through Octokit and stores results in PostgreSQL.',
      },
      patsInfographic: {
        title: 'Pats Infographic',
        desc: 'Interactive professional infographic with my career goals, built with React, TypeScript and Framer Motion.',
      },
      arkanoid: {
        title: 'Arkanoid Retro',
        desc: 'Classic brick-breaker game built with plain JavaScript, no frameworks.',
      },
      tierMaker: {
        title: 'Tier Maker',
        desc: 'Tool to build tier lists by dragging images, made with plain HTML, CSS and JavaScript.',
      },
      oldPortfolio: {
        title: 'Previous portfolio (English)',
        desc: 'My first personal portfolio, built with Next.js, Framer Motion, Swiper and tsParticles.',
      },
    },
  },
  expertise: {
    label: 'Expertise',
    title: 'AI, automation and DevOps',
    subtitle:
      'Beyond full-stack development, I integrate artificial intelligence into real products and make sure applications reach production securely.',
    ai: {
      title: 'Artificial Intelligence & Automation',
      items: [
        {
          title: 'LLM integration',
          desc: 'Consuming language and image model APIs (Google Gemini, Replicate and others) to generate content, recipes and designs inside SaaS products.',
        },
        {
          title: 'Vercel AI SDK',
          desc: 'Chat interfaces with streaming responses, tool calling and structured outputs in Next.js applications.',
        },
        {
          title: 'AI agents',
          desc: 'Designing agents that reason over multiple steps and call tools to complete tasks on real data and APIs.',
        },
        {
          title: 'Model Context Protocol (MCP)',
          desc: 'Connecting LLMs to tools, files and external services through MCP servers.',
        },
        {
          title: 'Automation with n8n',
          desc: 'Workflows with webhooks, API integrations and LLM steps to automate business and marketing processes.',
        },
      ],
    },
    devops: {
      title: 'DevOps & Cloud',
      items: [
        {
          title: 'Linux VPS servers',
          desc: 'Setting up and deploying Node.js and Next.js applications on VPS, managing processes and domains.',
        },
        {
          title: 'Nginx, proxies & SSL',
          desc: 'Nginx reverse proxy, Let’s Encrypt SSL certificates with Certbot and DNS configuration.',
        },
        {
          title: 'Docker & Docker Compose',
          desc: 'Containerizing frontends, APIs and databases for reproducible development and production environments.',
        },
        {
          title: 'CI/CD',
          desc: 'Continuous integration and deployment pipelines to ship changes automatically and reliably.',
        },
        {
          title: 'AWS, Azure & PaaS',
          desc: 'Cloud services such as AWS S3, deployments on Azure and platforms like Vercel, Netlify, Railway and Supabase.',
        },
      ],
    },
  },
  contact: {
    label: 'Contact',
    title: "Let's work together",
    subtitle:
      "I'm looking for new opportunities as a Full-Stack developer. If you have a role, a project or an idea, send me a message and I'll get back to you soon.",
    location: 'Pereira, Colombia',
    formTitle: 'Send me a message',
    nameLabel: 'Name',
    namePlaceholder: 'Your full name',
    emailLabel: 'Email',
    emailPlaceholder: 'you@email.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell me about the role or project',
    submit: 'Send via WhatsApp',
    whatsappMessage: (name: string, email: string, message: string) =>
      `👾 Hi David, I'm ${name} (${email}).\n\n${message}`,
  },
  footer: {
    rights: 'All rights reserved.',
    builtWith: 'Built with React, TypeScript and Tailwind CSS.',
  },
  cvFile: '/cv/David-Patino-Resume-EN.pdf',
  whatsappGreeting: "👾 Hi David, how are you? I saw your portfolio and I'd like to talk with you. 👾",
}

export const translations: Record<Language, Translations> = { es, en }
