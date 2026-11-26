import { Language, PortfolioProject, ProjectSlug } from '../types/portfolio';

type ProjectCaseCopy = Pick<PortfolioProject, 'title' | 'oneLiner' | 'businessValue'> & {
  context: string;
  operation: string;
  capabilities: string[];
  focus: string;
  nextStep: string;
};

interface ProjectCase {
  id: number;
  slug: ProjectSlug;
  technologies: string[];
  imageUrl?: string;
  copy: Record<Language, ProjectCaseCopy>;
}

const cases: ProjectCase[] = [
  {
    id: 1,
    slug: 'email-automation',
    technologies: ['Python', 'Gmail API', 'SQLite'],
    imageUrl: '/projects/email-automation-cover.jpg',
    copy: {
      es: {
        title: 'Automatización Gmail',
        oneLiner: 'Clasifica correos de Gmail y registra las acciones aplicadas mediante reglas configurables.',
        businessValue: 'Reduce la revisión repetitiva y permite auditar qué pasó con cada correo.',
        context: 'Cuando llegan muchos mensajes, revisar remitentes y asignar etiquetas manualmente dificulta mantener un criterio uniforme.',
        operation: 'El flujo consulta Gmail, aplica reglas por remitente y registra sus decisiones. Un modo de simulación permite revisar los cambios antes de aplicarlos.',
        capabilities: [
          'Etiquetado mediante reglas',
          'Simulación previa a los cambios',
          'Registros y métricas de ejecución'
        ],
        focus: 'Gestión de correo',
        nextStep: 'Envía un mismo conjunto de mensajes de prueba al modo de simulación y compara sus decisiones antes de ajustar reglas.'
      },
      en: {
        title: 'Gmail Automation',
        oneLiner: 'Classifies Gmail messages with configurable rules and records the actions taken.',
        businessValue: 'Cuts repetitive review and makes each message decision traceable.',
        context: 'High message volumes make it hard to apply a consistent approach to manual sender review and labeling.',
        operation: 'The pipeline reads Gmail, applies sender rules and logs its decisions. A simulation mode previews changes before they are applied.',
        capabilities: [
          'Rule-based labeling',
          'Simulation before applying changes',
          'Execution logs and metrics'
        ],
        focus: 'Email triage',
        nextStep: 'Run a fixed set of test messages through simulation and compare the decisions before adjusting rules.'
      },
      ca: {
        title: 'Automatització Gmail',
        oneLiner: 'Classifica correus de Gmail amb regles configurables i registra les accions aplicades.',
        businessValue: 'Redueix la revisió repetitiva i permet auditar què ha passat amb cada correu.',
        context: 'Quan arriben molts missatges, revisar remitents i assignar etiquetes manualment dificulta mantenir un criteri uniforme.',
        operation: 'El flux consulta Gmail, aplica regles per remitent i registra les decisions. El mode de simulació permet revisar els canvis abans d’aplicar-los.',
        capabilities: [
          'Etiquetatge amb regles',
          'Simulació prèvia als canvis',
          'Registres i mètriques d’execució'
        ],
        focus: 'Gestió de correu',
        nextStep: 'Passar un conjunt fix de missatges de prova pel mode de simulació i comparar les decisions abans d’ajustar les regles.'
      }
    }
  },
  {
    id: 5,
    slug: 'visual-lab',
    technologies: ['React', 'FastAPI', 'NumPy', 'GeoJSON', 'FFmpeg'],
    imageUrl: '/projects/visual-lab-cover.jpg',
    copy: {
      es: {
        title: 'Visual Lab',
        oneLiner: 'Laboratorio interactivo para explorar series de Fourier y el teorema del límite central con gráficos y animaciones.',
        businessValue: 'Reúne cálculo, previsualización y exportación en una herramienta reutilizable.',
        context: "Explorar contornos y distribuciones requiere comparar resultados al cambiar un parámetro. Visual Lab reúne la configuración y los gráficos en el mismo espacio.",
        operation: "Cada proyecto local guarda las entradas y las ejecuciones de Fourier o las simulaciones de medias. Los resultados se pueden reabrir y exportar con FFmpeg.",
        capabilities: [
          'Gestión de proyectos locales',
          'Validación y reconstrucción de contornos GeoJSON',
          "Simulación reproducible de medias muestrales",
          'Exportación de vídeo vertical'
        ],
        focus: 'Visualización matemática',
        nextStep: 'Comparar el nivel de detalle de la reconstrucción con distintos números de coeficientes.'
      },
      en: {
        title: 'Visual Lab',
        oneLiner: 'An interactive lab for exploring Fourier series and the central limit theorem through charts and animations.',
        businessValue: 'Brings computation, preview and export together in a reusable tool.',
        context: "Exploring outlines and distributions requires comparing results as parameters change. Visual Lab puts the settings and charts in one workspace.",
        operation: "Each local project stores inputs and Fourier runs or sample mean simulations. Results can be reopened and exported with FFmpeg.",
        capabilities: [
          'Local project management',
          'GeoJSON validation and outline reconstruction',
          "Reproducible sample mean simulations",
          'Vertical video export'
        ],
        focus: 'Mathematical visualization',
        nextStep: 'Compare reconstruction detail at different coefficient counts.'
      },
      ca: {
        title: 'Visual Lab',
        oneLiner: 'Laboratori interactiu per explorar les sèries de Fourier i el teorema del límit central amb gràfics i animacions.',
        businessValue: 'Reuneix càlcul, previsualització i exportació en una eina reutilitzable.',
        context: "Explorar contorns i distribucions requereix comparar resultats quan canvia un paràmetre. Visual Lab reuneix la configuració i els gràfics en un mateix espai.",
        operation: "Cada projecte local desa les entrades i les execucions de Fourier o les simulacions de mitjanes. Els resultats es poden reobrir i exportar amb FFmpeg.",
        capabilities: [
          'Gestió de projectes locals',
          'Validació i reconstrucció de contorns GeoJSON',
          "Simulacions reproduïbles de mitjanes mostrals",
          'Exportació de vídeo vertical'
        ],
        focus: 'Visualització matemàtica',
        nextStep: 'Comparar el detall de la reconstrucció amb diferents nombres de coeficients.'
      }
    }
  },
  {
    id: 6,
    slug: 'bicingflow',
    technologies: ['Python', 'Streamlit', 'CityBikes', 'Open Data BCN'],
    imageUrl: '/projects/bicingflow-cover.jpg',
    copy: {
      es: {
        title: 'BicingFlow',
        oneLiner: 'Explora la disponibilidad de Bicing y propone redistribuciones de bicicletas entre estaciones de Barcelona.',
        businessValue: 'Ayuda a priorizar qué estaciones revisar cuando se prevé un desequilibrio.',
        context: 'Un mapa de ocupación muestra el estado observado, pero planificar traslados también requiere previsiones, capacidad y reservas.',
        operation: 'El prototipo combina capturas puntuales de fuentes públicas o datos de demostración con un mapa, previsiones y recomendaciones. El diagrama muestra una propuesta de arquitectura en Azure.',
        capabilities: [
          'Mapa operativo y alertas',
          'Comparación de inventario observado y previsto',
          'Propuestas de redistribución según reservas'
        ],
        focus: 'Movilidad urbana',
        nextStep: 'Evaluar los errores de predicción por estación y franja horaria con datos históricos.'
      },
      en: {
        title: 'BicingFlow',
        oneLiner: 'Explores Bicing availability and proposes bike rebalancing between Barcelona stations.',
        businessValue: 'Helps prioritize which stations to review when an imbalance is forecast.',
        context: 'An occupancy map shows the observed state. Planning transfers also requires forecasts, capacity and reserve levels.',
        operation: 'The prototype combines on-demand public data snapshots or demo data with a map, forecasts and recommendations. The diagram shows a proposed Azure architecture.',
        capabilities: [
          'Operational map and alerts',
          'Comparison of observed and forecast inventory',
          'Rebalancing suggestions based on reserves'
        ],
        focus: 'Urban mobility',
        nextStep: 'Evaluate forecast errors by station and time of day using historical data.'
      },
      ca: {
        title: 'BicingFlow',
        oneLiner: 'Explora la disponibilitat de Bicing i proposa redistribucions de bicicletes entre estacions de Barcelona.',
        businessValue: 'Ajuda a prioritzar quines estacions cal revisar quan es preveu un desequilibri.',
        context: 'Un mapa d’ocupació mostra l’estat observat. Planificar trasllats també requereix previsions, capacitat i reserves.',
        operation: 'El prototip combina captures puntuals de fonts públiques o dades de demostració amb un mapa, previsions i recomanacions. El diagrama mostra una proposta d’arquitectura a Azure.',
        capabilities: [
          'Mapa operatiu i alertes',
          'Comparació d’inventari observat i previst',
          'Propostes de redistribució segons les reserves'
        ],
        focus: 'Mobilitat urbana',
        nextStep: 'Avaluar els errors de predicció per estació i franja horària amb dades històriques.'
      }
    }
  },
  {
    id: 7,
    slug: 'sail-tracker',
    imageUrl: '/projects/sail-tracker-cover.jpg',
    technologies: ['C', 'CLI'],
    copy: {
      es: {
        title: 'LS Sail Tracker',
        oneLiner: 'Registra los tramos de una travesía y muestra un resumen al amarrar.',
        businessValue: 'Convierte registros de rumbo y trayecto en un resumen consultable en consola.',
        context: 'Una travesía acumula datos por tramo y requiere un cálculo consistente de la declinación magnética.',
        operation: 'La práctica en C configura la declinación de la carta, registra el viaje por tramos y genera un resumen al finalizar.',
        capabilities: [
          'Cálculo de declinación magnética',
          'Registro de tramos y destinos',
          'Resumen de viaje al amarrar'
        ],
        focus: 'Práctica académica',
        nextStep: 'Probar entradas límite en el cálculo de la declinación y los cambios de rumbo.'
      },
      en: {
        title: 'LS Sail Tracker',
        oneLiner: 'Records sailing legs and shows a summary when the boat docks.',
        businessValue: 'Turns heading and leg records into a readable terminal summary.',
        context: 'A voyage accumulates data for each leg and requires a consistent magnetic declination calculation.',
        operation: 'This C coursework project configures chart declination, records the voyage leg by leg and prints a summary at the end.',
        capabilities: [
          'Magnetic declination calculation',
          'Leg and destination logging',
          'Voyage summary on docking'
        ],
        focus: 'Coursework',
        nextStep: 'Test boundary inputs for declination calculations and heading changes.'
      },
      ca: {
        title: 'LS Sail Tracker',
        oneLiner: 'Registra els trams d’una travessa i mostra un resum en amarrar.',
        businessValue: 'Converteix els registres de rumb i trajecte en un resum consultable a la consola.',
        context: 'Una travessa acumula dades per tram i requereix un càlcul consistent de la declinació magnètica.',
        operation: 'La pràctica en C configura la declinació de la carta, registra el viatge per trams i genera un resum en acabar.',
        capabilities: [
          'Càlcul de declinació magnètica',
          'Registre de trams i destinacions',
          'Resum del viatge en amarrar'
        ],
        focus: 'Pràctica acadèmica',
        nextStep: 'Provar entrades límit en el càlcul de la declinació i els canvis de rumb.'
      }
    }
  },
  {
    id: 8,
    slug: 'web-cv',
    imageUrl: '/projects/web-cv-cover.jpg',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Google Analytics'],
    copy: {
      es: {
        title: 'Web CV',
        oneLiner: "El currículum web de Alejandro Montoya reúne su perfil, proyectos y contacto. Con permiso, también mide cómo se usa el sitio.",
        businessValue: "Google Analytics registra visitas, aperturas de fichas y acciones de contacto cuando el visitante acepta la medición. Esto ayuda a ver qué proyectos despiertan interés y en qué punto los visitantes deciden escribir.",
        context: 'Un currículo breve deja poco espacio para explicar cómo se implementó una solución y qué decisiones se tomaron.',
        operation: "El sitio presenta mi perfil profesional, muestra cómo construí cada proyecto y permite contactarme.",
        capabilities: [
          'Fichas de proyecto con rutas propias',
          'Contenido en español, inglés y catalán',
          'Formulario de contacto con API',
          "Analítica con consentimiento mediante Google Analytics"
        ],
        focus: 'Portafolio web',
        nextStep: 'Añadir demostraciones cuando haya versiones públicas que se puedan compartir.'
      },
      en: {
        title: 'Portfolio Website',
        oneLiner: "Alejandro Montoya's online résumé brings together his profile, projects and contact details. With permission, it also measures how people use the site.",
        businessValue: "Google Analytics records visits, project opens and contact actions when visitors consent. This helps identify which projects attract interest and where visitors decide to get in touch.",
        context: 'A short résumé leaves little space to explain how a solution was built or what decisions shaped it.',
        operation: "The website presents my professional profile, explains how I built each project and offers a way to contact me.",
        capabilities: [
          'Dedicated case study routes',
          'Spanish, English and Catalan content',
          'API-backed contact form',
          "Consent-based measurement with Google Analytics"
        ],
        focus: 'Web portfolio',
        nextStep: 'Add demos when public versions are available to share.'
      },
      ca: {
        title: 'Web CV',
        oneLiner: "El currículum web d'Alejandro Montoya reuneix el perfil, els projectes i el contacte. Amb permís, també mesura com s'utilitza el lloc.",
        businessValue: "Google Analytics registra visites, obertures de fitxes i accions de contacte quan el visitant accepta el mesurament. Això ajuda a identificar quins projectes generen interès i en quin punt els visitants decideixen escriure.",
        context: 'Un currículum breu deixa poc espai per explicar com s’ha implementat una solució i quines decisions s’han pres.',
        operation: "El web presenta el meu perfil professional, mostra com he construït cada projecte i permet contactar amb mi.",
        capabilities: [
          'Fitxes de projecte amb rutes pròpies',
          'Contingut en castellà, anglès i català',
          'Formulari de contacte amb API',
          "Analítica amb consentiment mitjançant Google Analytics"
        ],
        focus: 'Portafolis web',
        nextStep: 'Afegir demostracions quan hi hagi versions públiques que es puguin compartir.'
      }
    }
  },
  {
    "id": 9,
    "slug": "people-analytics",
    "technologies": [
      "Python",
      "Apache Spark",
      "Node.js",
      "Parquet"
    ],
    "imageUrl": "/projects/people-analytics-cover.png",
    "copy": {
      "es": {
        "title": "People Analytics",
        "oneLiner": "Plataforma que simula datos de una empresa ficticia y analiza la rotación voluntaria y la compensación por país.",
        "businessValue": "Permite comparar tendencias y comprobar cuándo hay grupos comparables para estimar una brecha salarial.",
        "context": "El caso estudia cómo evoluciona la plantilla de Nexora entre 2021 y 2025. Trabaja con datos sintéticos para ensayar métricas y métodos sin depender de historiales de personal reales.",
        "operation": "El simulador genera el historial de la plantilla. El procesamiento prepara agregados para el panel, que permite elegir entre los escenarios Small y Desarrollo y consultar Inicio, Rotación y Compensación.",
        "capabilities": [
          "Evolución anual de las salidas por 100 personas-año",
          "Brechas de tarifa base y retribución efectiva por país",
          "Comparaciones ajustadas cuando existen estratos comparables"
        ],
        "focus": "Analítica de personas",
        "nextStep": "La investigación predictiva de rotación continúa por separado. El panel actual muestra resultados descriptivos."
      },
      "en": {
        "title": "People Analytics",
        "oneLiner": "A platform that simulates workforce data for a fictional company and analyzes voluntary turnover and compensation by country.",
        "businessValue": "Compare trends and check whether groups are comparable before estimating pay gaps.",
        "context": "The case studies how Nexora’s workforce evolves from 2021 to 2025. It uses synthetic data to evaluate metrics and methods without relying on real employee records.",
        "operation": "The simulator generates the workforce history. Processing prepares aggregates for the dashboard, which lets users select Small or Development and explore Overview, Turnover and Compensation.",
        "capabilities": [
          "Annual voluntary exits per 100 person-years",
          "Base pay and effective pay gaps by country",
          "Adjusted comparisons where comparable strata exist"
        ],
        "focus": "People analytics",
        "nextStep": "Predictive turnover research continues separately. The current dashboard presents descriptive results."
      },
      "ca": {
        "title": "People Analytics",
        "oneLiner": "Plataforma que simula dades d’una empresa fictícia i analitza la rotació voluntària i la compensació per país.",
        "businessValue": "Permet comparar tendències i comprovar quan hi ha grups comparables per estimar una bretxa salarial.",
        "context": "El cas estudia com evoluciona la plantilla de Nexora entre el 2021 i el 2025. Utilitza dades sintètiques per provar mètriques i mètodes sense dependre d’historials de personal reals.",
        "operation": "El simulador genera l’historial de la plantilla. El processament prepara agregats per al tauler, que permet triar entre els escenaris Small i Desenvolupament i consultar Inici, Rotació i Compensació.",
        "capabilities": [
          "Evolució anual de les sortides per 100 persones-any",
          "Bretxes de tarifa base i retribució efectiva per país",
          "Comparacions ajustades quan hi ha estrats comparables"
        ],
        "focus": "Analítica de persones",
        "nextStep": "La recerca predictiva de rotació continua per separat. El tauler actual mostra resultats descriptius."
      }
    }
  }
];

