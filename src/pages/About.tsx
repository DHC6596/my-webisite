import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Target, 
  Eye, 
  Calendar,
  Globe,
  ArrowRight,
  CheckCircle,
  TrendingUp 
} from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards and transparency.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting businesses across continents with comprehensive market coverage.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Focus',
      description: 'Committed to driving sustainable growth for all our trade partners.'
    },
    {
      icon: User,
      title: 'Partnership',
      description: 'Building long-term relationships based on trust and mutual success.'
    }
  ];

  const timeline = [
    {
      year: '2023',
      month: 'November',
      title: 'Company Founded',
      description: 'TradeMagnet Global established by Dilip Chavda with a vision to simplify international trade.'
    },
    {
      year: '2023',
      month: 'December',
      title: 'Platform Development',
      description: 'Initial development of our trade facilitation platform and verification processes.'
    },
    {
      year: '2024',
      month: 'Q1',
      title: 'Market Research',
      description: 'Comprehensive analysis of global trade patterns and industry requirements.'
    },
    {
      year: '2024',
      month: 'Present',
      title: 'Ready to Serve',
      description: 'Fully prepared to connect international buyers and sellers with comprehensive support.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About TradeMagnet Global
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Founded in November 2023, we are dedicated to connecting international buyers 
              and sellers through innovative trade facilitation solutions and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/hu pote ai.jpg"
                alt="Dilip Chavda, Founder of TradeMagnet Global"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <User className="h-8 w-8 text-navy-600" />
                <h2 className="text-3xl lg:text-4xl font-bold text-navy-900">
                  Meet Our Founder
                </h2>
              </div>
              <h3 className="text-2xl font-semibold text-navy-700 mb-4">Dilip Chavda</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With a vision to simplify international trade and create meaningful connections 
                between global businesses, Dilip Chavda founded TradeMagnet Global in November 2023. 
                His expertise in international business and commitment to excellence drives our 
                mission to facilitate seamless trade relationships worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Based in Bhuj, Kutch, Gujarat, India, Dilip brings deep understanding of both 
                local market dynamics and global trade requirements, positioning TradeMagnet Global 
                as a trusted bridge between international markets.
              </p>
              <Link
                to="/contact"
                className="bg-navy-600 hover:bg-navy-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-8 w-8 text-navy-600" />
                <h2 className="text-2xl font-bold text-navy-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To bridge the gap between international buyers and sellers by providing 
                comprehensive trade facilitation services that ensure reliable, efficient, 
                and profitable business relationships across global markets.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="h-8 w-8 text-navy-600" />
                <h2 className="text-2xl font-bold text-navy-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become the world's most trusted platform for international trade connections, 
                empowering businesses of all sizes to expand their global reach with confidence 
                and achieve sustainable growth in international markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our commitment 
              to excellence in international trade facilitation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="bg-navy-100 p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-navy-200 transition-colors">
                  <value.icon className="h-8 w-8 text-navy-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From inception to our current ready-to-serve status, here's how TradeMagnet Global 
              has evolved to meet the needs of international trade partners.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-navy-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="h-5 w-5 text-navy-600" />
                        <span className="text-sm font-medium text-navy-600">
                          {item.month} {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-navy-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center lg:w-12">
                    <div className="w-4 h-4 bg-navy-600 rounded-full border-4 border-white shadow-md z-10"></div>
                  </div>
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
                Strategically Located in India
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Based in Bhuj, Kutch, Gujarat, India, TradeMagnet Global is positioned at the 
                heart of one of India's most significant trading regions. Gujarat's robust 
                infrastructure and strategic location make it an ideal base for facilitating 
                international trade connections.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our location provides us with deep insights into both domestic and international 
                market dynamics, enabling us to serve as an effective bridge between global 
                trading partners.
              </p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-navy-600" />
                  <span>Bhuj, Kutch, Gujarat, India – 370001</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Modern business district and commercial area in India"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Global Trade Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in building the future of international trade. Let TradeMagnet Global 
            be your trusted partner in connecting with verified global trade opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-flex items-center justify-center"
            >
              Connect With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="border border-white hover:bg-white hover:text-navy-900 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-flex items-center justify-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;