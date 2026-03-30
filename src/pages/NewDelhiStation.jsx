// NewDelhiStation.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async";


const NewDelhiStation = () => {
  const [fromStation, setFromStation] = useState('New Delhi');
  const [toStation, setToStation] = useState('');
  const [activeTab, setActiveTab] = useState('amenities');
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Station data - Unique naming and structure
  const stationData = {
    name: "New Delhi",
    code: "NDL",
    lines: [
      { name: "Golden Corridor", color: "from-amber-400 to-yellow-500", bg: "bg-amber-500", short: "GC" },
      { name: "Aerocity Link", color: "from-orange-400 to-orange-500", bg: "bg-orange-500", short: "AL" }
    ],
    type: "Major Junction",
    operatingHours: "05:45 - 23:15",
    zone: "Central District",
    status: "Operational",
    crowd: "Steady Flow",
    frequency: "4 min avg",
    nextTrain: "2 min",
    temperature: "24°C",
    airQuality: "AQI 78",
    dailyPassengers: "52,300+",
    monthlyGrowth: "+8.3%",
    userRating: "4.5/5",
    onTime: "96%",
    address: "Ajmeri Gate, New Delhi - 110001",
    updated: "11:42:15 PM"
  };

  // Popular routes - Restructured
  const popularRoutes = [
    { destination: "Rajiv Chowk", time: "11 min", fare: "₹20", transfers: "Direct", crowd: "Moderate" },
    { destination: "Kashmere Gate", time: "18 min", fare: "₹30", transfers: "1 change", crowd: "Busy" },
    { destination: "Central Secretariat", time: "8 min", fare: "₹25", transfers: "Direct", crowd: "Light" },
    { destination: "Hauz Khas", time: "22 min", fare: "₹35", transfers: "1 change", crowd: "Moderate" },
    { destination: "Botanical Garden", time: "35 min", fare: "₹45", transfers: "2 changes", crowd: "Light" },
    { destination: "IGI Airport", time: "15 min", fare: "₹50", transfers: "Direct", crowd: "Busy" }
  ];

  // Amenities - Renamed and reorganized
  const amenities = [
    { name: "High-Speed WiFi", icon: "📶", category: "connectivity", available: true },
    { name: "Retail Outlets", icon: "🏪", category: "shopping", available: true },
    { name: "Dining Zone", icon: "🍜", category: "food", available: true },
    { name: "Universal Access", icon: "♿", category: "accessibility", available: true },
    { name: "Vertical Transport", icon: "🛗", category: "accessibility", available: true },
    { name: "Booking Counters", icon: "🎟️", category: "services", available: true },
    { name: "Vehicle Parking", icon: "🅿️", category: "services", available: true },
    { name: "Bike Station", icon: "🚲", category: "connectivity", available: true }
  ];

  // Gates - Reimagined with new names
  const gates = [
    { 
      number: "Portal A", 
      direction: "Railway Terminal", 
      landmarks: ["New Delhi Railway", "Paharganj"],
      accessibility: "Lift",
      busy: "Peak 8-10 AM"
    },
    { 
      number: "Portal B", 
      direction: "Connaught Place", 
      landmarks: ["CP Outer Circle", "Regal Building"],
      accessibility: "Ramp",
      busy: "Evening 6-8 PM"
    },
    { 
      number: "Portal C", 
      direction: "Ajmeri Gate", 
      landmarks: ["Old Delhi", "Delhi Gate"],
      accessibility: "Lift + Ramp",
      busy: "Afternoon"
    },
    { 
      number: "Portal D", 
      direction: "Bus Terminal", 
      landmarks: ["ISBT", "Metro Station"],
      accessibility: "Lift",
      busy: "All day"
    },
    { 
      number: "Portal E", 
      direction: "Commercial Complex", 
      landmarks: ["Barakhamba", "Shivaji Stadium"],
      accessibility: "Ramp",
      busy: "Lunch hours"
    },
    { 
      number: "Portal F", 
      direction: "Green Park", 
      landmarks: ["Safdarjung", "Lodhi Road"],
      accessibility: "Lift",
      busy: "Weekends"
    }
  ];

  // Nearby places - Unique descriptions
  const nearbyPlaces = [
    { name: "Connaught Circus", distance: "0.8 km", type: "Shopping Arcade", rating: "4.6", time: "10 min walk" },
    { name: "Jantar Mantar", distance: "1.1 km", type: "Astronomical", rating: "4.4", time: "15 min walk" },
    { name: "India Gate", distance: "2.3 km", type: "Memorial", rating: "4.8", time: "8 min metro" },
    { name: "National Museum", distance: "1.8 km", type: "Cultural", rating: "4.5", time: "12 min auto" }
  ];

  // FAQs - Rewritten questions
  const faqs = [
    { 
      id: 1,
      question: "What are the first and last train timings at New Delhi Metro?", 
      answer: "First train departs at 5:45 AM, last train arrives at 11:15 PM. Airport line operates until 11:30 PM."
    },
    { 
      id: 2,
      question: "Which metro corridors serve New Delhi station?", 
      answer: "Golden Corridor (Yellow Line) and Aerocity Link (Orange Line) connect at this station."
    },
    { 
      id: 3,
      question: "What tourist attractions are accessible from this station?", 
      answer: "Connaught Place (5 min), India Gate (15 min), Red Fort (20 min), and National Museum (12 min)."
    },
    { 
      id: 4,
      question: "When is the station least crowded for comfortable travel?", 
      answer: "Mid-morning 10 AM-12 PM and early afternoon 2 PM-4 PM on weekdays."
    },
    { 
      id: 5,
      question: "Are tourist information desks available at the station?", 
      answer: "Yes, information kiosks at Portal A and Portal C offer maps and guidance 8 AM-8 PM."
    },
    { 
      id: 6,
      question: "What should tourists know before visiting nearby attractions?", 
      answer: "Most monuments close on Monday. Carry ID proof for airport check. Pre-book museum tickets."
    },
    { 
      id: 7,
      question: "How to calculate fare from New Delhi to other stations?", 
      answer: "Base fare ₹10, maximum ₹60. Smart card users get 10% discount. Use fare calculator on our app."
    },
    { 
      id: 8,
      question: "Is complimentary WiFi available at the premises?", 
      answer: "Yes, 30-min free WiFi daily. Password available at customer service desk."
    }
  ];

  // Travel tips - Refreshed content
  const travelTips = [
    "💳 Digital payments accepted at all counters",
    "⏰ Off-peak travel: 11 AM - 4 PM (30% less crowd)",
    "⬆️ Stand left, walk right on escalators",
    "🎒 Luggage size limit: 80x50x30 cm",
    "📱 Official DMRC app for real-time tracking",
    "🛄 Left luggage facility at Portal D"
  ];

  // Service alerts - New format
  const serviceAlerts = [
    {
      type: "operational",
      icon: "✅",
      title: "Regular Service",
      description: "All corridors running on schedule",
      time: "2 min ago",
      color: "emerald"
    },
    {
      type: "schedule",
      icon: "🗓️",
      title: "Weekend Extension",
      description: "Extended hours this Sat-Sun until 12:30 AM",
      time: "Today",
      color: "blue"
    },
    {
      type: "maintenance",
      icon: "⚙️",
      title: "Track Maintenance",
      description: "Golden Corridor: Sunday 11 PM - 5 AM",
      time: "Upcoming",
      color: "amber"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
        <Helmet>
  <title>
    New Delhi Metro Station – Yellow & Airport Line Route, Timings & Fare Guide
  </title>

  <meta
    name="description"
    content="New Delhi Metro Station is a major interchange connecting Yellow Line and Airport Express Line. Check metro route, timings, fare, gates, facilities, railway connectivity and nearby tourist places."
  />

  <meta
    name="keywords"
    content="
    New Delhi Metro Station,
    New Delhi Metro,
    New Delhi Metro Route,
    New Delhi Metro Timings,
    New Delhi Metro Fare,
    New Delhi Metro Gates,
    New Delhi to IGI Airport Metro,
    New Delhi to Rajiv Chowk Metro,
    Yellow Line New Delhi,
    Airport Express Line New Delhi,
    Delhi Metro Railway Station,
    Metro near New Delhi Railway Station
    "
  />

  <link
    rel="canonical"
    href="https://mydelhimetro.in/new-delhi-metro-station"
  />

  {/* Open Graph */}
  <meta property="og:title" content="New Delhi Metro Station – Complete Route & Travel Guide" />
  <meta property="og:description" content="Explore New Delhi Metro Station route map, timings, fare, gates, facilities and airport connectivity details." />
  <meta property="og:url" content="https://mydelhimetro.in/new-delhi-metro-station" />
  <meta property="og:type" content="article" />

  {/* Subway Station Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SubwayStation",
      "name": "New Delhi Metro Station",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ajmeri Gate",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.6436,
        "longitude": 77.2210
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
          "name": "What are the first and last train timings at New Delhi Metro Station?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The first train starts at 5:45 AM and the last train departs around 11:15 PM. Airport Express Line operates till 11:30 PM."
          }
        },
        {
          "@type": "Question",
          "name": "Which metro lines connect at New Delhi Metro Station?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "New Delhi Metro Station connects the Yellow Line and the Airport Express Line."
          }
        },
        {
          "@type": "Question",
          "name": "How much is the fare from New Delhi Metro to IGI Airport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The fare from New Delhi to IGI Airport via Airport Express Line is approximately ₹50."
          }
        }
      ]
    })}
  </script>
       </Helmet>

    
      {/* ========== HERO SECTION - REDESIGNED ========== */}
      <div className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Abstract pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Station identity */}
            <div className="flex items-start gap-5">
              {/* Station icon - New design */}
              <div className="hidden sm:flex relative items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-700 to-purple-700 rounded-3xl shadow-lg">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center justify-center">
                  <span className="text-4xl">🏛️</span>
                </div>
                <div className="absolute -bottom-2 -right-2 px-2 py-1 bg-indigo-500 rounded-lg text-white text-xs font-bold">
                  NDL
                </div>
              </div>

              {/* Station name */}
              <div>
                <div className="flex items-center flex-wrap gap-3 mb-2">
                 <h1 className="text-2xl md:text-4xl font-bold text-white">
                     New Delhi Metro Station – Yellow Line & Airport Express Interchange
                 </h1>

                  <div className="px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white text-xs font-bold flex items-center gap-1 shadow-lg">
                    <span>⚡</span> Major Junction
                  </div>
                </div>

                {/* Metro lines - New badge design */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-white/90">Golden Corridor</span>
                  </div>
                  <div className="w-px h-4 bg-white/20"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-white/90">Aerocity Link</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live status badge - New */}
            <div className="mt-4 md:mt-0 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/20">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-50"></div>
                </div>
                <div>
                  <span className="text-sm font-medium text-white">Live: Next train in {stationData.nextTrain}</span>
                  <p className="text-xs text-white/70">{stationData.temperature} • {stationData.airQuality}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Status metrics - New card design */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <div className="text-xs text-white/70">Hours</div>
              <div className="text-lg font-bold text-white">{stationData.operatingHours}</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <div className="text-xs text-white/70">Zone</div>
              <div className="text-lg font-bold text-white">{stationData.zone}</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <div className="text-xs text-white/70">Crowd</div>
              <div className="text-lg font-bold text-white">{stationData.crowd}</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <div className="text-xs text-white/70">Frequency</div>
              <div className="text-lg font-bold text-white">{stationData.frequency}</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 col-span-2 md:col-span-1">
              <div className="text-xs text-white/70">Last Update</div>
              <div className="text-sm font-bold text-white">{stationData.updated}</div>
            </div>
          </div>
        </div>

        {/* Wave divider - New shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#f8fafc"/>
          </svg>
        </div>
      </div>

      {/* ========== MAIN CONTENT - COMPLETELY RESTRUCTURED ========== */}
      <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Two column layout - New arrangement */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Journey planner & key info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Journey planner - New design */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <span className="text-indigo-600 text-lg">🗺️</span>
                </div>
                <h2 className="text-lg font-semibold text-slate-900">Plan Your Journey</h2>
              </div>

              <div className="space-y-5">
                {/* From station */}
                <div className="relative">
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">FROM</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={fromStation}
                      onChange={(e) => setFromStation(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 text-xs">A</span>
                    </div>
                  </div>
                </div>

                {/* Swap button - New design */}
                <div className="relative flex justify-center">
                  <div className="absolute inset-x-0 top-1/2 border-t border-slate-200"></div>
                  <button className="relative w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 shadow-sm">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </button>
                </div>

                {/* To station */}
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">TO</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={toStation}
                      onChange={(e) => setToStation(e.target.value)}
                      placeholder="Choose destination..."
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-amber-600 text-xs">B</span>
                    </div>
                  </div>
                </div>

                {/* Find route button */}
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3.5 px-6 rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2">
                  <span>Find Route</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Quick routes - New design */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-slate-700">Quick routes</span>
                  <a href="#" className="text-xs text-indigo-600 hover:text-indigo-800">View all →</a>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {['Rajiv Chowk', 'IGI Airport', 'Kashmere Gate', 'Botanical Garden', 'Huda City', 'Noida'].map((route) => (
                    <button key={route} className="px-3 py-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-xs font-medium text-slate-700 transition-colors">
                      {route}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Station metrics - New card style */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-600 text-lg">📊</span>
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900">Station Performance</h2>
                </div>
                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">+8.3% vs last month</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-indigo-700">{stationData.dailyPassengers}</div>
                  <div className="text-xs text-indigo-600 mt-1">Daily riders</div>
                  <div className="text-[10px] text-indigo-500 mt-1">↑ 5.2%</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-emerald-700">{stationData.monthlyGrowth}</div>
                  <div className="text-xs text-emerald-600 mt-1">Growth rate</div>
                  <div className="text-[10px] text-emerald-500 mt-1">↑ 1.2%</div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-amber-700">{stationData.userRating}</div>
                  <div className="text-xs text-amber-600 mt-1">Satisfaction</div>
                  <div className="text-[10px] text-amber-500 mt-1">4,238 reviews</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-700">{stationData.onTime}</div>
                  <div className="text-xs text-purple-600 mt-1">Punctuality</div>
                  <div className="text-[10px] text-purple-500 mt-1">Last 30 days</div>
                </div>
              </div>
            </div>

            {/* Popular routes - Redesigned */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-600 text-lg">🚇</span>
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900">Popular Destinations</h2>
                </div>
                <a href="#" className="text-xs text-indigo-600 hover:text-indigo-800">Full schedule →</a>
              </div>

              <div className="space-y-3">
                {popularRoutes.map((route, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <span className="text-sm">📍</span>
                      </div>
                      <div>
                        <span className="font-medium text-slate-900 group-hover:text-indigo-700">{route.destination}</span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs bg-slate-200 px-2 py-0.5 rounded-full text-slate-700">{route.transfers}</span>
                          <span className="text-xs text-slate-500">{route.crowd}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-slate-900">{route.fare}</div>
                      <div className="text-xs text-slate-500">{route.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Station info & alerts */}
          <div className="lg:col-span-1 space-y-6">
            {/* Station details - New card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <span className="text-indigo-600 text-lg">ℹ️</span>
                </div>
                <h2 className="text-lg font-semibold text-slate-900">Station Details</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-slate-400 text-lg">📍</span>
                  <div>
                    <div className="text-xs text-slate-500">Location</div>
                    <div className="text-sm font-medium text-slate-900">{stationData.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-slate-400 text-lg">🕒</span>
                  <div>
                    <div className="text-xs text-slate-500">Service hours</div>
                    <div className="text-sm font-medium text-slate-900">{stationData.operatingHours}</div>
                    <div className="text-xs text-slate-500 mt-1">First/Last train</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-slate-400 text-lg">🎯</span>
                  <div>
                    <div className="text-xs text-slate-500">Corridors</div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {stationData.lines.map((line, i) => (
                        <span key={i} className={`text-xs px-2 py-1 bg-gradient-to-r ${line.color} text-white rounded-md`}>
                          {line.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service alerts - New design */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <span className="text-indigo-600 text-lg">🔔</span>
                </div>
                <h2 className="text-lg font-semibold text-slate-900">Service Updates</h2>
              </div>

              <div className="space-y-4">
                {serviceAlerts.map((alert, idx) => (
                  <div key={idx} className={`p-4 bg-${alert.color}-50 rounded-xl border border-${alert.color}-100`}>
                    <div className="flex items-start gap-3">
                      <span className="text-lg">{alert.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium text-${alert.color}-800`}>{alert.title}</span>
                          <span className={`text-[10px] px-1.5 py-0.5 bg-${alert.color}-200 text-${alert.color}-800 rounded-full`}>
                            {alert.time}
                          </span>
                        </div>
                        <p className={`text-xs text-${alert.color}-700 mt-1`}>{alert.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 px-4 py-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-xs font-medium text-slate-700 transition-colors flex items-center justify-center gap-1">
                <span>Subscribe to alerts</span>
                <span>→</span>
              </button>
            </div>

            {/* Quick actions - Redesigned */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="p-4 bg-slate-50 hover:bg-indigo-50 rounded-xl flex flex-col items-center gap-2 transition-colors group">
                  <span className="text-2xl group-hover:scale-110 transition-transform">🗺️</span>
                  <span className="text-xs font-medium text-slate-700 group-hover:text-indigo-700">Plan route</span>
                </button>
                <button className="p-4 bg-slate-50 hover:bg-indigo-50 rounded-xl flex flex-col items-center gap-2 transition-colors group">
                  <span className="text-2xl group-hover:scale-110 transition-transform">📍</span>
                  <span className="text-xs font-medium text-slate-700 group-hover:text-indigo-700">Live map</span>
                </button>
                <button className="p-4 bg-slate-50 hover:bg-indigo-50 rounded-xl flex flex-col items-center gap-2 transition-colors group">
                  <span className="text-2xl group-hover:scale-110 transition-transform">🎟️</span>
                  <span className="text-xs font-medium text-slate-700 group-hover:text-indigo-700">Smart card</span>
                </button>
                <button className="p-4 bg-slate-50 hover:bg-indigo-50 rounded-xl flex flex-col items-center gap-2 transition-colors group">
                  <span className="text-2xl group-hover:scale-110 transition-transform">🅿️</span>
                  <span className="text-xs font-medium text-slate-700 group-hover:text-indigo-700">Parking</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========== TABS SECTION - COMPLETELY NEW DESIGN ========== */}
        <div className="mt-10 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Tab navigation - New style */}
          <div className="border-b border-slate-200 bg-slate-50/50">
            <div className="flex px-2">
              {[
                { id: 'amenities', label: 'Amenities', icon: '📦' },
                { id: 'attractions', label: 'Sightseeing', icon: '🏛️' },
                { id: 'portals', label: 'Portals', icon: '🚪' },
                { id: 'vicinity', label: 'Vicinity', icon: '📍' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-indigo-600 text-indigo-700 bg-white'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content - All redesigned */}
          <div className="p-6">
            {/* AMENITIES TAB - New grid layout */}
            {activeTab === 'amenities' && (
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {amenities.map((item, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors group border border-slate-100">
                      <div className="flex flex-col items-center text-center gap-2">
                        <span className="text-3xl group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-xs font-medium text-slate-700 group-hover:text-indigo-700">{item.name}</span>
                        <span className="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full">Available</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Accessibility section - New design */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-700 text-xs">♿</span>
                    Universal Access
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 text-lg">✅</span>
                      <span className="text-sm text-slate-700">Elevators (4)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 text-lg">✅</span>
                      <span className="text-sm text-slate-700">Wheelchair ramps</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 text-lg">✅</span>
                      <span className="text-sm text-slate-700">Tactile paths</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 text-lg">✅</span>
                      <span className="text-sm text-slate-700">Audio guidance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 text-lg">✅</span>
                      <span className="text-sm text-slate-700">Braille signage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 text-lg">✅</span>
                      <span className="text-sm text-slate-700">Staff assistance</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ATTRACTIONS TAB - New card design */}
            {activeTab === 'attractions' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {nearbyPlaces.map((place, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">
                      🏛️
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-slate-900">{place.name}</h4>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">⭐ {place.rating}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{place.type}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-slate-600">
                        <span className="flex items-center gap-1">📍 {place.distance}</span>
                        <span className="flex items-center gap-1">⏱️ {place.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* PORTALS TAB - New design */}
            {activeTab === 'portals' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gates.map((gate, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border-l-4 border-indigo-400">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-900">{gate.number}</span>
                          <span className="text-xs px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full">
                            {gate.accessibility}
                          </span>
                        </div>
                        <p className="text-sm text-slate-700 mt-1">{gate.direction}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {gate.landmarks.map((landmark, i) => (
                            <span key={i} className="text-xs bg-white px-2 py-1 rounded-md text-slate-600 border border-slate-200">
                              {landmark}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                          {gate.busy}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* VICINITY TAB */}
            {activeTab === 'vicinity' && (
              <div className="text-center py-12 bg-slate-50 rounded-xl">
                <span className="text-5xl mb-4 block">📍</span>
                <p className="text-slate-600">Neighborhood information updating...</p>
                <p className="text-xs text-slate-500 mt-2">Check back soon for nearby station details</p>
              </div>
            )}
          </div>
        </div>

        {/* ========== FAQ SECTION - ACCORDION STYLE ========== */}
        <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-indigo-600 text-lg">❓</span>
            </div>
            <h2 className="text-lg font-semibold text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full px-5 py-4 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors text-left"
                >
                  <span className="text-sm font-medium text-slate-900">{faq.question}</span>
                  <span className={`text-slate-400 transition-transform ${expandedFaq === faq.id ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-5 pb-4 pt-2 bg-slate-50 border-t border-slate-200">
                    <p className="text-sm text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ========== DESTINATION GRID ========== */}
        <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                <span className="text-indigo-600 text-lg">🚇</span>
              </div>
              <h2 className="text-lg font-semibold text-slate-900">Travel from New Delhi</h2>
            </div>
            <a href="#" className="text-xs text-indigo-600 hover:text-indigo-800">View network map →</a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              'Rajiv Chowk', 'Kashmere Gate', 'Central Secretariat', 'Huda City',
              'Botanical Garden', 'IGI Airport', 'Noida City', 'Dwarka',
              'Vaishali', 'Mayur Vihar', 'Rohini', 'Lajpat Nagar'
            ].map((dest, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 hover:bg-indigo-50 rounded-xl transition-colors cursor-pointer group">
                <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-700">{dest}</span>
                <span className="text-xs text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            ))}
          </div>
        </div>

        {/* ========== COMPLETE GUIDE - RESTYLED ========== */}
        <div className="mt-10 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 text-xl">📘</span>
            Complete Guide to New Delhi Metro Station
          </h2>

          {/* Introduction */}
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-slate-700 leading-relaxed">
              <span className="font-semibold text-indigo-700">New Delhi Metro Station</span> serves as the 
              gateway to India's capital. As a premier junction connecting the Golden Corridor and Aerocity 
              Link, it's where history meets modern transit infrastructure.
            </p>
          </div>

          {/* Why special - New layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/30 p-6 rounded-2xl border border-indigo-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-indigo-200 rounded-xl flex items-center justify-center text-indigo-700 text-xl">📍</div>
                <h3 className="text-lg font-semibold text-indigo-900">Strategic Gateway</h3>
              </div>
              <p className="text-indigo-800/80 text-sm leading-relaxed">
                Positioned adjacent to India's busiest railway terminal, this station provides seamless 
                connectivity between rail, metro, and road networks.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100/30 p-6 rounded-2xl border border-purple-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-200 rounded-xl flex items-center justify-center text-purple-700 text-xl">👥</div>
                <h3 className="text-lg font-semibold text-purple-900">Urban Crossroads</h3>
              </div>
              <p className="text-purple-800/80 text-sm leading-relaxed">
                A melting pot of diverse commuters - from business travelers to tourists, students to 
                professionals, reflecting Delhi's cosmopolitan spirit.
              </p>
            </div>
          </div>

          {/* Insider tips - New design */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 rounded-2xl mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">💎</span>
              <h3 className="text-lg font-semibold">Insider Knowledge</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <span className="text-amber-400">→</span>
                <p className="text-sm text-slate-200">Portal B offers quickest access to Connaught Place (3 min walk)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">→</span>
                <p className="text-sm text-slate-200">Best time for photos: 10-11 AM (soft lighting, less crowd)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">→</span>
                <p className="text-sm text-slate-200">Follow golden signage for Airport line, blue for Botanical Garden</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">→</span>
                <p className="text-sm text-slate-200">WiFi code: DEL2025 (valid for 30 mins)</p>
              </div>
            </div>
          </div>

          {/* Area exploration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🍜</span>
                <h3 className="text-md font-semibold text-slate-900">Culinary Trail</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 text-sm">✓</span>
                  <span className="text-sm text-slate-700"><span className="font-medium">Street food:</span> Chole bhature, golgappe at Paharganj</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 text-sm">✓</span>
                  <span className="text-sm text-slate-700"><span className="font-medium">Cafes:</span> Indian Coffee House (heritage), Barista</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 text-sm">✓</span>
                  <span className="text-sm text-slate-700"><span className="font-medium">Fine dining:</span> Bukhara, Karim's (15 min auto)</span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🛍️</span>
                <h3 className="text-md font-semibold text-slate-900">Shopping Guide</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 text-sm">✓</span>
                  <span className="text-sm text-slate-700"><span className="font-medium">Janpath:</span> Handicrafts, clothes (5 min walk)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 text-sm">✓</span>
                  <span className="text-sm text-slate-700"><span className="font-medium">Palika Bazaar:</span> Electronics, watches</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 text-sm">✓</span>
                  <span className="text-sm text-slate-700"><span className="font-medium">CP:</span> Brand stores, books, souvenirs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Personal reflection */}
          <div className="bg-indigo-50 p-6 rounded-2xl mb-8 border border-indigo-100">
            <div className="flex items-start gap-4">
              <span className="text-4xl">“</span>
              <div>
                <p className="text-slate-700 italic leading-relaxed">
                  "Having navigated Delhi for over a decade, I've witnessed New Delhi station transform from 
                  a simple transit point into a vibrant urban hub. It's where I see our city's past and future 
                  converging - heritage steam engines beside sleek metro trains, traditional vendors beside 
                  digital kiosks. This station doesn't just move people; it moves stories."
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-800 text-sm">
                    AK
                  </div>
                  <span className="text-sm text-indigo-800 font-medium">— Arjun Khanna, Transit Enthusiast</span>
                </div>
              </div>
            </div>
          </div>

          {/* History section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-white rounded-xl border border-slate-200">
              <h3 className="text-md font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-xl">📜</span> Then & Now
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Since its inauguration in 2004, this station has witnessed Delhi's metro revolution. 
                What started with 2 lines has grown to connect millions daily. The station's architecture 
                blends functionality with aesthetics, handling over 50,000 passengers daily.
              </p>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200">
              <h3 className="text-md font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-xl">🌆</span> Community Impact
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Local businesses near the station have seen 200% growth since 2010. Property values in a 
                500m radius have tripled. The station has become an economic catalyst, creating thousands 
                of jobs and making Delhi more accessible to all.
              </p>
            </div>
          </div>
        </div>
      </main>

   
    </div>
  );
};

export default NewDelhiStation;