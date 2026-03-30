/**
 * Lazy load Google Analytics after page is interactive
 * This prevents blocking the initial page load
 */

export const initializeAnalytics = () => {
  try {
    // Load Google Analytics script after page load
    if (typeof window !== 'undefined' && !window.gtag) {
      // Load GTM script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-CFKTPJGRV9';
      
      script.onload = () => {
        try {
          // Initialize gtag safely
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          
          gtag('js', new Date());
          gtag('config', 'G-CFKTPJGRV9', {
            'anonymize_ip': true,
            'allow_google_signals': false
          });
          
          console.log('✓ Analytics initialized successfully');
        } catch (err) {
          console.warn('Analytics setup warning:', err.message);
        }
      };
      
      script.onerror = () => {
        console.warn('Failed to load Analytics script');
      };
      
      document.head.appendChild(script);
    }
  } catch (error) {
    console.warn('Analytics initialization failed:', error.message);
  }
};

// Auto-initialize on component load (when React is ready)
export const trackPageView = (pageName) => {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        'page_path': pageName,
        'page_title': document.title
      });
    }
  } catch (error) {
    console.warn('Page view tracking failed:', error.message);
  }
};

export default { initializeAnalytics, trackPageView };
