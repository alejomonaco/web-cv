import { getProjectCases } from './projectCases';
import { Language, ThemePreference, TranslationContent } from '../types/portfolio';

export const languageOptions: Array<{ code: Language; label: string }> = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'ca', label: 'Català' }
];

export const themeOptions: Array<{ code: ThemePreference }> = [
  { code: 'system' },
  { code: 'light' },
  { code: 'dark' }
];

export const personalInfo = {
  name: 'Alejandro Monaco',
  email: 'alejandroacostamontoya@gmail.com',
  academicEmail: 'a.montoya@students.salle.url.edu',
  linkedin: 'https://linkedin.com/in/alejandromonaco23',
  github: 'https://github.com/alejomonaco'
};

export const baseFeaturedProject = {
  name: 'Appoke',
  technologies: ['Python', 'Kivy', 'SQLite', 'Plyer', 'Android + Windows'],
  imageUrl: '/projects/appoke-cover.jpg',
  demoUrl: undefined,
  githubUrl: personalInfo.github
};

export const translations: Record<Language, TranslationContent> = {
  es: {
    ui: {
      nav: [
        { id: 'hero', label: 'Inicio' },
        { id: 'project-hub', label: 'Hub' },
        { id: 'featured-project', label: 'Principal' },
        { id: 'about', label: 'Perfil' },
        { id: 'contact', label: 'Contacto' }
      ],
      railLabel: 'Mapa de secciones',
      mainNavLabel: 'Navegacion principal',
      languageLabel: 'Idioma',
      themeLabel: 'Tema',
      themeSystemLabel: 'Sistema',
      themeLightLabel: 'Claro',
      themeDarkLabel: 'Oscuro',
      appokeBackCta: 'Volver al portfolio',
      appokeContactCta: 'Hablar sobre Appoke',
      analyticsContactCta: 'Hablar sobre este sistema',
      internalProjectNavLabel: 'Proyectos internos',
      railCollapseLabel: 'Plegar panel',
      railExpandLabel: 'Abrir panel',
      projectCategoryProduct: 'Producto',
      projectCategoryAutomation: 'Automatizacion',
      projectCategoryInsight: 'Insights',
      projectCategoryExecution: 'Ejecucion',
      relatedProjectsEyebrow: 'Continuidad del portfolio',
      relatedProjectsTitle: 'Explora la siguiente solucion sin volver al hub.',
      relatedProjectsDescription: 'Cada proyecto responde a una friccion distinta: automatizacion, visualizacion, productividad o producto.',
      relatedProjectsCta: 'Abrir proyecto',
      relatedProjectsPrevious: 'Anterior',
      relatedProjectsNext: 'Siguiente',
      heroSystemBadge: 'LISTO PARA OPERAR',
      heroSystemCopy: 'Portfolio estrategico / soluciones de negocio con IA',
      commandTags: ['Diagnostico de negocio', 'Flujos con IA', 'Producto y automatizacion'],
      heroPrimaryCta: 'Explorar proyectos',
      heroSecondaryCta: 'Contactar',
      panelLabel: 'Foco seleccionado',
      featuredCaseEyebrow: 'Proyecto destacado',
      featuredReviewLabel: 'Proyecto principal',
      featuredStatus: 'Funcional',
      featuredProblemLabel: 'Problema que resuelve',
      featuredSolutionLabel: 'Como lo soluciona',
      featuredValueLabel: 'Valor de negocio',
      featuredPrimaryCta: 'Ver proyecto',
      featuredSecondaryCta: 'Ver codigo',
      featuredPendingDemo: 'Demo pendiente',
      featuredVisualEyebrow: 'Appoke / Gamificacion productiva',
      featuredVisualTitle: 'Rutinas, progreso visual y motivacion convertidos en sistema',
      hubEyebrow: 'Proyectos seleccionados',
      hubTitle: 'Soluciones creadas para reducir friccion operativa y acelerar decisiones.',
      hubDescription: 'Cada proyecto nace de un problema real de negocio: seguimiento, productividad, automatizacion o adopcion de sistemas.',
      hubIndexLabel: 'INDEX',
      projectChip: 'Solucion operativa',
      githubLabel: 'GitHub',
      demoLabel: 'Demo',
      pendingLinkLabel: 'Enlace pendiente',
      pendingDemoLabel: 'Demo pendiente',
      aboutEyebrow: 'Sobre mi',
      aboutTitle: 'Un perfil hibrido para problemas que no caben en una sola area.',
      opportunityEyebrow: 'Donde aporto valor',
      opportunityTitle: 'Donde puedo generar impacto desde el primer ciclo de trabajo.',
      opportunityDescription: 'Encajo especialmente bien en contextos donde hace falta criterio de negocio, velocidad de ejecucion y capacidad de convertir friccion operativa en producto.',
      contactEyebrow: 'Contacto',
      contactTitle: 'Si hay un problema operativo o de producto, podemos aterrizarlo juntos.',
      contactDescription: 'Prefiero entender el contexto, la friccion y el impacto esperado antes de proponer una solucion.',
      contactNote: 'Tambien estoy abierto a roles donde haga falta alguien que pueda pensar negocio, estructurar producto y ejecutar software.',
      contactPrimaryCta: 'Escribir a Alejandro',
      linkedinLabel: 'LinkedIn',
      formConsoleLabel: 'INBOUND REQUEST',
      formNameLabel: 'Nombre',
      formEmailLabel: 'Email',
      formMessageLabel: 'Mensaje',
      formPlaceholder: 'Cuéntame qué problema quieres resolver.',
      formSubmit: 'Enviar mensaje',
      formSending: 'Enviando mensaje...',
      formSuccess: 'Gracias por escribir. Alejandro revisara tu mensaje pronto.',
      formError: 'No se pudo enviar el mensaje. Intenta de nuevo.',
      analyticsConsentTitle: 'Analitica del sitio',
      analyticsConsentDescription: 'Uso Google Analytics para entender visitas y mejorar la web. Solo se activa si aceptas.',
      analyticsConsentAccept: 'Aceptar',
      analyticsConsentReject: 'Rechazar',
      workProcessEyebrow: 'Como trabajo',
      workProcessTitle: 'De friccion operativa a solucion adoptable.',
      conversionPrimaryCta: 'Agendar diagnostico',
      conversionSecondaryCta: 'Ver casos',
      caseStudyLabel: 'Caso real'
    },
    personalInfo: {
      role: 'Administrador de Empresas & Estudiante de Master en Big Data',
      subtitle: 'Diseño y construyo sistemas de software orientados a resultado para equipos que necesitan operar con menos friccion y decidir con mas claridad.',
      tagline: 'Ayudo a operaciones y producto a pasar de procesos manuales a flujos medibles, automatizados y adoptables.',
      differentiator: 'Perfil hibrido: criterio de negocio + ejecucion tecnica end-to-end.'
    },
    auditSignals: [
      { label: 'Enfoque', value: 'Soluciones guiadas por negocio' },
      { label: 'Metodo', value: 'IA + automatizacion + producto' },
      { label: 'Resultado', value: 'Sistemas utiles, claros y adoptables' }
    ],
    systemMetrics: [
      { label: 'Proyectos en el portafolio', value: '09' },
      { label: 'Perfil', value: 'Hibrido' },
      { label: 'Estado actual', value: 'Disponible' }
    ],
    heroMetrics: [
      { label: 'Negocio', value: 'Detectar el cuello de botella correcto antes de desarrollar.' },
      { label: 'IA', value: 'Automatizar decisiones, seguimiento y tareas repetitivas.' },
      { label: 'Producto', value: 'Diseñar herramientas que la gente quiera usar de verdad.' }
    ],
    northStar: {
      label: 'Objetivo principal',
      goal: 'Convertir visitas en conversaciones de negocio calificadas.',
      target: 'Meta actual: 10 reuniones calificadas / mes',
      rationale: 'Cada seccion esta diseñada para reducir incertidumbre y mover al visitante hacia una conversacion concreta.'
    },
    featuredProject: {
      label: 'Proyecto destacado',
      oneLiner: "App para Android y Windows que reúne rutinas, notas y seguimiento de hábitos con recompensas visuales.",
      problem:
        'La ejecucion personal se fragmenta cuando notas, rutinas y evidencia de avance viven en herramientas separadas. Eso baja continuidad y vuelve el seguimiento dificil de sostener.',
      solution:
        'Appoke centraliza el flujo completo en una sola aplicacion: usuarios, notas multimedia, rutinas, calendario y progreso visual con dinamicas de gamificacion para reforzar constancia diaria en Android y Windows.',
      businessValue:
        'Disminuye friccion de seguimiento, mejora adherencia por refuerzo visual y demuestra capacidad de construir y distribuir un producto funcional de extremo a extremo.'
    },
    featuredStats: [
      { label: 'Pantallas', value: '12' },
      { label: 'Plataformas', value: '2' },
      { label: 'Base de datos', value: 'SQLite local' }
    ],
    appokeDetail: {
      eyebrow: 'Caso de producto',
      title: 'Un sistema portable para organizar rutinas, notas y seguimiento personal.',
      intro:
        'Appoke es una aplicacion pensada para centralizar la productividad personal en una sola experiencia: usuarios, notas multimedia, rutinas, progreso, calendario y gamificacion aplicada al seguimiento personal para acumular experiencia, evolucionar y sostener el habito.',
      screenshots: [
        { src: '/appoke/usuarios.jpg', alt: 'Pantalla de usuarios en Appoke' },
        { src: '/appoke/verde-audio-edit.jpg', alt: 'Edicion de audio en Appoke' },
        { src: '/appoke/azul-edit.jpg', alt: 'Pantalla de edicion en Appoke' },
        { src: '/appoke/verde-rutina-screen.jpg', alt: 'Pantalla de rutina en Appoke' },
        { src: '/appoke/verde-imagen-screen.jpg', alt: 'Pantalla de imagen en Appoke' }
      ],
      seedShowcase: {
        eyebrow: 'Semilla',
        title: 'Ejemplo visual del selector y sus perfiles',
        description: 'Asi se ve la seleccion de semilla en Appoke y una muestra de las variantes perfil, perfil2, perfil3, perfil4 y perfil5.',
        selector: {
          src: '/appoke/select-seed.png',
          alt: 'Selector de semilla en Appoke',
          caption: 'Selector inicial de semilla'
        },
        profilesLabel: 'Ejemplos de perfiles de semilla',
        profiles: [
          { src: '/appoke/seed-profile-1.png', label: 'perfil', alt: 'Ejemplo perfil en Appoke' },
          { src: '/appoke/seed-profile-2.png', label: 'perfil2', alt: 'Ejemplo perfil2 en Appoke' },
          { src: '/appoke/seed-profile-3.png', label: 'perfil3', alt: 'Ejemplo perfil3 en Appoke' },
          { src: '/appoke/seed-profile-4.png', label: 'perfil4', alt: 'Ejemplo perfil4 en Appoke' },
          { src: '/appoke/seed-profile-5.png', label: 'perfil5', alt: 'Ejemplo perfil5 en Appoke' }
        ]
      },
      purposeTitle: 'Para que sirve',
      purposeText:
        'Sirve para que una persona no dependa de varias herramientas sueltas para gestionar su informacion diaria. Reune seguimiento, contenido, disciplina operativa y motivacion en una sola app, donde cumplir rutinas y registrar notas suma experiencia y convierte el orden en una practica repetible.',
      bridgeTitle: 'Como une administracion y tecnologia',
      bridgeText:
        'Desde administracion aporta estructura, procesos, seguimiento y criterio sobre que informacion importa. Desde tecnologia lo convierte en un producto funcional con interfaz, base de datos local, logica de progreso y mecanicas de gamificacion donde la experiencia acumulada desbloquea evolucion y refuerza continuidad en Windows y Android.',
      problemsTitle: 'Problemas que resuelve',
      problems: [
        'Evita que rutinas, notas, imagenes y audios queden repartidos en herramientas desconectadas.',
        'Reduce la friccion de hacer seguimiento personal o de habitos de forma manual.',
        'Aumenta la constancia al convertir el avance en experiencia acumulable, progreso visible, evolucion y sentido de logro.',
        'Permite convertir actividades diarias en informacion organizada y reutilizable.',
        'Demuestra que un flujo personal puede diseñarse como producto, no solo como lista de tareas, sino como sistema para formar habitos.'
      ],
      futureTitle: 'Desarrollos que podria tener',
      futureItems: [
        'Sincronizacion en la nube para varios dispositivos.',
        'Sistema mas profundo de niveles, recompensas y logros personalizados.',
        'Analitica de progreso y recomendaciones basadas en patrones de uso.',
        'Recordatorios inteligentes y automatizacion contextual.',
        'Panel administrativo para visualizar comportamiento y retencion por usuario.'
      ],
      technologyTitle: 'Tecnologias que usa',
      technologyGroups: [
        { label: 'Aplicacion', items: ['Python', 'Kivy', 'Pillow', 'Plyer'] },
        { label: 'Datos', items: ['SQLite3', '5 tablas', 'thumbnails locales'] },
        { label: 'Build', items: ['Buildozer', 'PyInstaller', 'APK Android', 'Windows executable'] }
      ],
      outcomeTitle: 'Lo que demuestra este proyecto',
      outcomeText:
        'Appoke muestra capacidad para detectar una necesidad operativa, estructurarla como sistema y convertirla en software distribuible. La gamificacion no aparece como adorno, sino como decision de producto: cada rutina completada y cada nota registrada alimentan experiencia, evolucion y continuidad para consolidar el habito de mantener la vida organizada.',
      stats: [
        { label: 'Pantallas', value: '12' },
        { label: 'Plataformas', value: 'Android + Windows' },
        { label: 'Persistencia', value: 'SQLite local' },
        { label: 'Builds', value: 'APK + EXE' }
      ]
    },
    projects: [
      ...getProjectCases('es'),
      {
        id: 2,
        title: 'Dashboard de Productividad',
        oneLiner: "Panel web que reúne indicadores de productividad para comparar su evolución entre periodos.",
        businessValue: 'Da contexto operativo en tiempo real y reduce el costo de decidir sin datos.',
        technologies: ['React', 'Visualizacion de datos', 'Big Data'],
        imageUrl: '/projects/productivity-dashboard-cover.jpg',
        githubUrl: personalInfo.github,
        internalSlug: 'productivity-dashboard',
        detailContent: {
          eyebrow: 'Caso de decision',
          intro: 'Caso de visualizacion orientada a negocio para consolidar KPIs dispersos en una lectura ejecutiva que acelera priorizacion y seguimiento operativo.',
          stats: [
            { label: 'Fuentes de datos', value: '5+ → 1 vista' },
            { label: 'Tiempo de lectura', value: '-50% estimado' },
            { label: 'Stack', value: 'React + TypeScript' },
            { label: 'Actualizacion', value: 'Casi tiempo real' }
          ],
          overviewTitle: 'Contexto y problema',
          overviewText: 'Los indicadores relevantes estaban repartidos en diferentes vistas y reportes, lo que hacia lenta la lectura del estado real y aumentaba la friccion al priorizar acciones.',
          operationTitle: 'Decision de solucion',
          operationText: 'Se planteo una capa unica de visualizacion para concentrar señales clave en tiempo casi real, reducir interpretacion manual y habilitar decisiones con mayor contexto.',
          capabilitiesTitle: 'Implementacion tecnica',
          capabilities: [
            'Consolidacion de KPIs en una unica interfaz responsive.',
            'Componentes visuales para detectar desvio, ritmo y tendencia.',
            'Lectura comparativa entre periodos para priorizacion basada en datos.',
            'Base escalable para alertas y reporting ejecutivo.'
          ],
          technologyTitle: 'Stack aplicado',
          technologyGroups: [
            { label: 'Frontend', items: ['React', 'TypeScript', 'Responsive UI'] },
            { label: 'Visualizacion', items: ['Dashboards', 'KPIs', 'Charts'] },
            { label: 'Datos', items: ['Big Data', 'Metricas', 'Seguimiento'] }
          ],
          nextTitle: 'Siguiente iteracion',
          nextItems: [
            'Filtros por periodo, segmento o responsable.',
            'Alertas visuales cuando un KPI se desvia.',
            'Exportacion ejecutiva para reportes internos.',
            'Comparativas historicas y objetivos.'
          ],
          outcomeTitle: 'Resultado e impacto',
          outcomeText: 'La solucion reduce tiempo de lectura operativa en un 50% estimado y mejora consistencia en decisiones al convertir datos dispersos de 5+ fuentes en una vista accionable y facil de adoptar.'
        }
      },
      {
        id: 3,
        title: 'App de Optimizacion de Rutinas',
        oneLiner: 'Prioriza flujos de trabajo y convierte la rutina diaria en ejecucion mas enfocada.',
        businessValue: 'Reduce tiempo en tareas de bajo valor y mejora consistencia en la operacion diaria.',
        technologies: ['Python', 'IA', 'Automatizacion'],
        imageUrl: '/projects/appoke-cover.jpg',
        githubUrl: personalInfo.github,
        internalSlug: 'routine-optimization',
        detailContent: {
          eyebrow: 'Caso de ejecucion',
          intro: 'Caso de IA aplicada a productividad para transformar rutinas con alta carga de decisiones repetitivas en un flujo priorizado, consistente y accionable.',
          stats: [
            { label: 'Decisiones repetitivas', value: '-40% carga' },
            { label: 'Adherencia', value: '+40% con refuerzo' },
            { label: 'Motor', value: 'IA aplicada' },
            { label: 'Flujos', value: 'Priorizados auto.' }
          ],
          overviewTitle: 'Contexto y problema',
          overviewText: 'La operacion diaria acumulaba demasiadas tareas compitiendo por atencion y poca claridad sobre secuencia de ejecucion, lo que afectaba foco y continuidad.',
          operationTitle: 'Decision de solucion',
          operationText: 'Se diseno una logica de priorizacion asistida para ordenar flujos por impacto y contexto, reduciendo carga mental y mejorando consistencia de ejecucion.',
          capabilitiesTitle: 'Implementacion tecnica',
          capabilities: [
            'Priorizacion automatica de tareas y flujos por criterio operativo.',
            'Secuenciacion de trabajo para reducir decisiones de bajo valor.',
            'Estructura reutilizable para automatizar acciones repetitivas.',
            'Soporte para evolucionar hacia recomendaciones contextuales.'
          ],
          technologyTitle: 'Stack aplicado',
          technologyGroups: [
            { label: 'Logica', items: ['Python', 'IA', 'Priorizacion'] },
            { label: 'Automatizacion', items: ['Rutinas', 'Flujos', 'Reglas'] },
            { label: 'Valor', items: ['Foco', 'Consistencia', 'Productividad'] }
          ],
          nextTitle: 'Siguiente iteracion',
          nextItems: [
            'Aprendizaje segun patrones de uso del usuario.',
            'Recomendaciones contextuales por momento del dia.',
            'Integracion con calendario o recordatorios.',
            'Panel de desempeno personal o de equipo.'
          ],
          outcomeTitle: 'Resultado e impacto',
          outcomeText: 'La propuesta demuestra una aplicacion pragmatica de IA para mejorar ejecucion diaria: 40% menos friccion en decisiones repetitivas y mayor consistencia operativa con mejora medible en adherencia.'
        }
      },
      {
        id: 4,
        title: "Analítica del Web CV",
        oneLiner: "Caso de analítica web sobre visitas, proyectos consultados y acciones de contacto.",
        businessValue: 'Ayuda a pasar de reaccionar tarde a decidir con evidencia, usando recopilacion de datos, modelos predictivos y regresion lineal para encontrar oportunidades y riesgos antes.',
        technologies: ['Python', 'Pandas', 'SQL', 'Regresion lineal', 'Visualizacion de datos'],
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        githubUrl: personalInfo.github,
        internalSlug: 'analytics',
        analyticsCase: {
          eyebrow: 'Caso aplicado',
          title: "Cómo se analiza el recorrido por el portfolio",
          description: "El caso examina qué páginas se visitan, qué proyectos se abren y qué acciones de contacto se realizan.",
          sourceNote: "Los valores del gráfico son ejemplos para mostrar cómo se comparan señales de interés.",
          chartTitle: "Índice de interés por señal",
          chartFootnote: "Datos de ejemplo",
          chartBars: [
            { label: 'Interes por soluciones', value: 92 },
            { label: 'Profundidad de lectura', value: 81 },
            { label: 'Intencion de contacto', value: 67 },
            { label: 'Potencial de expansion', value: 74 }
          ],
          flowTitle: "Qué mide el sitio",
          flowSteps: [
            { label: "Consentimiento", detail: "Google Analytics se activa solo si la persona acepta la medición." },
            { label: "Visitas", detail: "Las vistas de página ayudan a entender qué secciones del currículum se consultan." },
            { label: "Proyectos", detail: "Las aperturas de fichas ayudan a identificar qué casos reciben más interés." },
            { label: "Contacto", detail: "El resultado del formulario permite distinguir un mensaje enviado de un intento fallido." }
          ],
          signals: [
            {
              label: 'Negocio',
              value: 'Permite detectar que soluciones despiertan mas interes y donde conviene concentrar oferta, tiempo comercial y desarrollo.'
            },
            {
              label: 'Clientes',
              value: 'Ayuda a entender que tipo de visitante llega, que contenido consulta y que recorrido hace antes de contactar o abandonar.'
            },
            {
              label: 'Ventas futuras',
              value: 'Hace posible proyectar demanda con historicos de trafico, conversion y estacionalidad para anticipar oportunidades.'
            },
            {
              label: 'Expansion',
              value: 'Da señales para decidir si ampliar canales, campañas o capacidad operativa con una base mas objetiva que la intuicion.'
            }
          ]
        }
      }
    ],
    aboutParagraphs: [
      'Soy administrador de empresas que aprendio a programar para resolver problemas reales. Eso me permite entender el impacto operativo de una friccion y convertirla en una herramienta concreta.',
      'No funciono solo como perfil tecnico ni solo como perfil de negocio. Puedo definir el problema, priorizar el valor y llevar la solucion hasta un producto util.'
    ],
    skills: ['Python', 'React', 'TypeScript', 'Automatizacion de procesos', 'IA aplicada', 'Analisis de datos', 'Diseno UX/UI'],
    opportunityTracks: [
      {
        label: 'Tiempo completo',
        title: 'Producto, operaciones o IA aplicada',
        description: 'Ideal para equipos que necesitan criterio de negocio, foco en ejecucion y capacidad de construir herramientas utiles.'
      },
      {
        label: 'Freelance',
        title: 'Automatizacion y software interno',
        description: 'Buen encaje para procesos manuales, reporting, seguimiento comercial y mejora de productividad operativa.'
      },
      {
        label: 'Colaboracion',
        title: 'Puente entre negocio y desarrollo',
        description: 'Especialmente valioso cuando hace falta traducir friccion operativa en decisiones de producto y ejecucion tecnica.'
      }
    ],
    workProcess: [
      {
        label: 'Diagnostico',
        title: 'Entender el problema correcto',
        description: 'Antes de construir, identifico la friccion real, el impacto operativo y lo que el negocio realmente necesita.'
      },
      {
        label: 'Arquitectura',
        title: 'Disenar antes de codificar',
        description: 'Defino la estructura de la solucion, las prioridades tecnicas y el alcance minimo para entregar valor rapido.'
      },
      {
        label: 'Ejecucion',
        title: 'Construir con precision tecnica',
        description: 'Desarrollo la solucion con stack adecuado, codigo limpio y criterio de producto para que sea adoptable.'
      },
      {
        label: 'Medicion',
        title: 'Validar y mejorar con datos',
        description: 'Mido el impacto, detecto fricciones restantes y defino las siguientes iteraciones con evidencia.'
      }
    ]
  },
  en: {
    ui: {
      nav: [
        { id: 'hero', label: 'Home' },
        { id: 'project-hub', label: 'Hub' },
        { id: 'featured-project', label: 'Featured' },
        { id: 'about', label: 'Profile' },
        { id: 'contact', label: 'Contact' }
      ],
      railLabel: 'Section map',
      mainNavLabel: 'Main navigation',
      languageLabel: 'Language',
      themeLabel: 'Theme',
      themeSystemLabel: 'System',
      themeLightLabel: 'Light',
      themeDarkLabel: 'Dark',
      appokeBackCta: 'Back to portfolio',
      appokeContactCta: 'Talk about Appoke',
      analyticsContactCta: 'Talk about this system',
      internalProjectNavLabel: 'Internal projects',
      railCollapseLabel: 'Collapse panel',
      railExpandLabel: 'Open panel',
      projectCategoryProduct: 'Product',
      projectCategoryAutomation: 'Automation',
      projectCategoryInsight: 'Insights',
      projectCategoryExecution: 'Execution',
      relatedProjectsEyebrow: 'Portfolio continuity',
      relatedProjectsTitle: 'Move to the next solution without going back to the hub.',
      relatedProjectsDescription: 'Each project tackles a different friction point: automation, visualization, productivity, or product.',
      relatedProjectsCta: 'Open project',
      relatedProjectsPrevious: 'Previous',
      relatedProjectsNext: 'Next',
      heroSystemBadge: 'READY TO OPERATE',
      heroSystemCopy: 'Strategic portfolio / AI-powered business solutions',
      commandTags: ['Business diagnosis', 'AI workflows', 'Product thinking'],
      heroPrimaryCta: 'View projects',
      heroSecondaryCta: 'Contact',
      panelLabel: 'Selected focus',
      featuredCaseEyebrow: 'Featured project',
      featuredReviewLabel: 'Main project',
      featuredStatus: 'Functional',
      featuredProblemLabel: 'Problem it solves',
      featuredSolutionLabel: 'How it solves it',
      featuredValueLabel: 'Business value',
      featuredPrimaryCta: 'View project',
      featuredSecondaryCta: 'View code',
      featuredPendingDemo: 'Demo pending',
      featuredVisualEyebrow: 'Appoke / Productive gamification',
      featuredVisualTitle: 'Routines, visual progress, and motivation turned into a system',
      hubEyebrow: 'Selected work',
      hubTitle: 'Systems built to reduce operational friction and accelerate decisions.',
      hubDescription: 'Each project comes from a real business problem: follow-up, productivity, automation, or system adoption.',
      hubIndexLabel: 'INDEX',
      projectChip: 'Operational solution',
      githubLabel: 'GitHub',
      demoLabel: 'Demo',
      pendingLinkLabel: 'Link pending',
      pendingDemoLabel: 'Demo pending',
      aboutEyebrow: 'About',
      aboutTitle: 'A hybrid profile for problems that do not fit in a single area.',
      opportunityEyebrow: 'Where I add value',
      opportunityTitle: 'Where I can create impact from the first work cycle.',
      opportunityDescription: 'I fit especially well in contexts where business judgment, execution speed, and the ability to turn operational friction into product are all needed.',
      contactEyebrow: 'Contact',
      contactTitle: 'If there is an operational or product problem, we can work it out together.',
      contactDescription: 'I prefer understanding the context, the friction, and the expected impact before proposing a solution.',
      contactNote: 'I am also open to roles where someone needs to think product, structure a solution, and execute software.',
      contactPrimaryCta: 'Email Alejandro',
      linkedinLabel: 'LinkedIn',
      formConsoleLabel: 'INBOUND REQUEST',
      formNameLabel: 'Name',
      formEmailLabel: 'Email',
      formMessageLabel: 'Message',
      formPlaceholder: 'Tell me what problem you want to solve.',
      formSubmit: 'Send message',
      formSending: 'Sending message...',
      formSuccess: 'Thanks for reaching out. Alejandro will review your message soon.',
      formError: 'The message could not be sent. Please try again.',
      analyticsConsentTitle: 'Site analytics',
      analyticsConsentDescription: 'I use Google Analytics to understand visits and improve the site. It only activates if you accept.',
      analyticsConsentAccept: 'Accept',
      analyticsConsentReject: 'Reject',
      workProcessEyebrow: 'How I work',
      workProcessTitle: 'From operational friction to adoptable solution.',
      conversionPrimaryCta: 'Book a diagnostic call',
      conversionSecondaryCta: 'View case studies',
      caseStudyLabel: 'Case study'
    },
    personalInfo: {
      role: 'Business Administrator & AI Solutions Builder',
      subtitle: 'I design and build outcome-oriented software systems for teams that need to operate with less friction and decide with more clarity.',
      tagline: 'I help operations and product teams move from manual processes to measurable, automated, and adoptable workflows.',
      differentiator: 'Hybrid profile: business judgment + end-to-end technical execution.'
    },
    auditSignals: [
      { label: 'Scope', value: 'Business-led solutions' },
      { label: 'Method', value: 'AI + automation + product' },
      { label: 'Output', value: 'Useful systems people adopt' }
    ],
    systemMetrics: [
      { label: 'Portfolio projects', value: '09' },
      { label: 'Profile', value: 'Hybrid' },
      { label: 'Current status', value: 'Available' }
    ],
    heroMetrics: [
      { label: 'Business', value: 'Understand the right pain before building.' },
      { label: 'AI', value: 'Automation and data-driven decisions.' },
      { label: 'Product', value: 'Useful, clear tools designed for adoption.' }
    ],
    northStar: {
      label: 'Primary objective',
      goal: 'Turn qualified traffic into high-value business conversations.',
      target: 'Current target: 10 qualified meetings / month',
      rationale: 'Each section is designed to reduce uncertainty and move visitors to a concrete next step.'
    },
    featuredProject: {
      label: 'Featured project',
      oneLiner: "An Android and Windows app for routines, notes and habit tracking with visual rewards.",
      problem:
        'Personal tracking usually breaks when notes, routines, audio, images, and progress live across separate tools or manual processes, and when consistency depends only on discipline without visible reinforcement.',
      solution:
        'Appoke brings everything together in one app with 12 screens, user management, multimedia notes, routines, calendar flows, visual progress, and gamification mechanics where completed actions grant experience, allow profile evolution, and reinforce daily consistency, ready for Windows and Android.',
      businessValue:
        'It reduces operational friction, improves routine adherence through an experience-and-evolution loop, and proves the ability to ship a functional product from architecture to multi-platform distribution.'
    },
    featuredStats: [
      { label: 'Screens', value: '12' },
      { label: 'Platforms', value: '2' },
      { label: 'Database', value: 'Local SQLite' }
    ],
    appokeDetail: {
      eyebrow: 'Product case study',
      title: 'A portable system for routines, notes, and personal tracking.',
      intro:
        'Appoke is designed to centralize personal productivity in one experience: users, multimedia notes, routines, progress, calendar flows, and gamification applied to personal follow-up so people can accumulate experience, evolve, and sustain the habit.',
      screenshots: [
        { src: '/appoke/usuarios.jpg', alt: 'User screen in Appoke' },
        { src: '/appoke/verde-audio-edit.jpg', alt: 'Audio editing screen in Appoke' },
        { src: '/appoke/azul-edit.jpg', alt: 'Editing screen in Appoke' },
        { src: '/appoke/verde-rutina-screen.jpg', alt: 'Routine screen in Appoke' },
        { src: '/appoke/verde-imagen-screen.jpg', alt: 'Image screen in Appoke' }
      ],
      seedShowcase: {
        eyebrow: 'Seed',
        title: 'Visual example of the seed selector and its profiles',
        description: 'This is how the seed selection looks in Appoke, along with a sample of the perfil, perfil2, perfil3, perfil4, and perfil5 variants.',
        selector: {
          src: '/appoke/select-seed.png',
          alt: 'Seed selector in Appoke',
          caption: 'Initial seed selector'
        },
        profilesLabel: 'Seed profile examples',
        profiles: [
          { src: '/appoke/seed-profile-1.png', label: 'perfil', alt: 'Perfil example in Appoke' },
          { src: '/appoke/seed-profile-2.png', label: 'perfil2', alt: 'Perfil2 example in Appoke' },
          { src: '/appoke/seed-profile-3.png', label: 'perfil3', alt: 'Perfil3 example in Appoke' },
          { src: '/appoke/seed-profile-4.png', label: 'perfil4', alt: 'Perfil4 example in Appoke' },
          { src: '/appoke/seed-profile-5.png', label: 'perfil5', alt: 'Perfil5 example in Appoke' }
        ]
      },
      purposeTitle: 'What it is for',
      purposeText:
        'It helps a person avoid relying on scattered tools to manage daily information. It brings follow-up, content, operational discipline, and motivation into one app, where completing routines and registering notes adds experience and turns organization into a repeatable practice.',
      bridgeTitle: 'How it connects business and technology',
      bridgeText:
        'From the business side it adds structure, process, follow-up, and judgment about what information matters. From the technology side it turns that into a functional product with interface, local database, progress logic, and gamification mechanics where accumulated experience unlocks evolution and reinforces continuity across Windows and Android.',
      problemsTitle: 'Problems it solves',
      problems: [
        'Prevents routines, notes, images, and audio from being split across disconnected tools.',
        'Reduces the friction of managing personal tracking or habits manually.',
        'Improves consistency by turning progress into accumulated experience, visible feedback, evolution, and a sense of achievement.',
        'Turns daily activity into organized and reusable information.',
        'Shows that a personal workflow can be designed as a product, not just as a task list, but as a habit-building system.'
      ],
      futureTitle: 'Possible next developments',
      futureItems: [
        'Cloud sync across multiple devices.',
        'A deeper system of levels, rewards, and personalized achievements.',
        'Progress analytics and recommendations based on usage patterns.',
        'Smart reminders and contextual automation.',
        'An admin panel to visualize user behavior and retention.'
      ],
      technologyTitle: 'Technologies used',
      technologyGroups: [
        { label: 'Application', items: ['Python', 'Kivy', 'Pillow', 'Plyer'] },
        { label: 'Data', items: ['SQLite3', '5 tables', 'local thumbnails'] },
        { label: 'Build', items: ['Buildozer', 'PyInstaller', 'Android APK', 'Windows executable'] }
      ],
      outcomeTitle: 'What this project proves',
      outcomeText:
        'Appoke shows the ability to identify an operational need, structure it as a system, and turn it into distributable software. Gamification is not decorative here; it is a product decision where every completed routine and every registered note feeds experience, evolution, and continuity to consolidate the habit of keeping life organized.',
      stats: [
        { label: 'Screens', value: '12' },
        { label: 'Platforms', value: 'Android + Windows' },
        { label: 'Persistence', value: 'Local SQLite' },
        { label: 'Builds', value: 'APK + EXE' }
      ]
    },
    projects: [
      ...getProjectCases('en'),
      {
        id: 2,
        title: 'Productivity Dashboard',
        oneLiner: "A web dashboard that brings productivity metrics together and compares trends across periods.",
        businessValue: 'Own data, actionable insights, and less time spent deciding.',
        technologies: ['React', 'Data Visualization', 'Big Data'],
        imageUrl: '/projects/productivity-dashboard-cover.jpg',
        githubUrl: personalInfo.github,
        internalSlug: 'productivity-dashboard',
        detailContent: {
          eyebrow: 'Decision case',
          intro: 'Business-driven visualization case to consolidate scattered KPIs into one executive read that accelerates prioritization and operational tracking.',
          stats: [
            { label: 'Data sources', value: '5+ → 1 view' },
            { label: 'Read time', value: '-50% estimated' },
            { label: 'Stack', value: 'React + TypeScript' },
            { label: 'Update', value: 'Near real-time' }
          ],
          overviewTitle: 'Context and problem',
          overviewText: 'Relevant indicators were spread across different views and reports, making it slow to read the real state and increasing friction when prioritizing actions.',
          operationTitle: 'Solution decision',
          operationText: 'A single visualization layer was designed to concentrate key signals in near real time, reduce manual interpretation, and enable decisions with more context.',
          capabilitiesTitle: 'Technical implementation',
          capabilities: [
            'KPI consolidation into one responsive interface.',
            'Visual components to detect drift, rhythm, and trend.',
            'Comparative reading between periods for data-driven prioritization.',
            'Scalable base for alerts and executive reporting.'
          ],
          technologyTitle: 'Applied stack',
          technologyGroups: [
            { label: 'Frontend', items: ['React', 'TypeScript', 'Responsive UI'] },
            { label: 'Visualization', items: ['Dashboards', 'KPIs', 'Charts'] },
            { label: 'Data', items: ['Big Data', 'Metrics', 'Tracking'] }
          ],
          nextTitle: 'Next iteration',
          nextItems: [
            'Filters by period, segment, or owner.',
            'Visual alerts when a KPI drifts.',
            'Executive export for internal reporting.',
            'Historical comparisons and targets.'
          ],
          outcomeTitle: 'Result and impact',
          outcomeText: 'The solution reduces operational reading time and improves decision consistency by turning scattered data into an actionable, easy-to-adopt single view.'
        }
      },
      {
        id: 3,
        title: 'Routine Optimization App',
        oneLiner: 'Plans and prioritizes workflows with AI.',
        businessValue: 'Reduces time spent on low-value tasks and increases strategic focus.',
        technologies: ['Python', 'AI', 'Automation'],
        imageUrl: '/projects/appoke-cover.jpg',
        githubUrl: personalInfo.github,
        internalSlug: 'routine-optimization',
        detailContent: {
          eyebrow: 'Execution case',
          intro: 'Applied AI case for productivity to transform routines with heavy repetitive decision load into a prioritized, consistent, and actionable workflow.',
          stats: [
            { label: 'Repetitive decisions', value: '-40% load' },
            { label: 'Adherence', value: '+40% with reinforcement' },
            { label: 'Engine', value: 'Applied AI' },
            { label: 'Flows', value: 'Auto-prioritized' }
          ],
          overviewTitle: 'Context and problem',
          overviewText: 'Daily operations accumulated too many tasks competing for attention with little clarity on execution sequence, which hurt focus and consistency.',
          operationTitle: 'Solution decision',
          operationText: 'An assisted prioritization logic was designed to sort flows by impact and context, reducing mental load and improving execution consistency.',
          capabilitiesTitle: 'Technical implementation',
          capabilities: [
            'Automatic task and workflow prioritization by operational criteria.',
            'Work sequencing to reduce low-value decisions.',
            'Reusable structure to automate repetitive actions.',
            'Foundation to evolve toward contextual recommendations.'
          ],
          technologyTitle: 'Applied stack',
          technologyGroups: [
            { label: 'Logic', items: ['Python', 'AI', 'Prioritization'] },
            { label: 'Automation', items: ['Routines', 'Flows', 'Rules'] },
            { label: 'Value', items: ['Focus', 'Consistency', 'Productivity'] }
          ],
          nextTitle: 'Next iteration',
          nextItems: [
            'Learning from user behavior patterns.',
            'Context-aware suggestions by time of day.',
            'Calendar and reminder integration.',
            'Performance panel for a person or team.'
          ],
          outcomeTitle: 'Result and impact',
          outcomeText: 'The solution proves a pragmatic AI application to improve daily execution: fewer repetitive-decision friction points and higher operational consistency with measurable adherence gains.'
        }
      },
      {
        id: 4,
        title: "Portfolio Web Analytics",
        oneLiner: "A web analytics case study about visits, project views and contact actions.",
        businessValue: 'Moves teams from reactive decisions to evidence-based planning by combining data collection, predictive models, and linear regression to uncover risks and opportunities earlier.',
        technologies: ['Python', 'Pandas', 'SQL', 'Linear Regression', 'Data Visualization'],
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        githubUrl: personalInfo.github,
        internalSlug: 'analytics',
        analyticsCase: {
          eyebrow: 'Applied case',
          title: "How to analyze the journey through the portfolio",
          description: "The case looks at which pages visitors browse, which projects they open and which contact actions they take.",
          sourceNote: "The chart uses example values to show how interest signals can be compared.",
          chartTitle: "Interest index by signal",
          chartFootnote: "Example data",
          chartBars: [
            { label: 'Solution interest', value: 92 },
            { label: 'Reading depth', value: 81 },
            { label: 'Contact intent', value: 67 },
            { label: 'Expansion potential', value: 74 }
          ],
          flowTitle: "What the site measures",
          flowSteps: [
            { label: "Consent", detail: "Google Analytics is enabled only when the visitor accepts measurement." },
            { label: "Visits", detail: "Page views help show which sections of the résumé visitors read." },
            { label: "Projects", detail: "Case opens help identify which projects attract the most interest." },
            { label: "Contact", detail: "The form result distinguishes a successful submission from a failed attempt." }
          ],
          signals: [
            {
              label: 'Business',
              value: 'Shows which solutions attract the most attention so offer, delivery time, and product focus can be prioritized more clearly.'
            },
            {
              label: 'Customers',
              value: 'Helps reveal who is arriving, what content they review, and how they move before contacting or leaving the site.'
            },
            {
              label: 'Future sales',
              value: 'Supports demand projection from historical traffic, conversion signals, and seasonality patterns.'
            },
            {
              label: 'Expansion',
              value: 'Creates a more objective basis for deciding when to expand channels, campaigns, or operating capacity.'
            }
          ]
        }
      }
    ],
    aboutParagraphs: [
      'I am a business administrator who learned to code to solve real problems. That gives me something uncommon: I understand the operational impact of friction and can turn it into a concrete, usable tool.',
      'I do not work as a purely technical profile or a purely business one. I can frame the problem, prioritize the value, and take the solution all the way to a useful product.'
    ],
    skills: ['Python', 'React', 'TypeScript', 'Process automation', 'Applied AI', 'Data analysis', 'UX/UI design'],
    opportunityTracks: [
      {
        label: 'Full-time',
        title: 'Product, operations, or applied AI',
        description: 'A strong fit for teams that need business judgment, execution focus, and the ability to build useful tools.'
      },
      {
        label: 'Freelance',
        title: 'Automation and internal software',
        description: 'A good match for manual processes, reporting, sales follow-up, and operational productivity improvements.'
      },
      {
        label: 'Collaboration',
        title: 'Bridge between business and development',
        description: 'Especially valuable when operational friction needs to be translated into product decisions and technical execution.'
      }
    ],
    workProcess: [
      {
        label: 'Discovery',
        title: 'Understand the right problem',
        description: 'Before building, I identify the real friction, the operational impact, and what the business actually needs.'
      },
      {
        label: 'Architecture',
        title: 'Design before coding',
        description: 'I define the solution structure, technical priorities, and minimum scope to deliver value fast.'
      },
      {
        label: 'Build',
        title: 'Execute with technical precision',
        description: 'I develop the solution with the right stack, clean code, and product judgment to make it adoptable.'
      },
      {
        label: 'Measure',
        title: 'Validate and improve with data',
        description: 'I measure the impact, detect remaining friction, and define the next iterations with evidence.'
      }
    ]
  },
  ca: {
    ui: {
      nav: [
        { id: 'hero', label: 'Inici' },
        { id: 'project-hub', label: 'Hub' },
        { id: 'featured-project', label: 'Principal' },
        { id: 'about', label: 'Perfil' },
        { id: 'contact', label: 'Contacte' }
      ],
      railLabel: 'Mapa de seccions',
      mainNavLabel: 'Navegació principal',
      languageLabel: 'Idioma',
      themeLabel: 'Tema',
      themeSystemLabel: 'Sistema',
      themeLightLabel: 'Clar',
      themeDarkLabel: 'Fosc',
      appokeBackCta: 'Tornar al portfolio',
      appokeContactCta: 'Parlar sobre Appoke',
      analyticsContactCta: 'Parlar sobre aquest sistema',
      internalProjectNavLabel: 'Projectes interns',
      railCollapseLabel: 'Plegar panell',
      railExpandLabel: 'Obrir panell',
      projectCategoryProduct: 'Producte',
      projectCategoryAutomation: 'Automatització',
      projectCategoryInsight: 'Insights',
      projectCategoryExecution: 'Execució',
      relatedProjectsEyebrow: 'Continuïtat del portfolio',
      relatedProjectsTitle: 'Explora la següent solució sense tornar al hub.',
      relatedProjectsDescription: 'Cada projecte respon a una fricció diferent: automatització, visualització, productivitat o producte.',
      relatedProjectsCta: 'Obrir projecte',
      relatedProjectsPrevious: 'Anterior',
      relatedProjectsNext: 'Següent',
      heroSystemBadge: 'A PUNT PER OPERAR',
      heroSystemCopy: 'Portfolio estratègic / solucions de negoci amb IA',
      commandTags: ['Diagnòstic de negoci', 'Fluxos amb IA', 'Producte i automatització'],
      heroPrimaryCta: 'Veure projectes',
      heroSecondaryCta: 'Contactar',
      panelLabel: 'Focus seleccionat',
      featuredCaseEyebrow: 'Projecte destacat',
      featuredReviewLabel: 'Projecte principal',
      featuredStatus: 'Funcional',
      featuredProblemLabel: 'Problema que resol',
      featuredSolutionLabel: 'Com ho resol',
      featuredValueLabel: 'Valor de negoci',
      featuredPrimaryCta: 'Veure projecte',
      featuredSecondaryCta: 'Veure codi',
      featuredPendingDemo: 'Demo pendent',
      featuredVisualEyebrow: 'Appoke / Gamificació productiva',
      featuredVisualTitle: 'Rutines, progrés visual i motivació convertits en sistema',
      hubEyebrow: 'Projectes seleccionats',
      hubTitle: 'Sistemes creats per reduir fricció operativa i accelerar decisions.',
      hubDescription: 'Cada projecte neix d’un problema real de negoci: seguiment, productivitat, automatització o adopció de sistemes.',
      hubIndexLabel: 'INDEX',
      projectChip: 'Solució operativa',
      githubLabel: 'GitHub',
      demoLabel: 'Demo',
      pendingLinkLabel: 'Enllaç pendent',
      pendingDemoLabel: 'Demo pendent',
      aboutEyebrow: 'Sobre mi',
      aboutTitle: 'Un perfil híbrid per a problemes que no caben en una sola àrea.',
      opportunityEyebrow: 'On aporto valor',
      opportunityTitle: 'On puc generar impacte des del primer cicle de treball.',
      opportunityDescription: 'Encaixo especialment bé en contextos on calen criteri de negoci, velocitat d’execució i capacitat de convertir fricció operativa en producte.',
      contactEyebrow: 'Contacte',
      contactTitle: 'Si hi ha un problema operatiu o de producte, podem aterrar-lo junts.',
      contactDescription: 'Prefereixo entendre el context, la fricció i l’impacte esperat abans de proposar una solució.',
      contactNote: 'També estic obert a rols on calgui algú que pugui pensar producte, estructurar una solució i executar software.',
      contactPrimaryCta: 'Escriure a Alejandro',
      linkedinLabel: 'LinkedIn',
      formConsoleLabel: 'INBOUND REQUEST',
      formNameLabel: 'Nom',
      formEmailLabel: 'Correu',
      formMessageLabel: 'Missatge',
      formPlaceholder: 'Explica’m quin problema vols resoldre.',
      formSubmit: 'Enviar missatge',
      formSending: 'Enviant missatge...',
      formSuccess: 'Gràcies per escriure. Alejandro revisarà el teu missatge aviat.',
      formError: 'No s’ha pogut enviar el missatge. Torna-ho a provar.',
      analyticsConsentTitle: 'Analítica del lloc',
      analyticsConsentDescription: 'Faig servir Google Analytics per entendre les visites i millorar la web. Només s’activa si ho acceptes.',
      analyticsConsentAccept: 'Acceptar',
      analyticsConsentReject: 'Rebutjar',
      workProcessEyebrow: 'Com treballo',
      workProcessTitle: 'De fricció operativa a solució adoptable.',
      conversionPrimaryCta: 'Agendar diagnòstic',
      conversionSecondaryCta: 'Veure casos',
      caseStudyLabel: 'Cas real'
    },
    personalInfo: {
      role: 'Administrador d’Empreses & Desenvolupador de Solucions amb IA',
      subtitle: 'Dissenyo i construeixo sistemes de software orientats a resultat per a equips que necessiten operar amb menys fricció i decidir amb més claredat.',
      tagline: 'Ajudo a operacions i producte a passar de processos manuals a fluxos mesurables, automatitzats i adoptables.',
      differentiator: 'Perfil híbird: criteri de negoci + execució tècnica de principi a fi.'
    },
    auditSignals: [
      { label: 'Enfocament', value: 'Solucions guiades pel negoci' },
      { label: 'Mètode', value: 'IA + automatització + producte' },
      { label: 'Resultat', value: 'Eines útils i adoptables' }
    ],
    systemMetrics: [
      { label: 'Projectes al portafolis', value: '09' },
      { label: 'Perfil', value: 'Híbrid' },
      { label: 'Estat actual', value: 'Disponible' }
    ],
    heroMetrics: [
      { label: 'Negoci', value: 'Entendre el dolor correcte abans de construir.' },
      { label: 'IA', value: 'Automatització i decisions basades en dades.' },
      { label: 'Producte', value: 'Eines útils, clares i pensades per a l’adopció.' }
    ],
    northStar: {
      label: 'Objectiu principal',
      goal: 'Convertir trànsit qualificat en converses de negoci d’alt valor.',
      target: 'Meta actual: 10 reunions qualificades / mes',
      rationale: 'Cada secció està dissenyada per reduir incertesa i moure la visita cap a una conversa concreta.'
    },
    featuredProject: {
      label: 'Projecte destacat',
      oneLiner: "Aplicació per a Android i Windows que reuneix rutines, notes i seguiment d’hàbits amb recompenses visuals.",
      problem:
        'El seguiment personal acostuma a fallar quan notes, rutines, àudios, imatges i progrés viuen en eines separades o processos manuals, i quan mantenir l’hàbit depèn només de disciplina sense reforç visible.',
      solution:
        'Appoke ho unifica tot en una sola app amb 12 pantalles, gestió d’usuaris, notes multimèdia, rutines, calendari, progrés visual i dinàmiques de gamificació on completar accions atorga experiència, permet evolucionar el perfil i reforça la constància diària, preparada per a Windows i Android.',
      businessValue:
        'Redueix fricció operativa, millora adherència a rutines gràcies a un sistema d’experiència i evolució, i demostra capacitat per portar un producte funcional des de l’arquitectura fins a la distribució multiplataforma.'
    },
    featuredStats: [
      { label: 'Pantalles', value: '12' },
      { label: 'Plataformes', value: '2' },
      { label: 'Base de dades', value: 'SQLite local' }
    ],
    appokeDetail: {
      eyebrow: 'Cas de producte',
      title: 'Un sistema portable per organitzar rutines, notes i seguiment personal.',
      intro:
        'Appoke esta pensada per centralitzar la productivitat personal en una sola experiència: usuaris, notes multimèdia, rutines, progrés, calendari i gamificació aplicada al seguiment personal perquè la persona acumuli experiència, evolucioni i sostingui l’hàbit.',
      screenshots: [
        { src: '/appoke/usuarios.jpg', alt: 'Pantalla d’usuaris a Appoke' },
        { src: '/appoke/verde-audio-edit.jpg', alt: 'Edició d’àudio a Appoke' },
        { src: '/appoke/azul-edit.jpg', alt: 'Pantalla d’edició a Appoke' },
        { src: '/appoke/verde-rutina-screen.jpg', alt: 'Pantalla de rutines a Appoke' },
        { src: '/appoke/verde-imagen-screen.jpg', alt: 'Pantalla d’imatge a Appoke' }
      ],
      seedShowcase: {
        eyebrow: 'Llavor',
        title: 'Exemple visual del selector de llavor i dels seus perfils',
        description: 'Així es veu la selecció de llavor a Appoke i una mostra de les variants perfil, perfil2, perfil3, perfil4 i perfil5.',
        selector: {
          src: '/appoke/select-seed.png',
          alt: 'Selector de llavor a Appoke',
          caption: 'Selector inicial de llavor'
        },
        profilesLabel: 'Exemples de perfils de llavor',
        profiles: [
          { src: '/appoke/seed-profile-1.png', label: 'perfil', alt: 'Exemple perfil a Appoke' },
          { src: '/appoke/seed-profile-2.png', label: 'perfil2', alt: 'Exemple perfil2 a Appoke' },
          { src: '/appoke/seed-profile-3.png', label: 'perfil3', alt: 'Exemple perfil3 a Appoke' },
          { src: '/appoke/seed-profile-4.png', label: 'perfil4', alt: 'Exemple perfil4 a Appoke' },
          { src: '/appoke/seed-profile-5.png', label: 'perfil5', alt: 'Exemple perfil5 a Appoke' }
        ]
      },
      purposeTitle: 'Per a què serveix',
      purposeText:
        'Serveix perquè una persona no depengui de diverses eines separades per gestionar la informació diària. Reuneix seguiment, contingut, disciplina operativa i motivació en una sola app, on complir rutines i registrar notes suma experiència i converteix l’ordre en una pràctica repetible.',
      bridgeTitle: 'Com uneix administració i tecnologia',
      bridgeText:
        'Des d’administració aporta estructura, processos, seguiment i criteri sobre quina informació importa. Des de tecnologia ho converteix en un producte funcional amb interfície, base de dades local, lògica de progrés i mecàniques de gamificació on l’experiència acumulada desbloqueja evolució i reforça continuïtat a Windows i Android.',
      problemsTitle: 'Problemes que resol',
      problems: [
        'Evita que rutines, notes, imatges i àudios quedin repartits en eines desconnectades.',
        'Redueix la fricció de fer seguiment personal o d’hàbits de manera manual.',
        'Augmenta la constància en convertir l’avanç en experiència acumulable, feedback visible, evolució i sensació d’assoliment.',
        'Permet convertir activitats diàries en informació organitzada i reutilitzable.',
        'Demostra que un flux personal es pot dissenyar com a producte, no només com una llista de tasques, sinó com un sistema per formar hàbits.'
      ],
      futureTitle: 'Desenvolupaments possibles',
      futureItems: [
        'Sincronització al núvol per a diversos dispositius.',
        'Un sistema més profund de nivells, recompenses i assoliments personalitzats.',
        'Analítica de progrés i recomanacions basades en patrons d’ús.',
        'Recordatoris intel·ligents i automatització contextual.',
        'Panell administratiu per visualitzar comportament i retenció per usuari.'
      ],
      technologyTitle: 'Tecnologies que utilitza',
      technologyGroups: [
        { label: 'Aplicació', items: ['Python', 'Kivy', 'Pillow', 'Plyer'] },
        { label: 'Dades', items: ['SQLite3', '5 taules', 'miniatures locals'] },
        { label: 'Build', items: ['Buildozer', 'PyInstaller', 'APK Android', 'Executable Windows'] }
      ],
      outcomeTitle: 'El que demostra aquest projecte',
      outcomeText:
        'Appoke mostra capacitat per detectar una necessitat operativa, estructurar-la com a sistema i convertir-la en software distribuïble. La gamificació no hi apareix com a ornament, sinó com a decisió de producte: cada rutina completada i cada nota registrada alimenten experiència, evolució i continuïtat per consolidar l’hàbit de mantenir la vida organitzada.',
      stats: [
        { label: 'Pantalles', value: '12' },
        { label: 'Plataformes', value: 'Android + Windows' },
        { label: 'Persistència', value: 'SQLite local' },
        { label: 'Builds', value: 'APK + EXE' }
      ]
    },
    projects: [
      ...getProjectCases('ca'),
      {
        id: 2,
        title: 'Dashboard de Productivitat',
        oneLiner: "Tauler web que reuneix indicadors de productivitat per comparar-ne l’evolució entre períodes.",
        businessValue: 'Dades pròpies, insights accionables i menys temps decidint.',
        technologies: ['React', 'Visualització de dades', 'Big Data'],
        imageUrl: '/projects/productivity-dashboard-cover.jpg',
        githubUrl: personalInfo.github,
        internalSlug: 'productivity-dashboard',
        detailContent: {
          eyebrow: 'Panell de decisió',
          intro: 'Un dashboard pensat per ordenar hàbits, indicadors i activitat en una sola lectura perquè l’operació no depengui d’intuïcions disperses.',
          stats: [
            { label: 'Vista', value: 'KPIs unificats' },
            { label: 'Ús', value: 'Seguiment diari' },
            { label: 'Stack', value: 'React + data viz' },
            { label: 'Focus', value: 'Decisió clara' }
          ],
          overviewTitle: 'Què resol',
          overviewText: 'Quan els indicadors viuen en diversos llocs, entendre el negoci es torna lent. Aquest dashboard els concentra i permet veure canvis, prioritats i consistència en una sola pantalla.',
          operationTitle: 'Com funciona',
          operationText: 'Reuneix dades de seguiment, activitat i rendiment en components visuals per detectar desviació, progrés i focus sense reconstruir la situació manualment.',
          capabilitiesTitle: 'El que permet fer',
          capabilities: [
            'Seguir indicadors clau gairebé en temps real.',
            'Comparar progrés, ritme i consistència en una sola vista.',
            'Reduir temps invertit a interpretar reportings dispersos.',
            'Construir criteri de priorització a partir d’evidència visual.'
          ],
          technologyTitle: 'Arquitectura visual',
          technologyGroups: [
            { label: 'Frontend', items: ['React', 'TypeScript', 'Responsive UI'] },
            { label: 'Visualització', items: ['Dashboards', 'KPIs', 'Charts'] },
            { label: 'Dades', items: ['Big Data', 'Mètriques', 'Seguiment'] }
          ],
          nextTitle: 'Passos següents',
          nextItems: [
            'Filtres per període, segment o responsable.',
            'Alertes visuals quan un KPI es desvia.',
            'Exportació executiva per a report intern.',
            'Comparatives històriques i objectius.'
          ],
          outcomeTitle: 'El que demostra',
          outcomeText: 'Demostra criteri per traduir dades en una interfície adoptable on la visualització no és decorativa, sinó eina real per decidir millor.'
        }
      },
      {
        id: 3,
        title: 'App d’Optimització de Rutines',
        oneLiner: 'Planifica i prioritza fluxos de treball amb IA.',
        businessValue: 'Redueix temps en tasques de poc valor i augmenta el focus estratègic.',
        technologies: ['Python', 'IA', 'Automatització'],
        imageUrl: '/projects/appoke-cover.jpg',
        githubUrl: personalInfo.github,
        internalSlug: 'routine-optimization',
        detailContent: {
          eyebrow: 'Productivitat aplicada',
          intro: 'Una app pensada per ordenar l’execució, prioritzar feina i reduir el pes de decisions repetitives en la rutina diària.',
          stats: [
            { label: 'Focus', value: 'Priorització diària' },
            { label: 'Motor', value: 'IA aplicada' },
            { label: 'Resultat', value: 'Menys fricció' },
            { label: 'Ús', value: 'Fluxos repetitius' }
          ],
          overviewTitle: 'Què resol',
          overviewText: 'Resol una fricció quotidiana: massa tasques competint per atenció i poca claredat sobre què fer primer. Això degrada consistència i focus operatiu.',
          operationTitle: 'Com aporta valor',
          operationText: 'L’app ajuda a ordenar fluxos, detectar què és prioritari i reduir càrrega mental convertint la rutina en una seqüència més clara i executable.',
          capabilitiesTitle: 'Capacitats clau',
          capabilities: [
            'Priorizació de tasques i fluxos amb criteri automàtic.',
            'Menys temps invertit en decisions de poc valor.',
            'Millor consistència en l’execució diària.',
            'Base per automatitzar accions repetitives.'
          ],
          technologyTitle: 'Components utilitzats',
          technologyGroups: [
            { label: 'Lògica', items: ['Python', 'IA', 'Priorizació'] },
            { label: 'Automatització', items: ['Rutines', 'Fluxos', 'Regles'] },
            { label: 'Valor', items: ['Focus', 'Consistència', 'Productivitat'] }
          ],
          nextTitle: 'Desenvolupament futur',
          nextItems: [
            'Aprenentatge segons patrons d’ús.',
            'Suggeriments contextuals per moment del dia.',
            'Integració amb calendari o recordatoris.',
            'Panell de rendiment personal o d’equip.'
          ],
          outcomeTitle: 'El que demostra',
          outcomeText: 'Demostra una aproximació pragmàtica a la IA aplicada: no com a promesa abstracta, sinó com a ajuda concreta per executar millor i perdre menys temps.'
        }
      },
      {
        id: 4,
        title: "Analítica del Web CV",
        oneLiner: "Cas d’analítica web sobre visites, projectes consultats i accions de contacte.",
        businessValue: 'Ajuda a passar de reaccionar tard a decidir amb evidència, combinant recopilació de dades, models predictius i regressió lineal per detectar oportunitats i riscos abans.',
        technologies: ['Python', 'Pandas', 'SQL', 'Regressió lineal', 'Visualització de dades'],
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        githubUrl: personalInfo.github,
        internalSlug: 'analytics',
        analyticsCase: {
          eyebrow: 'Cas aplicat',
          title: "Com s’analitza el recorregut pel portafolis",
          description: "El cas examina quines pàgines es visiten, quins projectes s’obren i quines accions de contacte es fan.",
          sourceNote: "Els valors del gràfic són exemples per mostrar com es comparen els senyals d’interès.",
          chartTitle: "Índex d’interès per senyal",
          chartFootnote: "Dades d’exemple",
          chartBars: [
            { label: 'Interès per solucions', value: 92 },
            { label: 'Profunditat de lectura', value: 81 },
            { label: 'Intenció de contacte', value: 67 },
            { label: 'Potencial d’expansió', value: 74 }
          ],
          flowTitle: "Què mesura el web",
          flowSteps: [
            { label: "Consentiment", detail: "Google Analytics només s’activa quan el visitant accepta el mesurament." },
            { label: "Visites", detail: "Les vistes de pàgina ajuden a entendre quines seccions del currículum es consulten." },
            { label: "Projectes", detail: "Les obertures de fitxes permeten identificar quins casos generen més interès." },
            { label: "Contacte", detail: "El resultat del formulari permet distingir un missatge enviat d’un intent fallit." }
          ],
          signals: [
            {
              label: 'Negoci',
              value: 'Permet detectar quines solucions generen més interès i on convé concentrar oferta, temps comercial i desenvolupament.'
            },
            {
              label: 'Clients',
              value: 'Ajuda a entendre quin tipus de visitant arriba, quin contingut consulta i quin recorregut fa abans de contactar o marxar.'
            },
            {
              label: 'Vendes futures',
              value: 'Fa possible projectar demanda amb històrics de trànsit, conversió i estacionalitat per anticipar oportunitats.'
            },
            {
              label: 'Expansió',
              value: 'Dona senyals per decidir si cal ampliar canals, campanyes o capacitat operativa amb una base més objectiva que la intuïció.'
            }
          ]
        }
      }
    ],
    aboutParagraphs: [
      'Sóc administrador d’empreses que va aprendre a programar per resoldre els seus propis problemes. Això em dona una cosa poc habitual: entenc què fa mal en un negoci i sé construir l’eina que ho resol.',
      'No necessito traduir entre l’equip tècnic i el de negoci. Puc definir el problema, prioritzar el valor i executar la solució.'
    ],
    skills: ['Python', 'React', 'TypeScript', 'Automatització de processos', 'IA aplicada', 'Anàlisi de dades', 'Disseny UX/UI'],
    opportunityTracks: [
      {
        label: 'Temps complet',
        title: 'Producte, operacions o IA aplicada',
        description: 'Ideal per a equips que necessiten algú que entengui el negoci, prioritzi bé i construeixi eines útils.'
      },
      {
        label: 'Freelance',
        title: 'Automatització i software intern',
        description: 'Bon encaix per a processos manuals, reporting, seguiment comercial i productivitat operativa.'
      },
      {
        label: 'Col·laboració',
        title: 'Pont entre negoci i desenvolupament',
        description: 'Especialment valuós quan cal traduir fricció operativa en producte executable.'
      }
    ],
    workProcess: [
      {
        label: 'Diagnòstic',
        title: 'Entendre el problema correcte',
        description: 'Abans de construir, identifico la fricció real, l’impacte operatiu i el que el negoci necessita de debò.'
      },
      {
        label: 'Arquitectura',
        title: 'Dissenyar abans de codificar',
        description: 'Defineixo l’estructura de la solució, les prioritats tècniques i l’abast mínim per entregar valor ràpid.'
      },
      {
        label: 'Execució',
        title: 'Construir amb precisió tècnica',
        description: 'Desenvolupo la solució amb l’stack adequat, codi net i criteri de producte perquè sigui adoptable.'
      },
      {
        label: 'Mesura',
        title: 'Validar i millorar amb dades',
        description: 'Mesuro l’impacte, detecto friccions restants i defineixo iteracions següents basades en evidència.'
      }
    ]
  }
};