const labels = {
  es: {
    eyebrow: 'Caso de proyecto',
    overviewTitle: 'Contexto y problema',
    operationTitle: 'Cómo funciona',
    capabilitiesTitle: 'Implementación técnica',
    technologyTitle: 'Tecnologías',
    nextTitle: 'Siguiente iteración',
    outcomeTitle: 'Valor del proyecto'
  },
  en: {
    eyebrow: 'Project case study',
    overviewTitle: 'Context and problem',
    operationTitle: 'How it works',
    capabilitiesTitle: 'Implementation',
    technologyTitle: 'Technologies',
    nextTitle: 'Next iteration',
    outcomeTitle: 'Project value'
  },
  ca: {
    eyebrow: 'Cas de projecte',
    overviewTitle: 'Context i problema',
    operationTitle: 'Com funciona',
    capabilitiesTitle: 'Implementació tècnica',
    technologyTitle: 'Tecnologies',
    nextTitle: 'Iteració següent',
    outcomeTitle: 'Valor del projecte'
  }
};

export function getProjectCases(language: Language): PortfolioProject[] {
  const headings = labels[language];

  return cases.map(({ id, slug, technologies, imageUrl, copy }) => {
    const { title, oneLiner, businessValue, context, operation, capabilities, focus, nextStep } = copy[language];

    return {
      id,
      title,
      oneLiner,
      businessValue,
      technologies,
      imageUrl: imageUrl ?? '',
      internalSlug: slug,
      detailContent: {
        ...headings,
        intro: oneLiner,
        stats: [{ label: headings.eyebrow, value: focus }],
        overviewText: context,
        operationText: operation,
        capabilities,
        technologyGroups: [{ label: 'Stack', items: technologies }],
        nextItems: [nextStep],
        outcomeText: businessValue
      }
    };
  });
}
