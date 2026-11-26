import React from 'react';
import '../styles/detail.css';
import './AppokeDetailPage.css';
import { Language, AppokeDetailContent, RelatedProjectLink } from '../types/portfolio';
import { DetailHeroActions } from './DetailHeroActions';
import { DetailStatGrid } from './DetailStatGrid';
import { RelatedProjectsSection } from './RelatedProjectsSection';
import { ProjectWorkflow } from './ProjectWorkflow';
import { ProjectScenario, projectScenarioLabel } from './ProjectScenario';

interface AppokeDetailPageProps {
  language: Language;
  appokeDetail: AppokeDetailContent;
  projectName: string;
  projectImageUrl: string;
  projectTechnologies: string[];
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

export function AppokeDetailPage({
  language,
  appokeDetail,
  projectName,
  projectImageUrl,
  projectTechnologies,
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
}: AppokeDetailPageProps) {
  const { screenshots, seedShowcase } = appokeDetail;
  const galleryLabel = { es: 'Pantallas de Appoke', en: 'Appoke screens', ca: 'Pantalles d’Appoke' }[language];

  return (
    <main className="appoke-page">
      <section className="appoke-hero-section">
        <div className="container appoke-hero-grid">
          <div className="appoke-hero-copy fade-up">
            <p className="eyebrow">{appokeDetail.eyebrow}</p>
            <h1>{projectName}</h1>
            <p className="appoke-intro">{appokeDetail.intro}</p>

            <DetailHeroActions
              backLabel={backLabel}
              contactLabel={contactLabel}
              githubLabel={githubLabel}
              githubUrl={githubUrl}
              onBack={onBack}
              onContact={onContact}
            />

            <a className="project-scenario-link" href="#project-scenario">{projectScenarioLabel(language)} ↓</a>

            <DetailStatGrid items={appokeDetail.stats} />

          </div>

          <div className="appoke-hero-visual">
            <img src={projectImageUrl} alt={projectName} loading="eager" decoding="async" fetchPriority="high" />
            <div className="appoke-hero-overlay">
              <strong>{projectTechnologies.join(' · ')}</strong>
            </div>
          </div>
        </div>
      </section>

      <ProjectScenario slug="appoke" language={language} />

      <section className="section-block appoke-gallery" aria-labelledby="appoke-gallery-title">
        <div className="container">
          <h2 id="appoke-gallery-title">{galleryLabel}</h2>
          <div className="appoke-shot-grid">
            {[{ src: '/appoke/portada.jpg', alt: projectName }, ...screenshots].map((screenshot) => (
              <figure key={screenshot.src} className="appoke-shot-card">
                <a href={screenshot.src} target="_blank" rel="noreferrer">
                  <img src={screenshot.src} alt={screenshot.alt} loading="lazy" decoding="async" />
                </a>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block appoke-seeds" aria-labelledby="appoke-seed-title">
        <div className="container">
          <h2 id="appoke-seed-title">{seedShowcase.title}</h2>
          <p>{seedShowcase.description}</p>
          <div className="appoke-seed-grid" aria-label={seedShowcase.profilesLabel}>
            <figure className="appoke-seed-example">
              <a href={seedShowcase.selector.src} target="_blank" rel="noreferrer">
                <img src={seedShowcase.selector.src} alt={seedShowcase.selector.alt} loading="lazy" decoding="async" />
              </a>
              <figcaption>{seedShowcase.selector.caption}</figcaption>
            </figure>
            {seedShowcase.profiles.map((profile) => (
              <figure key={profile.src} className="appoke-seed-example">
                <a href={profile.src} target="_blank" rel="noreferrer">
                  <img src={profile.src} alt={profile.alt} loading="lazy" decoding="async" />
                </a>
                <figcaption>{profile.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <ProjectWorkflow slug="appoke" language={language} />

      <section className="section-block">
        <div className="container appoke-detail-grid">
          <article className="detail-card fade-up">            <p className="eyebrow">{appokeDetail.purposeTitle}</p>
            <h2>{appokeDetail.title}</h2>
            <p>{appokeDetail.purposeText}</p>
          </article>

          <article className="detail-card fade-up delay-1">            <p className="eyebrow">{appokeDetail.bridgeTitle}</p>
            <h2>{appokeDetail.bridgeTitle}</h2>
            <p>{appokeDetail.bridgeText}</p>
          </article>

          <article className="detail-card detail-card-wide fade-up">            <p className="eyebrow">{appokeDetail.problemsTitle}</p>
            <h2>{appokeDetail.problemsTitle}</h2>
            <ul className="detail-list">
              {appokeDetail.problems.map((problem) => (
                <li key={problem}>{problem}</li>
              ))}
            </ul>
          </article>

          <article className="detail-card detail-card-wide fade-up delay-1">            <p className="eyebrow">{appokeDetail.technologyTitle}</p>
            <h2>{appokeDetail.technologyTitle}</h2>
            <div className="detail-tech-groups">
              {appokeDetail.technologyGroups.map((group) => (
                <div key={group.label} className="detail-tech-group">
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

          <article className="detail-card fade-up">            <p className="eyebrow">{appokeDetail.futureTitle}</p>
            <h2>{appokeDetail.futureTitle}</h2>
            <ul className="detail-list">
              {appokeDetail.futureItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="detail-card fade-up delay-1">            <p className="eyebrow">{appokeDetail.outcomeTitle}</p>
            <h2>{appokeDetail.outcomeTitle}</h2>
            <p>{appokeDetail.outcomeText}</p>
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