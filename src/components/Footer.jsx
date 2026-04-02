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
    <footer className="text-white bg-gray-900">
      <div className="w-[95%] mx-auto px-4 py-5">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4 space-x-3">
              <img
                className="w-10 h-10"
                src="icon.png"
                alt="My Delhi Metro Guide Logo"
              />

              <span className="text-2xl font-bold">Delhi Metro</span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              My Delhi Metro (DMRC) provides world-class metro services
              connecting Delhi, NCR, and beyond with safe, efficient, and
              sustainable transportation.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
              <Twitter className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
              <Youtube className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
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
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Information */}
          {/* <div>
            <h4 className="mb-4 text-lg font-semibold">Information</h4>
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
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Info</h4>
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
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Link to="/route-planner">Route Planner</Link>
              </div>
              <div className="flex items-start space-x-3">
                <Link to="/fares">Fares</Link>
              </div>
              <div className="flex items-start space-x-3">
                <Link to="/network">Station</Link>
              </div>
              <div className="flex items-start space-x-3">
                <Link to="/about">About Us</Link>
              </div>
              <div className="flex items-start space-x-3">
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
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
