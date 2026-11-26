import { useState } from 'react';
import { Language } from '../types/portfolio';

const legs = [
  { trueHeading: 72, declination: 2, deviation: 1, distance: 8, speed: 4 },
  { trueHeading: 2, declination: 3, deviation: 1, distance: 12, speed: 6 }
];

const routeScale = 4;
const routePoints = legs.reduce(({ points, x, y }, leg) => {
  const radians = leg.trueHeading * Math.PI / 180;
  const nextX = x + Math.sin(radians) * leg.distance * routeScale;
  const nextY = y - Math.cos(radians) * leg.distance * routeScale;

  return { points: [...points, { x: nextX, y: nextY }], x: nextX, y: nextY };
}, { points: [{ x: 20, y: 83 }], x: 20, y: 83 }).points;

const chartNotes = {
  es: 'Carta esquemática. El trazado usa rumbo verdadero y distancia.',
  en: 'Schematic chart. Segments follow true headings and distances.',
  ca: 'Carta esquemàtica. El traçat fa servir el rumb veritable i la distància.'
};

const copy = {
  es: {
    title: 'De la carta náutica al resumen de viaje',
    description: 'Travesía simulada. Explora los dos tramos y amarra para ver el resumen que genera la aplicación en C.',
    leg: 'Tramo', trueHeading: 'Rumbo verdadero', declination: 'Declinación',
    deviation: 'Desvío', compass: 'Rumbo de aguja', distance: 'Distancia', speed: 'Velocidad',
    dock: 'Amarrar y ver resumen', summary: 'Resumen al amarrar', duration: 'Duración total'
  },
  en: {
    title: 'From nautical chart to voyage summary',
    description: 'Simulated voyage. Explore both legs and dock to see the summary produced by the C application.',
    leg: 'Leg', trueHeading: 'True heading', declination: 'Declination',
    deviation: 'Deviation', compass: 'Compass heading', distance: 'Distance', speed: 'Speed',
    dock: 'Dock and view summary', summary: 'Docking summary', duration: 'Total duration'
  },
  ca: {
    title: 'De la carta nàutica al resum de la travessa',
    description: 'Travessa simulada. Explora els dos trams i amarra per veure el resum que genera l’aplicació en C.',
    leg: 'Tram', trueHeading: 'Rumb veritable', declination: 'Declinació',
    deviation: 'Desviament', compass: 'Rumb d’agulla', distance: 'Distància', speed: 'Velocitat',
    dock: 'Amarra i mira el resum', summary: 'Resum en amarrar', duration: 'Durada total'
  }
};

const evidence = {
  es: ['Esquema de la travesía simulada', 'Salida', 'Cambio de rumbo', 'Amarre', 'Cálculo de rumbo en C', 'El código corrige el rumbo y lo devuelve al intervalo de 0° a 359°.'],
  en: ['Simulated voyage diagram', 'Departure', 'Heading change', 'Docking', 'Heading calculation in C', 'The code corrects the heading and wraps it into the 0° to 359° range.'],
  ca: ['Esquema de la travessa simulada', 'Sortida', 'Canvi de rumb', 'Amarratge', 'Càlcul del rumb en C', 'El codi corregeix el rumb i el normalitza a l’interval de 0° a 359°.']
};

const headingSource = "declinacion_grados = declination;\ndeclinacion_grados = declinacion_grados / MINUTES_PER_DEGREE;\nrumbo_calculado = rumbo_verdadero - (declinacion_grados + desvio);\n\n// Ajusta el rumbo antes de quitar la parte decimal.\nwhile (rumbo_calculado \u003c 0.0) {\n    rumbo_calculado = rumbo_calculado + FULL_CIRCLE;\n}\nwhile (rumbo_calculado \u003e= FULL_CIRCLE) {\n    rumbo_calculado = rumbo_calculado - FULL_CIRCLE;\n}\nrumbo_aguja = rumbo_calculado;\n\n// Cierre ilustrativo de main: salida correcta.\nreturn 0;\n}";

const headingTokens = headingSource.split(/(\/\/[^\n]*|\b(?:while|return)\b|\b[A-Z][A-Z_]+\b|\b\d+(?:\.\d+)?\b)/g);

function headingTokenClass(token: string) {
  if (token.startsWith('//')) return 'sail-code-comment';
  if (token === 'while' || token === 'return') return 'sail-code-keyword';
  if (/^[A-Z][A-Z_]+$/.test(token)) return 'sail-code-constant';
  return 'sail-code-number';
}

function compassHeading(leg: typeof legs[number]) {
  return Math.trunc((leg.trueHeading - leg.declination - leg.deviation + 360) % 360);
}

