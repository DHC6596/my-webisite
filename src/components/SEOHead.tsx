import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
}

const SEOHead: React.FC = () => {
  const location = useLocation();
  const baseUrl = 'https://trademagnetglobal.com';

  const seoData: Record<string, SEOData> = {
    '/': {
      title: 'TradeMagnet Global – Connecting Importers & Exporters Worldwide',
      description: 'TradeMagnet Global connects international buyers with reliable exporters across multiple industries. Professional trade facilitation services since 2023.',
      keywords: 'global trade facilitation, exporter importer connection, international sourcing, B2B trade services, import export company India',
      canonical: baseUrl,
    },
    '/services': {
      title: 'Our Services – Trade Facilitation for Global Buyers & Sellers | TradeMagnet Global',
      description: 'Comprehensive trade facilitation services including supplier verification, documentation support, and logistics coordination for global importers and exporters.',
      keywords: 'trade facilitation services, supplier verification, import export documentation, global sourcing assistance, logistics support',
      canonical: `${baseUrl}/services`,
    },
    '/industries': {
      title: 'Industries & Products – Global Trade Solutions | TradeMagnet Global',
      description: 'Serving diverse industries worldwide with specialized trade solutions. Connect with verified suppliers and buyers across multiple product categories.',
      keywords: 'global trade industries, product sourcing, international suppliers, export products, industry solutions',
      canonical: `${baseUrl}/industries`,
    },
    '/about': {
      title: 'About TradeMagnet Global – Founded by Dilip Chavda | Our Story',
      description: 'Learn about TradeMagnet Global, founded in November 2023 by Dilip Chavda. Our mission to connect global traders and facilitate international commerce.',
      keywords: 'TradeMagnet Global story, Dilip Chavda founder, international trade company, global business solutions',
      canonical: `${baseUrl}/about`,
    },
    '/contact': {
      title: 'Contact Us – Get Started with Global Trade | TradeMagnet Global',
      description: 'Contact TradeMagnet Global for international trade facilitation services. Located in Bhuj, Gujarat, India. Call +91 6356590405 or email us.',
      keywords: 'contact TradeMagnet Global, trade facilitation inquiry, international business contact, Bhuj Gujarat India',
      canonical: `${baseUrl}/contact`,
    },
  };

  const currentSEO = seoData[location.pathname] || seoData['/'];

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'TradeMagnet Global',
    'description': 'Connecting international buyers with reliable exporters across multiple industries',
    'url': baseUrl,
    'logo': `${baseUrl}/logo.png`,
    'foundingDate': '2023-11-01',
    'founder': {
      '@type': 'Person',
      'name': 'Dilip Chavda'
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Bhuj, Kutch',
      'addressLocality': 'Gujarat',
      'addressCountry': 'India',
      'postalCode': '370001'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+91-6356590405',
      'email': 'trademagnetglobal@gmail.com',
      'contactType': 'Customer Service'
    }
  };

  return (
    <Helmet>
      <title>{currentSEO.title}</title>
      <meta name="description" content={currentSEO.description} />
      <meta name="keywords" content={currentSEO.keywords} />
      <link rel="canonical" href={currentSEO.canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentSEO.canonical} />
      <meta property="og:title" content={currentSEO.title} />
      <meta property="og:description" content={currentSEO.description} />
      <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentSEO.canonical} />
      <meta property="twitter:title" content={currentSEO.title} />
      <meta property="twitter:description" content={currentSEO.description} />
      <meta property="twitter:image" content={`${baseUrl}/og-image.jpg`} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="TradeMagnet Global" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default SEOHead;