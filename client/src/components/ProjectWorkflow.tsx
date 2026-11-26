import { projectWorkflows, projectWorkflowTitles } from '../content/projectWorkflows';
import { DetailPageSlug, Language } from '../types/portfolio';

export function ProjectWorkflow({ slug, language }: { slug: DetailPageSlug; language: Language }) {
  const steps = projectWorkflows[slug]?.[language];
  if (!steps) return null;

  return (
    <section className="section-block project-workflow" aria-labelledby="workflow-heading">
      <div className="container">
        <h2 id="workflow-heading">{projectWorkflowTitles[language]}</h2>
        <ol className="project-workflow-list">
          {steps.map(({ title, description }) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
