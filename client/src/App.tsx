import React, { useEffect, useMemo, useState } from 'react';
import './styles/theme.css';
import './styles/layout.css';
import './App.css';
import { AppokeDetailPage } from './components/AppokeDetailPage';
import { HomePage } from './components/HomePage';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { SectionRail } from './components/SectionRail';
import { baseFeaturedProject, languageOptions, personalInfo, themeOptions, translations } from './content/portfolioContent';
import { useSectionTracking } from './hooks/useSectionTracking';
import { trackAnalyticsEvent, trackPageView } from './lib/analytics';
import { ContactFormData, DetailPageSlug, Language, ProjectCategory, ProjectSlug, RelatedProjectLink, ThemePreference } from './types/portfolio';
import './styles/portfolio-refresh.css';

type AppPage = 'home' | 'appoke' | ProjectSlug;
type AnalyticsConsentPreference = 'accepted' | 'rejected' | 'pending';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL?.replace(/\/$/, '') || '';
const analyticsConsentStorageKey = 'portfolio-analytics-consent';
const pageByPath: Record<string, Exclude<AppPage, 'home'>> = {
  '/appoke': 'appoke',
  '/analytics': 'web-cv',
  '/email-automation': 'email-automation',
  '/productivity-dashboard': 'productivity-dashboard',
  '/routine-optimization': 'routine-optimization',
  '/visual-lab': 'visual-lab',
  '/bicingflow': 'bicingflow',
  '/sail-tracker': 'sail-tracker',
  '/people-analytics': 'people-analytics',
  '/web-cv': 'web-cv'
};

const getApiUrl = (path: string) => `${apiBaseUrl}${path.startsWith('/') ? path : `/${path}`}`;

const getStoredAnalyticsConsentPreference = (): AnalyticsConsentPreference => {
  if (typeof window === 'undefined') {
    return 'pending';
  }

  const storedConsent = window.localStorage.getItem(analyticsConsentStorageKey);
  return storedConsent === 'accepted' || storedConsent === 'rejected' ? storedConsent : 'pending';
};

const getCurrentPage = (): AppPage => {
  if (typeof window === 'undefined') {
    return 'home';
  }

  const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/';
  return pageByPath[normalizedPath] ?? 'home';
};

const getStoredThemePreference = (): ThemePreference => {
  if (typeof window === 'undefined') {
    return 'system';
  }

  const storedTheme = window.localStorage.getItem('portfolio-theme');
  return storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'system'
    ? storedTheme
    : 'system';
};

const projectCategoryBySlug: Record<DetailPageSlug, ProjectCategory> = {
  appoke: 'product',
  'email-automation': 'automation',
  'productivity-dashboard': 'insight',
  'routine-optimization': 'execution',
  analytics: 'insight',
  'visual-lab': 'product',
  bicingflow: 'insight',
  'sail-tracker': 'execution',
  'people-analytics': 'insight',
  'web-cv': 'product'
};

