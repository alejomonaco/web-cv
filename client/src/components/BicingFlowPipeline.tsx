import { useState } from 'react';
import { Language } from '../types/portfolio';

const content = {
  es: {
    title: 'De las fuentes abiertas a la previsión por estación',
    summary: 'El pipeline convierte capturas de estaciones en previsiones a +30 min y propuestas de redistribución. Un lote local documentado reúne 1.509 observaciones de 503 estaciones de CityBikes.',
    steps: [
      ['Ingesta', 'CityBikes aporta capturas de disponibilidad al lote local. Open Data BCN se consulta con token desde la vista Fuentes y su integración en el pipeline por lotes está pendiente.'],
      ['Bronze → Silver', 'Bronze guarda el JSON original y su hash. Silver normaliza los identificadores de estación y los tiempos en UTC, y exporta los datos a Parquet.'],
      ['Gold · Previsión a +30 min', 'Estima las bicis disponibles por estación con la media histórica de la hora objetivo y el tipo de día. Con poco histórico, toma la última observación.'],
      ['Redistribución', 'Compara la previsión con la reserva objetivo y usa el déficit, el excedente y la distancia para proponer traslados revisables.']
    ],
    azure: 'Arquitectura propuesta en Azure',
    azureDetail: 'El diseño contempla Azure Data Factory para la ingesta, Azure Data Lake Storage para las capas y Databricks para transformar los datos. Propone XGBoost y MLflow para versionar previsiones a +60 min y Azure Functions para servir resultados a la aplicación. La ejecución verificada del pipeline es local.',
    diagram: 'Ampliar el diagrama de arquitectura propuesta en Azure'
  },
  en: {
    title: 'From open data to station-level forecasts',
    summary: 'The pipeline turns station snapshots into 30-minute forecasts and rebalancing suggestions. A documented local batch contains 1,509 observations from 503 CityBikes stations.',
    steps: [
      ['Ingestion', 'CityBikes supplies availability snapshots to the local batch. Open Data BCN is available in the Sources view with a token. Batch integration is pending.'],
      ['Bronze → Silver', 'Bronze stores the original JSON and its hash. Silver normalizes station IDs and UTC timestamps, then exports Parquet.'],
      ['Gold · 30-minute forecast', 'Estimates available bikes using the historical average for the station, target hour and day type. With limited history, it uses the latest observation.'],
      ['Rebalancing', 'Compares the forecast with the target reserve and uses shortages, surpluses and distance to suggest transfers for review.']
    ],
    azure: 'Proposed Azure architecture',
    azureDetail: 'The design uses Azure Data Factory for ingestion, Azure Data Lake Storage for the data layers and Databricks for transformations. It proposes XGBoost and MLflow for versioned 60-minute forecasts and Azure Functions to serve results to the app. The verified pipeline runs locally.',
    diagram: 'Enlarge the proposed Azure architecture diagram'
  },
  ca: {
    title: 'De les fonts obertes a la previsió per estació',
    summary: 'El pipeline converteix captures d’estacions en previsions a +30 min i propostes de redistribució. Un lot local documentat conté 1.509 observacions de 503 estacions de CityBikes.',
    steps: [
      ['Ingesta', 'CityBikes aporta captures de disponibilitat al lot local. Open Data BCN es consulta amb un token des de la vista Fonts i la integració al pipeline per lots està pendent.'],
      ['Bronze → Silver', 'Bronze desa el JSON original i el seu hash. Silver normalitza els identificadors d’estació i els temps en UTC, i exporta les dades en format Parquet.'],
      ['Gold · Previsió a +30 min', 'Estima les bicicletes disponibles segons la mitjana històrica de l’estació, l’hora objectiu i el tipus de dia. Amb poc historial, pren l’última observació.'],
      ['Redistribució', 'Compara la previsió amb la reserva objectiu i fa servir el dèficit, l’excedent i la distància per proposar trasllats revisables.']
    ],
    azure: 'Arquitectura proposada a Azure',
    azureDetail: 'El disseny preveu Azure Data Factory per a la ingesta, Azure Data Lake Storage per a les capes i Databricks per a les transformacions. Proposa XGBoost i MLflow per versionar previsions a +60 min i Azure Functions per servir resultats a l’aplicació. El pipeline verificat s’executa en local.',
    diagram: 'Amplia el diagrama de l’arquitectura proposada a Azure'
  }
};

