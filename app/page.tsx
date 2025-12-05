import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { 
  Sparkles, 
  Home as HomeIcon, 
  Building2, 
  Shield, 
  Clock, 
  Users,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Droplets,
  Square,
  Bed,
  Car
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";
import { getAllAreaSlugs } from "@/lib/areaData";

export const metadata: Metadata = {
  title: "Professional Cleaning Services in Harare, Zimbabwe | Kupennia Cleaning",
  description: "Kupennia Cleaning Services offers professional residential and commercial cleaning throughout Harare, Zimbabwe. Serving Glen Lorne, Borrowdale, Mount Pleasant, Highlands, Chisipite, Avondale, Newlands, Tynwald, Pomona, Helensvale, Carrick Creagh and all areas. Deep cleaning, office cleaning, carpet cleaning, window cleaning, BNB cleaning, mold removal, car washing, and more. Eco-friendly solutions. Fully insured. Free quotes available.",
  keywords: [
    "cleaning services Harare",
    "professional cleaners Harare",
    "residential cleaning Zimbabwe",
    "commercial cleaning Harare",
    "office cleaning Harare",
    "deep cleaning services",
    "carpet cleaning Harare",
    "window cleaning Zimbabwe",
    "Airbnb cleaning Harare",
    "mold removal Harare",
    "car washing Harare",
    "bin cleaning Harare",
    "Glen Lorne cleaning",
    "Borrowdale cleaning",
    "Mount Pleasant cleaning",
    "Highlands cleaning",
    "Chisipite cleaning",
    "Avondale cleaning",
    "Newlands cleaning",
    "Tynwald cleaning",
    "Pomona cleaning",
    "Helensvale cleaning",
    "Carrick Creagh cleaning",
    "Harare cleaners",
    "best cleaning service Harare",
    "top cleaners Harare",
    "affordable cleaning Harare",
    "reliable cleaners Harare",
  ],
  openGraph: {
    title: "Professional Cleaning Services in Harare, Zimbabwe | Kupennia Cleaning",
    description: "Trusted, reliable, and eco-friendly cleaning solutions for your home and business throughout Harare. Serving all areas including Glen Lorne, Borrowdale, Mount Pleasant, Highlands, and more.",
    type: "website",
    locale: "en_ZW",
    url: "https://kupennia.com",
  },
};

export default function Home() {
  // Get popular areas for location-specific content
  const popularAreas = [
    { slug: "glen-lorne", name: "Glen Lorne" },
    { slug: "borrowdale", name: "Borrowdale" },
    { slug: "mount-pleasant", name: "Mount Pleasant" },
    { slug: "highlands", name: "Highlands" },
    { slug: "chisipite", name: "Chisipite" },
    { slug: "avondale", name: "Avondale" },
    { slug: "newlands", name: "Newlands" },
    { slug: "tynwald", name: "Tynwald" },
  ];
// array of areas in harare
  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What areas in Harare do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide professional cleaning services throughout Harare, Zimbabwe, including Glen Lorne, Borrowdale, Mount Pleasant, Highlands, Chisipite, Avondale, Newlands, Tynwald, Pomona, Helensvale, Carrick Creagh, and all surrounding areas. Contact us to confirm service availability in your specific location."
        }
      },
      {
        "@type": "Question",
        name: "What cleaning services do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer comprehensive cleaning services including deep cleaning, office cleaning, carpet cleaning, window cleaning, BNB cleaning, mold removal, car washing, bin cleaning, mattress cleaning, residential cleaning, commercial cleaning, and one-time cleaning services. All services use eco-friendly products and are fully insured."
        }
      },
      {
        "@type": "Question",
        name: "How much do your cleaning services cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our pricing varies based on the type of service, property size, and frequency. We offer competitive rates starting from $15 for bin cleaning, $25 for car washing, $30 for residential cleaning, and custom pricing for commercial and office cleaning. Contact us for a free, no-obligation quote tailored to your specific needs."
        }
      },
      {
        "@type": "Question",
        name: "Are your cleaning products eco-friendly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we use eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the environment. All our cleaning solutions are environmentally responsible while maintaining the highest standards of cleanliness and effectiveness."
        }
      },
      {
        "@type": "Question",
        name: "Are you insured?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Kupennia Cleaning Services is fully insured, providing complete peace of mind and protection for your property. We carry comprehensive insurance coverage for all our cleaning services."
        }
      },
      {
        "@type": "Question",
        name: "Do you offer same-day cleaning services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer flexible scheduling including same-day services when available. We work around your schedule, including evenings and weekends, to accommodate your cleaning needs. Contact us to check availability for your preferred date and time."
        }
      }
    ]
  };

  const services = [
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description: "Comprehensive deep cleaning for homes and offices that need extra attention.",
    },
    {
      icon: Building2,
      title: "Office Cleaning",
      description: "Professional office and commercial space cleaning to keep your business environment pristine.",
    },
    {
      icon: Droplets,
      title: "Carpet Cleaning",
      description: "Professional carpet and upholstery cleaning services for a fresh, clean home.",
    },
    {
      icon: Square,
      title: "Window Cleaning",
      description: "Crystal clear window cleaning services for residential and commercial properties.",
    },
    {
      icon: Bed,
      title: "BNB Cleaning",
      description: "Professional Airbnb and short-term rental cleaning to ensure guest satisfaction.",
    },
    {
      icon: Car,
      title: "Car Washing",
      description: "Professional car washing and detailing services to keep your vehicle spotless.",
    },
    {
      icon: HomeIcon,
      title: "Residential Cleaning",
      description: "Thorough cleaning for your home, including regular maintenance and move-in/out services.",
    },
    {
      icon: Shield,
      title: "Eco-Friendly Solutions",
      description: "Safe, environmentally friendly cleaning products that protect your family and the environment.",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "We work around your schedule, including evenings and weekends.",
    },
    {
      icon: Users,
      title: "Trained Professionals",
      description: "Our team is fully trained, insured, and background-checked.",
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete peace of mind with comprehensive insurance coverage.",
    },
    {
      icon: CheckCircle2,
      title: "Satisfaction Guaranteed",
      description: "100% satisfaction guarantee or we'll return to fix it.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* FAQ Schema for SEO */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Cleaning Services in Harare
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Trusted, reliable, and eco-friendly cleaning solutions for your home and business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Free Quote
              </Link>
              <Link
                href="/cleaning-services"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all transform hover:scale-105"
              >
                Our Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive cleaning solutions tailored to your needs
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedCard
                  key={index}
                  index={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
                >
                  <Link href="/contact" className="block">
                    <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transform transition-transform hover:scale-110">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </Link>
                </AnimatedCard>
              );
            })}
          </div>
          <AnimatedSection delay={0.8} className="text-center mt-12">
            <Link
              href="/cleaning-services"
              className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center gap-2"
            >
              View All Services →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Kupennia Cleaning Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference of professional, reliable cleaning services
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedCard
                  key={index}
                  index={index}
                  className="text-center p-6"
                >
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform hover:scale-110 hover:rotate-6">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving All Areas of Harare
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We provide professional cleaning services throughout Harare, Zimbabwe. From upscale suburbs to residential neighborhoods, we&apos;re here to serve you.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-8">
            {popularAreas.map((area, index) => (
              <AnimatedCard
                key={area.slug}
                index={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-4 border border-gray-100"
              >
                <Link href={`/services/${area.slug}`} className="block text-center">
                  <MapPin className="w-5 h-5 text-primary-600 mx-auto mb-2" />
                  <h3 className="text-sm font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                    {area.name}
                  </h3>
                </Link>
              </AnimatedCard>
            ))}
          </div>
          <AnimatedSection delay={0.3} className="text-center">
            <Link
              href="/services"
              className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center gap-2"
            >
              View All Service Areas →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Clean Like Never Before?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Contact us today for a free quote and let us handle your cleaning needs throughout Harare
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Free Quote
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
