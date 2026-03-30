// RajivChowkStation.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async";

const RajivChowk = () => {
  const [fromStation, setFromStation] = useState('Rajiv Chowk');
  const [toStation, setToStation] = useState('');
  const [activeTab, setActiveTab] = useState('facilities');

  // Station data
  const stationData = {
    name: "Rajiv Chowk",
    lines: ["Yellow Line", "Blue Line"],
    type: "Interchange",
    operatingHours: "6:00 AM - 11:00 PM",
    zone: "A",
    status: "Normal Service",
    crowd: "Moderate",
    frequency: "3-5 min",
    nextTrain: "2 min",
    temperature: "24°C",
    airQuality: "Good",
    dailyPassengers: "45,000+",
    monthlyGrowth: "+12%",
    userRating: "4.2/5",
    onTime: "94%",
    address: "Rajiv Chowk, Delhi NCR, India",
    updated: "1:12:02 AM"
  };

  // Popular routes
  const popularRoutes = [
    { from: "New Delhi", time: "~20min", fare: "₹21", transfers: "1 transfer" },
    { from: "Kashmere Gate", time: "~40min", fare: "₹38", transfers: "1 transfer" },
    { from: "Central Secretariat", time: "~41min", fare: "₹32", transfers: "1 transfer" },
    { from: "Hauz Khas", time: "~24min", fare: "₹24", transfers: "1 transfer" },
    { from: "Botanical Garden", time: "~35min", fare: "₹22", transfers: "1 transfer" },
    { from: "IGI Airport", time: "~36min", fare: "₹36", transfers: "1 transfer" }
  ];

  // Facilities
  const facilities = [
    { name: "Free WiFi", icon: "📶", available: true },
    { name: "Shops", icon: "🛍️", available: true },
    { name: "Food Court", icon: "🍽️", available: true },
    { name: "Accessible", icon: "♿", available: true },
    { name: "Elevators", icon: "🛗", available: true },
    { name: "Ticket Counter", icon: "🎫", available: true },
    { name: "Parking", icon: "🅿️", available: true },
    { name: "Cycle Stand", icon: "🚲", available: true }
  ];

  // Gates
  const gates = [
    { number: "Gate 1", direction: "Conn. Place Outer", landmarks: ["BMC", "PVR Plaza"] },
    { number: "Gate 2", direction: "Conn. Place Inner", landmarks: ["Palika Bazar"] },
    { number: "Gate 3", direction: "State Bank of India", landmarks: ["SBI Headquarters"] },
    { number: "Gate 4", direction: "Janpath Market", landmarks: ["Main Market"] },
    { number: "Gate 5", direction: "Regal Building", landmarks: ["Regal Cinema"] },
    { number: "Gate 6", direction: "Shivaji Stadium", landmarks: ["Metro Museum"] }
  ];

  // Nearby attractions
  const attractions = [
    { name: "Connaught Place", distance: "0 km", type: "Shopping", rating: "4.5/5" },
    { name: "Janpath Market", distance: "0.2 km", type: "Market", rating: "4.3/5" },
    { name: "Palika Bazaar", distance: "0.1 km", type: "Underground Market", rating: "4.1/5" },
    { name: "Jantar Mantar", distance: "1.2 km", type: "Historical", rating: "4.4/5" }
  ];

  // FAQs
  const faqs = [
    { question: "What time does Rajiv Chowk Metro Station open and close?", answer: "The station operates from 6:00 AM to 11:00 PM daily. Last train departs at 11:00 PM." },
    { question: "Which metro lines stop at Rajiv Chowk?", answer: "Yellow Line and Blue Line. It's a major interchange station." },
    { question: "What famous places can I visit near Rajiv Chowk Metro Station?", answer: "Connaught Place, Janpath Market, Palika Bazaar, Jantar Mantar, and India Gate are nearby." },
    { question: "Is Rajiv Chowk station crowded? When is the best time to visit?", answer: "Peak hours: 8:30-11 AM and 5-8 PM. Best time: 10 AM-4 PM on weekdays." },
    { question: "Are there tour guides or maps available at Rajiv Chowk?", answer: "Yes, information kiosks are available at Gates 2 and 4 with station maps and guidance." },
    { question: "What should I know before visiting attractions near Rajiv Chowk?", answer: "Most attractions open at 10 AM. Avoid Mondays for historical sites." },
    { question: "How much does it cost to travel from Rajiv Chowk to other stations?", answer: "Fares range from ₹10-₹60 depending on distance. Smart card gives 10% discount." },
    { question: "Is there free WiFi at Rajiv Chowk Metro Station?", answer: "Yes, free WiFi is available. Password: DelhiMetro" }
  ];

  // Travel tips
  const travelTips = [
    "Use Metro Smart Card for 10% discount",
    "Avoid peak hours (8:30-11 AM, 5-8 PM)",
    "Keep right on escalators",
    "Security check is mandatory",
    "Download official DMRC app for live updates"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
     <Helmet>
  <title>
    Rajiv Chowk Metro Station – Yellow & Blue Line Interchange | Delhi Metro Route, Fare & Timings
  </title>

  <meta
    name="description"
    content="Rajiv Chowk Metro Station is a major Delhi Metro interchange on Yellow Line and Blue Line. Check route map, metro timings, fare, gates, facilities, nearby places and travel tips."
  />

  <meta
    name="keywords"
    content="
    Rajiv Chowk Metro Station,
    Rajiv Chowk Metro,
    Yellow Line Rajiv Chowk,
    Blue Line Rajiv Chowk,
    Rajiv Chowk Metro Route,
    Rajiv Chowk Metro Fare,
    Rajiv Chowk Metro Timings,
    Rajiv Chowk Metro Gates,
    Rajiv Chowk to New Delhi Metro,
    Rajiv Chowk to Kashmere Gate,
    Connaught Place Metro Station,
    Delhi Metro Interchange Station
    "
  />

  <link
    rel="canonical"
    href="https://mydelhimetro.in/rajiv-chowk-metro-station"
  />

  {/* Open Graph */}
  <meta property="og:title" content="Rajiv Chowk Metro Station – Delhi Metro Guide" />
  <meta property="og:description" content="Complete guide to Rajiv Chowk Metro Station including route planner, timings, fare, gates and nearby attractions." />
  <meta property="og:url" content="https://mydelhimetro.in/rajiv-chowk-metro-station" />
  <meta property="og:type" content="article" />

  {/* Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SubwayStation",
      "name": "Rajiv Chowk Metro Station",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Connaught Place",
        "addressRegion": "Delhi",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.6328,
        "longitude": 77.2197
      },
      "isPartOf": {
        "@type": "Organization",
        "name": "Delhi Metro"
      }
    })}
  </script>
    </Helmet>

      <header className="bg-white border-b border-gray-200 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm py-3 text-gray-600 border-t border-gray-100">
            <a href="/" className="hover:text-blue-600">Home</a>
            <span className="mx-2">›</span>
            <a href="/stations" className="hover:text-blue-600">Stations</a>
            <span className="mx-2">›</span>
            <span className="text-gray-900 font-medium">Rajiv Chowk</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Station Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🚉</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-3">
                Rajiv Chowk
                <span className="text-sm font-normal px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full flex items-center gap-1">
                  <span>🔄</span> Interchange
                </span>
              </h1>
              <div className="flex items-center gap-4 mt-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                  <span>Yellow Line</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span>Blue Line</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="font-medium text-gray-900">Normal Service</span>
                </div>
                <span className="text-gray-600">© Next: {stationData.nextTrain}</span>
                <span className="text-gray-400 hidden md:inline">|</span>
                <span className="text-gray-600 hidden md:block">🚇 {stationData.crowd}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-gray-600">🕒 {stationData.operatingHours}</span>
                <span className="text-gray-600">📊 {stationData.frequency}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Updates Bar */}
        <div className="bg-white rounded-xl p-4 mb-8 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-4">
              <span className="text-blue-600 font-medium flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Live Updates
              </span>
              <span className="text-gray-600">Next train in {stationData.nextTrain}</span>
              <span className="text-gray-400 hidden md:inline">•</span>
              <span className="text-gray-600 hidden md:block">🌡️ Temperature: {stationData.temperature}</span>
              <span className="text-gray-400 hidden md:inline">•</span>
              <span className="text-gray-600 hidden md:block">🌬️ Air Quality: {stationData.airQuality}</span>
            </div>
            <span className="text-xs text-gray-500">Updated: {stationData.updated}</span>
          </div>
        </div>

        {/* Journey Planner */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Plan Your Journey */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span>🗺️</span> Plan Your Journey
              </h2>
              
              <div className="space-y-4">
                {/* From Station */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select starting station
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={fromStation}
                      onChange={(e) => setFromStation(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <span className="absolute right-3 top-3 text-gray-400">🚉</span>
                  </div>
                </div>

                {/* To Station */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select destination station
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={toStation}
                      onChange={(e) => setToStation(e.target.value)}
                      placeholder="Select destination station..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <span className="absolute right-3 top-3 text-gray-400">📍</span>
                  </div>
                </div>

                {/* Lines info */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-md">Yellow Line</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md">Blue Line</span>
                  <span className="text-gray-400">Lines</span>
                </div>

                {/* Swap and Find */}
                <div className="flex items-center gap-3 pt-2">
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-200">
                    Find Route
                  </button>
                </div>
              </div>

              {/* Popular Routes */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Popular Routes</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {popularRoutes.slice(0, 3).map((route, idx) => (
                    <div key={idx} className="p-2 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                      <div className="font-medium text-gray-900">{route.from}</div>
                      <div className="text-xs text-gray-500">{route.time} • {route.fare}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Station Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm h-full">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span>ℹ️</span> Station Information
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Address</h3>
                  <p className="text-gray-900 mt-1">{stationData.address}</p>
                </div>
                
                <div>
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Operating Hours</h3>
                  <p className="text-gray-900 mt-1 font-medium">{stationData.operatingHours}</p>
                </div>
                
                <div>
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Lines</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-md text-sm">Yellow Line</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-sm">Blue Line</span>
                  </div>
                </div>
              </div>

              {/* Service Updates */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span>🔔</span> Service Updates & Alerts
                </h3>
                
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm font-medium text-gray-900">Normal Service</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1 ml-6">
                      All lines operating normally with regular frequency.
                    </p>
                    <p className="text-xs text-gray-500 mt-1 ml-6">Updated 5 minutes ago</p>
                  </div>
                  
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">📅</span>
                      <span className="text-sm font-medium text-gray-900">Weekend Schedule</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1 ml-6">
                      Extended service hours on weekends. First train starts at 6:00 AM.
                    </p>
                    <p className="text-xs text-gray-500 mt-1 ml-6">Effective this weekend</p>
                  </div>
                  
                  <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                    <div className="flex items-center gap-2">
                      <span className="text-amber-600">🛠️</span>
                      <span className="text-sm font-medium text-gray-900">Maintenance Notice</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1 ml-6">
                      Scheduled maintenance on Yellow Line this Sunday 11 PM - 5 AM.
                    </p>
                    <p className="text-xs text-gray-500 mt-1 ml-6">Planned for next week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Station Statistics */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span>📊</span> Station Statistics
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="text-2xl font-bold text-gray-900">{stationData.dailyPassengers}</div>
              <div className="text-sm text-gray-600">Daily Passengers</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="text-2xl font-bold text-gray-900">{stationData.monthlyGrowth}</div>
              <div className="text-sm text-gray-600">Monthly Growth</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
              <div className="text-2xl font-bold text-gray-900">{stationData.userRating}</div>
              <div className="text-sm text-gray-600">User Rating</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="text-2xl font-bold text-gray-900">{stationData.onTime}</div>
              <div className="text-sm text-gray-600">On-Time</div>
            </div>
          </div>
        </div>

        {/* Station Details Tabs */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto px-4">
              {['facilities', 'attractions', 'gates', 'nearby'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab === 'facilities' && '📦 Facilities'}
                  {tab === 'attractions' && '🏛️ Attractions'}
                  {tab === 'gates' && '🚪 Gates'}
                  {tab === 'nearby' && '📍 Nearby'}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {/* Facilities Tab */}
            {activeTab === 'facilities' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Available Facilities</h3>
                  <span className="text-sm text-blue-600">View All Facilities</span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {facilities.map((facility, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-xl">{facility.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{facility.name}</span>
                    </div>
                  ))}
                </div>

                {/* Accessibility Features */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Accessibility Features</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✅</span>
                      <span className="text-sm text-gray-700">Elevators</span>
                      <span className="text-xs text-gray-500">4</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✅</span>
                      <span className="text-sm text-gray-700">Wheelchair Ramps</span>
                      <span className="text-xs text-gray-500">2</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✅</span>
                      <span className="text-sm text-gray-700">Tactile Paths</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✅</span>
                      <span className="text-sm text-gray-700">Audio Announcements</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✅</span>
                      <span className="text-sm text-gray-700">Braille Signage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✅</span>
                      <span className="text-sm text-gray-700">Assistance Available</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Attractions Tab */}
            {activeTab === 'attractions' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Nearby Attractions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {attractions.map((attraction, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <span className="text-2xl">🏛️</span>
                      <div>
                        <h4 className="font-medium text-gray-900">{attraction.name}</h4>
                        <p className="text-sm text-gray-600">{attraction.type}</p>
                        <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                          <span>📍 {attraction.distance}</span>
                          <span>⭐ {attraction.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gates Tab */}
            {activeTab === 'gates' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Station Gates & Exits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {gates.map((gate, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">{gate.number}</h4>
                          <p className="text-sm text-gray-600 mt-1">{gate.direction}</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {gate.landmarks.map((landmark, i) => (
                              <span key={i} className="text-xs bg-white px-2 py-1 rounded-md text-gray-600 border border-gray-200">
                                {landmark}
                              </span>
                            ))}
                          </div>
                        </div>
                        <span className="text-blue-600 text-sm">📍 View</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Nearby Tab */}
            {activeTab === 'nearby' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Nearby Stations</h3>
                <p className="text-gray-500 bg-gray-50 p-8 rounded-xl text-center">
                  No nearby stations information available.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <span>🗺️</span> Plan from here
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <span>📍</span> View on Map
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm bg-green-100 text-green-800 px-3 py-1.5 rounded-full flex items-center gap-1">
                <span>📶</span> Free WiFi
              </span>
              <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full flex items-center gap-1">
                <span>🛍️</span> Shops
              </span>
              <span className="text-sm bg-orange-100 text-orange-800 px-3 py-1.5 rounded-full flex items-center gap-1">
                <span>🍽️</span> Food Court
              </span>
              <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full flex items-center gap-1">
                <span>♿</span> Accessible
              </span>
            </div>
          </div>
        </div>

        {/* Popular Routes Section */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <span>🚇</span> Popular Routes from Rajiv Chowk
            </h2>
            <span className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">View All Routes</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularRoutes.map((route, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">{route.from}</span>
                      <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">
                        {route.transfers}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
                      <span className="flex items-center gap-1">⏱️ {route.time}</span>
                      <span className="flex items-center gap-1">💰 {route.fare}</span>
                    </div>
                  </div>
                  <button className="text-blue-600 text-sm hover:text-blue-800">View</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span>❓</span> Common Questions About Rajiv Chowk Station
          </h2>

          <div className="space-y-4">
            {faqs.slice(0, 6).map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                <div className="flex items-start justify-between cursor-pointer group">
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </h3>
                  <span className="text-gray-400 group-hover:text-gray-600">▼</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel From Section */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span>🚇</span> Travel From Rajiv Chowk
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
              <span className="font-medium text-gray-900">Kashmere Gate</span>
              <span className="text-blue-600 text-sm">View Route →</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
              <span className="font-medium text-gray-900">Central Secretariat</span>
              <span className="text-blue-600 text-sm">View Route →</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
              <span className="font-medium text-gray-900">New Delhi</span>
              <span className="text-blue-600 text-sm">View Route →</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
              <span className="font-medium text-gray-900">Huda City Centre</span>
              <span className="text-blue-600 text-sm">View Route →</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
              <span className="font-medium text-gray-900">Botanical Garden</span>
              <span className="text-blue-600 text-sm">View Route →</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
              <span className="font-medium text-gray-900">IGI Airport</span>
              <span className="text-blue-600 text-sm">View Route →</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
              <span className="font-medium text-gray-900">Noida City Centre</span>
              <span className="text-blue-600 text-sm">View Route →</span>
            </div>
          </div>
        </div>

        {/* Complete Guide Section */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Complete Guide to Rajiv Chowk Metro Station
          </h2>

          {/* Why Rajiv Chowk is More Than Just a Metro Station */}
          <div className="prose max-w-none mb-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Why Rajiv Chowk is More Than Just a Metro Station
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Rajiv Chowk Metro Station isn't just a transit point—it's a gateway to one of Delhi's most vibrant 
              areas. As someone who has explored every corner of Delhi, I can tell you that this station serves 
              as a perfect starting point for discovering the unique character of this neighborhood.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Located on the Yellow Line and Blue Line, Rajiv Chowk connects you to multiple metro 
              corridors, making it incredibly convenient for both daily commuters and occasional travelers.
            </p>
          </div>

          {/* What Makes This Station Special */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span>📍</span> Strategic Location
              </h4>
              <p className="text-gray-700">
                Perfectly positioned to access key areas of Delhi, with excellent connectivity to business districts, 
                shopping areas, and residential neighborhoods.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span>👥</span> Community Hub
              </h4>
              <p className="text-gray-700">
                A bustling station that reflects Delhi's diverse culture, where you'll meet people from all walks 
                of life going about their daily routines.
              </p>
            </div>
          </div>

          {/* Local Insider Knowledge */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-10 border border-amber-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span>💡</span> Local Insider Knowledge
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-amber-600 text-xl">•</span>
                <p className="text-gray-700">Exit from Gate 4 for the shortest walk to the main market area</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-600 text-xl">•</span>
                <p className="text-gray-700">The station is less crowded between 10 AM - 4 PM on weekdays</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-600 text-xl">•</span>
                <p className="text-gray-700">Look for the Yellow Line platform signs - they're color-coded for easy navigation</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-600 text-xl">•</span>
                <p className="text-gray-700">Free WiFi password is usually "DelhiMetro" - perfect for checking directions</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-600 text-xl">•</span>
                <p className="text-gray-700">Use the mobile app for real-time train tracking and crowd information</p>
              </div>
            </div>
          </div>

          {/* Exploring the Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span>🍽️</span> Food & Dining Scene
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Street Food Paradise</h5>
                  <p className="text-sm text-gray-600">
                    From crispy chaat to hot parathas, the area around Rajiv Chowk is a food lover's dream. 
                    Don't miss the local vendors near the station exits!
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Restaurant Options</h5>
                  <p className="text-sm text-gray-600">
                    Whether you're craving North Indian, South Indian, or international cuisine, you'll find 
                    excellent restaurants within walking distance.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span>🛍️</span> Shopping & Entertainment
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Local Markets</h5>
                  <p className="text-sm text-gray-600">
                    Experience authentic Delhi shopping at the local markets. Great for everything from 
                    clothes to electronics at bargain prices.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Modern Amenities</h5>
                  <p className="text-sm text-gray-600">
                    Malls, multiplexes, and branded stores are also easily accessible, giving you the best 
                    of both traditional and modern shopping.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Reflection */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl mb-10">
            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span>💭</span> Why I Love This Area
            </h4>
            <p className="text-gray-200 leading-relaxed text-lg italic">
              "Having lived in Delhi for years, I've come to appreciate how Rajiv Chowk perfectly captures the essence of 
              our city. It's where tradition meets modernity, where you can grab a quick metro ride to anywhere in Delhi 
              while being surrounded by the authentic local culture that makes Delhi special."
            </p>
          </div>

          {/* Everything You Need to Know */}
          <div className="mb-10">
            <h4 className="text-xl font-semibold text-gray-900 mb-6">
              Everything You Need to Know Before Visiting
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <h5 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                  <span>⏰</span> Best Times to Visit
                </h5>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-medium">Weekday Mornings:</span> 9 AM - 11 AM</p>
                  <p><span className="font-medium">Evening Hours:</span> 6 PM - 8 PM</p>
                  <p><span className="font-medium">Weekend Vibes:</span> Saturdays</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h5 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                  <span>🏢</span> Station Features
                </h5>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>✓ Air-conditioned platforms</p>
                  <p>✓ Multiple entry/exit gates</p>
                  <p>✓ Escalators and lifts</p>
                  <p>✓ Security and help desk</p>
                  <p>✓ Free WiFi available</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h5 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                  <span>🚌</span> Getting Around
                </h5>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>🛺 Auto Rickshaws - Available outside all gates</p>
                  <p>🚌 Bus Connectivity - Multiple DTC routes</p>
                  <p>🚶 Walking Distance - Most attractions within 1km</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Story Behind Rajiv Chowk */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">The Story Behind Rajiv Chowk</h4>
              <p className="text-gray-700 leading-relaxed">
                Every Delhi Metro station has a story, and Rajiv Chowk is no exception. Since opening in 2004, this 
                station has been a witness to Delhi's rapid transformation and growth.
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                <h5 className="font-medium text-gray-900 mb-2">Then and Now</h5>
                <p className="text-sm text-gray-600">
                  When Delhi Metro first started operations, stations like Rajiv Chowk were revolutionary. They brought 
                  world-class public transportation to areas that were previously underserved.
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Impact on the Community</h4>
              <p className="text-gray-700 leading-relaxed">
                The arrival of the metro station transformed this area completely. Property values increased, new 
                businesses opened, and the entire neighborhood became more accessible and connected.
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                <h5 className="font-medium text-gray-900 mb-2">Personal Reflection</h5>
                <p className="text-sm text-gray-600 italic">
                  "As someone who has watched Delhi Metro grow from its early days, I'm always amazed by how stations 
                  like Rajiv Chowk have become integral parts of people's daily lives."
                </p>
              </div>
            </div>
          </div>

          {/* About Station */}
          <div className="bg-gray-50 p-6 rounded-2xl mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">About Rajiv Chowk Station</h4>
            <p className="text-gray-700 leading-relaxed">
              Rajiv Chowk Metro Station is part of the Delhi Metro network, serving the Yellow Line, Blue Line. 
              Located in Rajiv Chowk, Delhi NCR, India, this station provides convenient access to various parts 
              of the city with excellent connectivity and modern facilities.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              As an interchange station, Rajiv Chowk allows passengers to transfer between the Yellow Line and 
              Blue Line, making it a crucial connection point in the Delhi Metro network. The station sees a 
              high volume of passengers, especially during peak hours, but is well-equipped to handle the 
              traffic efficiently.
            </p>
          </div>

          {/* Travel Tips & Facilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span>💡</span> Travel Tips
              </h4>
              <ul className="space-y-2">
                {travelTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-600">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span>🏢</span> Facilities
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <span className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600">✓</span> Free WiFi
                </span>
                <span className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600">✓</span> Wheelchair accessible
                </span>
                <span className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600">✓</span> Parking facilities
                </span>
                <span className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600">✓</span> Food courts and shops
                </span>
                <span className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600">✓</span> 24/7 security
                </span>
                <span className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600">✓</span> Help desk
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default RajivChowk;
