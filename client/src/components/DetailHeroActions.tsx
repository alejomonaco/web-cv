import React from 'react';

interface DetailHeroActionsProps {
  backLabel: string;
  contactLabel: string;
  githubLabel: string;
  githubUrl?: string;
  onBack: () => void;
  onContact: () => void;
  className?: string;
}

export function DetailHeroActions({
  backLabel,
  contactLabel,
  githubLabel,
  githubUrl,
  onBack,
  onContact,
  className
}: DetailHeroActionsProps) {
  return (
    <div className={className ?? 'appoke-actions'}>
      <button type="button" className="button button-secondary" onClick={onBack}>
        {backLabel}
      </button>
      <button type="button" className="button button-primary" onClick={onContact}>
        {contactLabel}
      </button>
      {githubUrl ? (
        <a className="button button-secondary" href={githubUrl} target="_blank" rel="noreferrer">
          {githubLabel}
        </a>
      ) : null}
    </div>
  );
}