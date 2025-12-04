import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { getServiceData, generateServiceMetadata } from '@/lib/serviceData';
import { getAreaData, getAllAreaSlugs } from '@/lib/areaData';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';
import { MapPin, CheckCircle2, Phone, Mail } from 'lucide-react';

export async function generateStaticParams() {
  const areaSlugs = getAllAreaSlugs();
  
  return areaSlugs.map(area => ({
    area,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ area: string }> 
}): Promise<Metadata> {
  const { area } = await params;
  const serviceData = getServiceData('mobile-car-wash');
  const areaData = getAreaData(area);
  
  if (!serviceData || !areaData) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.',
    };
  }

  const areaName = area.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const title = `${serviceData.title} ${areaName} | Professional Cleaning Services Harare`;
  const description = `Professional ${serviceData.title.toLowerCase()} services in ${areaName}, Harare. ${serviceData.description} Trusted by ${areaName} residents and businesses.`;

  return {
    title,
    description,
    keywords: [
      ...serviceData.keywords.map(k => `${k} ${areaName}`),
      ...serviceData.keywords.map(k => `${k} ${areaName} Harare`),
      ...serviceData.keywords.map(k => `${k} ${areaName} Zimbabwe`),
      `cleaning services ${areaName}`,
      `professional cleaning ${areaName}`,
      `Harare cleaning services`,
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://kupennia.com/services/mobile-car-wash/${area}`,
    },
  };
}

export default async function BnbCleaningAreaPage({ 
  params 
}: { 
  params: Promise<{ area: string }> 
}) {
  const { area } = await params;
  const serviceData = getServiceData('mobile-car-wash');
  const areaData = getAreaData(area);

  if (!serviceData || !areaData) {
    notFound();
  }

  const areaName = area.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <Script
        id="service-area-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Kupennia Cleaning - ${serviceData.title} ${areaName}`,
            "description": `Professional ${serviceData.title.toLowerCase()} services in ${areaName}, Harare.`,
            "url": `https://kupennia.com/services/mobile-car-wash/${area}`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": areaName,
              "addressRegion": "Harare",
              "addressCountry": "ZW"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-17.8292",
              "longitude": "31.0522"
            },
            "areaServed": {
              "@type": "City",
              "name": areaName
            },
            "priceRange": serviceData.price,
            "serviceType": serviceData.title,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "50"
            }
          })
        }}
      />

      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://kupennia.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://kupennia.com/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": serviceData.title,
                "item": "https://kupennia.com/services/mobile-car-wash"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": `${serviceData.title} ${areaName}`,
                "item": `https://kupennia.com/services/mobile-car-wash/${area}`
              }
            ]
          })
        }}
      />

      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8 text-sm text-gray-600">
            <ol className="flex flex-wrap items-center space-x-2">
              <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
              <li>/</li>
              <li><Link href="/services" className="hover:text-primary-600">Services</Link></li>
              <li>/</li>
              <li><Link href="/services/mobile-car-wash" className="hover:text-primary-600">{serviceData.title}</Link></li>
              <li>/</li>
              <li className="text-gray-900">{areaName}</li>
            </ol>
          </nav>

          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {serviceData.title} Services in {areaName}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              {serviceData.description} Trusted by {areaName} residents and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Quote
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </div>
          </AnimatedSection>

          {/* Service Features */}
          <AnimatedSection delay={0.2} className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our {serviceData.title} Services in {areaName}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {serviceData.features.map((feature, index) => (
                  <AnimatedCard key={index} delay={index * 0.05} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Why Choose Us */}
          <AnimatedSection delay={0.3} className="mb-16">
            <div className="bg-primary-50 rounded-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our {serviceData.title} Services in {areaName}?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {areaData.whyChoose.map((reason, index) => (
                  <AnimatedCard key={index} delay={index * 0.1} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Pricing */}
          <AnimatedSection delay={0.4} className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {serviceData.title} Pricing in {areaName}
              </h2>
              <p className="text-2xl font-semibold text-primary-600 mb-6">
                {serviceData.price}
              </p>
              <p className="text-gray-600 mb-6">
                Contact us for a free, no-obligation quote tailored to your specific needs.
              </p>
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
              >
                Request Free Quote
              </Link>
            </div>
          </AnimatedSection>

          {/* Nearby Areas */}
          {areaData.nearbyAreas && areaData.nearbyAreas.length > 0 && (
            <AnimatedSection delay={0.5} className="mb-16">
              <div className="bg-gray-50 rounded-lg p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  We Also Serve Nearby Areas
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {areaData.nearbyAreas.map((nearbyArea, index) => (
                    <Link
                      key={index}
                      href={`/services/mobile-car-wash/${nearbyArea.href.split('/').pop()}`}
                      className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      {nearbyArea.label}
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* CTA Section */}
          <AnimatedSection delay={0.6}>
            <div className="text-center bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 text-primary-100">
                Contact us today for a free, no-obligation quote for {serviceData.title.toLowerCase()} services in {areaName}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

