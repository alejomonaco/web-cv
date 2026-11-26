import React, { useEffect, useRef, useState } from 'react';
import { RelatedProjectLink } from '../types/portfolio';

interface RelatedProjectsSectionProps {
  items: RelatedProjectLink[];
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  previousLabel: string;
  nextLabel: string;
  onSelect: (slug: RelatedProjectLink['slug']) => void;
}

export function RelatedProjectsSection({
  items,
  eyebrow,
  title,
  description,
  ctaLabel,
  previousLabel,
  nextLabel,
  onSelect
}: RelatedProjectsSectionProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    setCanScrollLeft(track.scrollLeft > 4);
    setCanScrollRight(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  };

  useEffect(() => {
    updateScrollState();

    const track = trackRef.current;

    if (!track) {
      return undefined;
    }

    track.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      track.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [items]);

  if (!items.length) {
    return null;
  }

  const handleScroll = (direction: 'left' | 'right') => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const distance = Math.min(360, Math.max(280, track.clientWidth * 0.82));

    track.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth'
    });
  };

  return (
    <section className="section-block related-projects-section">
      <div className="container">
        <div className="related-projects-header fade-up">
          <div className="section-heading">
            <p className="eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          <div className="related-projects-controls" aria-label={title}>
            <button
              type="button"
              className="button button-secondary related-projects-control"
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
            >
              {previousLabel}
            </button>
            <button
              type="button"
              className="button button-secondary related-projects-control"
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
            >
              {nextLabel}
            </button>
          </div>
        </div>

        <div ref={trackRef} className="related-projects-carousel" tabIndex={0} aria-label={eyebrow}>
          {items.map((item, index) => (
            <article key={item.slug} className={`related-project-card fade-up delay-${(index % 3) + 1}`}>
              <div className="related-project-card-topline">
                <span>{item.slug.replace(/-/g, ' / ').toUpperCase()}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.oneLiner}</p>
              <div className="tech-stack related-project-tech-stack" aria-label={item.title}>
                {item.technologies.slice(0, 3).map((technology) => (
                  <span key={technology} className="chip">{technology}</span>
                ))}
              </div>
              <button type="button" className="button button-secondary related-project-button" onClick={() => onSelect(item.slug)}>
                {ctaLabel}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}