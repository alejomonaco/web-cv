import React, { useState } from 'react';
import { HomeContactSection } from './HomeContactSection';
import { HomeFeaturedSection } from './HomeFeaturedSection';
import { SectionRail } from './SectionRail';
import { trackAnalyticsEvent } from '../lib/analytics';
import { ContactFormData, DetailPageSlug, Language, TranslationContent } from '../types/portfolio';

interface FeaturedProjectSummary {
  name: string;
  oneLiner: string;
  problem: string;
  solution: string;
  businessValue: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  status: string;
}

interface HomePageProps {
  language: Language;
  content: TranslationContent;
  personalName: string;
  personalEmail: string;
  academicEmail: string;
  personalLinkedin: string;
  personalGithub: string;
  featuredProject: FeaturedProjectSummary;
  contactData: ContactFormData;
  status: string;
  isSubmitting: boolean;
  activeSection: string;
  isRailCollapsed: boolean;
  railToggleLabel: string;
  onToggleRail: () => void;
  onNavigateToSection: (targetSection: string) => void;
  onNavigateToAppoke: () => void;
  onNavigateToProject: (slug: DetailPageSlug) => void;
  onProjectCardKeyDown: (e: React.KeyboardEvent<HTMLElement>, slug: DetailPageSlug) => void;
  onContactFieldChange: (field: keyof ContactFormData, value: string) => void;
  onContactSubmit: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
}

