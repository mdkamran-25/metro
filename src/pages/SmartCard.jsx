import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { 
  CreditCard, Download, Store, Wifi, Clock, Shield, CheckCircle,
  Smartphone, User, QrCode, RefreshCw, AlertCircle, ChevronRight,
  Smartphone as Mobile, TrendingUp, HelpCircle, MapPin, BatteryCharging
} from 'lucide-react';

const SmartCard = () => {
  const [activeTab, setActiveTab] = useState('benefits');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Add meta keywords for SEO
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Delhi Metro smart card, Metro card recharge, Metro card online, Metro card benefits, Metro card application, Metro card balance, Metro card registration, Metro card discount, Metro card recharge online, DMRC smart card, Metro travel card, Metro card purchase');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'Delhi Metro smart card, Metro card recharge, Metro card online, Metro card benefits, Metro card application, Metro card balance, Metro card registration, Metro card discount, Metro card recharge online, DMRC smart card, Metro travel card, Metro card purchase';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
    
    // Update document title
    document.title = 'Delhi Metro Smart Card - Benefits, Recharge & Application | DMRC';
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: '10% Discount',
      description: 'Save on every journey compared to token fares',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Save Time',
      description: 'Quick entry & exit with tap-and-go technology',
      color: 'from-green-500 to-emerald-400'
    },
    {
      icon: <BatteryCharging className="h-8 w-8" />,
      title: 'Auto Top-up',
      description: 'Smart recharge when balance gets low',
      color: 'from-purple-500 to-pink-400'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure & Safe',
      description: 'PIN protected with instant blocking feature',
      color: 'from-red-500 to-orange-400'
    },
    {
      icon: <QrCode className="h-8 w-8" />,
      title: 'Digital Wallet',
      description: 'Link with mobile app for digital payments',
      color: 'from-indigo-500 to-blue-400'
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Track Journeys',
      description: 'View travel history and spending patterns',
      color: 'from-teal-500 to-green-400'
    }
  ];

  const cardTypes = [
    {
      name: 'Standard Smart Card',
      price: '₹150 (₹50 refundable)',
      validity: '10 years',
      features: ['10% fare discount', 'All metro lines', 'Auto top-up available', 'Balance transfer'],
      popular: true,
      color: 'from-blue-600 to-cyan-500'
    },
    {
      name: 'Student Smart Card',
      price: '₹150 (₹50 refundable)',
      validity: '2 years',
      features: ['25% fare discount', 'Student verification', 'Academic year validity', 'Monthly reports'],
      color: 'from-green-600 to-emerald-500'
    },
    {
      name: 'Senior Citizen Card',
      price: '₹150 (₹50 refundable)',
      validity: '10 years',
      features: ['50% fare discount', 'Age 60+ required', 'Priority counters', 'Free replacement'],
      color: 'from-purple-600 to-pink-500'
    },
    {
      name: 'Tourist Smart Card',
      price: '₹200 (₹50 refundable)',
      validity: '3 days',
      features: ['Unlimited travel', 'Tourist guide included', 'Multi-lingual support', 'Quick issue'],
      color: 'from-orange-600 to-red-500'
    }
  ];

  const rechargeOptions = [
    { icon: <Mobile />, label: 'Mobile App', desc: 'Instant recharge via UPI/Card', color: 'bg-gradient-to-r from-blue-500 to-cyan-400' },
    { icon: <CreditCard />, label: 'Station Counter', desc: 'Cash & Card accepted', color: 'bg-gradient-to-r from-green-500 to-emerald-400' },
    { icon: <Store />, label: 'Agent Locations', desc: 'Authorized retailers', color: 'bg-gradient-to-r from-purple-500 to-pink-400' },
    { icon: <QrCode />, label: 'QR Code Scan', desc: 'Scan & pay anywhere', color: 'bg-gradient-to-r from-orange-500 to-red-400' }
  ];

  const faqs = [
    {
      question: "What is the cost of a new Smart Card?",
      answer: "A new Smart Card costs ₹150 (including ₹50 refundable security deposit). The card is valid for 10 years."
    },
    {
      question: "How can I check my card balance?",
      answer: "Check balance at station counters, AFC gates, through the mobile app, or via SMS service."
    },
    {
      question: "What if I lose my Smart Card?",
      answer: "Immediately block your card at any station counter or through the mobile app to prevent misuse."
    },
    {
      question: "Is the security deposit refundable?",
      answer: "Yes, ₹50 security deposit is fully refundable when you return the card in working condition."
    },
    {
      question: "Can I transfer balance to another card?",
      answer: "Yes, you can transfer balance at any customer care center with valid ID proof."
    },
    {
      question: "What are the operating hours for card purchase?",
      answer: "Cards are available at all metro stations from 6:00 AM to 10:00 PM daily."
    }
  ];

  const stats = [
    { value: '2M+', label: 'Active Users', icon: <User className="h-5 w-5" /> },
    { value: '500+', label: 'Recharge Points', icon: <Store className="h-5 w-5" /> },
    { value: '10%', label: 'Average Savings', icon: <TrendingUp className="h-5 w-5" /> },
    { value: '24/7', label: 'Support', icon: <Shield className="h-5 w-5" /> }
  ];

  const TabButton = ({ id, label, icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-3 px-4 md:px-6 py-2 md:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
        activeTab === id
          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
      }`}
    >
      {icon}
      {label}
    </button>
  );

  return (
    <>
      <SEO
        title="Delhi Metro Smart Card | Benefits, Pricing & How to Get"
        description="Learn about Delhi Metro Smart Card - get 10% discount, benefits, pricing, how to apply, recharge options, and frequently asked questions."
        keywords="smart card, Delhi Metro card, metro card discount, travel card, smart travel"
        breadcrumbs={[{ name: 'Smart Card', url: '/smartcard' }]}
      />
      <Breadcrumb items={[{ name: 'Smart Card', url: '/smartcard' }]} />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="md:w-[95%] mx-auto px-4">
        {/* Animated Header */}
        <div className={`text-center mb-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full mb-6">
            <CreditCard className="h-5 w-5" />
            <span className="font-medium">Smart Travel Solutions</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Delhi Metro Smart Card
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your digital companion for faster, cheaper, and smarter metro journeys across Delhi NCR.
            Experience seamless travel with tap-and-go technology.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-4 shadow border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" mx-auto">
          {/* Enhanced Tabs Navigation */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-2 mb-8 border border-gray-200/50">
            <div className="flex flex-wrap gap-3 md:gap-5 justify-center">
              <TabButton id="benefits" label="Benefits" icon={<TrendingUp className="md:h-5 md:w-5 h-4 w-4" />} />
              <TabButton id="types" label="Card Types" icon={<CreditCard className="md:h-5 md:w-5 h-4 w-4" />} />
              <TabButton id="recharge" label="Recharge" icon={<RefreshCw className="md:h-5 md:w-5 h-4 w-4" />} />
              <TabButton id="guide" label="How to Use" icon={<HelpCircle className="md:h-5 md:w-5 h-4 w-4" />} />
              <TabButton id="faq" label="FAQ" icon={<AlertCircle className="md:h-5 md:w-5 h-4 w-4" />} />
            </div>
          </div>

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.color} mb-4 shadow-lg`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card Types Tab */}
          {activeTab === 'types' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cardTypes.map((card, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {card.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        MOST POPULAR
                      </div>
                    )}
                    
                    <div className={`bg-gradient-to-r ${card.color} text-white p-6 relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                      <div className="relative">
                        <CreditCard className="h-12 w-12 mb-4 opacity-90" />
                        <h3 className="text-xl font-bold">{card.name}</h3>
                        <p className="text-blue-100 mt-2">{card.price}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-sm text-gray-600">Validity:</span>
                        <span className="font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-full">
                          {card.validity}
                        </span>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        {card.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-3 rounded-xl font-bold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 flex items-center justify-center gap-2">
                        Get Card Now
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recharge Tab */}
          {activeTab === 'recharge' && (
            <div className="grid lg:grid-cols-2 gap-8 animate-fadeIn">
              <div className="bg-white rounded-2xl shadow p-2 md:p-4 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Recharge Options</h2>
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  {rechargeOptions.map((option, index) => (
                    <div 
                      key={index}
                      className="border border-gray-200 rounded-xl p-3 md:p-5 hover:border-transparent hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className={`inline-flex p-3 rounded-xl ${option.color} text-white mb-4`}>
                        {option.icon}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1">{option.label}</h3>
                      <p className="text-sm text-gray-600">{option.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Balance Alerts
                  </h3>
                  <p className="text-green-800 mb-4">
                    Get notified when balance goes below ₹50. Set up SMS/email alerts for automatic top-up.
                  </p>
                  <div className="flex gap-3">
                    <button className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                      Enable Alerts
                    </button>
                    <button className="border border-green-600 text-green-600 px-5 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Mobile className="h-5 w-5" />
                    Mobile App Features
                  </h3>
                  <div className="space-y-3 mb-4">
                    {['Instant recharge via UPI/NetBanking', 'Journey history & analytics', 'Balance transfer between cards', 'Lost card blocking'].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        <span className="text-sm text-blue-800">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    Download App
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* How to Use Tab */}
          {activeTab === 'guide' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="bg-white rounded-2xl shadow p-4 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use Your Smart Card</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { 
                      step: '1', 
                      title: 'Purchase Card', 
                      desc: 'Visit any metro station counter with ID proof',
                      icon: <CreditCard className="h-6 w-6" />
                    },
                    { 
                      step: '2', 
                      title: 'Recharge', 
                      desc: 'Add minimum ₹100 via cash/card/digital payment',
                      icon: <RefreshCw className="h-6 w-6" />
                    },
                    { 
                      step: '3', 
                      title: 'Tap In', 
                      desc: 'Hold card near reader at entry gate',
                      icon: <Wifi className="h-6 w-6" />
                    },
                    { 
                      step: '4', 
                      title: 'Tap Out', 
                      desc: 'Tap at exit gate to deduct correct fare',
                      icon: <CheckCircle className="h-6 w-6" />
                    }
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                        {item.step}
                      </div>
                      <div className="bg-gray-50 rounded-xl p-6 pt-10 border border-gray-200">
                        <div className="text-blue-600 mb-3">
                          {item.icon}
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Video Guide Section */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-2/3">
                    <h3 className="text-2xl font-bold mb-4">Watch Our Quick Guide</h3>
                    <p className="text-gray-300 mb-6">
                      Learn how to make the most of your Smart Card with our 2-minute tutorial video.
                      See live demonstrations of tapping, recharging, and using the mobile app.
                    </p>
                    <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      Watch Tutorial
                    </button>
                  </div>
                  <div className="lg:w-1/3 w-full">
                    <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-xl border border-white/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-300">Click to play tutorial</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <div className="animate-fadeIn">
              <div className="bg-white rounded-2xl shadow p-4 md:p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div 
                      key={index}
                      className="border border-gray-200 rounded-xl p-2 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-5 h-5 md:w-8 md:h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                          ?
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Contact Support */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-gray-900">Need more help?</h3>
                      <p className="text-gray-600">Our support team is available 24/7</p>
                    </div>
                    <div className="flex gap-3">
                      <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                        Call Support: 155370
                      </button>
                      <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300">
                        Email Support
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        {/* <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-6 rounded-2xl shadow-2xl">
            <div className="text-left">
              <h3 className="text-xl font-bold mb-1">Ready to Get Your Smart Card?</h3>
              <p className="text-blue-100">Join 2 million+ smart travelers today!</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                Find Nearest Station
              </button>
              <button className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors">
                Apply Online Now
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        /* Responsive text sizes */
        @media (max-width: 640px) {
          .text-responsive {
            font-size: 1.125rem !important;
          }
        }
        
        /* Smooth transitions */
        * {
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }
      `}</style>
    </div>
    </>
  );
};

export default SmartCard;