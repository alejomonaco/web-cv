import { useState } from 'react';
import { Language } from '../types/portfolio';
import { PeopleAnalyticsComparison } from './PeopleAnalyticsComparison';
import './PeopleAnalyticsShowcase.css';

const screenshots = [
  {
    "src": "/projects/people-analytics-overview.png",
    "width": 1424,
    "height": 1000
  },
  {
    "src": "/projects/people-analytics.png",
    "width": 1424,
    "height": 1097
  },
  {
    "src": "/projects/people-analytics-compensation.png",
    "width": 1424,
    "height": 1540
  }
];

const content = {
  "es": {
    "jump": "Explorar el panel",
    "heading": "Del historial de plantilla a los indicadores",
    "intro": "El panel permite explorar dos escenarios de Nexora, una empresa ficticia. Las tres vistas usan datos sintéticos de 2021 a 2025.",
    "selector": "Vistas del panel",
    "open": "Ampliar captura",
    "method": "Cómo se preparan los resultados",
    "stages": [
      [
        "Simular la plantilla",
        "Se generan historiales laborales para estudiar altas, permanencia y salidas sin utilizar expedientes reales."
      ],
      [
        "Preparar los agregados",
        "El procesamiento transforma los historiales en indicadores de rotación y compensación que consulta la API del panel."
      ],
      [
        "Revisar la comparabilidad",
        "El panel muestra resultados descriptivos. Cuando faltan grupos comparables, indica que la brecha ajustada no se puede estimar."
      ]
    ],
    "views": [
      [
        "Inicio",
        "Resumen de plantilla y salidas",
        "Cambia entre Small y Desarrollo para consultar las mismas métricas en dos poblaciones sintéticas. El resumen muestra las personas únicas del histórico, las salidas y la tasa de rotación voluntaria."
      ],
      [
        "Rotación voluntaria",
        "Evolución anual de la rotación",
        "Compara las salidas voluntarias por 100 personas-año. El denominador usa el tiempo acumulado en plantilla para comparar años con distinta exposición."
      ],
      [
        "Compensación",
        "Brechas por país",
        "Compara la tarifa base por hora ordinaria trabajada y la retribución efectiva por hora pagada. El panel muestra las brechas brutas y las ajustadas cuando hay estratos comparables."
      ]
    ]
  },
  "en": {
    "jump": "Explore the dashboard",
    "heading": "From workforce history to metrics",
    "intro": "Explore two scenarios for Nexora, a fictional company. All three views use synthetic data from 2021 to 2025.",
    "selector": "Dashboard views",
    "open": "Open full-size screenshot",
    "method": "How the results are prepared",
    "stages": [
      [
        "Simulate the workforce",
        "Synthetic employment histories represent hires, tenure and exits without using real personnel records."
      ],
      [
        "Prepare aggregates",
        "Processing converts workforce histories into turnover and compensation metrics served by the dashboard API."
      ],
      [
        "Check comparability",
        "The dashboard shows descriptive results. It flags adjusted pay gaps that cannot be estimated because comparable groups are unavailable."
      ]
    ],
    "views": [
      [
        "Overview",
        "Workforce and exit summary",
        "Switch between Small and Development to see the same metrics for two synthetic populations. The summary shows unique people in the history, exits and the voluntary turnover rate."
      ],
      [
        "Voluntary turnover",
        "Annual turnover trends",
        "Compare voluntary exits per 100 person-years. The denominator accounts for cumulative time employed so years with different exposure can be compared."
      ],
      [
        "Compensation",
        "Pay gaps by country",
        "Compare base pay per regular hour worked and effective gross pay per paid hour. The dashboard shows raw gaps and adjusted gaps where comparable strata exist."
      ]
    ]
  },
  "ca": {
    "jump": "Explorar el tauler",
    "heading": "De l’historial de plantilla als indicadors",
    "intro": "El tauler permet explorar dos escenaris de Nexora, una empresa fictícia. Les tres vistes utilitzen dades sintètiques del 2021 al 2025.",
    "selector": "Vistes del tauler",
    "open": "Ampliar la captura",
    "method": "Com es preparen els resultats",
    "stages": [
      [
        "Simular la plantilla",
        "Es generen historials laborals per estudiar altes, permanència i sortides sense utilitzar expedients reals."
      ],
      [
        "Preparar els agregats",
        "El processament transforma els historials en indicadors de rotació i compensació que consulta l’API del tauler."
      ],
      [
        "Revisar la comparabilitat",
        "El tauler mostra resultats descriptius. Quan falten grups comparables, indica que la bretxa ajustada no es pot estimar."
      ]
    ],
    "views": [
      [
        "Inici",
        "Resum de plantilla i sortides",
        "Canvia entre Small i Desenvolupament per consultar les mateixes mètriques en dues poblacions sintètiques. El resum mostra les persones úniques de l’historial, les sortides i la taxa de rotació voluntària."
      ],
      [
        "Rotació voluntària",
        "Evolució anual de la rotació",
        "Compara les sortides voluntàries per 100 persones-any. El denominador utilitza el temps acumulat a la plantilla per comparar anys amb una exposició diferent."
      ],
      [
        "Compensació",
        "Bretxes per país",
        "Compara la tarifa base per hora ordinària treballada i la retribució efectiva per hora pagada. El tauler mostra les bretxes brutes i les ajustades quan hi ha estrats comparables."
      ]
    ]
  }
};

export function peopleAnalyticsLinkLabel(language: Language) {
  return content[language].jump;
}

export function PeopleAnalyticsShowcase({ language }: { language: Language }) {
  const [selected, setSelected] = useState(1);
  const { heading, intro, selector, open, method, stages, views } = content[language];
  const [name, title, description] = views[selected];
  const { src, width, height } = screenshots[selected];

  return (
    <section id="people-analytics-panel" className="section-block people-analytics-showcase" aria-labelledby="people-analytics-heading">
      <div className="container">
        <header>
          <h2 id="people-analytics-heading">{heading}</h2>
          <p>{intro}</p>
        </header>
        <div className="people-analytics-browser">
          <div className="people-analytics-view-list" role="group" aria-label={selector}>
            {views.map(([label], index) => (
              <button type="button" key={screenshots[index].src} aria-pressed={selected === index} onClick={() => setSelected(index)}>
                {label}
              </button>
            ))}
          </div>
          <div className="people-analytics-view">
            <div aria-live="polite">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <figure>
              <a href={src} target="_blank" rel="noreferrer">
                <img src={src} alt={name} width={width} height={height} loading="lazy" decoding="async" />
                <span>{open} <span aria-hidden="true">↗</span></span>
              </a>
            </figure>
          </div>
        </div>
        <PeopleAnalyticsComparison language={language} />
        <h3 className="people-analytics-method-heading">{method}</h3>
        <ol className="project-workflow-list">
          {stages.map(([label, detail]) => (
            <li key={label}>
              <h3>{label}</h3>
              <p>{detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
