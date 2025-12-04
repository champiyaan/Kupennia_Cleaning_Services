import { Metadata } from 'next';

export interface ServiceConfig {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  price: string;
  features: string[];
  keywords: string[];
}

export const SERVICES: Record<string, ServiceConfig> = {
  'bnb-cleaning': {
    slug: 'bnb-cleaning',
    title: 'BNB Cleaning',
    description: 'Professional Airbnb and short-term rental cleaning to ensure guest satisfaction.',
    shortDescription: 'Professional Airbnb and short-term rental cleaning services.',
    price: 'Starting from $60',
    features: [
      'Turnaround cleaning',
      'Linen and towel service',
      'Kitchen and bathroom sanitization',
      'Restocking essentials',
      'Quality inspection',
      'Flexible scheduling',
    ],
    keywords: [
      'bnb cleaning',
      'airbnb cleaning',
      'short term rental cleaning',
      'turnover cleaning',
      'guest house cleaning',
    ],
  },
  'deep-cleaning': {
    slug: 'deep-cleaning',
    title: 'Deep Cleaning',
    description: 'Comprehensive deep cleaning for homes and offices that need extra attention.',
    shortDescription: 'Thorough deep cleaning services for residential and commercial properties.',
    price: 'Starting from $80',
    features: [
      'Complete room-by-room deep clean',
      'Inside appliances cleaning',
      'Baseboards and vents',
      'Light fixtures and ceiling fans',
      'Detailed bathroom sanitization',
      'Carpet and floor deep cleaning',
    ],
    keywords: [
      'deep cleaning',
      'deep clean',
      'thorough cleaning',
      'comprehensive cleaning',
      'intensive cleaning',
    ],
  },
  'office-cleaning': {
    slug: 'office-cleaning',
    title: 'Office Cleaning',
    description: 'Professional office and commercial cleaning to keep your business environment pristine.',
    shortDescription: 'Professional office and commercial cleaning services.',
    price: 'Custom pricing',
    features: [
      'Daily/Weekly office cleaning',
      'Restroom sanitization',
      'Floor care and maintenance',
      'Window and glass cleaning',
      'Trash removal',
      'Desk and workspace cleaning',
    ],
    keywords: [
      'office cleaning',
      'commercial cleaning',
      'business cleaning',
      'workplace cleaning',
      'corporate cleaning',
    ],
  },
  'carpet-cleaning': {
    slug: 'carpet-cleaning',
    title: 'Carpet Cleaning',
    description: 'Professional carpet and upholstery cleaning services for a fresh, clean home.',
    shortDescription: 'Professional carpet and upholstery cleaning services.',
    price: 'Starting from $50',
    features: [
      'Steam cleaning',
      'Stain removal',
      'Odor elimination',
      'Protective treatment',
      'Quick drying process',
      'Upholstery cleaning',
    ],
    keywords: [
      'carpet cleaning',
      'rug cleaning',
      'upholstery cleaning',
      'steam cleaning',
      'carpet steam cleaning',
    ],
  },
  'mold-removal': {
    slug: 'mold-removal',
    title: 'Mold Removal',
    description: 'Safe and effective mold removal services to protect your health and property.',
    shortDescription: 'Safe and effective mold removal and remediation services.',
    price: 'Starting from $100',
    features: [
      'Professional mold inspection',
      'Safe removal techniques',
      'Prevention strategies',
      'Air quality improvement',
      'Sanitization and disinfection',
      'Follow-up assessments',
    ],
    keywords: [
      'mold removal',
      'mold remediation',
      'mold cleaning',
      'mold treatment',
      'mold prevention',
    ],
  },
  'window-cleaning': {
    slug: 'window-cleaning',
    title: 'Window Cleaning',
    description: 'Crystal clear window cleaning services for residential and commercial properties.',
    shortDescription: 'Professional window and glass cleaning services.',
    price: 'Starting from $35',
    features: [
      'Interior and exterior cleaning',
      'Frame and sill cleaning',
      'Streak-free finish',
      'Hard-to-reach windows',
      'Commercial window cleaning',
      'Regular maintenance programs',
    ],
    keywords: [
      'window cleaning',
      'glass cleaning',
      'window washing',
      'commercial window cleaning',
      'residential window cleaning',
    ],
  },
  'mattress-cleaning': {
    slug: 'mattress-cleaning',
    title: 'Mattress Cleaning',
    description: 'Deep cleaning for mattresses and bedding to eliminate allergens and odors.',
    shortDescription: 'Professional mattress and bedding cleaning services.',
    price: 'Starting from $45',
    features: [
      'Steam cleaning',
      'Allergen removal',
      'Odor elimination',
      'Stain treatment',
      'Sanitization',
      'Protective treatment',
    ],
    keywords: [
      'mattress cleaning',
      'bed cleaning',
      'mattress steam cleaning',
      'bedding cleaning',
      'mattress sanitization',
    ],
  },
  'car-washing': {
    slug: 'car-washing',
    title: 'Car Washing',
    description: 'Professional car washing and detailing services to keep your vehicle spotless.',
    shortDescription: 'Professional car washing and detailing services.',
    price: 'Starting from $25',
    features: [
      'Exterior wash and wax',
      'Interior vacuuming',
      'Dashboard cleaning',
      'Tire and rim cleaning',
      'Window cleaning',
      'Full detailing available',
    ],
    keywords: [
      'car washing',
      'car cleaning',
      'car detailing',
      'vehicle cleaning',
      'auto detailing',
    ],
  },
  'bin-cleaning': {
    slug: 'bin-cleaning',
    title: 'Bin Cleaning',
    description: 'Professional bin and trash can cleaning services to eliminate odors and bacteria.',
    shortDescription: 'Professional bin and trash can cleaning services.',
    price: 'Starting from $15',
    features: [
      'Deep sanitization',
      'Odor elimination',
      'Stain removal',
      'Eco-friendly products',
      'Regular maintenance programs',
      'Commercial bin cleaning',
    ],
    keywords: [
      'bin cleaning',
      'trash can cleaning',
      'garbage bin cleaning',
      'wheelie bin cleaning',
      'bin sanitization',
    ],
  },
  'residential-cleaning': {
    slug: 'residential-cleaning',
    title: 'Residential Cleaning',
    description: 'Thorough cleaning for your home, including regular maintenance and move-in/out services.',
    shortDescription: 'Professional residential cleaning services for homes.',
    price: 'Starting from $40',
    features: [
      'Regular maintenance cleaning',
      'Move-in/move-out cleaning',
      'Spring cleaning',
      'Kitchen and bathroom cleaning',
      'Dusting and vacuuming',
      'Floor cleaning',
    ],
    keywords: [
      'residential cleaning',
      'home cleaning',
      'house cleaning',
      'domestic cleaning',
      'regular cleaning',
    ],
  },
  'apartment-complex-cleaning': {
    slug: 'apartment-complex-cleaning',
    title: 'Apartment Complex Cleaning',
    description: 'Professional cleaning services for apartment complexes, including common areas, hallways, and individual units.',
    shortDescription: 'Professional cleaning services for apartment complexes.',
    price: 'Custom pricing',
    features: [
      'Common area cleaning',
      'Hallway and lobby maintenance',
      'Elevator cleaning',
      'Stairwell cleaning',
      'Trash area maintenance',
      'Regular scheduled cleaning',
    ],
    keywords: [
      'apartment complex cleaning',
      'apartment building cleaning',
      'multi-unit cleaning',
      'common area cleaning',
      'apartment maintenance',
    ],
  },
  'boat-cleaning': {
    slug: 'boat-cleaning',
    title: 'Boat Cleaning',
    description: 'Professional boat cleaning and detailing services to keep your vessel in pristine condition.',
    shortDescription: 'Professional boat cleaning and detailing services.',
    price: 'Starting from $100',
    features: [
      'Exterior hull cleaning',
      'Interior cabin cleaning',
      'Deck and cockpit cleaning',
      'Engine compartment cleaning',
      'Waxing and polishing',
      'Teak wood restoration',
    ],
    keywords: [
      'boat cleaning',
      'yacht cleaning',
      'vessel cleaning',
      'marine cleaning',
      'boat detailing',
    ],
  },
  'car-seat-cleaning': {
    slug: 'car-seat-cleaning',
    title: 'Car Seat Cleaning',
    description: 'Deep cleaning and sanitization for car seats to ensure a clean and safe environment.',
    shortDescription: 'Professional car seat cleaning and sanitization services.',
    price: 'Starting from $30',
    features: [
      'Deep steam cleaning',
      'Stain removal',
      'Odor elimination',
      'Sanitization',
      'Fabric protection',
      'Leather conditioning',
    ],
    keywords: [
      'car seat cleaning',
      'vehicle seat cleaning',
      'car seat sanitization',
      'car seat steam cleaning',
      'car seat deep cleaning',
    ],
  },
  'commercial-kitchen-cleaning': {
    slug: 'commercial-kitchen-cleaning',
    title: 'Commercial Kitchen Cleaning',
    description: 'Professional deep cleaning for commercial kitchens to meet health and safety standards.',
    shortDescription: 'Professional commercial kitchen deep cleaning services.',
    price: 'Custom pricing',
    features: [
      'Deep sanitization',
      'Grease removal',
      'Equipment cleaning',
      'Ventilation system cleaning',
      'Floor and wall cleaning',
      'Health code compliance',
    ],
    keywords: [
      'commercial kitchen cleaning',
      'restaurant kitchen cleaning',
      'kitchen deep cleaning',
      'commercial kitchen sanitization',
      'kitchen grease removal',
    ],
  },
  'couch-cleaning': {
    slug: 'couch-cleaning',
    title: 'Couch Cleaning',
    description: 'Professional couch and sofa cleaning services to restore freshness and remove stains.',
    shortDescription: 'Professional couch and sofa cleaning services.',
    price: 'Starting from $45',
    features: [
      'Steam cleaning',
      'Stain removal',
      'Odor elimination',
      'Fabric protection',
      'Leather conditioning',
      'Upholstery sanitization',
    ],
    keywords: [
      'couch cleaning',
      'sofa cleaning',
      'upholstery cleaning',
      'furniture cleaning',
      'couch steam cleaning',
    ],
  },
  'domestic-cleaning': {
    slug: 'domestic-cleaning',
    title: 'Domestic Cleaning',
    description: 'Regular household cleaning services to keep your home clean and comfortable.',
    shortDescription: 'Professional domestic and household cleaning services.',
    price: 'Starting from $35',
    features: [
      'Regular house cleaning',
      'Kitchen and bathroom cleaning',
      'Dusting and vacuuming',
      'Floor mopping',
      'Window cleaning',
      'Laundry assistance',
    ],
    keywords: [
      'domestic cleaning',
      'household cleaning',
      'home cleaning',
      'house cleaning',
      'regular cleaning',
    ],
  },
  'gutter-cleaning': {
    slug: 'gutter-cleaning',
    title: 'Gutter Cleaning',
    description: 'Professional gutter cleaning and maintenance to prevent water damage and blockages.',
    shortDescription: 'Professional gutter cleaning and maintenance services.',
    price: 'Starting from $50',
    features: [
      'Debris removal',
      'Gutter inspection',
      'Downspout cleaning',
      'Gutter repair',
      'Leaf removal',
      'Preventive maintenance',
    ],
    keywords: [
      'gutter cleaning',
      'gutter maintenance',
      'downspout cleaning',
      'gutter repair',
      'roof gutter cleaning',
    ],
  },
  'mobile-car-wash': {
    slug: 'mobile-car-wash',
    title: 'Mobile Car Wash',
    description: 'Convenient mobile car washing services that come to your location.',
    shortDescription: 'Mobile car washing services at your location.',
    price: 'Starting from $25',
    features: [
      'On-site car washing',
      'Exterior wash and wax',
      'Interior vacuuming',
      'Window cleaning',
      'Tire and rim cleaning',
      'Flexible scheduling',
    ],
    keywords: [
      'mobile car wash',
      'car wash at home',
      'on-site car wash',
      'mobile car cleaning',
      'car wash service',
    ],
  },
  'mobile-laundry-washing': {
    slug: 'mobile-laundry-washing',
    title: 'Mobile Laundry Washing',
    description: 'Convenient mobile laundry and washing services that come to your location.',
    shortDescription: 'Mobile laundry and washing services.',
    price: 'Starting from $30',
    features: [
      'Pickup and delivery',
      'Washing and drying',
      'Folding service',
      'Ironing available',
      'Dry cleaning options',
      'Flexible scheduling',
    ],
    keywords: [
      'mobile laundry',
      'laundry service',
      'wash and fold',
      'mobile washing',
      'laundry pickup',
    ],
  },
  'pavement-cleaning': {
    slug: 'pavement-cleaning',
    title: 'Pavement Cleaning',
    description: 'Professional pavement and sidewalk cleaning services to maintain clean walkways.',
    shortDescription: 'Professional pavement and sidewalk cleaning services.',
    price: 'Starting from $40',
    features: [
      'Pressure washing',
      'Stain removal',
      'Gum removal',
      'Oil stain treatment',
      'Sidewalk cleaning',
      'Driveway cleaning',
    ],
    keywords: [
      'pavement cleaning',
      'sidewalk cleaning',
      'driveway cleaning',
      'pavement pressure washing',
      'walkway cleaning',
    ],
  },
  'pressure-washing': {
    slug: 'pressure-washing',
    title: 'Pressure Washing',
    description: 'Professional pressure washing services for buildings, driveways, and outdoor surfaces.',
    shortDescription: 'Professional pressure washing services.',
    price: 'Starting from $60',
    features: [
      'Building exterior cleaning',
      'Driveway cleaning',
      'Deck and patio cleaning',
      'Fence cleaning',
      'Roof cleaning',
      'Equipment cleaning',
    ],
    keywords: [
      'pressure washing',
      'power washing',
      'exterior cleaning',
      'building cleaning',
      'driveway pressure washing',
    ],
  },
  'steam-cleaning': {
    slug: 'steam-cleaning',
    title: 'Steam Cleaning',
    description: 'Deep steam cleaning services for carpets, upholstery, and hard surfaces.',
    shortDescription: 'Professional steam cleaning services.',
    price: 'Starting from $55',
    features: [
      'Carpet steam cleaning',
      'Upholstery steam cleaning',
      'Tile and grout cleaning',
      'Deep sanitization',
      'Stain removal',
      'Odor elimination',
    ],
    keywords: [
      'steam cleaning',
      'carpet steam cleaning',
      'upholstery steam cleaning',
      'deep steam cleaning',
      'sanitization',
    ],
  },
  'upholstery-cleaning': {
    slug: 'upholstery-cleaning',
    title: 'Upholstery Cleaning',
    description: 'Professional upholstery cleaning for furniture, including sofas, chairs, and cushions.',
    shortDescription: 'Professional upholstery cleaning services.',
    price: 'Starting from $50',
    features: [
      'Sofa and chair cleaning',
      'Cushion cleaning',
      'Stain removal',
      'Odor elimination',
      'Fabric protection',
      'Leather conditioning',
    ],
    keywords: [
      'upholstery cleaning',
      'furniture cleaning',
      'sofa cleaning',
      'chair cleaning',
      'fabric cleaning',
    ],
  },
};

