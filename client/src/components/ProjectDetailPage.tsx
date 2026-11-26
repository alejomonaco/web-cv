import React from 'react';
import '../styles/detail.css';
import { AnalyticsProjectCase, Language, ProjectSlug, RelatedProjectLink, StandardProjectDetailContent } from '../types/portfolio';
import { DetailHeroActions } from './DetailHeroActions';
import { DetailStatGrid } from './DetailStatGrid';
import { RelatedProjectsSection } from './RelatedProjectsSection';
import { ProjectWorkflow } from './ProjectWorkflow';
import { BicingFlowPipeline } from './BicingFlowPipeline';
import { SailTrackerDemo } from './SailTrackerDemo';
import { ProjectScenario, hasProjectScenario, projectScenarioLabel } from './ProjectScenario';
import { EmailAutomationDemo, EmailAutomationPreview, emailAutomationDemoLabel } from './EmailAutomationDemo';
import { WebCvAnalytics } from './AnalyticsDetailPage';
import { VisualLabShowcase, visualLabJumpLabels } from './VisualLabShowcase';
import { PeopleAnalyticsShowcase, peopleAnalyticsLinkLabel } from './PeopleAnalyticsShowcase';

const bicingflowPreviewCopy = {
  es: {
    map: 'Ampliar la captura del mapa de estaciones de BicingFlow',
    steps: [
      ['Disponibilidad', 'Consulta cuántas bicis tiene cada estación.'],
      ['Previsión', 'Detecta dónde podrían faltar bicis.'],
      ['Redistribución', 'Consulta entre qué estaciones moverlas.']
    ]
  },
  en: {
    map: 'Enlarge the BicingFlow station map screenshot',
    steps: [
      ['Availability', 'See how many bikes each station has.'],
      ['Forecast', 'Spot stations that could run short of bikes.'],
      ['Rebalancing', 'See which stations could exchange bikes.']
    ]
  },
  ca: {
    map: 'Amplia la captura del mapa d’estacions de BicingFlow',
    steps: [
      ['Disponibilitat', 'Consulta quantes bicis té cada estació.'],
      ['Previsió', 'Detecta on podrien faltar bicis.'],
      ['Redistribució', 'Consulta entre quines estacions moure-les.']
    ]
  }
};

function BicingFlowMap({ label, lazy }: { label: string; lazy?: boolean }) {
  return (
    <>
      {(['light', 'dark'] as const).map((theme) => {
        const image = theme === 'dark' ? '/projects/bicingflow-map-dark.png' : '/projects/bicingflow-map.png';
        return (
          <a key={theme} className={`bicingflow-map bicingflow-map-${theme}`} href={image} target="_blank" rel="noreferrer">
            <img src={image} alt={label} loading={lazy ? 'lazy' : undefined} decoding="async" />
          </a>
        );
      })}
    </>
  );
}

interface ProjectDetailPageProps {
  language: Language;
  analytics?: { title: string; content: AnalyticsProjectCase };
  projectSlug: ProjectSlug;
  detailContent: StandardProjectDetailContent;
  projectName: string;
  projectTechnologies: string[];
  projectImageUrl: string;
  githubUrl?: string;
  relatedProjects: RelatedProjectLink[];
  onBack: () => void;
  onContact: () => void;
  onSelectProject: (slug: RelatedProjectLink['slug']) => void;
  backLabel: string;
  contactLabel: string;
  githubLabel: string;
  relatedEyebrow: string;
  relatedTitle: string;
  relatedDescription: string;
  relatedCtaLabel: string;
  relatedPreviousLabel: string;
  relatedNextLabel: string;
}

