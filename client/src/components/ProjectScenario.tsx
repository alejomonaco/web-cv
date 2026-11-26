import { useState } from 'react';
import { DetailPageSlug, Language } from '../types/portfolio';

type Scenario = [name: string, input: string, outcome: string];

const cases: Partial<Record<DetailPageSlug, Record<Language, Scenario[]>>> = {
  "bicingflow": {
    "es": [
      [
        "Estación vacía",
        "0 bicicletas disponibles y 16 anclajes libres.",
        "Priorizar una llegada de bicicletas."
      ],
      [
        "Estación llena",
        "20 bicicletas disponibles y 0 anclajes libres.",
        "Priorizar una retirada para liberar anclajes."
      ],
      [
        "Estación equilibrada",
        "9 bicicletas y 11 anclajes libres.",
        "Seguir observando antes de redistribuir."
      ]
    ],
    "en": [
      [
        "Empty station",
        "0 bikes and 16 free docks.",
        "Prioritize bringing bikes in."
      ],
      [
        "Full station",
        "20 bikes and 0 free docks.",
        "Prioritize removing bikes to free docks."
      ],
      [
        "Balanced station",
        "9 bikes and 11 free docks.",
        "Keep monitoring before rebalancing."
      ]
    ],
    "ca": [
      [
        "Estació buida",
        "0 bicicletes i 16 ancoratges lliures.",
        "Prioritza l’arribada de bicicletes."
      ],
      [
        "Estació plena",
        "20 bicicletes i 0 ancoratges lliures.",
        "Prioritza una retirada per alliberar ancoratges."
      ],
      [
        "Estació equilibrada",
        "9 bicicletes i 11 ancoratges lliures.",
        "Continua observant abans de redistribuir."
      ]
    ]
  },
  "sail-tracker": {
    "es": [
      [
        "Preparación",
        "La carta indica la declinación magnética de la zona.",
        "Registrar ese dato antes de calcular el rumbo de aguja."
      ],
      [
        "Tramo",
        "La tripulación registra rumbo y datos del tramo.",
        "El tramo queda incorporado a la travesía."
      ],
      [
        "Amarre",
        "La tripulación cierra la travesía.",
        "La consola muestra un resumen de los tramos registrados."
      ]
    ],
    "en": [
      [
        "Preparation",
        "The chart provides local magnetic declination.",
        "Record it before calculating the compass heading."
      ],
      [
        "Leg",
        "The crew records heading and leg information.",
        "The leg is added to the voyage."
      ],
      [
        "Docking",
        "The crew closes the voyage.",
        "The terminal shows a summary of the recorded legs."
      ]
    ],
    "ca": [
      [
        "Preparació",
        "La carta indica la declinació magnètica de la zona.",
        "Registra-la abans de calcular el rumb d’agulla."
      ],
      [
        "Tram",
        "La tripulació registra el rumb i les dades del tram.",
        "El tram queda incorporat a la travessa."
      ],
      [
        "Amarratge",
        "La tripulació tanca la travessa.",
        "La consola mostra un resum dels trams registrats."
      ]
    ]
  },
  "productivity-dashboard": {
    "es": [
      [
        "Foco",
        "El equipo dispone de un indicador de concentración.",
        "Compararlo con el periodo anterior para detectar cambios."
      ],
      [
        "Ritmo",
        "El panel reúne una señal del ritmo de trabajo.",
        "Revisar el contexto si el indicador cambia entre periodos."
      ],
      [
        "Tareas",
        "El panel reúne el volumen de tareas.",
        "Leer el volumen junto con los otros indicadores para decidir qué revisar."
      ]
    ],
    "en": [
      [
        "Focus",
        "The team has a focus indicator.",
        "Compare it with the previous period to spot changes."
      ],
      [
        "Rhythm",
        "The dashboard includes a work rhythm signal.",
        "Review the context if the indicator shifts between periods."
      ],
      [
        "Tasks",
        "The dashboard brings task volume into one view.",
        "Read the volume alongside the other metrics to decide what to investigate."
      ]
    ],
    "ca": [
      [
        "Concentració",
        "L’equip disposa d’un indicador de concentració.",
        "Compara’l amb el període anterior per detectar canvis."
      ],
      [
        "Ritme",
        "El tauler inclou un senyal del ritme de treball.",
        "Revisa el context si l’indicador canvia entre períodes."
      ],
      [
        "Tasques",
        "El tauler recull el volum de tasques.",
        "Llegeix el volum amb els altres indicadors per decidir què revisar."
      ]
    ]
  },
  "web-cv": {
    "es": [
      [
        "Descubrir",
        "Una persona abre el catálogo y elige un proyecto.",
        "Cada ficha explica el problema, el funcionamiento y las tecnologías."
      ],
      [
        "Contactar",
        "La persona abre y envía el formulario.",
        "El servidor valida el mensaje antes de guardarlo."
      ],
      [
        "Medir",
        "La persona acepta la analítica del sitio.",
        "Se pueden medir visitas, aperturas de proyectos y acciones de contacto."
      ]
    ],
    "en": [
      [
        "Discover",
        "A visitor opens the catalog and selects a project.",
        "Each case explains the problem, workflow and technologies."
      ],
      [
        "Contact",
        "The visitor opens and submits the form.",
        "The server validates the message before saving it."
      ],
      [
        "Measure",
        "The visitor accepts site analytics.",
        "Visits, project opens and contact actions can be measured."
      ]
    ],
    "ca": [
      [
        "Descobrir",
        "Una persona obre el catàleg i tria un projecte.",
        "Cada fitxa explica el problema, el funcionament i les tecnologies."
      ],
      [
        "Contactar",
        "La persona obre i envia el formulari.",
        "El servidor valida el missatge abans de desar-lo."
      ],
      [
        "Mesurar",
        "La persona accepta l’analítica del lloc.",
        "Es poden mesurar visites, obertures de projectes i accions de contacte."
      ]
    ]
  },
  "appoke": {
    "es": [
      [
        "Perfil",
        "El usuario selecciona una semilla para su perfil.",
        "La semilla representa su progreso dentro de la app."
      ],
      [
        "Rutina",
        "El usuario organiza actividades y consulta el calendario.",
        "Puede registrar el seguimiento de sus actividades."
      ],
      [
        "Notas",
        "El usuario guarda una nota con texto, audio o imagen.",
        "El contenido permanece disponible en su perfil local."
      ]
    ],
    "en": [
      [
        "Profile",
        "The user chooses a seed for their profile.",
        "The seed represents progress inside the app."
      ],
      [
        "Routine",
        "The user organizes activities and checks the calendar.",
        "They can record and review their activity progress."
      ],
      [
        "Notes",
        "The user saves a note with text, audio or an image.",
        "The content remains available in their local profile."
      ]
    ],
    "ca": [
      [
        "Perfil",
        "L’usuari tria una llavor per al seu perfil.",
        "La llavor representa el seu progrés dins de l’aplicació."
      ],
      [
        "Rutina",
        "L’usuari organitza activitats i consulta el calendari.",
        "Pot registrar el seguiment de les activitats."
      ],
      [
        "Notes",
        "L’usuari desa una nota amb text, àudio o imatge.",
        "El contingut continua disponible al seu perfil local."
      ]
    ]
  }
};

