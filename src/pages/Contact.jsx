import React, { useState, useEffect } from 'react'
import { 
  Phone, Mail, MapPin, Clock, Send, User, MessageCircle, 
  AlertCircle, CheckCircle, Loader, Twitter, Facebook, 
  Instagram, Youtube, HelpCircle, Headphones, Shield,
  Building, Globe, Smartphone, Award, Zap, Mailbox
} from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  useEffect(() => {
    // Initialize EmailJS safely inside useEffect
    try {
      emailjs.init("8X1PrbFTvGrPeV80R")
    } catch (error) {
      console.warn('EmailJS initialization warning:', error.message)
    }
    
    // Add meta keywords for SEO
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Delhi Metro contact, DMRC helpline, Metro customer care, Metro feedback, Metro complaints, Metro support, Delhi Metro phone number, Metro email, Metro office address, Metro customer service, Metro lost and found, Metro suggestions');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'Delhi Metro contact, DMRC helpline, Metro customer care, Metro feedback, Metro complaints, Metro support, Delhi Metro phone number, Metro email, Metro office address, Metro customer service, Metro lost and found, Metro suggestions';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
    
    // Update document title
    document.title = 'Contact Delhi Metro - Customer Care & Support | DMRC';
    
    return () => {
      // Cleanup if needed
    };
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: false, message: 'Sending your message...' })

    try {
      // Send email using EmailJS
      const templateParams = {
        to_email: 'surajsingh26574@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toLocaleString('en-IN', { 
          timeZone: 'Asia/Kolkata',
          dateStyle: 'full',
          timeStyle: 'medium'
        })
      }

      const response = await emailjs.send(
        'service_it8sv78',
        'template_8ripg6c',
        templateParams
      )

      if (response.status === 200) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: '✅ Message sent successfully! We\'ll get back to you within 24 hours.'
        })
        
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus({ loading: false, success: false, error: false, message: '' })
        }, 5000)
      }
    } catch (error) {
      console.error('Email sending failed:', error)
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: '❌ Failed to send message. Please try again or email us directly at feedback@dmrc.org'
      })
    }
  }

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Helpline',
      details: '155370',
      description: '24/7 Customer Care',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      features: ['Toll-free', 'Multilingual', 'Immediate Assistance']
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Support',
      details: 'feedback@dmrc.org',
      description: 'General Inquiries & Feedback',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      features: ['24/7 Response', 'Detailed Support', 'Document Upload']
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Head Office',
      details: 'Metro Bhawan, New Delhi',
      description: 'Fire Brigade Lane, Barakhamba Road',
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
      features: ['9AM-6PM', 'Appointment Required', 'Document Submission']
    }
  ]

  const officeHours = [
    { day: 'Monday - Friday', time: '8:00 AM - 8:00 PM', icon: <Clock className="h-4 w-4" /> },
    { day: 'Saturday', time: '9:00 AM - 6:00 PM', icon: <Clock className="h-4 w-4" /> },
    { day: 'Sunday', time: '10:00 AM - 4:00 PM', icon: <Clock className="h-4 w-4" /> }
  ]

  const socialMedia = [
    { name: 'Twitter', handle: '@OfficialDMRC', url: 'https://twitter.com/OfficialDMRC', icon: <Twitter className="h-5 w-5" />, color: 'text-blue-400' },
    { name: 'Facebook', handle: '/DelhiMetroOfficial', url: 'https://facebook.com/DelhiMetroOfficial', icon: <Facebook className="h-5 w-5" />, color: 'text-blue-600' },
    { name: 'Instagram', handle: '@delhimetrorail', url: 'https://instagram.com/delhimetrorail', icon: <Instagram className="h-5 w-5" />, color: 'text-pink-500' },
    { name: 'YouTube', handle: 'Delhi Metro Rail', url: 'https://youtube.com/c/DelhiMetroRail', icon: <Youtube className="h-5 w-5" />, color: 'text-red-600' }
  ]

  const quickLinks = [
    { title: 'Lost & Found', description: 'Report or claim lost items', icon: <HelpCircle className="h-5 w-5" />, action: () => alert('Redirecting to Lost & Found page') },
    { title: 'Feedback', description: 'Share your experience', icon: <MessageCircle className="h-5 w-5" />, action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { title: 'Complaints', description: 'Register complaints online', icon: <AlertCircle className="h-5 w-5" />, action: () => alert('Redirecting to Complaints portal') },
    { title: 'Suggestions', description: 'Suggest improvements', icon: <Zap className="h-5 w-5" />, action: () => alert('Opening suggestions form') }
  ]

  const faqItems = [
    {
      question: "How can I file a complaint?",
      answer: "You can file complaints through our helpline 155370, email feedback@dmrc.org, or at any station's customer care desk. We resolve most issues within 48 hours."
    },
    {
      question: "Where can I find lost property?",
      answer: "Lost property is kept at the station where it was found for 48 hours. Contact the station manager or check our online lost property portal for items lost more than 2 days ago."
    },
    {
      question: "How do I apply for a concession card?",
      answer: "Concession forms are available at all stations. Submit with required documents and photographs at the customer care center. Processing takes 3-5 working days."
    },
    {
      question: "Can I suggest a new station or route?",
      answer: "Yes! We welcome suggestions for new routes and stations. Use the contact form above or write to planning@dmrc.org with detailed proposals."
    }
  ]

  // Format phone number for click-to-call
  const formatPhoneNumber = (phone) => {
    return phone.replace(/\D/g, '')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 pt-8">
      <div className="w-[95%] mx-auto md:px-4">
        {/* Page Header */}
        <div className="text-center mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl"></div>
          <div className="relative">
            <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
              <Headphones className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl  font-bold text-gray-900 mb-4">
              Get in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-md md:text-xl text-gray-600 max-
            w-3xl mx-auto">
              We're here to help with any questions, feedback, or concerns about Delhi Metro services. 
              Your satisfaction is our priority.
            </p>
          </div>
        </div>

        <div className="mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Methods Cards */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div 
                    key={index} 
                    className={`${method.bgColor} rounded-2xl shadow p-3 md:p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`${method.color} text-white p-4 rounded-xl shadow`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg">{method.title}</h3>
                        <div className="my-2">
                          {method.title === 'Helpline' ? (
                            <a 
                              href={`tel:${formatPhoneNumber(method.details)}`}
                              className="text-gray-700 font-semibold text-lg hover:text-blue-600 transition-colors"
                            >
                              {method.details}
                            </a>
                          ) : method.title === 'Email Support' ? (
                            <a 
                              href={`mailto:${method.details}`}
                              className="text-gray-700 font-semibold text-lg hover:text-blue-600 transition-colors"
                            >
                              {method.details}
                            </a>
                          ) : (
                            <p className="text-gray-700 font-semibold text-lg">{method.details}</p>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {method.features.map((feature, idx) => (
                            <span key={idx} className="text-xs bg-white/50 px-2 py-1 rounded-md text-gray-700">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow p-3 md:p-6 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between items-center p-4 bg-white/50 rounded-xl hover:bg-white transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="text-gray-500 mr-3">
                          {schedule.icon}
                        </div>
                        <span className="text-gray-800 font-medium">{schedule.day}</span>
                      </div>
                      <span className="font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow p-3 md:p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={link.action}
                      className="bg-white p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group text-left"
                    >
                      <div className="flex items-center mb-2">
                        <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors mr-3">
                          <div className="text-blue-600">
                            {link.icon}
                          </div>
                        </div>
                        <span className="font-semibold text-gray-800 text-sm">{link.title}</span>
                      </div>
                      <p className="text-xs text-gray-600">{link.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2">
              {/* Contact Form Card */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow p-3 md:p-8 border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mr-4">
                    <Mailbox className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                    <p className="text-gray-600">
                      Fill out the form below and we'll respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Status Messages */}
                {status.message && (
                  <div className={`mb-6 p-4 rounded-xl flex items-center border ${
                    status.success 
                      ? 'bg-green-50 border-green-200 text-green-800' 
                      : status.error 
                      ? 'bg-red-50 border-red-200 text-red-800' 
                      : 'bg-blue-50 border-blue-200 text-blue-800'
                  }`}>
                    {status.loading ? (
                      <Loader className="h-5 w-5 mr-3 animate-spin" />
                    ) : status.success ? (
                      <CheckCircle className="h-5 w-5 mr-3" />
                    ) : (
                      <AlertCircle className="h-5 w-5 mr-3" />
                    )}
                    <span className="font-medium">{status.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all"
                          placeholder="Enter your full name"
                          disabled={status.loading}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all"
                          placeholder="Enter your email address"
                          disabled={status.loading}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all"
                        placeholder="What is this regarding?"
                        disabled={status.loading}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all resize-none"
                      placeholder="Please provide detailed information about your query..."
                      disabled={status.loading}
                    ></textarea>
                    <p className="text-sm text-gray-500 mt-2">
                      Please include relevant details like station names, card numbers, or specific dates if applicable.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={status.loading}
                    className={`group w-full text-white py-4 px-8 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center ${
                      status.loading 
                        ? 'bg-gradient-to-r from-gray-600 to-gray-700' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600'
                    }`}
                  >
                    {status.loading ? (
                      <>
                        <Loader className="h-5 w-5 mr-2 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message to Delhi Metro
                      </>
                    )}
                  </button>
                  
                  <p className="text-sm text-center text-gray-500">
                    Your message will be sent to: <strong>surajsingh26574@gmail.com</strong>
                  </p>
                </form>
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-3 md:p-6 shadow">
                <div className="flex items-start">
                  <div className="p-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl mr-4">
                    <AlertCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-red-800 mb-2">Emergency Contact</h3>
                    <p className="text-red-700 mb-4">
                      For emergencies, security concerns, or immediate assistance at stations, 
                      contact station control room or dial:
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white/50 p-4 rounded-xl">
                      <div className="flex items-center mb-4 sm:mb-0">
                        <Phone className="h-5 w-5 text-red-600 mr-3" />
                        <div>
                          <a 
                            href="tel:155370"
                            className="text-2xl font-bold text-red-800 hover:text-red-900 transition-colors"
                          >
                            155370
                          </a>
                          <div className="text-sm text-red-600 font-medium">24/7 Emergency Line</div>
                        </div>
                      </div>
                      <a 
                        href="tel:155370"
                        className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow text-center"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Us</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-gray-50 hover:bg-gradient-to-br hover:from-white hover:to-gray-100 p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 text-center"
                    >
                      <div className={`${social.color} mb-3 flex justify-center`}>
                        {social.icon}
                      </div>
                      <div className="font-semibold text-gray-800 group-hover:text-gray-900 mb-1">
                        {social.name}
                      </div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 truncate">
                        {social.handle}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl mr-4">
                <HelpCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
                <p className="text-gray-600">Quick answers to common questions</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {faqItems.map((item, index) => (
                <div key={index} className="group">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                    {item.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

        
        </div>
      </div>
        {/* Contact Info Banner */}
        <div className="mt-8 bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 p-8 text-white">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left">
                <Building className="h-10 w-10 mb-4 mx-auto md:mx-0" />
                <h3 className="text-lg font-bold mb-2">Metro Bhawan</h3>
                <p className="text-blue-200">Fire Brigade Lane, Barakhamba Road, New Delhi</p>
              </div>
              <div className="text-center">
                <Globe className="h-10 w-10 mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Visit Our Website</h3>
                <a 
                  href="https://www.delhimetrorail.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  www.delhimetrorail.com
                </a>
              </div>
              <div className="text-center md:text-right">
                <Smartphone className="h-10 w-10 mb-4 mx-auto md:ml-auto" />
                <h3 className="text-lg font-bold mb-2">Mobile App</h3>
                <p className="text-blue-200">Download DMRC Official App</p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Contact