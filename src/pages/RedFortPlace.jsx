// RedFortPlace.jsx
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
  Heart
} from 'lucide-react';

import redfort2 from "../assets/redfort2.jpg"
import redfort3 from "../assets/redfort3.jpg"
import redfort4 from "../assets/redfort4.webp"
import { Link } from 'react-router-dom';

const RedFortPlace = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);

  // Place data
  const placeData = {
    name: "Red Fort (Lal Qila)",
    subtitle: "UNESCO World Heritage Site • Mughal Architecture • Historic Fortress",
    shortDescription: "The Red Fort is a historic fortified palace of the Mughal emperors of India. A UNESCO World Heritage Site, it served as the main residence of the Mughal emperors for nearly 200 years.",
    
    // Quick info
    nearestMetro: "Lal Qila",
    metroLine: "Violet Line",
    distance: "0.8 km",
    openHours: "9:30 AM - 4:30 PM",
    closedDay: "Monday",
    entryFeeIndian: "₹35",
    entryFeeForeigner: "₹500",
    
    // Metro connectivity
    metroStations: [
      { name: "Lal Qila", line: "Violet Line", distance: "0.8 km", time: "10 min walk" },
      { name: "Chandni Chowk", line: "Yellow Line", distance: "2.0 km", time: "5 min auto" }
    ],
    
    // Images
    images: [
      redfort2,
      redfort3,
      redfort4,
    ],
    
    // Things to do
    activities: [
      { name: "Exploring Mughal architecture", icon: <BookOpen className="h-5 w-5" />, duration: "2-3 hours" },
      { name: "Museum visits", icon: <Info className="h-5 w-5" />, duration: "1 hour" },
      { name: "Heritage walks", icon: <Navigation className="h-5 w-5" />, duration: "1.5 hours" },
      { name: "Photography tours", icon: <Camera className="h-5 w-5" />, duration: "2 hours" }
    ],
    
    // FAQs
    faqs: [
      {
        question: "How do I get to Red Fort (Lal Qila) by metro?",
        answer: "The nearest metro station is Lal Qila on the Violet Line, just 0.8 km away (10 min walk). You can also take Yellow Line to Chandni Chowk station and take an auto-rickshaw (5 min ride)."
      },
      {
        question: "What are the timings of Red Fort (Lal Qila)?",
        answer: "The fort is open from 9:30 AM to 4:30 PM every day except Monday. It remains closed on national holidays as well."
      },
      {
        question: "How much does it cost to visit Red Fort (Lal Qila)?",
        answer: "Entry fee is ₹35 for Indian citizens and ₹500 for foreign tourists. Children below 15 years enter free. Video cameras require an additional ticket of ₹25."
      },
      {
        question: "What's so special about Red Fort (Lal Qila)?",
        answer: "Built by Emperor Shah Jahan in the 17th century, it served as the main residence of Mughal emperors for 200 years. It's a UNESCO World Heritage Site and the venue for India's Independence Day celebrations."
      },
      {
        question: "Can I take photos at Red Fort (Lal Qila)?",
        answer: "Yes, photography is allowed. Still cameras are free. Video cameras require a separate ticket of ₹25. Professional shoots need prior permission."
      },
      {
        question: "How long should I spend at Red Fort (Lal Qila)?",
        answer: "Plan for 2-3 hours to explore the main buildings, museums, and gardens comfortably. Add extra time for photography and guided tours."
      }
    ],
    
    // Quick info items
    quickInfo: {
      bestTime: "October to March",
      builtYear: "1638-1648",
      builtBy: "Emperor Shah Jahan",
      area: "254.67 acres",
      material: "Red Sandstone",
      unescoYear: "2007"
    },
    
    // Travel tips
    travelTips: [
      "Visit early morning to avoid crowds and heat",
      "Audio guides available in multiple languages",
      "Photography allowed but video cameras require separate tickets",
      "Wear comfortable walking shoes",
      "Carry water bottles (available inside)",
      "Weekdays are less crowded than weekends"
    ],
    
    // Nearby attractions
    nearbyAttractions: [
      { name: "Jama Masjid", distance: "1.2 km", time: "15 min walk", type: "Mosque" },
      { name: "Chandni Chowk", distance: "1.5 km", time: "10 min auto", type: "Market" },
      { name: "Raj Ghat", distance: "2.5 km", time: "8 min auto", type: "Memorial" },
      { name: "India Gate", distance: "4.0 km", time: "15 min metro", type: "Monument" }
    ],
    
    // Similar places
    similarPlaces: [
      { name: "Qutub Minar", distance: "14 km", line: "Yellow Line", time: "35 min" },
      { name: "Humayun's Tomb", distance: "8 km", line: "Violet Line", time: "25 min" },
      { name: "Purana Qila", distance: "5 km", line: "Violet Line", time: "20 min" }
    ],
    
    // Did you know facts
    didYouKnow: [
      "UNESCO World Heritage Site since 2007",
      "Built with red sandstone, giving it the distinctive color",
      "Covers an area of 254.67 acres",
      "Houses the famous Peacock Throne hall",
      "Prime Minister addresses nation from here every Independence Day"
    ]
  };

  // Historical timeline
  const timeline = [
    { year: "1638", event: "Construction begins under Emperor Shah Jahan" },
    { year: "1648", event: "Red Fort completed and inaugurated" },
    { year: "1739", event: "Nadir Shah invades and loots the fort" },
    { year: "1857", event: "Last Mughal emperor Bahadur Shah Zafar imprisoned" },
    { year: "1947", event: "First Independence Day address from the fort" },
    { year: "2007", event: "Declared UNESCO World Heritage Site" }
  ];

  const seoKeywords = [
"Red Fort Delhi",
"Lal Qila Delhi",
"Red Fort nearest metro station",
"Lal Qila metro station",
"Red Fort Delhi timings",
"Red Fort entry fee",
"Red Fort Delhi history",
"Red Fort Delhi ticket price",
"Red Fort UNESCO World Heritage Site",
"Red Fort India Independence Day speech",
"Red Fort location Delhi",
"Red Fort Delhi how to reach",
"Red Fort nearest metro station violet line",
"places to visit near Red Fort Delhi",
"tourist places near Red Fort Delhi",
"Delhi tourist places by metro",
"Delhi heritage monuments",
"Delhi Mughal architecture",
"Lal Qila Old Delhi",
"Red Fort Chandni Chowk",
"Red Fort Delhi travel guide"
].join(", ");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <title>
        Red Fort Delhi (Lal Qila) Guide | Nearest Metro Station, Timings & Entry Fee
        </title>

        <meta
        name="description"
        content="Complete travel guide to Red Fort (Lal Qila) Delhi including nearest metro station, ticket price, timings, history, and nearby attractions. Easily reachable via Lal Qila metro station on Violet Line."
        />

        <meta name="keywords" content={seoKeywords} />
        <script type="application/ld+json">
            {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": "Red Fort",
            "description":
            "Red Fort (Lal Qila) is a UNESCO World Heritage Site in Delhi built by Mughal Emperor Shah Jahan.",
            "address": {
            "@type": "PostalAddress",
            "addressLocality": "Old Delhi",
            "addressRegion": "Delhi",
            "addressCountry": "India"
            },
            "geo": {
            "@type": "GeoCoordinates",
            "latitude": "28.6562",
            "longitude": "77.2410"
            },
            "touristType": "Heritage Tourism",
            "keywords": seoKeywords
            })}
            </script>
   

      {/* Hero Section with Image Gallery */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 lg:h-96">
                <img 
                  src={placeData.images[selectedImage]} 
                  alt={placeData.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm font-medium">
                  UNESCO World Heritage
                </div>
              </div>
              
              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-3">
                {placeData.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`rounded-lg overflow-hidden h-20 ${
                      selectedImage === idx ? 'ring-2 ring-blue-600' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Info Panel */}
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {placeData.name}
                </h1>
                <p className="text-gray-600 text-sm lg:text-base mb-4">
                  {placeData.subtitle}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {placeData.shortDescription}
                </p>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-blue-700 mb-2">
                    <Train className="h-5 w-5" />
                    <span className="text-sm font-medium">Nearest Metro</span>
                  </div>
                  <div className="font-semibold text-gray-900">{placeData.nearestMetro}</div>
                  <div className="text-sm text-gray-600">{placeData.metroLine}</div>
                  <div className="text-xs text-gray-500 mt-1">{placeData.distance} walk</div>
                </div>

                <div className="bg-amber-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-amber-700 mb-2">
                    <Clock className="h-5 w-5" />
                    <span className="text-sm font-medium">Open Hours</span>
                  </div>
                  <div className="font-semibold text-gray-900">{placeData.openHours}</div>
                  <div className="text-sm text-gray-600">Closed {placeData.closedDay}</div>
                </div>

                <div className="bg-emerald-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-emerald-700 mb-2">
                    <IndianRupee className="h-5 w-5" />
                    <span className="text-sm font-medium">Entry Fee</span>
                  </div>
                  <div className="font-semibold text-gray-900">Indians: {placeData.entryFeeIndian}</div>
                  <div className="text-sm text-gray-600">Foreigners: {placeData.entryFeeForeigner}</div>
                </div>

                <div className="bg-purple-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-purple-700 mb-2">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm font-medium">Best Time</span>
                  </div>
                  <div className="font-semibold text-gray-900">{placeData.quickInfo.bestTime}</div>
                  <div className="text-sm text-gray-600">Pleasant weather</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
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
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex overflow-x-auto gap-1 pb-1">
            {[
              { id: 'overview', label: 'Overview', icon: <Info className="h-5 w-5" /> },
              { id: 'history', label: 'History', icon: <BookOpen className="h-5 w-5" /> },
              { id: 'activities', label: 'Things to Do', icon: <Navigation className="h-5 w-5" /> },
              { id: 'faqs', label: 'FAQs', icon: <Shield className="h-5 w-5" /> },
              { id: 'nearby', label: 'Nearby', icon: <MapPin className="h-5 w-5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-t-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main content - 2 columns */}
              <div className="lg:col-span-2 space-y-8">
                {/* About Section */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Info className="h-6 w-6 text-blue-600" />
                    About Red Fort (Lal Qila)
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Red Fort (Lal Qila) is one of Delhi NCR's most popular historical destinations. 
                    Located conveniently near Lal Qila metro station, it offers easy accessibility for 
                    visitors from all parts of Delhi and NCR.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The Red Fort, known as Lal Qila in Hindi, is one of Delhi's most iconic monuments. 
                    Built by Emperor Shah Jahan in the 17th century, this magnificent fort complex 
                    showcases the pinnacle of Mughal architecture and serves as a symbol of India's 
                    rich heritage.
                  </p>

                  {/* Key Features */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Award className="h-6 w-6 text-blue-700" />
                      </div>
                      <div className="font-medium text-sm">UNESCO World Heritage</div>
                      <div className="text-xs text-gray-500">Since 2007</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Calendar className="h-6 w-6 text-amber-700" />
                      </div>
                      <div className="font-medium text-sm">Built 1638-1648</div>
                      <div className="text-xs text-gray-500">Shah Jahan era</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <MapPin className="h-6 w-6 text-emerald-700" />
                      </div>
                      <div className="font-medium text-sm">254.67 acres</div>
                      <div className="text-xs text-gray-500">Total area</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Camera className="h-6 w-6 text-purple-700" />
                      </div>
                      <div className="font-medium text-sm">Photography allowed</div>
                      <div className="text-xs text-gray-500">Video extra ₹25</div>
                    </div>
                  </div>
                </div>

                {/* Metro Connectivity */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Train className="h-6 w-6 text-blue-600" />
                    Metro Connectivity
                  </h2>
                  
                  <div className="space-y-4">
                    {placeData.metroStations.map((station, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            station.line.includes('Violet') ? 'bg-purple-100' : 'bg-yellow-100'
                          }`}>
                            <Train className={`h-5 w-5 ${
                              station.line.includes('Violet') ? 'text-purple-700' : 'text-yellow-700'
                            }`} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{station.name}</h3>
                            <p className="text-sm text-gray-600">{station.line}</p>
                            <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                              <span>📍 {station.distance}</span>
                              <span>⏱️ {station.time}</span>
                            </div>
                          </div>
                        </div>
                        <button className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
                          Directions
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Did You Know */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Star className="h-6 w-6 text-indigo-600" />
                    Did You Know?
                  </h2>
                  <ul className="space-y-3">
                    {placeData.didYouKnow.map((fact, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2"></span>
                        <span className="text-gray-700">{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar - 1 column */}
              <div className="space-y-6">
                {/* Quick Info Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Info className="h-5 w-5 text-blue-600" />
                    Quick Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Best Time</span>
                      <span className="text-sm font-medium text-gray-900">{placeData.quickInfo.bestTime}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Built</span>
                      <span className="text-sm font-medium text-gray-900">{placeData.quickInfo.builtYear}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Built By</span>
                      <span className="text-sm font-medium text-gray-900">{placeData.quickInfo.builtBy}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Area</span>
                      <span className="text-sm font-medium text-gray-900">{placeData.quickInfo.area}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Material</span>
                      <span className="text-sm font-medium text-gray-900">{placeData.quickInfo.material}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-600">UNESCO Since</span>
                      <span className="text-sm font-medium text-gray-900">{placeData.quickInfo.unescoYear}</span>
                    </div>
                  </div>
                </div>

                {/* Travel Tips */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Navigation className="h-5 w-5 text-amber-600" />
                    Travel Tips
                  </h3>
                  <ul className="space-y-3">
                    {placeData.travelTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-amber-500 text-lg">•</span>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weather Info */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Sunrise className="h-5 w-5" />
                    Weather Info
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-3xl font-bold">24°C</div>
                      <div className="text-sm opacity-90">Pleasant</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm">Humidity: 45%</div>
                      <div className="text-sm">AQI: 152</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-white/20 rounded-lg p-2 text-center">
                      <Sunrise className="h-4 w-4 mx-auto mb-1" />
                      <div>Sunrise</div>
                      <div className="font-bold">6:42 AM</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-2 text-center">
                      <Sunset className="h-4 w-4 mx-auto mb-1" />
                      <div>Sunset</div>
                      <div className="font-bold">6:08 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* HISTORY TAB */}
          {activeTab === 'history' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {/* Historical Significance */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Historical Significance</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Construction of the Red Fort began in 1638 and was completed in 1648 under the reign 
                    of Mughal Emperor Shah Jahan. The fort served as the main residence of the Mughal 
                    emperors and their households for nearly 200 years, until 1857. It was from the 
                    ramparts of this fort that the Prime Minister of India addresses the nation every 
                    Independence Day.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The fort represents the peak of Mughal architecture under Shah Jahan and combines 
                    Persianate palace architecture with Indian traditions. Its design and architecture 
                    reflects both the grandeur of the Mughal empire and the sophistication of its court.
                  </p>
                </div>

                {/* Timeline */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Historical Timeline</h2>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                    <div className="space-y-6 pl-12">
                      {timeline.map((item, idx) => (
                        <div key={idx} className="relative">
                          <div className="absolute -left-8 top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
                          <div className="bg-gray-50 p-4 rounded-xl">
                            <span className="text-sm font-bold text-blue-700">{item.year}</span>
                            <p className="text-gray-700 mt-1">{item.event}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Architecture Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Architecture Highlights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span className="text-sm">Red sandstone construction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span className="text-sm">Diwan-i-Aam (Hall of Public Audience)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span className="text-sm">Diwan-i-Khas (Hall of Private Audience)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span className="text-sm">Rang Mahal (Palace of Colors)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span className="text-sm">Moti Masjid (Pearl Mosque)</span>
                    </li>
                  </ul>
                </div>

                {/* Visitor Info */}
                <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-3">Visitor Information</h3>
                  <div className="space-y-2 text-sm text-amber-800">
                    <p>🎧 Audio guides available</p>
                    <p>📱 Mobile app with self-guided tour</p>
                    <p>👨‍👩‍👧 Family-friendly facilities</p>
                    <p>♿ Wheelchair accessible</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ACTIVITIES TAB */}
          {activeTab === 'activities' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {placeData.activities.map((activity, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{activity.name}</h3>
                      <p className="text-sm text-gray-600">Duration: {activity.duration}</p>
                      <button className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
                        Learn more
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* FAQS TAB */}
          {activeTab === 'faqs' && (
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  Heritage Explorer Guide - Red Fort (Lal Qila) FAQs
                </h2>
                <div className="space-y-4">
                  {placeData.faqs.map((faq, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                      <div className="p-4 bg-gray-50 font-medium text-gray-900">
                        {faq.question}
                      </div>
                      <div className="p-4 bg-white text-gray-700 text-sm">
                        {faq.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* NEARBY TAB */}
          {activeTab === 'nearby' && (
            <div className="space-y-8">
              {/* Nearby Attractions */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Nearby Attractions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {placeData.nearbyAttractions.map((place, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-2">{place.name}</h3>
                      <p className="text-xs text-gray-500 mb-1">{place.type}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">📍 {place.distance}</span>
                        <span className="text-gray-600">⏱️ {place.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Similar Places */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Similar Places</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {placeData.similarPlaces.map((place, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-2">{place.name}</h3>
                      <div className="space-y-1 text-sm text-gray-600">
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
            </div>
          )}
        </div>

        {/* Map Preview */}
        <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Location Map</h2>
           <a
            href="https://www.google.com/maps/place/Red+Fort,+Delhi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
            View Larger Map
            <ExternalLink className="h-4 w-4" />
            </a>
          </div>
      <div className="relative h-80 rounded-xl overflow-hidden">
            <iframe
            title="Red Fort Delhi Location"
            src="https://www.google.com/maps?q=Red+Fort+Delhi&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            />
            </div>
        </div>
      </main>
    </div>
  );
};

export default RedFortPlace;