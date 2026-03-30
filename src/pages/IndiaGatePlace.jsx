// IndiaGatePlace.jsx
import React, { useState } from 'react';
import { 
  Train, 
  Clock, 
  IndianRupee, 
  MapPin, 
  Camera, 
  Info,
  Calendar,
  Navigation,
  Star,
  Users,
  ExternalLink,
  ChevronRight,
  Phone,
  Globe,
  Sunrise,
  Sunset,
  Shield,
  Music,
  BookOpen,
  Award,
  Heart,
  Share2,
  Flag,
  Coffee,
  TreePine,
  Footprints,
  Sunset as SunsetIcon,
  Utensils,
  Landmark
} from 'lucide-react';
import { Helmet } from "react-helmet";

import india1 from "../assets/indiaget.jpg"
import india2 from "../assets/india2.jpeg"
import india3 from "../assets/india3.webp"
import india4 from "../assets/india4.jpg"
import { Link } from 'react-router-dom';

const IndiaGatePlace = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const seoKeywords = [
"India Gate Delhi",
"India Gate New Delhi",
"India Gate nearest metro station",
"Central Secretariat metro station India Gate",
"India Gate timings",
"India Gate entry fee",
"India Gate Delhi history",
"India Gate location Delhi",
"India Gate night view",
"India Gate Delhi tourism",
"places to visit near India Gate",
"India Gate Rajpath Delhi",
"India Gate Delhi travel guide",
"Delhi tourist places near metro",
"Delhi war memorial India Gate",
"India Gate Amar Jawan Jyoti",
"India Gate New Delhi coordinates",
"how to reach India Gate by metro",
"India Gate Delhi night photography",
"best time to visit India Gate Delhi"
].join(", ");

  // Place data
  const placeData = {
    name: "India Gate",
    subtitle: "War Memorial • National Monument • Iconic Landmark",
    shortDescription: "India Gate is a war memorial located in New Delhi, commemorating the 70,000 soldiers of the British Indian Army who died in World War I and the Third Afghan War.",
    
    // Quick info
    nearestMetro: "Central Secretariat",
    metroLine: "Yellow & Violet Line",
    distance: "0.5 km",
    openHours: "24 hours",
    closedDay: "None (Always Open)",
    entryFee: "Free",
    
    // Metro connectivity
    metroStations: [
      { name: "Central Secretariat", line: "Yellow Line", distance: "0.5 km", time: "8 min walk", icon: "🚇" },
      { name: "Udyog Bhavan", line: "Yellow Line", distance: "0.8 km", time: "12 min walk", icon: "🚇" },
      { name: "Khan Market", line: "Violet Line", distance: "2.0 km", time: "8 min auto", icon: "🚇" }
    ],
    
    // Images
    images: [
      india4,
      india2,
      india3,
      india1
    ],
    
    // Things to do
    activities: [
      { name: "Photography", icon: <Camera className="h-5 w-5" />, duration: "1-2 hours", description: "Capture stunning shots of the illuminated memorial at night" },
      { name: "Picnicking", icon: <TreePine className="h-5 w-5" />, duration: "2-3 hours", description: "Enjoy family time on the lush green lawns" },
      { name: "Evening walks", icon: <Footprints className="h-5 w-5" />, duration: "1 hour", description: "Pleasant walk around the monument with evening lights" },
      { name: "Street food tasting", icon: <Utensils className="h-5 w-5" />, duration: "1 hour", description: "Try local chaat and snacks from nearby vendors" },
      { name: "Boating", icon: <SunsetIcon className="h-5 w-5" />, duration: "30 min", description: "Enjoy boating at India Gate Lawns" }
    ],
    
    // Quick info items
    quickInfo: {
      bestTime: "October to March, evenings",
      builtYear: "1921-1931",
      builtBy: "Edwin Lutyens",
      height: "42 meters",
      material: "Red Sandstone & Granite",
      type: "War Memorial"
    },
    
    // Travel tips
    travelTips: [
      "Best time to visit is during October to March, especially in the evening",
      "Open 24 hours - evening visits offer beautiful lighting",
      "Carry water, especially during summer months",
      "Keep your belongings secure",
      "Visit on weekdays to avoid large crowds",
      "Combine with nearby attractions like Rashtrapati Bhavan"
    ],
    
    // Safety tips
    safetyTips: [
      "Follow safety guidelines and local customs",
      "Be aware of your surroundings, especially at night",
      "Use designated parking areas",
      "Keep emergency numbers handy",
      "Avoid isolated areas after dark"
    ],
    
    // Nearby attractions
    nearbyAttractions: [
      { name: "Rashtrapati Bhavan", distance: "2.0 km", time: "8 min auto", type: "Presidential Palace", icon: <Landmark className="h-4 w-4" /> },
      { name: "Parliament House", distance: "1.8 km", time: "7 min auto", type: "Government Building", icon: <Landmark className="h-4 w-4" /> },
      { name: "National Museum", distance: "2.5 km", time: "10 min auto", type: "Museum", icon: <BookOpen className="h-4 w-4" /> },
      { name: "Rajpath", distance: "0.2 km", time: "3 min walk", type: "Ceremonial Boulevard", icon: <Flag className="h-4 w-4" /> }
    ],
    
    // Similar places
    similarPlaces: [
      { name: "Raj Ghat", distance: "4.5 km", line: "Violet Line", time: "15 min", description: "Mahatma Gandhi Memorial" },
      { name: "National War Memorial", distance: "1.5 km", line: "Yellow Line", time: "10 min", description: "Modern war memorial" },
      { name: "India Gate Lawns", distance: "0.1 km", line: "Walking", time: "2 min", description: "Gardens and boating area" }
    ],
    
    // Photography tips
    photographyTips: [
      "Best time: Golden hour (5-6:30 PM) for warm lighting",
      "Night photography: Monument is beautifully lit after sunset",
      "Use wide-angle lens for full monument shots",
      "Tripod recommended for night shots",
      "Capture reflections in nearby water features"
    ],
    
    // Did you know facts
    didYouKnow: [
      "Originally named the 'All India War Memorial'",
      "Designed by Sir Edwin Lutyens, the principal architect of New Delhi",
      "The foundation stone was laid in 1921 by the Duke of Connaught",
      "Completed in 1931 and inaugurated by Lord Irwin",
      "Has names of 13,516 British and Indian soldiers inscribed",
      "Amar Jawan Jyoti (Flame of the Immortal Soldier) was added in 1971"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
     <Helmet>
        <title>
        India Gate Delhi Guide | Nearest Metro, Timings, Entry Fee & Travel Tips
        </title>

        <meta
        name="description"
        content="Complete travel guide to India Gate Delhi including nearest metro station, timings, entry fee, history, nearby attractions and travel tips. Easily reachable via Central Secretariat metro station."
        />

        <meta name="keywords" content={seoKeywords} />

        <link rel="canonical" href="https://mydelhimetro.in/places/india-gate-delhi" />
        </Helmet>

        <script type="application/ld+json">
        {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": "India Gate",
        "description": "India Gate is a national war memorial located in New Delhi commemorating Indian soldiers who died in World War I.",
        "address": {
        "@type": "PostalAddress",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "addressCountry": "India"
        },
        "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.6129",
        "longitude": "77.2295"
        },
        "touristType": "Heritage Tourism",
        "keywords": seoKeywords
        })}
        </script>

      {/* Hero Section with Image Gallery */}
      <div className="relative bg-gradient-to-b from-gray-900 to-gray-800">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 lg:h-96 group">
                <img 
                  src={placeData.images[selectedImage]} 
                  alt={placeData.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1">
                  <Award className="h-4 w-4 text-yellow-400" />
                  National Monument
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button 
                    onClick={() => setIsSaved(!isSaved)}
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all"
                  >
                    <Heart className={`h-5 w-5 ${isSaved ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
                  </button>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all">
                    <Share2 className="h-5 w-5 text-gray-700" />
                  </button>
                </div>
              </div>
              
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {placeData.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`rounded-lg overflow-hidden h-16 md:h-20 transition-all ${
                      selectedImage === idx 
                        ? 'ring-2 ring-blue-600 scale-105 shadow-lg' 
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Info Panel */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 lg:p-8 border border-white/20">
              <div>
                <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                  <Flag className="h-4 w-4" />
                  <span>War Memorial • Iconic Landmark</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {placeData.name}
                </h1>
                <p className="text-gray-600 text-sm lg:text-base mb-4 leading-relaxed">
                  {placeData.shortDescription}
                </p>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="bg-blue-50 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 text-blue-700 mb-2">
                    <Train className="h-5 w-5" />
                    <span className="text-sm font-medium">Nearest Metro</span>
                  </div>
                  <div className="font-semibold text-gray-900">{placeData.nearestMetro}</div>
                  <div className="text-sm text-gray-600">{placeData.metroLine}</div>
                  <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {placeData.distance} walk
                  </div>
                </div>

                <div className="bg-amber-50 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 text-amber-700 mb-2">
                    <Clock className="h-5 w-5" />
                    <span className="text-sm font-medium">Open Hours</span>
                  </div>
                  <div className="font-semibold text-gray-900">{placeData.openHours}</div>
                  <div className="text-sm text-gray-600">{placeData.closedDay}</div>
                </div>

                <div className="bg-emerald-50 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 text-emerald-700 mb-2">
                    <IndianRupee className="h-5 w-5" />
                    <span className="text-sm font-medium">Entry Fee</span>
                  </div>
                  <div className="font-semibold text-gray-900">{placeData.entryFee}</div>
                  <div className="text-sm text-gray-600">No ticket required</div>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 text-purple-700 mb-2">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm font-medium">Best Time</span>
                  </div>
                  <div className="font-semibold text-gray-900">{placeData.quickInfo.bestTime.split(',')[0]}</div>
                  <div className="text-sm text-gray-600">Evenings preferred</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link  to={"/route-planner"}  className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3.5 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
                  <Navigation className="h-5 w-5" />
                  Get Directions
                </Link>
                <Link  to={"/route-planner"}  className="flex-1 bg-gray-100 text-gray-700 py-3.5 rounded-xl font-medium hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                  <ExternalLink className="h-5 w-5" />
                  View on Map
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Tab Navigation - Modern Pill Design */}
        <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-200 mb-8 overflow-x-auto">
          <div className="flex gap-1 min-w-max">
            {[
              { id: 'overview', label: 'Overview', icon: <Info className="h-5 w-5" /> },
              { id: 'activities', label: 'Things to Do', icon: <Footprints className="h-5 w-5" /> },
              { id: 'tips', label: 'Travel Tips', icon: <Shield className="h-5 w-5" /> },
              { id: 'nearby', label: 'Nearby', icon: <MapPin className="h-5 w-5" /> },
              { id: 'photos', label: 'Photography', icon: <Camera className="h-5 w-5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-xl transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main content - 2 columns */}
              <div className="lg:col-span-2 space-y-8">
                {/* About Section */}
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Info className="h-6 w-6 text-blue-600" />
                    About India Gate
                  </h2>
                  
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                      India Gate is one of Delhi NCR's most popular memorials destinations. 
                      Located conveniently near Central Secretariat metro station, it offers easy 
                      accessibility for visitors from all parts of Delhi and NCR.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      India Gate stands as one of Delhi's most recognizable landmarks and a symbol 
                      of national pride. This imposing archway serves as a memorial to Indian soldiers 
                      and is surrounded by lush lawns that make it a popular gathering spot for 
                      families and tourists.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The monument is illuminated every evening, creating a breathtaking sight. 
                      The surrounding areas are perfect for evening strolls, picnics, and enjoying 
                      the vibrant atmosphere of Delhi's heart.
                    </p>
                  </div>

                  {/* Key Features Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Award className="h-6 w-6 text-blue-700" />
                      </div>
                      <div className="font-medium text-sm">National Memorial</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Calendar className="h-6 w-6 text-amber-700" />
                      </div>
                      <div className="font-medium text-sm">Built 1921-1931</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Users className="h-6 w-6 text-emerald-700" />
                      </div>
                      <div className="font-medium text-sm">Free Entry</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Camera className="h-6 w-6 text-purple-700" />
                      </div>
                      <div className="font-medium text-sm">Photo Paradise</div>
                    </div>
                  </div>
                </div>

                {/* Metro Connectivity */}
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Train className="h-6 w-6 text-blue-600" />
                    Metro Connectivity
                  </h2>
                  
                  <div className="space-y-4">
                    {placeData.metroStations.map((station, idx) => (
                      <div key={idx} className="flex items-center justify-between p-5 bg-gray-50 rounded-xl hover:shadow-md transition-shadow group">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                            station.line.includes('Yellow') ? 'bg-yellow-100' : 'bg-purple-100'
                          }`}>
                            {station.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 text-lg">{station.name}</h3>
                            <p className={`text-sm ${
                              station.line.includes('Yellow') ? 'text-yellow-700' : 'text-purple-700'
                            }`}>
                              {station.line}
                            </p>
                            <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {station.distance}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {station.time}
                              </span>
                            </div>
                          </div>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                          Directions
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Did You Know */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 lg:p-8 border border-indigo-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Star className="h-6 w-6 text-indigo-600" />
                    Did You Know?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {placeData.didYouKnow.map((fact, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-white/60 rounded-xl">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></span>
                        <span className="text-gray-700 text-sm">{fact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar - 1 column */}
              <div className="space-y-6">
                {/* Quick Info Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Info className="h-5 w-5 text-blue-600" />
                    Quick Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Best Time</span>
                      <span className="text-sm font-medium text-gray-900 text-right">{placeData.quickInfo.bestTime}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Built</span>
                      <span className="text-sm font-medium text-gray-900">{placeData.quickInfo.builtYear}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Architect</span>
                      <span className="text-sm font-medium text-gray-900">{placeData.quickInfo.builtBy}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Height</span>
                      <span className="text-sm font-medium text-gray-900">{placeData.quickInfo.height}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Material</span>
                      <span className="text-sm font-medium text-gray-900">{placeData.quickInfo.material}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-sm text-gray-600">Type</span>
                      <span className="text-sm font-medium text-gray-900">{placeData.quickInfo.type}</span>
                    </div>
                  </div>
                </div>

                {/* Photography Tips */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Camera className="h-5 w-5 text-amber-600" />
                    Photography Tips
                  </h3>
                  <ul className="space-y-3">
                    {placeData.photographyTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-amber-500 text-lg">•</span>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weather Widget */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Sunrise className="h-5 w-5" />
                    Current Weather
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-4xl font-bold">24°C</div>
                      <div className="text-sm opacity-90 mt-1">Pleasant</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm">Humidity: 45%</div>
                      <div className="text-sm">Wind: 12 km/h</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-white/20 rounded-xl p-3 text-center backdrop-blur-sm">
                      <Sunrise className="h-4 w-4 mx-auto mb-1" />
                      <div>Sunrise</div>
                      <div className="font-bold">6:42 AM</div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-3 text-center backdrop-blur-sm">
                      <Sunset className="h-4 w-4 mx-auto mb-1" />
                      <div>Sunset</div>
                      <div className="font-bold">6:08 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ACTIVITIES TAB */}
          {activeTab === 'activities' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Things to Do & Experience</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {placeData.activities.map((activity, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center text-blue-700 group-hover:scale-110 transition-transform">
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{activity.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-500">{activity.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TRAVEL TIPS TAB */}
          {activeTab === 'tips' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Travel Tips */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Navigation className="h-6 w-6 text-blue-600" />
                  Travel Tips
                </h2>
                <ul className="space-y-4">
                  {placeData.travelTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Safety Tips */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-amber-600" />
                  Safety and Travel Tips
                </h2>
                <p className="text-gray-700 mb-4">
                  When visiting India Gate, it's important to follow safety guidelines and local customs. 
                  Always carry water, especially during summer months, and keep your belongings secure.
                </p>
                <ul className="space-y-4">
                  {placeData.safetyTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 bg-amber-50 rounded-xl">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2"></span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Entry Info */}
              <div className="lg:col-span-2 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Entry Fees and Tickets</h2>
                <p className="text-gray-700 text-lg">Entry to India Gate is <span className="font-bold text-emerald-700">free of charge</span> for all visitors.</p>
              </div>
            </div>
          )}

          {/* NEARBY TAB */}
          {activeTab === 'nearby' && (
            <div className="space-y-10">
              {/* Nearby Attractions */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Nearby Attractions</h2>
                <p className="text-gray-600 mb-6">
                  While visiting India Gate, you can also explore nearby attractions such as Rashtrapati Bhavan, 
                  Parliament House, National Museum. This makes for a perfect day trip combining multiple 
                  destinations in the same area.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {placeData.nearbyAttractions.map((place, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-lg transition-all group">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-3 group-hover:scale-110 transition-transform">
                        {place.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">{place.name}</h3>
                      <p className="text-xs text-gray-500 mb-2">{place.type}</p>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {place.distance}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {place.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Similar Places */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Places</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {placeData.similarPlaces.map((place, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-5 border border-gray-200 hover:shadow-lg transition-all">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{place.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{place.description}</p>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Train className="h-4 w-4" />
                          <span>{place.line}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{place.distance} • {place.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Raj Ghat Special */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Raj Ghat Memorials</h3>
                <p className="text-gray-700">
                  Located 4.5 km away, Raj Ghat is the memorial of Mahatma Gandhi. Easily accessible via 
                  Violet Line from Central Secretariat to Kashmere Gate station.
                </p>
              </div>
            </div>
          )}

          {/* PHOTOGRAPHY TAB */}
          {activeTab === 'photos' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Photography and Social Media</h2>
              <p className="text-gray-600 text-lg mb-8">
                India Gate offers excellent photography opportunities. Share your experiences on social media 
                to help other travelers discover this amazing destination.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-2 grid grid-cols-2 gap-4">
                  {placeData.images.map((img, idx) => (
                    <div key={idx} className="relative rounded-xl overflow-hidden h-48 group">
                      <img src={img} alt={`India Gate ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Camera className="h-5 w-5 text-purple-600" />
                    Photo Tips
                  </h3>
                  <ul className="space-y-3">
                    {placeData.photographyTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-purple-500 text-lg">•</span>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-700">
                      Share Photos
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Location Map */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-blue-600" />
              Location Map
            </h2>
        <a
            href="https://www.google.com/maps/place/India+Gate,+New+Delhi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1 bg-blue-50 px-4 py-2 rounded-lg"
            >
            View Larger Map
            <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div className="relative h-96 bg-gradient-to-br from-blue-100 to-gray-200 rounded-xl overflow-hidden">
            {/* Map placeholder */}
           <div className="relative h-96 rounded-xl overflow-hidden">
            <iframe
            title="India Gate Delhi Map"
            src="https://www.google.com/maps?q=India+Gate+New+Delhi&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            />
            </div>
          </div>
        </div>
      </main>
 
    </div>
  );
};

export default IndiaGatePlace;