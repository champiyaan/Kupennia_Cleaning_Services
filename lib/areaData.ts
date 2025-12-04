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
  'waterfalls': createAreaContent(
    'Waterfalls',
    'Waterfalls is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Waterfalls\' homes, offices, and commercial properties.',
    ['Arlington', 'Hatfield', 'Ardbennie']
  ),
  'arlington': createAreaContent(
    'Arlington',
    'Arlington is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Arlington\'s homes, offices, and commercial properties.',
    ['Waterfalls', 'Hatfield', 'Prospect']
  ),
  'hatfield': createAreaContent(
    'Hatfield',
    'Hatfield is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Hatfield\'s homes, offices, and commercial properties.',
    ['Waterfalls', 'Arlington', 'Ardbennie']
  ),
  'ardbennie': createAreaContent(
    'Ardbennie',
    'Ardbennie is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Ardbennie\'s homes, offices, and commercial properties.',
    ['Waterfalls', 'Hatfield', 'Prospect']
  ),
  'prospect': createAreaContent(
    'Prospect',
    'Prospect is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Prospect\'s homes, offices, and commercial properties.',
    ['Arlington', 'Ardbennie', 'Fidelity']
  ),
  'fidelity': createAreaContent(
    'Fidelity',
    'Fidelity is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Fidelity\'s homes, offices, and commercial properties.',
    ['Prospect', 'Southlea Park', 'Southview Park']
  ),
  'southlea-park': createAreaContent(
    'Southlea Park',
    'Southlea Park is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Southlea Park\'s homes, offices, and commercial properties.',
    ['Fidelity', 'Southview Park', 'Mainway Meadows']
  ),
  'southview-park': createAreaContent(
    'Southview Park',
    'Southview Park is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Southview Park\'s homes, offices, and commercial properties.',
    ['Fidelity', 'Southlea Park', 'Mainway Meadows']
  ),
  'mainway-meadows': createAreaContent(
    'Mainway Meadows',
    'Mainway Meadows is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Mainway Meadows\' homes, offices, and commercial properties.',
    ['Southlea Park', 'Southview Park', 'Willowvale']
  ),
  'willowvale': createAreaContent(
    'Willowvale',
    'Willowvale is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Willowvale\'s homes, offices, and commercial properties.',
    ['Mainway Meadows', 'Chadcombe', 'Southerton']
  ),
  'chadcombe': createAreaContent(
    'Chadcombe',
    'Chadcombe is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Chadcombe\'s homes, offices, and commercial properties.',
    ['Willowvale', 'Southerton', 'Graniteside']
  ),
  'southerton': createAreaContent(
    'Southerton',
    'Southerton is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Southerton\'s homes, offices, and commercial properties.',
    ['Willowvale', 'Chadcombe', 'Graniteside']
  ),
  'graniteside': createAreaContent(
    'Graniteside',
    'Graniteside is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Graniteside\'s homes, offices, and commercial properties.',
    ['Chadcombe', 'Southerton', 'Msasa Park']
  ),
  'msasa-park': createAreaContent(
    'Msasa Park',
    'Msasa Park is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Msasa Park\'s homes, offices, and commercial properties.',
    ['Graniteside', 'Stoneridge', 'Braeside']
  ),
  'stoneridge': createAreaContent(
    'Stoneridge',
    'Stoneridge is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Stoneridge\'s homes, offices, and commercial properties.',
    ['Msasa Park', 'Braeside', 'Arcadia']
  ),
  'braeside': createAreaContent(
    'Braeside',
    'Braeside is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Braeside\'s homes, offices, and commercial properties.',
    ['Msasa Park', 'Stoneridge', 'Arcadia']
  ),
  'arcadia': createAreaContent(
    'Arcadia',
    'Arcadia is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Arcadia\'s homes, offices, and commercial properties.',
    ['Stoneridge', 'Braeside', 'Hillside']
  ),
  'hillside': createAreaContent(
    'Hillside',
    'Hillside is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Hillside\'s homes, offices, and commercial properties.',
    ['Arcadia', 'Workington', 'Mbudzi']
  ),
  'workington': createAreaContent(
    'Workington',
    'Workington is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Workington\'s homes, offices, and commercial properties.',
    ['Hillside', 'Mbudzi', 'Airport']
  ),
  'mbudzi': createAreaContent(
    'Mbudzi',
    'Mbudzi is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Mbudzi\'s homes, offices, and commercial properties.',
    ['Hillside', 'Workington', 'Airport']
  ),
  'airport': createAreaContent(
    'Airport',
    'Airport is a residential and commercial area known for its proximity to the airport and mixed-use properties. We provide comprehensive cleaning for Airport\'s homes, offices, and commercial properties.',
    ['Workington', 'Mbudzi', 'Houghton Park']
  ),
  'houghton-park': createAreaContent(
    'Houghton Park',
    'Houghton Park is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Houghton Park\'s homes, offices, and commercial properties.',
    ['Airport', 'Park Meadowlands', 'Queensdale']
  ),
  'park-meadowlands': createAreaContent(
    'Park Meadowlands',
    'Park Meadowlands is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Park Meadowlands\' homes, offices, and commercial properties.',
    ['Houghton Park', 'Queensdale', 'Lochinvar']
  ),
  'queensdale': createAreaContent(
    'Queensdale',
    'Queensdale is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Queensdale\'s homes, offices, and commercial properties.',
    ['Houghton Park', 'Park Meadowlands', 'Lochinvar']
  ),
  'lochinvar': createAreaContent(
    'Lochinvar',
    'Lochinvar is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Lochinvar\'s homes, offices, and commercial properties.',
    ['Park Meadowlands', 'Queensdale', 'Southlands']
  ),
  'southlands': createAreaContent(
    'Southlands',
    'Southlands is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Southlands\' homes, offices, and commercial properties.',
    ['Lochinvar', 'Cranborne', 'Parktown']
  ),
  'cranborne': createAreaContent(
    'Cranborne',
    'Cranborne is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Cranborne\'s homes, offices, and commercial properties.',
    ['Southlands', 'Parktown', 'Ushewokunze']
  ),
  'parktown': createAreaContent(
    'Parktown',
    'Parktown is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Parktown\'s homes, offices, and commercial properties.',
    ['Southlands', 'Cranborne', 'Ushewokunze']
  ),
  'ushewokunze': createAreaContent(
    'Ushewokunze',
    'Ushewokunze is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Ushewokunze\'s homes, offices, and commercial properties.',
    ['Cranborne', 'Parktown', 'St. Martins']
  ),
  'st-martins': createAreaContent(
    'St. Martins',
    'St. Martins is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for St. Martins\' homes, offices, and commercial properties.',
    ['Ushewokunze', 'Logan Park', 'Chiedza Park']
  ),
  'logan-park': createAreaContent(
    'Logan Park',
    'Logan Park is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Logan Park\'s homes, offices, and commercial properties.',
    ['St. Martins', 'Chiedza Park']
  ),
  'chiedza-park': createAreaContent(
    'Chiedza Park',
    'Chiedza Park is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Chiedza Park\'s homes, offices, and commercial properties.',
    ['St. Martins', 'Logan Park']
  ),
  'greendale': createAreaContent(
    'Greendale',
    'Greendale is a well-established residential suburb known for its family homes and community facilities. We provide comprehensive cleaning for Greendale\'s homes, offices, and commercial properties.',
    ['Greendale North', 'Eastlea', 'Highlands']
  ),
  'eastlea': createAreaContent(
    'Eastlea',
    'Eastlea is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Eastlea\'s homes, offices, and commercial properties.',
    ['Greendale', 'Zimre Park', 'Msasa']
  ),
  'zimre-park': createAreaContent(
    'Zimre Park',
    'Zimre Park is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Zimre Park\'s homes, offices, and commercial properties.',
    ['Eastlea', 'Msasa', 'Mandara']
  ),
  'msasa': createAreaContent(
    'Msasa',
    'Msasa is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Msasa\'s homes, offices, and commercial properties.',
    ['Eastlea', 'Zimre Park', 'Mandara']
  ),
  'mandara': createAreaContent(
    'Mandara',
    'Mandara is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Mandara\'s homes, offices, and commercial properties.',
    ['Zimre Park', 'Msasa', 'Sunway City']
  ),
  'sunway-city': createAreaContent(
    'Sunway City',
    'Sunway City is a residential development known for its modern homes and family-friendly environment. We provide comprehensive cleaning for Sunway City\'s homes, offices, and commercial properties.',
    ['Mandara', 'Rockview', 'Manresa']
  ),
  'rockview': createAreaContent(
    'Rockview',
    'Rockview is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Rockview\'s homes, offices, and commercial properties.',
    ['Sunway City', 'Manresa', 'Kamfinsa']
  ),
  'manresa': createAreaContent(
    'Manresa',
    'Manresa is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Manresa\'s homes, offices, and commercial properties.',
    ['Sunway City', 'Rockview', 'Kamfinsa']
  ),
  'kamfinsa': createAreaContent(
    'Kamfinsa',
    'Kamfinsa is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Kamfinsa\'s homes, offices, and commercial properties.',
    ['Rockview', 'Manresa', 'Athlone']
  ),
  'athlone': createAreaContent(
    'Athlone',
    'Athlone is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Athlone\'s homes, offices, and commercial properties.',
    ['Kamfinsa', 'Upper Hillside', 'Amby']
  ),
  'upper-hillside': createAreaContent(
    'Upper Hillside',
    'Upper Hillside is a residential area known for its elevated location and family homes. We provide comprehensive cleaning for Upper Hillside\'s homes, offices, and commercial properties.',
    ['Athlone', 'Hillside', 'Amby']
  ),
  'amby': createAreaContent(
    'Amby',
    'Amby is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Amby\'s homes, offices, and commercial properties.',
    ['Athlone', 'Upper Hillside', 'Greengrove']
  ),
  'greengrove': createAreaContent(
    'Greengrove',
    'Greengrove is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Greengrove\'s homes, offices, and commercial properties.',
    ['Amby', 'Rhodesville']
  ),
  'rhodesville': createAreaContent(
    'Rhodesville',
    'Rhodesville is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Rhodesville\'s homes, offices, and commercial properties.',
    ['Greengrove', 'Avondale']
  ),
  'budiriro': createAreaContent(
    'Budiriro',
    'Budiriro is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Budiriro\'s homes, offices, and commercial properties.',
    ['Glen View', 'Dzivarasekwa', 'Warren Park']
  ),
  'glen-view': createAreaContent(
    'Glen View',
    'Glen View is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Glen View\'s homes, offices, and commercial properties.',
    ['Budiriro', 'Glen Norah', 'Kuwadzana']
  ),
  'dzivarasekwa': createAreaContent(
    'Dzivarasekwa',
    'Dzivarasekwa is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Dzivarasekwa\'s homes, offices, and commercial properties.',
    ['Budiriro', 'Warren Park', 'Granary Park']
  ),
  'warren-park': createAreaContent(
    'Warren Park',
    'Warren Park is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Warren Park\'s homes, offices, and commercial properties.',
    ['Budiriro', 'Dzivarasekwa', 'Glen Norah']
  ),
  'glen-norah': createAreaContent(
    'Glen Norah',
    'Glen Norah is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Glen Norah\'s homes, offices, and commercial properties.',
    ['Glen View', 'Warren Park', 'Kuwadzana']
  ),
  'kuwadzana': createAreaContent(
    'Kuwadzana',
    'Kuwadzana is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Kuwadzana\'s homes, offices, and commercial properties.',
    ['Glen View', 'Glen Norah', 'Highfield']
  ),
  'granary-park': createAreaContent(
    'Granary Park',
    'Granary Park is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Granary Park\'s homes, offices, and commercial properties.',
    ['Dzivarasekwa', 'Mufakose', 'Highfield']
  ),
  'highfield': createAreaContent(
    'Highfield',
    'Highfield is a well-established residential area known for its family homes and community facilities. We provide comprehensive cleaning for Highfield\'s homes, offices, and commercial properties.',
    ['Kuwadzana', 'Granary Park', 'Mufakose']
  ),
  'mufakose': createAreaContent(
    'Mufakose',
    'Mufakose is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Mufakose\'s homes, offices, and commercial properties.',
    ['Granary Park', 'Highfield', 'Hatcliffe']
  ),
  'hatcliffe': createAreaContent(
    'Hatcliffe',
    'Hatcliffe is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Hatcliffe\'s homes, offices, and commercial properties.',
    ['Mufakose', 'Rydale Ridge', 'Donnybrook']
  ),
  'rydale-ridge': createAreaContent(
    'Rydale Ridge',
    'Rydale Ridge is a residential area known for its elevated location and family homes. We provide comprehensive cleaning for Rydale Ridge\'s homes, offices, and commercial properties.',
    ['Hatcliffe', 'Donnybrook', 'Marimba Park']
  ),
  'donnybrook': createAreaContent(
    'Donnybrook',
    'Donnybrook is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Donnybrook\'s homes, offices, and commercial properties.',
    ['Hatcliffe', 'Rydale Ridge', 'Marimba Park']
  ),
  'marimba-park': createAreaContent(
    'Marimba Park',
    'Marimba Park is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Marimba Park\'s homes, offices, and commercial properties.',
    ['Rydale Ridge', 'Donnybrook', 'Kambuzuma']
  ),
  'kambuzuma': createAreaContent(
    'Kambuzuma',
    'Kambuzuma is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Kambuzuma\'s homes, offices, and commercial properties.',
    ['Marimba Park', 'Mabvuku', 'Tafara']
  ),
  'mabvuku': createAreaContent(
    'Mabvuku',
    'Mabvuku is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Mabvuku\'s homes, offices, and commercial properties.',
    ['Kambuzuma', 'Tafara', 'Snake Park']
  ),
  'tafara': createAreaContent(
    'Tafara',
    'Tafara is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Tafara\'s homes, offices, and commercial properties.',
    ['Kambuzuma', 'Mabvuku', 'New Tafara']
  ),
  'snake-park': createAreaContent(
    'Snake Park',
    'Snake Park is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Snake Park\'s homes, offices, and commercial properties.',
    ['Mabvuku', 'Amalinda', 'Crowborough']
  ),
  'amalinda': createAreaContent(
    'Amalinda',
    'Amalinda is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Amalinda\'s homes, offices, and commercial properties.',
    ['Snake Park', 'Crowborough', 'Epworth']
  ),
  'crowborough': createAreaContent(
    'Crowborough',
    'Crowborough is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for Crowborough\'s homes, offices, and commercial properties.',
    ['Snake Park', 'Amalinda', 'Epworth']
  ),
  'epworth': createAreaContent(
    'Epworth',
    'Epworth is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Epworth\'s homes, offices, and commercial properties.',
    ['Amalinda', 'Crowborough', 'New Tafara']
  ),
  'new-tafara': createAreaContent(
    'New Tafara',
    'New Tafara is a residential area known for its family homes and community facilities. We provide comprehensive cleaning for New Tafara\'s homes, offices, and commercial properties.',
    ['Tafara', 'Epworth', 'Sunningdale']
  ),
  'sunningdale': createAreaContent(
    'Sunningdale',
    'Sunningdale is a residential area known for its family homes and peaceful environment. We provide comprehensive cleaning for Sunningdale\'s homes, offices, and commercial properties.',
    ['New Tafara', 'Mbare']
  ),
  'mbare': createAreaContent(
    'Mbare',
    'Mbare is a vibrant residential and commercial area known for its markets and community facilities. We provide comprehensive cleaning for Mbare\'s homes, offices, and commercial properties.',
    ['Sunningdale', 'Belvedere']
  ),
  'avenues': createAreaContent(
    'Avenues',
    'Avenues is a prestigious residential and commercial area in Harare, known for its upscale properties and proximity to the city center. We provide premium cleaning services for Avenues\' homes, offices, and commercial spaces.',
    ['Harare City Centre', 'Belgravia', 'Avondale']
  ),
  'harare-city-centre': createAreaContent(
    'Harare City Centre',
    'Harare City Centre is the bustling commercial heart of Harare, featuring offices, retail spaces, and mixed-use properties. We provide comprehensive commercial and office cleaning services for Harare City Centre\'s businesses and properties.',
    ['Avenues', 'Belvedere', 'Avondale']
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

// Get area data or create default data for any area
export function getAreaDataOrDefault(slug: string) {
  const existingData = AREA_CONTENT[slug];
  if (existingData) {
    return existingData;
  }
  
  // Create default data for any area name
  const areaName = slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  return {
    intro: `${areaName} is a location in Harare where we provide professional cleaning services. Our team is ready to serve homes and businesses in ${areaName} with comprehensive cleaning solutions.`,
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
      `Trusted cleaning services in ${areaName}`,
      'Eco-friendly, non-toxic products',
      'Flexible scheduling for families',
      'Fast response and satisfaction guarantee',
      'Transparent pricing',
    ],
    trustSignals: [
      `Serving ${areaName} residents`,
      'Satisfaction guaranteed',
      'Eco-friendly & safe',
      'Transparent pricing',
    ],
    testimonial: {
      quote: `Kupennia Cleaning provides excellent service in ${areaName}. Professional and reliable!`,
      name: `Happy customer in ${areaName}`,
    },
    faq: [
      { q: `Do you clean homes in ${areaName}?`, a: `Yes, we provide cleaning services in ${areaName} and throughout Harare. Contact us for more information.` },
      { q: 'What are your rates?', a: 'Our rates are competitive and transparent. Contact us for a free quote tailored to your needs.' },
    ],
    meta: {
      title: `${areaName} Cleaning Services | Professional Cleaners Harare`,
      description: `Professional cleaning services in ${areaName}, Harare. Expert cleaners for homes, offices, and commercial spaces. Get your free quote today!`,
    },
    internalLinks: [
      { href: '/cleaning-services', label: 'Our Services' },
      { href: '/cleaning-services/deep-cleaning', label: 'Deep Cleaning' },
    ],
    nearbyAreas: [],
  };
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