export function getAllServiceSlugs(): string[] {
  return Object.keys(SERVICES);
}

export function getServiceData(slug: string): ServiceConfig | null {
  return SERVICES[slug] || null;
}

export function generateServiceMetadata(serviceSlug: string, areaName?: string): Metadata {
  const service = getServiceData(serviceSlug);
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    };
  }

  const title = areaName 
    ? `${service.title} ${areaName} | Professional Cleaning Services Harare`
    : `${service.title} Services Harare | Professional Cleaning`;

  const description = areaName
    ? `Professional ${service.title.toLowerCase()} services in ${areaName}, Harare. ${service.description}`
    : `Professional ${service.title.toLowerCase()} services in Harare, Zimbabwe. ${service.description}`;

  return {
    title,
    description,
    keywords: [
      ...service.keywords.map(k => areaName ? `${k} ${areaName}` : `${k} Harare`),
      ...service.keywords.map(k => areaName ? `${k} ${areaName} Zimbabwe` : `${k} Zimbabwe`),
      'professional cleaning',
      'cleaning services',
      'Harare cleaning',
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      url: areaName 
        ? `https://kupennia.co.zw/services/${serviceSlug}/${areaName.toLowerCase().replace(/\s+/g, '-')}`
        : `https://kupennia.co.zw/services/${serviceSlug}`,
    },
  };
}

