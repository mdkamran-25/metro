// Cookie consent functionality
export const initializeCookieConsent = () => {
  if (!localStorage.getItem('cookieConsent')) {
    // Show cookie banner
    console.log('Show cookie consent banner');
  }
};

// Initialize on page load
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initializeCookieConsent);
}

export default { initializeCookieConsent };