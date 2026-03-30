import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ items = [] }) => {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    ...items
  ];

  const breadcrumbSchema = breadcrumbItems.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://www.mydelhimetro.in${item.url}`,
  }));

  // Add structured data
  React.useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbSchema,
    };

    let script = document.querySelector('script[type="application/ld+json"][data-breadcrumb]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-breadcrumb', 'true');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

    return () => {
      // Cleanup script
      if (script && document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [items]);

  return (
    <nav
      className="bg-slate-50 border-b border-slate-200"
      aria-label="Breadcrumb"
    >
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center gap-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.url} className="flex items-center gap-2">
              {index === 0 ? (
                <Link
                  to={item.url}
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  title={`Go to ${item.name}`}
                >
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </Link>
              ) : (
                <>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                  {index === breadcrumbItems.length - 1 ? (
                    <span className="text-slate-600 font-semibold" aria-current="page">
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      to={item.url}
                      className="text-blue-600 hover:text-blue-800"
                      title={`Go to ${item.name}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
