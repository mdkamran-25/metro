// StationsPage.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StationsPage = () => {
  const [selectedStation, setSelectedStation] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeLine, setActiveLine] = useState('all');
  const [viewMode, setViewMode] = useState('list');

  // Station data - Restructured and unique format
  const metroStations = [
    {
      id: 1,
      cluster: "North Delhi Hub",
      stations: [
        { name: "Adarsh Nagar", lines: ["Red Corridor"], type: "interchange", platforms: 2, opened: "2002", zone: "North" },
        { name: "Azadpur", lines: ["Red Corridor", "Yellow Link"], type: "interchange", platforms: 3, opened: "2004", zone: "North" },
        { name: "Ashok Park Main", lines: ["Green Corridor"], type: "standard", platforms: 2, opened: "2010", zone: "West" },
        { name: "Anand Vihar ISBT", lines: ["Red Corridor", "Blue Link"], type: "interchange", platforms: 4, opened: "2009", zone: "East" }
      ]
    },
    {
      id: 2,
      cluster: "Central District",
      stations: [
        { name: "Central Secretariat", lines: ["Red Corridor", "Yellow Link", "Violet Link"], type: "major_hub", platforms: 6, opened: "2005", zone: "Central" },
        { name: "Barakhamba Road", lines: ["Blue Link"], type: "standard", platforms: 2, opened: "2005", zone: "Central" },
        { name: "Ajmeri Gate", lines: ["Red Corridor"], type: "standard", platforms: 2, opened: "2006", zone: "Central" },
        { name: "Bhagat Singh Nagar", lines: ["Red Corridor"], type: "standard", platforms: 2, opened: "2008", zone: "Central" }
      ]
    },
    {
      id: 3,
      cluster: "Western Circuit",
      stations: [
        { name: "Bajipur", lines: ["Green Corridor"], type: "standard", platforms: 2, opened: "2012", zone: "West" },
        { name: "Bhikaji Cama Place", lines: ["Green Corridor", "Pink Link"], type: "interchange", platforms: 3, opened: "2018", zone: "South" },
        { name: "Bata Colony", lines: ["Red Corridor"], type: "standard", platforms: 2, opened: "2015", zone: "West" },
        { name: "Balaji Nagar", lines: ["Red Corridor"], type: "standard", platforms: 2, opened: "2014", zone: "West" }
      ]
    },
    {
      id: 4,
      cluster: "Eastern Sector",
      stations: [
        { name: "Anand Vihar", lines: ["Blue Link", "Red Corridor"], type: "interchange", platforms: 4, opened: "2010", zone: "East" },
        { name: "Aishwarya Vihar", lines: ["Red Corridor"], type: "standard", platforms: 2, opened: "2011", zone: "East" },
        { name: "Barkas", lines: ["Red Corridor"], type: "standard", platforms: 2, opened: "2013", zone: "East" },
        { name: "Begumpur", lines: ["Red Corridor", "Green Corridor"], type: "interchange", platforms: 3, opened: "2016", zone: "East" }
      ]
    },
    {
      id: 5,
      cluster: "Southern Corridor",
      stations: [
        { name: "Belvedere Towers", lines: ["Red Corridor", "Rapid Link"], type: "interchange", platforms: 3, opened: "2017", zone: "South" },
        { name: "Banjara Hills", lines: ["Red Corridor"], type: "standard", platforms: 2, opened: "2019", zone: "South" },
        { name: "Basanti Nagar", lines: ["Red Corridor"], type: "standard", platforms: 2, opened: "2020", zone: "South" },
        { name: "Bahadurgarh City", lines: ["Red Corridor"], type: "standard", platforms: 2, opened: "2018", zone: "West" }
      ]
    },
    {
      id: 6,
      cluster: "Heritage Route",
      stations: [
        { name: "Baghpat", lines: ["Red Corridor", "Heritage Link"], type: "interchange", platforms: 3, opened: "2012", zone: "North" },
        { name: "Bidar", lines: ["Red Corridor"], type: "standard", platforms: 2, opened: "2014", zone: "North" },
        { name: "Barabanki", lines: ["Red Corridor"], type: "standard", platforms: 2, opened: "2015", zone: "North" },
        { name: "Banwari Ki Nala", lines: ["Red Corridor"], type: "standard", platforms: 2, opened: "2016", zone: "North" }
      ]
    },
    {
      id: 7,
      cluster: "Business District",
      stations: [
        { name: "Ambedkar Marg", lines: ["Red Corridor"], type: "standard", platforms: 2, opened: "2013", zone: "Central" },
        { name: "Ansham", lines: ["Red Corridor"], type: "standard", platforms: 2, opened: "2014", zone: "Central" },
        { name: "Baddal", lines: ["Red Corridor"], type: "standard", platforms: 2, opened: "2017", zone: "Central" },
        { name: "Almora", lines: ["Red Corridor"], type: "standard", platforms: 2, opened: "2015", zone: "Central" }
      ]
    }
  ];

  // Line colors - Unique palette
  const lineColors = {
    "Red Corridor": "from-rose-500 to-red-600",
    "Blue Link": "from-sky-500 to-blue-600",
    "Yellow Link": "from-amber-400 to-yellow-500",
    "Green Corridor": "from-emerald-500 to-green-600",
    "Violet Link": "from-purple-500 to-violet-600",
    "Pink Link": "from-fuchsia-500 to-pink-600",
    "Rapid Link": "from-cyan-500 to-teal-600",
    "Heritage Link": "from-orange-500 to-amber-600"
  };

  // Zone colors
  const zoneColors = {
    "North": "bg-blue-50 text-blue-700 border-blue-200",
    "South": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "East": "bg-amber-50 text-amber-700 border-amber-200",
    "West": "bg-purple-50 text-purple-700 border-purple-200",
    "Central": "bg-rose-50 text-rose-700 border-rose-200"
  };

  // Station type badges
  const stationTypeBadges = {
    "major_hub": { label: "🚇 Central Hub", color: "bg-gradient-to-r from-indigo-600 to-purple-600" },
    "interchange": { label: "🔄 Interchange", color: "bg-gradient-to-r from-amber-600 to-orange-600" },
    "standard": { label: "📍 Station", color: "bg-gradient-to-r from-slate-600 to-gray-600" }
  };

  // Filter stations
  const filteredStations = metroStations.map(cluster => ({
    ...cluster,
    stations: cluster.stations.filter(station => 
      station.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeLine === 'all' || station.lines.includes(activeLine))
    )
  })).filter(cluster => cluster.stations.length > 0);

  // Statistics
  const totalStations = 289;
  const totalInterchanges = 48

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section - Unique Design */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-75"></span>
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-150"></span>
              </div>
              <span className="text-sm font-medium text-slate-300">METRO NETWORK</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                Delhi Metro Stations
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mb-8">
              Discover {totalStations}+ stations across Delhi NCR. Find routes, connections, 
              and real-time information for your daily commute.
            </p>

            {/* Stats Cards - Unique Design */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-white">{totalStations}+</div>
                <div className="text-sm text-slate-400">Total Stations</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-white">{totalInterchanges}+</div>
                <div className="text-sm text-slate-400">Interchanges</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-white">12</div>
                <div className="text-sm text-slate-400">Metro Lines</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-white">5</div>
                <div className="text-sm text-slate-400">Zones</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className=" mx-auto py-12 sm:px-6 lg:px-8">
        {/* Search & Filter Bar - Unique Design */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search stations..."
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Line Filter */}
            <select
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-400 focus:border-transparent"
              value={activeLine}
              onChange={(e) => setActiveLine(e.target.value)}
            >
              <option value="all">All Metro Lines</option>
              {Object.keys(lineColors).map(line => (
                <option key={line} value={line}>{line}</option>
              ))}
            </select>

            {/* View Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex-1 px-4 py-3 rounded-xl flex items-center justify-center gap-2 transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-slate-800 text-white shadow-lg' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span className="hidden sm:inline">Grid</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex-1 px-4 py-3 rounded-xl flex items-center justify-center gap-2 transition-all ${
                  viewMode === 'list' 
                    ? 'bg-slate-800 text-white shadow-lg' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="hidden sm:inline">List</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stations Display - Unique Layout */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredStations.map((cluster, idx) => (
              <motion.div
                key={cluster.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow"
              >
                {/* Cluster Header - Unique Design */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      {cluster.cluster}
                    </h2>
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full">
                      {cluster.stations.length} Stations
                    </span>
                  </div>
                </div>

                {/* Stations List */}
                <div className="divide-y divide-slate-100">
                  {cluster.stations.map((station) => (
                    <div
                      key={station.name}
                      className="p-4 hover:bg-slate-50 cursor-pointer transition-colors"
                      onClick={() => setSelectedStation(station)}
                    >
                      <div className="flex items-start gap-3">
                        {/* Station Icon */}
                        <div className="flex-shrink-0 mt-1">
                          {station.type === 'major_hub' && <span className="text-xl">🏛️</span>}
                          {station.type === 'interchange' && <span className="text-xl">🔄</span>}
                          {station.type === 'standard' && <span className="text-xl">🚉</span>}
                        </div>
                        
                        {/* Station Info */}
                        <div className="flex-1">
                          <div className="flex items-center flex-wrap gap-2 mb-1">
                            <h3 className="font-semibold text-slate-900">{station.name}</h3>
                            <span className={`text-xs px-2 py-1 rounded-full text-white ${stationTypeBadges[station.type].color}`}>
                              {stationTypeBadges[station.type].label}
                            </span>
                          </div>
                          
                          {/* Lines */}
                          <div className="flex flex-wrap gap-2 mb-2">
                            {station.lines.map((line, i) => (
                              <span
                                key={i}
                                className={`text-xs px-2 py-1 bg-gradient-to-r ${lineColors[line]} text-white rounded-full`}
                              >
                                {line}
                              </span>
                            ))}
                          </div>
                          
                          {/* Meta Info */}
                          <div className="flex items-center gap-4 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              Opened {station.opened}
                            </span>
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                              </svg>
                              {station.platforms} Platforms
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs ${zoneColors[station.zone]}`}>
                              {station.zone} Zone
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // List View - Unique Layout
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
              {filteredStations.flatMap(cluster => 
                cluster.stations.map((station, idx) => (
                  <motion.div
                    key={`${cluster.id}-${station.name}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.02 }}
                    className="group relative bg-gradient-to-br from-slate-50 to-white rounded-xl p-5 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all"
                    onClick={() => setSelectedStation(station)}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity">
                      <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:10px_10px]"></div>
                    </div>
                    
                    <div className="relative">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">
                            {station.type === 'major_hub' && '🏛️'}
                            {station.type === 'interchange' && '🔄'}
                            {station.type === 'standard' && '🚉'}
                          </span>
                          <div>
                            <h3 className="font-semibold text-slate-900">{station.name}</h3>
                            <span className="text-xs text-slate-500">{cluster.cluster}</span>
                          </div>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full text-white ${stationTypeBadges[station.type].color}`}>
                          {station.type === 'major_hub' ? 'Hub' : station.type === 'interchange' ? 'INT' : 'STN'}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-1">
                          {station.lines.map((line, i) => (
                            <span
                              key={i}
                              className={`text-xs px-2 py-1 bg-gradient-to-r ${lineColors[line]} text-white rounded-full`}
                            >
                              {line.split(' ')[0]}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-500 flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {station.opened}
                          </span>
                          <span className={`px-2 py-0.5 rounded-full text-xs ${zoneColors[station.zone]}`}>
                            {station.zone}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        )}

        {filteredStations.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🚇</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No stations found</h3>
            <p className="text-slate-600">Try adjusting your search or filter</p>
          </div>
        )}
      </div>

      {/* Station Details Modal - Unique Design */}
      <AnimatePresence>
        {selectedStation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedStation(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Header Gradient */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-8 py-6">
                  <button
                    onClick={() => setSelectedStation(null)}
                    className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">
                      {selectedStation.type === 'major_hub' && '🏛️'}
                      {selectedStation.type === 'interchange' && '🔄'}
                      {selectedStation.type === 'standard' && '🚉'}
                    </span>
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-1">{selectedStation.name}</h2>
                      <p className="text-slate-300">{selectedStation.zone} Zone</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-8 py-6 space-y-6">
                  {/* Station Info Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 rounded-xl p-4">
                      <div className="text-sm text-slate-500 mb-1">Opened</div>
                      <div className="text-xl font-semibold text-slate-900">{selectedStation.opened}</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <div className="text-sm text-slate-500 mb-1">Platforms</div>
                      <div className="text-xl font-semibold text-slate-900">{selectedStation.platforms}</div>
                    </div>
                  </div>

                  {/* Metro Lines */}
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      Metro Lines
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedStation.lines.map((line, i) => (
                        <span
                          key={i}
                          className={`px-4 py-2 bg-gradient-to-r ${lineColors[line]} text-white rounded-xl text-sm font-medium`}
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 border border-slate-200">
                    <h3 className="text-sm font-semibold text-slate-900 mb-3">Station Details</h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-slate-600">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        Station Type: {stationTypeBadges[selectedStation.type].label}
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Daily Traffic: Very High
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                        Parking: Available
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        Accessibility: Full
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button className="flex-1 bg-gradient-to-r from-slate-800 to-slate-900 text-white py-3 px-4 rounded-xl font-medium hover:from-slate-700 hover:to-slate-800 transition-all">
                      Plan Route
                    </button>
                    <button className="flex-1 bg-slate-100 text-slate-700 py-3 px-4 rounded-xl font-medium hover:bg-slate-200 transition-all">
                      View Schedule
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StationsPage;