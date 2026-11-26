import React from 'react';
import { trackAnalyticsEvent } from '../lib/analytics';
import { MetricItem, TranslationContent } from '../types/portfolio';

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

interface HomeFeaturedSectionProps {
  content: TranslationContent;
  featuredProject: FeaturedProjectSummary;
  featuredStats: MetricItem[];
  onNavigateToAppoke: () => void;
}

export function HomeFeaturedSection({ content, featuredProject, featuredStats, onNavigateToAppoke }: HomeFeaturedSectionProps) {
  const handleAppokeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    trackAnalyticsEvent('project_open_click', {
      project: 'appoke',
      source: 'featured_section'
    });
    onNavigateToAppoke();
  };

  const handleFeaturedGithubClick = () => {
    trackAnalyticsEvent('external_link_click', {
      destination: 'github',
      source: 'featured_section',
      project: 'appoke'
    });
  };

  return (
    <section id="featured-project" className="section-block">
      <div className="container">
        <div className="section-heading fade-up">
          <p className="eyebrow">{content.ui.featuredCaseEyebrow}</p>
          <h2>
            <a className="headline-link" href="/appoke" onClick={handleAppokeClick}>{featuredProject.name}</a>
          </h2>
          <p>{featuredProject.oneLiner}</p>
        </div>

        <article className="featured-card fade-up delay-1">
          <div className="featured-copy">
            <div className="featured-header-row">
              <p className="feature-kicker">{content.ui.featuredReviewLabel}</p>
              <span className="status-chip">{featuredProject.status}</span>
            </div>
            <h3>
              <a className="headline-link" href="/appoke" onClick={handleAppokeClick}>{featuredProject.name}</a>
            </h3>
            <p className="featured-description">{featuredProject.oneLiner}</p>

            <div className="featured-columns">
              <div>
                <h4>{content.ui.featuredProblemLabel}</h4>
                <p>{featuredProject.problem}</p>
              </div>
              <div>
                <h4>{content.ui.featuredSolutionLabel}</h4>
                <p>{featuredProject.solution}</p>
              </div>
            </div>

            <div className="value-callout">
              <h4>{content.ui.featuredValueLabel}</h4>
              <p>{featuredProject.businessValue}</p>
            </div>

            <div className="tech-stack" aria-label="Project technologies">
              {featuredProject.technologies.map((tech) => (
                <span key={tech} className="chip">{tech}</span>
              ))}
            </div>

            <div className="featured-actions">
              <a className="button button-primary" href="/appoke" onClick={handleAppokeClick}>
                {content.ui.featuredPrimaryCta}
              </a>
              <a className="button button-secondary" href={featuredProject.githubUrl} target="_blank" rel="noreferrer" onClick={handleFeaturedGithubClick}>
                {content.ui.featuredSecondaryCta}
              </a>
            </div>
          </div>

          <div className="featured-visual" aria-hidden="true">
            <img src={featuredProject.imageUrl} alt={featuredProject.name} loading="eager" decoding="async" fetchPriority="high" />

            <div className="floating-stats">
              {featuredStats.map((stat) => (
                <div key={stat.label} className="floating-stat-card">
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>

            <div className="visual-overlay">
              <span>{content.ui.featuredVisualEyebrow}</span>
              <strong>{content.ui.featuredVisualTitle}</strong>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}