// KashmereGateStation.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async";

const KashmereGateStation = () => {
  const [fromStation, setFromStation] = useState('Kashmere Gate');
  const [toStation, setToStation] = useState('');
  const [activeTab, setActiveTab] = useState('services');
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Station data - Unique naming and structure
  const stationData = {
    name: "Kashmere Gate",
    code: "KMG",
    lines: [
      { name: "Scarlet Corridor", color: "from-red-600 to-rose-700", bg: "bg-red-600", short: "SC" },
      { name: "Sunbeam Corridor", color: "from-amber-500 to-yellow-600", bg: "bg-yellow-500", short: "SC" },
      { name: "Orchid Corridor", color: "from-purple-500 to-violet-600", bg: "bg-violet-500", short: "OC" }
    ],
    type: "Triple Junction",
    operatingHours: "05:45 - 23:30",
    zone: "North Hub",
    status: "Fully Operational",
    crowd: "Steady Flow",
    frequency: "2.5-4 min",
    nextTrain: "2 min",
    temperature: "24°C",
    airQuality: "AQI 76",
    dailyPassengers: "52,800+",
    monthlyGrowth: "+9.2%",
    userRating: "4.6/5",
    onTime: "95%",
    address: "ISBT Road, Kashmere Gate, Delhi - 110006",
    updated: "11:58:32 PM"
  };

  // Popular routes - Restructured
  const popularRoutes = [
    { destination: "Rajiv Chowk", time: "23 min", fare: "₹35", transfers: "1 change", crowd: "High", platform: "3" },
    { destination: "New Delhi", time: "19 min", fare: "₹22", transfers: "Direct", crowd: "Moderate", platform: "1" },
    { destination: "Central Secretariat", time: "17 min", fare: "₹25", transfers: "2 changes", crowd: "Moderate", platform: "2" },
    { destination: "Hauz Khas", time: "30 min", fare: "₹29", transfers: "1 change", crowd: "Low", platform: "4" },
    { destination: "Botanical Garden", time: "33 min", fare: "₹37", transfers: "3 changes", crowd: "Low", platform: "2" },
    { destination: "IGI Airport", time: "36 min", fare: "₹24", transfers: "1 change", crowd: "High", platform: "5" }
  ];

  // Services - Renamed and reorganized
  const services = [
    { name: "Public WiFi", icon: "📶", category: "connectivity", available: true, speed: "30 Mbps" },
    { name: "Retail Stores", icon: "🏪", category: "shopping", available: true, count: "8+" },
    { name: "Food Plaza", icon: "🍛", category: "dining", available: true, type: "Multi-cuisine" },
    { name: "Universal Access", icon: "♿", category: "accessibility", available: true, features: "Full" },
    { name: "Vertical Transport", icon: "🛗", category: "accessibility", available: true, count: "6 units" },
    { name: "Booking Counters", icon: "🎟️", category: "services", available: true, type: "Smart/Automatic" },
    { name: "Vehicle Storage", icon: "🅿️", category: "services", available: true, capacity: "200 cars" },
    { name: "Bicycle Station", icon: "🚲", category: "connectivity", available: true, capacity: "50 bikes" }
  ];

  // Gates - Reimagined with new names
  const gates = [
    { 
      number: "Exit A", 
      direction: "ISBT Terminal", 
      landmarks: ["Interstate Bus Stand", "Tis Hazari"],
      accessibility: "Lift + Ramp",
      busyHours: "6-9 AM, 5-8 PM",
      nearest: "Red Line"
    },
    { 
      number: "Exit B", 
      direction: "Old Delhi", 
      landmarks: ["Red Fort", "Chandni Chowk"],
      accessibility: "Lift",
      busyHours: "10 AM-2 PM",
      nearest: "Yellow Line"
    },
    { 
      number: "Exit C", 
      direction: "Civil Lines", 
      landmarks: ["DU North Campus", "Vidhan Sabha"],
      accessibility: "Ramp",
      busyHours: "8-10 AM, 4-6 PM",
      nearest: "Violet Line"
    },
    { 
      number: "Exit D", 
      direction: "Commercial Complex", 
      landmarks: ["St. Stephen's", "ISBT Market"],
      accessibility: "Lift + Ramp",
      busyHours: "11 AM-3 PM",
      nearest: "All Lines"
    },
    { 
      number: "Exit E", 
      direction: "Ring Road", 
      landmarks: ["Majnu ka Tila", "Metro Depot"],
      accessibility: "Ramp",
      busyHours: "4-7 PM",
      nearest: "Red/Yellow"
    },
    { 
      number: "Exit F", 
      direction: "Residential Zone", 
      landmarks: ["Model Town", "Guru Teg Bahadur Nagar"],
      accessibility: "Lift",
      busyHours: "8-10 AM, 6-8 PM",
      nearest: "Violet Line"
    }
  ];

  // Nearby attractions - Unique descriptions
  const nearbyAttractions = [
    { 
      name: "Red Fort", 
      distance: "2.1 km", 
      type: "UNESCO Heritage", 
      rating: "4.8", 
      time: "8 min auto",
      entryFee: "₹35",
      closedDay: "Monday"
    },
    { 
      name: "Jama Masjid", 
      distance: "1.8 km", 
      type: "Historic Mosque", 
      rating: "4.7", 
      time: "6 min auto",
      entryFee: "Free",
      dressCode: "Modest attire"
    },
    { 
      name: "Chandni Chowk", 
      distance: "1.2 km", 
      type: "Heritage Market", 
      rating: "4.6", 
      time: "10 min walk",
      bestTime: "Morning",
      famous: "Street food"
    },
    { 
      name: "ISBT", 
      distance: "0.2 km", 
      type: "Transport Hub", 
      rating: "4.2", 
      time: "2 min walk",
      connectsTo: "North India",
      facilities: "Waiting lounge"
    },
    { 
      name: "Raj Ghat", 
      distance: "2.8 km", 
      type: "Memorial", 
      rating: "4.5", 
      time: "12 min auto",
      significance: "Mahatma Gandhi",
      bestTime: "Sunset"
    },
    { 
      name: "Kashmere Gate", 
      distance: "0.1 km", 
      type: "Historical Gate", 
      rating: "4.3", 
      time: "1 min walk",
      built: "1650",
      style: "Mughal"
    }
  ];

  // FAQs - Completely rewritten
  const faqs = [
    { 
      id: 1,
      question: "What are the first and last metro timings at Kashmere Gate?", 
      answer: "First train departs at 5:45 AM from all lines. Last train arrival is 11:30 PM. Red Line extension till 12 AM on weekends."
    },
    { 
      id: 2,
      question: "Which metro corridors intersect at this station?", 
      answer: "Three major corridors meet here: Scarlet (Red), Sunbeam (Yellow), and Orchid (Violet). It's the only triple interchange in Delhi Metro."
    },
    { 
      id: 3,
      question: "How do I switch between different metro lines?", 
      answer: "Follow color-coded pathways: Red signs for Scarlet, Yellow for Sunbeam, Purple for Orchid. Average transfer time: 3-4 minutes."
    },
    { 
      id: 4,
      question: "What is the recommended transfer time between lines?", 
      answer: "Allow 5-7 minutes during peak hours, 3-4 minutes during off-peak. The station has escalators at all transfer points."
    },
    { 
      id: 5,
      question: "Do I need to purchase a new ticket when changing lines?", 
      answer: "No, single ticket works for entire journey. Smart card automatically calculates fare. Exiting any gate ends the journey."
    },
    { 
      id: 6,
      question: "What if I get lost during line transfer?", 
      answer: "Look for 'Information' kiosks near Escalator 2 and 5. Staff in yellow vests can assist. Help buttons available on platforms."
    },
    { 
      id: 7,
      question: "How to calculate fare from Kashmere Gate to other stations?", 
      answer: "Base fare ₹10, up to ₹60 max. Smart card gives 10% discount. Use station fare charts or our mobile app calculator."
    },
    { 
      id: 8,
      question: "Is complimentary WiFi available at the premises?", 
      answer: "Yes, 45-minutes free WiFi daily. Connect to 'DMRC-Public' network, OTP sent to mobile. Password changes weekly."
    }
  ];

  // Travel tips - Refreshed content
  const travelTips = [
    "💳 Smart card recommended - 10% discount & faster entry",
    "⏰ Best travel window: 11 AM - 4 PM (40% less crowd)",
    "⬆️ Stand on left, walk on right - escalator etiquette",
    "🎒 Luggage allowed up to 80x50x30 cm, extra ticket for larger",
    "📱 Official DMRC app shows real-time train positions",
    "🛄 Cloak room available at Exit A - ₹20 per bag",
    "🚕 Pre-paid taxi booth at Exit D - fixed rates",
    "🅿️ Parking: ₹20 for 4 hours, ₹50 for full day"
  ];

  // Service alerts - New format
  const serviceAlerts = [
    {
      type: "operational",
      icon: "✅",
      title: "Normal Operations",
      description: "All three corridors running on schedule. No delays reported.",
      time: "2 min ago",
      color: "emerald",
      affected: "All lines"
    },
    {
      type: "schedule",
      icon: "📅",
      title: "Weekend Extension",
      description: "Extended service until 12:30 AM on Friday & Saturday nights.",
      time: "Valid this weekend",
      color: "blue",
      affected: "All lines"
    },
    {
      type: "maintenance",
      icon: "🔧",
      title: "Platform Maintenance",
      description: "Platform 2 (Violet Line) closed 10 PM - 6 AM for upgrade work.",
      time: "Till Mar 15",
      color: "amber",
      affected: "Violet Line"
    }
  ];

  // Station history - Rewritten
  const stationHistory = {
    opened: "December 25, 2002",
    historicalSignificance: "Built on site of 17th-century Mughal gate, British-era tram terminus",
    expansion: [
      { year: "2002", event: "Red Line inauguration - first Delhi Metro line" },
      { year: "2004", event: "Yellow Line connectivity added" },
      { year: "2010", event: "Violet Line extension completed" },
      { year: "2022", event: "Major renovation & accessibility upgrade" }
    ],
    dailyRidership: "52,800+",
    interestingFact: "Only station where all three lines run parallel for 200m"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
        <Helmet>
            <title>
                Kashmere Gate Metro Station – Red, Yellow & Violet Line Interchange Guide
            </title>

            <meta
                name="description"
                content="Kashmere Gate Metro Station is Delhi Metro’s first and only triple interchange connecting Red Line, Yellow Line and Violet Line. Check timings, route map, fare, ISBT connectivity, exits and nearby tourist places."
            />

            <meta
                name="keywords"
                content="
                Kashmere Gate Metro Station,
                Kashmere Gate Metro,
                Kashmere Gate Metro Route,
                Kashmere Gate Metro Timings,
                Kashmere Gate Metro Fare,
                Red Line Kashmere Gate,
                Yellow Line Kashmere Gate,
                Violet Line Kashmere Gate,
                Kashmere Gate to Rajiv Chowk Metro,
                Kashmere Gate to New Delhi Metro,
                Metro near ISBT Delhi,
                Triple Interchange Delhi Metro
                "
            />

            <link
                rel="canonical"
                href="https://mydelhimetro.in/kashmere-gate-metro-station"
            />

            {/* Open Graph */}
            <meta property="og:title" content="Kashmere Gate Metro Station – Triple Interchange Guide" />
            <meta property="og:description" content="Complete guide to Kashmere Gate Metro Station including Red, Yellow and Violet line connectivity, timings, fare, exits and ISBT access." />
            <meta property="og:url" content="https://mydelhimetro.in/kashmere-gate-metro-station" />
            <meta property="og:type" content="article" />

            {/* SubwayStation Schema */}
            <script type="application/ld+json">
                {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SubwayStation",
                "name": "Kashmere Gate Metro Station",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "ISBT Road, Kashmere Gate",
                    "addressLocality": "Delhi",
                    "addressRegion": "Delhi",
                    "postalCode": "110006",
                    "addressCountry": "IN"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 28.6675,
                    "longitude": 77.2273
                },
                "isPartOf": {
                    "@type": "Organization",
                    "name": "Delhi Metro Rail Corporation"
                }
                })}
            </script>

            {/* FAQ Schema */}
            <script type="application/ld+json">
                {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                    "@type": "Question",
                    "name": "Which metro lines connect at Kashmere Gate?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Kashmere Gate Metro Station connects the Red Line, Yellow Line and Violet Line. It is Delhi Metro’s only triple interchange station."
                    }
                    },
                    {
                    "@type": "Question",
                    "name": "What are the first and last metro timings at Kashmere Gate?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The first metro starts around 5:45 AM and the last train runs till approximately 11:30 PM. Timings may extend on weekends."
                    }
                    },
                    {
                    "@type": "Question",
                    "name": "Is Kashmere Gate connected to ISBT?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Kashmere Gate Metro Station provides direct walking connectivity to ISBT (Inter State Bus Terminal)."
                    }
                    }
                ]
                })}
            </script>
        </Helmet>

      {/* ========== HERO - DYNAMIC STATION IDENTITY ========== */}
      <div className="relative bg-gradient-to-br from-gray-900 via-red-900 to-purple-900 overflow-hidden">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between">
            {/* Station identity - Triple badge design */}
            <div className="flex items-start gap-5">
              <div className="hidden sm:flex relative items-center justify-center w-24 h-24 bg-gradient-to-br from-red-700 to-purple-700 rounded-3xl shadow-lg">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-2xl rounded-2xl border-2 border-white/30 flex items-center justify-center">
                  <span className="text-5xl">🚉</span>
                </div>
                <div className="absolute -bottom-3 -right-3 px-3 py-1.5 bg-gradient-to-r from-red-600 to-purple-700 rounded-lg text-white text-xs font-bold shadow-lg flex items-center gap-1">
                  <span>⚡</span> Triple Interchange
                </div>
              </div>

              <div>
                <div className="flex items-center flex-wrap gap-3 mb-3">
                  <h1 className="text-2xl md:text-5xl font-bold text-white tracking-tight">
                    Kashmere Gate
                  </h1>
                  <div className="px-3 py-1.5 bg-emerald-500/20 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-emerald-400/30">
                    ⏱️ Next: {stationData.nextTrain}
                  </div>
                </div>

                {/* Line badges - Horizontal strip */}
                <div className="flex flex-wrap items-center gap-2">
                  {stationData.lines.map((line, i) => (
                    <div key={i} className={`px-4 py-1.5 bg-gradient-to-r ${line.color} rounded-full text-white text-sm font-medium flex items-center gap-1.5 shadow-lg`}>
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      {line.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Live status card */}
            <div className="mt-6 md:mt-0 bg-black/20 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/20">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-50"></div>
                </div>
                <div>
                  <span className="text-white font-medium">Live: Operational</span>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-white/80 text-xs">{stationData.temperature}</span>
                    <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                    <span className="text-white/80 text-xs">{stationData.airQuality}</span>
                    <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                    <span className="text-white/80 text-xs">Updated {stationData.updated}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics dashboard - New layout */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <div className="text-white/60 text-xs">Service Hours</div>
              <div className="text-white font-bold text-lg">{stationData.operatingHours}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <div className="text-white/60 text-xs">Zone</div>
              <div className="text-white font-bold text-lg">{stationData.zone}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <div className="text-white/60 text-xs">Current Crowd</div>
              <div className="text-white font-bold text-lg">{stationData.crowd}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <div className="text-white/60 text-xs">Frequency</div>
              <div className="text-white font-bold text-lg">{stationData.frequency}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 col-span-2 md:col-span-1">
              <div className="text-white/60 text-xs">Daily Riders</div>
              <div className="text-white font-bold text-lg">{stationData.dailyPassengers}</div>
            </div>
          </div>
        </div>

        {/* Angled separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 27.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="white" fillOpacity="0.95"/>
          </svg>
        </div>
      </div>

      {/* ========== MAIN CONTENT - RESTRUCTURED LAYOUT ========== */}
      <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* ===== TRIPLE COLUMN LAYOUT - UNIQUE ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN - Journey Planner & Station Stats */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Journey planner - Redesigned */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 bg-gradient-to-br from-red-100 to-amber-100 rounded-xl flex items-center justify-center">
                  <span className="text-red-600 text-lg">🗺️</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Plan Journey</h2>
                <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">3 lines</span>
              </div>

              <div className="space-y-4">
                {/* From - Enhanced */}
                <div className="bg-gray-50 rounded-xl p-1">
                  <div className="flex items-center">
                    <div className="px-3 py-2 bg-white rounded-l-xl border-r border-gray-200">
                      <span className="text-sm font-medium text-gray-500">FROM</span>
                    </div>
                    <input
                      type="text"
                      value={fromStation}
                      onChange={(e) => setFromStation(e.target.value)}
                      className="flex-1 px-4 py-2 bg-transparent focus:outline-none text-gray-900 font-medium"
                    />
                    <div className="px-3">
                      <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-xs font-bold">K</span>
                    </div>
                  </div>
                </div>

                {/* Swap - Animated */}
                <div className="relative flex justify-center">
                  <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-gray-300"></div>
                  <button className="relative w-10 h-10 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-red-400 hover:bg-red-50 transition-all group">
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </button>
                </div>

                {/* To */}
                <div className="bg-gray-50 rounded-xl p-1">
                  <div className="flex items-center">
                    <div className="px-3 py-2 bg-white rounded-l-xl border-r border-gray-200">
                      <span className="text-sm font-medium text-gray-500">TO</span>
                    </div>
                    <input
                      type="text"
                      value={toStation}
                      onChange={(e) => setToStation(e.target.value)}
                      placeholder="Enter destination..."
                      className="flex-1 px-4 py-2 bg-transparent focus:outline-none text-gray-900 placeholder-gray-400"
                    />
                    <div className="px-3">
                      <span className="text-gray-400">📍</span>
                    </div>
                  </div>
                </div>

                {/* Route button */}
                <button className="w-full bg-gradient-to-r from-red-600 to-purple-600 text-white py-3.5 px-6 rounded-xl font-medium hover:from-red-700 hover:to-purple-700 transition-all shadow-lg shadow-red-200 flex items-center justify-center gap-2">
                  <span>Find Route</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>

              {/* Quick destinations - Chips */}
              <div className="mt-6 pt-5 border-t border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Popular from here</span>
                  <a href="#" className="text-xs text-red-600 hover:text-red-800">View all →</a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Rajiv Chowk', 'New Delhi', 'Central Sec', 'Hauz Khas', 'Airport'].map((dest) => (
                    <button key={dest} className="px-3 py-1.5 bg-gray-100 hover:bg-red-50 hover:text-red-700 rounded-lg text-xs font-medium text-gray-700 transition-colors border border-gray-200">
                      {dest}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Station statistics - Redesigned */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                  <span className="text-purple-600 text-lg">📈</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Station Pulse</h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stationData.dailyPassengers}</div>
                      <div className="text-xs text-gray-600 mt-1">Daily footfall</div>
                    </div>
                    <span className="text-xs bg-white px-2 py-1 rounded-full text-emerald-700 shadow-sm">↑ 9.2%</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-red-200/50">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Peak hour</span>
                      <span className="font-medium text-gray-900">8,200/hr</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stationData.userRating}</div>
                      <div className="text-xs text-gray-600 mt-1">Satisfaction</div>
                    </div>
                    <span className="text-xs bg-white px-2 py-1 rounded-full text-amber-700 shadow-sm">⭐ 4.6</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-amber-200/50">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Cleanliness</span>
                      <span className="font-medium text-gray-900">4.5/5</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stationData.onTime}</div>
                      <div className="text-xs text-gray-600 mt-1">Punctuality</div>
                    </div>
                    <span className="text-xs bg-white px-2 py-1 rounded-full text-emerald-700 shadow-sm">✓ 95%</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-emerald-200/50">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Avg delay</span>
                      <span className="font-medium text-gray-900">42 sec</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">3</div>
                      <div className="text-xs text-gray-600 mt-1">Interchanges</div>
                    </div>
                    <span className="text-xs bg-white px-2 py-1 rounded-full text-blue-700 shadow-sm">Unique</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-blue-200/50">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Transfer time</span>
                      <span className="font-medium text-gray-900">3-4 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Station information - Card style */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                  <span className="text-gray-700 text-lg">ℹ️</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Station Info</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 text-lg mt-0.5">📍</span>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Address</div>
                    <div className="text-sm font-medium text-gray-900">{stationData.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 text-lg mt-0.5">🕒</span>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Operating Hours</div>
                    <div className="text-sm font-medium text-gray-900">{stationData.operatingHours}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 text-lg mt-0.5">🎯</span>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Lines</div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {stationData.lines.map((line, i) => (
                        <span key={i} className={`text-xs px-2 py-1 bg-gradient-to-r ${line.color} text-white rounded-md`}>
                          {line.short}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 text-lg mt-0.5">📅</span>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Opened</div>
                    <div className="text-sm font-medium text-gray-900">December 25, 2002</div>
                    <div className="text-xs text-gray-500 mt-1">First line of Delhi Metro</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN - Popular Routes & Service Updates */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Popular Routes - Redesigned */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center">
                    <span className="text-amber-600 text-lg">🚇</span>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">Popular Routes</h2>
                </div>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">6 destinations</span>
              </div>

              <div className="space-y-3">
                {popularRoutes.map((route, idx) => (
                  <div key={idx} className="group relative">
                    <div className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gradient-to-r hover:from-red-50 hover:to-amber-50 rounded-xl transition-all cursor-pointer border border-transparent hover:border-red-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm text-sm">
                          {idx + 1}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900 group-hover:text-red-700">{route.destination}</span>
                            <span className="text-xs bg-gray-200 px-1.5 py-0.5 rounded-full text-gray-700">{route.transfers}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-gray-500 flex items-center gap-0.5">
                              <span>⏱️</span> {route.time}
                            </span>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs font-medium text-gray-700">₹{route.fare}</span>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs text-gray-500">Platform {route.platform}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          route.crowd === 'High' ? 'bg-red-100 text-red-700' : 
                          route.crowd === 'Moderate' ? 'bg-amber-100 text-amber-700' : 
                          'bg-emerald-100 text-emerald-700'
                        }`}>
                          {route.crowd}
                        </span>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 text-center">
                <a href="#" className="text-xs text-red-600 hover:text-red-800 font-medium flex items-center justify-center gap-1">
                  View all routes from Kashmere Gate
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Service Updates - New design */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                  <span className="text-blue-600 text-lg">🔔</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Service Status</h2>
              </div>

              <div className="space-y-4">
                {serviceAlerts.map((alert, idx) => (
                  <div key={idx} className={`p-4 bg-${alert.color}-50 rounded-xl border border-${alert.color}-200 relative overflow-hidden`}>
                    {/* Decorative bar */}
                    <div className={`absolute top-0 left-0 w-1 h-full bg-${alert.color}-500`}></div>
                    <div className="flex items-start gap-3 ml-2">
                      <span className="text-xl">{alert.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-semibold text-${alert.color}-800`}>{alert.title}</span>
                          <span className={`text-[10px] px-2 py-1 bg-${alert.color}-200 text-${alert.color}-800 rounded-full`}>
                            {alert.time}
                          </span>
                        </div>
                        <p className={`text-xs text-${alert.color}-700 mt-1.5`}>{alert.description}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`text-[10px] px-2 py-0.5 bg-${alert.color}-200/50 text-${alert.color}-700 rounded-full`}>
                            {alert.affected}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl text-xs font-medium text-gray-700 transition-colors flex items-center justify-center gap-2">
                <span>Subscribe to real-time alerts</span>
                <span>🔔</span>
              </button>
            </div>

            {/* Quick Actions - Compact */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Quick Actions
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { icon: '🗺️', label: 'Plan' },
                  { icon: '📍', label: 'Live' },
                  { icon: '🎫', label: 'Card' },
                  { icon: '🅿️', label: 'Park' },
                  { icon: '🛗', label: 'Lift' },
                  { icon: '🚾', label: 'Restroom' },
                  { icon: 'ℹ️', label: 'Info' },
                  { icon: '📞', label: 'Help' }
                ].map((action, idx) => (
                  <button key={idx} className="p-2.5 bg-gray-50 hover:bg-red-50 rounded-xl flex flex-col items-center gap-1 transition-colors group">
                    <span className="text-lg group-hover:scale-110 transition-transform">{action.icon}</span>
                    <span className="text-[10px] text-gray-600 group-hover:text-red-600">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Station Details & Gates */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Station Details Card */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <span className="text-indigo-600 text-lg">🏢</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Station Details</h2>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-xs text-gray-500">Station Code</span>
                  <span className="text-sm font-mono font-bold bg-gray-100 px-3 py-1 rounded-lg">{stationData.code}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-xs text-gray-500">Interchange Type</span>
                  <span className="text-sm font-medium bg-gradient-to-r from-red-100 to-purple-100 px-3 py-1 rounded-lg text-gray-800">
                    Triple Junction
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-xs text-gray-500">Platforms</span>
                  <span className="text-sm font-medium text-gray-900">6 (2 per line)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-xs text-gray-500">Parking Capacity</span>
                  <span className="text-sm font-medium text-gray-900">200 cars • 50 bikes</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-xs text-gray-500">Last Renovation</span>
                  <span className="text-sm font-medium text-gray-900">2022</span>
                </div>
              </div>
            </div>

            {/* Gate Information - Compact */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                    <span className="text-gray-700 text-lg">🚪</span>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">Exits</h2>
                </div>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">6 gates</span>
              </div>

              <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                {gates.slice(0, 4).map((gate, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-900">{gate.number}</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                            gate.accessibility.includes('Lift') ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                          }`}>
                            {gate.accessibility}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{gate.direction}</p>
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {gate.landmarks.slice(0, 2).map((landmark, i) => (
                            <span key={i} className="text-[10px] bg-white px-2 py-0.5 rounded-full text-gray-600 border border-gray-200">
                              {landmark}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] bg-amber-50 text-amber-700 px-2 py-1 rounded-full">
                          {gate.busyHours.split(',')[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-3 text-xs text-red-600 hover:text-red-800 font-medium flex items-center justify-center gap-1 py-2">
                View all 6 exits
                <span>→</span>
              </button>
            </div>

            {/* Nearby attractions - Mini */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-emerald-600 text-lg">🏛️</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Nearby</h2>
              </div>
              <div className="space-y-2">
                {nearbyAttractions.slice(0, 3).map((place, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">📍</span>
                      <div>
                        <span className="text-xs font-medium text-gray-900">{place.name}</span>
                        <span className="text-[10px] text-gray-500 ml-2">{place.distance}</span>
                      </div>
                    </div>
                    <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-full">⭐ {place.rating}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========== SERVICES & AMENITIES TAB SECTION - REDESIGNED ========== */}
        <div className="mt-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
          {/* Tab Navigation - New pill design */}
          <div className="bg-gray-50 px-4 pt-4">
            <div className="flex flex-wrap gap-1">
              {[
                { id: 'services', label: 'Services & Amenities', icon: '📦' },
                { id: 'attractions', label: 'Tourist Spots', icon: '🏛️' },
                { id: 'exits', label: 'Exit Guide', icon: '🚪' },
                { id: 'accessibility', label: 'Accessibility', icon: '♿' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-t-xl transition-all ${
                    activeTab === tab.id
                      ? 'bg-white text-red-700 shadow-sm border-t border-l border-r border-gray-200'
                      : 'bg-transparent text-gray-600 hover:bg-white/50'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* SERVICES TAB */}
            {activeTab === 'services' && (
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {services.map((service, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 hover:bg-gradient-to-br hover:from-red-50 hover:to-amber-50 rounded-xl transition-all border border-transparent hover:border-red-200 group">
                      <div className="flex flex-col items-start gap-2">
                        <span className="text-3xl group-hover:scale-110 transition-transform">{service.icon}</span>
                        <span className="text-sm font-medium text-gray-900 group-hover:text-red-700">{service.name}</span>
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">✓ Available</span>
                          {service.count && <span className="text-[10px] text-gray-500">{service.count}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick facility stats */}
                <div className="mt-6 pt-5 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-700">Total facilities: 24+</span>
                    <a href="#" className="text-xs text-red-600 hover:text-red-800 flex items-center gap-1">
                      View complete facility map
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* ATTRACTIONS TAB - Expanded */}
            {activeTab === 'attractions' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {nearbyAttractions.map((place, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors group">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">
                      🏛️
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900 group-hover:text-amber-700">{place.name}</h4>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">⭐ {place.rating}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">{place.type}</p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-600">
                        <span className="flex items-center gap-0.5">📍 {place.distance}</span>
                        <span className="text-gray-300">|</span>
                        <span className="flex items-center gap-0.5">⏱️ {place.time}</span>
                      </div>
                      {place.closedDay && (
                        <span className="text-[10px] mt-2 inline-block bg-red-50 text-red-600 px-2 py-0.5 rounded-full">
                          Closed {place.closedDay}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* EXITS TAB - Full gate list */}
            {activeTab === 'exits' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gates.map((gate, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-xl border-l-4 border-red-400 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-gray-900">{gate.number}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                            gate.accessibility.includes('Lift+Ramp') ? 'bg-purple-100 text-purple-700' : 
                            gate.accessibility.includes('Lift') ? 'bg-blue-100 text-blue-700' : 
                            'bg-green-100 text-green-700'
                          }`}>
                            {gate.accessibility}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700">{gate.direction}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {gate.landmarks.map((landmark, i) => (
                            <span key={i} className="text-[10px] bg-white px-2 py-1 rounded-md text-gray-600 border border-gray-200">
                              {landmark}
                            </span>
                          ))}
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          <span className="font-medium">Nearest: </span>{gate.nearest}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-1.5 rounded-full whitespace-nowrap">
                          {gate.busyHours}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ACCESSIBILITY TAB */}
            {activeTab === 'accessibility' && (
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <span className="text-2xl block mb-2">🛗</span>
                    <span className="text-sm font-medium text-gray-900">Elevators</span>
                    <span className="text-xs text-gray-600 block mt-1">6 units • All platforms</span>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl">
                    <span className="text-2xl block mb-2">♿</span>
                    <span className="text-sm font-medium text-gray-900">Wheelchair Ramps</span>
                    <span className="text-xs text-gray-600 block mt-1">All entrances</span>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-xl">
                    <span className="text-2xl block mb-2">🦮</span>
                    <span className="text-sm font-medium text-gray-900">Tactile Paths</span>
                    <span className="text-xs text-gray-600 block mt-1">Full station coverage</span>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <span className="text-2xl block mb-2">🔊</span>
                    <span className="text-sm font-medium text-gray-900">Audio Announcements</span>
                    <span className="text-xs text-gray-600 block mt-1">Hindi/English</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-600 text-lg">✅</span>
                    <span className="text-sm text-gray-700">Braille signage available at all ticket counters and platform edges</span>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-emerald-600 text-lg">✅</span>
                    <span className="text-sm text-gray-700">Assistance available on request - contact station staff (yellow vests)</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ========== FAQ SECTION - ACCORDION STYLE ========== */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center">
              <span className="text-amber-600 text-lg">❓</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.slice(0, 6).map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-xl overflow-hidden hover:border-red-200 transition-colors">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full px-5 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="text-sm font-medium text-gray-900">{faq.question}</span>
                  <span className={`text-gray-400 transition-transform duration-300 ${expandedFaq === faq.id ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-5 pb-4 pt-2 bg-gray-50 border-t border-gray-200">
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-5 text-center">
            <a href="#" className="text-xs text-red-600 hover:text-red-800 font-medium flex items-center justify-center gap-1">
              View all 8 FAQs
              <span>→</span>
            </a>
          </div>
        </div>

        {/* ========== DESTINATION GRID - TRAVEL FROM ========== */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center">
                <span className="text-teal-600 text-lg">🚇</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Travel from Kashmere Gate</h2>
            </div>
            <a href="#" className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full text-gray-700 transition-colors">
              Network map →
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              'Rajiv Chowk', 'New Delhi', 'Central Secretariat', 'Huda City',
              'Botanical Garden', 'IGI Airport', 'Noida City', 'Dwarka',
              'Vaishali', 'Mayur Vihar', 'Rohini', 'Lajpat Nagar',
              'Shahdara', 'GTB Nagar', 'Vishwavidyalaya', 'Saket'
            ].map((dest, idx) => (
              <div key={idx} className="group relative">
                <div className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gradient-to-r hover:from-red-50 hover:to-amber-50 rounded-xl transition-all cursor-pointer border border-transparent hover:border-red-200">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-red-700">{dest}</span>
                  <span className="text-xs text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== COMPLETE GUIDE - RESTYLED WITH HISTORY ========== */}
        <div className="mt-8 bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-red-100 to-amber-100 rounded-xl flex items-center justify-center">
              <span className="text-red-600 text-xl">📘</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Complete Guide to Kashmere Gate Station</h2>
          </div>

          {/* Heritage badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-medium text-amber-800">Since 2002 • Delhi's First Metro Station</span>
          </div>

          {/* Introduction - Rewritten */}
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-red-700 text-xl">Kashmere Gate</span> isn't just a metro station—it's where 
              Delhi's metro journey began. As India's first modern metro corridor's inaugural station and today's only 
              triple interchange, it represents the evolution of urban mobility in the capital. This historic transit hub 
              connects North, Central, and South Delhi through three intersecting corridors.
            </p>
          </div>

          {/* Station highlights - New design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-red-50 to-rose-50 p-5 rounded-xl border border-red-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-200 rounded-lg flex items-center justify-center text-red-700 text-xl">🏆</div>
                <h3 className="font-semibold text-red-900">First Station</h3>
              </div>
              <p className="text-sm text-red-800/80">Inaugurated on Dec 25, 2002 - Red Line's original terminal</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-200 rounded-lg flex items-center justify-center text-amber-700 text-xl">🔄</div>
                <h3 className="font-semibold text-amber-900">Triple Junction</h3>
              </div>
              <p className="text-sm text-amber-800/80">Only station with 3 intersecting lines in Delhi Metro</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-200 rounded-lg flex items-center justify-center text-purple-700 text-xl">🚌</div>
                <h3 className="font-semibold text-purple-900">ISBT Link</h3>
              </div>
              <p className="text-sm text-purple-800/80">Direct connectivity to North India's largest bus terminal</p>
            </div>
          </div>

          {/* Insider tips - Redesigned */}
          <div className="bg-gradient-to-r from-gray-900 via-red-900 to-gray-900 text-white p-6 rounded-2xl mb-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">💎</span>
              <h3 className="text-lg font-semibold">Local Secrets - From Our Community</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-amber-400 text-lg">→</span>
                <p className="text-sm text-gray-200">Exit C is shortest to ISBT (2 min), Exit A for buses to Himachal/UP</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-400 text-lg">→</span>
                <p className="text-sm text-gray-200">Less crowded 11:30-3:30 PM; avoid 5:30-7:30 PM for Violet Line</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-400 text-lg">→</span>
                <p className="text-sm text-gray-200">Red Line signs are red, Yellow are golden, Violet are purple - follow colors</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-400 text-lg">→</span>
                <p className="text-sm text-gray-200">Free WiFi: Connect to 'DMRC-Public', OTP valid 45 mins</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-400 text-lg">→</span>
                <p className="text-sm text-gray-200">Chai wala near Exit D - famous for cutting chai since 2003</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-400 text-lg">→</span>
                <p className="text-sm text-gray-200">Platform 2-3 have best mobile network (Jio/Airtel 5G)</p>
              </div>
            </div>
          </div>

          {/* Food & Shopping - Reorganized */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🍜</span>
                <h3 className="text-md font-semibold text-gray-900">Food Trail</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 text-sm">•</span>
                  <span className="text-sm text-gray-700"><span className="font-medium">Kashmere Gate Bazaar:</span> Chole bhature, aloo tikki - since 1960s</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 text-sm">•</span>
                  <span className="text-sm text-gray-700"><span className="font-medium">ISBT Food Plaza:</span> North Indian thalis, fresh juice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 text-sm">•</span>
                  <span className="text-sm text-gray-700"><span className="font-medium">Exit D Vendors:</span> Samosas, kachoris, jalebis (evening only)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🛍️</span>
                <h3 className="text-md font-semibold text-gray-900">Shopping Guide</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 text-sm">•</span>
                  <span className="text-sm text-gray-700"><span className="font-medium">Bhagirath Palace:</span> Electronics, medical equipment - Asia's largest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 text-sm">•</span>
                  <span className="text-sm text-gray-700"><span className="font-medium">Nai Sarak:</span> Books, stationery - wholesale rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 text-sm">•</span>
                  <span className="text-sm text-gray-700"><span className="font-medium">Chawri Bazaar:</span> Home decor, wedding cards</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Historical timeline */}
          <div className="bg-gray-50 p-6 rounded-2xl mb-8">
            <h3 className="text-md font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-xl">📅</span> Metro Milestones at Kashmere Gate
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-amber-500 to-purple-500"></div>
              <div className="space-y-4 pl-12">
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
                  <p className="text-sm font-medium text-gray-900">2002 - Red Line inaugurated</p>
                  <p className="text-xs text-gray-600">Delhi Metro's first corridor begins operations</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-4 h-4 bg-amber-500 rounded-full border-2 border-white"></div>
                  <p className="text-sm font-medium text-gray-900">2004 - Yellow Line connects</p>
                  <p className="text-xs text-gray-600">Becomes interchange station</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-4 h-4 bg-purple-500 rounded-full border-2 border-white"></div>
                  <p className="text-sm font-medium text-gray-900">2010 - Violet Line added</p>
                  <p className="text-xs text-gray-600">Becomes Delhi's only triple interchange</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                  <p className="text-sm font-medium text-gray-900">2022 - Major renovation</p>
                  <p className="text-xs text-gray-600">New elevators, digital signage, platform upgrade</p>
                </div>
              </div>
            </div>
          </div>

          {/* Community impact */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 rounded-2xl">
            <div className="flex items-start gap-4">
              <span className="text-5xl">“</span>
              <div>
                <p className="text-gray-200 italic leading-relaxed text-lg">
                  "I've been commuting through Kashmere Gate since 2002. This station isn't just concrete and steel—it's where 
                  I proposed to my wife, where my father took his first metro ride, and where thousands of Delhiites begin 
                  their stories every day. It's the heart of Delhi Metro."
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">
                    RP
                  </div>
                  <div>
                    <span className="text-sm font-medium text-white">Ramesh Prasad</span>
                    <p className="text-xs text-gray-400">Metro commuter since 2002 • Local historian</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

   
    </div>
  );
};

export default KashmereGateStation;