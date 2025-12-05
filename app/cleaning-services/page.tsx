import type { Metadata } from "next";
import { 
  Home, 
  Building2, 
  Sparkles, 
  Car, 
  Droplets,
  Calendar,
  Shield,
  Clock,
  Square,
  Bed,
  Trash2,
  Bug
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";

export const metadata: Metadata = {
  title: "Our Cleaning Services - Deep Cleaning, Office Cleaning, Carpet Cleaning & More | Harare",
  description: "Comprehensive cleaning services throughout Harare, Zimbabwe: Deep cleaning, office cleaning, carpet cleaning, window cleaning, BNB cleaning, mold removal, car washing, bin cleaning, mattress cleaning, residential and commercial cleaning. Serving Glen Lorne, Borrowdale, Mount Pleasant, Highlands, Chisipite, Avondale, Newlands, Tynwald, Pomona, Helensvale, Carrick Creagh and all areas. Professional, eco-friendly, fully insured.",
  keywords: [
    "deep cleaning Harare",
    "office cleaning services",
    "carpet cleaning Harare",
    "window cleaning Zimbabwe",
    "Airbnb cleaning Harare",
    "mold removal services",
    "car washing Harare",
    "bin cleaning services",
    "mattress cleaning",
    "residential cleaning Harare",
    "commercial cleaning Zimbabwe",
    "Glen Lorne cleaning services",
    "Borrowdale cleaning services",
    "Mount Pleasant cleaning",
    "Highlands cleaning services",
    "Chisipite cleaning",
    "Avondale cleaning",
    "Newlands cleaning",
    "Tynwald cleaning",
    "Pomona cleaning",
    "Helensvale cleaning",
    "Carrick Creagh cleaning",
    "Harare cleaning company",
    "best cleaners Harare",
  ],
  openGraph: {
    title: "Our Cleaning Services - Professional Cleaning in Harare",
    description: "Comprehensive cleaning services throughout Harare: Deep cleaning, office cleaning, carpet cleaning, and more. Serving all areas of Harare.",
    type: "website",
    url: "https://kupennia.com/cleaning-services",
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description: "Comprehensive deep cleaning for homes and offices that need extra attention.",
      features: [
        "Complete room-by-room deep clean",
        "Inside appliances cleaning",
        "Baseboards and vents",
        "Light fixtures and ceiling fans",
        "Detailed bathroom sanitization",
        "Carpet and floor deep cleaning",
      ],
      price: "Starting from $80",
    },
    {
      icon: Building2,
      title: "Office Cleaning",
      description: "Professional office and commercial cleaning to keep your business environment pristine.",
      features: [
        "Daily/Weekly office cleaning",
        "Restroom sanitization",
        "Floor care and maintenance",
        "Window and glass cleaning",
        "Trash removal",
        "Desk and workspace cleaning",
      ],
      price: "Custom pricing",
    },
    {
      icon: Droplets,
      title: "Carpet Cleaning",
      description: "Professional carpet and upholstery cleaning services for a fresh, clean home.",
      features: [
        "Steam cleaning",
        "Stain removal",
        "Odor elimination",
        "Protective treatment",
        "Quick drying process",
        "Upholstery cleaning",
      ],
      price: "Starting from $50",
    },
    {
      icon: Bug,
      title: "Mold Removal",
      description: "Safe and effective mold removal services to protect your health and property.",
      features: [
        "Professional mold inspection",
        "Safe removal techniques",
        "Prevention strategies",
        "Air quality improvement",
        "Sanitization and disinfection",
        "Follow-up assessments",
      ],
      price: "Starting from $100",
    },
    {
      icon: Square,
      title: "Window Cleaning",
      description: "Crystal clear window cleaning services for residential and commercial properties.",
      features: [
        "Interior and exterior cleaning",
        "Frame and sill cleaning",
        "Streak-free finish",
        "Hard-to-reach windows",
        "Commercial window cleaning",
        "Regular maintenance programs",
      ],
      price: "Starting from $35",
    },
    {
      icon: Bed,
      title: "BNB Cleaning",
      description: "Professional Airbnb and short-term rental cleaning to ensure guest satisfaction.",
      features: [
        "Turnaround cleaning",
        "Linen and towel service",
        "Kitchen and bathroom sanitization",
        "Restocking essentials",
        "Quality inspection",
        "Flexible scheduling",
      ],
      price: "Starting from $60",
    },
    {
      icon: Bed,
      title: "Mattress Cleaning",
      description: "Deep cleaning for mattresses and bedding to eliminate allergens and odors.",
      features: [
        "Steam cleaning",
        "Allergen removal",
        "Odor elimination",
        "Stain treatment",
        "Sanitization",
        "Protective treatment",
      ],
      price: "Starting from $45",
    },
    {
      icon: Car,
      title: "Car Washing",
      description: "Professional car washing and detailing services to keep your vehicle spotless.",
      features: [
        "Exterior wash and wax",
        "Interior vacuuming",
        "Dashboard cleaning",
        "Tire and rim cleaning",
        "Window cleaning",
        "Full detailing available",
      ],
      price: "Starting from $25",
    },
    {
      icon: Trash2,
      title: "Bin Cleaning",
      description: "Professional bin cleaning and sanitization to eliminate odors and bacteria.",
      features: [
        "Thorough scrubbing",
        "Sanitization and disinfection",
        "Odor elimination",
        "Eco-friendly solutions",
        "Regular maintenance programs",
        "Multiple bin cleaning",
      ],
      price: "Starting from $15",
    },
    {
      icon: Home,
      title: "Residential Cleaning",
      description: "Comprehensive home cleaning services to keep your living space spotless and healthy.",
      features: [
        "Regular weekly/bi-weekly cleaning",
        "Move-in/move-out cleaning",
        "Kitchen and bathroom deep clean",
        "Dusting and vacuuming",
        "Floor mopping",
        "Customized cleaning plans",
      ],
      price: "Starting from $30",
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Professional cleaning services for retail spaces, warehouses, and commercial buildings.",
      features: [
        "Large space cleaning",
        "Restroom sanitization",
        "Floor care and maintenance",
        "Trash removal",
        "Customized cleaning schedules",
        "After-hours service",
      ],
      price: "Custom pricing",
    },
    {
      icon: Calendar,
      title: "One-Time Cleaning",
      description: "Perfect for special events, parties, or when you need a one-time thorough clean.",
      features: [
        "Event preparation cleaning",
        "Post-event cleanup",
        "Spring cleaning",
        "Holiday preparation",
        "Customized service",
      ],
      price: "Starting from $40",
    },
  ];

  const guarantees = [
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete insurance coverage for your peace of mind",
    },
    {
      icon: Clock,
      title: "Punctual Service",
      description: "We arrive on time, every time",
    },
    {
      icon: Sparkles,
      title: "Eco-Friendly",
      description: "Safe, non-toxic cleaning products",
    },
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Cleaning Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional cleaning services in Harare, Zimbabwe. We offer a wide range of cleaning solutions for residential and commercial properties.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedCard
                key={index}
                index={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all p-6 border border-gray-100"
              >
                <Link href="/contact" className="block">
                  <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 transform transition-transform hover:scale-110 hover:rotate-6">
                    <Icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <span className="text-primary-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-primary-600 font-semibold">{service.price}</p>
                  </div>
                </Link>
              </AnimatedCard>
            );
          })}
        </div>

        {/* Guarantees Section */}
        <AnimatedSection className="bg-primary-50 rounded-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon;
              return (
                <AnimatedCard
                  key={index}
                  index={index}
                  className="text-center"
                >
                  <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform hover:scale-110 hover:rotate-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {guarantee.title}
                  </h3>
                  <p className="text-gray-600">{guarantee.description}</p>
                </AnimatedCard>
              );
            })}
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="text-center bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us today for a free, no-obligation quote
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Request Free Quote
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
}

