import React from 'react';
import { trackAnalyticsEvent } from '../lib/analytics';
import { ContactFormData, Language, TranslationContent } from '../types/portfolio';

interface HomeContactSectionProps {
  content: TranslationContent;
  personalEmail: string;
  academicEmail: string;
  language: Language;
  personalLinkedin: string;
  personalGithub: string;
  contactData: ContactFormData;
  status: string;
  isSubmitting: boolean;
  onContactFieldChange: (field: keyof ContactFormData, value: string) => void;
  onContactSubmit: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
}

export function HomeContactSection({
  content,
  personalEmail,
  academicEmail,
  language,
  personalLinkedin,
  personalGithub,
  contactData,
  status,
  isSubmitting,
  onContactFieldChange,
  onContactSubmit
}: HomeContactSectionProps) {
  const [primaryEmailLabel, academicEmailLabel] = {
    es: ['Correo principal', 'Correo académico · La Salle'],
    en: ['Primary email', 'Academic email · La Salle'],
    ca: ['Correu principal', 'Correu acadèmic · La Salle']
  }[language];

  const trackContactClick = (channel: 'email' | 'linkedin' | 'github') => {
    trackAnalyticsEvent('contact_channel_click', {
      channel,
      source: 'contact_section'
    });
  };

  return (
    <section id="contact" className="section-block contact-section">
      <div className="container contact-grid">
        <div className="section-heading fade-up">
          <p className="eyebrow">{content.ui.contactEyebrow}</p>
          <h2>{content.ui.contactTitle}</h2>
          <p>{content.ui.contactDescription}</p>
          <p className="contact-note">{content.ui.contactNote}</p>

          <div className="contact-email-list">
            <a className="contact-email-card contact-email-primary" href={`mailto:${personalEmail}`} onClick={() => trackContactClick('email')}>
              <span>{primaryEmailLabel}</span>
              <strong>{personalEmail}</strong>
            </a>
            <a className="contact-email-card" href={`mailto:${academicEmail}`} onClick={() => trackContactClick('email')}>
              <span>{academicEmailLabel}</span>
              <strong>{academicEmail}</strong>
            </a>
          </div>

          <div className="contact-links">
            <a className="button button-secondary" href={personalLinkedin} target="_blank" rel="noreferrer" onClick={() => trackContactClick('linkedin')}>{content.ui.linkedinLabel}</a>
            <a className="button button-secondary" href={personalGithub} target="_blank" rel="noreferrer" onClick={() => trackContactClick('github')}>GitHub</a>
          </div>

        </div>

        <form className="contact-form fade-up delay-1" onSubmit={onContactSubmit}>
          <div className="form-console-bar">
            <span>{content.ui.formConsoleLabel}</span>
            <span>{personalEmail}</span>
          </div>

          <div className="form-group">
            <label htmlFor="name">{content.ui.formNameLabel}</label>
            <input
              type="text"
              id="name"
              autoComplete="name"
              value={contactData.name}
              onChange={(e) => onContactFieldChange('name', e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{content.ui.formEmailLabel}</label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              value={contactData.email}
              onChange={(e) => onContactFieldChange('email', e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">{content.ui.formMessageLabel}</label>
            <textarea
              id="message"
              rows={5}
              value={contactData.message}
              onChange={(e) => onContactFieldChange('message', e.target.value)}
              placeholder={content.ui.formPlaceholder}
              required
            />
          </div>

          <button
            className={`button button-primary submit-button${isSubmitting ? ' button-disabled' : ''}`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? content.ui.formSending : content.ui.formSubmit}
          </button>
          {status ? <p className="status-message">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}