export function HomePage({
  language,
  content,
  personalName,
  personalEmail,
  academicEmail,
  personalLinkedin,
  personalGithub,
  featuredProject,
  contactData,
  status,
  isSubmitting,
  activeSection,
  isRailCollapsed,
  railToggleLabel,
  onToggleRail,
  onNavigateToSection,
  onNavigateToAppoke,
  onNavigateToProject,
  onProjectCardKeyDown,
  onContactFieldChange,
  onContactSubmit
}: HomePageProps) {
  const handleSectionLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetSection: string) => {
    e.preventDefault();
    trackAnalyticsEvent('section_nav_click', {
      target_section: targetSection
    });
    onNavigateToSection(targetSection);
  };

  const handleProjectLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, slug: DetailPageSlug) => {
    e.preventDefault();
    trackAnalyticsEvent('project_open_click', {
      project: slug,
      source: 'project_hub'
    });
    onNavigateToProject(slug);
  };

  const stopCardNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  const [search, setSearch] = useState('');
  const [searchLabel, noResults] = {
    es: ['Buscar por proyecto o tecnología', 'No hay proyectos que coincidan.'],
    en: ['Search by project or technology', 'No matching projects.'],
    ca: ['Cerca per projecte o tecnologia', 'No hi ha projectes que coincideixin.']
  }[language];
  const normalize = (value: string) => value.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '');
  const projects = content.projects.filter((project) => project.internalSlug !== 'analytics').map((project) => project.internalSlug === 'routine-optimization'
    ? {
        id: project.id,
        title: featuredProject.name,
        oneLiner: featuredProject.oneLiner,
        imageUrl: featuredProject.imageUrl,
        technologies: featuredProject.technologies,
        githubUrl: featuredProject.githubUrl,
        internalSlug: 'appoke' as const,
        detailContent: undefined,
        demoUrl: undefined
      }
    : project);

  return (
    <main>
      <SectionRail
        ariaLabel={content.ui.railLabel}
        collapsed={isRailCollapsed}
        toggleLabel={railToggleLabel}
        onToggle={onToggleRail}
      >
        {content.ui.nav.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? 'section-rail-link section-rail-link-active' : 'section-rail-link'}
            onClick={(e) => handleSectionLinkClick(e, item.id)}
          >
            <span className="section-rail-index">{String(index + 1).padStart(2, '0')}</span>
            <span className="section-rail-text">{item.label}</span>
          </a>
        ))}
      </SectionRail>

      <section id="hero" className="portfolio-hero">
        <div className="container portfolio-hero-grid">
          <div className="portfolio-hero-copy">
            <p className="eyebrow">{content.personalInfo.role}</p>
            <h1>{personalName}</h1>
            <p className="portfolio-hero-lead">{content.personalInfo.tagline}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#project-hub" onClick={(e) => handleSectionLinkClick(e, 'project-hub')}>
                {content.ui.heroPrimaryCta}
              </a>
              <a className="button button-secondary" href="#contact" onClick={(e) => handleSectionLinkClick(e, 'contact')}>
                {content.ui.heroSecondaryCta}
              </a>
            </div>
            <a className="portfolio-hero-email" href={`mailto:${personalEmail}`} onClick={() => trackAnalyticsEvent('contact_channel_click', { channel: 'email', source: 'hero' })}>
              {personalEmail}
            </a>
          </div>

          <div className="portfolio-hero-gallery" aria-label={content.ui.hubEyebrow}>
            {(['bicingflow', 'visual-lab', 'appoke'] as const).map((slug) => {
              const project = projects.find((item) => item.internalSlug === slug);
              if (!project) return null;

              return (
                <a
                  className={`portfolio-hero-tile portfolio-hero-tile-${slug}`}
                  href={`/${slug}`}
                  key={slug}
                  onClick={(e) => handleProjectLinkClick(e, slug)}
                >
                  <img src={project.imageUrl} alt="" />
                  <span>{project.title} <span aria-hidden="true">↗</span></span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="project-hub" className="section-block section-muted">
        <div className="container">
          <div className="section-heading fade-up hub-intro">
            <p className="eyebrow">{content.ui.hubEyebrow}</p>
            <h2>{content.ui.hubTitle}</h2>
            <p>{content.ui.hubDescription}</p>
          </div>

          <div className="project-search">
            <label htmlFor="project-search">{searchLabel}</label>
            <input id="project-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} />
          </div>
          {projects.every((project) => !normalize([project.title, ...project.technologies].join(' ')).includes(normalize(search.trim()))) ? <p role="status">{noResults}</p> : null}
          <div className="project-grid project-hub-grid">
            {projects.filter((project) => normalize([project.title, ...project.technologies].join(' ')).includes(normalize(search.trim()))).map((project, index) => (
              <article
                key={project.id}
                className={`project-card ${project.internalSlug ? 'project-card-clickable' : ''} fade-up delay-${(index % 3) + 1}`}
                role={project.internalSlug ? 'link' : undefined}
                tabIndex={project.internalSlug ? 0 : undefined}
                aria-label={project.internalSlug ? project.title : undefined}
                onClick={project.internalSlug ? () => {
                  trackAnalyticsEvent('project_card_click', {
                    project: project.internalSlug
                  });
                  onNavigateToProject(project.internalSlug as DetailPageSlug);
                } : undefined}
                onKeyDown={project.internalSlug ? (e) => onProjectCardKeyDown(e, project.internalSlug as DetailPageSlug) : undefined}
              >
                {project.imageUrl ? (
                  <div className="project-card-image">
                    <img src={project.imageUrl} alt="" loading="lazy" decoding="async" />
                  </div>
                ) : null}
                <div className="project-card-body">
                  <h3>{project.title}</h3>
                  <p>{project.oneLiner}</p>
                  <div className="tech-stack">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="chip">{tech}</span>
                    ))}
                  </div>

                  <div className="card-links">
                    {project.internalSlug ? (
                      <a href={`/${project.internalSlug}`} onClick={(e) => handleProjectLinkClick(e, project.internalSlug as DetailPageSlug)}>{content.ui.featuredPrimaryCta}</a>
                    ) : null}
                    {project.githubUrl ? (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" onClick={project.internalSlug ? stopCardNavigation : undefined}>{content.ui.githubLabel}</a>
                    ) : null}
                    {project.demoUrl ? (
                      <a href={project.demoUrl} target="_blank" rel="noreferrer" onClick={project.internalSlug ? stopCardNavigation : undefined}>{content.ui.demoLabel}</a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HomeFeaturedSection
        content={content}
        featuredProject={featuredProject}
        featuredStats={content.featuredStats}
        onNavigateToAppoke={onNavigateToAppoke}
      />

      <section id="about" className="section-block">
        <div className="container about-grid">
          <div className="section-heading fade-up">
            <p className="eyebrow">{content.ui.aboutEyebrow}</p>
            <h2>{content.ui.aboutTitle}</h2>
          </div>

          <div className="about-copy fade-up delay-1">
            {content.aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="tech-stack skill-stack" aria-label="Primary skills">
              {content.skills.map((skill) => (
                <span key={skill} className="chip">{skill}</span>
              ))}
            </div>

            <div className="about-subsection">
              <p className="eyebrow about-subsection-eyebrow">{content.ui.opportunityEyebrow}</p>
              <h3>{content.ui.opportunityTitle}</h3>
              <p className="about-subsection-copy">{content.ui.opportunityDescription}</p>

              <div className="opportunity-grid about-opportunity-grid">
                {content.opportunityTracks.map((track, index) => (
                  <article key={track.label} className={`opportunity-card fade-up delay-${(index % 3) + 1}`}>
                    <span className="project-chip">{track.label}</span>
                    <h3>{track.title}</h3>
                    <p>{track.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeContactSection
        content={content}
        personalEmail={personalEmail}
        academicEmail={academicEmail}
        language={language}
        personalLinkedin={personalLinkedin}
        personalGithub={personalGithub}
        contactData={contactData}
        status={status}
        isSubmitting={isSubmitting}
        onContactFieldChange={onContactFieldChange}
        onContactSubmit={onContactSubmit}
      />
    </main>
  );
}
