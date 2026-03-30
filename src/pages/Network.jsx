import React, { useMemo, useState, useEffect, useRef } from "react";
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import {
  Search,
  Filter,
  Train,
  MapPin,
  Navigation,
  Users,
  Route,
  Clock,
  ChevronRight,
  ArrowRight,
  Zap,
  TrendingUp,
  Calendar,
  Star,
  Download,
  ExternalLink,
  Sparkles,
  Menu,
  X,
} from "lucide-react";


const MetroLinesPage = () => {
 const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [hoveredLine, setHoveredLine] = useState(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    totalLines: 0,
    totalStations: 0,
    networkKm: 0,
    dailyRiders: 0,
  });
  
  const statsRef = useRef(null);
  const hasAnimated = useRef(false);

    useEffect(() => {
      // Update document title with keywords
      document.title = 'Delhi Metro Network | All 12 Lines, Stations Map, Route Planner, Timings | DMRC';
      
      // Meta Description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Complete Delhi Metro guide with all 12 lines, 252 stations, route planner, metro map, timings, fares, interchange stations, real-time updates. Plan your journey across Delhi NCR.');
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = 'Complete Delhi Metro guide with all 12 lines, 252 stations, route planner, metro map, timings, fares, interchange stations, real-time updates. Plan your journey across Delhi NCR.';
        document.getElementsByTagName('head')[0].appendChild(meta);
      }
      
      // Meta Keywords - 200+ high traffic Delhi Metro keywords
      const keywords = [
        'Delhi Metro', 'Delhi Metro lines', 'Delhi Metro stations', 'Delhi Metro map',
        'Delhi Metro route', 'Delhi Metro timings', 'Delhi Metro fare', 'DMRC',
        'Metro Delhi', 'Delhi Metro network', 'Delhi Metro guide', 'Delhi Metro planner',
        'Delhi Metro routes', 'Delhi Metro schedule', 'Delhi Metro ticket', 'Delhi Metro card',
        'Red Line Delhi Metro', 'Yellow Line Delhi Metro', 'Blue Line Delhi Metro',
        'Green Line Delhi Metro', 'Violet Line Delhi Metro', 'Pink Line Delhi Metro',
        'Magenta Line Delhi Metro', 'Orange Line Delhi Metro', 'Airport Express Delhi',
        'Grey Line Delhi', 'Aqua Line Noida', 'Rapid Metro Gurgaon',
        'Delhi Metro stations list', 'Delhi Metro nearest station', 'Delhi Metro distance',
        'Delhi Metro first train', 'Delhi Metro last train', 'Delhi Metro frequency',
        'Delhi Metro smart card', 'Delhi Metro token', 'Delhi Metro recharge',
        'Delhi Metro app', 'Delhi Metro official', 'Delhi Metro website',
        'Delhi Metro news', 'Delhi Metro update', 'Delhi Metro expansion',
        'Delhi Phase 4 Metro', 'Delhi Metro new lines', 'Delhi Metro under construction',
        'Delhi Metro interchange stations', 'Rajiv Chowk metro station',
        'Kashmere Gate metro', 'New Delhi metro station', 'Central Secretariat metro',
        'Hauz Khas metro station', 'Dwarka metro station', 'Noida metro',
        'Gurgaon metro', 'Faridabad metro', 'Ghaziabad metro',
        'Delhi Metro to Airport', 'IGI Airport metro', 'Delhi Metro airport express',
        'Delhi Metro tourist', 'Delhi Metro for tourists', 'Delhi Metro sightseeing',
        'Delhi Metro connectivity', 'Delhi Metro bus integration', 'Delhi Metro parking',
        'Delhi Metro facilities', 'Delhi Metro women coach', 'Delhi Metro security',
        'Delhi Metro CCTV', 'Delhi Metro wifi', 'Delhi Metro charging points',
        'Delhi Metro feeder bus', 'Delhi Metro last mile connectivity',
        'Delhi Metro real time', 'Delhi Metro live status', 'Delhi Metro delay',
        'Delhi Metro crowd', 'Delhi Metro peak hours', 'Delhi Metro off peak',
        'Delhi Metro Sunday', 'Delhi Metro holiday', 'Delhi Metro special train',
        'Delhi Metro museum', 'Delhi Metro history', 'Delhi Metro foundation',
        'Delhi Metro construction', 'Delhi Metro technology', 'Delhi Metro speed',
        'Delhi Metro coach', 'Delhi Metro train interior', 'Delhi Metro AC',
        'Delhi Metro cleanliness', 'Delhi Metro rating', 'Delhi Metro best',
        'Delhi Metro world class', 'Delhi Metro record', 'Delhi Metro longest',
        'Delhi Metro bridge', 'Delhi Metro underground', 'Delhi Metro elevated',
        'Delhi Metro tunnel', 'Delhi Metro design', 'Delhi Metro architecture',
        'Delhi Metro art', 'Delhi Metro stations design', 'Delhi Metro beautiful',
        'Delhi Metro photos', 'Delhi Metro video', 'Delhi Metro virtual tour',
        'Delhi Metro 3D map', 'Delhi Metro interactive map', 'Delhi Metro download map',
        'Delhi Metro PDF', 'Delhi Metro route map 2024', 'Delhi Metro future map',
        'Delhi Metro Phase 5', 'Delhi Metro extension', 'Delhi Metro new stations',
        'Delhi Metro Majlis Park', 'Delhi Metro Shiv Vihar', 'Delhi Metro Botanical Garden',
        'Delhi Metro Noida Sector 62', 'Delhi Metro Vaishali', 'Delhi Metro Dwarka Sector 21',
        'Delhi Metro Najafgarh', 'Delhi Metro Badarpur', 'Delhi Metro Raja Nahar Singh',
        'Delhi Metro Ballabhgarh', 'Delhi Metro Bahadurgarh', 'Delhi Metro Mundka',
        'Delhi Metro Punjabi Bagh', 'Delhi Metro Ashok Park', 'Delhi Metro Kirti Nagar',
        'Delhi Metro Janakpuri', 'Delhi Metro Uttam Nagar', 'Delhi Metro Nawada',
        'Delhi Metro Dwarka Mor', 'Delhi Metro Dashrath Puri', 'Delhi Metro Palam',
        'Delhi Metro Sadar Bazaar', 'Delhi Metro Pul Bangash', 'Delhi Metro Pratap Nagar',
        'Delhi Metro Shastri Nagar', 'Delhi Metro Inderlok', 'Delhi Metro Kanhiya Nagar',
        'Delhi Metro Keshav Puram', 'Delhi Metro Netaji Subhash Place', 'Delhi Metro Kohat Enclave',
        'Delhi Metro Pitampura', 'Delhi Metro Rohini', 'Delhi Metro Rithala',
        'Delhi Metro Dilshad Garden', 'Delhi Metro Jhilmil', 'Delhi Metro Mansarovar Park',
        'Delhi Metro Shahdara', 'Delhi Metro Welcome', 'Delhi Metro Seelampur',
        'Delhi Metro Shastri Park', 'Delhi Metro Vishwa Vidyalaya', 'Delhi Metro Vidhan Sabha',
        'Delhi Metro Chandni Chowk', 'Delhi Metro Chawri Bazaar', 'Delhi Metro Patel Chowk',
        'Delhi Metro Udyog Bhawan', 'Delhi Metro Lok Kalyan Marg', 'Delhi Metro Jorbagh',
        'Delhi Metro Dilli Haat INA', 'Delhi Metro South Extension', 'Delhi Metro Lajpat Nagar',
        'Delhi Metro Vinobapuri', 'Delhi Metro Ashram', 'Delhi Metro Sarai Kale Khan',
        'Delhi Metro Hazrat Nizamuddin', 'Delhi Metro Jangpura', 'Delhi Metro Bhikaji Cama Place',
        'Delhi Metro Munirka', 'Delhi Metro Vasant Vihar', 'Delhi Metro Shankar Vihar',
        'Delhi Metro Delhi Aerocity', 'Delhi Metro Dhaula Kuan', 'Delhi Metro Naraina Vihar',
        'Delhi Metro Mayapuri', 'Delhi Metro Rajouri Garden', 'Delhi Metro Tagore Garden',
        'Delhi Metro Subhash Nagar', 'Delhi Metro Tilak Nagar', 'Delhi Metro Janakpuri East',
        'Delhi Metro Hari Nagar', 'Delhi Metro Kailash Colony', 'Delhi Metro Nehru Place',
        'Delhi Metro Kalkaji Mandir', 'Delhi Metro Govind Puri', 'Delhi Metro Harkesh Nagar',
        'Delhi Metro Jasola Apollo', 'Delhi Metro Sarita Vihar', 'Delhi Metro Mohan Estate',
        'Delhi Metro Tughlakabad', 'Delhi Metro Badarpur Border', 'Delhi Metro Sarai',
        'Delhi Metro NHPC Chowk', 'Delhi Metro Mewala Maharajpur', 'Delhi Metro Sector 28',
        'Delhi Metro Badkhal Mor', 'Delhi Metro Old Faridabad', 'Delhi Metro Neelam Chowk',
        'Delhi Metro Bata Chowk', 'Delhi Metro Escorts Mujesar', 'Delhi Metro Sant Surdas',
        'Delhi Metro Raja Nahar Singh', 'Delhi Metro Metro to Gurugram',
        'Delhi Metro to Noida', 'Delhi Metro to Faridabad', 'Delhi Metro to Ghaziabad',
        'Delhi Metro to Bahadurgarh', 'Delhi Metro travel guide', 'Delhi Metro tips',
        'Delhi Metro hacks', 'Delhi Metro save money', 'Delhi Metro cheapest route',
        'Delhi Metro fastest route', 'Delhi Metro avoid crowd', 'Delhi Metro best time',
        'Delhi Metro tourist places', 'Delhi Metro to India Gate', 'Delhi Metro to Red Fort',
        'Delhi Metro to Qutub Minar', 'Delhi Metro to Lotus Temple', 'Delhi Metro to Akshardham',
        'Delhi Metro to Humayun Tomb', 'Delhi Metro to Chandni Chowk', 'Delhi Metro to Connaught Place',
        'Delhi Metro to Sarojini Nagar', 'Delhi Metro to Lajpat Nagar', 'Delhi Metro to Karol Bagh',
        'Delhi Metro to Paharganj', 'Delhi Metro to Old Delhi', 'Delhi Metro to New Delhi',
        'Delhi Metro to South Delhi', 'Delhi Metro to West Delhi', 'Delhi Metro to North Delhi',
        'Delhi Metro to East Delhi', 'Delhi Metro to Central Delhi', 'Delhi Metro NCR',
        'Delhi Metro National Capital Region', 'Delhi Metro urban transport',
        'Delhi Metro sustainable transport', 'Delhi Metro green initiative',
        'Delhi Metro solar power', 'Delhi Metro water conservation', 'Delhi Metro eco-friendly',
        'Delhi Metro awards', 'Delhi Metro recognition', 'Delhi Metro UN award',
        'Delhi Metro best metro India', 'Delhi Metro vs Mumbai Metro',
        'Delhi Metro vs Kolkata Metro', 'Delhi Metro vs Bangalore Metro',
        'Delhi Metro comparison', 'Delhi Metro facts', 'Delhi Metro statistics',
        'Delhi Metro data', 'Delhi Metro ridership 2024', 'Delhi Metro annual report',
        'Delhi Metro financial', 'Delhi Metro revenue', 'Delhi Metro profit',
        'Delhi Metro investment', 'Delhi Metro government', 'Delhi Metro union ministry',
        'Delhi Metro helpline', 'Delhi Metro customer care', 'Delhi Metro complaint',
        'Delhi Metro feedback', 'Delhi Metro suggestion', 'Delhi Metro improvement',
        'Delhi Metro future plans', 'Delhi Metro vision 2030', 'Delhi Metro master plan',
        'Delhi Metro Regional Plan', 'Delhi Metro smart city', 'Delhi Metro digital India',
        'Delhi Metro Make in India', 'Delhi Metro indigenous', 'Delhi Metro made in India',
        'Delhi Metro workforce', 'Delhi Metro employees', 'Delhi Metro jobs',
        'Delhi Metro career', 'Delhi Metro recruitment', 'Delhi Metro training',
        'Delhi Metro women employees', 'Delhi Metro safety record', 'Delhi Metro accident',
        'Delhi Metro incident', 'Delhi Metro maintenance', 'Delhi Metro operation',
        'Delhi Metro control room', 'Delhi Metro headquarters', 'Delhi Metro office',
        'Metro Delhi DMRC', 'Delhi Metro official website', 'Delhi Metro online',
        'Delhi Metro digital', 'Delhi Metro app download', 'Delhi Metro mobile ticket'
      ].join(', ');
      
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.getElementsByTagName('head')[0].appendChild(meta);
      }
      
      // Canonical URL
      const linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = window.location.href;
        document.head.appendChild(link);
      }
      
      // Open Graph Tags for Social Media
      const ogTags = [
        { property: 'og:title', content: 'Delhi Metro Network - Complete Guide to All Lines & Stations' },
        { property: 'og:description', content: 'Explore Delhi Metro with interactive map, all 12 lines, 252 stations, route planner, timings, fares and real-time updates.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: window.location.href },
        { property: 'og:image', content: 'https://mydelhimetro.in/delhi-metro-og-image.jpg' },
        { property: 'og:site_name', content: 'Delhi Metro Guide' },
      ];
      
      ogTags.forEach(tag => {
        const meta = document.querySelector(`meta[property="${tag.property}"]`);
        if (meta) {
          meta.setAttribute('content', tag.content);
        } else {
          const newMeta = document.createElement('meta');
          newMeta.setAttribute('property', tag.property);
          newMeta.content = tag.content;
          document.head.appendChild(newMeta);
        }
      });
      
      // Twitter Card Tags
      const twitterTags = [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Delhi Metro Network - All Lines & Stations Map' },
        { name: 'twitter:description', content: 'Complete Delhi Metro guide with interactive map, route planner and real-time information.' },
        { name: 'twitter:image', content: 'https://mydelhimetro.in/delhi-metro-twitter-card.jpg' },
        { name: 'twitter:site', content: '@DelhiMetro' },
      ];
      
      twitterTags.forEach(tag => {
        const meta = document.querySelector(`meta[name="${tag.name}"]`);
        if (meta) {
          meta.setAttribute('content', tag.content);
        } else {
          const newMeta = document.createElement('meta');
          newMeta.setAttribute('name', tag.name);
          newMeta.content = tag.content;
          document.head.appendChild(newMeta);
        }
      });
      
      // JSON-LD Structured Data for better SEO
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Delhi Metro Network Guide",
        "description": "Complete guide to Delhi Metro with all lines, stations, route planner and real-time information",
        "url": window.location.href,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${window.location.href}?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        },
        "publisher": {
          "@type": "Organization",
          "name": "My Delhi Metro",
          "url": "https://mydelhimetro.in"
        }
      });
      document.head.appendChild(script);
      
      // Intersection Observer for counter animation
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated.current) {
              hasAnimated.current = true;
              animateCounters();
            }
          });
        },
        { threshold: 0.3 }
      );
      
      if (statsRef.current) {
        observer.observe(statsRef.current);
      }
      
      return () => {
        if (statsRef.current) {
          observer.unobserve(statsRef.current);
        }
      };
    }, []);



   // Counter animation function
  const animateCounters = () => {
    const totalLines = 12;
    const totalStations = 252;
    const networkKm = 390;
    const dailyRiders = 6.2;
    
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    
    let currentLines = 0;
    let currentStations = 0;
    let currentKm = 0;
    let currentRiders = 0;
    
    const linesStep = totalLines / steps;
    const stationsStep = totalStations / steps;
    const kmStep = networkKm / steps;
    const ridersStep = dailyRiders / steps;
    
    const counterInterval = setInterval(() => {
      currentLines += linesStep;
      currentStations += stationsStep;
      currentKm += kmStep;
      currentRiders += ridersStep;
      
      setAnimatedStats({
        totalLines: Math.min(Math.floor(currentLines), totalLines),
        totalStations: Math.min(Math.floor(currentStations), totalStations),
        networkKm: Math.min(Math.floor(currentKm), networkKm),
        dailyRiders: currentRiders >= dailyRiders ? dailyRiders : parseFloat(currentRiders.toFixed(1)),
      });
      
      if (currentLines >= totalLines && 
          currentStations >= totalStations && 
          currentKm >= networkKm && 
          currentRiders >= dailyRiders) {
        clearInterval(counterInterval);
        setAnimatedStats({
          totalLines: totalLines,
          totalStations: totalStations,
          networkKm: networkKm,
          dailyRiders: dailyRiders,
        });
      }
    }, stepDuration);
  };

  // ✅ 12 Lines with enhanced data (same as before)
  const metroLines = useMemo(
    () => [
      {
        id: "red",
        name: "Red Line",
        lineNo: 1,
        status: "Active",
        statusColor: "bg-emerald-500/10 text-emerald-600",
        dot: "bg-red-500",
        gradient: "from-red-500 to-red-600",
        stations: 32,
        km: 34.5,
        opened: 2002,
        hours: "6AM–11PM",
        route: "Rithala → Dilshad Garden",
        popularRoutes: [
          { from: "Kashmere Gate", to: "Dilshad Garden", mins: 45 },
          { from: "Rithala", to: "Azadpur", mins: 25 },
        ],
        interchanges: 3,
        trainsPerHour: 12,
        color: "#FF4B4B",
      },
      {
        id: "yellow",
        name: "Yellow Line",
        lineNo: 2,
        status: "Active",
        statusColor: "bg-emerald-500/10 text-emerald-600",
        dot: "bg-yellow-500",
        gradient: "from-yellow-500 to-amber-500",
        stations: 37,
        km: 49.3,
        opened: 2004,
        hours: "6AM–11PM",
        route: "Samaypur Badli → Millennium City Centre Gurugram",
        popularRoutes: [
          { from: "New Delhi", to: "Rajiv Chowk", mins: 5 },
          { from: "Hauz Khas", to: "IFFCO Chowk", mins: 35 },
        ],
        interchanges: 4,
        trainsPerHour: 15,
        color: "#FFD700",
      },
     
     
      {
        id: "blue",
        name: "Blue Line",
        lineNo: 3,
        status: "Active",
        statusColor: "bg-emerald-500/10 text-emerald-600",
        dot: "bg-blue-500",
        gradient: "from-blue-500 to-blue-600",
        stations: 50,
        km: 56.6,
        opened: 2005,
        hours: "6AM–11PM",
        route: "Dwarka Sector 21 → Noida Electronic City",
        popularRoutes: [
          { from: "Rajiv Chowk", to: "Noida Electronic City", mins: 50 },
          { from: "Dwarka", to: "Karol Bagh", mins: 40 },
        ],
        interchanges: 5,
        trainsPerHour: 18,
        color: "#1E90FF",
      },
      {
        id: "blue-branch",
        name: "Blue Branch Line",
        lineNo: "3B",
        status: "Active",
        statusColor: "bg-emerald-500/10 text-emerald-600",
        dot: "bg-sky-400",
        gradient: "from-sky-400 to-cyan-500",
        stations: 8,
        km: 8.2,
        opened: 2010,
        hours: "6AM–11PM",
        route: "Yamuna Bank → Vaishali",
        popularRoutes: [{ from: "Yamuna Bank", to: "Vaishali", mins: 12 }],
        interchanges: 1,
        trainsPerHour: 8,
        color: "#00BFFF",
      },
      {
        id: "green",
        name: "Green Line",
        lineNo: 5,
        status: "Active",
        statusColor: "bg-emerald-500/10 text-emerald-600",
        dot: "bg-green-500",
        gradient: "from-green-500 to-emerald-600",
        stations: 23,
        km: 28.8,
        opened: 2010,
        hours: "6AM–11PM",
        route: "Kirti Nagar → Brigadier Hoshiar Singh",
        popularRoutes: [{ from: "Kirti Nagar", to: "Punjabi Bagh", mins: 12 }],
        interchanges: 2,
        trainsPerHour: 10,
        color: "#32CD32",
      },
      {
        id: "violet",
        name: "Violet Line",
        lineNo: 6,
        status: "Active",
        statusColor: "bg-emerald-500/10 text-emerald-600",
        dot: "bg-violet-500",
        gradient: "from-violet-500 to-purple-600",
        stations: 34,
        km: 46.6,
        opened: 2010,
        hours: "6AM–11PM",
        route: "Kashmere Gate → Raja Nahar Singh Ballabhgarh",
        popularRoutes: [
          { from: "Central Secretariat", to: "Kashmere Gate", mins: 18 },
        ],
        interchanges: 3,
        trainsPerHour: 12,
        color: "#8A2BE2",
      },
      {
        id: "pink",
        name: "Pink Line",
        lineNo: 7,
        status: "Active",
        statusColor: "bg-emerald-500/10 text-emerald-600",
        dot: "bg-pink-500",
        gradient: "from-pink-500 to-rose-500",
        stations: 38,
        km: 59.0,
        opened: 2018,
        hours: "6AM–11PM",
        route: "Majlis Park → Shiv Vihar",
        popularRoutes: [{ from: "South Campus", to: "Lajpat Nagar", mins: 10 }],
        interchanges: 4,
        trainsPerHour: 14,
        color: "#FF69B4",
      },
      {
        id: "magenta",
        name: "Magenta Line",
        lineNo: 8,
        status: "Active",
        statusColor: "bg-emerald-500/10 text-emerald-600",
        dot: "bg-fuchsia-500",
        gradient: "from-fuchsia-500 to-purple-600",
        stations: 25,
        km: 37.5,
        opened: 2017,
        hours: "6AM–11PM",
        route: "Janakpuri West → Botanical Garden",
        popularRoutes: [
          { from: "Hauz Khas", to: "Botanical Garden", mins: 25 },
        ],
        interchanges: 3,
        trainsPerHour: 12,
        color: "#FF00FF",
      },
      {
        id: "orange",
        name: "Orange Line",
        lineNo: "AE",
        status: "Active",
        statusColor: "bg-emerald-500/10 text-emerald-600",
        dot: "bg-orange-500",
        gradient: "from-orange-500 to-amber-500",
        stations: 7,
        km: 22.7,
        opened: 2011,
        hours: "6AM–11PM",
        route: "New Delhi → Yashobhoomi Dwarka Sector 25",
        popularRoutes: [{ from: "IGI Airport", to: "New Delhi", mins: 20 }],
        tag: "Airport Express",
        interchanges: 2,
        trainsPerHour: 6,
        color: "#FF8C00",
      },
      {
        id: "grey",
        name: "Grey Line",
        lineNo: 9,
        status: "Active",
        statusColor: "bg-emerald-500/10 text-emerald-600",
        dot: "bg-gray-500",
        gradient: "from-gray-500 to-slate-600",
        stations: 4,
        km: 5.2,
        opened: 2019,
        hours: "6AM–11PM",
        route: "Dwarka → Dhansa Bus Stand",
        popularRoutes: [{ from: "Dwarka", to: "Najafgarh", mins: 12 }],
        interchanges: 1,
        trainsPerHour: 8,
        color: "#808080",
      },
      {
        id: "aqua",
        name: "Aqua Line",
        lineNo: "NM",
        status: "Active",
        statusColor: "bg-emerald-500/10 text-emerald-600",
        dot: "bg-cyan-400",
        gradient: "from-cyan-400 to-teal-500",
        stations: 21,
        km: 29.7,
        opened: 2019,
        hours: "6AM–11PM",
        route: "Noida Sector 51 → Depot Station",
        popularRoutes: [{ from: "Noida Sector 51", to: "Noida Sector 76", mins: 18 }],
        interchanges: 1,
        trainsPerHour: 10,
        color: "#00FFFF",
      },
      {
        id: "rapid",
        name: "Rapid Metro",
        lineNo: "RM",
        status: "Active",
        statusColor: "bg-emerald-500/10 text-emerald-600",
        dot: "bg-amber-500",
        gradient: "from-amber-500 to-yellow-500",
        stations: 7,
        km: 11.7,
        opened: 2013,
        hours: "6AM–11PM",
        route: "Sikanderpur → Phase 3",
        popularRoutes: [{ from: "Sikanderpur", to: "Phase 3", mins: 15 }],
        interchanges: 1,
        trainsPerHour: 8,
        color: "#FFB347",
      },
    ],
    []
  );

  // Enhanced stats with animations
  const stats = useMemo(() => {
    return [
      {
        bg: "bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700",
        icon: <Sparkles className="h-6 w-6" />,
        value: `${animatedStats.totalLines}`,
        label: "Metro Lines",
        description: "Operational lines",
        delay: "delay-0",
        suffix: "",
        isAnimated: true,
      },
      {
        bg: "bg-gradient-to-br from-emerald-500 via-emerald-600 to-green-700",
        icon: <Train className="h-6 w-6" />,
        value: `${animatedStats.totalStations}`,
        label: "Total Stations",
        description: "Across NCR",
        delay: "delay-100",
        suffix: "",
        isAnimated: true,
      },
      {
        bg: "bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-700",
        icon: <Navigation className="h-6 w-6" />,
        value: `${animatedStats.networkKm}`,
        label: "KM Network",
        description: "Track length",
        delay: "delay-200",
        suffix: "+",
        isAnimated: true,
      },
      {
        bg: "bg-gradient-to-br from-orange-500 via-red-500 to-rose-600",
        icon: <Users className="h-6 w-6" />,
        value: `${animatedStats.dailyRiders}`,
        label: "Daily Riders",
        description: "Passengers per day",
        delay: "delay-300",
        suffix: "M+",
        isAnimated: true,
      },
    ];
  }, [animatedStats]);

  const filteredLines = useMemo(() => {
    let list = [...metroLines];

    // Search
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          String(l.lineNo).toLowerCase().includes(q) ||
          l.route.toLowerCase().includes(q)
      );
    }

    // Filters
    switch (filter) {
      case "highTraffic":
        list = list.sort((a, b) => b.trainsPerHour - a.trainsPerHour);
        break;
      case "recentlyOpened":
        list = list.sort((a, b) => b.opened - a.opened);
        break;
      case "longRoutes":
        list = list.sort((a, b) => b.km - a.km);
        break;
      case "mostInterchanges":
        list = list.sort((a, b) => b.interchanges - a.interchanges);
        break;
      default:
        break;
    }

    return list;
  }, [metroLines, query, filter]);


  const filterTabs = [
    { key: "all", label: "All", icon: <Sparkles className="h-4 w-4" />, fullLabel: "All Lines" },
    { key: "highTraffic", label: "Traffic", icon: <Zap className="h-4 w-4" />, fullLabel: "High Traffic" },
    { key: "recentlyOpened", label: "Recent", icon: <Calendar className="h-4 w-4" />, fullLabel: "Recently Opened" },
    { key: "longRoutes", label: "Long", icon: <Route className="h-4 w-4" />, fullLabel: "Long Routes" },
    { key: "mostInterchanges", label: "Connect", icon: <TrendingUp className="h-4 w-4" />, fullLabel: "Most Interchanges" },
  ];

  // Mobile filter handler
  const handleFilterClick = (key) => {
    setFilter(key);
    setMobileFilterOpen(false);
  };

    // Update the stats section to use the animated values
  const StatsSection = () => (
    <div 
      ref={statsRef}
      className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-12 px-1"
    >
      {stats.map((s, i) => (
        <div
          key={i}
          className={`group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 ${s.delay} animate-slide-up`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
          <div className={`${s.bg} p-4 sm:p-5 md:p-6 text-white relative z-10`}>
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                {React.cloneElement(s.icon, { className: "h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" })}
              </div>
              <span className="text-xs sm:text-sm font-medium opacity-90">{s.label}</span>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-none mb-1 group-hover:scale-105 transition-transform duration-300">
              {s.value}
              <span className="text-lg sm:text-xl md:text-2xl">{s.suffix}</span>
            </div>
            <div className="text-xs sm:text-sm opacity-80">{s.description}</div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      ))}
    </div>
  );

 

  // Add this new component for additional SEO content
  const SEOContentSection = () => (
    <div className="mt-8 mb-8">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          Delhi Metro - World Class Urban Transport System
        </h2>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-700 text-sm mb-4">
            The <strong>Delhi Metro</strong> is a <strong>rapid transit system</strong> serving Delhi and its satellite cities of 
            <strong>Gurgaon, Noida, Ghaziabad, Faridabad, and Bahadurgarh</strong> in the National Capital Region of India. 
            Operated by the <strong>My Delhi Metro (DMRC)</strong>, it's one of the largest and busiest metro networks in the world.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Key Features:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span><strong>12 Operational Lines</strong> covering 390+ km with 252 stations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span><strong>Airport Express Line</strong> connecting New Delhi Railway Station to IGI Airport</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span><strong>Women-Only Coaches</strong> in every train for enhanced safety</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span><strong>Free WiFi</strong> at all stations</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Popular Destinations:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span><strong>Historical Sites:</strong> Red Fort, Qutub Minar, Humayun's Tomb</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span><strong>Shopping Hubs:</strong> Connaught Place, Chandni Chowk, Sarojini Nagar</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span><strong>Business Districts:</strong> Gurgaon Cyber City, Noida Sector 62</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span><strong>Airport Connectivity:</strong> IGI Airport Terminal 3 and Terminal 1</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 mb-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Operating Hours & Frequency:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-sm text-slate-600 mb-1">First Train</div>
                <div className="text-2xl font-bold text-blue-600">5:00 AM</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-sm text-slate-600 mb-1">Last Train</div>
                <div className="text-2xl font-bold text-blue-600">11:30 PM</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-sm text-slate-600 mb-1">Peak Frequency</div>
                <div className="text-2xl font-bold text-blue-600">2-3 mins</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


  return (
    <>
      <SEO
        title="Delhi Metro Network Map | Metro Lines, Stations & Routes"
        description="Explore Delhi Metro's 12 lines network map showing all stations across Red, Blue, Yellow, Green, Pink, Purple, Magenta, Grey, Aqua, Orange, Silver and Green lines."
        keywords="Delhi Metro map, metro lines, metro network, metro stations, metro routes, line map"
        breadcrumbs={[{ name: 'Network', url: '/network' }]}
      />
      <Breadcrumb items={[{ name: 'Network', url: '/network' }]} />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_50%,#f093fb_100%)] opacity-5"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="md:w-[95%] mx-auto px-3 sm:px-4 py-6 sm:py-10 relative">
        {/* Header with Responsive Typography */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <div className="relative inline-block mb-4 sm:mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Train className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
          </div>

              <h1 className="mb-3">
                <span className="block text-3xl italic md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 mb-1 leading-tight tracking-tight [-webkit-text-stroke:2px_rgba(255,255,255,0.1)]">
                My Delhi Metro Network
              </span>
                <p className="block text-xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-0 italic">
                
                  Explore all
                  
                  <span className="font-bold text-blue-600"> 12 metro lines </span> 
                  covering the entire NCR region. 
            Discover detailed information about each line, stations, and connectivity across
            <span className="font-bold text-emerald-600"> 252 stations</span>.
                </p>
            </h1>

       
        </div>

           {/* <StatsSection /> */}

        {/* Stats with Responsive Grid */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-12 px-1"> */}
          <div 
      ref={statsRef}
      className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-12 px-1"
    >
      {stats.map((s, i) => (
        <div
          key={i}
          className={`group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 ${s.delay} animate-slide-up`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
          <div className={`${s.bg} p-4 sm:p-5 md:p-6 text-white relative z-10`}>
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                {React.cloneElement(s.icon, { className: "h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" })}
              </div>
              <span className="text-xs sm:text-sm font-medium opacity-90">{s.label}</span>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-none mb-1 group-hover:scale-105 transition-transform duration-300">
              {s.value}
              <span className="text-lg sm:text-xl md:text-2xl">{s.suffix}</span>
            </div>
            <div className="text-xs sm:text-sm opacity-80">{s.description}</div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      ))}
    </div>
        {/* </div> */}

        {/* Search & Filter Bar - Responsive */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-white/20 p-4 sm:p-5 md:p-6 mb-8 sm:mb-10 transform hover:scale-[1.005] transition-all duration-300 mx-1">
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
            {/* Enhanced Search */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg sm:rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center">
                <Search className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 group-hover:text-blue-500 transition-colors duration-300 z-10" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search lines, stations, or routes..."
                  className="w-full pl-9 sm:pl-12 pr-4 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl border-2 border-slate-100 bg-white focus:border-blue-500 focus:ring-2 sm:focus:ring-4 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-sm sm:text-base text-slate-700 placeholder-slate-400"
                />
              </div>
            </div>

            {/* Filter Tabs - Fixed Height with Responsive Layout */}
            <div className="relative">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="sm:hidden w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg transition-all duration-300"
              >
                {mobileFilterOpen ? (
                  <>
                    <X className="h-4 w-4" />
                    <span>Close Filters</span>
                  </>
                ) : (
                  <>
                    <Filter className="h-4 w-4" />
                    <span>Show Filters</span>
                  </>
                )}
              </button>

              {/* Desktop Filter Tabs */}
              <div className="hidden sm:flex flex-wrap gap-2">
                {filterTabs.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setFilter(t.key)}
                    className={`group flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl font-medium transition-all duration-300 min-h-[44px] sm:min-h-[48px] flex-1 sm:flex-initial ${
                      filter === t.key
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                        : "bg-white/80 text-slate-700 hover:bg-slate-50 hover:shadow-md border border-slate-100"
                    }`}
                  >
                    <div className={`transition-transform duration-300 ${
                      filter === t.key ? "rotate-12" : "group-hover:rotate-12"
                    }`}>
                      {React.cloneElement(t.icon, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4" })}
                    </div>
                    <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                      <span className="sm:hidden">{t.label}</span>
                      <span className="hidden sm:inline">{t.fullLabel}</span>
                    </span>
                  </button>
                ))}
              </div>

              {/* Mobile Filter Dropdown with Animation */}
              <div className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                mobileFilterOpen ? 'max-h-96 mt-3' : 'max-h-0'
              }`}>
                <div className="grid grid-cols-2 gap-2 bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-white/30">
                  {filterTabs.map((t) => (
                    <button
                      key={t.key}
                      onClick={() => handleFilterClick(t.key)}
                      className={`group flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl font-medium transition-all duration-300 min-h-[80px] transform hover:scale-105 active:scale-95 ${
                        filter === t.key
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                          : "bg-white text-slate-700 hover:bg-slate-50 hover:shadow-md border border-slate-100"
                      }`}
                    >
                      <div className={`p-2 rounded-lg transition-all duration-300 ${
                        filter === t.key 
                          ? "bg-white/30" 
                          : "bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                      }`}>
                        {React.cloneElement(t.icon, { 
                          className: `h-5 w-5 ${filter === t.key ? 'text-white' : 'text-blue-600'}`
                        })}
                      </div>
                      <span className="text-xs font-medium text-center">
                        {t.fullLabel}
                      </span>
                      {filter === t.key && (
                        <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metro Lines Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16 px-1">
          {filteredLines.map((line) => (
            <div
              key={line.id}
              className="group relative"
              onMouseEnter={() => setHoveredLine(line.id)}
              onMouseLeave={() => setHoveredLine(null)}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${line.gradient} rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
              
              {/* Card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/50 shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-0.5 sm:hover:-translate-y-1 active:scale-95 sm:active:scale-100">
                {/* Header with Animated Background */}
                <div className={`relative h-1.5 sm:h-2 bg-gradient-to-r ${line.gradient} group-hover:h-2 sm:group-hover:h-3 transition-all duration-300`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>

                <div className="p-4 sm:p-5">
                  {/* Line Header */}
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                        <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${line.dot} ring-2 sm:ring-4 ring-white shadow-md sm:shadow-lg`}></div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors duration-300 truncate">
                          {line.name}
                        </h3>
                        <span className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold ${line.statusColor} backdrop-blur-sm border border-white/30 whitespace-nowrap`}>
                          {line.status}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-2 sm:gap-3 overflow-hidden">
                        <span className="truncate">Line {line.lineNo}</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full flex-shrink-0"></span>
                        <span className="truncate">Operational</span>
                        {line.tag && (
                          <>
                            <span className="w-1 h-1 bg-slate-300 rounded-full flex-shrink-0"></span>
                            <span className="font-medium text-blue-600 truncate">{line.tag}</span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {/* Stations Badge */}
                    <div className="text-center ml-2 flex-shrink-0">
                      <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                        {line.stations}
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Stations</div>
                    </div>
                  </div>

                  {/* Route */}
                  <div className="mb-4 sm:mb-5">
                    <div className="flex items-start gap-2 text-slate-700 mb-3">
                      <Route className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 text-slate-400 group-hover:text-blue-500 transition-colors duration-300 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">Route</div>
                        <div className="font-semibold text-xs sm:text-sm truncate">{line.route}</div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="text-center p-1.5 sm:p-2 bg-gradient-to-br from-slate-50 to-white rounded-lg border border-slate-100 group-hover:border-blue-100 transition-colors duration-300">
                        <div className="text-[10px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">Length</div>
                        <div className="font-bold text-sm sm:text-base text-slate-900">{line.km} km</div>
                      </div>
                      <div className="text-center p-1.5 sm:p-2 bg-gradient-to-br from-slate-50 to-white rounded-lg border border-slate-100 group-hover:border-blue-100 transition-colors duration-300">
                        <div className="text-[10px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">Opened</div>
                        <div className="font-bold text-sm sm:text-base text-slate-900">{line.opened}</div>
                      </div>
                      <div className="text-center p-1.5 sm:p-2 bg-gradient-to-br from-slate-50 to-white rounded-lg border border-slate-100 group-hover:border-blue-100 transition-colors duration-300">
                        <div className="text-[10px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">Trains/hr</div>
                        <div className="font-bold text-sm sm:text-base text-slate-900">{line.trainsPerHour}</div>
                      </div>
                    </div>

                    {/* Popular Routes */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <div className="text-[10px] sm:text-xs font-medium text-slate-500">Popular Routes</div>
                        <div className="text-[10px] sm:text-xs font-medium text-blue-600">Avg. Time</div>
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        {line.popularRoutes.map((r, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-1.5 sm:p-2 rounded-lg bg-gradient-to-r from-white to-slate-50 hover:from-blue-50 hover:to-white transition-all duration-300"
                          >
                            <div className="text-xs sm:text-sm text-slate-700 truncate">
                              <span className="font-medium">{r.from}</span>
                              <span className="mx-1 sm:mx-2 text-slate-300">→</span>
                              <span className="font-medium">{r.to}</span>
                            </div>
                            <div className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
                              <Clock className="h-3 w-3 text-slate-400" />
                              <span className="font-bold text-blue-600 text-xs sm:text-sm">{r.mins} min</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="group/btn w-full flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-slate-100 to-white border border-slate-200 hover:border-blue-300 hover:from-blue-50 hover:to-white text-slate-800 hover:text-blue-700 font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-md sm:hover:shadow-lg active:scale-95">
                    <span>View Details</span>
                    <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover/btn:translate-x-0.5 sm:group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Count */}
        {query && (
          <div className="text-center mb-8 px-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50">
              <span className="text-sm sm:text-base text-slate-700">
                Found <span className="font-bold text-blue-600">{filteredLines.length}</span> lines matching "{query}"
              </span>
            </div>
          </div>
        )}

        {/* Additional Sections - Responsive */}
        <div className="space-y-3 sm:space-y-8 md:space-y-10 px-1">
          {/* Popular Interchange Stations */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-md sm:shadow-md border border-white/20 p-2 sm:p-2 md:p-2 transform hover:scale-[1.005] transition-all duration-300">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="p-1.5 sm:p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">Major Interchange Stations</h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">Connectivity hubs across the network</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {[
                { name: "Rajiv Chowk", lines: 2, dailyRiders: "450k+" },
                { name: "New Delhi", lines: 2, dailyRiders: "380k+" },
                { name: "Kashmere Gate", lines: 3, dailyRiders: "520k+" },
                { name: "Central Secretariat", lines: 2, dailyRiders: "410k+" },
                { name: "Hauz Khas", lines: 2, dailyRiders: "320k+" },
                { name: "Botanical Garden", lines: 2, dailyRiders: "290k+" },
                { name: "Dwarka Sector 21", lines: 2, dailyRiders: "250k+" },
                { name: "Anand Vihar ISBT", lines: 2, dailyRiders: "310k+" },
              ].map((station) => (
                <div
                  key={station.name}
                  className="group relative overflow-hidden rounded-lg sm:rounded-xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-3 sm:p-4 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full"></div>
                  <div className="relative">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="p-1.5 sm:p-2 bg-blue-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-blue-600" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-sm sm:text-base text-slate-900 truncate">{station.name}</div>
                        <div className="text-xs text-blue-600 font-medium">
                          {station.lines} Lines
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-slate-500">
                      <span className="font-medium text-slate-700">{station.dailyRiders}</span> daily
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Download Section - Responsive */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-5 sm:p-6 md:p-8 text-white overflow-hidden">
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Network Map</h2>
                  </div>
                  <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                    Get the complete Delhi Metro map in high resolution. Perfect for planning journeys.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button className="group/btn inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white text-blue-700 px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base">
                      <Download className="h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:animate-bounce" />
                      Download PDF
                    </button>
                    <button className="group/btn inline-flex items-center justify-center gap-1.5 sm:gap-2 border-2 border-white/50 text-white px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-bold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base">
                      <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                      Interactive Map
                    </button>
                  </div>
                </div>
                <div className="hidden lg:block relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/20">
                    <div className="text-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-white/20 to-white/10 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                      </div>
                      <p className="text-blue-100 text-sm">
                        Real-time train positions and station info
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2">
            {[
              { 
                title: "Network Growth", 
                value: "20+ Years", 
                desc: "Expansion since 2002",
                icon: <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />,
                color: "from-blue-500 to-cyan-500"
              },
              { 
                title: "Service Hours", 
                value: "5AM–11PM", 
                desc: "Daily operations",
                icon: <Clock className="h-4 w-4 sm:h-5 sm:w-5" />,
                color: "from-emerald-500 to-green-500"
              },
              { 
                title: "User Rating", 
                value: "4.2/5", 
                desc: "Satisfaction score",
                icon: <Star className="h-4 w-4 sm:h-5 sm:w-5" />,
                color: "from-amber-500 to-orange-500"
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl sm:rounded-lg bg-white/80 backdrop-blur-sm border border-white/50 p-4 sm:p-2 md:p-6 hover:shadow-lg sm:hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 sm:hover:-translate-y-1"
              >
                <div className={`absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br ${stat.color} rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className={`p-1.5 sm:p-2 bg-gradient-to-r ${stat.color} rounded-lg text-white`}>
                      {stat.icon}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-slate-900">{stat.title}</div>
                  </div>
                  <div className="text-xl sm:text-xl md:text-2xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-1.5 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <SEOContentSection />

      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.1); }
          66% { transform: translate(-15px, 15px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Mobile animations */
        @media (max-width: 640px) {
          .animate-blob {
            animation-duration: 10s;
          }
        }
      `}</style>
    </div>
    </>
  );
};

export default MetroLinesPage;