export function ProjectDetailPage({
  language,
  analytics,
  projectSlug,
  detailContent,
  projectName,
  projectTechnologies,
  projectImageUrl,
  githubUrl,
  relatedProjects,
  onBack,
  onContact,
  onSelectProject,
  backLabel,
  contactLabel,
  githubLabel,
  relatedEyebrow,
  relatedTitle,
  relatedDescription,
  relatedCtaLabel,
  relatedPreviousLabel,
  relatedNextLabel
}: ProjectDetailPageProps) {
  const hasMockup = projectSlug === 'productivity-dashboard' || projectSlug === 'routine-optimization';
  const projectScreenshots: Partial<Record<ProjectSlug, string>> = {
    bicingflow: '/projects/bicingflow-map.png',
    'web-cv': '/projects/web-cv.png'
  };
  const screenshot = projectScreenshots[projectSlug];
  const screenshotTitle = { es: 'Vista del proyecto', en: 'Project preview', ca: 'Vista del projecte' }[language];
  const bicingflowPreview = bicingflowPreviewCopy[language];
  const featuredCapabilities = detailContent.capabilities.slice(0, 3);

  const renderProjectMockup = () => {
    if (projectSlug === 'productivity-dashboard') {
      return (
        <div className="project-mockup project-mockup-dashboard" aria-hidden="true">
          <div className="project-mockup-window">
            <div className="project-mockup-kpi-grid">
              <div className="project-mockup-kpi-card">
                <span>Focus</span>
                <strong>84%</strong>
              </div>
              <div className="project-mockup-kpi-card">
                <span>Rhythm</span>
                <strong>+18</strong>
              </div>
              <div className="project-mockup-kpi-card">
                <span>Tasks</span>
                <strong>126</strong>
              </div>
            </div>
            <div className="project-mockup-chart-panel">
              <div className="project-mockup-chart-bars">
                <span style={{ height: '42%' }} />
                <span style={{ height: '68%' }} />
                <span style={{ height: '52%' }} />
                <span style={{ height: '84%' }} />
                <span style={{ height: '61%' }} />
                <span style={{ height: '76%' }} />
              </div>
              <div className="project-mockup-chart-line" />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="project-mockup project-mockup-routine" aria-hidden="true">
        <div className="project-mockup-window">
          <div className="project-mockup-routine-header">
            <strong>Flow engine</strong>
            <span>Adaptive queue</span>
          </div>
          <div className="project-mockup-routine-stack">
            <div className="project-mockup-routine-card project-mockup-routine-card-primary">
              <strong>Priority 01</strong>
              <p>Deep work block</p>
            </div>
            <div className="project-mockup-routine-card">
              <strong>Priority 02</strong>
              <p>Automation review</p>
            </div>
            <div className="project-mockup-routine-card project-mockup-routine-card-muted">
              <strong>Priority 03</strong>
              <p>Low-value backlog</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="project-detail-page">
      <section className="project-detail-hero-section">
        <div className="container project-detail-hero-grid">
          <div className="project-detail-hero-copy fade-up">
            <p className="eyebrow">{detailContent.eyebrow}</p>
            <h1>{projectName}</h1>
            <p className="appoke-intro">{detailContent.intro}</p>

            <DetailHeroActions
              backLabel={backLabel}
              contactLabel={contactLabel}
              githubLabel={githubLabel}
              githubUrl={githubUrl}
              onBack={onBack}
              onContact={onContact}
              className="appoke-actions project-detail-actions"
            />

            {analytics ? <a className="web-cv-analytics-link" href="#web-cv-analytics">{analytics.title} ↓</a> : null}

            {projectSlug === 'visual-lab' ? (
              <a className="visual-lab-hero-link" href="#visual-lab-labs">{visualLabJumpLabels[language]} ↓</a>
            ) : null}

            {projectSlug === 'people-analytics' ? (
              <a className="people-analytics-hero-link" href="#people-analytics-panel">{peopleAnalyticsLinkLabel(language)} ↓</a>
            ) : null}

            {projectSlug === 'email-automation' ? (
              <a className="email-automation-demo-link" href="#email-automation-demo">{emailAutomationDemoLabel(language)} ↓</a>
            ) : null}

            {projectSlug === 'bicingflow' || projectSlug === 'sail-tracker' ? (
              <a className="project-scenario-link" href={projectSlug === 'bicingflow' ? '#bicingflow-forecast-title' : '#sail-demo-title'}>
                {projectScenarioLabel(language)} ↓
              </a>
            ) : null}
            {projectSlug !== 'bicingflow' && projectSlug !== 'sail-tracker' && hasProjectScenario(projectSlug) ? <a className="project-scenario-link" href="#project-scenario">{projectScenarioLabel(language)} ↓</a> : null}

            <DetailStatGrid items={detailContent.stats} className="detail-stat-grid project-detail-stat-grid" cardClassName="detail-stat-card project-detail-stat-card" />
          </div>

          <div className="project-detail-showcase-stack fade-up delay-1">
            <div className="project-detail-visual-shell">
              {projectSlug === 'email-automation' ? (
                <EmailAutomationPreview language={language} />
              ) : projectSlug === 'bicingflow' ? (
                <figure className="bicingflow-preview">
                  <BicingFlowMap label={bicingflowPreview.map} />
                  <figcaption>
                    <ol className="bicingflow-preview-steps">
                      {bicingflowPreview.steps.map(([title, description]) => (
                        <li key={title}>
                          <strong>{title}</strong>
                          <span>{description}</span>
                        </li>
                      ))}
                    </ol>
                  </figcaption>
                </figure>
              ) : projectImageUrl ? (
                <div className="project-detail-hero-visual project-cover-visual">
                  <img className="project-detail-image" src={projectImageUrl} alt="" />
                </div>
              ) : null}

              <div className="project-detail-spotlight-card">
                <div className="project-detail-spotlight-header">
                  <span>{detailContent.capabilitiesTitle}</span>
                </div>

                <div className="project-detail-spotlight-grid">
                  {featuredCapabilities.map((capability) => (
                    <article key={capability} className="project-detail-spotlight-item">
                      <p>{capability}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {hasProjectScenario(projectSlug) ? <ProjectScenario key={projectSlug} slug={projectSlug} language={language} /> : null}
      {projectSlug === 'email-automation' ? <EmailAutomationDemo language={language} /> : null}
      {projectSlug === 'visual-lab' ? <VisualLabShowcase language={language} /> : null}
      {projectSlug === 'people-analytics' ? <PeopleAnalyticsShowcase language={language} /> : null}

      {projectSlug === 'bicingflow' ? <BicingFlowPipeline language={language} /> : null}
      {projectSlug === 'sail-tracker' ? <SailTrackerDemo language={language} /> : null}





      {screenshot || hasMockup ? (
        <section className="section-block project-source-preview">
          <div className="container">
            <h2>{screenshotTitle}</h2>
            {projectSlug === 'bicingflow' ? (
              <BicingFlowMap label={bicingflowPreview.map} lazy />
            ) : screenshot ? (
              <a href={screenshot} target="_blank" rel="noreferrer">
                <img src={screenshot} alt={projectName} loading="lazy" decoding="async" />
              </a>
            ) : (
              <div className={`project-detail-hero-visual project-detail-hero-visual-${projectSlug}`}>
                {renderProjectMockup()}
                <div className="appoke-hero-overlay project-detail-hero-overlay">
                  <strong>{projectTechnologies.join(' · ')}</strong>
                </div>
              </div>
            )}
          </div>
        </section>
      ) : null}

      {projectSlug !== 'visual-lab' && projectSlug !== 'people-analytics' ? (
        <ProjectWorkflow slug={projectSlug} language={language} />
      ) : null}

      {analytics ? <WebCvAnalytics title={analytics.title} content={analytics.content} language={language} /> : null}

      <section className="section-block">
        <div className="container project-detail-grid">
          <article className="detail-card project-detail-card project-detail-card-emphasis fade-up">            <h2>{detailContent.overviewTitle}</h2>
            <p>{detailContent.overviewText}</p>
          </article>

          <article className="detail-card project-detail-card fade-up delay-1">            <h2>{detailContent.operationTitle}</h2>
            <p>{detailContent.operationText}</p>
          </article>

          <article className="detail-card detail-card-wide project-detail-card fade-up">            <h2>{detailContent.capabilitiesTitle}</h2>
            <div className="project-capability-grid">
              {detailContent.capabilities.map((capability) => (
                <article key={capability} className="project-capability-card">
                  <p>{capability}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="detail-card detail-card-wide project-detail-card fade-up delay-1">            <h2>{detailContent.technologyTitle}</h2>
            <div className="project-tech-grid">
              {detailContent.technologyGroups.map((group) => (
                <div key={group.label} className="detail-tech-group project-tech-card">
                  <strong>{group.label}</strong>
                  <div className="tech-stack detail-tech-stack">
                    {group.items.map((item) => (
                      <span key={item} className="chip">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="detail-card project-detail-card fade-up">            <h2>{detailContent.nextTitle}</h2>
            <div className="project-roadmap-list">
              {detailContent.nextItems.map((item) => (
                <article key={item} className="project-roadmap-item">
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="detail-card project-detail-card project-detail-card-outcome fade-up delay-1">            <h2>{detailContent.outcomeTitle}</h2>
            <p>{detailContent.outcomeText}</p>
          </article>
        </div>
      </section>


      <RelatedProjectsSection
        items={relatedProjects}
        eyebrow={relatedEyebrow}
        title={relatedTitle}
        description={relatedDescription}
        ctaLabel={relatedCtaLabel}
        previousLabel={relatedPreviousLabel}
        nextLabel={relatedNextLabel}
        onSelect={onSelectProject}
      />
    </main>
  );
}