const preview = {
  es: {
    title: 'Predicciones y recomendaciones de BicingFlow',
    example: 'Datos simulados. La marca vertical indica la reserva de 6 bicis.',
    scenario: 'Ejemplo de previsión', scenarios: ['Déficit en B', 'Déficit en A', 'Reserva suficiente'],
    stations: ['Estación A', 'Estación B'], now: 'Ahora', forecast: 'En 30 min',
    transfer: (count: number, from: string, to: string) => `Traslado sugerido: ${count} bicis de ${from} a ${to}`,
    impact: (a: number, b: number) => `Tras el traslado, A quedaría con ${a} bicis y B con ${b}.`,
    balanced: 'Sin traslado sugerido. Ambas estaciones alcanzan la reserva prevista.'
  },
  en: {
    title: 'BicingFlow forecasts and recommendations',
    example: 'Simulated data. The vertical mark indicates the 6-bike reserve.',
    scenario: 'Forecast example', scenarios: ['Shortage at B', 'Shortage at A', 'Enough bikes'],
    stations: ['Station A', 'Station B'], now: 'Now', forecast: 'In 30 min',
    transfer: (count: number, from: string, to: string) => `Suggested transfer: ${count} bikes from ${from} to ${to}`,
    impact: (a: number, b: number) => `After the transfer, A would have ${a} bikes and B would have ${b}.`,
    balanced: 'No suggested transfer. Both stations meet the forecast reserve.'
  },
  ca: {
    title: 'Previsions i recomanacions de BicingFlow',
    example: 'Dades simulades. La marca vertical indica la reserva de 6 bicicletes.',
    scenario: 'Exemple de previsió', scenarios: ['Dèficit a B', 'Dèficit a A', 'Reserva suficient'],
    stations: ['Estació A', 'Estació B'], now: 'Ara', forecast: 'D’aquí a 30 min',
    transfer: (count: number, from: string, to: string) => `Trasllat suggerit: ${count} bicicletes de ${from} a ${to}`,
    impact: (a: number, b: number) => `Després del trasllat, A quedaria amb ${a} bicicletes i B amb ${b}.`,
    balanced: 'Cap trasllat suggerit. Les dues estacions assoleixen la reserva prevista.'
  }
};

const reserve = 6;
const scaleMaximum = 16;
const examples = [
  [{ now: 15, forecast: 12 }, { now: 7, forecast: 2 }],
  [{ now: 8, forecast: 3 }, { now: 9, forecast: 11 }],
  [{ now: 10, forecast: 8 }, { now: 7, forecast: 9 }]
];

const diagram = '/projects/bicingflow.jpg';

export function BicingFlowPipeline({ language }: { language: Language }) {
  const { title, summary, steps, azure, azureDetail, diagram: diagramLabel } = content[language];

  const sample = preview[language];
  const [selected, setSelected] = useState(0);
  const observations = examples[selected];
  const [stationA, stationB] = observations;
  const fromA = stationA.forecast > stationB.forecast;
  const source = fromA ? stationA : stationB;
  const target = fromA ? stationB : stationA;
  const quantity = Math.max(0, Math.min(source.forecast - reserve, reserve - target.forecast));
  const changeA = fromA ? -quantity : quantity;

  return (
    <section className="section-block bicingflow-pipeline" aria-labelledby="bicingflow-forecast-title">
      <div className="container">
        <section className="detail-card bicingflow-forecast" aria-labelledby="bicingflow-forecast-title">
          <h2 id="bicingflow-forecast-title">{sample.title}</h2>
          <p>{sample.example}</p>
          <label className="bicingflow-forecast-picker">
            {sample.scenario}
            <select value={selected} onChange={(event) => setSelected(Number(event.target.value))}>
              {sample.scenarios.map((name, index) => <option key={name} value={index}>{name}</option>)}
            </select>
          </label>
          <div className="bicingflow-forecast-grid">
            {observations.map(({ now, forecast }, index) => (
              <div className="bicingflow-forecast-station" key={sample.stations[index]}>
                <h4>{sample.stations[index]}</h4>
                <dl>
                  {[{ label: sample.now, value: now }, { label: sample.forecast, value: forecast }].map(({ label, value }, row) => (
                    <div key={label} className="bicingflow-forecast-row">
                      <dt>{label}</dt>
                      <dd className={row === 1 && value < reserve ? 'bicingflow-forecast-shortage' : undefined}>
                        <span className="bicingflow-forecast-track" aria-hidden="true">
                          <span className="bicingflow-forecast-bar" style={{ width: `${100 * value / scaleMaximum}%` }} />
                          <span className="bicingflow-forecast-reserve" style={{ left: `${100 * reserve / scaleMaximum}%` }} />
                        </span>
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <div className="bicingflow-transfer" aria-live="polite">
            {quantity > 0 ? (
              <>
                <strong>{sample.transfer(quantity, fromA ? 'A' : 'B', fromA ? 'B' : 'A')}</strong>
                <p>{sample.impact(stationA.forecast + changeA, stationB.forecast - changeA)}</p>
              </>
            ) : <strong>{sample.balanced}</strong>}
          </div>
        </section>
        <h2 id="bicingflow-pipeline-title">{title}</h2>
        <p>{summary}</p>
        <ol className="bicingflow-pipeline-steps">
          {steps.map(([heading, description]) => (
            <li className="detail-card" key={heading}>
              <h3>{heading}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
        <div className="detail-card bicingflow-architecture">
          <h3>{azure}</h3>
          <p>{azureDetail}</p>
          <a href={diagram} target="_blank" rel="noreferrer">
            <img src={diagram} alt={diagramLabel} width={1920} height={839} loading="lazy" decoding="async" />
          </a>
        </div>
      </div>
    </section>
  );
}
