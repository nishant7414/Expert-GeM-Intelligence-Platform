export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    // Log for local debugging
    console.log(`[Analytics] ${eventName}`, params);
    
    // If a global tracking tool like Google Analytics is configured
    if ((window as any).gtag) {
      (window as any).gtag('event', eventName, params);
    }
  }
}
