import { Metadata } from 'next';

// Helper function to generate area content
function createAreaContent(
  name: string,
  intro: string,
  nearbyAreas: string[] = []
): {
  intro: string,
  services: string[],
  whyChoose: string[],
  trustSignals: string[],
  testimonial: { quote: string, name: string },
  faq: { q: string, a: string }[],
  meta: { title: string, description: string },
  internalLinks: { href: string, label: string }[],
  nearbyAreas: { href: string, label: string }[],
} {
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  const displayName = name.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return {
    intro,
    services: [
      'Home & apartment cleaning',
      'Office & commercial cleaning',
      'Event cleaning & after-party cleanup',
      'Mold removal & remediation',
      'Deep cleaning services',
      'Window & glass cleaning',
      'Move-in/move-out cleaning',
      'Spring & seasonal cleaning',
      'Post-construction cleaning',
      'Carpet cleaning',
      'Mattress cleaning',
      'BnB cleaning',
      'Regular maintenance cleaning',
      'Car wash & detailing',
      'Bin cleaning',
    ],
    whyChoose: [
      `Trusted by ${displayName} families & businesses`,
      'Eco-friendly, non-toxic products',
      'Flexible scheduling for families',
      'Fast response and satisfaction guarantee',
      'Transparent pricing',
    ],
    trustSignals: [
      `Trusted by ${displayName} residents`,
      'Satisfaction guaranteed',
      'Eco-friendly & safe',
      'Transparent pricing',
    ],
    testimonial: {
      quote: `Kupennia Cleaning keeps our ${displayName} home spotless. Professional and reliable service!`,
      name: `Sarah, ${displayName} homeowner`,
    },
    faq: [
      { q: `Do you clean homes in ${displayName}?`, a: `Yes, we specialize in cleaning homes and properties in ${displayName}.` },
      { q: 'What are your rates?', a: 'Our rates are competitive and transparent. Contact us for a free quote.' },
    ],
    meta: {
      title: `${displayName} Cleaning Services | Home & Office Cleaners Harare`,
      description: `Expert cleaning services in ${displayName}, Harare for homes, offices, and commercial spaces. Eco-friendly products, reliable scheduling, and local expertise. Get your free quote today!`,
    },
    internalLinks: [
      { href: '/cleaning-services', label: 'Our Services' },
      { href: '/cleaning-services/deep-cleaning', label: 'Deep Cleaning' },
    ],
    nearbyAreas: nearbyAreas.map(area => ({
      href: `/services/${area.toLowerCase().replace(/\s+/g, '-')}`,
      label: area,
    })),
  };
}

