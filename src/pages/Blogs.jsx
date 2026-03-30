import React, { useEffect, useMemo, useState } from "react";
import {
  Search,
  Filter,
  TrendingUp,
  Calendar,
  Clock3,
  User,
  Eye,
  ThumbsUp,
  MessageCircle,
  Bookmark,
  Share2,
  ArrowRight,
  Tag,
  MapPin,
  Train,
  Landmark,
  Sparkles,
  ShieldCheck,
  Navigation,
  ExternalLink,
} from "lucide-react";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import redfort1 from "../assets/redfort.jpg"
import { Helmet } from "react-helmet-async"
const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [savedBlogs, setSavedBlogs] = useState([]);


const seoKeywords = useMemo(
  () =>
    [
      // Core Keywords
      "Delhi Metro",
      "Delhi Metro route finder",
      "Delhi Metro stations list",
      "Delhi Metro lines",
      "Delhi Metro timings",
      "Delhi Metro fare",
      "Delhi Metro map",

      // Metro Lines Keywords
      "Delhi Metro Red Line stations",
      "Delhi Metro Blue Line stations",
      "Delhi Metro Yellow Line route",
      "Delhi Metro Pink Line stations",
      "Delhi Metro Magenta Line route",
      "Delhi Metro Violet Line stations",
      "Delhi Metro Airport Express line",

      // Route Finder Keywords
      "Delhi Metro route planner",
      "best metro route in Delhi",
      "Delhi Metro interchange stations",
      "Rajiv Chowk interchange metro",
      "Kashmere Gate metro interchange",

      // Tourist Keywords
      "tourist places in Delhi by metro",
      "India Gate nearest metro station",
      "Red Fort nearest metro station",
      "Akshardham nearest metro station",
      "Lotus Temple nearest metro station",
      "Delhi tourist guide metro route",

      // Delhi NCR Keywords
      "Noida metro route",
      "Noida metro stations list",
      "Gurgaon metro route",
      "Delhi NCR metro map",
      "Delhi metro for tourists",

      // Travel Tips
      "Delhi metro smart card benefits",
      "Delhi metro token vs smart card",
      "Delhi metro peak hours",
      "Delhi metro travel tips",
      "Delhi metro safety rules",

      // Blog Keywords
      "Delhi metro blog",
      "Delhi metro guide",
      "DMRC updates",
      "Delhi metro news",
      "Delhi metro travel guide"
    ].join(", "),
  []
);

  // ✅ Categories (updated & SEO-friendly)
