import type { Metadata } from "next";
import { Users, Award, Heart, Target } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";

export const metadata: Metadata = {
  title: "About Us - Kupennia Cleaning Services Harare",
  description: "Learn about Kupennia Cleaning Services - your trusted cleaning partner in Harare, Zimbabwe. Professional, eco-friendly cleaning services with a commitment to excellence and customer satisfaction.",
  keywords: [
    "about cleaning services Harare",
    "cleaning company Harare",
    "professional cleaners Zimbabwe",
    "eco-friendly cleaning Harare",
    "trusted cleaning services",
  ],
  openGraph: {
    title: "About Kupennia Cleaning Services - Your Trusted Cleaning Partner",
    description: "Your trusted cleaning partner in Harare, Zimbabwe. Professional, eco-friendly cleaning services.",
    type: "website",
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our top priority. We go above and beyond to exceed your expectations.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every cleaning task, ensuring consistent quality.",
    },
    {
      icon: Target,
      title: "Reliability",
      description: "You can count on us to be punctual, professional, and consistent in our service delivery.",
    },
    {
      icon: Users,
      title: "Trusted Team",
      description: "Our trained and insured professionals are background-checked and committed to excellence.",
    },
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Kupennia Cleaning Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted cleaning partner in Harare, Zimbabwe
          </p>
        </AnimatedSection>

        {/* Story Section */}
        <AnimatedSection delay={0.2} className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Kupennia Cleaning Services was founded with a simple mission: to provide exceptional cleaning services that make a real difference in the lives of our clients in Harare. We understand that a clean environment is essential for health, productivity, and peace of mind.
              </p>
              <p>
                What started as a small local business has grown into a trusted name in the Harare cleaning industry. We&apos;ve built our reputation on reliability, attention to detail, and a genuine commitment to customer satisfaction.
              </p>
              <p>
                Our team consists of trained professionals who take pride in their work. We use eco-friendly cleaning products that are safe for your family, pets, and the environment, while still delivering powerful cleaning results.
              </p>
              <p>
                Whether you need regular residential cleaning, commercial office maintenance, or specialized deep cleaning services, we&apos;re here to help. We&apos;re proud to serve the Harare community and look forward to making your space shine.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Values Section */}
        <AnimatedSection delay={0.4} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedCard
                  key={index}
                  index={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all"
                >
                  <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 transform transition-transform hover:scale-110 hover:rotate-6">
                    <Icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </AnimatedCard>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Why Choose Us Section */}
        <AnimatedSection delay={0.6} className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose Kupennia Cleaning Services?
          </h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-primary-200 mr-3 text-2xl">✓</span>
                <span><strong>Local Expertise:</strong> We know Harare and understand the unique cleaning needs of the area.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-200 mr-3 text-2xl">✓</span>
                <span><strong>Eco-Friendly Approach:</strong> We use safe, environmentally responsible cleaning products.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-200 mr-3 text-2xl">✓</span>
                <span><strong>Flexible Scheduling:</strong> We work around your schedule, including evenings and weekends.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-200 mr-3 text-2xl">✓</span>
                <span><strong>Fully Insured:</strong> Complete peace of mind with comprehensive insurance coverage.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-200 mr-3 text-2xl">✓</span>
                <span><strong>Satisfaction Guarantee:</strong> We&apos;re not happy unless you&apos;re completely satisfied with our work.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-200 mr-3 text-2xl">✓</span>
                <span><strong>Competitive Pricing:</strong> Quality service at fair, transparent prices.</span>
              </li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

