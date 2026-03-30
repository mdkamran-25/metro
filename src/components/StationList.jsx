import React from 'react'
import { useSelector } from 'react-redux'
import { MapPin, Train, Wifi, Building2 } from 'lucide-react'

const StationList = () => {
  const { stations } = useSelector(state => state.metro)

  const getLineBadge = (line) => {
    const colors = {
      'Red': 'bg-metro-red text-white',
      'Yellow': 'bg-metro-yellow text-gray-800',
      'Blue': 'bg-metro-blue text-white',
      'Green': 'bg-metro-green text-white',
      'Violet': 'bg-metro-violet text-white',
    }
    return colors[line] || 'bg-gray-500 text-white'
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <Train className="h-6 w-6 mr-3 text-metro-blue" />
        Metro Stations
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stations.map(station => (
          <div
            key={station.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-semibold text-lg text-gray-800">
                {station.name}
              </h3>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getLineBadge(
                  station.line
                )}`}
              >
                {station.line} Line
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                {station.zone}
              </div>

              <div className="flex items-center space-x-4 text-xs text-gray-500">
                {station.facilities?.includes('wifi') && (
                  <div className="flex items-center">
                    <Wifi className="h-3 w-3 mr-1" />
                    WiFi
                  </div>
                )}
                {station.facilities?.includes('elevator') && (
                  <div className="flex items-center">
                    <Building2 className="h-3 w-3 mr-1" />
                    Elevator
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-gray-100">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">First Train</span>
                  <span className="font-medium">5:30 AM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Last Train</span>
                  <span className="font-medium">11:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StationList