const categories = useMemo(
  () => [
    {
      id: "all",
      name: "All Delhi Metro Blogs",
      count: 40,
      icon: <Sparkles className="h-4 w-4" />,
      keywords: "Delhi Metro blog, Delhi Metro guide, DMRC news",
    },
    {
      id: "metro-lines",
      name: "Delhi Metro Lines Guide",
      count: 12,
      icon: <Train className="h-4 w-4" />,
      keywords:
        "Delhi Metro lines, Delhi metro red line, blue line delhi metro, yellow line delhi metro, magenta line delhi metro, pink line delhi metro",
    },
    {
      id: "tourist-guide",
      name: "Delhi Tourist Places by Metro",
      count: 10,
      icon: <Landmark className="h-4 w-4" />,
      keywords:
        "Delhi tourist places by metro, India Gate nearest metro station, Red Fort nearest metro station, Akshardham metro station, Lotus temple metro station",
    },
    {
      id: "route-planning",
      name: "Delhi Metro Route Planner",
      count: 7,
      icon: <Navigation className="h-4 w-4" />,
      keywords:
        "Delhi metro route finder, Delhi metro route planner, best metro route Delhi, Rajiv Chowk interchange",
    },
    {
      id: "fare-tickets",
      name: "Delhi Metro Fare & Smart Card",
      count: 6,
      icon: <Tag className="h-4 w-4" />,
      keywords:
        "Delhi metro fare chart, Delhi metro smart card benefits, metro token vs smart card",
    },
    {
      id: "safety",
      name: "Delhi Metro Safety Guide",
      count: 5,
      icon: <ShieldCheck className="h-4 w-4" />,
      keywords:
        "Delhi metro safety rules, women safety in metro, CISF metro security",
    },
  ],
  []
);

 
  const featuredBlogs = useMemo(
    () => [
      {
        id: 101,
        title: "Delhi Metro Lines Guide (2026): All 12 Lines Explained",
        excerpt:
          "Complete overview of Delhi Metro lines including interchange stations, timings, and best routes across Delhi NCR.",
        category: "metro-lines",
        author: "Delhi Metro Guide Team",
        date: "2026-01-02",
        readTime: "10 min read",
        views: "42.7K",
        likes: 3124,
        comments: 428,
        image:
          "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        featured: true,
        tags: ["Metro Lines", "Interchange", "DMRC"],
        link :"/network"
      },
      {
        id: 102,
        title: "Top Tourist Places in Delhi by Metro (Nearest Stations + Tips)",
        excerpt:
          "Red Fort — reach Delhi’s best attractions easily via metro.",
        category: "tourist-guide",
        author: "City Explorer Desk",
        date: "2026-01-05",
        readTime: "9 min read",
        views: "36.1K",
        likes: 2678,
        comments: 355,
        image:redfort1,
        featured: true,
        tags: ["Tourism", "Metro Stations", "Delhi NCR"],
        link :"/places/red-fort-delhi"
      },
      {
        id: 102,
        title: "Top Tourist Places in Delhi by Metro (Nearest Stations + Tips)",
        excerpt:
          "India Gate — reach Delhi’s best attractions easily via metro.",
        category: "tourist-guide",
        author: "City Explorer Desk",
        date: "2026-01-05",
        readTime: "9 min read",
        views: "36.1K",
        likes: 2678,
        comments: 355,
        image:
          "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
        featured: true,
        tags: ["Tourism", "Metro Stations", "Delhi NCR"],
        link :"/places/india-gate"
      },
    ],
    []
  );

  // ✅ 12 Metro line blogs (content-focused)
  const metroLineBlogs = useMemo(
    () => [
      {
        id: 201,
        title: "Red Line Delhi Metro: Route, Stations, Interchanges & Timings",
        excerpt:
          "Red Line connects key areas from Rithala to Shaheed Sthal with major interchanges at Kashmere Gate and Inderlok.",
        category: "metro-lines",
        author: "Line Specialists",
        date: "2025-12-18",
        readTime: "7 min read",
        views: "18.4K",
        likes: 1150,
        comments: 140,
        image:
          "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
        tags: ["Red Line", "Stations", "Interchange"],
      },
      {
        id: 202,
        title: "Yellow Line Delhi Metro: Fastest Way to North–South Delhi",
        excerpt:
          "Yellow Line connects Samaypur Badli to Millennium City Centre Gurugram with interchanges at Rajiv Chowk & Central Secretariat.",
        category: "metro-lines",
        author: "Line Specialists",
        date: "2025-12-21",
        readTime: "7 min read",
        views: "21.6K",
        likes: 1374,
        comments: 168,
        image:
          "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
        tags: ["Yellow Line", "Rajiv Chowk", "Route"],
      },
      {
        id: 203,
        title: "Blue Line Delhi Metro: Dwarka to Noida Route + Interchanges",
        excerpt:
          "Blue Line is Delhi’s busiest corridor connecting Dwarka Sector 21 to Noida Electronic City with multiple interchanges.",
        category: "metro-lines",
        author: "Line Specialists",
        date: "2025-12-26",
        readTime: "8 min read",
        views: "28.9K",
        likes: 1891,
        comments: 244,
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
        tags: ["Blue Line", "Noida", "Dwarka"],
      },
      {
        id: 204,
        title: "Pink Line Delhi Metro: Ring Corridor Guide (Majlis Park–Shiv Vihar)",
        excerpt:
          "Pink Line improves east–west connectivity and connects important hubs like Lajpat Nagar and INA.",
        category: "metro-lines",
        author: "Line Specialists",
        date: "2025-12-28",
        readTime: "7 min read",
        views: "14.2K",
        likes: 842,
        comments: 92,
        image:
          "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1200&q=80",
        tags: ["Pink Line", "Ring Line", "Interchange"],
      },
      {
        id: 205,
        title: "Magenta Line Delhi Metro: Best Line for South Delhi Connectivity",
        excerpt:
          "Magenta Line links Janakpuri West to Botanical Garden with key interchanges at Hauz Khas and Kalkaji Mandir.",
        category: "metro-lines",
        author: "Line Specialists",
        date: "2025-12-30",
        readTime: "6 min read",
        views: "16.8K",
        likes: 1033,
        comments: 116,
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        tags: ["Magenta", "Hauz Khas", "Botanical Garden"],
      },
      {
        id: 206,
        title: "Violet Line Delhi Metro: Kashmere Gate to Ballabhgarh Guide",
        excerpt:
          "Violet Line is ideal for central Delhi travel with interchanges at Central Secretariat and Mandi House.",
        category: "metro-lines",
        author: "Line Specialists",
        date: "2026-01-01",
        readTime: "6 min read",
        views: "12.1K",
        likes: 721,
        comments: 88,
        image:
          "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
        tags: ["Violet", "Central Secretariat", "Mandi House"],
      },
    ],
    []
  );

  // ✅ Popular destinations blogs
  const destinationBlogs = useMemo(
    () => [
      {
        id: 301,
        title: "Red Fort by Metro: Nearest Station + Walking Route",
        excerpt:
          "Reach Lal Qila / Chandni Chowk station and explore Old Delhi’s heritage in one metro trip.",
        category: "tourist-guide",
        author: "Tourist Desk",
        date: "2025-11-20",
        readTime: "5 min read",
        views: "19.4K",
        likes: 1240,
        comments: 150,
        image:
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
        tags: ["Red Fort", "Chandni Chowk", "Old Delhi"],
      },
      {
        id: 302,
        title: "India Gate by Metro: Best Route + Time to Reach",
        excerpt:
          "Central Secretariat is the nearest metro station. Walkable route and best time to visit included.",
        category: "tourist-guide",
        author: "Tourist Desk",
        date: "2025-11-28",
        readTime: "4 min read",
        views: "17.6K",
        likes: 980,
        comments: 118,
        image:
          "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
        tags: ["India Gate", "Central Secretariat", "Delhi"],
      },
      {
        id: 303,
        title: "Lotus Temple by Metro: Kalkaji Mandir Station Guide",
        excerpt:
          "Use Magenta/Violet line to reach Kalkaji Mandir and plan a smooth visit with timings.",
        category: "tourist-guide",
        author: "Tourist Desk",
        date: "2025-12-06",
        readTime: "4 min read",
        views: "15.2K",
        likes: 901,
        comments: 94,
        image:
          "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
        tags: ["Lotus Temple", "Kalkaji", "Magenta Line"],
      },
      {
        id: 304,
        title: "Akshardham by Metro: Station Exit + Entry Tips",
        excerpt:
          "Akshardham metro station is right next to the complex. Security rules and best time included.",
        category: "tourist-guide",
        author: "Tourist Desk",
        date: "2025-12-12",
        readTime: "5 min read",
        views: "22.1K",
        likes: 1488,
        comments: 210,
        image:
          "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
        tags: ["Akshardham", "Blue Line", "Temple"],
      },
    ],
    []
  );

  // ✅ Practical guides (fare/route planning/safety)
  const guides = useMemo(
    () => [
      {
        id: 401,
        title: "Delhi Metro Smart Card vs Token: Which Saves More Money?",
        excerpt:
          "Smart card benefits, recharge tips, discount logic, and best choice for daily commuters.",
        category: "fare-tickets",
        author: "Commuter Team",
        date: "2025-10-10",
        readTime: "6 min read",
        views: "31.8K",
        likes: 2120,
        comments: 290,
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
        tags: ["Smart Card", "Fare", "Token"],
      },
      {
        id: 402,
        title: "Delhi Metro Interchange Guide: Rajiv Chowk, Kashmere Gate & More",
        excerpt:
          "How to change lines faster at top interchange stations with walking directions & tips.",
        category: "route-planning",
        author: "Route Planner",
        date: "2025-10-22",
        readTime: "8 min read",
        views: "27.4K",
        likes: 1764,
        comments: 240,
        image:
          "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        tags: ["Interchange", "Rajiv Chowk", "Kashmere Gate"],
      },
      {
        id: 403,
        title: "Women Safety in Delhi Metro: Coaches, CISF & Helpline Tips",
        excerpt:
          "Dedicated coaches, security presence, and what to do in case of emergencies.",
        category: "safety",
        author: "Safety Desk",
        date: "2025-11-02",
        readTime: "6 min read",
        views: "20.9K",
        likes: 1628,
        comments: 180,
        image:
          "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1200&q=80",
        tags: ["Women Safety", "CISF", "Security"],
      },
    ],
    []
  );

  // ✅ Combine all blogs (for listing)
  const allBlogs = useMemo(
    () => [...metroLineBlogs, ...destinationBlogs, ...guides],
    [metroLineBlogs, destinationBlogs, guides]
  );

  const popularTags = useMemo(
    () => [
      "Delhi Metro Lines",
      "Route Finder",
      "Interchange",
      "Smart Card",
      "Metro Timings",
      "Airport Express",
      "Tourist Places",
      "DMRC Updates",
      "Peak Hours Tips",
      "Women Safety",
    ],
    []
  );

  const filteredBlogs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return allBlogs.filter((blog) => {
      const matchesCategory = activeCategory === "all" || blog.category === activeCategory;

      const matchesSearch =
        !q ||
        blog.title.toLowerCase().includes(q) ||
        blog.excerpt.toLowerCase().includes(q) ||
        (blog.tags || []).some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [allBlogs, activeCategory, searchQuery]);

  const trendingBlogs = useMemo(() => {
    // simple trending sorting based on views text
    const parseViews = (v) => {
      const s = String(v).toLowerCase().replace("k", "000").replace(".", "");
      const n = parseInt(s, 10);
      return Number.isNaN(n) ? 0 : n;
    };
    return [...allBlogs].sort((a, b) => parseViews(b.views) - parseViews(a.views)).slice(0, 5);
  }, [allBlogs]);

  const handleSaveBlog = (blogId) => {
    setSavedBlogs((prev) =>
      prev.includes(blogId) ? prev.filter((id) => id !== blogId) : [...prev, blogId]
    );
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-IN", options);
  };

  // ✅ JSON-LD Schema
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Delhi Metro Blog",
      description:
        "Delhi Metro blog for routes, metro lines, stations, interchanges, timings, fare guides and tourist places accessible by metro.",
      keywords: seoKeywords,
    }),
    [seoKeywords]
  );

  useEffect(() => {
  const category = categories.find(c => c.id === activeCategory)

  if(category){
    document.title = `${category.name} | Delhi Metro Blog`
  }
}, [activeCategory])

