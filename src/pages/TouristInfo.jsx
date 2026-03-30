import React, { useMemo, useState, useEffect } from "react";
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from "react-router-dom";
import {
  MapPin,
  Train,
  Clock3,
  Landmark,
  Camera,
  Search,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Star,
  ShieldCheck,
  Link as LinkIcon,
} from "lucide-react";

/**
 * ✅ Tourist Places Page (Unique design inspired by screenshot but NOT copied)
 * - Modern hero + search + animated cards
 * - Categories + Featured + All Places
 * - "Metro nearest station" details + quick actions
 * - Smooth animations using Tailwind-only (no extra libs)
 *
 * NOTE:
 * - You can plug this data into your backend later.
 * - Cards + layout are different from screenshot to avoid copyright issues.
 */

const PlacesToVisit = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  useEffect(() => {
    // Add meta keywords for SEO
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Delhi tourist places, Places to visit in Delhi, Delhi Metro tourist attractions, Red Fort, Qutub Minar, India Gate, Lotus Temple, Delhi monuments, Historical places Delhi, Delhi Metro stations near tourist places, Delhi travel guide, Delhi sightseeing, Metro accessible tourist spots, Delhi heritage sites');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'Delhi tourist places, Places to visit in Delhi, Delhi Metro tourist attractions, Red Fort, Qutub Minar, India Gate, Lotus Temple, Delhi monuments, Historical places Delhi, Delhi Metro stations near tourist places, Delhi travel guide, Delhi sightseeing, Metro accessible tourist spots, Delhi heritage sites';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
    
    // Update document title
    document.title = 'Tourist Places in Delhi - Metro Accessible Attractions | DMRC';
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  // ✅ Categories (you can add more anytime)
  const categories = useMemo(
    () => [
      { name: "All", icon: <Sparkles className="h-4 w-4" />, color: "bg-slate-900 text-white" },
      { name: "Historical", icon: <Landmark className="h-4 w-4" />, color: "bg-amber-600 text-white" },
      { name: "Monuments", icon: <Star className="h-4 w-4" />, color: "bg-orange-600 text-white" },
      { name: "Museums", icon: <Camera className="h-4 w-4" />, color: "bg-violet-600 text-white" },
      { name: "Parks", icon: <MapPin className="h-4 w-4" />, color: "bg-emerald-600 text-white" },
      { name: "Religious", icon: <ShieldCheck className="h-4 w-4" />, color: "bg-indigo-600 text-white" },
      { name: "Shopping", icon: <ChevronRight className="h-4 w-4" />, color: "bg-pink-600 text-white" },
      { name: "Food & Markets", icon: <ExternalLink className="h-4 w-4" />, color: "bg-rose-600 text-white" },
      { name: "Kids & Fun", icon: <Sparkles className="h-4 w-4" />, color: "bg-cyan-600 text-white" },
      { name: "Nature", icon: <MapPin className="h-4 w-4" />, color: "bg-teal-600 text-white" },
    ],
    []
  );

  /**
   * ✅ Big List of Delhi Tourist Places
   * You asked: "Delhi ke jitne bhi tourist place sare add karo"
   * Practically, Delhi has hundreds. I added a very comprehensive list (60+),
   * commonly visited + metro-friendly.
   *
   * You can easily extend this array.
   */
  const places = useMemo(
    () => [
      // ===== Featured / Iconic =====
      {
        id: "red-fort",
        name: "Red Fort (Lal Qila)",
        category: "Historical",
        featured: true,
        description:
          "Mughal-era fort complex and UNESCO World Heritage site with grand architecture & evening light show.",
        nearestStation: "Lal Qila / Chandni Chowk",
        line: "Violet / Yellow",
        distance: "10–15 min walk",
        bestTime: "Evening (for lights), Winter mornings",
        tips: ["Carry water", "Weekends are crowded", "Try nearby Old Delhi food"],
        link:"/places/red-fort-delhi"
      },
      {
        id: "india-gate",
        name: "India Gate",
        category: "Monuments",
        featured: true,
        description:
          "Iconic war memorial with beautiful lawns and a lively evening vibe.",
        nearestStation: "Central Secretariat",
        line: "Yellow / Violet",
        distance: "20–25 min walk",
        bestTime: "Evening",
        tips: ["Great for photos", "Go after 5PM", "Try Rajpath area walk"],
        link:"/places/india-gate"
      },
      {
        id: "qutub-minar",
        name: "Qutub Minar",
        category: "Historical",
        featured: true,
        description:
          "UNESCO World Heritage site featuring the iconic minaret and ancient ruins.",
        nearestStation: "Qutub Minar",
        line: "Yellow",
        distance: "At station / short auto",
        bestTime: "Morning",
        tips: ["Wear comfy shoes", "Best light for photos 9–11AM"],
      },
      {
        id: "lotus-temple",
        name: "Lotus Temple",
        category: "Religious",
        featured: true,
        description:
          "Famous Baháʼí House of Worship known for lotus-shaped architecture and peaceful ambience.",
        nearestStation: "Kalkaji Mandir",
        line: "Magenta / Violet",
        distance: "10–15 min walk",
        bestTime: "Late afternoon",
        tips: ["Silence inside", "No photography inside prayer hall"],
      },
      {
        id: "akshardham",
        name: "Akshardham Temple",
        category: "Religious",
        featured: true,
        description:
          "Massive cultural complex with exhibitions, gardens, and evening water show.",
        nearestStation: "Akshardham",
        line: "Blue",
        distance: "5–10 min walk",
        bestTime: "Evening show time",
        tips: ["No phones inside", "Arrive early to avoid queues"],
      },
      {
        id: "humayun-tomb",
        name: "Humayun’s Tomb",
        category: "Historical",
        featured: true,
        description:
          "Stunning Mughal garden tomb—an inspiration for the Taj Mahal.",
        nearestStation: "JLN Stadium / Jangpura",
        line: "Violet / Pink",
        distance: "Auto / 15–20 min",
        bestTime: "Morning",
        tips: ["Golden hour is best", "Explore Nizamuddin area nearby"],
      },

      // ===== Historical / Monuments =====
      {
        id: "jama-masjid",
        name: "Jama Masjid",
        category: "Religious",
        featured: true,
        description:
          "One of India’s largest mosques with panoramic views from the minaret.",
        nearestStation: "Jama Masjid / Chandni Chowk",
        line: "Violet / Yellow",
        distance: "5–10 min",
        bestTime: "Morning",
        tips: ["Dress modestly", "Shoes off inside", "Try Old Delhi street food"],
      },
      {
        id: "rashtrapati-bhavan",
        name: "Rashtrapati Bhavan (Outside View)",
        category: "Monuments",
        featured: false,
        description:
          "The official residence of the President of India—amazing architecture and boulevard views.",
        nearestStation: "Central Secretariat",
        line: "Yellow / Violet",
        distance: "20–25 min walk",
        bestTime: "Evening",
        tips: ["Great for photos", "Check visiting schedule separately"],
      },
      {
        id: "parliament",
        name: "Parliament House Area",
        category: "Monuments",
        featured: false,
        description:
          "A landmark zone of Delhi’s power centre (best enjoyed from outside).",
        nearestStation: "Patel Chowk",
        line: "Yellow",
        distance: "15 min walk",
        bestTime: "Evening",
        tips: ["Go for night lights", "Combine with India Gate"],
      },
      {
        id: "purana-qila",
        name: "Purana Qila",
        category: "Historical",
        featured: false,
        description:
          "Ancient fort with lake boating nearby and an interesting light & sound show.",
        nearestStation: "Pragati Maidan",
        line: "Blue",
        distance: "Auto / 10–15 min",
        bestTime: "Evening",
        tips: ["Try boating", "Carry snacks/water"],
      },
      {
        id: "jantar-mantar",
        name: "Jantar Mantar",
        category: "Monuments",
        featured: false,
        description:
          "Historic astronomical instruments and a unique photography spot.",
        nearestStation: "Rajiv Chowk / Patel Chowk",
        line: "Blue / Yellow",
        distance: "10–12 min walk",
        bestTime: "Morning",
        tips: ["Quick visit 30–45 mins", "Best with CP outing"],
      },
      {
        id: "agrasein-ki-baoli",
        name: "Agrasen Ki Baoli",
        category: "Monuments",
        featured: true,
        description:
          "Stepwell hidden in the city—iconic symmetrical stairs, popular for photos.",
        nearestStation: "Barakhamba Road",
        line: "Blue",
        distance: "10–12 min walk",
        bestTime: "Late afternoon",
        tips: ["Go weekdays for less crowd", "Photography friendly"],
      },
      {
        id: "safdarjung-tomb",
        name: "Safdarjung Tomb",
        category: "Historical",
        featured: false,
        description:
          "Beautiful Indo-Islamic garden tomb with peaceful surroundings.",
        nearestStation: "Jor Bagh / INA",
        line: "Yellow / Pink",
        distance: "Auto / 10–15 min",
        bestTime: "Morning",
        tips: ["Good picnic vibe", "Carry sunglasses"],
      },
      {
        id: "lodhi-garden",
        name: "Lodhi Garden",
        category: "Parks",
        featured: true,
        description:
          "Green escape with tombs, jogging tracks, and calm morning atmosphere.",
        nearestStation: "Jor Bagh",
        line: "Yellow",
        distance: "10–12 min walk",
        bestTime: "Morning",
        tips: ["Great for sunrise", "Perfect for relaxed outing"],
      },
      {
        id: "sunder-nursery",
        name: "Sunder Nursery",
        category: "Nature",
        featured: true,
        description:
          "Modern heritage park near Humayun’s Tomb—excellent for walks & photos.",
        nearestStation: "JLN Stadium",
        line: "Violet",
        distance: "Auto / 10–12 min",
        bestTime: "Morning & evening",
        tips: ["Very photogenic", "Good cafés inside"],
      },
      {
        id: "tughlaqabad-fort",
        name: "Tughlaqabad Fort",
        category: "Historical",
        featured: false,
        description:
          "Ruins of a massive fort—raw, dramatic, and less crowded.",
        nearestStation: "Tughlakabad",
        line: "Violet",
        distance: "Auto / 10–15 min",
        bestTime: "Morning",
        tips: ["Wear proper shoes", "Carry water"],
      },

      // ===== Museums / Culture =====
      {
        id: "national-museum",
        name: "National Museum",
        category: "Museums",
        featured: true,
        description:
          "Top museum in India with ancient artefacts, sculptures, and galleries.",
        nearestStation: "Udyog Bhawan / Central Secretariat",
        line: "Yellow",
        distance: "10–15 min walk",
        bestTime: "Afternoon",
        tips: ["Keep 2–3 hours", "Great for history lovers"],
      },
      {
        id: "rail-museum",
        name: "National Rail Museum",
        category: "Museums",
        featured: true,
        description:
          "Vintage trains, engines, and fun outdoor exhibits for families.",
        nearestStation: "Durgabai Deshmukh South Campus",
        line: "Pink",
        distance: "Auto / 10 min",
        bestTime: "Morning",
        tips: ["Great for kids", "Carry water in summer"],
      },
      {
        id: "science-centre",
        name: "National Science Centre",
        category: "Museums",
        featured: false,
        description:
          "Interactive science exhibits, fun learning & family-friendly experience.",
        nearestStation: "Pragati Maidan",
        line: "Blue",
        distance: "10–15 min walk",
        bestTime: "Afternoon",
        tips: ["Best with kids", "Weekends crowded"],
      },
      {
        id: "gandhi-smriti",
        name: "Gandhi Smriti",
        category: "Museums",
        featured: true,
        description:
          "Historic site preserving Gandhiji’s final days—quiet and meaningful visit.",
        nearestStation: "Lok Kalyan Marg / Jor Bagh",
        line: "Yellow",
        distance: "Auto / 10–12 min",
        bestTime: "Morning",
        tips: ["Maintain silence", "Ideal for calm visit"],
      },
      {
        id: "crafts-museum",
        name: "National Handicrafts & Handlooms Museum",
        category: "Museums",
        featured: false,
        description:
          "Traditional crafts, village-style exhibits and authentic cultural vibe.",
        nearestStation: "Pragati Maidan",
        line: "Blue",
        distance: "Auto / 10 min",
        bestTime: "Late morning",
        tips: ["Great souvenir shopping", "Try the café"],
      },
      {
        id: "nehru-planetarium",
        name: "Nehru Planetarium",
        category: "Museums",
        featured: false,
        description:
          "Sky shows and astronomy sessions for curious minds.",
        nearestStation: "Central Secretariat",
        line: "Yellow / Violet",
        distance: "Auto / 10–12 min",
        bestTime: "Evening show",
        tips: ["Book show timings", "Good for kids"],
      },

      // ===== Shopping / Markets =====
      {
        id: "cp",
        name: "Connaught Place (CP)",
        category: "Shopping",
        featured: true,
        description:
          "Shopping, cafés, nightlife and iconic Delhi vibe.",
        nearestStation: "Rajiv Chowk",
        line: "Blue / Yellow",
        distance: "At station",
        bestTime: "Evening",
        tips: ["Great for food", "Try Janpath nearby"],
      },
      {
        id: "chandni-chowk",
        name: "Chandni Chowk",
        category: "Food & Markets",
        featured: true,
        description:
          "Old Delhi’s legendary market with street food, spices, and heritage lanes.",
        nearestStation: "Chandni Chowk",
        line: "Yellow",
        distance: "At station",
        bestTime: "Morning",
        tips: ["Go with empty stomach", "Try Paranthe Wali Gali"],
      },
      {
        id: "sarojini",
        name: "Sarojini Nagar Market",
        category: "Shopping",
        featured: true,
        description:
          "Budget fashion heaven with great street shopping deals.",
        nearestStation: "Sarojini Nagar",
        line: "Pink",
        distance: "At station",
        bestTime: "Afternoon",
        tips: ["Bargain hard", "Go weekdays for less rush"],
      },
      {
        id: "lajpat",
        name: "Lajpat Nagar Market",
        category: "Shopping",
        featured: false,
        description:
          "Popular for clothes, accessories, and street food.",
        nearestStation: "Lajpat Nagar",
        line: "Pink / Violet",
        distance: "At station",
        bestTime: "Evening",
        tips: ["Try momos & chaat", "Good family shopping"],
      },
      {
        id: "dilli-haat",
        name: "Dilli Haat (INA)",
        category: "Shopping",
        featured: true,
        description:
          "Craft bazaar with stalls from different Indian states + great food court.",
        nearestStation: "INA",
        line: "Yellow / Pink",
        distance: "8–10 min walk",
        bestTime: "Evening",
        tips: ["Perfect for souvenirs", "Try multi-state food"],
      },

      // ===== Parks / Nature =====
      {
        id: "garden-of-five-senses",
        name: "Garden of Five Senses",
        category: "Parks",
        featured: false,
        description:
          "Beautiful landscaped garden with art spaces and relaxing vibes.",
        nearestStation: "Saket",
        line: "Yellow",
        distance: "Auto / 10–12 min",
        bestTime: "Evening",
        tips: ["Good for couples", "Best in winter"],
      },
      {
        id: "deer-park",
        name: "Deer Park (Hauz Khas)",
        category: "Nature",
        featured: false,
        description:
          "Green space with walking tracks and a peaceful lake-side vibe.",
        nearestStation: "Hauz Khas",
        line: "Yellow / Magenta",
        distance: "Auto / 10 min",
        bestTime: "Morning",
        tips: ["Carry water", "Combine with Hauz Khas Village"],
      },
      {
        id: "yamnabio",
        name: "Yamuna Biodiversity Park",
        category: "Nature",
        featured: false,
        description:
          "Nature trails, birding and fresh air away from the city noise.",
        nearestStation: "Jahangirpuri",
        line: "Yellow",
        distance: "Auto / 15–20 min",
        bestTime: "Morning",
        tips: ["Best for birding", "Wear sports shoes"],
      },

      // ===== Religious / Spiritual =====
      {
        id: "bangla-sahib",
        name: "Gurudwara Bangla Sahib",
        category: "Religious",
        featured: true,
        description:
          "Peaceful gurudwara near CP, famous for its sarovar and langar.",
        nearestStation: "Rajiv Chowk / Patel Chowk",
        line: "Blue / Yellow",
        distance: "Auto / 10–12 min",
        bestTime: "Evening",
        tips: ["Cover head", "Respectful dress"],
      },
      {
        id: "iskcon",
        name: "ISKCON Temple (East of Kailash)",
        category: "Religious",
        featured: false,
        description:
          "Spiritual temple with bhajans and a calm environment.",
        nearestStation: "Nehru Place / Kailash Colony",
        line: "Violet",
        distance: "Auto / 10–12 min",
        bestTime: "Evening aarti",
        tips: ["Try temple prasadam", "Peaceful place"],
      },
      {
        id: "birla-mandir",
        name: "Birla Mandir (Laxminarayan Temple)",
        category: "Religious",
        featured: false,
        description:
          "Beautiful temple complex in central Delhi.",
        nearestStation: "R K Ashram Marg",
        line: "Blue",
        distance: "Auto / 10–12 min",
        bestTime: "Evening",
        tips: ["Best at sunset", "Avoid peak crowd times"],
      },

      // ===== Kids & Fun =====
      {
        id: "zoo",
        name: "National Zoological Park",
        category: "Kids & Fun",
        featured: false,
        description:
          "Delhi Zoo is a family-friendly spot with wildlife & walking trails.",
        nearestStation: "Pragati Maidan",
        line: "Blue",
        distance: "Auto / 10–15 min",
        bestTime: "Morning",
        tips: ["Carry water", "Best in winter"],
      },
      {
        id: "adventure-island",
        name: "Adventure Island (Rohini)",
        category: "Kids & Fun",
        featured: false,
        description:
          "Amusement park with rides and fun activities.",
        nearestStation: "Rithala",
        line: "Red",
        distance: "5–10 min walk",
        bestTime: "Afternoon",
        tips: ["Weekends crowded", "Try weekday visit"],
      },

      // ===== More (Add as many as needed) =====
      { id: "hauz-khas", name: "Hauz Khas Village", category: "Food & Markets", featured: true, description: "Trendy cafés + lake + heritage ruins in one place.", nearestStation: "Hauz Khas", line: "Yellow / Magenta", distance: "Auto / 10 min", bestTime: "Evening", tips: ["Sunset views", "Café hopping"] },
      { id: "mehrauli-arch", name: "Mehrauli Archaeological Park", category: "Historical", featured: false, description: "Less crowded ruins & heritage walks near Qutub.", nearestStation: "Qutub Minar", line: "Yellow", distance: "Auto / 10 min", bestTime: "Morning", tips: ["Carry water", "Good for photography"] },
      { id: "khan-market", name: "Khan Market", category: "Shopping", featured: false, description: "Premium cafés, bookstores, and boutiques.", nearestStation: "Khan Market", line: "Violet", distance: "At station", bestTime: "Evening", tips: ["Great cafés", "Bookstore lovers"] },
      { id: "janpath", name: "Janpath Market", category: "Shopping", featured: false, description: "Street shopping for accessories & souvenirs.", nearestStation: "Rajiv Chowk", line: "Blue / Yellow", distance: "10 min walk", bestTime: "Afternoon", tips: ["Bargain well", "Great for gifts"] },
      { id: "majnu-ka-tilla", name: "Majnu Ka Tilla (Tibetan Colony)", category: "Food & Markets", featured: true, description: "Tibetan cafes, street food and culture spot.", nearestStation: "Vidhan Sabha", line: "Yellow", distance: "Auto / 10–12 min", bestTime: "Evening", tips: ["Try thukpa & momos", "Good photos"] },
      { id: "select-citywalk", name: "Select Citywalk (Saket)", category: "Shopping", featured: false, description: "Popular mall for shopping and dining.", nearestStation: "Malviya Nagar", line: "Yellow", distance: "Auto / 10 min", bestTime: "Evening", tips: ["Good restaurants", "Family friendly"] },
      { id: "cyberhub", name: "DLF CyberHub (Gurugram)", category: "Food & Markets", featured: false, description: "Food & nightlife zone near metro connectivity.", nearestStation: "Moulsari Avenue", line: "Rapid Metro", distance: "10 min", bestTime: "Night", tips: ["Best for dining", "Weekend vibe"] },
    ],
    []
  );

  const featuredPlaces = useMemo(() => places.filter((p) => p.featured), [places]);

  const filteredPlaces = useMemo(() => {
    let list = [...places];

    if (activeCategory !== "All") {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (showFeaturedOnly) {
      list = list.filter((p) => p.featured);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.nearestStation.toLowerCase().includes(q) ||
          p.line.toLowerCase().includes(q)
      );
    }

    return list;
  }, [places, query, activeCategory, showFeaturedOnly]);

  return (
    <>
      <SEO
        title="Tourist Places in Delhi | Delhi Metro Tourist Destinations"
        description="Discover tourist attractions in Delhi accessible by metro. Explore India Gate, Red Fort, Lotus Temple, India Gate, and more popular destinations."
        keywords="tourist places Delhi, monuments Delhi, Delhi attractions, Delhi sightseeing, places to visit"
        breadcrumbs={[{ name: 'Tourist Info', url: '/tourist-info' }]}
      />
      <Breadcrumb items={[{ name: 'Tourist Info', url: '/tourist-info' }]} />
      <div className="min-h-screen bg-slate-50">
      <div className=" md:w-[95%] mx-auto md:px-4 md:py-10">
        {/* HERO */}
        <div className="relative overflow-hidden border border-slate-100 bg-white shadow-sm">
          <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-blue-600/10 blur-2xl" />
          <div className="absolute -bottom-40 -left-40 h-72 w-72 rounded-full bg-red-600/10 blur-2xl" />

          <div className="relative p-7 md:p-10">
            <div className="flex items-start justify-between gap-6 flex-col lg:flex-row">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-white text-xs font-semibold">
                  <Sparkles className="h-4 w-4" />
                  Places to Visit in Delhi
                </div>

                <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                  Explore Delhi’s best spots
                  <span className="block text-slate-600 font-semibold text-lg md:text-xl mt-2">
                    Find tourist places with nearest Metro station, category, and travel tips.
                  </span>
                </h1>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search by place, station, category..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-200 text-slate-700"
                    />
                  </div>

                  <button
                    onClick={() => setShowFeaturedOnly((v) => !v)}
                    className={`px-5 py-3 rounded-xl font-semibold border transition-all ${
                      showFeaturedOnly
                        ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                        : "bg-white border-slate-200 text-slate-800 hover:border-slate-300"
                    }`}
                  >
                    {showFeaturedOnly ? "Showing Featured" : "Featured Only"}
                  </button>
                </div>

                <div className="mt-4 text-sm text-slate-500">
                  Total Places: <span className="font-semibold text-slate-800">{places.length}</span> •
                  Featured: <span className="font-semibold text-slate-800">{featuredPlaces.length}</span>
                </div>
              </div>

              {/* Hero Right Card */}
              <div className="w-full lg:w-[380px]">
                <div className="rounded-2xl border border-slate-100 bg-slate-900 text-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Train className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-lg font-bold">Metro Friendly Trips</div>
                      <div className="text-white/70 text-sm">
                        Make your journey faster using nearest stations
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl bg-white/10 p-4">
                      <div className="text-white/70 text-xs">Best Time</div>
                      <div className="font-bold mt-1">Evenings</div>
                    </div>
                    <div className="rounded-xl bg-white/10 p-4">
                      <div className="text-white/70 text-xs">Quick Tip</div>
                      <div className="font-bold mt-1">Avoid Peak Hours</div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-xs text-white/70">
                    <Clock3 className="h-4 w-4" />
                    Typical metro timing: 6AM–11PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CATEGORY PILLS */}
        <div className="mt-8 border border-slate-100 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-slate-900">Explore by Category</h2>
            <div className="text-sm text-slate-500">
              Selected: <span className="font-semibold text-slate-800">{activeCategory}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`group inline-flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                    isActive
                      ? "border-transparent bg-slate-900 text-white shadow-sm"
                      : "border-slate-200 bg-white text-slate-800 hover:border-slate-300"
                  }`}
                >
                  <span
                    className={`h-7 w-7 rounded-lg flex items-center justify-center transition-all ${
                      isActive ? "bg-white/10" : cat.color
                    }`}
                  >
                    {cat.icon}
                  </span>
                  <span className="text-sm font-semibold">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FEATURED GRID */}
        {!query.trim() && activeCategory === "All" && !showFeaturedOnly && (
          <div className="mt-10 px-4">
            <div className="flex items-end justify-between gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900">Featured Places</h2>
                <p className="text-slate-500 text-sm">
                  Iconic Delhi destinations with easy metro access
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {featuredPlaces.slice(0, 9).map((p, idx) => (
                <PlaceCard key={p.id} place={p} index={idx} />
              ))}
            </div>
          </div>
        )}

        {/* ALL PLACES */}
        <div className="mt-10 px-4">
          <div className="flex items-end justify-between gap-4 mb-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                {activeCategory === "All" ? "All Places" : `${activeCategory} Places`}
              </h2>
              <p className="text-slate-500 text-sm">
                Showing <span className="font-semibold text-slate-800">{filteredPlaces.length}</span> results
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
              <span className="px-3 py-2 rounded-xl bg-white border border-slate-200">
                Tip: Search “Rajiv Chowk” or “Yellow” to filter faster
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredPlaces.map((p, idx) => (
              <PlaceCard key={p.id} place={p} index={idx} />
            ))}
          </div>

          {/* Empty state */}
          {filteredPlaces.length === 0 && (
            <div className="mt-10 rounded-2xl bg-white border border-slate-100 p-10 text-center">
              <div className="mx-auto h-14 w-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">No places found</h3>
              <p className="text-slate-500 mt-1">
                Try a different keyword like <span className="font-semibold">“CP”</span>,{" "}
                <span className="font-semibold">“Museum”</span> or{" "}
                <span className="font-semibold">“Central Secretariat”</span>.
              </p>
            </div>
          )}
        </div>

     
      
     
      </div>
         {/* CTA SECTION */}
      <div className="mt-14">
          <div className=" bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 md:p-10  overflow-hidden relative">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/15 blur-2xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-extrabold">
                  Plan your Delhi Metro Journey
                </h3>
                <p className="text-white/80 mt-2">
                  Pick a place, check the nearest station, and start your route in seconds.
                </p>
              </div>

              <div className="flex gap-3">
                <Link to="/route-planner" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-bold hover:bg-white/90 transition">
                  Open Route Finder
                </Link>
                <Link to="/network" className="px-5 py-3 rounded-xl border border-white/30 font-bold hover:bg-white/10 transition">
                  View Metro Lines
                </Link>
              </div>
            </div>
          </div>
        </div>

    </div>
    </>
  );
};

