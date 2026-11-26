export type Language = 'es' | 'en' | 'ca';
export type ThemePreference = 'system' | 'light' | 'dark';
export type ProjectSlug = 'email-automation' | 'productivity-dashboard' | 'routine-optimization' | 'analytics' | 'visual-lab' | 'bicingflow' | 'sail-tracker' | 'web-cv' | 'people-analytics';
export type DetailPageSlug = 'appoke' | ProjectSlug;
export type ProjectCategory = 'product' | 'automation' | 'insight' | 'execution';

export interface MetricItem {
  label: string;
  value: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface SeedProfileAsset extends ImageAsset {
  label: string;
}

export interface SeedShowcaseContent {
  eyebrow: string;
  title: string;
  description: string;
  selector: ImageAsset & { caption: string };
  profilesLabel: string;
  profiles: SeedProfileAsset[];
}

export interface AppokeTechnologyGroup {
  label: string;
  items: string[];
}

export interface AppokeDetailContent {
  eyebrow: string;
  title: string;
  intro: string;
  screenshots: ImageAsset[];
  seedShowcase: SeedShowcaseContent;
  purposeTitle: string;
  purposeText: string;
  bridgeTitle: string;
  bridgeText: string;
  problemsTitle: string;
  problems: string[];
  futureTitle: string;
  futureItems: string[];
  technologyTitle: string;
  technologyGroups: AppokeTechnologyGroup[];
  outcomeTitle: string;
  outcomeText: string;
  stats: MetricItem[];
}

export interface PortfolioProject {
  id: number;
  title: string;
  oneLiner: string;
  businessValue: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  analyticsCase?: AnalyticsProjectCase;
  internalSlug?: ProjectSlug;
  detailContent?: StandardProjectDetailContent;
}

export interface RelatedProjectLink {
  slug: DetailPageSlug;
  title: string;
  oneLiner: string;
  technologies: string[];
  category: ProjectCategory;
  categoryLabel: string;
}

export interface StandardProjectDetailContent {
  eyebrow: string;
  intro: string;
  stats: MetricItem[];
  overviewTitle: string;
  overviewText: string;
  operationTitle: string;
  operationText: string;
  capabilitiesTitle: string;
  capabilities: string[];
  technologyTitle: string;
  technologyGroups: AppokeTechnologyGroup[];
  nextTitle: string;
  nextItems: string[];
  outcomeTitle: string;
  outcomeText: string;
}

export interface SpotlightSignal {
  label: string;
  value: string;
}

export interface AnalyticsChartBar {
  label: string;
  value: number;
}

export interface AnalyticsFlowStep {
  label: string;
  detail: string;
}

export interface AnalyticsProjectCase {
  eyebrow: string;
  title: string;
  description: string;
  sourceNote: string;
  signals: SpotlightSignal[];
  chartTitle: string;
  chartFootnote: string;
  chartBars: AnalyticsChartBar[];
  flowTitle: string;
  flowSteps: AnalyticsFlowStep[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface OpportunityTrack {
  label: string;
  title: string;
  description: string;
}

export interface TranslationContent {
  ui: {
    nav: Array<{ id: string; label: string }>;
    railLabel: string;
    mainNavLabel: string;
    languageLabel: string;
    themeLabel: string;
    themeSystemLabel: string;
    themeLightLabel: string;
    themeDarkLabel: string;
    appokeBackCta: string;
    appokeContactCta: string;
    analyticsContactCta: string;
    internalProjectNavLabel: string;
    railCollapseLabel: string;
    railExpandLabel: string;
    projectCategoryProduct: string;
    projectCategoryAutomation: string;
    projectCategoryInsight: string;
    projectCategoryExecution: string;
    relatedProjectsEyebrow: string;
    relatedProjectsTitle: string;
    relatedProjectsDescription: string;
    relatedProjectsCta: string;
    relatedProjectsPrevious: string;
    relatedProjectsNext: string;
    heroSystemBadge: string;
    heroSystemCopy: string;
    commandTags: string[];
    heroPrimaryCta: string;
    heroSecondaryCta: string;
    panelLabel: string;
    featuredCaseEyebrow: string;
    featuredReviewLabel: string;
    featuredStatus: string;
    featuredProblemLabel: string;
    featuredSolutionLabel: string;
    featuredValueLabel: string;
    featuredPrimaryCta: string;
    featuredSecondaryCta: string;
    featuredPendingDemo: string;
    featuredVisualEyebrow: string;
    featuredVisualTitle: string;
    hubEyebrow: string;
    hubTitle: string;
    hubDescription: string;
    hubIndexLabel: string;
    projectChip: string;
    githubLabel: string;
    demoLabel: string;
    pendingLinkLabel: string;
    pendingDemoLabel: string;
    aboutEyebrow: string;
    aboutTitle: string;
    opportunityEyebrow: string;
    opportunityTitle: string;
    opportunityDescription: string;
    contactEyebrow: string;
    contactTitle: string;
    contactDescription: string;
    contactNote: string;
    contactPrimaryCta: string;
    linkedinLabel: string;
    formConsoleLabel: string;
    formNameLabel: string;
    formEmailLabel: string;
    formMessageLabel: string;
    formPlaceholder: string;
    formSubmit: string;
    formSending: string;
    formSuccess: string;
    formError: string;
    analyticsConsentTitle: string;
    analyticsConsentDescription: string;
    analyticsConsentAccept: string;
    analyticsConsentReject: string;
    workProcessEyebrow: string;
    workProcessTitle: string;
    conversionPrimaryCta: string;
    conversionSecondaryCta: string;
    caseStudyLabel: string;
  };
  personalInfo: {
    role: string;
    subtitle: string;
    tagline: string;
    differentiator: string;
  };
  auditSignals: MetricItem[];
  systemMetrics: MetricItem[];
  heroMetrics: MetricItem[];
  northStar: {
    label: string;
    goal: string;
    target: string;
    rationale: string;
  };
  featuredProject: {
    label: string;
    oneLiner: string;
    problem: string;
    solution: string;
    businessValue: string;
  };
  featuredStats: MetricItem[];
  appokeDetail: AppokeDetailContent;
  projects: PortfolioProject[];
  aboutParagraphs: string[];
  skills: string[];
  opportunityTracks: OpportunityTrack[];
  workProcess: OpportunityTrack[];
}