useEffect(() => {
  const category = categories.find(c => c.id === activeCategory)

  if(category){
    const meta = document.querySelector("meta[name='description']")
    if(meta){
      meta.setAttribute(
        "content",
        `Read ${category.name} articles including routes, stations, metro timings, fares and travel tips in Delhi NCR metro network.`
      )
    }
  }
}, [activeCategory])

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ✅ SEO */}
   <Helmet>

<title>Delhi Metro Blog | Routes, Lines, Stations, Timings & Tourist Guide</title>

<meta
name="description"
content="Delhi Metro blog with guides for metro lines, station lists, interchange stations, fare calculator, metro timings and tourist places accessible by Delhi Metro."
/>

<meta
name="keywords"
content={seoKeywords}
/>

<link rel="canonical" href="https://www.mydelhimetro.in/blogs" />

<meta property="og:title" content="Delhi Metro Blog – Routes, Stations & Metro Guide" />

<meta property="og:description"
content="Explore Delhi Metro blog with metro lines, route planner guides, station lists, timings, fare calculator and tourist places near metro stations." />

<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.mydelhimetro.in/blogs" />
<meta property="og:image" content="https://www.mydelhimetro.in/og-image.jpg" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Delhi Metro Blog – Routes, Stations & Travel Guide" />
<meta name="twitter:description"
content="Learn Delhi Metro routes, stations, timings, fare guides and tourist places accessible by metro." />

