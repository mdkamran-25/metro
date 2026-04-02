import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  User,
  Eye,
  Database,
  Cookie,
  FileText,
  Mail,
  Globe,
  AlertCircle,
  CheckCircle,
  XCircle,
  ChevronRight,
  Home,
  ShieldCheck,
  Train,
  ExternalLink,
  Bell,
  BarChart3,
  Target,
  Users,
  Calendar,
  MapPin,
} from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = "January 10, 2024";
  const domain = "mydelhimero.in";
  const email = "privacy@mydelhimero.in";

  useEffect(() => {
    // SEO: Mark Privacy Policy as noindex - prevents wasting crawl budget on legal-required pages
    // "follow" allows Google to follow links FROM this page to other pages
    // This directs Google's crawling efforts to important content pages instead
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute("content", "noindex, follow");
    } else {
      const meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = "noindex, follow";
      document.head.appendChild(meta);
    }

    // Add meta keywords for SEO
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "Delhi Metro privacy policy, DMRC privacy policy, Metro data protection, Metro user privacy, Metro cookie policy, Metro terms of service, Metro data security, Metro user information, Metro privacy rights, Metro GDPR compliance",
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content =
        "Delhi Metro privacy policy, DMRC privacy policy, Metro data protection, Metro user privacy, Metro cookie policy, Metro terms of service, Metro data security, Metro user information, Metro privacy rights, Metro GDPR compliance";
      document.head.appendChild(meta);
    }

    // Update document title
    document.title =
      "Privacy Policy - Delhi Metro Data Protection & Privacy | DMRC";

    return () => {
      // Cleanup if needed
    };
  }, []);

  // Required sections for AdSense compliance
  const essentialSections = [
    {
      title: "Information Collection and Use",
      icon: <Database className="h-6 w-6" />,
      content: `We collect various types of information to provide and improve our Delhi Metro route planning services on ${domain}.`,
      points: [
        {
          title: "Personal Information",
          description:
            "When you contact us, we may collect your name and email address to respond to your queries.",
        },
        {
          title: "Usage Data",
          description:
            "We collect information about how you access and use our website, including IP address, browser type, pages visited, and time spent on pages.",
        },
        {
          title: "Cookies and Tracking Data",
          description:
            "We use cookies and similar tracking technologies to track activity on our website and hold certain information.",
        },
        {
          title: "Location Data",
          description:
            "With your permission, we may collect and process information about your location to provide accurate Delhi Metro route suggestions.",
        },
      ],
    },
    {
      title: "Third-Party Services",
      icon: <Globe className="h-6 w-6" />,
      content: `We use third-party services to operate ${domain} effectively, including advertising and analytics services.`,
      points: [
        {
          title: "Google AdSense",
          description:
            "We use Google AdSense to display advertisements on our website. Google uses cookies to serve ads based on users' visits to our site and other sites on the Internet.",
        },
        {
          title: "Google Analytics",
          description:
            "We use Google Analytics to understand how visitors interact with our website and to improve user experience.",
        },
        {
          title: "Advertising Partners",
          description:
            "Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website or other websites.",
        },
      ],
    },
    {
      title: "Cookies Policy",
      icon: <Cookie className="h-6 w-6" />,
      content: `${domain} uses cookies for various purposes to enhance your browsing experience.`,
      points: [
        {
          title: "Essential Cookies",
          description:
            "Required for the website to function properly and cannot be switched off.",
        },
        {
          title: "Analytics Cookies",
          description:
            "Allow us to count visits and traffic sources to improve website performance.",
        },
        {
          title: "Advertising Cookies",
          description:
            "Set by our advertising partners to build a profile of your interests and show relevant ads.",
        },
        {
          title: "Preference Cookies",
          description:
            "Enable the website to remember information that changes how the site behaves or looks.",
        },
      ],
    },
    {
      title: "Data Protection and Security",
      icon: <Lock className="h-6 w-6" />,
      content: `We implement appropriate technical and organizational measures to protect your personal information on ${domain}.`,
      points: [
        {
          title: "Encryption",
          description:
            "We use SSL encryption to protect data transmission between your browser and our servers.",
        },
        {
          title: "Access Control",
          description:
            "Strict access controls are implemented to ensure only authorized personnel can access user data.",
        },
        {
          title: "Data Retention",
          description:
            "We retain personal information only for as long as necessary to fulfill the purposes for which it was collected.",
        },
        {
          title: "Security Audits",
          description:
            "Regular security assessments are conducted to identify and address potential vulnerabilities.",
        },
      ],
    },
    {
      title: "Your Rights and Choices",
      icon: <User className="h-6 w-6" />,
      content: `You have certain rights regarding your personal information when using ${domain}.`,
      points: [
        {
          title: "Access and Correction",
          description:
            "You can request access to your personal information and ask for corrections if it's inaccurate.",
        },
        {
          title: "Data Deletion",
          description:
            "You can request deletion of your personal information from our records.",
        },
        {
          title: "Opt-Out Options",
          description:
            "You can opt-out of personalized advertising and analytics tracking.",
        },
        {
          title: "Cookie Preferences",
          description:
            "You can manage cookie preferences through your browser settings.",
        },
      ],
    },
    {
      title: "Children's Privacy",
      icon: <Users className="h-6 w-6" />,
      content: `${domain} does not knowingly collect personal information from children under the age of 13.`,
      points: [
        {
          title: "Age Restriction",
          description:
            "Our services are not directed to children under 13 years of age.",
        },
        {
          title: "Parental Consent",
          description:
            "If we discover that a child under 13 has provided us with personal information, we will delete it immediately.",
        },
        {
          title: "Parental Control",
          description:
            "Parents or guardians can contact us to review, delete, or stop collection of their child's information.",
        },
      ],
    },
  ];

  // Google AdSense specific information
  const googleAdsenseInfo = {
    description:
      "Google AdSense is used on this site to display advertisements. As a third-party vendor, Google uses cookies to serve ads based on users' visits to this site and other sites on the Internet.",
    optOutLinks: [
      {
        name: "Google Ads Settings",
        url: "https://www.google.com/settings/ads",
        description: "Opt out of personalized advertising",
      },
      {
        name: "Network Advertising Initiative",
        url: "http://optout.networkadvertising.org/",
        description: "Opt out of network advertising",
      },
      {
        name: "Digital Advertising Alliance",
        url: "http://www.aboutads.info/choices/",
        description: "Consumer choice platform",
      },
    ],
    cookieTypes: [
      "Advertising cookies used by Google and its partners",
      "Analytics cookies for traffic measurement",
      "Preference cookies for user settings",
      "Security cookies for fraud prevention",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm mb-6">
              <Shield className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Protecting your privacy on{" "}
              <span className="font-bold">{domain}</span>
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <AlertCircle className="h-5 w-5 mr-2" />
              <span>
                Domain: <strong>{domain}</strong> • Last Updated: {lastUpdated}
              </span>
            </div>
            <div className="mt-6 text-blue-200">
              <p>Compliant with Google AdSense Program Policies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto md:px-4 md:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Important Notice */}
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-2xl p-6 mb-8">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-amber-600 mr-3 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Important Notice
                </h3>
                <p className="text-gray-700">
                  This Privacy Policy explains how <strong>{domain}</strong>{" "}
                  collects, uses, and discloses information, and describes the
                  choices available to you regarding our use of your personal
                  information. By using our website, you agree to the collection
                  and use of information in accordance with this policy.
                </p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white md:rounded-3xl shadow-xl p-8 mb-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to Our Privacy Policy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At <strong>{domain}</strong> (Delhi Metro Route Finder), your
              privacy is critically important to us. This Privacy Policy applies
              to information we collect when you use our Delhi Metro route
              planning services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We are committed to protecting your personal information and your
              right to privacy. If you have any questions or concerns about our
              policy, or our practices with regards to your personal
              information, please contact us at <strong>{email}</strong>.
            </p>
          </div>

          {/* Google AdSense Compliance Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl shadow-xl p-8 mb-12 border border-blue-200">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4">
                <Target className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Google AdSense Compliance
                </h3>
                <p className="text-gray-600">
                  This section specifically addresses our use of Google AdSense
                  and advertising practices
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <Bell className="h-5 w-5 text-blue-600 mr-2" />
                  Advertising on {domain}
                </h4>
                <p className="text-gray-700 mb-4">
                  We use Google AdSense to display advertisements on our
                  website. Google, as a third-party vendor, uses cookies to
                  serve ads based on users' visits to our site and other sites
                  on the Internet.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Note:</strong> Google's use of advertising cookies
                    enables it and its partners to serve ads to users based on
                    their visit to our sites and/or other sites on the Internet.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <BarChart3 className="h-5 w-5 text-green-600 mr-2" />
                  Analytics and Tracking
                </h4>
                <p className="text-gray-700 mb-4">
                  We use Google Analytics to understand how visitors interact
                  with our Delhi Metro route planner. This helps us improve our
                  services and user experience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>
                      We analyze traffic patterns to optimize our website
                      performance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>
                      We track user interactions to improve route planning
                      features
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>
                      We measure the effectiveness of our content and features
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <Cookie className="h-5 w-5 text-amber-600 mr-2" />
                  Cookie Usage for Advertising
                </h4>
                <p className="text-gray-700 mb-4">
                  Cookies used for advertising purposes on {domain}:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {googleAdsenseInfo.cookieTypes.map((type, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-gray-50 rounded-lg p-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                      <span className="text-gray-700 text-sm">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <ExternalLink className="h-5 w-5 text-purple-600 mr-2" />
                  Opt-Out Options
                </h4>
                <p className="text-gray-700 mb-4">
                  You can opt-out of personalized advertising and analytics
                  tracking through these resources:
                </p>
                <div className="space-y-3">
                  {googleAdsenseInfo.optOutLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                    >
                      <div>
                        <div className="font-medium text-gray-900">
                          {link.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {link.description}
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Essential Policy Sections */}
          <div className="space-y-8 mb-12">
            {essentialSections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200"
              >
                <div className="flex items-start mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mr-4 ${
                      index === 0
                        ? "bg-blue-100 text-blue-600"
                        : index === 1
                          ? "bg-purple-100 text-purple-600"
                          : index === 2
                            ? "bg-amber-100 text-amber-600"
                            : index === 3
                              ? "bg-green-100 text-green-600"
                              : index === 4
                                ? "bg-indigo-100 text-indigo-600"
                                : "bg-pink-100 text-pink-600"
                    }`}
                  >
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{section.content}</p>

                    <div className="space-y-4">
                      {section.points.map((point, idx) => (
                        <div
                          key={idx}
                          className="border-l-4 border-blue-200 pl-4 py-2"
                        >
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {point.title}
                          </h4>
                          <p className="text-gray-700 text-sm">
                            {point.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Data Collection Specifics */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl shadow-xl p-8 mb-12 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Data Collection Specifics for {domain}
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  What We Collect
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3"></div>
                    <span className="text-gray-700">
                      Browser type and version
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3"></div>
                    <span className="text-gray-700">
                      Time and date of visit
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3"></div>
                    <span className="text-gray-700">
                      Pages visited on our site
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3"></div>
                    <span className="text-gray-700">
                      Metro stations searched
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Calendar className="h-5 w-5 text-green-600 mr-2" />
                  Data Retention
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3"></div>
                    <span className="text-gray-700">Log data: 30 days</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3"></div>
                    <span className="text-gray-700">
                      Analytics data: 26 months
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3"></div>
                    <span className="text-gray-700">
                      Contact information: Until request deletion
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3"></div>
                    <span className="text-gray-700">
                      Cookie data: As per cookie lifespan
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-lg p-8 mb-12 border border-blue-200">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mr-4">
                <Mail className="h-7 w-7 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Contact Information
                </h3>
                <p className="text-gray-600">For privacy-related inquiries</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">
                  Data Protection Officer
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <Mail className="h-4 w-4 mr-2 text-gray-500" />
                    <a href={`mailto:${email}`} className="hover:text-blue-600">
                      {email}
                    </a>
                  </div>
                  <p className="text-sm text-gray-600">
                    Please use "Privacy Policy Inquiry" in the subject line for
                    faster response.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">Policy Updates</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <AlertCircle className="h-4 w-4 mr-2 text-amber-500" />
                    <span>Last Updated: {lastUpdated}</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    We may update this policy periodically. Changes will be
                    posted on this page.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Statement */}
          <div className="text-center bg-gray-50 rounded-3xl p-8 border border-gray-200 mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Compliance Statement
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              This Privacy Policy for <strong>{domain}</strong> is designed to
              comply with:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-blue-600 font-bold mb-2">
                  Google AdSense
                </div>
                <div className="text-sm text-gray-600">
                  Program Policies Compliance
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-green-600 font-bold mb-2">
                  General Data
                </div>
                <div className="text-sm text-gray-600">
                  Privacy Best Practices
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-purple-600 font-bold mb-2">
                  Industry Standards
                </div>
                <div className="text-sm text-gray-600">
                  Web Privacy Standards
                </div>
              </div>
            </div>
          </div>

          {/* Final Acceptance */}
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl shadow-xl p-8 text-white">
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-2xl font-bold mb-4">Acceptance of Terms</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                By using <strong>{domain}</strong> (Delhi Metro Route Finder),
                you acknowledge that you have read, understood, and agree to be
                bound by this Privacy Policy. Your continued use of our website
                following the posting of changes to this policy will be deemed
                your acceptance of those changes.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <Train className="h-5 w-5 mr-2" />
                <span>
                  Service: Delhi Metro Route Finder • Domain: {domain}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mr-2">
                    <Train className="h-5 w-5" />
                  </div>
                  <div className="text-2xl font-bold">{domain}</div>
                </div>
                <p className="text-gray-400">
                  Delhi Metro Route Finder • Privacy Protected
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms
                </Link>
                <span className="text-gray-600">•</span>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>
                © {new Date().getFullYear()} <strong>{domain}</strong>. All
                rights reserved.
              </p>
              <p className="mt-2 text-sm">
                This privacy policy is specifically designed for{" "}
                <strong>{domain}</strong> and complies with Google AdSense
                Program Policies and web privacy standards.
              </p>
              <div className="mt-3 text-xs text-gray-500">
                Effective Date: {lastUpdated} • Version: 1.0 • Domain: {domain}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