const labels = {
  es: ['Explora un caso de uso', 'Escenarios de ejemplo', 'Situación', 'Resultado'],
  en: ['Explore a use case', 'Example scenarios', 'Situation', 'Outcome'],
  ca: ['Explora un cas d’ús', 'Escenaris d’exemple', 'Situació', 'Resultat']
};

export function hasProjectScenario(slug: DetailPageSlug) {
  return Boolean(cases[slug]);
}

export function projectScenarioLabel(language: Language) {
  return labels[language][0];
}

export function ProjectScenario({ slug, language }: { slug: DetailPageSlug; language: Language }) {
  const [selected, setSelected] = useState(0);
  const scenarios = cases[slug]?.[language];
  if (!scenarios) return null;

  const [title, group, situation, result] = labels[language];
  const [name, input, outcome] = scenarios[selected];

  return (
    <section id="project-scenario" className="section-block project-workflow project-scenario" aria-labelledby="project-scenario-title">
      <div className="container">
        <h2 id="project-scenario-title">{title}</h2>
        <div className="detail-card">
          <div className="people-analytics-view-list" role="group" aria-label={group}>
            {scenarios.map(([label], index) => (
              <button key={index} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}>{label}</button>
            ))}
          </div>
          <div aria-live="polite">
            <h3>{name}</h3>
            <dl>
              <div><dt>{situation}</dt><dd>{input}</dd></div>
              <div><dt>{result}</dt><dd>{outcome}</dd></div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
