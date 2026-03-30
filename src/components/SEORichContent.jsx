import React from 'react'

function SEORichContent() {
  return (
    <div className="mx-auto">
      <div className="bg-white rounded-2xl shadow-lg px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Delhi Metro Guide: Complete Information for Commuters & Tourists
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            
            <p className="text-gray-700 text-sm mb-4">
              The <strong>Delhi Metro</strong>, operated by <strong>My Delhi Metro (DMRC)</strong>, 
              is one of the world's largest and most advanced metro networks. With <strong>12 operational lines</strong>, 
              <strong> 289 stations</strong>, and over <strong>390 kilometers</strong> of track length, it serves millions 
              of passengers daily across Delhi National Capital Region (NCR).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Key Features of Delhi Metro
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-5 rounded-xl">
                <h3 className="font-bold text-blue-700 mb-2">Smart Travel Planning</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Real-time route optimization</li>
                  <li>Fare calculation for any station pair</li>
                  <li>Multiple route options with time estimates</li>
                  <li>Station-to-station navigation</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-5 rounded-xl">
                <h3 className="font-bold text-green-700 mb-2">Tourist-Friendly Features</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Metro routes to all major attractions</li>
                  <li>Multi-lingual station announcements</li>
                  <li>Tourist information centers</li>
                  <li>One-day tourist cards available</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Delhi Metro Lines Overview
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 border-b text-left">Line Name</th>
                    <th className="py-3 px-4 border-b text-left">Color</th>
                    <th className="py-3 px-4 border-b text-left">Stations</th>
                    <th className="py-3 px-4 border-b text-left">Length</th>
                    <th className="py-3 px-4 border-b text-left">Key Stations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">Red Line</td>
                    <td className="py-3 px-4 border-b">Red</td>
                    <td className="py-3 px-4 border-b">29</td>
                    <td className="py-3 px-4 border-b">34.5 km</td>
                    <td className="py-3 px-4 border-b">Kashmere Gate, Dilshad Garden</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Yellow Line</td>
                    <td className="py-3 px-4 border-b">Yellow</td>
                    <td className="py-3 px-4 border-b">37</td>
                    <td className="py-3 px-4 border-b">49.3 km</td>
                    <td className="py-3 px-4 border-b">Rajiv Chowk, HUDA City Center</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Blue Line</td>
                    <td className="py-3 px-4 border-b">Blue</td>
                    <td className="py-3 px-4 border-b">50</td>
                    <td className="py-3 px-4 border-b">56.6 km</td>
                    <td className="py-3 px-4 border-b">Dwarka Sector 21, Noida Electronic City</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              How to Use Delhi Metro - A Beginner's Guide
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-700 rounded-full p-2 mr-4">1</div>
                <div>
                  <h3 className="font-bold text-gray-800">Plan Your Journey</h3>
                  <p className="text-gray-700">Use our route planner to find the best metro route between any two stations in Delhi NCR.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-700 rounded-full p-2 mr-4">2</div>
                <div>
                  <h3 className="font-bold text-gray-800">Check Fares</h3>
                  <p className="text-gray-700">Our fare calculator shows exact ticket prices for your selected route.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-700 rounded-full p-2 mr-4">3</div>
                <div>
                  <h3 className="font-bold text-gray-800">Get Real-time Updates</h3>
                  <p className="text-gray-700">Check train frequency, service alerts, and platform information in real-time.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Delhi Metro Smart Card Benefits
            </h2>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>10% discount on every journey</li>
              <li>Auto top-up facility available</li>
              <li>Valid across all Delhi Metro lines</li>
              <li>Can be used for parking and feeder buses</li>
              <li>Online recharge through UPI/Credit Card</li>
            </ul>
            <p className="text-gray-700">
              <strong>Tip:</strong> For frequent travelers, the Delhi Metro smart card offers the most economical way to travel.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-bold text-gray-800 mb-2">What are Delhi Metro operating hours?</h3>
                <p className="text-gray-700">Delhi Metro operates from 5:00 AM to 11:30 PM on all days. On special occasions, timings may be extended.</p>
              </div>
              
              <div className="border-b pb-4">
                <h3 className="font-bold text-gray-800 mb-2">How much does Delhi Metro cost?</h3>
                <p className="text-gray-700">Fares range from ₹10 to ₹60 depending on distance traveled. Use our fare calculator for exact pricing.</p>
              </div>
              
              <div className="border-b pb-4">
                <h3 className="font-bold text-gray-800 mb-2">Is there WiFi on Delhi Metro?</h3>
                <p className="text-gray-700">Yes, free high-speed WiFi is available at all Delhi Metro stations for up to 30 minutes per day.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default SEORichContent