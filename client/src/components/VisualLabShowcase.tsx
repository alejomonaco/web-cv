import { Language } from '../types/portfolio';
import './VisualLabShowcase.css';

export const visualLabJumpLabels: Record<Language, string> = {
  es: 'Explorar los laboratorios',
  en: 'Explore the labs',
  ca: 'Explorar els laboratoris'
};

const labImages = [
  { id: 'fourier', src: '/projects/visual-lab-fourier.png' },
  { id: 'limite-central', src: '/projects/visual-lab-tlc.png' }
];

const copy = {
  "es": {
    "title": "Dos formas de experimentar con matemáticas",
    "intro": "Visual Lab reúne dos laboratorios locales. En uno puedes reconstruir una forma con ondas. En el otro puedes repetir un muestreo y observar cómo cambian las medias.",
    "zoom": "Ampliar captura",
    "labs": [
      {
        "name": "Series de Fourier",
        "title": "Reconstruye un contorno con ondas",
        "description": "Parte de un archivo GeoJSON, elige el anillo exterior de un polígono y ajusta el número de armónicos. Puedes superponer el trazado original y la reconstrucción para ver qué detalles recupera cada ajuste.",
        "caption": "La comparación espacial superpone el contorno original y el reconstruido con 50 armónicos.",
        "features": [
          "GeoJSON",
          "0–128 armónicos",
          "Curva de error RMSE"
        ],
        "result": "El historial conserva cada cálculo. Puedes recuperar una configuración y exportar la reconstrucción, la curva de error o ambas en un vídeo vertical."
      },
      {
        "name": "Teorema del límite central",
        "title": "Observa cómo se distribuyen las medias",
        "description": "Elige una población Bernoulli, uniforme, exponencial o normal. Configura el tamaño de muestra, las repeticiones y una semilla. La vista guiada pasa de una muestra al histograma de todas las medias.",
        "caption": "Histograma de medias de 1.000 muestras Bernoulli de tamaño 10, junto con la aproximación normal.",
        "features": [
          "4 distribuciones",
          "Hasta 5.000 repeticiones",
          "Semilla reproducible"
        ],
        "result": "Cambia el tamaño de muestra en otra ejecución y compara los histogramas. La aproximación normal depende del tamaño y de la población elegida."
      }
    ],
    "output": "Del experimento al vídeo",
    "outputText": "Los dos laboratorios guardan las ejecuciones en el proyecto. Con FFmpeg instalado, se pueden exportar como MP4 vertical de 1080 × 1920."
  },
  "en": {
    "title": "Two ways to explore mathematics",
    "intro": "Visual Lab brings together two local labs. Reconstruct a shape with waves or repeat a sampling experiment and observe how its means change.",
    "zoom": "Open full-size screenshot",
    "labs": [
      {
        "name": "Fourier series",
        "title": "Reconstruct an outline with waves",
        "description": "Start from a GeoJSON file, select a polygon’s exterior ring and adjust the number of harmonics. Overlay the original outline and the reconstruction to see which details each setting recovers.",
        "caption": "The spatial comparison overlays the original outline and its reconstruction with 50 harmonics.",
        "features": [
          "GeoJSON",
          "0–128 harmonics",
          "RMSE curve"
        ],
        "result": "The history keeps each calculation. Reopen a saved configuration and export the reconstruction, the error curve or both as a vertical video."
      },
      {
        "name": "Central limit theorem",
        "title": "See how sample means are distributed",
        "description": "Choose a Bernoulli, uniform, exponential or normal population. Set the sample size, number of repetitions and seed. The guided view moves from one sample to the histogram of all sample means.",
        "caption": "Histogram of means from 1,000 Bernoulli samples of size 10, alongside the normal approximation.",
        "features": [
          "4 distributions",
          "Up to 5,000 repetitions",
          "Reproducible seed"
        ],
        "result": "Change the sample size in a new run and compare the histograms. The normal approximation depends on the sample size and the chosen population."
      }
    ],
    "output": "From experiment to video",
    "outputText": "Both labs save runs to the project. With FFmpeg installed, runs can be exported as 1080 × 1920 vertical MP4 videos."
  },
  "ca": {
    "title": "Dues maneres d’experimentar amb matemàtiques",
    "intro": "Visual Lab reuneix dos laboratoris locals. En un pots reconstruir una forma amb ones. En l’altre pots repetir un mostreig i observar com canvien les mitjanes.",
    "zoom": "Ampliar la captura",
    "labs": [
      {
        "name": "Sèries de Fourier",
        "title": "Reconstrueix un contorn amb ones",
        "description": "Parteix d’un fitxer GeoJSON, tria l’anell exterior d’un polígon i ajusta el nombre d’harmònics. Superposa el traçat original i la reconstrucció per veure quins detalls recupera cada ajust.",
        "caption": "La comparació espacial superposa el contorn original i el reconstruït amb 50 harmònics.",
        "features": [
          "GeoJSON",
          "0–128 harmònics",
          "Corba d’error RMSE"
        ],
        "result": "L’historial conserva cada càlcul. Pots recuperar una configuració i exportar la reconstrucció, la corba d’error o totes dues en un vídeo vertical."
      },
      {
        "name": "Teorema del límit central",
        "title": "Observa com es distribueixen les mitjanes",
        "description": "Tria una població de Bernoulli, uniforme, exponencial o normal. Configura la mida de la mostra, les repeticions i una llavor. La vista guiada passa d’una mostra a l’histograma de totes les mitjanes.",
        "caption": "Histograma de mitjanes de 1.000 mostres de Bernoulli de mida 10, amb l’aproximació normal.",
        "features": [
          "4 distribucions",
          "Fins a 5.000 repeticions",
          "Llavor reproduïble"
        ],
        "result": "Canvia la mida de la mostra en una altra execució i compara els histogrames. L’aproximació normal depèn de la mida i de la població triada."
      }
    ],
    "output": "De l’experiment al vídeo",
    "outputText": "Tots dos laboratoris desen les execucions al projecte. Si hi ha FFmpeg instal·lat, es poden exportar com a MP4 vertical de 1080 × 1920."
  }
};