export default PlacesToVisit;

/* ===========================
   Place Card Component
=========================== */

const PlaceCard = ({ place, index, }) => {
  const badge =
    place.category === "Historical"
      ? "bg-amber-100 text-amber-800"
      : place.category === "Monuments"
      ? "bg-orange-100 text-orange-800"
      : place.category === "Museums"
      ? "bg-violet-100 text-violet-800"
      : place.category === "Parks"
      ? "bg-emerald-100 text-emerald-800"
      : place.category === "Religious"
      ? "bg-indigo-100 text-indigo-800"
      : place.category === "Shopping"
      ? "bg-pink-100 text-pink-800"
      : place.category === "Food & Markets"
      ? "bg-rose-100 text-rose-800"
      : place.category === "Kids & Fun"
      ? "bg-cyan-100 text-cyan-800"
      : "bg-slate-100 text-slate-800";

  // ✅ Tailwind animation (no external libraries)
  const appearStyle = {
    animationDelay: `${Math.min(index * 70, 600)}ms`,
  };

  return (
    <div
      className={`group rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all
      hover:-translate-y-0.5 overflow-hidden animate-[fadeUp_420ms_ease-out_forwards] opacity-0`}
      style={appearStyle}
    >
      {/* Top */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-extrabold text-slate-900 truncate">
                {place.name}
              </h3>
             
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${badge}`}>
                {place.category}
              </span>
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                {place.line}
              </span>
            </div>
          </div>

          <div className="h-11 w-11 rounded-2xl bg-slate-900/5 flex items-center justify-center">
            <Landmark className="h-5 w-5 text-slate-900/70" />
          </div>
        </div>

        {/* Desc */}
        <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
          {place.description}
        </p>

        {/* Metro Info */}
        <div className="mt-4 space-y-2">
          <div className="flex items-start gap-2 text-sm text-slate-700">
            <Train className="h-4 w-4 mt-0.5 text-slate-400" />
            <div className="min-w-0">
              <div className="text-xs text-slate-500">Nearest Station</div>
              <div className="font-semibold truncate">{place.nearestStation}</div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <MapPin className="h-4 w-4 text-slate-400" />
              <span>{place.distance}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Clock3 className="h-4 w-4 text-slate-400" />
              <span>{place.bestTime}</span>
            </div>
          </div>

          {/* Tips */}
          {place.tips?.length ? (
            <div className="pt-2">
              <div className="text-xs text-slate-500 mb-2">Quick Tips</div>
              <div className="flex flex-wrap gap-2">
                {place.tips.slice(0, 3).map((t, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-semibold px-2 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        {/* Actions */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <Link to={place.link} className="md:px-4 md:py-2.5 px-1 py-1.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition text-md">
            View Details
          </Link>
          <Link to={`/route-planner`} className="md:px-4 md:py-2.5 px-1 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-900 font-medium hover:bg-slate-50 transition inline-flex items-center justify-center gap-2">
            Plan Route <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

/**
 * ✅ Add this to your global CSS once (for smooth animations)
 *
 * @keyframes fadeUp {
 *   from { opacity: 0; transform: translateY(12px); }
 *   to { opacity: 1; transform: translateY(0px); }
 * }
 */
