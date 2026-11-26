import { DetailPageSlug, Language } from '../types/portfolio';

export const projectWorkflowTitles: Record<Language, string> = {
  es: 'Recorrido de uso',
  en: 'How to use it',
  ca: "Recorregut d’ús"
};

interface WorkflowStep {
  title: string;
  description: string;
}

export const projectWorkflows: Partial<Record<DetailPageSlug, Record<Language, WorkflowStep[]>>> = {
  'email-automation': {
    es: [
      { title: "Consultar Gmail", description: "El flujo revisa los mensajes candidatos y toma el remitente como entrada de las reglas." },
      { title: "Simular la clasificación", description: "Antes de modificar la bandeja, la simulación permite comprobar qué etiqueta asignaría cada regla." },
      { title: "Aplicar y revisar", description: "Una ejecución activa aplica los cambios y deja un registro para comprobar qué ocurrió con cada mensaje." }
    ],
    en: [
      { title: "Read Gmail", description: "The workflow reads candidate messages and uses the sender as input to the rules." },
      { title: "Preview the classification", description: "Simulation shows which label a rule would assign before changing the inbox." },
      { title: "Apply and review", description: "A live run applies the changes and records what happened to each message." }
    ],
    ca: [
      { title: "Consultar Gmail", description: "El flux revisa els missatges candidats i utilitza el remitent com a entrada de les regles." },
      { title: "Simular la classificació", description: "La simulació permet comprovar quina etiqueta assignaria cada regla abans de modificar la safata." },
      { title: "Aplicar i revisar", description: "Una execució activa aplica els canvis i deixa un registre per comprovar què ha passat amb cada missatge." }
    ]
  },
  'bicingflow': {
    es: [
      { title: "Elegir la fuente", description: "La vista Fuentes permite usar una captura de CityBikes u Open Data BCN, o cargar los datos de demostración." },
      { title: "Leer el mapa operativo", description: "Busca una estación o filtra por estado. El mapa distingue estaciones vacías, saturadas y equilibradas y permite comparar el inventario observado con la previsión a 30 minutos." },
      { title: "Revisar redistribuciones", description: "Las recomendaciones sugieren qué estaciones revisar y qué bicicletas convendría mover según la reserva configurada." }
    ],
    en: [
      { title: "Choose a data source", description: "Use a snapshot from CityBikes or Open Data BCN, or load the demo dataset." },
      { title: "Read the operating map", description: "Find a station or filter by status. The map distinguishes empty, full and balanced stations and compares observed inventory with the 30-minute forecast." },
      { title: "Review rebalancing", description: "Recommendations suggest which stations to review and which bikes to move based on the selected reserve." }
    ],
    ca: [
      { title: "Triar la font", description: "La vista Fonts permet usar una captura de CityBikes o Open Data BCN, o carregar dades de demostració." },
      { title: "Llegir el mapa operatiu", description: "Cerca una estació o filtra per estat. El mapa diferencia estacions buides, saturades i equilibrades i permet comparar l’inventari observat amb la previsió a 30 minuts." },
      { title: "Revisar redistribucions", description: "Les recomanacions proposen quines estacions revisar i quines bicicletes convindria moure segons la reserva configurada." }
    ]
  },
  'sail-tracker': {
    es: [
      { title: "Preparar el rumbo", description: "La aplicación de consola en C toma el rumbo verdadero, la declinación magnética y el desvío para calcular el rumbo de aguja." },
      { title: "Registrar los tramos", description: "Durante la travesía se introducen los datos de cada tramo en la consola. El programa comprueba los rangos de los ángulos antes de calcular." },
      { title: "Cerrar la travesía", description: "Al amarrar, el programa reúne los tramos registrados y presenta el resumen de la navegación." }
    ],
    en: [
      { title: "Prepare a heading", description: "The C terminal app uses true heading, magnetic declination and deviation to calculate compass heading." },
      { title: "Record sailing legs", description: "Enter each leg through the terminal during the voyage. The program validates angle ranges before calculating." },
      { title: "Close the voyage", description: "When the boat docks, the program gathers the recorded legs and prints the voyage summary." }
    ],
    ca: [
      { title: "Preparar el rumb", description: "L’aplicació de consola en C rep el rumb veritable, la declinació magnètica i el desviament per calcular el rumb d’agulla." },
      { title: "Registrar els trams", description: "Durant la travessa s’introdueixen les dades de cada tram a la consola. El programa comprova els rangs dels angles abans de calcular." },
      { title: "Tancar la travessa", description: "En amarrar, el programa reuneix els trams registrats i presenta el resum de la navegació." }
    ]
  },
  'people-analytics': {
    "es": [
      {
        "title": "Elegir escenario",
        "description": "Small y Desarrollo permiten consultar las mismas métricas con poblaciones sintéticas distintas."
      },
      {
        "title": "Leer la rotación",
        "description": "La tasa relaciona las salidas voluntarias con el tiempo acumulado en plantilla. La vista compara el resultado por año."
      },
      {
        "title": "Comparar compensación",
        "description": "El panel muestra brechas brutas y ajustadas de tarifa base y retribución efectiva por país. Si faltan estratos comparables, indica que no hay estimación."
      }
    ],
    "en": [
      {
        "title": "Choose a scenario",
        "description": "Small and Development let you review the same metrics for different synthetic populations."
      },
      {
        "title": "Read turnover",
        "description": "The rate compares voluntary exits with time employed. The dashboard shows the result by year."
      },
      {
        "title": "Compare compensation",
        "description": "The dashboard shows raw and adjusted country gaps for base pay and effective pay. It flags missing estimates when comparable strata are unavailable."
      }
    ],
    "ca": [
      {
        "title": "Triar un escenari",
        "description": "Small i Desenvolupament permeten consultar les mateixes mètriques amb poblacions sintètiques diferents."
      },
      {
        "title": "Llegir la rotació",
        "description": "La taxa relaciona les sortides voluntàries amb el temps acumulat a la plantilla. El tauler compara el resultat per any."
      },
      {
        "title": "Comparar la compensació",
        "description": "El tauler mostra bretxes brutes i ajustades de tarifa base i retribució efectiva per país. Si falten estrats comparables, indica que no hi ha estimació."
      }
    ]
  },
  'web-cv': {
    es: [
      { title: "Encontrar un proyecto", description: "La portada reúne las fichas y el acceso al perfil profesional. Las fichas están disponibles en español, inglés y catalán." },
      { title: "Revisar el caso", description: "Cada proyecto tiene una URL propia con el contexto, el funcionamiento y las tecnologías. Desde ahí puedes pasar a otro proyecto o abrir el contacto." },
      { title: "Enviar un mensaje", description: "El formulario de React envía los datos al servidor Express, que valida el contenido antes de guardarlo." }
    ],
    en: [
      { title: "Find a project", description: "The home page brings together its case studies and the professional profile. Cases are available in Spanish, English and Catalan." },
      { title: "Review the case", description: "Each project has its own URL with context, workflow and technologies. From there, open another project or get in touch." },
      { title: "Send a message", description: "The React form sends data to the Express server, which validates the submission before saving it." }
    ],
    ca: [
      { title: "Trobar un projecte", description: "La portada reuneix les fitxes i l’accés al perfil professional. Les fitxes estan disponibles en castellà, anglès i català." },
      { title: "Revisar el cas", description: "Cada projecte té una URL pròpia amb el context, el funcionament i les tecnologies. Des d’allà pots anar a un altre projecte o obrir el contacte." },
      { title: "Enviar un missatge", description: "El formulari de React envia les dades al servidor Express, que valida el contingut abans de desar-lo." }
    ]
  },
  'productivity-dashboard': {
    es: [
      { title: "Reunir indicadores", description: "El caso plantea concentrar en una misma vista métricas de actividad, ritmo y seguimiento que normalmente se consultan por separado." },
      { title: "Comparar periodos", description: "La maqueta muestra tarjetas con indicadores destacados y un gráfico que permite comparar tendencias y localizar cambios." },
      { title: "Decidir qué revisar", description: "El panel sirve para detectar un indicador que merece investigación y orientar la siguiente revisión. Las cifras de la maqueta son ilustrativas." }
    ],
    en: [
      { title: "Bring metrics together", description: "The case proposes one view for activity, pace and tracking metrics that are normally read separately." },
      { title: "Compare periods", description: "The mockup shows headline indicators and a chart for comparing trends and spotting changes." },
      { title: "Choose what to review", description: "The dashboard helps surface a metric worth investigating to guide the next review. The mockup figures are illustrative." }
    ],
    ca: [
      { title: "Reunir indicadors", description: "El cas proposa concentrar en una vista mètriques d’activitat, ritme i seguiment que habitualment es consulten per separat." },
      { title: "Comparar períodes", description: "La maqueta mostra targetes amb indicadors destacats i un gràfic per comparar tendències i localitzar canvis." },
      { title: "Decidir què cal revisar", description: "El tauler permet identificar un indicador que mereix investigació i orientar la revisió següent. Les xifres de la maqueta són il·lustratives." }
    ]
  },
  'appoke': {
    es: [
      { title: "Crear el perfil", description: "Selecciona una semilla para representar el perfil desde el que organizas tu actividad." },
      { title: "Organizar la rutina", description: "Crea rutinas, consulta el calendario y guarda notas que pueden incluir imágenes o audio." },
      { title: "Registrar el progreso", description: "Marca el seguimiento de tus actividades y consulta la evolución visual. Appoke guarda los datos localmente con SQLite." }
    ],
    en: [
      { title: "Create a profile", description: "Choose a seed to represent the profile where you organize your activity." },
      { title: "Organize your routine", description: "Create routines, consult the calendar and save notes that can include images or audio." },
      { title: "Track progress", description: "Record your activity and review visual progress. Appoke stores its data locally with SQLite." }
    ],
    ca: [
      { title: "Crear el perfil", description: "Selecciona una llavor per representar el perfil des d’on organitzes la teva activitat." },
      { title: "Organitzar la rutina", description: "Crea rutines, consulta el calendari i desa notes que poden incloure imatges o àudio." },
      { title: "Registrar el progrés", description: "Registra l’activitat i consulta l’evolució visual. Appoke desa les dades localment amb SQLite." }
    ]
  },
  'analytics': {
    es: [
      { title: "Activar la medición", description: "El visitante decide si acepta la analítica. La instrumentación del sitio depende de esa elección." },
      { title: "Registrar interacciones", description: "La web puede registrar vistas de página, aperturas de fichas y acciones relacionadas con el contacto." },
      { title: "Interpretar las señales", description: "Comparar las aperturas y los contactos ayuda a revisar el recorrido. La visualización de esta ficha muestra un ejemplo con valores de referencia." }
    ],
    en: [
      { title: "Enable measurement", description: "Visitors decide whether to accept analytics. Site instrumentation depends on that choice." },
      { title: "Record interactions", description: "The site can track page views, project opens and actions related to contact." },
      { title: "Interpret the signals", description: "Comparing opens and contact actions helps review the journey. The visualization on this page uses example values." }
    ],
    ca: [
      { title: "Activar el mesurament", description: "El visitant decideix si accepta l’analítica. La instrumentació del web depèn d’aquesta elecció." },
      { title: "Registrar interaccions", description: "El web pot registrar vistes de pàgina, obertures de fitxes i accions relacionades amb el contacte." },
      { title: "Interpretar els senyals", description: "Comparar les obertures i els contactes ajuda a revisar el recorregut. La visualització d’aquesta fitxa utilitza valors d’exemple." }
    ]
  }
};
