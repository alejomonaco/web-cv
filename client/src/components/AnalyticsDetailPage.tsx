import { useState } from 'react';
import '../styles/analytics.css';
import { AnalyticsProjectCase, Language } from '../types/portfolio';

const journeys = {
  es: {
    title: 'Simula una visita al portafolio',
    note: 'Elige una acción para ver qué señal produciría. La simulación usa un recorrido ficticio.',
    event: 'Evento de ejemplo',
    steps: [
      ['Entrar al sitio', 'La visita empieza en la portada. Esto indica dónde comenzó el recorrido.'],
      ['Abrir BicingFlow', 'La persona explora un proyecto de datos. Puedes ver qué caso despertó su interés.'],
      ['Pulsar el correo', 'El clic indica intención de contacto. El envío del mensaje es una acción distinta.']
    ]
  },
  en: {
    title: 'Simulate a portfolio visit',
    note: 'Choose an action to see the signal it would produce. This simulation uses a fictional visit.',
    event: 'Example event',
    steps: [
      ['Open the site', 'The visit starts on the homepage. This shows where the journey began.'],
      ['Open BicingFlow', 'The visitor explores a data project. You can see which case drew their interest.'],
      ['Click the email link', 'The click signals intent to make contact. Sending a message is a separate action.']
    ]
  },
  ca: {
    title: 'Simula una visita al portafolis',
    note: 'Tria una acció per veure quin senyal produiria. La simulació fa servir un recorregut fictici.',
    event: 'Esdeveniment d’exemple',
    steps: [
      ['Entrar al web', 'La visita comença a la portada. Això mostra on ha començat el recorregut.'],
      ['Obrir BicingFlow', 'La persona explora un projecte de dades. Pots veure quin cas li ha despertat interès.'],
      ['Clicar el correu', 'El clic indica intenció de contacte. Enviar un missatge és una acció diferent.']
    ]
  }
};

const journeyEvents = [
  ['page_view', 'page_path = /'],
  ['project_open_click', 'project = bicingflow'],
  ['contact_channel_click', 'channel = email']
];

export function WebCvAnalytics({ title, content, language }: { title: string; content: AnalyticsProjectCase; language: Language }) {
  const [selected, setSelected] = useState(0);
  const journey = journeys[language];
  const [event, parameter] = journeyEvents[selected];

  return (
    <section id="web-cv-analytics" className="section-block project-workflow web-cv-analytics" aria-labelledby="web-cv-analytics-title">
      <div className="container">
        <h2 id="web-cv-analytics-title">{title}</h2>
        <p>{content.description}</p>
        <section className="detail-card web-cv-journey" aria-labelledby="web-cv-journey-title">
          <h3 id="web-cv-journey-title">{journey.title}</h3>
          <p>{journey.note}</p>
          <div className="web-cv-journey-actions" role="group" aria-labelledby="web-cv-journey-title">
            {journey.steps.map(([label], index) => (
              <button
                className={`button ${selected === index ? 'button-primary' : 'button-secondary'}`}
                key={index}
                type="button"
                aria-pressed={selected === index}
                onClick={() => setSelected(index)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="web-cv-journey-result" aria-live="polite">
            <strong>{journey.event}</strong>
            <code>{event} · {parameter}</code>
            <p>{journey.steps[selected][1]}</p>
          </div>
        </section>
        <div className="analytics-detail-grid">
          <article className="detail-card">
            <h3>{content.flowTitle}</h3>
            <ol className="web-cv-analytics-flow">
              {content.flowSteps.map((step) => (
                <li key={step.label}>
                  <strong>{step.label}</strong>
                  <p>{step.detail}</p>
                </li>
              ))}
            </ol>
          </article>
          <article className="detail-card">
            <h3>{content.chartTitle}</h3>
            <p>{content.sourceNote}</p>
            <div className="analytics-bar-chart">
              {content.chartBars.map((bar) => (
                <div key={bar.label} className="analytics-bar-row">
                  <div className="analytics-bar-label-row">
                    <span>{bar.label}</span>
                    <strong>{bar.value}</strong>
                  </div>
                  <div className="analytics-bar-track" aria-hidden="true">
                    <div className="analytics-bar-fill" style={{ width: `${bar.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
