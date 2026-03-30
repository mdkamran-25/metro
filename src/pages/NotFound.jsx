import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Home, 
  ArrowLeft, 
  Search, 
  RefreshCw, 
  AlertCircle, 
  Compass, 
  Ghost,
  Zap,
  Navigation
} from 'lucide-react'

const NotFound = () => {
  return (
    <>
      {/* Style 1: Minimal & Clean */}
      {false && (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-6">
          <div className="max-w-2xl w-full text-center">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-8 shadow-lg">
              <AlertCircle className="w-16 h-16 text-blue-600" />
            </div>
            
            <div className="mb-6">
              <span className="inline-block text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                404
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-md mx-auto leading-relaxed">
              Oops! The page you're looking for seems to have wandered off. 
              Don't worry, let's get you back on track.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <Home className="w-5 h-5" />
                Go to Homepage
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-gray-500 text-sm">
                Need help? <Link to="/contact" className="text-blue-600 hover:text-blue-700 font-medium">Contact our support team</Link>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Style 2: Animated & Interactive */}
      {true && (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
            <div className="max-w-4xl w-full">
              <div className="text-center mb-12">
                {/* Animated 404 */}
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-30 rounded-full"></div>
                  <div className="relative text-9xl font-bold tracking-tighter">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      404
                    </span>
                  </div>
                </div>

                {/* Floating Icon */}
                <div className="relative mb-10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse"></div>
                  </div>
                  <div className="relative flex items-center justify-center">
                    <Compass className="w-32 h-32 text-blue-400 animate-bounce" />
                  </div>
                </div>

                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Lost in the Digital Cosmos?
                </h1>
                
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  The page you're searching for has drifted into the unknown. 
                  But don't worry – even astronauts get lost sometimes!
                </p>

                {/* Interactive Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-10">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                    <div className="text-3xl font-bold text-blue-300 mb-2 group-hover:scale-110 transition-transform">
                      99.9%
                    </div>
                    <div className="text-sm text-gray-400">Uptime</div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                    <div className="text-3xl font-bold text-purple-300 mb-2 group-hover:scale-110 transition-transform">
                      0.01%
                    </div>
                    <div className="text-sm text-gray-400">Error Rate</div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                    <div className="text-3xl font-bold text-pink-300 mb-2 group-hover:scale-110 transition-transform">
                      1000+
                    </div>
                    <div className="text-sm text-gray-400">Pages Found</div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                    <div className="text-3xl font-bold text-green-300 mb-2 group-hover:scale-110 transition-transform">
                      1
                    </div>
                    <div className="text-sm text-gray-400">Lost Page</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
                  <Link
                    to="/"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:-translate-y-1 shadow-2xl hover:shadow-3xl relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-300/20 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <Home className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Return to Home Base</span>
                    <Zap className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all ml-2 relative z-10" />
                  </Link>
                  
                  <button
                    onClick={() => window.history.back()}
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Retrace Your Steps</span>
                  </button>
                  
                  <button
                    onClick={() => window.location.reload()}
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all"
                  >
                    <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform" />
                    <span>Refresh the Map</span>
                  </button>
                </div>

                {/* Search Suggestions */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Search className="w-6 h-6 text-blue-400" />
                    <h3 className="text-xl font-semibold">Quick Navigation</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link 
                      to="/dashboard" 
                      className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/10 hover:border-blue-500/50 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                          <Navigation className="w-4 h-4 text-blue-400" />
                        </div>
                        <span className="font-medium">Dashboard</span>
                      </div>
                    </Link>
                    
                    <Link 
                      to="/help" 
                      className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/10 hover:border-purple-500/50 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                          <AlertCircle className="w-4 h-4 text-purple-400" />
                        </div>
                        <span className="font-medium">Help Center</span>
                      </div>
                    </Link>
                    
                    <Link 
                      to="/contact" 
                      className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/10 hover:border-pink-500/50 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-pink-500/20 rounded-lg group-hover:bg-pink-500/30 transition-colors">
                          <Ghost className="w-4 h-4 text-pink-400" />
                        </div>
                        <span className="font-medium">Contact Support</span>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Fun Message */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
                    <span className="text-sm text-gray-400">Pro Tip:</span>
                    <span className="text-sm">The internet is vast, but you're just one click away from familiar territory!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${10 + Math.random() * 20}s`
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Style 3: Illustrative & Friendly */}
      {false && (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 flex items-center justify-center p-6">
          <div className="max-w-4xl w-full">
            <div className="text-center mb-12">
              {/* Illustration */}
              <div className="relative mb-10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-96 h-96 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full opacity-50"></div>
                </div>
                
                <div className="relative flex items-center justify-center">
                  <div className="w-80 h-80 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-2xl flex items-center justify-center">
                    <div className="text-9xl font-bold text-white">404</div>
                  </div>
                </div>
              </div>

              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Oops! Page Not Found
              </h1>
              
              <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
                Looks like this page took a vacation! Don't worry, 
                we've got plenty of other amazing places for you to explore.
              </p>

              {/* Main Action */}
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg rounded-2xl hover:from-orange-600 hover:to-amber-600 transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl mb-8"
              >
                <Home className="w-6 h-6" />
                Take Me Home
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-sm">→</span>
                </div>
              </Link>

              {/* Alternative Actions */}
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <button
                  onClick={() => window.history.back()}
                  className="px-6 py-3 bg-white text-gray-700 font-medium rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
                >
                  Go Back
                </button>
                <button
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 bg-white text-gray-700 font-medium rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
                >
                  Try Again
                </button>
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-white text-gray-700 font-medium rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
                >
                  Report Issue
                </Link>
              </div>

              {/* Site Map */}
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Popular Destinations
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Home', 'About', 'Services', 'Contact', 'Blog', 'Help', 'Login', 'Dashboard'].map((item) => (
                    <Link
                      key={item}
                      to={`/${item.toLowerCase()}`}
                      className="p-4 text-center bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl hover:from-orange-100 hover:to-amber-100 transition-all border border-orange-100 hover:border-orange-300 hover:shadow-md"
                    >
                      <span className="font-medium text-gray-800">{item}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Fun Facts */}
              <div className="mt-12 pt-8 border-t border-orange-100">
                <div className="inline-flex flex-col items-center gap-2">
                  <span className="text-sm text-gray-600">Did you know?</span>
                  <span className="text-lg font-medium text-gray-900">
                    You're one of millions who've discovered this secret 404 page!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Add these styles to your global CSS/tailwind.config.js
const globalStyles = `
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
      opacity: 0.2;
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
      opacity: 0.4;
    }
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
  
  .animate-float {
    animation: float 20s infinite linear;
  }
`

export default NotFound