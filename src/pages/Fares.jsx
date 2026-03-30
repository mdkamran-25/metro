import React, { useState, useEffect } from 'react'
import SEO from '../components/SEO'
import Breadcrumb from '../components/Breadcrumb'
import { 
  IndianRupee, 
  Download, 
  Users, 
  Clock, 
  CreditCard, 
  MapPin, 
  TrendingUp,
  Percent,
  Shield,
  Zap,
  ChevronRight,
  FileText,
  Calculator,
  Gift,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Info,
  Search
} from 'lucide-react'

const Fares = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [distance, setDistance] = useState('5-12')
  const [passengerType, setPassengerType] = useState('adult')

  useEffect(() => {
    // Add meta keywords for SEO
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Delhi Metro fare, Metro ticket price, Metro fare calculator, Metro smart card fare, Metro token fare, Metro fare chart, Metro distance fare, Metro student fare, Metro senior citizen fare, Metro fare rates, DMRC fare structure, Metro ticket cost');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'Delhi Metro fare, Metro ticket price, Metro fare calculator, Metro smart card fare, Metro token fare, Metro fare chart, Metro distance fare, Metro student fare, Metro senior citizen fare, Metro fare rates, DMRC fare structure, Metro ticket cost';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
    
    // Update document title
    document.title = 'Delhi Metro Fare Calculator - Ticket Prices & Rates | DMRC';
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  // Real fare data based on Delhi Metro actual fares (simplified)
  const fareCategories = [
    { 
      id: 'all', 
      name: 'All Fares', 
      icon: <CreditCard className="h-5 w-5" />,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'token', 
      name: 'Tokens', 
      icon: <FileText className="h-5 w-5" />,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      id: 'smartcard', 
      name: 'Smart Card', 
      icon: <CreditCard className="h-5 w-5" />,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      id: 'tourist', 
      name: 'Tourist Pass', 
      icon: <MapPin className="h-5 w-5" />,
      color: 'from-orange-500 to-amber-500'
    },
    { 
      id: 'student', 
      name: 'Student Pass', 
      icon: <Users className="h-5 w-5" />,
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  // Actual Delhi Metro fare structure (simplified)
  const fareData = [
    { 
      distance: '0 - 2 km', 
      range: '0-2',
      token: 11, 
      smartCard: 9.9, 
      touristDay: 100,
      student: 8,
      description: 'Short journeys within nearby stations'
    },
    { 
      distance: '2 - 5 km', 
      range: '2-5',
      token: 21, 
      smartCard: 18.9, 
      touristDay: 150,
      student: 12,
      description: 'Medium distance travel across 2-3 stations'
    },
    { 
      distance: '5 - 12 km', 
      range: '5-12',
      token: 32, 
      smartCard: 28.8, 
      touristDay: 200,
      student: 16,
      description: 'Average metro journey across city'
    },
    { 
      distance: '12 - 21 km', 
      range: '12-21',
      token: 43, 
      smartCard: 38.7, 
      touristDay: 260,
      student: 24,
      description: 'Long distance travel across lines'
    },
    { 
      distance: '21 - 32 km', 
      range: '21-32',
      token: 55, 
      smartCard: 49.5, 
      touristDay: 300,
      student: 32,
      description: 'Cross-city metro travel'
    },
    { 
      distance: '32+ km', 
      range: '32+',
      token: 65, 
      smartCard: 58.5, 
      touristDay: 350,
      student: 40,
      description: 'Maximum fare for longest journeys'
    }
  ]

  const passengerTypes = [
    { 
      type: 'Adult', 
      id: 'adult',
      discount: '0%', 
      discountValue: 0,
      description: 'Standard fare applies',
      icon: <Users className="h-5 w-5" />,
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      type: 'Child (3-12 yrs)', 
      id: 'child',
      discount: '50%', 
      discountValue: 50,
      description: 'Half fare for children',
      icon: <Gift className="h-5 w-5" />,
      color: 'bg-green-100 text-green-600'
    },
    { 
      type: 'Senior Citizen', 
      id: 'senior',
      discount: '50%', 
      discountValue: 50,
      description: 'Half fare for seniors (60+)',
      icon: <Shield className="h-5 w-5" />,
      color: 'bg-purple-100 text-purple-600'
    },
    { 
      type: 'Student', 
      id: 'student',
      discount: '25%', 
      discountValue: 25,
      description: 'Quarter fare for verified students',
      icon: <FileText className="h-5 w-5" />,
      color: 'bg-amber-100 text-amber-600'
    }
  ]

  // Calculate fare based on selection
  const calculateFare = () => {
    const selectedFare = fareData.find(f => f.range === distance) || fareData[2]
    const selectedPassenger = passengerTypes.find(p => p.id === passengerType) || passengerTypes[0]
    
    const baseFare = selectedCategory === 'smartcard' ? selectedFare.smartCard : 
                    selectedCategory === 'tourist' ? selectedFare.touristDay :
                    selectedCategory === 'student' ? selectedFare.student :
                    selectedFare.token
    
    const discount = selectedPassenger.discountValue
    const finalFare = baseFare * (1 - discount / 100)
    
    return {
      base: baseFare,
      discount: discount,
      final: parseFloat(finalFare).toFixed(2),
      description: selectedFare.description
    }
  }

  const calculatedFare = calculateFare()

  return (
    <>
      <SEO
        title="Delhi Metro Fare Calculator | Ticket Price & Smart Card Cost"
        description="Calculate Delhi Metro ticket fares based on distance. Compare smart card vs token prices and learn about discounts and concessions."
        keywords="metro fare, Delhi Metro fare calculator, ticket price, smart card fare, metro cost"
        breadcrumbs={[{ name: 'Fares', url: '/fares' }]}
      />
      <Breadcrumb items={[{ name: 'Fares', url: '/fares' }]} />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 mb-6">
            <IndianRupee className="h-10 w-10 text-white" />
          </div>
             <h1 className="mb-3">
                <span className="block text-3xl italic md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 mb-1 leading-tight tracking-tight [-webkit-text-stroke:2px_rgba(255,255,255,0.1)]">
                My Delhi Metro Fares
              </span>
                <span className="block text-xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-0 italic">
                  Real-time fare calculation based on distance, passenger type, and ticket category
                </span>
            </h1>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Interactive Fare Calculator */}
          <div className="bg-white rounded-xl md:p-8 mb-4 border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <Calculator className="h-6 w-6 mr-3 text-cyan-600" />
                  Fare Calculator
                </h2>
                <p className="text-gray-600">Calculate your exact metro fare</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Estimated Fare</div>
                <div className="text-3xl font-bold text-cyan-600">₹{calculatedFare.final}</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Distance Selector */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Journey Distance
                </label>
                <div className="space-y-2">
                  {fareData.map((fare) => (
                    <button
                      key={fare.range}
                      onClick={() => setDistance(fare.range)}
                      className={`w-full text-left p-3 rounded-xl border transition-all ${
                        distance === fare.range
                          ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-medium">{fare.distance}</div>
                      <div className="text-sm text-gray-500">{fare.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Passenger Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Passenger Type
                </label>
                <div className="space-y-2">
                  {passengerTypes.map((passenger) => (
                    <button
                      key={passenger.id}
                      onClick={() => setPassengerType(passenger.id)}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                        passengerType === passenger.id
                          ? 'border-cyan-500 bg-cyan-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`p-2 rounded-lg mr-3 ${passenger.color}`}>
                          {passenger.icon}
                        </div>
                        <div>
                          <div className="font-medium">{passenger.type}</div>
                          <div className="text-sm text-gray-500">{passenger.discount} discount</div>
                        </div>
                      </div>
                      {passengerType === passenger.id && (
                        <CheckCircle className="h-5 w-5 text-cyan-600" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ticket Category */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Ticket Type
                </label>
                <div className="space-y-2">
                  {fareCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-center ${
                        selectedCategory === category.id
                          ? 'border-cyan-500 bg-cyan-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`p-2 rounded-lg mr-3 bg-gradient-to-r ${category.color} text-white`}>
                        {category.icon}
                      </div>
                      <span className="font-medium">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Fare Breakdown */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-3">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <Percent className="h-5 w-5 mr-2 text-cyan-600" />
                Fare Breakdown
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">Base Fare</div>
                  <div className="text-xl font-bold text-gray-900">₹{calculatedFare.base}</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">Discount</div>
                  <div className="text-xl font-bold text-green-600">{calculatedFare.discount}%</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">Savings</div>
                  <div className="text-xl font-bold text-cyan-600">₹{calculatedFare.base - calculatedFare.final}</div>
                </div>
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-xl text-white">
                  <div className="text-sm opacity-90 mb-1">Final Fare</div>
                  <div className="text-2xl font-bold">₹{calculatedFare.final}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Fare Table */}
          <div className="space-y-6 lg:space-y-8">
            {/* Mobile-optimized Fare Cards (Alternative to Table) */}
            <div className="space-y-4">
              {fareData.map((fare, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-xl border border-gray-200 p-4 ${
                    fare.range === distance ? 'border-cyan-500 border-2' : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
                    <div>
                      <h3 className="font-bold text-gray-900">{fare.distance}</h3>
                      <p className="text-xs text-gray-500">{fare.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Base Fare</div>
                      <div className="font-bold text-gray-900">₹{fare.token}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-2 bg-green-50 rounded-lg">
                      <div className="text-xs text-green-700 mb-1">Smart Card</div>
                      <div className="font-bold text-green-600">₹{fare.smartCard}</div>
                      <div className="text-xs text-green-500">Save ₹{(fare.token - fare.smartCard).toFixed(1)}</div>
                    </div>
                    <div className="text-center p-2 bg-blue-50 rounded-lg">
                      <div className="text-xs text-blue-700 mb-1">Tourist</div>
                      <div className="font-bold text-blue-600">₹{fare.touristDay}</div>
                      <div className="text-xs text-blue-500">1 Day</div>
                    </div>
                    <div className="text-center p-2 bg-amber-50 rounded-lg">
                      <div className="text-xs text-amber-700 mb-1">Student</div>
                      <div className="font-bold text-amber-600">₹{fare.student}</div>
                      <div className="text-xs text-amber-500">Save ₹{fare.token - fare.student}</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="text-xs text-gray-700 mb-1">Token</div>
                      <div className="font-bold text-gray-900">₹{fare.token}</div>
                      <div className="text-xs text-gray-500">One-time</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          {/* Desktop Table (Hidden on Mobile) */}
          <div className="hidden lg:block">
            {/* Keep your original table structure here for desktop */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              {/* ... Desktop table content (same as original) ... */}
            </div>
          </div>

          {/* Responsive Cards Grid (Always visible) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {/* Benefits Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-green-200">
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 rounded-lg lg:rounded-xl bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <Zap className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm lg:text-base">Smart Card</h3>
                  <p className="text-green-700 text-xs">Save 10% on every ride</p>
                </div>
              </div>
              <button className="w-full mt-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 lg:py-3 rounded-lg lg:rounded-xl font-bold text-sm lg:text-base hover:shadow-lg transition-shadow">
                Apply Now
              </button>
            </div>

            {/* Tourist Card */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-blue-200">
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 rounded-lg lg:rounded-xl bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm lg:text-base">Tourist Pass</h3>
                  <p className="text-blue-700 text-xs">Unlimited rides • ₹200/day</p>
                </div>
              </div>
              <button className="w-full mt-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-2 lg:py-3 rounded-lg lg:rounded-xl font-bold text-sm lg:text-base hover:shadow-lg transition-shadow">
                View Plans
              </button>
            </div>

            {/* Student Card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-amber-200">
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 rounded-lg lg:rounded-xl bg-amber-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <Users className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm lg:text-base">Student Pass</h3>
                  <p className="text-amber-700 text-xs">25% discount • ID required</p>
                </div>
              </div>
              <button className="w-full mt-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white py-2 lg:py-3 rounded-lg lg:rounded-xl font-bold text-sm lg:text-base hover:shadow-lg transition-shadow">
                Get Discount
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 lg:py-4 rounded-xl lg:rounded-2xl font-bold hover:shadow-lg transition-shadow flex items-center justify-center">
              <Download className="h-5 w-5 mr-2" />
              <span className="text-sm lg:text-base">Download Full Chart</span>
            </button>
            <button className="bg-white text-cyan-600 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-bold border-2 border-cyan-500 hover:bg-cyan-50 transition-colors flex items-center justify-center">
              <Smartphone className="h-5 w-5 mr-2" />
              <span className="text-sm lg:text-base">Mobile App</span>
            </button>
          </div>
        </div>

          {/* FAQ Section */}
          <div className="mt-6 bg-white rounded-3xl shadow-xl p-4 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                {
                  q: "How much discount do I get with a smart card?",
                  a: "Smart card users get a 10% discount on every journey compared to token fares."
                },
                {
                  q: "Are tourist passes worth it?",
                  a: "Yes! If you plan to take 3+ metro rides in a day, the tourist pass saves money."
                },
                {
                  q: "How do I apply for a student discount?",
                  a: "Visit any metro station with your valid student ID and passport photo."
                },
                {
                  q: "Can I use the same token for return journey?",
                  a: "No, tokens are single-use. Smart cards are better for return journeys."
                },
                {
                  q: "What's the maximum metro fare?",
                  a: "The maximum fare is ₹60 for tokens and ₹50 for smart cards (32+ km)."
                },
                {
                  q: "How long are smart cards valid?",
                  a: "Smart cards are valid for 10 years from the date of purchase."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors">
                  <div className="font-semibold text-gray-900 mb-2 flex items-center">
                    <div className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mr-3 text-sm">
                      {idx + 1}
                    </div>
                    {faq.q}
                  </div>
                  <p className="text-gray-600 text-sm ml-9">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Fares