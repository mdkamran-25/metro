import React from 'react';
import { AlertTriangle, Info, MapPin, Train, Shield, ExternalLink } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-6">
            <AlertTriangle className="w-8 h-8 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Important Disclaimer</h1>
          <p className="text-lg text-gray-600">
            Please read this disclaimer carefully before using Delhi Metro Guide
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-orange-200 p-8">
          {/* Warning Banner */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold text-orange-900 mb-2">Critical Notice</h2>
                <p className="text-orange-800">
                  Delhi Metro Guide is an <span className="font-semibold">independent information platform</span> and 
                  is <span className="font-semibold">not affiliated with, endorsed by, or officially connected to</span> 
                  the Delhi Metro Rail Corporation (DMRC) or any government authority.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" />
                1. Nature of Service
              </h3>
              <p className="text-gray-700 mb-4">
                Delhi Metro Guide is designed to provide helpful information about the Delhi Metro system, 
                including route planning, fare estimates, station details, and tourist information. 
                Our platform serves as a <span className="font-semibold">guidance tool only</span>.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  <span className="font-semibold">Important:</span> Always verify metro schedules, 
                  fares, and routes from official DMRC sources before your journey.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Train className="w-5 h-5 text-purple-600" />
                2. Accuracy of Information
              </h3>
              <p className="text-gray-700 mb-4">
                While we strive to provide accurate and up-to-date information about the Delhi Metro, 
                we cannot guarantee:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Real-time accuracy of metro schedules and timings</li>
                <li>Exact fare calculations (subject to DMRC changes)</li>
                <li>Current station facilities and services</li>
                <li>Route availability during maintenance or emergencies</li>
                <li>Accuracy of third-party information or links</li>
              </ul>
              <div className="flex items-start gap-3 bg-yellow-50 p-4 rounded-lg">
                <MapPin className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <p className="text-yellow-800">
                  <span className="font-semibold">Delhi Metro Information:</span> The Delhi Metro network 
                  spans across 12 lines, covering approximately 392 kilometers with 288 stations 
                  (including the Airport Express line). Information is subject to change as the network expands.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                3. No Official Affiliation
              </h3>
              <p className="text-gray-700 mb-4">
                Delhi Metro Guide operates independently and has no official connection with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Delhi Metro Rail Corporation (DMRC)</li>
                <li>Government of National Capital Territory of Delhi</li>
                <li>Ministry of Housing and Urban Affairs</li>
                <li>Any other government transportation authority</li>
              </ul>
              <p className="text-gray-700">
                Any reference to DMRC, Delhi Metro, or related entities is for informational 
                purposes only and does not imply endorsement or partnership.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-red-600" />
                4. External Links and Third-Party Content
              </h3>
              <p className="text-gray-700 mb-4">
                Our website may contain links to external websites, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Official DMRC website (dmrc.org)</li>
                <li>Tourist information sites for Delhi</li>
                <li>Transportation and travel resources</li>
                <li>Partner websites and services</li>
              </ul>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="text-red-800">
                  We have no control over the content, privacy policies, or practices of 
                  third-party websites. Accessing external links is at your own risk.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                5. Travel Advisory & Safety Information
              </h3>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                <h4 className="font-bold text-gray-900 mb-3">Important Safety Information for Delhi Metro Travelers:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span>Always follow safety instructions at metro stations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span>Keep valuables secure while traveling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span>Respect metro staff and fellow passengers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span>Report any suspicious activity to metro authorities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span>Follow COVID-19 guidelines if applicable</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-purple-600" />
                6. Limitation of Liability
              </h3>
              <p className="text-gray-700 mb-4">
                To the fullest extent permitted by law, Delhi Metro Guide disclaims all liability for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Any errors or omissions in the information provided</li>
                <li>Delays, cancellations, or changes in Delhi Metro services</li>
                <li>Financial losses or damages resulting from use of our information</li>
                <li>Personal injury or property damage during metro travel</li>
                <li>Technical issues with our website or services</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Train className="w-5 h-5 text-blue-600" />
                7. Delhi Metro Facts & Figures
              </h3>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-700 mb-4">
                  For accurate and official information about Delhi Metro, please refer to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold text-gray-900 mb-2">Official Sources</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• DMRC Official Website: dmrc.org</li>
                      <li>• Delhi Metro Helpline: 155370</li>
                      <li>• DMRC Mobile App</li>
                      <li>• Station Information Boards</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Metro Lines</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Red Line: Dilshad Garden - Rithala</li>
                      <li>• Yellow Line: Samaypur Badli - HUDA City Centre</li>
                      <li>• Blue Line: Dwarka Sec 21 - Noida Electronic City</li>
                      <li>• Airport Express: New Delhi - Airport</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Acknowledgment */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Your Acknowledgment</h3>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl">
                  <p className="text-gray-700 font-medium">
                    By using Delhi Metro Guide, you acknowledge that:
                  </p>
                  <ul className="mt-4 space-y-3 text-gray-600">
                    <li className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      You have read and understood this disclaimer
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      You accept all risks associated with using our information
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      You will verify critical information from official sources
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      You use our services at your own discretion and risk
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Footer */}
        <div className="mt-8 text-center">
          <div className="bg-gray-900 text-white p-6 rounded-2xl mb-6">
            <h3 className="text-xl font-bold mb-3">For Official Delhi Metro Information</h3>
            <p className="text-gray-300">
              Please visit the official Delhi Metro Rail Corporation website or contact 
              their customer service for accurate, real-time information.
            </p>
            <a 
              href="https://delhimetrorail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Official DMRC Website
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Delhi Metro Guide. This is an independent information service.
            <br />
            Delhi Metro and DMRC are registered trademarks of Delhi Metro Rail Corporation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;