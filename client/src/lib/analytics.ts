type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    __analyticsLoaded?: boolean;
  }
}

export const trackAnalyticsEvent = (eventName: string, params: AnalyticsParams = {}) => {
  if (typeof window === 'undefined') {
    return;
  }

  if (typeof window.gtag === 'function' && window.__analyticsLoaded) {
    window.gtag('event', eventName, params);
  }
};

export const trackPageView = (path: string, title: string) => {
  trackAnalyticsEvent('page_view', {
    page_path: path,
    page_title: title
  });
};