function App() {
  const [contactData, setContactData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState<AnalyticsConsentPreference>(getStoredAnalyticsConsentPreference);
  const [language, setLanguage] = useState<Language>('es');
  const [themePreference, setThemePreference] = useState<ThemePreference>(getStoredThemePreference);
  const [currentPage, setCurrentPage] = useState<AppPage>(getCurrentPage);
  const [isRailCollapsed, setIsRailCollapsed] = useState(true);

  const content = translations[language];
  const analyticsProject = content.projects.find((project) => project.internalSlug === 'analytics' && project.analyticsCase);
  const genericDetailProject = currentPage !== 'home' && currentPage !== 'appoke'
    ? content.projects.find((project) => project.internalSlug === currentPage && project.detailContent)
    : undefined;
  const navItems = useMemo(() => content.ui.nav, [content]);
  const { activeSection } = useSectionTracking(navItems);
  const featuredProject = {
    ...baseFeaturedProject,
    ...content.featuredProject,
    status: content.ui.featuredStatus
  };
  const projectCategoryLabels: Record<ProjectCategory, string> = {
    product: content.ui.projectCategoryProduct,
    automation: content.ui.projectCategoryAutomation,
    insight: content.ui.projectCategoryInsight,
    execution: content.ui.projectCategoryExecution
  };
  const internalProjects: RelatedProjectLink[] = [
    {
      slug: 'appoke',
      title: featuredProject.name,
      oneLiner: featuredProject.oneLiner,
      technologies: featuredProject.technologies,
      category: projectCategoryBySlug.appoke,
      categoryLabel: projectCategoryLabels[projectCategoryBySlug.appoke]
    },
    ...content.projects
      .filter((project): project is typeof project & { internalSlug: ProjectSlug } => Boolean(project.internalSlug) && project.internalSlug !== 'routine-optimization' && project.internalSlug !== 'analytics')
      .map((project) => ({
        slug: project.internalSlug,
        title: project.title,
        oneLiner: project.oneLiner,
        technologies: project.technologies,
        category: projectCategoryBySlug[project.internalSlug],
        categoryLabel: projectCategoryLabels[projectCategoryBySlug[project.internalSlug]]
      }))
  ];
  const currentDetailSlug: DetailPageSlug | null = currentPage === 'home' ? null : currentPage;
  const relatedProjects = currentDetailSlug
    ? internalProjects.filter((project) => project.slug !== currentDetailSlug)
    : [];

  useEffect(() => {
    const titleByPage: Partial<Record<AppPage, string>> = {
      home: `${personalInfo.name} | Big Data`,
      appoke: `${featuredProject.name} | Caso de Producto`,
      'productivity-dashboard': `${content.projects.find((project) => project.internalSlug === 'productivity-dashboard')?.title ?? 'Dashboard de Productividad'} | Caso de Decision`,
      'routine-optimization': `${content.projects.find((project) => project.internalSlug === 'routine-optimization')?.title ?? 'Optimizacion de Rutinas'} | Caso de Ejecucion`
    };

    const descriptionByPage: Partial<Record<AppPage, string>> = {
      home: 'Portafolio de Alejandro Monaco. Big Data, automatizacion y producto para resolver problemas reales de negocio.',
      appoke: 'Caso Appoke: producto multiplataforma para productividad personal con rutinas, notas y gamificacion aplicadas a la adherencia.',
      'productivity-dashboard': 'Caso dashboard de productividad: consolidacion de KPIs para acelerar lectura operativa y mejorar priorizacion.',
      'routine-optimization': 'Caso de optimizacion de rutinas con IA aplicada para ordenar ejecucion diaria y reducir friccion de decisiones repetitivas.'
    };

    const pageTitle = titleByPage[currentPage]
      ?? (genericDetailProject ? `${genericDetailProject.title} | ${personalInfo.name}` : personalInfo.name);
    const pageDescription = descriptionByPage[currentPage] ?? genericDetailProject?.oneLiner ?? '';

    document.title = pageTitle;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', pageDescription);
    }

    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute('content', pageTitle);
    }

    const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionMeta) {
      ogDescriptionMeta.setAttribute('content', pageDescription);
    }

    const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitleMeta) {
      twitterTitleMeta.setAttribute('content', pageTitle);
    }

    const twitterDescriptionMeta = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescriptionMeta) {
      twitterDescriptionMeta.setAttribute('content', pageDescription);
    }

    if (typeof window !== 'undefined') {
      const canonicalHref = `${window.location.origin}${window.location.pathname}`;
      const canonicalLink = document.querySelector('link[rel="canonical"]') ?? document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', canonicalHref);
      if (!canonicalLink.parentNode) {
        document.head.appendChild(canonicalLink);
      }

      const schemaScriptId = 'portfolio-structured-data';
      const existingScript = document.getElementById(schemaScriptId);
      if (existingScript) {
        existingScript.remove();
      }

      const projectList = content.projects
        .filter((project) => project.internalSlug && project.internalSlug !== 'analytics' && project.internalSlug !== 'routine-optimization')
        .map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: project.title,
          url: `${window.location.origin}/${project.internalSlug}`
        }));

      const schemaGraph = currentPage === 'home'
        ? [
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: personalInfo.name,
              email: personalInfo.email,
              url: window.location.origin,
              sameAs: [personalInfo.linkedin, personalInfo.github],
              jobTitle: content.personalInfo.role
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Portfolio case studies',
              itemListElement: projectList
            }
          ]
        : [
            {
              '@context': 'https://schema.org',
              '@type': 'CreativeWork',
              name: pageTitle,
              description: pageDescription,
              author: {
                '@type': 'Person',
                name: personalInfo.name
              },
              url: `${window.location.origin}${window.location.pathname}`
            }
          ];

      const schemaScript = document.createElement('script');
      schemaScript.id = schemaScriptId;
      schemaScript.type = 'application/ld+json';
      schemaScript.text = JSON.stringify(schemaGraph);
      document.head.appendChild(schemaScript);
    }
  }, [currentPage, content.projects, content.personalInfo.role, featuredProject.name, genericDetailProject]);

  useEffect(() => {
    if (analyticsConsent !== 'accepted' || typeof window === 'undefined') {
      return;
    }

    trackPageView(window.location.pathname, document.title);
  }, [analyticsConsent, currentPage]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handlePopState = () => {
      setCurrentPage(getCurrentPage());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (currentPage !== 'web-cv') return;

    if (window.location.pathname.replace(/\/+$/, '') === '/analytics') {
      window.history.replaceState({}, '', `/web-cv${window.location.search}#web-cv-analytics`);
    }

    if (window.location.hash === '#web-cv-analytics') {
      document.getElementById('web-cv-analytics')?.scrollIntoView();
    }
  }, [currentPage]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const mediaQuery = typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-color-scheme: dark)')
      : null;

    const applyTheme = () => {
      const resolvedTheme = themePreference === 'system'
        ? (mediaQuery?.matches ? 'dark' : 'light')
        : themePreference;

      document.documentElement.dataset.theme = resolvedTheme;
      document.documentElement.style.colorScheme = resolvedTheme;
    };

    applyTheme();

    if (!mediaQuery) {
      return undefined;
    }

    const handleChange = () => {
      if (themePreference === 'system') {
        applyTheme();
      }
    };

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [themePreference]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem('portfolio-theme', themePreference);
  }, [themePreference]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (analyticsConsent === 'pending') {
      return;
    }

    window.localStorage.setItem(analyticsConsentStorageKey, analyticsConsent);

    const analyticsWindow = window as Window & {
      setAnalyticsConsent?: (granted: boolean) => void;
    };

    analyticsWindow.setAnalyticsConsent?.(analyticsConsent === 'accepted');
  }, [analyticsConsent]);

  const themeLabels: Record<ThemePreference, string> = {
    system: content.ui.themeSystemLabel,
    light: content.ui.themeLightLabel,
    dark: content.ui.themeDarkLabel
  };
  const railToggleLabel = isRailCollapsed ? content.ui.railExpandLabel : content.ui.railCollapseLabel;

  const navigateToPage = (page: AppPage, targetSection?: string) => {
    if (typeof window === 'undefined') {
      return;
    }

    const nextPath = page === 'home' ? '/' : `/${page}`;
    const nextHash = page === 'home' && targetSection ? `#${targetSection.replace(/^#/, '')}` : '';

    trackAnalyticsEvent('navigation_click', {
      from_page: currentPage,
      to_page: page,
      target_section: targetSection
    });

    window.history.pushState({}, '', `${nextPath}${nextHash}`);
    setCurrentPage(page);

    window.setTimeout(() => {
      if (page === 'home' && targetSection) {
        document.getElementById(targetSection.replace(/^#/, ''))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  const handleHomeNavigation = (e: React.MouseEvent<HTMLAnchorElement>, targetSection = 'hero') => {
    e.preventDefault();
    navigateToPage('home', targetSection);
  };

  const handleProjectCardKeyDown = (e: React.KeyboardEvent<HTMLElement>, slug: DetailPageSlug) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigateToPage(slug);
    }
  };

  const handleInternalProjectSelect = (slug: DetailPageSlug) => {
    if (slug === currentDetailSlug) {
      return;
    }

    navigateToPage(slug);
  };

  const updateContactField = (field: keyof ContactFormData, value: string) => {
    setContactData((currentData) => ({
      ...currentData,
      [field]: value
    }));
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(content.ui.formSending);

    try {
      const response = await fetch(getApiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData)
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      await response.json();
      setStatus(content.ui.formSuccess);
      trackAnalyticsEvent('lead_form_submitted', {
        page: currentPage,
        language,
        status: 'success'
      });
      setContactData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus(content.ui.formError);
      trackAnalyticsEvent('lead_form_submitted', {
        page: currentPage,
        language,
        status: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-shell">
      <header className="site-header">
        <nav className="container site-nav" aria-label={content.ui.mainNavLabel}>
          <a className="brand" href="/" onClick={(e) => handleHomeNavigation(e)}>{personalInfo.name}</a>

          {currentPage !== 'home' ? (
            <div className="detail-nav">
              <button type="button" className="button button-secondary detail-nav-button" onClick={() => navigateToPage('home', 'featured-project')}>
                {content.ui.appokeBackCta}
              </button>
            </div>
          ) : null}

          <div className="nav-controls">
            <div className="language-switcher">
              <label className="language-switcher-label" htmlFor="language-switcher-select">
                {content.ui.languageLabel}
              </label>
              <select
                id="language-switcher-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
              >
                {languageOptions.map((option) => (
                  <option key={option.code} value={option.code}>{option.label}</option>
                ))}
              </select>
            </div>

            <div className="theme-switcher">
              <label className="language-switcher-label" htmlFor="theme-switcher-select">
                {content.ui.themeLabel}
              </label>
              <select
                id="theme-switcher-select"
                value={themePreference}
                onChange={(e) => setThemePreference(e.target.value as ThemePreference)}
              >
                {themeOptions.map((option) => (
                  <option key={option.code} value={option.code}>{themeLabels[option.code]}</option>
                ))}
              </select>
            </div>
          </div>
        </nav>
      </header>

      {currentPage !== 'home' ? (
        <SectionRail
          ariaLabel={content.ui.internalProjectNavLabel}
          className="section-rail-projects"
          collapsed={isRailCollapsed}
          toggleLabel={railToggleLabel}
          onToggle={() => setIsRailCollapsed((currentValue) => !currentValue)}
        >
          {internalProjects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              className={currentDetailSlug === project.slug ? `section-rail-link section-rail-link-project section-rail-link-${project.category} section-rail-link-active` : `section-rail-link section-rail-link-project section-rail-link-${project.category}`}
              onClick={() => handleInternalProjectSelect(project.slug)}
              title={`${project.categoryLabel} · ${project.title}`}
            >
              <span className="section-rail-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="section-rail-text">{project.title}</span>
              <span className="section-rail-meta">{project.categoryLabel}</span>
            </button>
          ))}
        </SectionRail>
      ) : null}

      {currentPage === 'home' ? (
        <HomePage
          language={language}
          content={content}
          personalName={personalInfo.name}
          personalEmail={personalInfo.email}
          academicEmail={personalInfo.academicEmail}
          personalLinkedin={personalInfo.linkedin}
          personalGithub={personalInfo.github}
          featuredProject={featuredProject}
          contactData={contactData}
          status={status}
          isSubmitting={isSubmitting}
          activeSection={activeSection}
          isRailCollapsed={isRailCollapsed}
          railToggleLabel={railToggleLabel}
          onToggleRail={() => setIsRailCollapsed((currentValue) => !currentValue)}
          onNavigateToSection={(targetSection) => navigateToPage('home', targetSection)}
          onNavigateToAppoke={() => navigateToPage('appoke')}
          onNavigateToProject={(slug) => navigateToPage(slug)}
          onProjectCardKeyDown={handleProjectCardKeyDown}
          onContactFieldChange={updateContactField}
          onContactSubmit={handleContactSubmit}
        />
      ) : currentPage === 'appoke' ? (
        <div key={currentDetailSlug} className="detail-page-transition">
          <AppokeDetailPage
            language={language}
            appokeDetail={content.appokeDetail}
            projectName={featuredProject.name}
            projectImageUrl={featuredProject.imageUrl}
            projectTechnologies={featuredProject.technologies}
            githubUrl={featuredProject.githubUrl}
            relatedProjects={relatedProjects}
            onBack={() => navigateToPage('home', 'project-hub')}
            onContact={() => navigateToPage('home', 'contact')}
            onSelectProject={handleInternalProjectSelect}
            backLabel={content.ui.appokeBackCta}
            contactLabel={content.ui.appokeContactCta}
            githubLabel={content.ui.featuredSecondaryCta}
            relatedEyebrow={content.ui.relatedProjectsEyebrow}
            relatedTitle={content.ui.relatedProjectsTitle}
            relatedDescription={content.ui.relatedProjectsDescription}
            relatedCtaLabel={content.ui.relatedProjectsCta}
            relatedPreviousLabel={content.ui.relatedProjectsPrevious}
            relatedNextLabel={content.ui.relatedProjectsNext}
          />
        </div>
      ) : genericDetailProject?.detailContent ? (
        <div key={currentDetailSlug} className="detail-page-transition">
          <ProjectDetailPage
            language={language}
            analytics={currentPage === 'web-cv' && analyticsProject?.analyticsCase
              ? { title: analyticsProject.title, content: analyticsProject.analyticsCase }
              : undefined}
            projectSlug={genericDetailProject.internalSlug as ProjectSlug}
            detailContent={genericDetailProject.detailContent}
            projectName={genericDetailProject.title}
            projectTechnologies={genericDetailProject.technologies}
            projectImageUrl={genericDetailProject.imageUrl}
            githubUrl={genericDetailProject.githubUrl}
            relatedProjects={relatedProjects}
            onBack={() => navigateToPage('home', 'project-hub')}
            onContact={() => navigateToPage('home', 'contact')}
            onSelectProject={handleInternalProjectSelect}
            backLabel={content.ui.appokeBackCta}
            contactLabel={content.ui.heroSecondaryCta}
            githubLabel={content.ui.featuredSecondaryCta}
            relatedEyebrow={content.ui.relatedProjectsEyebrow}
            relatedTitle={content.ui.relatedProjectsTitle}
            relatedDescription={content.ui.relatedProjectsDescription}
            relatedCtaLabel={content.ui.relatedProjectsCta}
            relatedPreviousLabel={content.ui.relatedProjectsPrevious}
            relatedNextLabel={content.ui.relatedProjectsNext}
          />
        </div>
      ) : (
        <main />
      )}

      <footer className="site-footer">
        <div className="container footer-content">
          <p>{personalInfo.name}</p>
          <p>{content.personalInfo.role}</p>
        </div>
      </footer>

      {analyticsConsent === 'pending' ? (
        <div className="cookie-banner" role="dialog" aria-live="polite" aria-label={content.ui.analyticsConsentTitle}>
          <div className="cookie-banner-copy">
            <strong>{content.ui.analyticsConsentTitle}</strong>
            <p>{content.ui.analyticsConsentDescription}</p>
          </div>
          <div className="cookie-banner-actions">
            <button type="button" className="button button-secondary" onClick={() => setAnalyticsConsent('rejected')}>
              {content.ui.analyticsConsentReject}
            </button>
            <button type="button" className="button button-primary" onClick={() => setAnalyticsConsent('accepted')}>
              {content.ui.analyticsConsentAccept}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
