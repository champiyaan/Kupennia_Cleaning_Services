import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-primary-600 mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. The area or service you requested may not exist.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center justify-center"
              >
                <Search className="w-5 h-5 mr-2" />
                Browse Services
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Popular Pages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <Link href="/services" className="text-primary-600 hover:text-primary-700 transition-colors">
                  → Service Areas
                </Link>
                <Link href="/cleaning-services" className="text-primary-600 hover:text-primary-700 transition-colors">
                  → Our Services
                </Link>
                <Link href="/about" className="text-primary-600 hover:text-primary-700 transition-colors">
                  → About Us
                </Link>
                <Link href="/contact" className="text-primary-600 hover:text-primary-700 transition-colors">
                  → Contact Us
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

