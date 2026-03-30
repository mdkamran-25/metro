/**
 * Schema.org Structured Data for Delhi Metro Website
 * This helps search engines understand your content better
 */

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "My Delhi Metro Guide",
  "url": "https://www.mydelhimetro.in",
  "logo": "https://www.mydelhimetro.in/logo.png",
  "description": "Complete Delhi Metro guide with route planner, real-time tracking, and station information",
  "sameAs": [
    "https://www.facebook.com/DelhiMetro",
    "https://twitter.com/DelhiMetro",
    "https://www.instagram.com/delhimetro"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Metro Bhawan, Fire Brigade Lane",
    "addressLocality": "New Delhi",
    "postalCode": "110001",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-11-23417910",
    "contactType": "Customer Service"
  }
});

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "My Delhi Metro",
  "url": "https://www.mydelhimetro.in",
  "telephone": "+91-11-23417910",
  "image": "https://www.mydelhimetro.in/delhi-metro-network.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Metro Bhawan, Fire Brigade Lane, Barakhamba Road",
    "addressLocality": "New Delhi",
    "postalCode": "110001",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "05:00",
    "closes": "23:30"
  }
});

export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, idx) => ({
    "@type": "ListItem",
    "position": idx + 1,
    "name": item.name,
    "item": `https://www.mydelhimetro.in${item.url}`
  }))
});

export const getFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are Delhi Metro operating hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Delhi Metro operates from 5:00 AM to 11:30 PM on all days. On special occasions like Republic Day and Independence Day, timings may be extended."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Delhi Metro cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Delhi Metro fares range from ₹10 to ₹60 depending on distance traveled. Smart card users get a 10% discount on every journey."
      }
    },
    {
      "@type": "Question",
      "name": "How many stations are in Delhi Metro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Delhi Metro has 289 operational stations across 12 lines serving the National Capital Region."
      }
    },
    {
      "@type": "Question",
      "name": "Is there WiFi on Delhi Metro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, free high-speed WiFi is available at all Delhi Metro stations. Users can access up to 30 minutes of free WiFi per day."
      }
    },
    {
      "@type": "Question",
      "name": "How can I use the Delhi Metro route planner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter your starting and ending station in our route planner to get the fastest route, travel time, fare information, and real-time train availability."
      }
    }
  ]
});

export const getWebPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Delhi Metro - Official Route Planner & Metro Guide",
  "description": "Complete Delhi Metro guide with route planner, interactive metro map, 289 stations, real-time tracking, fare calculator & smart card info.",
  "url": "https://www.mydelhimetro.in",
  "isPartOf": {
    "@type": "WebSite",
    "name": "My Delhi Metro Guide",
    "url": "https://www.mydelhimetro.in"
  },
  "primaryImageOfPage": "https://www.mydelhimetro.in/delhi-metro-og-image.jpg",
  "datePublished": new Date().toISOString().split('T')[0],
  "dateModified": new Date().toISOString().split('T')[0]
});

export const getServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Delhi Metro Route Planner",
  "description": "AI-powered route planning service for Delhi Metro with real-time train tracking and fare calculation",
  "provider": {
    "@type": "Organization",
    "name": "My Delhi Metro Guide",
    "url": "https://www.mydelhimetro.in"
  },
  "areaServed": {
    "@type": "City",
    "name": "Delhi",
    "url": "https://en.wikipedia.org/wiki/Delhi"
  },
  "availableLanguage": "en"
});
