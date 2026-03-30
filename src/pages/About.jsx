import React, { useMemo, useEffect, useState } from "react";
import {
  Heart,
  MapPin,
  Route,
  Users,
  Globe,
  ShieldCheck,
  Mail,
  Clock3,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Target,
  Brain,
  Zap,
  TrendingUp,
  Map,
  Navigation,
  Smartphone,
  LineChart,
  BarChart3,
  Cpu,
  Shield,
  MessageSquare,
  ExternalLink,
  ChevronRight,
  Star,
  Award,
  Rocket,
  Lightbulb,
  Code,
  Palette,
  Database,
  Server,
  GitBranch,
  Cloud,
  Wifi,

} from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Add meta keywords for SEO
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'About Delhi Metro, DMRC information, Metro network details, Metro stations count, Metro lines, Metro history, Metro features, Delhi Metro app, Metro technology, Metro services, Metro mission, Metro team');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'About Delhi Metro, DMRC information, Metro network details, Metro stations count, Metro lines, Metro history, Metro features, Delhi Metro app, Metro technology, Metro services, Metro mission, Metro team';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
    
    // Update document title
    document.title = 'About Delhi Metro - Network Information & Features | DMRC';
    
    return () => {
      // Cleanup if needed
    };
  }, []);
  const navigate = useNavigate();

  // Stats with animation
  const stats = useMemo(
    () => [
      {
        icon: <MapPin className="h-6 w-6" />,
        value: "285+",
        label: "Metro Stations",
        color: "from-blue-500 to-cyan-500",
        description: "Across Delhi NCR"
      },
      {
        icon: <Route className="h-6 w-6" />,
        value: "12",
        label: "Metro Lines",
        color: "from-purple-500 to-pink-500",
        description: "Color-coded network"
      },
      {
        icon: <Users className="h-6 w-6" />,
        value: "6.5M+",
        label: "Daily Commuters",
        color: "from-green-500 to-emerald-500",
        description: "Trusted by millions"
      },
      {
        icon: <Globe className="h-6 w-6" />,
        value: "394+ km",
        label: "Network Length",
        color: "from-orange-500 to-red-500",
        description: "Expanding rapidly"
      },
    ],
    []
  );

  // Features with icons and colors
  const features = useMemo(
    () => [
      {
        title: "AI Route Planning",
        desc: "Intelligent algorithms find the fastest metro routes with smart interchange suggestions.",
        icon: <Brain className="h-6 w-6" />,
        color: "bg-gradient-to-br from-blue-500 to-cyan-500",
      },
      {
        title: "Live Metro Timings",
        desc: "Real-time train schedules, first/last metro info, and peak-hour recommendations.",
        icon: <Clock3 className="h-6 w-6" />,
        color: "bg-gradient-to-br from-purple-500 to-pink-500",
      },
      {
        title: "Complete Station Guide",
        desc: "Detailed station info with exits, facilities, nearby landmarks, and connectivity.",
        icon: <MapPin className="h-6 w-6" />,
        color: "bg-gradient-to-br from-green-500 to-emerald-500",
      },
      {
        title: "Tourist Attractions",
        desc: "Discover 100+ metro-accessible tourist spots with guided navigation.",
        icon: <Sparkles className="h-6 w-6" />,
        color: "bg-gradient-to-br from-orange-500 to-amber-500",
      },
      {
        title: "Lightning Fast",
        desc: "Optimized performance with instant search results and smooth animations.",
        icon: <Zap className="h-6 w-6" />,
        color: "bg-gradient-to-br from-red-500 to-pink-500",
      },
      {
        title: "Always Accurate",
        desc: "Regularly updated database ensuring 99.9% accuracy in route planning.",
        icon: <ShieldCheck className="h-6 w-6" />,
        color: "bg-gradient-to-br from-indigo-500 to-purple-500",
      },
    ],
    []
  );

  // Team members
  const team = useMemo(
    () => [
      {
        name: "Development Team",
        role: "Full-Stack Engineering",
        description: "Building scalable architecture with cutting-edge tech stack",
        icon: <Code className="h-5 w-5" />,
        color: "bg-gradient-to-br from-blue-500 to-cyan-500",
      },
      {
        name: "UX/UI Designers",
        role: "User Experience & Interface",
        description: "Creating intuitive, beautiful, and accessible designs",
        icon: <Palette className="h-5 w-5" />,
        color: "bg-gradient-to-br from-purple-500 to-pink-500",
      },
      {
        name: "Data Analytics",
        role: "Information Management",
        description: "Maintaining accurate metro data and route algorithms",
        icon: <Database className="h-5 w-5" />,
        color: "bg-gradient-to-br from-green-500 to-emerald-500",
      },
    ],
    []
  );

  // Tech stack with icons
  const techStack = useMemo(
    () => [
      { name: "React", icon: <Cpu className="h-4 w-4" /> },
      { name: "Next.js", icon: <Rocket className="h-4 w-4" /> },
      { name: "TypeScript", icon: <Code className="h-4 w-4" /> },
      { name: "Tailwind CSS", icon: <Palette className="h-4 w-4" /> },
      { name: "PWA", icon: <Smartphone className="h-4 w-4" /> },
      { name: "GraphQL", icon: <GitBranch className="h-4 w-4" /> },
      { name: "Node.js", icon: <Server className="h-4 w-4" /> },
      { name: "MongoDB", icon: <Database className="h-4 w-4" /> },
      { name: "AWS", icon: <Cloud className="h-4 w-4" /> },
    ],
    []
  );

  // Values
  const values = useMemo(
    () => [
      {
        title: "User-Centric Design",
        desc: "Every feature is crafted with the user's needs, accessibility, and simplicity in mind.",
        icon: <Users className="h-6 w-6" />,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
      },
      {
        title: "Reliability First",
        desc: "We prioritize accuracy and stability to ensure you never miss your metro.",
        icon: <Shield className="h-6 w-6" />,
        color: "text-green-600",
        bgColor: "bg-green-50",
      },
      {
        title: "Community Driven",
        desc: "Built for Delhi's commuters, improved by their feedback and experiences.",
        icon: <Heart className="h-6 w-6" />,
        color: "text-pink-600",
        bgColor: "bg-pink-50",
      },
      {
        title: "Innovation",
        desc: "Continuously evolving with new features and smarter navigation solutions.",
        icon: <Lightbulb className="h-6 w-6" />,
        color: "text-amber-600",
        bgColor: "bg-amber-50",
      },
    ],
    []
  );

  // Quick links
  const quickLinks = useMemo(
    () => [
      { label: "Route Finder", path: "/route-planner", icon: <Route className="h-5 w-5" />, color: "text-blue-600" },
      { label: "Station Guide", path: "/network", icon: <MapPin className="h-5 w-5" />, color: "text-purple-600" },
      { label: "Tourist Places", path: "/tourist-info", icon: <Sparkles className="h-5 w-5" />, color: "text-green-600" },
      { label: "Metro Fare", path: "/fares", icon: <CreditCard className="h-5 w-5" />, color: "text-amber-600" },
    ],
    []
  );

    const seoKeywords = useMemo(
      () =>
        [
          "Delhi Metro blog",
          "Delhi Metro routes",
          "Delhi Metro route finder",
          "Delhi Metro lines",
          "Delhi Metro stations",
          "DMRC updates",
          "Delhi Metro timings",
          "Delhi Metro fare",
          "Delhi Metro smart card",
          "Delhi Metro interchange stations",
          "Delhi NCR metro map",
          "Delhi Metro tourist places",
          "Delhi Metro travel tips",
          "Airport Express Delhi Metro",
          "Magenta Line Delhi Metro",
          "Pink Line Delhi Metro",
          "Blue Line Delhi Metro",
          "Yellow Line Delhi Metro",
          "Red Line Delhi Metro",
        ].join(", "),
      []
    );


     // ✅ JSON-LD Schema
      const jsonLd = useMemo(
        () => ({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Delhi Metro Blog",
          description:
            "Delhi Metro blog for routes, metro lines, stations, interchanges, timings, fare guides and tourist places accessible by metro.",
          keywords: seoKeywords,
        }),
        [seoKeywords]
      );
    
  

  // Animation classes
  const fadeIn = `transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* ✅ SEO */}
      <title>Delhi Metro About | Routes, Lines, Stations, Timings & Tourist Guide</title>
      <meta
        name="description"
        content="Explore Delhi Metro blog for all metro lines, routes, interchange guides, metro timings, fare & smart card tips, and tourist places accessible by Delhi Metro."
      />
      <meta name="keywords" content={seoKeywords} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <div className="relative overflow-hidden bg-slate-900">
        {/* Fixed background pattern - removed incorrect SVG string */}
       <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        
        <div className="container mx-auto px-4 py-14 md:py-18 relative">
          <div className="mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-2xl mb-3 md:mb-8 animate-pulse">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-50"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full">
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            <h1 className="mb-3">
               <span className="block text-4xl italic md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 mb-1 leading-tight tracking-tight [-webkit-text-stroke:2px_rgba(255,255,255,0.1)]">
             My Delhi Metro <span className="text-blue-300"> Navigating</span>
            </span>
            
             
            </h1>
              <p className="text-gray-300 text-[16px] mb-8 italic leading-relaxed max-w-2xl mx-auto">
                Your intelligent companion for exploring Delhi Metro. We transform complex routes 
              into simple journeys with AI-powered navigation and real-time insights.
              </p>

           

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center">
                <span>Start Exploring</span>
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group px-8 py-4 bg-transparent border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm">
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="md:w-[95%] mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((stat, index) => {
            // Extract colors from gradient string safely
            const fromColor = stat.color.split(' ')[1]?.replace('500', '600') || 'blue-600';
            const toColor = stat.color.split(' ')[3]?.replace('500', '600') || 'cyan-600';
            
            return (
              <div
                key={index}
                className={`bg-white flex flex-row md:flex-col gap-10 md:gap-0 rounded-2xl shadow md:p-8 p-4 transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl ${fadeIn}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${stat.color} p-4 mb-6`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div>

                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-800">{stat.label}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Our Mission */}
      <div className=" mx-auto px-4 py-10 md:py-14">
        <div className={`md:w-[95%] mx-auto ${fadeIn}`}>
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
              <Target className="h-4 w-4 mr-2" />
              OUR PURPOSE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Revolutionizing Metro Travel in Delhi
            </h2>
            <p className="text-md md:text-xl text-gray-600 leading-relaxed">
              We're on a mission to make Delhi Metro navigation effortless, accurate, and 
              accessible for everyone — from daily commuters to first-time visitors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Navigation</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI-powered route finder doesn't just show you paths — it understands your 
                preferences for speed, comfort, and convenience to suggest the optimal journey.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Growing Together</h3>
              <p className="text-gray-600 leading-relaxed">
                As Delhi Metro expands, we evolve. Every new station, every route update, 
                and every user feedback makes our platform smarter and more comprehensive.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="md:w-[95%] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Delhi Metro Routes?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Packed with features designed to make your metro journey seamless
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow p-8 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${fadeIn}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="md:w-[95%] mx-auto px-4">
          <div className={`mx-auto ${fadeIn}`}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-semibold mb-4 shadow-sm">
                <Cpu className="h-4 w-4 mr-2" />
                TECHNOLOGY STACK
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Built With Modern Technology
              </h2>
              <p className="text-md md:text-xl text-gray-600">
                Powered by cutting-edge tools for exceptional performance
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl px-6 py-4 flex items-center gap-3 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-gray-600 group-hover:text-blue-600 transition-colors">
                    {tech.icon}
                  </div>
                  <span className="font-semibold text-gray-800">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="md:w-[95%] mx-auto px-4 py-5 md:py-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our Core Values
          </h2>
          <p className="text-md md:text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we build
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow p-4 md:p-8 transform transition-all duration-500 hover:-translate-y-2 ${fadeIn}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 ${value.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={value.color}>
                  {value.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team & Contact */}
      <div className="container mx-auto px-4 py-10 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Team Section */}
          <div className={`${fadeIn}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Meet Our Team
            </h2>
            
            <div className="space-y-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${member.color} p-3`}>
                      <div className="text-white">
                        {member.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                      <div className="text-sm font-semibold text-gray-600 mb-2">{member.role}</div>
                      <p className="text-gray-600 text-sm">{member.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Quick Links */}
          <div className={`space-y-8 ${fadeIn}`}>
            {/* Contact Card */}
            {/* <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have suggestions, found issues, or want to collaborate? We're always listening.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">contact@delhimetroroutes.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock3 className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">24/7 Support Available</span>
                </div>
              </div>

              <button className="group w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center">
                <span>Send Message</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div> */}

            {/* Quick Links */}
            <div className="bg-white rounded-2xl shadow p-4 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Quick Links
              </h2>
              
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    onClick={() => navigate(link.path)}
                    key={index}
                    className="group w-full bg-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-xl px-6 py-4 flex items-center justify-between transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className={link.color}>
                        {link.icon}
                      </div>
                      <span className="font-semibold text-gray-800">{link.label}</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div>
        <div className={`bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden ${fadeIn}`}>
          <div className="relative p-5 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full translate-y-32 -translate-x-32"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Explore Delhi?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Join millions of commuters who trust us for their daily metro journeys.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => navigate('/route-planner')} className="group px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center">
                  <span>Start Your Journey</span>
                  <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm">
                  <span>Download Mobile App</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Credit Card icon component
const CreditCard = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
    <line x1="1" y1="10" x2="23" y2="10"></line>
  </svg>
);

export default About;