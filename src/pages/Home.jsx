import { lazy, Suspense } from "react";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Map,
  CreditCard,
  Train,
  Navigation,
  Smartphone,
  MapPin,
  Globe,
  ChevronRight,
  Play,
  Route,
  Ticket,
  TicketCheck,
  ArrowRight,
} from "lucide-react";
import OIP2 from "../assets/OIP2.png";
import lotus from "../assets/Lotus.webp";
import qutub from "../assets/Qutb-Minar.jpg";
import indiaGate from "../assets/indiaget.jpg";
import redFort from "../assets/redfort.jpg";
// import InteractiveMetroMap from './InteractiveMetroMap'
const InteractiveMetroMap = lazy(() => import("./InteractiveMetroMap"));
import { metroLinesData, metroStations } from "./data";

const SEORichContent = lazy(() => import("../components/SEORichContent"));

const Home = () => {
  // Counter animation state
  const [showSEO, setShowSEO] = useState(false);
  const [loadMap, setLoadMap] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const targetValues = [289, 12, 390, 2.8];
  const duration = 2000; // 2 seconds
  const statsRef = useRef(null);

  useEffect(() => {
    // Comprehensive SEO Meta Tags
    document.title =
      "Delhi Metro - Official Route Planner, Map, Fares & Station Information | DMRC Guide";

    // Meta Description - optimized for "delhi metro" search
    const metaDescription = document.querySelector('meta[name="description"]');
    const description =
      "Delhi Metro - Complete guide with route planner, interactive metro map, 289 stations, real-time tracking, fare calculator & smart card info. Navigate Delhi Metro easily with official DMRC information.";
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Comprehensive 300+ Keywords for Delhi Metro
    const keywords = [
      // Core Delhi Metro Keywords
      "Delhi Metro",
      "DMRC",
      "My Delhi Metro",
      "Delhi Metro official website",
      "Delhi Metro online",

      // Route & Journey Planning
      "Delhi Metro route planner",
      "Metro route finder Delhi",
      "Delhi Metro journey planner",
      "Metro route calculator Delhi",
      "How to reach by Delhi Metro",
      "Delhi Metro directions",
      "Best metro route Delhi",
      "Shortest metro route Delhi",
      "Metro route suggestion Delhi",
      "Delhi Metro travel planner",

      // Lines & Stations
      "Delhi Metro lines",
      "Metro lines in Delhi",
      "All Delhi Metro lines",
      "Delhi Metro line map",
      "Delhi Metro station list",
      "Metro stations in Delhi",
      "Delhi Metro stations near me",
      "Nearest metro station Delhi",
      "Metro station finder Delhi",
      "Delhi Metro station guide",

      // Maps & Navigation
      "Delhi Metro map",
      "Metro map Delhi",
      "Delhi Metro route map",
      "Metro network map Delhi",
      "Interactive Delhi Metro map",
      "Delhi Metro digital map",
      "Delhi Metro map download",
      "Metro map PDF Delhi",
      "Delhi Metro offline map",
      "Metro navigation Delhi",

      // Fares & Tickets
      "Delhi Metro fare",
      "Metro fare calculator Delhi",
      "Delhi Metro ticket price",
      "Metro fare chart Delhi",
      "Delhi Metro fare calculator",
      "Metro ticket cost Delhi",
      "Delhi Metro smart card",
      "Metro card recharge Delhi",
      "Delhi Metro token",
      "Metro ticket booking Delhi",
      "Delhi Metro online ticket",
      "Metro e-ticket Delhi",

      // Timing & Schedule
      "Delhi Metro timing",
      "Metro timing today Delhi",
      "Delhi Metro first train",
      "Metro last train Delhi",
      "Delhi Metro schedule",
      "Metro train frequency Delhi",
      "Delhi Metro Sunday timing",
      "Metro holiday timing Delhi",
      "Delhi Metro peak hours",
      "Metro off-peak hours Delhi",

      // Real-time Information
      "Delhi Metro live status",
      "Metro live tracking Delhi",
      "Delhi Metro real-time",
      "Metro train live position",
      "Delhi Metro delay",
      "Metro service status Delhi",
      "Delhi Metro updates",
      "Metro news Delhi",

      // Airport Connectivity
      "Delhi Metro to airport",
      "Metro to IGI Airport",
      "Airport Express Delhi",
      "Delhi Metro airport line",
      "Metro to Terminal 3",
      "Metro to Terminal 1",
      "Delhi Airport metro",
      "Metro from airport Delhi",

      // Tourist & Places
      "Delhi Metro tourist guide",
      "Metro to tourist places Delhi",
      "Delhi Metro to historical sites",
      "Metro to Red Fort",
      "Metro to India Gate",
      "Metro to Qutub Minar",
      "Metro to Lotus Temple",
      "Metro to Akshardham",
      "Metro to Chandni Chowk",
      "Metro to Connaught Place",
      "Delhi sightseeing by metro",
      "Metro tourism Delhi",

      // NCR Connectivity
      "Delhi Metro to Noida",
      "Metro to Gurgaon Delhi",
      "Delhi Metro to Faridabad",
      "Metro to Ghaziabad",
      "Metro to Dwarka",
      "Metro to Rohini",
      "Delhi Metro NCR network",
      "Metro intercity Delhi",

      // Features & Facilities
      "Delhi Metro AC",
      "Metro coach facilities",
      "Delhi Metro wifi",
      "Metro charging points",
      "Delhi Metro security",
      "Metro CCTV surveillance",
      "Delhi Metro women coach",
      "Metro priority seating",
      "Delhi Metro parking",
      "Metro feeder bus service",

      // Smart Features
      "Delhi Metro app",
      "Metro mobile app Delhi",
      "Delhi Metro digital payment",
      "Metro QR code ticket",
      "Delhi Metro UPI payment",
      "Metro contactless card",
      "Delhi Metro smart features",
      "Metro technology Delhi",

      // Lines Specific Keywords
      "Red Line Delhi Metro",
      "Yellow Line Delhi Metro",
      "Blue Line Delhi Metro",
      "Green Line Delhi Metro",
      "Violet Line Delhi Metro",
      "Pink Line Delhi Metro",
      "Magenta Line Delhi Metro",
      "Orange Line Delhi Metro",
      "Airport Express Line",
      "Grey Line Delhi Metro",
      "Aqua Line Noida",
      "Rapid Metro Gurgaon",

      // Popular Stations
      "Rajiv Chowk metro station",
      "Kashmere Gate metro",
      "New Delhi metro station",
      "Central Secretariat metro",
      "Hauz Khas metro station",
      "Dwarka metro station",
      "Noida Sector 52 metro",
      "Gurgaon metro stations",
      "Interchange stations Delhi",
      "Major metro stations Delhi",

      // Planning & Information
      "Delhi Metro guide",
      "Metro travel tips Delhi",
      "Delhi Metro for beginners",
      "Metro first time user Delhi",
      "Delhi Metro rules",
      "Metro regulations Delhi",
      "Delhi Metro dos and don'ts",
      "Metro etiquette Delhi",

      // Services
      "Delhi Metro customer care",
      "Metro helpline Delhi",
      "Delhi Metro lost and found",
      "Metro complaint Delhi",
      "Delhi Metro feedback",
      "Metro suggestion Delhi",

      // Accessibility
      "Delhi Metro for disabled",
      "Metro wheelchair access",
      "Delhi Metro senior citizen",
      "Metro for elderly",
      "Delhi Metro elevator",
      "Metro escalator facilities",

      // Environmental
      "Delhi Metro eco-friendly",
      "Metro green initiative",
      "Delhi Metro solar power",
      "Metro energy efficient",

      // Safety
      "Delhi Metro safety",
      "Metro emergency procedures",
      "Delhi Metro fire safety",
      "Metro security measures",

      // Future & Expansion
      "Delhi Metro Phase 4",
      "New metro lines Delhi",
      "Delhi Metro expansion",
      "Future metro projects Delhi",
      "Delhi Metro under construction",
      "Upcoming metro stations",

      // Comparison & Reviews
      "Delhi Metro vs other metros",
      "Metro rating Delhi",
      "Delhi Metro reviews",
      "Metro user experience Delhi",

      // Business & Commute
      "Delhi Metro for office goers",
      "Metro business travel",
      "Delhi Metro daily commute",
      "Metro for students",
      "Delhi Metro rush hours",
      "Metro crowd management",

      // Events & Special
      "Delhi Metro during festivals",
      "Metro special trains",
      "Delhi Metro Republic Day",
      "Metro Independence Day",
      "Delhi Metro for events",
      "Metro to stadiums",

      // Technical
      "Delhi Metro speed",
      "Metro train specifications",
      "Delhi Metro technology",
      "Metro train maintenance",

      // Historical
      "Delhi Metro history",
      "Metro development timeline",
      "Delhi Metro inauguration",
      "Metro milestones",

      // Awards & Recognition
      "Delhi Metro awards",
      "Metro achievements Delhi",
      "Delhi Metro world record",
      "Metro international recognition",

      // Financial
      "Delhi Metro revenue",
      "Metro ticket sales",
      "Delhi Metro budget",
      "Metro project cost",

      // Employment
      "Delhi Metro jobs",
      "Metro career opportunities",
      "Delhi Metro recruitment",
      "Metro staff training",

      // COVID Measures
      "Delhi Metro COVID rules",
      "Metro sanitization",
      "Delhi Metro mask rules",
      "Metro social distancing",

      // Night Services
      "Delhi Metro night service",
      "Metro late night",
      "Delhi Metro extended hours",
      "Metro 24x7 proposal",

      // Integration
      "Delhi Metro bus integration",
      "Metro auto rickshaw",
      "Delhi Metro taxi service",
      "Metro last mile connectivity",

      // International
      "Delhi Metro for tourists",
      "Metro foreign visitors",
      "Delhi Metro English guide",
      "Metro multilingual signs",
    ].join(", ");

    // Set Keywords Meta Tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    } else {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      metaKeywords.content = keywords;
      document.head.appendChild(metaKeywords);
    }

    // Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      linkCanonical.href = window.location.href;
      document.head.appendChild(linkCanonical);
    }

    // Open Graph Tags for Social Media
    const ogTags = [
      {
        property: "og:title",
        content: "Delhi Metro | Official Route Planner & Metro Guide | DMRC",
      },
      {
        property: "og:description",
        content:
          "Plan your Delhi Metro journey with our interactive route planner, real-time train tracking, fare calculator and complete metro guide.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: window.location.href },
      {
        property: "og:image",
        content: "https://mydelhimetro.in/delhi-metro-og-image.jpg",
      },
      { property: "og:site_name", content: "Delhi Metro Guide" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:country-name", content: "India" },
    ];

    ogTags.forEach((tag) => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Twitter Card Tags
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Delhi Metro | Smart Route Planner & Real-time Guide",
      },
      {
        name: "twitter:description",
        content:
          "Navigate Delhi Metro with ease. Real-time routes, fare calculator, and everything you need for a seamless journey across Delhi NCR.",
      },
      {
        name: "twitter:image",
        content: "https://mydelhimetro.in/delhi-metro-twitter-card.jpg",
      },
      { name: "twitter:site", content: "@DelhiMetro" },
      { name: "twitter:creator", content: "@DelhiMetro" },
    ];

    twitterTags.forEach((tag) => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", tag.name);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Structured Data (Schema.org) for better SEO
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Delhi Metro Route Planner",
      url: window.location.href,
      description:
        "Official Delhi Metro route planner with real-time information, fare calculator, and complete metro guide",
      applicationCategory: "TravelApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
      publisher: {
        "@type": "Organization",
        name: "My Delhi Metro",
        url: "https://www.delhimetrorail.com",
        logo: "https://mydelhimetro.in/logo.png",
      },
      author: {
        "@type": "Organization",
        name: "DMRC",
        url: "https://www.delhimetrorail.com",
      },
    });

    if (window.location.pathname !== "/") return;

    // document.head.appendChild(schemaScript);

    // Local Business Schema for Delhi Metro
    const localBusinessSchema = document.createElement("script");
    localBusinessSchema.type = "application/ld+json";
    localBusinessSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "My Delhi Metro",
      image: "https://mydelhimetro.in/delhi-metro-network.jpg",
      "@id": "https://www.delhimetrorail.com",
      url: "https://www.delhimetrorail.com",
      telephone: "+91-11-23417910",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Metro Bhawan, Fire Brigade Lane, Barakhamba Road",
        addressLocality: "New Delhi",
        postalCode: "110001",
        addressCountry: "IN",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "05:00",
        closes: "23:30",
      },
      sameAs: [
        "https://www.facebook.com/OfficialDelhiMetro",
        "https://twitter.com/OfficialDMRC",
        "https://www.instagram.com/officialdelhim/",
        "https://www.youtube.com/user/dmrcvideo",
        "https://www.linkedin.com/company/delhi-metro-rail-corporation-dmrc-/",
      ],
    });
    document.head.appendChild(localBusinessSchema);

    // Breadcrumb Schema
    const breadcrumbSchema = document.createElement("script");
    breadcrumbSchema.type = "application/ld+json";
    breadcrumbSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: window.location.origin,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Delhi Metro Route Planner",
          item: window.location.href,
        },
      ],
    });
    document.head.appendChild(breadcrumbSchema);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 800) {
        setLoadMap(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const features = [
    {
      icon: <Route className="h-6 w-6" />,
      title: "Route Planner",
      description: "AI-powered route suggestions with real-time info",
      link: "/route-planner",
      color: "from-blue-600 to-cyan-500",
    },
    {
      icon: <Map className="h-6 w-6" />,
      title: "Live Network",
      description: "Interactive map with train positions",
      link: "/network",
      color: "from-emerald-600 to-green-500",
    },
    {
      icon: <Ticket className="h-6 w-6" />,
      title: "Smart Card",
      description: "Virtual card & travel history",
      link: "/smart-card",
      color: "from-violet-600 to-purple-500",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Explore Delhi",
      description: "Metro routes to attractions",
      link: "/tourist-info",
      color: "from-amber-600 to-orange-500",
    },
  ];

  const touristAttractions = [
    {
      name: "Lotus Temple",
      station: "Kalkaji Mandir",
      line: "Magenta Line",
      time: "12 min",
      color: "bg-gradient-to-br from-pink-50 to-rose-50",
      image: lotus,
    },
    {
      name: "Qutub Minar",
      station: "Qutub Minar",
      line: "Yellow Line",
      time: "25 min",
      color: "bg-gradient-to-br from-amber-50 to-orange-50",
      image: qutub,
    },
    {
      name: "India Gate",
      station: "Central Secretariat",
      line: "Yellow Line",
      time: "5 min",
      color: "bg-gradient-to-br from-red-50 to-pink-50",
      image: indiaGate,
    },
    {
      name: "Red Fort",
      station: "Chandni Chowk",
      line: "Yellow Line",
      time: "15 min",
      color: "bg-gradient-to-br from-orange-50 to-red-50",
      image: redFort,
    },
  ];

  useEffect(() => {
    const t = setTimeout(() => setShowSEO(true), 6000);
    return () => clearTimeout(t);
  }, []);

  // Intersection Observer for counter animation
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           startCounters();
  //           observer.unobserve(entry.target);
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );

  //   if (statsRef.current) {
  //     observer.observe(statsRef.current);
  //   }

  //   return () => {
  //     if (statsRef.current) {
  //       observer.unobserve(statsRef.current);
  //     }
  //   };
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      startCounters();
    }, 3000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  // Counter animation function
  const startCounters = () => {
    const startTime = Date.now();

    const updateCounters = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth easing function
      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progress);

      const newCounters = targetValues.map((target, index) => {
        if (index === 3) {
          // Daily Riders (decimal)
          return parseFloat((target * easedProgress).toFixed(1));
        }
        return Math.floor(target * easedProgress);
      });

      setCounters(newCounters);

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      } else {
        // Ensure final values
        setCounters(targetValues);
      }
    };

    requestAnimationFrame(updateCounters);
  };

  // Stats with animated values
  const stats = [
    {
      number: counters[0],
      label: "Stations",
      color: "text-blue-600",
      suffix: "",
    },
    {
      number: counters[1],
      label: "Lines",
      color: "text-emerald-600",
      suffix: "",
    },
    {
      number: counters[2],
      label: "KM Network",
      color: "text-violet-600",
      suffix: "+",
    },
    {
      number: counters[3],
      label: "Daily Riders",
      color: "text-amber-600",
      suffix: "M",
    },
  ];

  <Suspense fallback={null}>{showSEO && <SEORichContent />}</Suspense>;

  const popularStations = [
    {
      name: "Rajiv Chowk Metro Station",
      lines: ["Blue Line", "Yellow Line"],
      desc: "Heart of Connaught Place and one of the busiest interchange hubs in Delhi Metro network.",
      daily: "4 Lakh+ commuters",
      link: "/rajiv-chowk-metro-station",
    },
    {
      name: "New Delhi Metro Station",
      lines: ["Yellow Line", "Airport Express"],
      desc: "Direct connectivity to New Delhi Railway Station and Airport Express Line.",
      daily: "3.5 Lakh+ commuters",
      link: "/new-delhi-metro-station",
    },
    {
      name: "Kashmere Gate Metro Station",
      lines: ["Red Line", "Yellow Line", "Violet Line"],
      desc: "Largest interchange station connecting ISBT, Old Delhi & central corridors.",
      daily: "3 Lakh+ commuters",
      link: "/kashmere-gate-metro-station",
    },
    {
      name: "Noida City Centre Metro Station",
      lines: ["Blue Line"],
      desc: "Key metro station serving Noida’s commercial and residential zones.",
      daily: "2.5 Lakh+ commuters",
      link: "/noida-city-centre-metro-station",
    },
    // {
    //   name: "IGI Airport Metro Station",
    //   lines: ["Airport Express", "Magenta Line"],
    //   desc: "Fastest route to Indira Gandhi International Airport via Airport Express.",
    //   daily: "2 Lakh+ commuters",
    //   link: "/igi-airport-metro-station"
    // },
    // {
    //   name: "Hauz Khas Metro Station",
    //   lines: ["Yellow Line", "Magenta Line"],
    //   desc: "Major interchange connecting South Delhi to Cyber City & Botanical Garden.",
    //   daily: "1.8 Lakh+ commuters",
    //   link: "/hauz-khas-metro-station"
    // },
    // {
    //   name: "Chandni Chowk Metro Station",
    //   lines: ["Yellow Line"],
    //   desc: "Closest metro access to Red Fort and historic Old Delhi markets.",
    //   daily: "1.7 Lakh+ commuters",
    //   link: "/chandni-chowk-metro-station"
    // },
    // {
    //   name: "AIIMS Metro Station",
    //   lines: ["Yellow Line"],
    //   desc: "Serves AIIMS Hospital and Safdarjung medical district.",
    //   daily: "1.6 Lakh+ commuters",
    //   link: "/aiims-metro-station"
    // }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid"></div>

        <div className="container relative mx-auto px-4 py-10 md:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* LEFT CONTENT */}
            <div className="lg:w-1/2">
              {/* Live Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative h-2 w-2 rounded-full bg-red-500"></span>
                </span>
                <span className="text-sm text-gray-300">
                  Delhi Metro Live Updates
                </span>
              </div>

              {/* SEO H1 */}
              <h1 className="mb-4">
                <span className="block text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Delhi Metro Route Planner
                </span>

                <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400 mt-2">
                  Metro Map, Fare Calculator & DMRC Station List
                </span>
              </h1>

              {/* SEO Paragraph */}
              <p className="text-gray-300 text-[16px] mb-8 max-w-lg">
                Plan your journey with the fastest{" "}
                <strong>Delhi Metro Route Planner</strong>. Find routes between
                all 289 DMRC stations, check the Delhi Metro map, calculate
                metro fares, explore interchange stations and view metro timings
                across 12 metro lines including Blue Line, Yellow Line, Pink
                Line and Magenta Line.
              </p>

              {/* Stats */}
              <div
                ref={statsRef}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                  >
                    <div className={`text-2xl font-bold ${stat.color}`}>
                      {stat.number}
                      {stat.suffix}
                    </div>

                    <div className="text-sm text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10 md:mt-16">
                <Link
                  to="/route-planner"
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Play className="h-5 w-5" />
                  Plan Your Route
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* WhatsApp Booking */}
                <button
                  onClick={() => {
                    const phoneNumber = "919650855800";
                    const message = encodeURIComponent(
                      "Hi, I want help with Delhi Metro route and ticket booking.",
                    );

                    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

                    window.open(whatsappURL, "_blank");
                  }}
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-4 rounded-xl font-semibold hover:bg-white/15 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <TicketCheck className="h-5 w-5" />
                  Book Tickets
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="lg:w-1/2 hidden md:block">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={OIP2}
                    alt="Delhi Metro Map showing all DMRC lines and stations"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width="800"
                    height="500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-11 -right-4 bg-white rounded-l-xl shadow-2xl p-2 max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-1 rounded-lg">
                      <Navigation className="h-4 w-4 text-blue-600" />
                    </div>

                    <div>
                      <div className="font-semibold text-gray-900">
                        Fastest Metro Route
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hidden SEO Links */}
        <div className="hidden">
          <Link to="/metro-map">Delhi Metro Map</Link>
          <Link to="/metro-lines">Delhi Metro Lines</Link>
          <Link to="/metro-stations">Delhi Metro Stations List</Link>
          <Link to="/metro-timings">Delhi Metro Timings</Link>
        </div>
      </section>

      {/* Interactive Metro Map Section */}
      <section className=" bg-white">
        <div className="">
          <Suspense
            fallback={
              <div className="h-[300px] bg-gray-100 rounded-xl animate-pulse" />
            }
          >
            {loadMap && <InteractiveMetroMap />}
          </Suspense>
        </div>
      </section>

      {/* Service Status Section */}
      <section className="py-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Delhi Metro Service Status
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Real-time information about all Delhi Metro lines and stations.
                Check the current status of 12 metro lines operating across
                Delhi NCR.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium">
                All Systems Operational
              </span>
            </div>
          </div>

          {/* Metro Lines Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-10">
            {metroLinesData.map((line, index) => (
              <div
                key={index}
                className={`${line.color} rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                    <Train className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-white/90 text-sm">Line {index + 1}</div>
                </div>
                <div className="text-white font-semibold mb-1">{line.name}</div>
                <div className="text-white/80 text-sm">
                  {metroStations[line.name]?.length || 0} stations
                </div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link} className="group">
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 h-full">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} text-white mb-4`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium text-sm">
                    <span>Explore feature</span>
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Metro Stations */}
      <section className="py-10 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Top Delhi Metro Stations
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Explore the busiest and most important metro stations across Delhi
              NCR network.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularStations.map((station, index) => (
              <Link
                key={index}
                to={station.link}
                className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-500 transition-all duration-300 shadow-md hover:shadow-2xl"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 transition duration-300"></div>

                {/* Station Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 relative z-10">
                  {station.name}
                </h3>

                {/* Metro Lines */}
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {station.lines.map((line, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium"
                    >
                      {line}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 relative z-10">
                  {station.desc}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center relative z-10">
                  <span className="text-sm font-medium text-gray-800">
                    👥 {station.daily}
                  </span>

                  <span className="text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-10">
            <Link
              to="/stations"
              className="inline-flex items-center gap-2 bg-white border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition"
            >
              View All Stations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tourist Attractions */}
      <section className="py-12 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">
              Explore Delhi's Icons
            </h2>
            <p className="text-gray-300">
              Reach every major landmark via Delhi Metro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {touristAttractions.map((attraction, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    loading="lazy"
                    width="400"
                    height="300"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  /> */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                    {attraction.time}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {attraction.name}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {attraction.station}
                    </div>
                    <div className="px-2 py-1 bg-white/10 rounded text-xs">
                      {attraction.line}
                    </div>
                  </div>

                  <Link
                    to={`/route-planner?to=${attraction.station}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-2.5 rounded-lg text-sm font-medium transition-colors"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delhi Metro Information Section - SEO Optimized */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Everything About Delhi Metro - Complete Guide
            </h2>

            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Delhi Metro</strong> is one of the world's largest
                  rapid transit systems, serving the National Capital Region
                  with 12 metro lines, 289 stations, and a network spanning over
                  390 kilometers. Whether you're a daily commuter using the
                  Delhi Metro route planner or a tourist exploring iconic
                  landmarks, our comprehensive Delhi Metro guide helps you
                  navigate the system efficiently.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                Delhi Metro Lines & Stations
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Delhi Metro network consists of 12 operational lines
                connecting all major areas. Each line is color-coded for easy
                identification. From the Red Line to the Aqua Line, Delhi Metro
                serves millions of commuters daily. Our interactive Delhi Metro
                map shows real-time station locations and line information.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                Route Planner & Navigation
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Use our advanced Delhi Metro route planner to find the fastest
                path between any two stations. Get instant information about
                travel time, number of stops, interchange details, and real-time
                train availability. Whether you need to reach the airport,
                office, or tourist destinations, our route planner calculates
                the best option for you.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                Delhi Metro Fares & Smart Card
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Delhi Metro fares are distance-based, starting from ₹10 for
                short distances. Get exact fare information with our fare
                calculator. Smart Card users enjoy a 10% discount on all
                journeys and faster entry through dedicated gates. Plan your
                journey with fare information for both token and smart card
                options.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                Real-Time Train Tracking & Service Status
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Monitor real-time Delhi Metro train positions and receive live
                status updates on all metro lines. Our service status dashboard
                shows current operations, delays, and special announcements. Get
                instant notifications about train frequency and accessibility
                information.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                Delhi Metro for Tourists & Travel
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Explore Delhi's iconic landmarks via Metro. From Red Fort and
                India Gate to Lotus Temple and Qutub Minar, Delhi Metro provides
                easy access to major tourist attractions. Our guide includes
                travel times, station information, and directions to help you
                plan your sightseeing tour efficiently.
              </p>

              <div className="bg-blue-100 border-l-4 border-blue-600 p-6 my-8">
                <h4 className="font-bold text-gray-900 mb-2">Pro Tip:</h4>
                <p className="text-gray-700">
                  Download our app for offline Delhi Metro maps, digital smart
                  cards, real-time tracking, and detailed station information.
                  Perfect for first-time users and regular commuters.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                Delhi Metro Operating Hours & Schedule
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Delhi Metro operates from 5:00 AM to 11:30 PM on all days. Check
                our guide for complete timing details, first and last train
                schedules, peak hour information, and special timings during
                festivals and national holidays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Take Delhi Metro With You
                </h2>
                <p className="text-gray-600 mb-6">
                  Download our app for real-time updates, digital tickets, and
                  smart route planning on the go.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Navigation className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Live train tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <CreditCard className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Digital smart card</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Map className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Offline maps</span>
                  </div>
                </div>

                <button className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                  <Smartphone className="h-5 w-5" />
                  Download App
                </button>
              </div>

              {/* App Mockup */}
              <div className="lg:w-1/2">
                <div className="relative max-w-sm mx-auto">
                  <div className="bg-gray-900 rounded-[40px] p-6 shadow-2xl">
                    <div className="bg-gradient-to-b from-blue-500 to-cyan-500 rounded-[32px] overflow-hidden">
                      <div className="bg-white p-6">
                        <div className="text-center mb-6">
                          <div className="text-lg font-bold text-gray-900">
                            Metro Guide
                          </div>
                          <div className="text-xs text-gray-500">
                            Delhi Metro Official
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-gray-50 rounded-xl p-4">
                            <div className="text-sm text-gray-600 mb-1">
                              Next train to
                            </div>
                            <div className="font-bold text-gray-900">
                              Huda City Center
                            </div>
                            <div className="text-xs text-blue-600 mt-1">
                              Platform 2A • 4 mins
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-blue-50 rounded-lg p-3 text-center">
                              <div className="text-xs text-gray-600">Fare</div>
                              <div className="font-bold text-blue-600">₹40</div>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-3 text-center">
                              <div className="text-xs text-gray-600">Time</div>
                              <div className="font-bold text-blue-600">
                                28 min
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <Link to="/route-planner">
        <div className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-3 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2 group">
          <Route className="h-5 w-5" />
          <span className="font-semibold">Plan Route</span>
          <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
      {/* Add SEO Rich Content at the bottom */}
      {/* <SEORichContent /> */}

      <Suspense fallback={null}>{showSEO && <SEORichContent />}</Suspense>

      {/* Add microdata to existing elements */}
      <div itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Delhi Metro Route Planner" />
        <meta
          itemProp="description"
          content="Official Delhi Metro route planner with real-time information and complete metro guide"
        />
      </div>
    </div>
  );
};

export default Home;