export function VisualLabShowcase({ language }: { language: Language }) {
  const { title, intro, zoom, labs, output, outputText } = copy[language];

  return (
    <section id="visual-lab-labs" className="section-block visual-lab-showcase" aria-labelledby="visual-lab-showcase-title">
      <div className="container">
        <header className="visual-lab-showcase-heading">
          <h2 id="visual-lab-showcase-title">{title}</h2>
          <p>{intro}</p>
          <div className="visual-lab-jump-links">
            {labs.map((lab, index) => (
              <a key={labImages[index].id} href={`#${labImages[index].id}`}>{lab.name} <span aria-hidden="true">↓</span></a>
            ))}
          </div>
        </header>

        {labs.map((lab, index) => {
          const { id, src } = labImages[index];

          return (
            <article key={id} id={id} className="visual-lab-module" aria-labelledby={`${id}-title`}>
              <div className="visual-lab-module-copy">
                <p className="eyebrow">{lab.name}</p>
                <h3 id={`${id}-title`}>{lab.title}</h3>
                <p>{lab.description}</p>
                <ul className="tech-stack visual-lab-features">
                  {lab.features.map((feature) => <li className="chip" key={feature}>{feature}</li>)}
                </ul>
                <p>{lab.result}</p>
              </div>
              <figure className="visual-lab-figure">
                <a href={src} target="_blank" rel="noreferrer" aria-label={`${zoom} · ${lab.name}`}>
                  <img src={src} alt={lab.caption} loading="lazy" decoding="async" />
                  <span>{zoom} <span aria-hidden="true">↗</span></span>
                </a>
                <figcaption>{lab.caption}</figcaption>
              </figure>
            </article>
          );
        })}

        <div className="visual-lab-output">
          <h3>{output}</h3>
          <p>{outputText}</p>
        </div>
      </div>
    </section>
  );
}