<script type="application/ld+json">
{JSON.stringify({
"@context": "https://schema.org",
"@type": "Blog",
"name": "Delhi Metro Blog",
"url": "https://www.mydelhimetro.in/blogs",
"description":
"Delhi Metro blog covering routes, lines, station lists, metro timings, fare guides and tourist places reachable by Delhi Metro.",
"publisher": {
"@type": "Organization",
"name": "My Delhi Metro Guide",
"url": "https://www.mydelhimetro.in"
}
})}
</script>

</Helmet>

      {/* HERO */}
      <div className="relative overflow-hidden bg-slate-900">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="container mx-auto px-4 py-14 md:py-18 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <TrendingUp className="h-9 w-9 text-white" />
            </div>

              <h1 className="mb-3">
               <span className="block text-4xl italic md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 mb-1 leading-tight tracking-tight [-webkit-text-stroke:2px_rgba(255,255,255,0.1)]">
           Delhi Metro Blog – Routes, Stations, Timings & Travel Guide
            </span>
             
            </h1>
              <p className="text-gray-300 text-[16px] mb-8 italic leading-relaxed max-w-2xl mx-auto">
                 Real metro guides for Delhi NCR: metro lines, routes, interchanges, timings, fares,
              and tourist destinations — all in one place.
              </p>

            {/* Search */}
            <div className="mt-7 max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 h-5 w-5" />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search: Blue Line, Rajiv Chowk, Smart Card, India Gate..."
                  className="w-full pl-12 pr-12 py-4 rounded-2xl border border-white/10 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                />
                <Filter className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 h-5 w-5" />
              </div>
            </div>

            {/* quick stats */}
            <div className="mt-7 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {[
                { label: "Metro Lines Blogs", value: "12", icon: <Train className="h-4 w-4" /> },
                { label: "Tourist Guides", value: "10+", icon: <Landmark className="h-4 w-4" /> },
                { label: "Route Tips", value: "7+", icon: <Navigation className="h-4 w-4" /> },
                { label: "Fare Guides", value: "6+", icon: <Tag className="h-4 w-4" /> },
              ].map((x, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 text-left"
                >
                  <div className="flex items-center gap-2 text-white/70 text-xs">
                    {x.icon}
                    {x.label}
                  </div>
                  <div className="text-white font-extrabold text-xl mt-1">{x.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden">
<a href="/route-planner">Delhi Metro Route Planner</a>
<a href="/network">Delhi Metro Lines</a>
<a href="/stations">Delhi Metro Stations List</a>
<a href="/fares">Delhi Metro Fare Calculator</a>
</div>

      {/* MAIN */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT */}
          <div className="lg:w-2/3 space-y-10">
            {/* Featured */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  Featured Stories
                </h2>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full">
                  Editor’s Pick
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {featuredBlogs.map((blog, idx) => (
                  <FeaturedCard
                    key={blog.id}
                    blog={blog}
                    idx={idx}
                    savedBlogs={savedBlogs}
                    onSave={handleSaveBlog}
                    formatDate={formatDate}
                  />
                ))}
              </div>
            </section>

            {/* Category Filter */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-extrabold text-slate-900">Browse by Category</h3>
                <div className="text-sm text-slate-500">
                  Results: <span className="font-semibold text-slate-900">{filteredBlogs.length}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((c) => {
                  const active = activeCategory === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setActiveCategory(c.id)}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all inline-flex items-center gap-2 ${
                        active
                          ? "bg-slate-900 border-slate-900 text-white shadow-sm"
                          : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <span className={`${active ? "text-white" : "text-slate-500"}`}>{c.icon}</span>
                      {c.name}
                      <span
                        className={`ml-1 text-xs px-2 py-0.5 rounded-full ${
                          active ? "bg-white/15 text-white" : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {c.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Popular Destination Blogs */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                  Popular Destinations by Metro
                </h2>
                <button className="text-sm font-bold text-slate-700 hover:text-blue-600 inline-flex items-center gap-2">
                  View all <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {destinationBlogs.map((blog) => (
                  <CompactCard
                    key={blog.id}
                    blog={blog}
                    savedBlogs={savedBlogs}
                    onSave={handleSaveBlog}
                    formatDate={formatDate}
                  />
                ))}
              </div>
            </section>

            {/* Latest / All Blogs */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-purple-600" />
                  Latest Articles
                </h2>
                <span className="text-xs text-slate-500">
                  SEO Focus: routes • lines • stations • fare • timings
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {filteredBlogs.map((blog) => (
                  <BlogCard
                    key={blog.id}
                    blog={blog}
                    savedBlogs={savedBlogs}
                    onSave={handleSaveBlog}
                    formatDate={formatDate}
                  />
                ))}
              </div>

              {filteredBlogs.length > 0 && (
                <div className="text-center mt-10">
                  <button className="px-8 py-3 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition inline-flex items-center gap-2">
                    Load More
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              )}

              {filteredBlogs.length === 0 && (
                <div className="mt-10 bg-white border border-slate-100 rounded-2xl p-10 text-center">
                  <div className="mx-auto h-12 w-12 rounded-2xl bg-slate-900/5 flex items-center justify-center">
                    <Search className="h-6 w-6 text-slate-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                    No matching articles
                  </h3>
                  <p className="mt-1 text-slate-600">
                    Try searching: <b>Blue Line</b>, <b>Rajiv Chowk</b>, <b>Smart Card</b>,{" "}
                    <b>Airport Express</b>
                  </p>
                </div>
              )}
            </section>

            {/* Metro Lines Section */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                  <Train className="h-6 w-6 text-blue-600" />
                  Metro Lines Articles
                </h2>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full">
                  All Lines
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {metroLineBlogs.map((blog) => (
                  <BlogCard
                    key={blog.id}
                    blog={blog}
                    savedBlogs={savedBlogs}
                    onSave={handleSaveBlog}
                    formatDate={formatDate}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:w-1/3 space-y-8">
            {/* Trending */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Trending This Week
              </h3>

              <div className="mt-4 space-y-4">
                {trendingBlogs.map((b) => (
                  <div
                    key={b.id}
                    className="flex items-start gap-3 group cursor-pointer"
                  >
                    <div className="h-14 w-14 rounded-xl bg-slate-100 overflow-hidden border border-slate-200 flex-shrink-0">
                      <img
                        src={b.image}
                      alt={`Delhi Metro guide: ${b.title}`}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition line-clamp-2">
                        {b.title}
                      </div>
                      <div className="mt-1 text-xs text-slate-500 inline-flex items-center gap-2">
                        <Eye className="h-3 w-3" /> {b.views}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <Tag className="h-5 w-5 text-purple-600" />
                Popular Tags
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {popularTags.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSearchQuery(t)}
                    className="px-3 py-2 rounded-xl text-sm font-semibold bg-slate-50 border border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300 transition"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="rounded-2xl p-6 border border-blue-100 shadow-sm bg-gradient-to-br from-blue-50 to-indigo-50">
              <h3 className="text-lg font-extrabold text-slate-900">
                Get Metro Updates
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Weekly Delhi Metro news, travel tips & new line guides.
              </p>

              <div className="mt-4 space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                />
                <button className="w-full px-4 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition">
                  Subscribe
                </button>
                <p className="text-xs text-slate-500">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="text-lg font-extrabold text-slate-900">
                Quick Links
              </h3>

              <div className="mt-4 space-y-3">
                {[
                  { label: "Delhi Metro Route Finder", icon: <Navigation className="h-4 w-4" /> },
                  { label: "Delhi Metro Lines", icon: <Train className="h-4 w-4" /> },
                  { label: "Delhi Metro Stations List", icon: <MapPin className="h-4 w-4" /> },
                  { label: "Tourist Places by Metro", icon: <Landmark className="h-4 w-4" /> },
                ].map((x, i) => (
                  <button
                    key={i}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 hover:bg-white px-4 py-3 flex items-center justify-between transition"
                  >
                    <span className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                      <span className="text-slate-500">{x.icon}</span>
                      {x.label}
                    </span>
                    <ExternalLink className="h-4 w-4 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="rounded-2xl bg-slate-900 text-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold">Share the Blog</h3>
              <p className="text-sm text-white/70 mt-1">
                Help commuters discover better routes & metro travel tips.
              </p>

              <div className="mt-4 flex gap-3">
                {["Facebook", "Twitter", "LinkedIn"].map((x) => (
                  <button
                    key={x}
                    className="flex-1 px-3 py-3 rounded-xl bg-white/10 hover:bg-white/15 transition text-sm font-bold"
                  >
                    {x}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SEO Footer Text */}
        <div className="mt-10 text-xs text-slate-500 leading-relaxed">
          {seoKeywords}
        </div>
      </div>

      {/* GLOBAL ANIMATION */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0px); }
        }
        .fade-up {
          opacity: 0;
          animation: fadeUp 450ms ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Blogs;

/* ==============================
   Components
============================== */

const FeaturedCard = ({ blog, idx, savedBlogs, onSave, formatDate }) => {
  const navigation = useNavigate()
  return (
    <div
      className="fade-up group rounded-3xl overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-md transition"
      style={{ animationDelay: `${Math.min(idx * 90, 450)}ms` }}
    >
      <div className="relative h-52">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white">
            Featured
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-white/90 text-xs font-semibold">
            {prettyCategory(blog.category)} • {blog.readTime}
          </div>
          <h3 className="text-white text-xl font-extrabold mt-1 line-clamp-2">
            {blog.title}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-slate-600 line-clamp-2">{blog.excerpt}</p>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <User className="h-3 w-3" /> {blog.author}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> {formatDate(blog.date)}
            </span>
          </div>
          <span className="inline-flex items-center gap-1">
            <Eye className="h-3 w-3" /> {blog.views}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {(blog.tags || []).slice(0, 3).map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-1">
              <ThumbsUp className="h-4 w-4" /> {blog.likes}
            </span>
            <span className="inline-flex items-center gap-1">
              <MessageCircle className="h-4 w-4" /> {blog.comments}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSave(blog.id)}
              className={`p-2 rounded-xl border transition ${
                savedBlogs.includes(blog.id)
                  ? "bg-red-50 border-red-100 text-red-600"
                  : "bg-white border-slate-200 text-slate-500 hover:text-red-600 hover:bg-red-50 hover:border-red-100"
              }`}
            >
              <Bookmark className="h-4 w-4" />
            </button>

            <button className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 transition">
              <Share2 className="h-4 w-4" />
            </button>

            <button onClick={()=>navigation(blog.link)} className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition inline-flex items-center gap-2">
              Read <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ blog, savedBlogs, onSave, formatDate }) => {
  return (
    <div className="group rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-md transition">
      <div className="relative h-44">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/90 text-slate-900 border border-white/70">
            {prettyCategory(blog.category)}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-extrabold text-slate-900 line-clamp-2 group-hover:text-blue-600 transition">
          {blog.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 line-clamp-2">{blog.excerpt}</p>

        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" /> {formatDate(blog.date)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock3 className="h-3 w-3" /> {blog.readTime}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="flex items-center gap-3 text-xs text-slate-600">
            <span className="inline-flex items-center gap-1">
              <Eye className="h-3 w-3" /> {blog.views}
            </span>
            <span className="inline-flex items-center gap-1">
              <ThumbsUp className="h-3 w-3" /> {blog.likes}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSave(blog.id)}
              className={`p-2 rounded-xl border transition ${
                savedBlogs.includes(blog.id)
                  ? "bg-red-50 border-red-100 text-red-600"
                  : "bg-white border-slate-200 text-slate-500 hover:text-red-600 hover:bg-red-50 hover:border-red-100"
              }`}
            >
              <Bookmark className="h-4 w-4" />
            </button>
            <button className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 transition">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <button className="mt-4 w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 font-bold text-slate-900 inline-flex items-center justify-center gap-2 transition">
          Read Article <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const CompactCard = ({ blog, savedBlogs, onSave, formatDate }) => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="flex gap-4 p-4">
        <div className="h-20 w-24 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 flex-shrink-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="text-xs text-slate-500">
            {prettyCategory(blog.category)} • {formatDate(blog.date)}
          </div>
          <div className="text-sm font-extrabold text-slate-900 mt-1 line-clamp-2">
            {blog.title}
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="text-xs text-slate-500 inline-flex items-center gap-2">
              <Eye className="h-3 w-3" /> {blog.views}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onSave(blog.id)}
                className={`p-2 rounded-xl border transition ${
                  savedBlogs.includes(blog.id)
                    ? "bg-red-50 border-red-100 text-red-600"
                    : "bg-white border-slate-200 text-slate-500 hover:text-red-600 hover:bg-red-50 hover:border-red-100"
                }`}
              >
                <Bookmark className="h-4 w-4" />
              </button>
              <button className="px-3 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition inline-flex items-center gap-1">
                Read <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const prettyCategory = (id) => {
  const map = {
    "metro-lines": "Metro Lines",
    "tourist-guide": "Tourist Guide",
    "route-planning": "Route Planning",
    "fare-tickets": "Fare & Tickets",
    safety: "Safety",
    all: "All Articles",
  };
  return map[id] || id;
};
