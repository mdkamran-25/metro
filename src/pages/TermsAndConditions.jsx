import React from 'react';
import { Shield, AlertCircle, FileText, Lock, CheckCircle } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-lg text-gray-600">
            Last Updated: {new Date().toLocaleDateString('en-IN', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric' 
            })}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          {/* Introduction */}
          <div className="mb-10">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Welcome to Delhi Metro Guide</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms and Conditions govern your use of our Delhi Metro navigation platform, 
                  including route planning, fare calculation, station information, and related services. 
                  By accessing or using our services, you agree to be bound by these terms.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {/* Section 1 */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                1. Acceptance of Terms
              </h3>
              <p className="text-gray-700 mb-4">
                By accessing Delhi Metro Guide, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms and Conditions. If you do not agree with any 
                part of these terms, please discontinue use of our services immediately.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                2. Service Description
              </h3>
              <p className="text-gray-700 mb-4">
                Delhi Metro Guide provides comprehensive navigation assistance for the Delhi Metro 
                system, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Route planning between Delhi Metro stations</li>
                <li>Fare calculation based on current Delhi Metro rates</li>
                <li>Station information and facilities</li>
                <li>Real-time updates on metro schedules</li>
                <li>Tourist information for Delhi attractions</li>
                <li>Smart card and ticketing information</li>
              </ul>
              <p className="text-gray-700">
                Our service is intended for informational purposes only and should not be considered 
                as official Delhi Metro Rail Corporation (DMRC) communication.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                3. User Responsibilities
              </h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-yellow-800">
                    While we strive for accuracy, Delhi Metro Guide is not responsible for actual 
                    metro schedules, fare changes, or service disruptions. Always verify information 
                    with official DMRC sources.
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                As a user, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                <li>Use the service for lawful purposes only</li>
                <li>Not attempt to hack, disrupt, or misuse our platform</li>
                <li>Verify metro information from official sources when required</li>
                <li>Respect intellectual property rights</li>
                <li>Provide accurate information when using our services</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                4. Intellectual Property
              </h3>
              <p className="text-gray-700 mb-4">
                All content on Delhi Metro Guide, including but not limited to text, graphics, 
                logos, images, and software, is our property or licensed to us and is protected 
                by Indian copyright and intellectual property laws.
              </p>
              <p className="text-gray-700">
                Delhi Metro and DMRC are registered trademarks of Delhi Metro Rail Corporation. 
                Our platform is an independent service and is not affiliated with or endorsed by DMRC.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                5. Privacy Policy
              </h3>
              <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg mb-4">
                <Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-blue-800">
                  Your privacy is important to us. Please refer to our separate 
                  <a href="/privacy-policy" className="font-semibold hover:underline ml-1">
                    Privacy Policy
                  </a> 
                  {" "}to understand how we collect, use, and protect your information.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                6. Limitation of Liability
              </h3>
              <p className="text-gray-700 mb-4">
                Delhi Metro Guide shall not be liable for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Any inaccuracies in route information or fare calculations</li>
                <li>Service disruptions or changes in Delhi Metro schedules</li>
                <li>Delays or cancellations of metro services</li>
                <li>Direct or indirect damages arising from use of our services</li>
                <li>Third-party content or links to external websites</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                7. Changes to Terms
              </h3>
              <p className="text-gray-700">
                We reserve the right to modify these Terms and Conditions at any time. 
                Changes will be effective immediately upon posting on our website. 
                Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                8. Governing Law
              </h3>
              <p className="text-gray-700">
                These Terms and Conditions are governed by and construed in accordance with 
                the laws of India. Any disputes shall be subject to the exclusive jurisdiction 
                of the courts in New Delhi.
              </p>
            </section>

            {/* Contact Section */}
            <div className="bg-gray-50 rounded-xl p-6 mt-10">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Information</h3>
              <p className="text-gray-700">
                For questions about these Terms and Conditions, please contact us at:
              </p>
              <p className="text-blue-600 font-medium mt-2">
                Email: legal@delhimetrogui.de
              </p>
            </div>

            {/* Acknowledgment */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">
                    By using Delhi Metro Guide, you acknowledge that you have read, understood, 
                    and agree to be bound by these Terms and Conditions.
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    Thank you for choosing Delhi Metro Guide for your navigation needs in India's capital city.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Delhi Metro Guide - Your trusted companion for navigating Delhi's metro system</p>
          <p className="mt-1">© {new Date().getFullYear()} Delhi Metro Guide. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;