import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({
  title = "Delhi Metro | Route Planner,Delhi Metro, Find my Routes, Stations, Fares & Map | My Delhi Metro",
  description = "Plan your Delhi Metro journey with our route planner, metro map, fare calculator, station information, and tourist guides. All 289 stations covered.",
  keywords = "Delhi Metro, DMRC, route planner, metro stations, fares, smart card",
  image = "https://www.mydelhimetro.in/og-image.jpg",
  url = "https://www.mydelhimetro.in",
  type = "website",
  author = "My Delhi Metro Guide",
  canonical = null,
  breadcrumbs = [],
  faqSchema = null,
  articleSchema = null,
  structuredData = null,
  robotsMeta = "index, follow",
}) => {
  const location = useLocation();
  const currentUrl = `https://www.mydelhimetro.in${location.pathname}`;
  const canonicalUrl = canonical || currentUrl;

  useEffect(() => {
    // Set title
    document.title = title;

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // Set keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;

    // Set robots meta
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = robotsMeta;

    // Set author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.name = 'author';
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.content = author;

    // Set canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    // Open Graph
    setMetaProperty('og:title', title);
    setMetaProperty('og:description', description);
    setMetaProperty('og:image', image);
    setMetaProperty('og:url', canonicalUrl);
    setMetaProperty('og:type', type);
    setMetaProperty('og:site_name', 'My Delhi Metro Guide');

    // Twitter Card
    setMetaProperty('twitter:card', 'summary_large_image');
    setMetaProperty('twitter:title', title);
    setMetaProperty('twitter:description', description);
    setMetaProperty('twitter:image', image);

    // Breadcrumb Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      };
      addStructuredData(breadcrumbSchema);
    }

    // FAQ Schema
    if (faqSchema) {
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqSchema.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      };
      addStructuredData(schema);
    }

    // Article Schema
    if (articleSchema) {
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: articleSchema.headline || title,
        description: articleSchema.description || description,
        image: articleSchema.image || image,
        author: {
          '@type': 'Organization',
          name: articleSchema.author || 'My Delhi Metro Guide',
        },
        datePublished: articleSchema.datePublished || new Date().toISOString(),
        dateModified: articleSchema.dateModified || new Date().toISOString(),
        publisher: {
          '@type': 'Organization',
          name: 'My Delhi Metro Guide',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.mydelhimetro.in/logo.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl,
        },
      };
      addStructuredData(schema);
    }

    // Custom Structured Data
    if (structuredData) {
      addStructuredData(structuredData);
    }

    return () => {
      // Cleanup is optional - tags persist for navigation
    };
  }, [title, description, keywords, image, canonicalUrl, type, breadcrumbs, faqSchema, articleSchema, structuredData, robotsMeta]);

  return null;
};

// Helper function to set meta property
function setMetaProperty(property, content) {
  let metaTag = document.querySelector(`meta[property="${property}"]`);
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute('property', property);
    document.head.appendChild(metaTag);
  }
  metaTag.content = content;
}

// Helper function to add structured data
function addStructuredData(data) {
  let script = document.querySelector(`script[type="application/ld+json"]`);
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export default SEO;
