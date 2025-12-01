import { Metadata } from 'next';
import Link from 'next/link';
import { getAllAreaSlugs, getAreaData } from '@/lib/areaData';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';
import { MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Service Areas | Cleaning Services Throughout Harare',
  description: 'Kupennia Cleaning Services provides professional cleaning services throughout Harare, Zimbabwe. We serve Avondale, Borrowdale, Mount Pleasant, Highlands, Greendale, Eastlea, Belvedere, Mbare, Highfield, Kambuzuma, Chitungwiza, Epworth, Norton, Ruwa, and more.',
  keywords: [
    'cleaning services Harare areas',
    'Harare suburbs cleaning',
    'Avondale cleaning',
    'Borrowdale cleaning',
    'Mount Pleasant cleaning',
    'Highlands cleaning',
    'Greendale cleaning',
    'Eastlea cleaning',
    'Belvedere cleaning',
    'Mbare cleaning',
    'Highfield cleaning',
    'Kambuzuma cleaning',
    'Chitungwiza cleaning',
    'Epworth cleaning',
    'Norton cleaning',
    'Ruwa cleaning',
  ],
  openGraph: {
    title: 'Service Areas | Cleaning Services Throughout Harare',
    description: 'Kupennia Cleaning Services provides professional cleaning services throughout Harare, Zimbabwe.',
    url: 'https://kupennia.com/areas',
    type: 'website',
  },
};

export default function AreasPage() {
  const areaSlugs = getAllAreaSlugs();
  
  // Get area data and format area names
  const areas = areaSlugs.map(slug => {
    const data = getAreaData(slug);
    const name = slug.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    return {
      slug,
      name,
      data,
    };
  });

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Service Areas in Harare
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kupennia Cleaning Services proudly serves homes and businesses throughout Harare, Zimbabwe. 
            Click on any area below to learn more about our services in that location.
          </p>
        </AnimatedSection>

        {/* Areas Grid */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {areas.map((area, index) => (
              <AnimatedCard key={area.slug} delay={index * 0.05}>
                <Link
                  href={`/areas/${area.slug}`}
                  className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 border border-gray-100 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {area.name}
                  </h2>
                  {area.data && (
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {area.data.intro}
                    </p>
                  )}
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedSection>

        {/* Info Section */}
        <AnimatedSection delay={0.3}>
          <div className="bg-primary-50 rounded-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
              Don&apos;t See Your Area?
            </h2>
            <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-6">
              We&apos;re constantly expanding our service areas throughout Harare and surrounding regions. 
              Even if your area isn&apos;t listed, we may still be able to serve you. Contact us to find out!
            </p>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Contact Us to Check Availability
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={0.4}>
          <div className="text-center bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Contact us today for a free, no-obligation quote
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Request Free Quote
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

