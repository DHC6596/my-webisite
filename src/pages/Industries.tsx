import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Shirt, 
  Wrench, 
  Leaf, 
  Car, 
  Home, 
  Smartphone,
  Heart,
  ArrowRight,
  TrendingUp 
} from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: Zap,
      name: 'Electronics & Technology',
      description: 'Consumer electronics, components, and technology products',
      products: ['Consumer Electronics', 'Computer Components', 'Mobile Accessories', 'Electronic Components'],
      growth: '+15%'
    },
    {
      icon: Shirt,
      name: 'Textiles & Apparel',
      description: 'Fashion, garments, fabrics, and textile products',
      products: ['Ready-made Garments', 'Textile Fabrics', 'Fashion Accessories', 'Home Textiles'],
      growth: '+12%'
    },
    {
      icon: Wrench,
      name: 'Industrial & Manufacturing',
      description: 'Machinery, tools, and industrial equipment',
      products: ['Industrial Machinery', 'Manufacturing Tools', 'Safety Equipment', 'Raw Materials'],
      growth: '+18%'
    },
    {
      icon: Leaf,
      name: 'Agriculture & Food',
      description: 'Agricultural products, food items, and organic goods',
      products: ['Fresh Produce', 'Processed Foods', 'Organic Products', 'Agricultural Equipment'],
      growth: '+10%'
    },
    {
      icon: Car,
      name: 'Automotive & Parts',
      description: 'Vehicles, spare parts, and automotive accessories',
      products: ['Automotive Parts', 'Vehicle Accessories', 'Maintenance Equipment', 'Safety Components'],
      growth: '+14%'
    },
    {
      icon: Home,
      name: 'Home & Furniture',
      description: 'Furniture, home decor, and household products',
      products: ['Furniture Sets', 'Home Decor', 'Kitchen Equipment', 'Garden Supplies'],
      growth: '+8%'
    },
    {
      icon: Smartphone,
      name: 'Telecommunications',
      description: 'Communication equipment and networking solutions',
      products: ['Network Equipment', 'Communication Devices', 'Fiber Optics', 'Wireless Solutions'],
      growth: '+20%'
    },
    {
      icon: Heart,
      name: 'Healthcare & Medical',
      description: 'Medical equipment, pharmaceuticals, and healthcare products',
      products: ['Medical Devices', 'Pharmaceutical Products', 'Healthcare Equipment', 'Diagnostic Tools'],
      growth: '+16%'
    }
  ];

  const tradingRegions = [
    {
      region: 'Asia-Pacific',
      countries: ['China', 'India', 'Japan', 'South Korea', 'Thailand', 'Vietnam'],
      specialties: ['Electronics', 'Textiles', 'Manufacturing']
    },
    {
      region: 'Europe',
      countries: ['Germany', 'Italy', 'United Kingdom', 'France', 'Netherlands'],
      specialties: ['Automotive', 'Industrial', 'Technology']
    },
    {
      region: 'North America',
      countries: ['United States', 'Canada', 'Mexico'],
      specialties: ['Technology', 'Healthcare', 'Agriculture']
    },
    {
      region: 'Middle East & Africa',
      countries: ['UAE', 'Saudi Arabia', 'South Africa', 'Turkey'],
      specialties: ['Energy', 'Construction', 'Chemicals']
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Industries & Products We Serve
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Connecting businesses across diverse industries with specialized trade solutions 
              tailored to each sector's unique requirements and market dynamics.
            </p>
            <Link
              to="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-flex items-center"
            >
              Explore Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Key Industry Sectors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in facilitating trade across major industry sectors, 
              providing expertise and connections for sustainable business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all group hover:border-navy-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-navy-100 p-3 rounded-lg group-hover:bg-navy-200 transition-colors">
                    <industry.icon className="h-6 w-6 text-navy-600" />
                  </div>
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    {industry.growth}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{industry.description}</p>
                <div className="space-y-1">
                  {industry.products.map((product, productIndex) => (
                    <div key={productIndex} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                      {product}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Regions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Global Trading Regions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our extensive network spans major trading regions worldwide, 
              connecting you with the right partners in the right markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tradingRegions.map((region, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-navy-900 mb-4">{region.region}</h3>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Key Countries:</h4>
                  <div className="flex flex-wrap gap-1">
                    {region.countries.map((country, countryIndex) => (
                      <span
                        key={countryIndex}
                        className="text-xs bg-navy-50 text-navy-700 px-2 py-1 rounded"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {region.specialties.map((specialty, specialtyIndex) => (
                      <span
                        key={specialtyIndex}
                        className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900 text-white rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Growing Global Trade Opportunities
              </h2>
              <p className="text-xl text-gray-300">
                The international trade landscape continues to expand, creating new opportunities 
                for businesses ready to explore global markets.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">8+</div>
                <div className="text-gray-300">Industry Sectors</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-300">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Global Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
            Don't See Your Industry Listed?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We work across many more industries and product categories. 
            Contact us to discuss your specific trade requirements and discover new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-flex items-center justify-center"
            >
              Discuss Your Needs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="border border-navy-600 hover:bg-navy-600 hover:text-white text-navy-600 px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-flex items-center justify-center"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;