// Area-specific content for Harare areas
export const AREA_CONTENT: Record<string, {
  intro: string,
  services: string[],
  whyChoose: string[],
  trustSignals: string[],
  testimonial?: { quote: string, name: string },
  faq?: { q: string, a: string }[],
  meta: { title: string, description: string },
  internalLinks?: { href: string, label: string }[],
  nearbyAreas?: { href: string, label: string }[],
}> = {
  'glen-lorne': createAreaContent(
    'Glen Lorne',
    'Glen Lorne is an upscale residential area in Harare, known for its luxury homes and prestigious properties. Our team delivers meticulous cleaning for Glen Lorne\'s luxury residences, offices, and commercial spaces, ensuring every environment is fresh and inviting.',
    ['Borrowdale', 'Mount Pleasant', 'Chisipite']
  ),
  'borrowdale': createAreaContent(
    'Borrowdale',
    'Borrowdale is an upscale suburb known for its luxury homes and prestigious properties. We provide premium cleaning services for Borrowdale\'s luxury residences, offices, and commercial spaces.',
    ['Glen Lorne', 'Mount Pleasant', 'Borrowdale Brooke', 'Borrowdale West']
  ),
  'mount-pleasant': createAreaContent(
    'Mount Pleasant',
    'Mount Pleasant is a prestigious residential suburb known for its beautiful homes and family-friendly environment. We provide comprehensive cleaning for Mount Pleasant\'s homes, offices, and commercial properties.',
    ['Borrowdale', 'Mount Pleasant Heights', 'Highlands', 'Glen Lorne']
  ),
  'pomona': createAreaContent(
    'Pomona',
    'Pomona is a residential area in Harare known for its family homes and community facilities. We provide comprehensive cleaning for Pomona\'s homes, schools, and commercial properties.',
    ['Helensvale', 'Carrick Creagh', 'Highlands']
  ),
  'helensvale': createAreaContent(
    'Helensvale',
    'Helensvale is a residential suburb known for its family homes and community spirit. We provide comprehensive cleaning for Helensvale\'s homes, offices, and commercial properties.',
    ['Pomona', 'Carrick Creagh', 'Highlands']
  ),
  'carrick-creagh': createAreaContent(
    'Carrick Creagh',
    'Carrick Creagh is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Carrick Creagh\'s homes, offices, and commercial properties.',
    ['Pomona', 'Helensvale', 'Highlands']
  ),
  'highlands': createAreaContent(
    'Highlands',
    'Highlands is a well-established residential suburb known for its community spirit and family homes. We provide comprehensive cleaning for Highlands\' homes, schools, and commercial properties.',
    ['Mount Pleasant', 'Pomona', 'Newlands', 'Greendale North']
  ),
  'crowhill-views': createAreaContent(
    'Crowhill Views',
    'Crowhill Views is a residential development known for its modern homes and family-friendly environment. We provide comprehensive cleaning for Crowhill Views\' homes, offices, and commercial properties.',
    ['Mount Pleasant Heights', 'Highlands', 'Newlands']
  ),
  'mount-pleasant-heights': createAreaContent(
    'Mount Pleasant Heights',
    'Mount Pleasant Heights is a residential area known for its elevated location and beautiful homes. We provide comprehensive cleaning for Mount Pleasant Heights\' homes, offices, and commercial properties.',
    ['Mount Pleasant', 'Crowhill Views', 'Highlands']
  ),
  'borrowdale-brooke': createAreaContent(
    'Borrowdale Brooke',
    'Borrowdale Brooke is an upscale residential area known for its luxury homes and prestigious properties. We provide premium cleaning services for Borrowdale Brooke\'s luxury residences, offices, and commercial spaces.',
    ['Borrowdale', 'Glen Lorne', 'Chisipite']
  ),
  'gletwin-park': createAreaContent(
    'Gletwin Park',
    'Gletwin Park is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Gletwin Park\'s homes, schools, and commercial properties.',
    ['Hogerty Hill', 'Shawasha Hills', 'Highlands']
  ),
  'hogerty-hill': createAreaContent(
    'Hogerty Hill',
    'Hogerty Hill is a residential area known for its elevated location and family homes. We provide comprehensive cleaning for Hogerty Hill\'s homes, offices, and commercial properties.',
    ['Gletwin Park', 'Shawasha Hills', 'Chisipite']
  ),
  'shawasha-hills': createAreaContent(
    'Shawasha Hills',
    'Shawasha Hills is a residential area known for its hillside location and beautiful homes. We provide comprehensive cleaning for Shawasha Hills\' homes, offices, and commercial properties.',
    ['Gletwin Park', 'Hogerty Hill', 'Chisipite']
  ),
  'chisipite': createAreaContent(
    'Chisipite',
    'Chisipite is a prestigious residential area known for its luxury homes and beautiful surroundings. We provide premium cleaning services for Chisipite\'s luxury residences, offices, and commercial spaces.',
    ['Glen Lorne', 'Borrowdale', 'Hogerty Hill', 'Shawasha Hills']
  ),
  'avondale': createAreaContent(
    'Avondale',
    'Avondale is a vibrant residential and commercial suburb in Harare, known for its shopping centers and family homes. Our team delivers meticulous cleaning for Avondale\'s homes, offices, and retail spaces, ensuring every environment is fresh and inviting.',
    ['Newlands', 'Greendale North', 'Belgravia']
  ),
  'newlands': createAreaContent(
    'Newlands',
    'Newlands is a residential suburb known for its family homes and community facilities. We provide comprehensive cleaning for Newlands\' homes, schools, and commercial properties.',
    ['Highlands', 'Avondale', 'Brookview']
  ),
  'brookview': createAreaContent(
    'Brookview',
    'Brookview is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Brookview\'s homes, offices, and commercial properties.',
    ['Newlands', 'Philadelphia', 'Greendale North']
  ),
  'philadelphia': createAreaContent(
    'Philadelphia',
    'Philadelphia is a residential area known for its family homes and community spirit. We provide comprehensive cleaning for Philadelphia\'s homes, offices, and commercial properties.',
    ['Brookview', 'Quinnington', 'Greendale North']
  ),
  'quinnington': createAreaContent(
    'Quinnington',
    'Quinnington is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Quinnington\'s homes, offices, and commercial properties.',
    ['Philadelphia', 'Greendale North', 'Greystone Park']
  ),
  'greendale-north': createAreaContent(
    'Greendale North',
    'Greendale North is a family-oriented suburb known for its residential areas and community facilities. We provide comprehensive cleaning for Greendale North\'s homes, retail spaces, and commercial properties.',
    ['Highlands', 'Avondale', 'Philadelphia', 'Quinnington']
  ),
  'greystone-park': createAreaContent(
    'Greystone Park',
    'Greystone Park is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Greystone Park\'s homes, offices, and commercial properties.',
    ['Quinnington', 'Vainona', 'The Grange']
  ),
  'vainona': createAreaContent(
    'Vainona',
    'Vainona is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Vainona\'s homes, offices, and commercial properties.',
    ['Greystone Park', 'Glen Forest', 'The Grange']
  ),
  'glen-forest': createAreaContent(
    'Glen Forest',
    'Glen Forest is a residential area known for its family homes and natural surroundings. We provide comprehensive cleaning for Glen Forest\'s homes, offices, and commercial properties.',
    ['Vainona', 'The Grange', 'Charlotte Brooke']
  ),
  'the-grange': createAreaContent(
    'The Grange',
    'The Grange is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for The Grange\'s homes, offices, and commercial properties.',
    ['Greystone Park', 'Vainona', 'Glen Forest', 'Charlotte Brooke']
  ),
  'charlotte-brooke': createAreaContent(
    'Charlotte Brooke',
    'Charlotte Brooke is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Charlotte Brooke\'s homes, offices, and commercial properties.',
    ['The Grange', 'Glen Forest', 'Nyeredzi Ridge']
  ),
  'nyeredzi-ridge': createAreaContent(
    'Nyeredzi Ridge',
    'Nyeredzi Ridge is a residential area known for its elevated location and family homes. We provide comprehensive cleaning for Nyeredzi Ridge\'s homes, offices, and commercial properties.',
    ['Charlotte Brooke', 'Colne Valley', 'Gunhill']
  ),
  'colne-valley': createAreaContent(
    'Colne Valley',
    'Colne Valley is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Colne Valley\'s homes, offices, and commercial properties.',
    ['Nyeredzi Ridge', 'Gunhill', 'Belgravia']
  ),
  'gunhill': createAreaContent(
    'Gunhill',
    'Gunhill is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Gunhill\'s homes, offices, and commercial properties.',
    ['Colne Valley', 'Nyeredzi Ridge', 'Belgravia']
  ),
  'belgravia': createAreaContent(
    'Belgravia',
    'Belgravia is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Belgravia\'s homes, offices, and commercial properties.',
    ['Avondale', 'Colne Valley', 'Gunhill', 'Alexandra Park']
  ),
  'alexandra-park': createAreaContent(
    'Alexandra Park',
    'Alexandra Park is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Alexandra Park\'s homes, offices, and commercial properties.',
    ['Belgravia', 'Borrowdale West', 'Rolf Valley']
  ),
  'borrowdale-west': createAreaContent(
    'Borrowdale West',
    'Borrowdale West is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Borrowdale West\'s homes, offices, and commercial properties.',
    ['Borrowdale', 'Alexandra Park', 'Rolf Valley']
  ),
  'rolf-valley': createAreaContent(
    'Rolf Valley',
    'Rolf Valley is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Rolf Valley\'s homes, offices, and commercial properties.',
    ['Alexandra Park', 'Borrowdale West', 'Ballantyne Park']
  ),
  'ballantyne-park': createAreaContent(
    'Ballantyne Park',
    'Ballantyne Park is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Ballantyne Park\'s homes, offices, and commercial properties.',
    ['Rolf Valley', 'Umwinsidale', 'Northwood']
  ),
  'umwinsidale': createAreaContent(
    'Umwinsidale',
    'Umwinsidale is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Umwinsidale\'s homes, offices, and commercial properties.',
    ['Ballantyne Park', 'Northwood', 'Sally Mugabe Heights']
  ),
  'northwood': createAreaContent(
    'Northwood',
    'Northwood is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Northwood\'s homes, offices, and commercial properties.',
    ['Ballantyne Park', 'Umwinsidale', 'Sally Mugabe Heights']
  ),
  'sally-mugabe-heights': createAreaContent(
    'Sally Mugabe Heights',
    'Sally Mugabe Heights is a residential area known for its elevated location and family homes. We provide comprehensive cleaning for Sally Mugabe Heights\' homes, offices, and commercial properties.',
    ['Northwood', 'Umwinsidale', 'Kambanji']
  ),
  'kambanji': createAreaContent(
    'Kambanji',
    'Kambanji is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Kambanji\'s homes, offices, and commercial properties.',
    ['Sally Mugabe Heights', 'Ryelands', 'Groom Bridge']
  ),
  'ryelands': createAreaContent(
    'Ryelands',
    'Ryelands is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Ryelands\' homes, offices, and commercial properties.',
    ['Kambanji', 'Groom Bridge']
  ),
  'groom-bridge': createAreaContent(
    'Groom Bridge',
    'Groom Bridge is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Groom Bridge\'s homes, offices, and commercial properties.',
    ['Kambanji', 'Ryelands']
  ),
  'marlborough': createAreaContent(
    'Marlborough',
    'Marlborough is a well-established residential area in Harare, known for its family homes and community facilities. We provide comprehensive cleaning for Marlborough\'s homes, offices, and commercial properties.',
    ['Sandton Park', 'Tynwald', 'New Marlborough']
  ),
  'sandton-park': createAreaContent(
    'Sandton Park',
    'Sandton Park is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Sandton Park\'s homes, offices, and commercial properties.',
    ['Marlborough', 'Tynwald', 'Glaudina']
  ),
  'tynwald': createAreaContent(
    'Tynwald',
    'Tynwald is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Tynwald\'s homes, offices, and commercial properties.',
    ['Marlborough', 'Sandton Park', 'Glaudina']
  ),
  'glaudina': createAreaContent(
    'Glaudina',
    'Glaudina is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Glaudina\'s homes, offices, and commercial properties.',
    ['Sandton Park', 'Tynwald', 'Bluff Hill']
  ),
  'bluff-hill': createAreaContent(
    'Bluff Hill',
    'Bluff Hill is a residential area known for its elevated location and family homes. We provide comprehensive cleaning for Bluff Hill\'s homes, offices, and commercial properties.',
    ['Glaudina', 'Madokero', 'Rainham']
  ),
  'madokero': createAreaContent(
    'Madokero',
    'Madokero is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Madokero\'s homes, offices, and commercial properties.',
    ['Bluff Hill', 'Rainham', 'Westgate']
  ),
  'rainham': createAreaContent(
    'Rainham',
    'Rainham is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Rainham\'s homes, offices, and commercial properties.',
    ['Bluff Hill', 'Madokero', 'Mt Pleasant Heights']
  ),
  'mt-pleasant-heights': createAreaContent(
    'Mt Pleasant Heights',
    'Mt Pleasant Heights is a residential area known for its elevated location and beautiful homes. We provide comprehensive cleaning for Mt Pleasant Heights\' homes, offices, and commercial properties.',
    ['Rainham', 'Westgate', 'Aspindale Park']
  ),
  'westgate': createAreaContent(
    'Westgate',
    'Westgate is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Westgate\'s homes, offices, and commercial properties.',
    ['Madokero', 'Mt Pleasant Heights', 'Aspindale Park']
  ),
  'aspindale-park': createAreaContent(
    'Aspindale Park',
    'Aspindale Park is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Aspindale Park\'s homes, offices, and commercial properties.',
    ['Mt Pleasant Heights', 'Westgate', 'Cold Comfort']
  ),
  'cold-comfort': createAreaContent(
    'Cold Comfort',
    'Cold Comfort is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Cold Comfort\'s homes, offices, and commercial properties.',
    ['Aspindale Park', 'Fairview', 'Haydon Park']
  ),
  'fairview': createAreaContent(
    'Fairview',
    'Fairview is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Fairview\'s homes, offices, and commercial properties.',
    ['Cold Comfort', 'Haydon Park', 'Goodhope']
  ),
  'haydon-park': createAreaContent(
    'Haydon Park',
    'Haydon Park is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Haydon Park\'s homes, offices, and commercial properties.',
    ['Cold Comfort', 'Fairview', 'Goodhope']
  ),
  'goodhope': createAreaContent(
    'Goodhope',
    'Goodhope is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Goodhope\'s homes, offices, and commercial properties.',
    ['Fairview', 'Haydon Park', 'Spitzkop']
  ),
  'spitzkop': createAreaContent(
    'Spitzkop',
    'Spitzkop is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Spitzkop\'s homes, offices, and commercial properties.',
    ['Goodhope', 'Belvedere', 'Ashdown Park']
  ),
  'belvedere': createAreaContent(
    'Belvedere',
    'Belvedere is a diverse residential suburb known for its mix of homes and commercial spaces. We provide comprehensive cleaning for Belvedere\'s homes, offices, and commercial properties.',
    ['Spitzkop', 'Ashdown Park', 'Avondale West']
  ),
  'ashdown-park': createAreaContent(
    'Ashdown Park',
    'Ashdown Park is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Ashdown Park\'s homes, offices, and commercial properties.',
    ['Spitzkop', 'Belvedere', 'Avondale West']
  ),
  'avondale-west': createAreaContent(
    'Avondale West',
    'Avondale West is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Avondale West\'s homes, offices, and commercial properties.',
    ['Belvedere', 'Ashdown Park', 'New Marlborough']
  ),
  'new-marlborough': createAreaContent(
    'New Marlborough',
    'New Marlborough is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for New Marlborough\'s homes, offices, and commercial properties.',
    ['Marlborough', 'Avondale West', 'Mabelreign']
  ),
  'mabelreign': createAreaContent(
    'Mabelreign',
    'Mabelreign is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Mabelreign\'s homes, offices, and commercial properties.',
    ['New Marlborough', 'Emerald Hill', 'Strathaven']
  ),
  'emerald-hill': createAreaContent(
    'Emerald Hill',
    'Emerald Hill is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Emerald Hill\'s homes, offices, and commercial properties.',
    ['Mabelreign', 'Strathaven', 'Whitecliff']
  ),
  'strathaven': createAreaContent(
    'Strathaven',
    'Strathaven is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Strathaven\'s homes, offices, and commercial properties.',
    ['Mabelreign', 'Emerald Hill', 'Whitecliff']
  ),
  'whitecliff': createAreaContent(
    'Whitecliff',
    'Whitecliff is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Whitecliff\'s homes, offices, and commercial properties.',
    ['Emerald Hill', 'Strathaven', 'Rydale Ridge Park']
  ),
  'rydale-ridge-park': createAreaContent(
    'Rydale Ridge Park',
    'Rydale Ridge Park is a residential area known for its elevated location and family homes. We provide comprehensive cleaning for Rydale Ridge Park\'s homes, offices, and commercial properties.',
    ['Whitecliff', 'Avonlea', 'Monavale']
  ),
  'avonlea': createAreaContent(
    'Avonlea',
    'Avonlea is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Avonlea\'s homes, offices, and commercial properties.',
    ['Rydale Ridge Park', 'Monavale', 'Bloomingdale']
  ),
  'monavale': createAreaContent(
    'Monavale',
    'Monavale is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Monavale\'s homes, offices, and commercial properties.',
    ['Rydale Ridge Park', 'Avonlea', 'Bloomingdale']
  ),
  'bloomingdale': createAreaContent(
    'Bloomingdale',
    'Bloomingdale is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Bloomingdale\'s homes, offices, and commercial properties.',
    ['Avonlea', 'Monavale', 'Westlea']
  ),
  'westlea': createAreaContent(
    'Westlea',
    'Westlea is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Westlea\'s homes, offices, and commercial properties.',
    ['Bloomingdale', 'Sunridge', 'Meyrick Park']
  ),
  'sunridge': createAreaContent(
    'Sunridge',
    'Sunridge is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Sunridge\'s homes, offices, and commercial properties.',
    ['Westlea', 'Meyrick Park', 'Mt Hampden']
  ),
  'meyrick-park': createAreaContent(
    'Meyrick Park',
    'Meyrick Park is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Meyrick Park\'s homes, offices, and commercial properties.',
    ['Westlea', 'Sunridge', 'Mt Hampden']
  ),
  'mt-hampden': createAreaContent(
    'Mt Hampden',
    'Mt Hampden is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Mt Hampden\'s homes, offices, and commercial properties.',
    ['Sunridge', 'Meyrick Park', 'Adylinn']
  ),
  'adylinn': createAreaContent(
    'Adylinn',
    'Adylinn is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Adylinn\'s homes, offices, and commercial properties.',
    ['Mt Hampden', 'Dawnview Park', 'Sentosa']
  ),
  'dawnview-park': createAreaContent(
    'Dawnview Park',
    'Dawnview Park is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Dawnview Park\'s homes, offices, and commercial properties.',
    ['Adylinn', 'Sentosa', 'Milton Park']
  ),
  'sentosa': createAreaContent(
    'Sentosa',
    'Sentosa is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Sentosa\'s homes, offices, and commercial properties.',
    ['Adylinn', 'Dawnview Park', 'Milton Park']
  ),
  'milton-park': createAreaContent(
    'Milton Park',
    'Milton Park is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Milton Park\'s homes, offices, and commercial properties.',
    ['Dawnview Park', 'Sentosa', 'Haig Park']
  ),
  'haig-park': createAreaContent(
    'Haig Park',
    'Haig Park is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Haig Park\'s homes, offices, and commercial properties.',
    ['Milton Park', 'Kensington', 'Greencroft']
  ),
  'kensington': createAreaContent(
    'Kensington',
    'Kensington is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Kensington\'s homes, offices, and commercial properties.',
    ['Haig Park', 'Greencroft', 'Ridgeview']
  ),
  'greencroft': createAreaContent(
    'Greencroft',
    'Greencroft is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Greencroft\'s homes, offices, and commercial properties.',
    ['Haig Park', 'Kensington', 'Ridgeview']
  ),
  'ridgeview': createAreaContent(
    'Ridgeview',
    'Ridgeview is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Ridgeview\'s homes, offices, and commercial properties.',
    ['Kensington', 'Greencroft', 'Avondale - The Ridge']
  ),
  'avondale-the-ridge': createAreaContent(
    'Avondale - The Ridge',
    'Avondale - The Ridge is a residential area known for its elevated location and family homes. We provide comprehensive cleaning for Avondale - The Ridge\'s homes, offices, and commercial properties.',
    ['Ridgeview', 'Kutandara', 'Westwood']
  ),
  'kutandara': createAreaContent(
    'Kutandara',
    'Kutandara is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Kutandara\'s homes, offices, and commercial properties.',
    ['Avondale - The Ridge', 'Westwood']
  ),
  'westwood': createAreaContent(
    'Westwood',
    'Westwood is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Westwood\'s homes, offices, and commercial properties.',
    ['Avondale - The Ridge', 'Kutandara']
  ),
};

// Get all area slugs
export function getAllAreaSlugs(): string[] {
  return Object.keys(AREA_CONTENT);
}

// Get area data by slug
export function getAreaData(slug: string) {
  return AREA_CONTENT[slug] || null;
}

// Generate metadata for area pages
export function generateAreaMetadata(slug: string): Metadata {
  const areaData = getAreaData(slug);
  if (!areaData) {
    return {
      title: 'Area Not Found',
      description: 'The requested area page could not be found.',
    };
  }

  const areaName = slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return {
    title: areaData.meta.title,
    description: areaData.meta.description,
    keywords: [
      `cleaning services ${areaName}`,
      `${areaName} cleaners`,
      `professional cleaning ${areaName}`,
      `home cleaning ${areaName}`,
      `office cleaning ${areaName}`,
      `commercial cleaning ${areaName}`,
      `Harare cleaning services`,
    ],
    openGraph: {
      title: areaData.meta.title,
      description: areaData.meta.description,
      url: `https://kupennia.com/services/${slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: areaData.meta.title,
      description: areaData.meta.description,
    },
  };
}
