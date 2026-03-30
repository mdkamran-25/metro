import React from 'react';
import { Train, Bus, Navigation, Map, Compass, Loader2 } from 'lucide-react';

const LoadingSpinner = ({ type = 'metro' }) => {
  // Metro Loading Style (डिफॉल्ट)
  if (type === 'metro') {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-50 to-white">
        {/* ट्रेन ट्रैक */}
        <div className="relative w-64 h-32 mb-8">
          {/* पटरी */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-300 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-shimmer"></div>
          </div>
          
          {/* चलती हुई ट्रेन */}
          <div className="absolute bottom-4 left-0 right-0 animate-move">
            <div className="flex items-center justify-center gap-1">
              <div className="w-12 h-8 bg-blue-600 rounded-lg shadow-lg"></div>
              <div className="w-12 h-8 bg-blue-500 rounded-lg shadow-lg"></div>
              <div className="w-12 h-8 bg-blue-400 rounded-lg shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* लोडिंग टेक्स्ट */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Train className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">
              Loading Your Route
            </h2>
          </div>
          
          <p className="text-gray-600 mb-6 max-w-md">
            Optimizing your travel plan with real-time data
          </p>
          
          {/* प्रोग्रेस बार */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-progress rounded-full"></div>
            </div>
            <span className="text-sm font-medium text-gray-700">
              Loading...
            </span>
          </div>
          
          {/* टिप्स */}
          <div className="max-w-md mx-auto">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Map className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-800 mb-1">
                    Travel Tip
                  </p>
                  <p className="text-sm text-gray-600">
                    Routes are calculated based on current traffic and schedule data
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Bus Loading Style
  if (type === 'bus') {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 bg-gradient-to-b from-green-50 to-white">
        <div className="relative w-80 h-40 mb-8">
          {/* सड़क */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-yellow-300 transform -translate-y-1/2 animate-road"></div>
          </div>
          
          {/* चलती बस */}
          <div className="absolute bottom-5 animate-bus">
            <div className="relative">
              <div className="w-24 h-12 bg-gradient-to-r from-green-600 to-emerald-700 rounded-lg shadow-xl"></div>
              <div className="absolute -top-2 left-4 w-16 h-4 bg-gradient-to-r from-green-700 to-emerald-800 rounded-t-lg"></div>
              {/* खिड़कियां */}
              <div className="absolute top-2 left-3 flex gap-2">
                <div className="w-4 h-3 bg-cyan-300 rounded-sm"></div>
                <div className="w-4 h-3 bg-cyan-300 rounded-sm"></div>
                <div className="w-4 h-3 bg-cyan-300 rounded-sm"></div>
              </div>
            </div>
          </div>
          
          {/* पहिये */}
          <div className="absolute bottom-4 left-6 w-6 h-6 bg-gray-900 rounded-full animate-spin"></div>
          <div className="absolute bottom-4 right-6 w-6 h-6 bg-gray-900 rounded-full animate-spin"></div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <Bus className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800">
              Locating Bus Routes
            </h2>
          </div>
          
          <p className="text-gray-600">
            Fetching real-time bus schedules and stops
          </p>
        </div>
      </div>
    );
  }

  // Simple Loading Style (डिफॉल्ट अगर type नहीं दिया)
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Navigation className="w-8 h-8 text-blue-600" />
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Loading Content
        </h3>
        <p className="text-gray-600">
          Please wait while we prepare your page
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;