import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAreaData, generateAreaMetadata, getAllAreaSlugs } from '@/lib/areaData';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';
import { CheckCircle2, Mail, MapPin } from 'lucide-react';

interface AreaPageProps {
  params: {
    area: string;
  };
}

export async function generateStaticParams() {
  const areas = getAllAreaSlugs();
  return areas.map((area) => ({
    area: area,
  }));
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  return generateAreaMetadata(params.area);
}

export default function AreaPage({ params }: AreaPageProps) {
  const areaData = getAreaData(params.area);

  if (!areaData) {
    notFound();
  }

  const areaName = params.area.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Cleaning Services in {areaName}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {areaData.intro}
          </p>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection delay={0.2} className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Cleaning Services in {areaName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {areaData.services.map((service, index) => (
                <AnimatedCard key={index} delay={index * 0.05} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Why Choose Us Section */}
        <AnimatedSection delay={0.3} className="mb-16">
          <div className="bg-primary-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Why Choose Kupennia Cleaning in {areaName}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areaData.whyChoose.map((reason, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="text-center">
                  <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">{reason}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Trust Signals */}
        <AnimatedSection delay={0.4} className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {areaData.trustSignals.map((signal, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="text-center p-4 bg-white rounded-lg shadow-md">
                <p className="text-sm font-semibold text-gray-900">{signal}</p>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedSection>

        {/* Testimonial */}
        {areaData.testimonial && (
          <AnimatedSection delay={0.5} className="mb-16">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-8 md:p-12">
              <blockquote className="text-xl md:text-2xl font-medium mb-4 italic">
                &ldquo;{areaData.testimonial.quote}&rdquo;
              </blockquote>
              <p className="text-primary-100">— {areaData.testimonial.name}</p>
            </div>
          </AnimatedSection>
        )}

        {/* FAQ Section */}
        {areaData.faq && areaData.faq.length > 0 && (
          <AnimatedSection delay={0.6} className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {areaData.faq.map((faq, index) => (
                  <AnimatedCard key={index} delay={index * 0.1}>
                    <div className="border-l-4 border-primary-600 pl-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {faq.q}
                      </h3>
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Internal Links */}
        {areaData.internalLinks && areaData.internalLinks.length > 0 && (
          <AnimatedSection delay={0.7} className="mb-16">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Related Services
              </h3>
              <div className="flex flex-wrap gap-3">
                {areaData.internalLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Nearby Areas */}
        {areaData.nearbyAreas && areaData.nearbyAreas.length > 0 && (
          <AnimatedSection delay={0.8} className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                We Also Serve These Nearby Areas
              </h3>
              <div className="flex flex-wrap gap-3">
                {areaData.nearbyAreas.map((area, index) => (
                  <Link
                    key={index}
                    href={area.href}
                    className="text-primary-600 hover:text-primary-700 underline"
                  >
                    {area.label}
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* CTA Section */}
        <AnimatedSection delay={0.9}>
          <div className="text-center bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started in {areaName}?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Contact us today for a free, no-obligation quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Request Free Quote
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

