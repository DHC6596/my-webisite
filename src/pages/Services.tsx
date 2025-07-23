import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Shield, 
  FileText, 
  Truck, 
  BarChart3, 
  HeadphonesIcon, 
  Globe,
  CheckCircle,
  ArrowRight 
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier & Buyer Sourcing',
      description: 'Connect with verified suppliers and buyers across global markets through our extensive network.',
      features: [
        'Global supplier database access',
        'Buyer-seller matching services',
        'Market opportunity identification',
        'Competitive supplier comparison'
      ]
    },
    {
      icon: Shield,
      title: 'Verification & Due Diligence',
      description: 'Comprehensive verification processes to ensure reliable and trustworthy business partnerships.',
      features: [
        'Company registration verification',
        'Financial stability assessment',
        'References and track record check',
        'Compliance and certification review'
      ]
    },
    {
      icon: FileText,
      title: 'Trade Documentation',
      description: 'Complete documentation support for smooth international trade operations.',
      features: [
        'Export-import documentation',
        'Customs clearance support',
        'Certificate of origin assistance',
        'Invoice and shipping documentation'
      ]
    },
    {
      icon: Truck,
      title: 'Logistics Coordination',
      description: 'End-to-end logistics management for efficient and cost-effective shipping solutions.',
      features: [
        'Shipping method optimization',
        'Freight forwarding coordination',
        'Insurance and risk management',
        'Delivery tracking and updates'
      ]
    },
    {
      icon: BarChart3,
      title: 'Market Research & Analysis',
      description: 'In-depth market intelligence to make informed business decisions in global markets.',
      features: [
        'Industry trend analysis',
        'Competitor landscape mapping',
        'Price benchmarking studies',
        'Regulatory environment updates'
      ]
    },
    {
      icon: HeadphonesIcon,
      title: 'Ongoing Support & Management',
      description: 'Continuous support throughout your trade relationships to ensure long-term success.',
      features: [
        'Relationship management support',
        'Dispute resolution assistance',
        'Performance monitoring',
        '24/7 customer support availability'
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We understand your specific trade requirements and business objectives.'
    },
    {
      step: '02',
      title: 'Market Research',
      description: 'Comprehensive analysis of target markets and potential trading partners.'
    },
    {
      step: '03',
      title: 'Partner Identification',
      description: 'Sourcing and verification of suitable suppliers or buyers for your needs.'
    },
    {
      step: '04',
      title: 'Documentation & Compliance',
      description: 'Complete handling of all trade documentation and regulatory requirements.'
    },
    {
      step: '05',
      title: 'Transaction Support',
      description: 'End-to-end support throughout the entire trade transaction process.'
    },
    {
      step: '06',
      title: 'Ongoing Partnership',
      description: 'Continuous support to maintain and grow your international trade relationships.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Comprehensive Trade Facilitation Services
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              From supplier sourcing to logistics coordination, we provide end-to-end support 
              for your international trade operations with expertise and reliability.
            </p>
            <Link
              to="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a complete suite of trade facilitation services designed to simplify 
              and optimize your international business operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-navy-100 p-3 rounded-lg flex-shrink-0">
                    <service.icon className="h-6 w-6 text-navy-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-navy-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure successful outcomes for every 
              international trade partnership we facilitate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl font-bold text-navy-600 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Streamline Your Global Trade?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our experienced team handle the complexities of international trade 
                while you focus on growing your business. Contact us today to discuss 
                your specific requirements.
              </p>
              <div className="flex items-center space-x-4 text-gray-300">
                <Globe className="h-5 w-5" />
                <span>Serving businesses worldwide since 2023</span>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <Link
                to="/contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-flex items-center"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <p className="text-sm text-gray-400 mt-4">
                Free initial consultation • No commitment required
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;