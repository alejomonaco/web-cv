import { Language } from '../types/portfolio';

const copy = {
  "es": {
    "title": "Compara los dos escenarios",
    "intro": "Los escenarios cubren 2021–2025. Las cifras proceden del panel local y representan poblaciones simuladas.",
    "people": "Personas únicas",
    "exits": "Salidas voluntarias",
    "rate": "Salidas por 100 personas-año",
    "annual": "Tasa anual de rotación voluntaria",
    "development": "Desarrollo",
    "reading": "Cómo leer la tasa",
    "formula": "La tasa divide las salidas voluntarias por el tiempo acumulado en plantilla, convertido a años, y multiplica el resultado por 100. Esto permite comparar poblaciones de distinto tamaño y duración.",
    "pay": "Cuándo se puede ajustar una brecha",
    "example": "En España, el escenario Small estima una brecha de tarifa base de 2,77 puntos porcentuales antes del ajuste y 1,46 después. En Desarrollo falta un conjunto de estratos comparables, por lo que el panel deja la brecha ajustada sin estimar."
  },
  "en": {
    "title": "Compare the two scenarios",
    "intro": "Both scenarios cover 2021–2025. The figures come from the local dashboard and represent simulated populations.",
    "people": "Unique people",
    "exits": "Voluntary exits",
    "rate": "Exits per 100 person-years",
    "annual": "Annual voluntary turnover rate",
    "development": "Development",
    "reading": "How to read the rate",
    "formula": "Divide voluntary exits by cumulative time employed, expressed in years, and multiply by 100. This allows comparisons across populations with different sizes and exposure.",
    "pay": "When a pay gap can be adjusted",
    "example": "In Spain, Small estimates a base pay gap of 2.77 percentage points before adjustment and 1.46 afterward. Development lacks comparable strata, so the dashboard leaves its adjusted gap unestimated."
  },
  "ca": {
    "title": "Compara els dos escenaris",
    "intro": "Els dos escenaris cobreixen el període 2021–2025. Les xifres provenen del tauler local i representen poblacions simulades.",
    "people": "Persones úniques",
    "exits": "Sortides voluntàries",
    "rate": "Sortides per 100 persones-any",
    "annual": "Taxa anual de rotació voluntària",
    "development": "Desenvolupament",
    "reading": "Com interpretar la taxa",
    "formula": "La taxa divideix les sortides voluntàries pel temps acumulat a la plantilla, convertit en anys, i multiplica el resultat per 100. Això permet comparar poblacions de mida i durada diferents.",
    "pay": "Quan es pot ajustar una bretxa",
    "example": "A Espanya, l’escenari Small estima una bretxa de tarifa base de 2,77 punts percentuals abans de l’ajust i d’1,46 després. A Desenvolupament falten estrats comparables i el tauler deixa la bretxa ajustada sense estimar."
  }
};

const scenarios = [
  {
    "people": 1000,
    "exits": 258,
    "rate": 7.281293463143254,
    "annual": [
      {
        "year": 2021,
        "rate": 6.416704857928506
      },
      {
        "year": 2022,
        "rate": 7.52162273476112
      },
      {
        "year": 2023,
        "rate": 8.06169626987907
      },
      {
        "year": 2024,
        "rate": 8.145660773044012
      },
      {
        "year": 2025,
        "rate": 6.2703862660944205
      }
    ]
  },
  {
    "people": 100,
    "exits": 22,
    "rate": 6.244705736067829,
    "annual": [
      {
        "year": 2021,
        "rate": 4.193937306234929
      },
      {
        "year": 2022,
        "rate": 7.007059816598242
      },
      {
        "year": 2023,
        "rate": 7.117663107023151
      },
      {
        "year": 2024,
        "rate": 4.312278630460448
      },
      {
        "year": 2025,
        "rate": 8.621503599669538
      }
    ]
  }
];

export function PeopleAnalyticsComparison({ language }: { language: Language }) {
  const labels = copy[language];
  const names = ['Small', labels.development];
  const integers = new Intl.NumberFormat(language);
  const rates = new Intl.NumberFormat(language, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const maxRate = Math.max(...scenarios.flatMap(({ annual }) => annual.map(({ rate }) => rate)));
  const scale = Math.ceil(maxRate / 2) * 2;

  return (
    <section className="people-comparison" aria-labelledby="people-comparison-title">
      <h3 id="people-comparison-title">{labels.title}</h3>
      <p>{labels.intro}</p>
      <div className="people-comparison-summaries">
        {scenarios.map((scenario, index) => (
          <article className="people-comparison-summary" key={names[index]}>
            <h4>{names[index]}</h4>
            <dl>
              <div><dt>{labels.people}</dt><dd>{integers.format(scenario.people)}</dd></div>
              <div><dt>{labels.exits}</dt><dd>{integers.format(scenario.exits)}</dd></div>
              <div><dt>{labels.rate}</dt><dd>{rates.format(scenario.rate)}</dd></div>
            </dl>
          </article>
        ))}
      </div>
      <div className="people-comparison-chart">
        <h4>{labels.annual}</h4>
        <p>{labels.rate}</p>
        <ol>
          {scenarios[0].annual.map(({ year }, yearIndex) => (
            <li key={year}>
              <strong>{year}</strong>
              <div className="people-comparison-series">
                {scenarios.map((scenario, index) => {
                  const rate = scenario.annual[yearIndex].rate;
                  return (
                    <div key={names[index]} className="people-comparison-bar-row">
                      <span>{names[index]}</span>
                      <span className="people-comparison-track" aria-hidden="true">
                        <span style={{ width: `${rate / scale * 100}%` }} />
                      </span>
                      <strong>{rates.format(rate)}</strong>
                    </div>
                  );
                })}
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="people-comparison-notes">
        <article><h4>{labels.reading}</h4><p>{labels.formula}</p></article>
        <article><h4>{labels.pay}</h4><p>{labels.example}</p></article>
      </div>
    </section>
  );
}
