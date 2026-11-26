import { useState } from 'react';
import { Language } from '../types/portfolio';

const domains = ['electricidad.example', 'internet.example', 'agenda.example'];
const copy = {
  "es": [
    "Probar la simulación",
    "Así clasifica el correo",
    "Elige un correo ficticio y ejecuta la simulación para ver qué regla coincide y qué quedaría registrado. Esta demo funciona dentro del portfolio.",
    "Correos de ejemplo",
    "Factura de electricidad",
    "Factura de internet",
    "Invitación a una reunión",
    "Simular clasificación",
    "Resultado de la simulación",
    "Etiquetar como Servicios Públicos y marcar con estrella.",
    "Sin coincidencia. El mensaje quedaría sin cambios.",
    "Regla por dominio del remitente",
    "Sin regla para este dominio",
    "Vista previa. No se modifica ningún buzón."
  ],
  "en": [
    "Try the simulation",
    "How email gets classified",
    "Choose a fictional email and run the simulation to see which rule matches and what would be logged. This demo runs inside the portfolio.",
    "Sample emails",
    "Electricity bill",
    "Internet bill",
    "Meeting invitation",
    "Simulate classification",
    "Simulation result",
    "Apply the Public Services label and star the message.",
    "No match. The message would stay unchanged.",
    "Sender-domain rule",
    "No rule for this domain",
    "Preview only. No mailbox is modified."
  ],
  "ca": [
    "Provar la simulació",
    "Així es classifica el correu",
    "Tria un correu fictici i executa la simulació per veure quina regla coincideix i què quedaria registrat. La demostració funciona dins del portafolis.",
    "Correus d’exemple",
    "Factura d’electricitat",
    "Factura d’internet",
    "Invitació a una reunió",
    "Simular la classificació",
    "Resultat de la simulació",
    "Aplica l’etiqueta Serveis Públics i marca el missatge amb una estrella.",
    "Sense coincidència. El missatge quedaria sense canvis.",
    "Regla per domini del remitent",
    "Cap regla per a aquest domini",
    "Previsualització. No es modifica cap bústia."
  ]
};

const previewCopy = {
  es: ['Ejemplo de clasificación', 'Correo recibido', 'Factura de electricidad', 'Regla por remitente', 'Si el dominio coincide', 'Correo clasificado', 'Servicios Públicos'],
  en: ['Classification example', 'Incoming email', 'Electricity bill', 'Sender rule', 'If the domain matches', 'Classified email', 'Public Services'],
  ca: ['Exemple de classificació', 'Correu rebut', 'Factura d’electricitat', 'Regla per remitent', 'Si el domini coincideix', 'Correu classificat', 'Serveis Públics']
};

export function EmailAutomationPreview({ language }: { language: Language }) {
  const [title, incoming, subject, rule, condition, outcome, label] = previewCopy[language];

  return (
    <figure className="email-flow-preview">
      <figcaption>{title}</figcaption>
      <ol className="email-flow-steps">
        <li>
          <span className="email-flow-symbol" aria-hidden="true">✉</span>
          <div><small>{incoming}</small><strong>{subject}</strong><span>{domains[0]}</span></div>
        </li>
        <li>
          <span className="email-flow-symbol" aria-hidden="true">↓</span>
          <div><small>{rule}</small><strong>{condition}</strong></div>
        </li>
        <li>
          <span className="email-flow-symbol" aria-hidden="true">★</span>
          <div><small>{outcome}</small><strong>{subject}</strong><span className="email-flow-label">{label}</span></div>
        </li>
      </ol>
    </figure>
  );
}

export function emailAutomationDemoLabel(language: Language) {
  return copy[language][0];
}

export function EmailAutomationDemo({ language }: { language: Language }) {
  const [selected, setSelected] = useState(0);
  const [result, setResult] = useState<number | null>(null);
  const [, title, intro, sampleLabel, electricity, internet, meeting, simulate, outcome, matched, unmatched, rule, noRule, preview] = copy[language];
  const subjects = [electricity, internet, meeting];

  return (
    <section id="email-automation-demo" className="section-block project-workflow email-automation-demo" aria-labelledby="email-automation-title">
      <div className="container">
        <h2 id="email-automation-title">{title}</h2>
        <p>{intro}</p>
        <div className="email-automation-demo-grid">
          <fieldset className="detail-card">
            <legend>{sampleLabel}</legend>
            {domains.map((domain, index) => (
              <label key={domain} className="email-automation-message">
                <input type="radio" name="example-email" checked={index === selected} onChange={() => {
                  setSelected(index);
                  setResult(null);
                }} />
                <span><strong>{subjects[index]}</strong><small>{domain}</small></span>
              </label>
            ))}
            <button className="button button-primary" type="button" onClick={() => setResult(selected)}>{simulate}</button>
          </fieldset>
          <article className="detail-card" aria-live="polite">
            <h3>{outcome}</h3>
            {result !== null ? (
              <>
                <strong>{result < 2 ? rule : noRule} · {domains[result]}</strong>
                <p>{result < 2 ? matched : unmatched}</p>
              </>
            ) : null}
            <p>{preview}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
