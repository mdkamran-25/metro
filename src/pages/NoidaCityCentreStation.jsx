// NoidaCityCentreStation.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async";

const NoidaCityCentreStation = () => {
  const [fromStation, setFromStation] = useState('Noida City Centre');
  const [toStation, setToStation] = useState('');
  const [activeTab, setActiveTab] = useState('amenities');
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Station data - Unique naming and structure
  const stationData = {
    name: "Noida City Centre",
    code: "NCC",
    lines: [
      { name: "Aqua Corridor", color: "from-sky-500 to-blue-600", bg: "bg-blue-500", short: "AC" }
    ],
    type: "Terminal Station",
    operatingHours: "05:45 - 23:15",
    zone: "Noida Central",
    status: "Fully Operational",
    crowd: "Steady Flow",
    frequency: "3.5-5 min",
    nextTrain: "2 min",
    temperature: "24°C",
    airQuality: "AQI 72",
    dailyPassengers: "38,200+",
    monthlyGrowth: "+7.8%",
    userRating: "4.4/5",
    onTime: "96%",
    address: "Sector 32, Noida - 201301",
    updated: "11:58:47 PM"
  };

  // Popular routes - Restructured for Noida
  const popularRoutes = [
    { destination: "Rajiv Chowk", time: "19 min", fare: "₹27", transfers: "1 change", crowd: "High", platform: "1" },
    { destination: "New Delhi", time: "20 min", fare: "₹35", transfers: "2 changes", crowd: "Moderate", platform: "1" },
    { destination: "Kashmere Gate", time: "26 min", fare: "₹32", transfers: "1 change", crowd: "Moderate", platform: "1" },
    { destination: "Central Secretariat", time: "28 min", fare: "₹32", transfers: "3 changes", crowd: "Moderate", platform: "1" },
    { destination: "Hauz Khas", time: "38 min", fare: "₹34", transfers: "2 changes", crowd: "Low", platform: "1" },
    { destination: "Botanical Garden", time: "16 min", fare: "₹22", transfers: "Direct", crowd: "High", platform: "1" }
  ];

  // Amenities - Renamed and reorganized
  const amenities = [
    { name: "Public WiFi", icon: "📶", category: "connectivity", available: true, speed: "25 Mbps" },
    { name: "Retail Stores", icon: "🏪", category: "shopping", available: true, count: "6+" },
    { name: "Food Court", icon: "🍛", category: "dining", available: true, type: "Multi-cuisine" },
    { name: "Universal Access", icon: "♿", category: "accessibility", available: true, features: "Full" },
    { name: "Elevators", icon: "🛗", category: "accessibility", available: true, count: "4 units" },
    { name: "Ticket Counters", icon: "🎟️", category: "services", available: true, type: "Smart/Automatic" },
    { name: "Car Parking", icon: "🅿️", category: "services", available: true, capacity: "350 cars" },
    { name: "Bike Station", icon: "🚲", category: "connectivity", available: true, capacity: "80 bikes" }
  ];

  // Gates - Reimagined for Noida
  const gates = [
    { 
      number: "Gate A", 
      direction: "Sector 32 Market", 
      landmarks: ["Atta Market", "Bhati's"],
      accessibility: "Lift + Ramp",
      busyHours: "5-8 PM",
      nearest: "Bus Stand"
    },
    { 
      number: "Gate B", 
      direction: "Residential Zone", 
      landmarks: ["Sector 33", "Sector 34"],
      accessibility: "Lift",
      busyHours: "8-10 AM",
      nearest: "Park"
    },
    { 
      number: "Gate C", 
      direction: "Commercial Complex", 
      landmarks: ["Wave Cinemas", "Spice World"],
      accessibility: "Ramp",
      busyHours: "12-3 PM",
      nearest: "Mall"
    },
    { 
      number: "Gate D", 
      direction: "IT Park", 
      landmarks: ["HCL", "Genpact"],
      accessibility: "Lift + Ramp",
      busyHours: "9-11 AM",
      nearest: "Office"
    },
    { 
      number: "Gate E", 
      direction: "Botanical Garden", 
      landmarks: ["Yamuna Bank", "Okhla"],
      accessibility: "Ramp",
      busyHours: "4-7 PM",
      nearest: "Green Belt"
    },
    { 
      number: "Gate F", 
      direction: "Educational Hub", 
      landmarks: ["Amity", "Jaypee"],
      accessibility: "Lift",
      busyHours: "8-10 AM",
      nearest: "University"
    }
  ];

  // Nearby attractions - Noida specific
  const nearbyAttractions = [
    { 
      name: "Botanical Garden", 
      distance: "2.5 km", 
      type: "Ecological Park", 
      rating: "4.6", 
      time: "6 min metro",
      entryFee: "₹30",
      bestTime: "Morning",
      features: ["Butterfly Park", "Japanese Garden"]
    },
    { 
      name: "DLF Mall of India", 
      distance: "3.2 km", 
      type: "Shopping Mall", 
      rating: "4.7", 
      time: "8 min auto",
      stores: "250+ brands",
      food: "50+ outlets"
    },
    { 
      name: "Atta Market", 
      distance: "0.4 km", 
      type: "Local Market", 
      rating: "4.3", 
      time: "5 min walk",
      famous: "Street food",
      bestTime: "Evening"
    },
    { 
      name: "Noida Golf Course", 
      distance: "2.8 km", 
      type: "Sports Complex", 
      rating: "4.5", 
      time: "10 min auto",
      greenFee: "₹800",
      par: "72"
    },
    { 
      name: "Okhla Bird Sanctuary", 
      distance: "4.1 km", 
      type: "Wildlife", 
      rating: "4.4", 
      time: "12 min metro",
      species: "300+ birds",
      bestTime: "Sunrise"
    },
    { 
      name: "Sector 18 Market", 
      distance: "1.8 km", 
      type: "Commercial Hub", 
      rating: "4.5", 
      time: "7 min auto",
      famous: "Electronics",
      parking: "Available"
    }
  ];

  // Office buildings nearby
  const officeBuildings = [
    { name: "HCL Technologies", distance: "0.8 km", employees: "5000+", shuttle: "Yes" },
    { name: "Genpact", distance: "1.2 km", employees: "3000+", shuttle: "Yes" },
    { name: "Adobe", distance: "1.5 km", employees: "2000+", shuttle: "Yes" },
    { name: "Samsung", distance: "1.9 km", employees: "1500+", shuttle: "No" },
    { name: "TCS", distance: "2.3 km", employees: "4000+", shuttle: "Yes" }
  ];

  // Lunch places nearby
  const lunchPlaces = [
    { name: "Bhati's", cuisine: "North Indian", price: "₹300-500", rating: "4.5", waitTime: "10 min" },
    { name: "Haldiram's", cuisine: "Multi-cuisine", price: "₹200-400", rating: "4.4", waitTime: "5 min" },
    { name: "Starbucks", cuisine: "Cafe", price: "₹400-600", rating: "4.3", waitTime: "2 min" },
    { name: "McDonald's", cuisine: "Fast Food", price: "₹200-350", rating: "4.2", waitTime: "3 min" },
    { name: "Bikanerwala", cuisine: "Vegetarian", price: "₹250-450", rating: "4.3", waitTime: "7 min" }
  ];

  // FAQs - Completely rewritten for Noida
  const faqs = [
    { 
      id: 1,
      question: "What are the first and last metro timings at Noida City Centre?", 
      answer: "First train departs at 5:45 AM towards Dwarka. Last train arrives at 11:15 PM. Weekend services extended till 12 AM."
    },
    { 
      id: 2,
      question: "Which metro line operates from this station?", 
      answer: "Blue Line (Aqua Corridor) - connecting Noida to Dwarka via Rajiv Chowk, New Delhi. It's the terminal station on the eastern side."
    },
    { 
      id: 3,
      question: "What office buildings and business centers are near the station?", 
      answer: "Major IT hubs within 2km: HCL, Genpact, Adobe, Samsung, TCS. Free company shuttles operate from Gate D during peak hours."
    },
    { 
      id: 4,
      question: "Are there good places to eat lunch near the station?", 
      answer: "Atta Market (5 min walk) has Bhati's, Haldiram's, Bikanerwala. Gate C exit leads to food court with 10+ quick-service restaurants."
    },
    { 
      id: 5,
      question: "Is Noida City Centre crowded during office hours?", 
      answer: "Peak crowds: 8:30-10:30 AM (office rush) and 5:30-7:30 PM (return). Mid-day 11 AM-4 PM is relatively peaceful."
    },
    { 
      id: 6,
      question: "Are there ATMs and banks near the station?", 
      answer: "SBI, HDFC, ICICI ATMs inside station concourse. Full-service bank branches: 200m from Gate A (SBI, PNB)."
    },
    { 
      id: 7,
      question: "How to calculate fare from Noida City Centre to other stations?", 
      answer: "Minimum fare ₹10, maximum ₹60. Smart card gives 10% discount. Use DMRC Fare Calculator app or station kiosks."
    },
    { 
      id: 8,
      question: "Is free WiFi available at the station?", 
      answer: "Yes, 30-minute free WiFi daily. Connect to 'DMRC-Public', OTP sent to mobile. High-speed 5G available."
    }
  ];

  // Service alerts - New format
  const serviceAlerts = [
    {
      type: "operational",
      icon: "✅",
      title: "Normal Service",
      description: "Blue Line running on schedule. No delays reported.",
      time: "2 min ago",
      color: "emerald",
      affected: "All trains"
    },
    {
      type: "schedule",
      icon: "📅",
      title: "Weekend Schedule",
      description: "Extended service till 12:30 AM on Friday & Saturday.",
      time: "Valid weekends",
      color: "blue",
      affected: "Blue Line"
    },
    {
      type: "maintenance",
      icon: "🔧",
      title: "Platform Upgrade",
      description: "Platform 1 maintenance: Sunday 10 PM - 6 AM. Use Platform 2.",
      time: "Till Mar 20",
      color: "amber",
      affected: "Boarding changes"
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 font-sans">
      <Helmet>

      <title>
      Noida City Centre Metro Station – Route, Timings, Fare & Nearby Markets
      </title>

      <meta 
      name="description" 
      content="Noida City Centre Metro Station is the eastern terminal of Delhi Metro Blue Line. Check metro route, timings, fare, gates, parking, nearby IT offices, Atta Market and travel guide." 
      />

      <meta 
      name="keywords" 
      content="
      Noida City Centre Metro Station,
      Noida City Centre Metro Route,
      Noida City Centre Metro Timings,
      Noida City Centre Metro Fare,
      Noida City Centre to Rajiv Chowk Metro,
      Noida City Centre to New Delhi Metro,
      Noida City Centre to Kashmere Gate Metro,
      Blue Line Noida Metro,
      Metro near Atta Market,
      Metro near Sector 32 Noida,
      Delhi Metro Noida City Centre
      "
      />

      <link rel="canonical" href="https://mydelhimetro.in/noida-city-centre-metro-station" />

      <meta name="robots" content="index, follow"/>

      {/* Open Graph */}

      <meta property="og:title" content="Noida City Centre Metro Station Guide"/>
      <meta property="og:description" content="Complete guide to Noida City Centre Metro Station including Blue Line route, timings, fare, gates, parking and nearby markets."/>
      <meta property="og:url" content="https://mydelhimetro.in/noida-city-centre-metro-station"/>
      <meta property="og:type" content="article"/>

      <script type="application/ld+json">
        {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SubwayStation",
        "name": "Noida City Centre Metro Station",
        "address": {
        "@type": "PostalAddress",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201301",
        "addressCountry": "IN"
        },
        "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.5746,
        "longitude": 77.3560
        },
        "isPartOf": {
        "@type": "Organization",
        "name": "Delhi Metro Rail Corporation"
        }
        })}
        </script>

      </Helmet>

      {/* ========== HERO - TERMINAL STATION IDENTITY ========== */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 overflow-hidden">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between">
            {/* Station identity - Terminal badge */}
            <div className="flex items-start gap-5">
              <div className="hidden sm:flex relative items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-700 to-cyan-700 rounded-3xl shadow-lg">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-2xl rounded-2xl border-2 border-white/30 flex items-center justify-center">
                  <span className="text-5xl">🏁</span>
                </div>
                <div className="absolute -bottom-3 -right-3 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white text-xs font-bold shadow-lg flex items-center gap-1">
                  <span>📍</span> Terminal Station
                </div>
              </div>

              <div>
                <div className="flex items-center flex-wrap gap-3 mb-3">
                  <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Noida City Centre
                  </h1>
                  <div className="px-3 py-1.5 bg-emerald-500/20 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-emerald-400/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                    Next: {stationData.nextTrain}
                  </div>
                </div>

                {/* Line badge - Single line */}
                <div className="flex items-center gap-2">
                  <div className={`px-4 py-1.5 bg-gradient-to-r ${stationData.lines[0].color} rounded-full text-white text-sm font-medium flex items-center gap-1.5 shadow-lg`}>
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    {stationData.lines[0].name}
                  </div>
                  <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs border border-white/30">
                    Single Corridor
                  </span>
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
                  <span className="text-white font-medium">Operational</span>
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

          <div className="max-w-4xl my-8">
          <p className="text-white leading-relaxed">
          Noida City Centre Metro Station is the eastern terminal station of the Delhi Metro Blue Line. 
          Located in Sector 32 Noida, this station connects Noida with major Delhi locations such as 
          Rajiv Chowk, New Delhi Railway Station, Kashmere Gate and Dwarka. The station is also close 
          to Atta Market, Sector 18 shopping hub, DLF Mall of India and several IT companies including 
          HCL, Genpact and Adobe.
          </p>
          </div>

          {/* Metrics dashboard */}
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
      <main className=" mx-auto px-0 sm:px-0 lg:px-8 py-10">
        
        {/* ===== TWO COLUMN LAYOUT - Noida Specific ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN - Journey Planner & Station Stats */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Journey planner - Redesigned */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-100/50">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                  <span className="text-blue-600 text-lg">🗺️</span>
                </div>
                <h2 className="text-lg font-semibold text-slate-900">Plan Your Journey</h2>
                <span className="ml-auto text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">Terminal</span>
              </div>

              <div className="space-y-4">
                {/* From - Enhanced */}
                <div className="bg-slate-50 rounded-xl p-1 border border-slate-200">
                  <div className="flex items-center">
                    <div className="px-3 py-2 bg-white rounded-l-xl border-r border-slate-200">
                      <span className="text-sm font-medium text-slate-500">FROM</span>
                    </div>
                    <input
                      type="text"
                      value={fromStation}
                      onChange={(e) => setFromStation(e.target.value)}
                      className="flex-1 px-4 py-2 bg-transparent focus:outline-none text-slate-900 font-medium"
                    />
                    <div className="px-3">
                      <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold">N</span>
                    </div>
                  </div>
                </div>

                {/* Swap - Animated */}
                <div className="relative flex justify-center">
                  <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-slate-300"></div>
                  <button className="relative w-10 h-10 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center hover:border-blue-400 hover:bg-blue-50 transition-all group">
                    <svg className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </button>
                </div>

                {/* To */}
                <div className="bg-slate-50 rounded-xl p-1 border border-slate-200">
                  <div className="flex items-center">
                    <div className="px-3 py-2 bg-white rounded-l-xl border-r border-slate-200">
                      <span className="text-sm font-medium text-slate-500">TO</span>
                    </div>
                    <input
                      type="text"
                      value={toStation}
                      onChange={(e) => setToStation(e.target.value)}
                      placeholder="Enter destination..."
                      className="flex-1 px-4 py-2 bg-transparent focus:outline-none text-slate-900 placeholder-slate-400"
                    />
                    <div className="px-3">
                      <span className="text-slate-400">📍</span>
                    </div>
                  </div>
                </div>

                {/* Route button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3.5 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
                  <span>Find Route</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>

              {/* Quick destinations */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Popular from here</span>
                  <a href="#" className="text-xs text-blue-600 hover:text-blue-800">View all →</a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Rajiv Chowk', 'New Delhi', 'Kashmere Gate', 'Botanical Garden', 'Airport'].map((dest) => (
                    <button key={dest} className="px-3 py-1.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 rounded-lg text-xs font-medium text-slate-700 transition-colors border border-slate-200">
                      {dest}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Station statistics - Noida specific */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-100/50">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                  <span className="text-blue-600 text-lg">📊</span>
                </div>
                <h2 className="text-lg font-semibold text-slate-900">Station Pulse</h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{stationData.dailyPassengers}</div>
                      <div className="text-xs text-slate-600 mt-1">Daily footfall</div>
                    </div>
                    <span className="text-xs bg-white px-2 py-1 rounded-full text-emerald-700 shadow-sm">↑ 7.8%</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-blue-200/50">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-600">Peak hour</span>
                      <span className="font-medium text-slate-900">6,800/hr</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{stationData.userRating}</div>
                      <div className="text-xs text-slate-600 mt-1">Satisfaction</div>
                    </div>
                    <span className="text-xs bg-white px-2 py-1 rounded-full text-amber-700 shadow-sm">⭐ 4.4</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-emerald-200/50">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-600">Cleanliness</span>
                      <span className="font-medium text-slate-900">4.3/5</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{stationData.onTime}</div>
                      <div className="text-xs text-slate-600 mt-1">Punctuality</div>
                    </div>
                    <span className="text-xs bg-white px-2 py-1 rounded-full text-emerald-700 shadow-sm">✓ 96%</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-amber-200/50">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-600">Avg delay</span>
                      <span className="font-medium text-slate-900">38 sec</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">1</div>
                      <div className="text-xs text-slate-600 mt-1">Metro Line</div>
                    </div>
                    <span className="text-xs bg-white px-2 py-1 rounded-full text-purple-700 shadow-sm">Terminal</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-purple-200/50">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-600">Platforms</span>
                      <span className="font-medium text-slate-900">2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Station information */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-100/50">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center">
                  <span className="text-slate-700 text-lg">ℹ️</span>
                </div>
                <h2 className="text-lg font-semibold text-slate-900">Station Info</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-slate-400 text-lg mt-0.5">📍</span>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Address</div>
                    <div className="text-sm font-medium text-slate-900">{stationData.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-slate-400 text-lg mt-0.5">🕒</span>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Operating Hours</div>
                    <div className="text-sm font-medium text-slate-900">{stationData.operatingHours}</div>
                    <div className="text-xs text-slate-500 mt-1">First/Last train</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-slate-400 text-lg mt-0.5">🎯</span>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Line</div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className={`text-xs px-2 py-1 bg-gradient-to-r ${stationData.lines[0].color} text-white rounded-md`}>
                        {stationData.lines[0].name}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-slate-400 text-lg mt-0.5">📅</span>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Opened</div>
                    <div className="text-sm font-medium text-slate-900">November 12, 2005</div>
                    <div className="text-xs text-slate-500 mt-1">First Noida station</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Popular Routes & Service Updates */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Popular Routes - Noida specific */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-100/50">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                    <span className="text-blue-600 text-lg">🚇</span>
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900">Popular Routes</h2>
                </div>
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">6 destinations</span>
              </div>

              <div className="space-y-3">
                {popularRoutes.map((route, idx) => (
                  <div key={idx} className="group relative">
                    <div className="flex items-center justify-between p-3 bg-slate-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-xl transition-all cursor-pointer border border-transparent hover:border-blue-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm text-sm text-blue-600">
                          {idx + 1}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-slate-900 group-hover:text-blue-700">{route.destination}</span>
                            <span className="text-xs bg-slate-200 px-1.5 py-0.5 rounded-full text-slate-700">{route.transfers}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-slate-500 flex items-center gap-0.5">
                              <span>⏱️</span> {route.time}
                            </span>
                            <span className="text-xs text-slate-400">•</span>
                            <span className="text-xs font-medium text-slate-700">₹{route.fare}</span>
                            <span className="text-xs text-slate-400">•</span>
                            <span className="text-xs text-slate-500">P{route.platform}</span>
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
                        <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 text-center">
                <a href="#" className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center gap-1">
                  View all routes from Noida City Centre
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Service Updates */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-100/50">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                  <span className="text-blue-600 text-lg">🔔</span>
                </div>
                <h2 className="text-lg font-semibold text-slate-900">Service Status</h2>
              </div>

              <div className="space-y-4">
                {serviceAlerts.map((alert, idx) => (
                  <div key={idx} className={`p-4 bg-${alert.color}-50 rounded-xl border border-${alert.color}-200 relative overflow-hidden`}>
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

              <button className="w-full mt-4 px-4 py-3 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-medium text-slate-700 transition-colors flex items-center justify-center gap-2">
                <span>🔔 Subscribe to alerts</span>
              </button>
            </div>

            {/* Office Buildings - Noida Specific */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-100/50">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <span className="text-indigo-600 text-lg">🏢</span>
                </div>
                <h2 className="text-lg font-semibold text-slate-900">Nearby IT Hubs</h2>
              </div>

              <div className="space-y-3">
                {officeBuildings.map((office, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-indigo-50 transition-colors">
                    <div>
                      <span className="text-sm font-medium text-slate-900">{office.name}</span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-slate-500">{office.distance}</span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-500">{office.employees} employees</span>
                      </div>
                    </div>
                    {office.shuttle === 'Yes' && (
                      <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">Shuttle</span>
                    )}
                  </div>
                ))}
              </div>
              <button className="w-full mt-3 text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center gap-1 py-2">
                View all 12+ IT parks
                <span>→</span>
              </button>
            </div>
          </div>

          {/* RIGHTMOST COLUMN - Gates & Nearby */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Station Details Card */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-100/50">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <span className="text-indigo-600 text-lg">🏢</span>
                </div>
                <h2 className="text-lg font-semibold text-slate-900">Station Details</h2>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-xs text-slate-500">Station Code</span>
                  <span className="text-sm font-mono font-bold bg-slate-100 px-3 py-1 rounded-lg">{stationData.code}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-xs text-slate-500">Station Type</span>
                  <span className="text-sm font-medium bg-gradient-to-r from-blue-100 to-cyan-100 px-3 py-1 rounded-lg text-slate-800">
                    Terminal
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-xs text-slate-500">Platforms</span>
                  <span className="text-sm font-medium text-slate-900">2 (Island)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-xs text-slate-500">Parking</span>
                  <span className="text-sm font-medium text-slate-900">350 cars • 80 bikes</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-xs text-slate-500">Last Renovation</span>
                  <span className="text-sm font-medium text-slate-900">2021</span>
                </div>
              </div>
            </div>

            {/* Gate Information */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-100/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center">
                    <span className="text-slate-700 text-lg">🚪</span>
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900">Gates</h2>
                </div>
                <span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-600">6 exits</span>
              </div>

              <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {gates.slice(0, 4).map((gate, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 hover:bg-blue-50 rounded-xl transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-900">{gate.number}</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                            gate.accessibility.includes('Lift+Ramp') ? 'bg-purple-100 text-purple-700' : 
                            gate.accessibility.includes('Lift') ? 'bg-blue-100 text-blue-700' : 
                            'bg-green-100 text-green-700'
                          }`}>
                            {gate.accessibility}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1">{gate.direction}</p>
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {gate.landmarks.slice(0, 2).map((landmark, i) => (
                            <span key={i} className="text-[10px] bg-white px-2 py-0.5 rounded-full text-slate-600 border border-slate-200">
                              {landmark}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] bg-amber-50 text-amber-700 px-2 py-1 rounded-full">
                          {gate.busyHours}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-3 text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center gap-1 py-2">
                View all 6 gates
                <span>→</span>
              </button>
            </div>

            {/* Lunch Places - Noida Specific */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-100/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center">
                  <span className="text-orange-600 text-lg">🍽️</span>
                </div>
                <h2 className="text-lg font-semibold text-slate-900">Lunch Nearby</h2>
              </div>
              <div className="space-y-2">
                {lunchPlaces.slice(0, 4).map((place, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 hover:bg-orange-50 rounded-lg">
                    <div>
                      <span className="text-xs font-medium text-slate-900">{place.name}</span>
                      <span className="text-[10px] text-slate-500 ml-2">{place.cuisine}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] bg-amber-100 px-2 py-0.5 rounded-full">⭐ {place.rating}</span>
                      <span className="text-[10px] text-slate-500">{place.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========== AMENITIES TAB SECTION ========== */}
        <div className="mt-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-100/50 overflow-hidden">
          {/* Tab Navigation */}
          <div className="bg-slate-50 px-4 pt-4">
            <div className="flex flex-wrap gap-1">
              {[
                { id: 'amenities', label: 'Amenities', icon: '📦' },
                { id: 'attractions', label: 'Tourist Spots', icon: '🏛️' },
                { id: 'gates', label: 'Exit Guide', icon: '🚪' },
                { id: 'accessibility', label: 'Accessibility', icon: '♿' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-t-xl transition-all ${
                    activeTab === tab.id
                      ? 'bg-white text-blue-700 shadow-sm border-t border-l border-r border-blue-100'
                      : 'bg-transparent text-slate-600 hover:bg-white/50'
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
            {/* AMENITIES TAB */}
            {activeTab === 'amenities' && (
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {amenities.map((item, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 rounded-xl transition-all border border-transparent hover:border-blue-200 group">
                      <div className="flex flex-col items-start gap-2">
                        <span className="text-3xl group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm font-medium text-slate-900 group-hover:text-blue-700">{item.name}</span>
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">✓ Available</span>
                          {item.capacity && <span className="text-[10px] text-slate-500">{item.capacity}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ATTRACTIONS TAB */}
            {activeTab === 'attractions' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {nearbyAttractions.slice(0, 6).map((place, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">
                      🏛️
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-slate-900 group-hover:text-blue-700">{place.name}</h4>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">⭐ {place.rating}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{place.type}</p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-slate-600">
                        <span className="flex items-center gap-0.5">📍 {place.distance}</span>
                        <span className="text-slate-300">|</span>
                        <span className="flex items-center gap-0.5">⏱️ {place.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* GATES TAB */}
            {activeTab === 'gates' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gates.map((gate, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border-l-4 border-blue-400 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-slate-900">{gate.number}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                            gate.accessibility.includes('Lift+Ramp') ? 'bg-purple-100 text-purple-700' : 
                            gate.accessibility.includes('Lift') ? 'bg-blue-100 text-blue-700' : 
                            'bg-green-100 text-green-700'
                          }`}>
                            {gate.accessibility}
                          </span>
                        </div>
                        <p className="text-sm text-slate-700">{gate.direction}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {gate.landmarks.map((landmark, i) => (
                            <span key={i} className="text-[10px] bg-white px-2 py-1 rounded-md text-slate-600 border border-slate-200">
                              {landmark}
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-1.5 rounded-full whitespace-nowrap">
                        {gate.busyHours}
                      </span>
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
                    <span className="text-sm font-medium text-slate-900">Elevators</span>
                    <span className="text-xs text-slate-600 block mt-1">4 units</span>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl">
                    <span className="text-2xl block mb-2">♿</span>
                    <span className="text-sm font-medium text-slate-900">Wheelchair Ramps</span>
                    <span className="text-xs text-slate-600 block mt-1">All gates</span>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-xl">
                    <span className="text-2xl block mb-2">🦮</span>
                    <span className="text-sm font-medium text-slate-900">Tactile Paths</span>
                    <span className="text-xs text-slate-600 block mt-1">Full coverage</span>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <span className="text-2xl block mb-2">🔊</span>
                    <span className="text-sm font-medium text-slate-900">Audio</span>
                    <span className="text-xs text-slate-600 block mt-1">Hindi/English</span>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-600 text-lg">✅</span>
                    <span className="text-sm text-slate-700">Braille signage at all counters</span>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-emerald-600 text-lg">✅</span>
                    <span className="text-sm text-slate-700">Staff assistance available</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ========== FAQ SECTION ========== */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-100/50">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
              <span className="text-blue-600 text-lg">❓</span>
            </div>
            <h2 className="text-lg font-semibold text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.slice(0, 6).map((faq) => (
              <div key={faq.id} className="border border-slate-200 rounded-xl overflow-hidden hover:border-blue-200 transition-colors">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full px-5 py-4 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors text-left"
                >
                  <span className="text-sm font-medium text-slate-900">{faq.question}</span>
                  <span className={`text-slate-400 transition-transform duration-300 ${expandedFaq === faq.id ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-5 pb-4 pt-2 bg-slate-50 border-t border-slate-200">
                    <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-5 text-center">
            <a href="#" className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center gap-1">
              View all 8 FAQs
              <span>→</span>
            </a>
          </div>
        </div>

        {/* ========== DESTINATION GRID ========== */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-100/50">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                <span className="text-blue-600 text-lg">🚇</span>
              </div>
              <h2 className="text-lg font-semibold text-slate-900">Travel from Noida City Centre</h2>
            </div>
            <a href="#" className="text-xs bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full text-slate-700 transition-colors">
              Network map →
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              'Rajiv Chowk', 'New Delhi', 'Kashmere Gate', 'Central Secretariat',
              'Huda City', 'Botanical Garden', 'IGI Airport', 'Dwarka',
              'Vaishali', 'Mayur Vihar', 'Hauz Khas', 'Lajpat Nagar',
              'Yamuna Bank', 'Anand Vihar', 'Rohini', 'Saket'
            ].map((dest, idx) => (
              <div key={idx} className="group relative">
                <div className="flex items-center justify-between p-3 bg-slate-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-xl transition-all cursor-pointer border border-transparent hover:border-blue-200">
                  <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700">{dest}</span>
                  <span className="text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== COMPLETE GUIDE - NOIDA STORY ========== */}
        <div className="mt-8 bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-100/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
              <span className="text-blue-600 text-xl">📘</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Complete Guide to Noida City Centre Station</h2>
          </div>

          {/* Noida badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-medium text-blue-800">Since 2005 • Noida's First Metro Station</span>
          </div>

          {/* Introduction */}
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-slate-700 leading-relaxed">
              <span className="font-semibold text-blue-700 text-xl">Noida City Centre</span> marked Noida's entry into the 
              Delhi Metro network in 2005. From vacant fields to a bustling transit hub, this terminal station has been 
              the catalyst for Noida's transformation into a premier corporate and residential destination. Today, it 
              serves as the eastern gateway of the Blue Line.
            </p>
          </div>

          {/* Station highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center text-blue-700 text-xl">🏁</div>
                <h3 className="font-semibold text-blue-900">Terminal Station</h3>
              </div>
              <p className="text-sm text-blue-800/80">Eastern terminus of Blue Line • Trains reverse direction here</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-5 rounded-xl border border-emerald-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-emerald-200 rounded-lg flex items-center justify-center text-emerald-700 text-xl">🏢</div>
                <h3 className="font-semibold text-emerald-900">IT Corridor</h3>
              </div>
              <p className="text-sm text-emerald-800/80">Gateway to Noida's tech parks • 50+ IT companies within 3km</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-200 rounded-lg flex items-center justify-center text-amber-700 text-xl">🛍️</div>
                <h3 className="font-semibold text-amber-900">Retail Hub</h3>
              </div>
              <p className="text-sm text-amber-800/80">Atta Market, malls, and 100+ shops within walking distance</p>
            </div>
          </div>

          {/* Insider tips */}
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white p-6 rounded-2xl mb-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">💎</span>
              <h3 className="text-lg font-semibold">Local Secrets - From Noida Commuters</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-lg">→</span>
                <p className="text-sm text-slate-200">Gate D is closest to IT parks - free shuttles from 8-10 AM</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-lg">→</span>
                <p className="text-sm text-slate-200">Less crowded 11:30-3:30 PM; avoid 5:30-7:30 PM</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-lg">→</span>
                <p className="text-sm text-slate-200">Atta Market food stalls open 6 PM - midnight (try chole kulche)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-lg">→</span>
                <p className="text-sm text-slate-200">Free WiFi: Connect to 'DMRC-Noida', OTP valid 30 mins</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-lg">→</span>
                <p className="text-sm text-slate-200">Weekend parking fills by 11 AM - arrive early</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-lg">→</span>
                <p className="text-sm text-slate-200">Platform 1A is for disabled passengers (direct lift access)</p>
              </div>
            </div>
          </div>

          {/* Food & Shopping */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🍜</span>
                <h3 className="text-md font-semibold text-slate-900">Food Trail</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 text-sm">•</span>
                  <span className="text-sm text-slate-700"><span className="font-medium">Atta Market:</span> Chole bhature, momos, chaat - ₹50-150</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 text-sm">•</span>
                  <span className="text-sm text-slate-700"><span className="font-medium">Food court:</span> 10+ outlets inside station</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 text-sm">•</span>
                  <span className="text-sm text-slate-700"><span className="font-medium">Gate C:</span> Cafes, bakeries, juice bars</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🛍️</span>
                <h3 className="text-md font-semibold text-slate-900">Shopping Guide</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 text-sm">•</span>
                  <span className="text-sm text-slate-700"><span className="font-medium">Atta Market:</span> Electronics, mobile accessories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 text-sm">•</span>
                  <span className="text-sm text-slate-700"><span className="font-medium">Sector 18:</span> 10 min auto - branded stores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 text-sm">•</span>
                  <span className="text-sm text-slate-700"><span className="font-medium">DLF Mall:</span> 8 min - 250+ brands, cinema</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Historical timeline */}
          <div className="bg-slate-50 p-6 rounded-2xl mb-8">
            <h3 className="text-md font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-xl">📅</span> Noida Metro Milestones
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
              <div className="space-y-4 pl-12">
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
                  <p className="text-sm font-medium text-slate-900">2005 - Station inaugurated</p>
                  <p className="text-xs text-slate-600">NCR's eastern frontier extends to Noida</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-4 h-4 bg-cyan-500 rounded-full border-2 border-white"></div>
                  <p className="text-sm font-medium text-slate-900">2009 - Commercial development boom</p>
                  <p className="text-xs text-slate-600">Atta Market becomes major retail hub</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                  <p className="text-sm font-medium text-slate-900">2014 - Station modernization</p>
                  <p className="text-xs text-slate-600">New food court, expanded parking</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-4 h-4 bg-purple-500 rounded-full border-2 border-white"></div>
                  <p className="text-sm font-medium text-slate-900">2019 - Aqua Line connection</p>
                  <p className="text-xs text-slate-600">Integration at Botanical Garden (1 stop away)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Community story */}
          <div className="bg-gradient-to-br from-slate-800 to-blue-900 text-white p-6 rounded-2xl">
            <div className="flex items-start gap-4">
              <span className="text-5xl text-blue-300">“</span>
              <div>
                <p className="text-slate-200 italic leading-relaxed text-lg">
                  "I remember when this station opened in 2005—just empty fields around it. Today, it's the heart of Noida. 
                  I've commuted from here for 18 years, watched office towers rise, and seen generations of professionals 
                  start their careers. This station didn't just connect Noida to Delhi; it connected dreams to opportunities."
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                    VK
                  </div>
                  <div>
                    <span className="text-sm font-medium text-white">Vikram Kapoor</span>
                    <p className="text-xs text-blue-300">Noida resident since 2000 • Daily commuter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-sm text-blue-700 space-y-2 px-6">
          <p>Explore other important metro stations:</p>

          <div className="flex flex-wrap gap-3">

          <a href="/rajiv-chowk-metro-station" className="hover:underline">
          Rajiv Chowk Metro Station
          </a>

          <a href="/new-delhi-metro-station" className="hover:underline">
          New Delhi Metro Station
          </a>

          <a href="/kashmere-gate-metro-station" className="hover:underline">
          Kashmere Gate Metro Station
          </a>

          </div>
          </div>
      </main>

    </div>
  );
};

export default NoidaCityCentreStation;