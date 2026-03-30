import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Train, Menu, X, Search, ChevronRight, MapPin, UserCircle, Bell, Phone, TextQuote, Navigation, Wifi  } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navItems = [
    { 
      path: '/', 
      label: 'Home',
      icon: <Train className="h-4 w-4" />
    },
    { 
      path: '/route-planner', 
      label: 'Route Finder',
      icon: <MapPin className="h-4 w-4" />
    },
    { 
      path: '/fares', 
      label: 'Fare Chart',
      icon: <Search className="h-4 w-4" />
    },
    { 
      path: '/network', 
      label: 'Metro Lines',
      icon: <Train className="h-4 w-4" />
    },
    { 
      path: '/stations', 
      label: 'Stations',
      icon: <MapPin className="h-4 w-4" />
    },
    { 
      path: '/tourist-info', 
      label: 'Tourist Guide',
      icon: <MapPin className="h-4 w-4" />
    },
    { 
      path: '/blogs', 
      label: 'Blogs',
      icon: <TextQuote  className="h-4 w-4" />
    },
    { 
      path: '/about', 
      label: 'About Us',
      icon: <UserCircle className="h-4 w-4" />
    },
    { 
      path: '/contact', 
      label: 'Contact',
      icon: <Bell className="h-4 w-4" />
    },
  ]

  // Navigation with dropdowns
  const navigation = [
    {
      label: 'Plan Journey',
      items: [
        { path: '/route-planner', label: 'Route Finder' },
        { path: '/fares', label: 'Fare Calculator' },
        { path: '/stations', label: 'Station Guide' },
      ]
    },
    {
      label: 'Explore',
      items: [
        { path: '/network', label: 'Metro Lines' },
        { path: '/stations-map', label: 'Interactive Map' },
        { path: '/tourist-info', label: 'Tourist Places' },
      ]
    },
    {
      label: 'Services',
      items: [
        { path: '/smart-card', label: 'Smart Card' },
        { path: '/tickets', label: 'Tickets & Passes' },
        { path: '/facilities', label: 'Station Facilities' },
      ]
    },
    {
      label: 'Information',
      items: [
        { path: '/about', label: 'About DMRC' },
        { path: '/contact', label: 'Contact Us' },
        { path: '/help', label: 'Help & Support' },
      ]
    }
  ]

  return (
    <>
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow' 
          : 'bg-white'
      }`}>
        <div className="md:w-[95%] mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-20">
            {/* Logo */}
           <Link 
      to="/" 
      className="flex items-center space-x-2 group"
      >
      <div className="relative">
    
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-700 animate-[pulse_4s_ease-in-out_infinite]"></div>
        
    
        <div className="relative">
        
          <div className="bg-gradient-to-br from-cyan-700 via-blue-800 to-purple-900 p-1.5 rounded-lg shadow-2xl border border-cyan-500/30">
            <div className="relative">
             
              <div className="absolute inset-0 opacity-20">
                <div className="h-px w-full bg-cyan-400 mb-1"></div>
                <div className="h-px w-full bg-cyan-400 mt-1"></div>
                <div className="w-px h-full bg-cyan-400 ml-3"></div>
                <div className="w-px h-full bg-cyan-400 mr-3"></div>
              </div>
           
              <div className="relative flex items-center justify-center">
                <Train className="h-6 w-6 md:h-8 md:w-8 text-cyan-300 " />
               
              </div>
            </div>
            
           
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              <div className="h-2 w-2 bg-green-600 rounded-full animate-ping"></div>
              <div className="h-2 w-2 bg-cyan-600 rounded-full animate-ping animation-delay-200"></div>
              <div className="h-2 w-2 bg-blue-600 rounded-full animate-ping animation-delay-400"></div>
            </div>
          </div>
          
     
          <div className="absolute -inset-2 border-2 border-cyan-400/30 rounded-xl animate-[ping_3s_ease-in-out_infinite] opacity-0"></div>
        </div>
      </div>
      
      <div className="flex flex-col">
        {/* <h1 className="text-2xl"> */}
          <span className="bg-gradient-to-r text-lg md:text-2xl font-bold from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
           MyDelhi Metro
          </span>
        {/* </h1> */}
        <div className="flex items-cente space-x-3 -mt-1">
         <div className="flex items-center">
            <div className="relative mr-1.5">
              <div className="h-2 w-2 bg-gradient-to-r from-red-400 to-red-500 rounded-full animate-pulse"></div>
              {/* <div className="absolute inset-0 h-2 w-2 bg-green-400 rounded-full animate-ping opacity-75"></div> */}
            </div>
            <span className="text-[10px]  bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
              Live Tracking
            </span>
          </div>
        
        </div>
      </div>
      
      <style>{`
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
         </Link>



            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group flex items-center font-medium transition-all duration-300 relative ${
                    location.pathname === item.path
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {/* <span className={`transition-colors ${
                    location.pathname === item.path ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'
                  }`}>
                    {item.icon}
                  </span> */}
                  <span className='text-md'>{item.label}</span>
                  {location.pathname === item.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                  )}
                </Link>
              ))}
            </nav>


            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

     
       
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
        isMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-500 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Menu Header */}
          <div className="p-3 border-b border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Train className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="font-bold text-gray-800">Delhi Metro</h2>
                  <p className="text-xs text-gray-500">Navigation Menu</p>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>

          </div>

          {/* Mobile Navigation Items */}
          <div className="p-6 overflow-y-auto h-[calc(100vh-160px)]">
            <nav className="space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-4 rounded-xl transition-all duration-300 group ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border-l-4 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className={`p-2 rounded-lg ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                  }`}>
                    {item.icon}
                  </div>
                  <span className="font-medium flex-1">{item.label}</span>
                  <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${
                    location.pathname === item.path ? 'text-blue-600 translate-x-1' : 'text-gray-400'
                  }`} />
                </Link>
              ))}
            </nav>

         
          

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4 px-4">Contact & Support</h3>
              <div className="space-y-3">
                <a href="tel:155370" className="flex items-center px-4 py-3 bg-red-50 text-red-700 rounded-xl hover:bg-red-100 transition-colors">
                  <Phone className="h-5 w-5 mr-3" />
                  <div>
                    <div className="font-semibold">Emergency: 155370</div>
                    <div className="text-sm">24/7 Helpline</div>
                  </div>
                </a>
                <a href="mailto:feedback@dmrc.org" className="flex items-center px-4 py-3 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-colors">
                  <Mail className="h-5 w-5 mr-3" />
                  <div>
                    <div className="font-semibold">feedback@dmrc.org</div>
                    <div className="text-sm">Email Support</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations to global styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideOutRight {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  )
}

// Mail icon component since it's imported but not in lucide-react
const Mail = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
)

export default Header