export function SailTrackerDemo({ language }: { language: Language }) {
  const [selected, setSelected] = useState(0);
  const [docked, setDocked] = useState(false);
  const labels = copy[language];
  const [routeTitle, departure, turningPoint, arrival, codeTitle, codeDescription] = evidence[language];
  const leg = legs[selected];
  const routeLabels = [departure, turningPoint, arrival];
  const position = routePoints[docked ? legs.length : selected];
  const heading = compassHeading(leg);
  const direction = heading > 180 ? heading - 360 : heading;
  const totalDistance = legs.reduce((sum, item) => sum + item.distance, 0);
  const duration = legs.reduce((sum, item) => sum + item.distance / item.speed, 0);

  return (
    <section className="section-block sail-demo" aria-labelledby="sail-demo-title">
      <div className="container">
        <h2 id="sail-demo-title">{labels.title}</h2>
        <p>{labels.description}</p>
        <div className="detail-card sail-demo-panel">
          <div className="sail-demo-compass" aria-hidden="true">
            <span>N</span>
            <div className="sail-demo-needle" style={{ transform: `rotate(${direction}deg)` }} />
          </div>
          <div>
            <label className="sail-demo-picker">
              {labels.leg}
              <select value={selected} onChange={(event) => {
                setSelected(Number(event.target.value));
                setDocked(false);
              }}>
                {legs.map((_, index) => <option key={index} value={index}>{index + 1}</option>)}
              </select>
            </label>
            <dl className="sail-demo-data">
              <div><dt>{labels.trueHeading}</dt><dd>{leg.trueHeading}°</dd></div>
              <div><dt>{labels.declination}</dt><dd>{leg.declination}°</dd></div>
              <div><dt>{labels.deviation}</dt><dd>{leg.deviation}°</dd></div>
              <div><dt>{labels.compass}</dt><dd><strong>{heading}°</strong></dd></div>
              <div><dt>{labels.distance}</dt><dd>{leg.distance} NM</dd></div>
              <div><dt>{labels.speed}</dt><dd>{leg.speed} kn</dd></div>
            </dl>
            <button className="button button-primary" type="button" onClick={() => setDocked(!docked)} aria-expanded={docked} aria-controls="sail-demo-summary">
              {labels.dock}
            </button>
            <div id="sail-demo-summary" className="sail-demo-summary" aria-live="polite">
              {docked && (
                <>
                  <h3>{labels.summary}</h3>
                  <p>{labels.compass}: {legs.map((item) => `${compassHeading(item)}°`).join(' → ')}</p>
                  <p>{labels.distance}: {totalDistance} NM · {labels.duration}: {duration} h</p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="sail-project-evidence">
          <figure className="detail-card sail-route">
            <figcaption>{routeTitle}</figcaption>
            <p className="sail-chart-note">{chartNotes[language]}</p>
            <div className="sail-chart" aria-hidden="true">
              <span className="sail-chart-north">↑ N</span>
              {legs.map((item, index) => (
                <span
                  key={index}
                  className={`sail-chart-segment${index === selected && !docked ? ' sail-chart-active' : ''}`}
                  style={{
                    left: `${routePoints[index].x}%`,
                    top: `${routePoints[index].y}%`,
                    width: `${item.distance * routeScale}%`,
                    transform: `rotate(${item.trueHeading - 90}deg)`
                  }}
                />
              ))}
              {routePoints.map(({ x, y }, index) => (
                <span key={index} className="sail-chart-point" style={{ left: `${x}%`, top: `${y}%` }}>
                  <span>{routeLabels[index]}</span>
                </span>
              ))}
              <span className="sail-chart-position" style={{ left: `${position.x}%`, top: `${position.y}%` }} />
            </div>
            <ol className="sail-route-stops">
              <li><strong>{departure}</strong></li>
              <li><span>{legs[0].distance} NM · {compassHeading(legs[0])}°</span><strong>{turningPoint}</strong></li>
              <li><span>{legs[1].distance} NM · {compassHeading(legs[1])}°</span><strong>{arrival}</strong></li>
            </ol>
          </figure>
          <figure className="detail-card sail-code">
            <figcaption>{codeTitle} <code>fase_3.c</code></figcaption>
            <p>{codeDescription}</p>
            <pre tabIndex={0}><code>{headingTokens.map((token, index) => (
              index % 2 ? <span key={index} className={headingTokenClass(token)}>{token}</span> : token
            ))}</code></pre>
          </figure>
        </div>
      </div>
    </section>
  );
}
