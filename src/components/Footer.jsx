import React from "react";
import { Link } from "react-router-dom";
import {
  Train,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-[95%] mx-auto px-4 py-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                className="w-10 h-10"
                src="icon.png"
                alt="My Delhi Metro Guide - Delhi Metro Route Planner Logo"
              />

              <span className="text-2xl font-bold">Delhi Metro</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              My Delhi Metro provides world-class metro services guide
              connecting Delhi, NCR with real-time route planner, metro map,
              fare calculator and station information.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/DelhiMetro"
                rel="me noopener noreferrer"
                target="_blank"
                aria-label="Delhi Metro on Facebook"
              >
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition" />
              </a>
              <a
                href="https://www.twitter.com/DelhiMetro"
                rel="me noopener noreferrer"
                target="_blank"
                aria-label="Delhi Metro on Twitter"
              >
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition" />
              </a>
              <a
                href="https://www.youtube.com/channel/DelhiMetro"
                rel="me noopener noreferrer"
                target="_blank"
                aria-label="Delhi Metro on YouTube"
              >
                <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { path: '/route-planner', label: 'Route Planner' },
                { path: '/fares', label: 'Fare Calculator' },
                { path: '/network', label: 'Metro Network' },
                { path: '/smart-card', label: 'Smart Card' },
                { path: '/tourist-info', label: 'Tourist Information' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Information */}
          {/* <div>
            <h4 className="font-semibold text-lg mb-4">Information</h4>
            <ul className="space-y-3">
              {[
                { path: '/about', label: 'About DMRC' },
                { path: '/contact', label: 'Contact Us' },
                { path: '#', label: 'Careers' },
                { path: '#', label: 'Tenders' },
                { path: '#', label: 'Projects' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-metro-blue mt-0.5" />
                <div>
                  <p className="text-gray-400">Helpline</p>
                  <p className="text-white">155370</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-metro-blue mt-0.5" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white">feedback@dmrc.org</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-metro-blue mt-0.5" />
                <div>
                  <p className="text-gray-400">Address</p>
                  <p className="text-white">
                    Metro Bhawan, Fire Brigade Lane, New Delhi - 110002
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Quick Links*/}
          <div>
            <h4 className="font-semibold text-lg mb-4">Delhi Metro Guide</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/route-planner"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Route Planner &amp; Map
                </Link>
              </li>
              <li>
                <Link
                  to="/fares"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Fare Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/stations"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Metro Stations List
                </Link>
              </li>
              <li>
                <Link
                  to="/network"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Metro Lines &amp; Network
                </Link>
              </li>
              <li>
                <Link
                  to="/smart-card"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Smart Card Info
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2024 My Delhi Metro. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="hover:text-white">
                Terms & conditions
              </Link>
              <Link to="/disclaimer" className="hover:text-white">
                Disclaimer
              </Link>
              <Link className="hover:text-white">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
