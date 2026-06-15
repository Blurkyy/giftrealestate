export interface Property {
  id: string;
  title: string;
  site: string;
  price: number;
  priceFormat: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  fullDescription: string;
  images: string[];
  amenities: string[];
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  featured: boolean;
  status: 'available' | 'sold' | 'coming-soon';
  type: 'apartment' | 'villa' | 'townhouse' | 'commercial';
  paymentPlan?: string;
}

export const properties: Property[] = [
  {
    id: 'ayat-001',
    title: 'Ayat 3 Bedroom apartment',
    site: 'Ayat',
    price: 0,
    priceFormat: 'Call for price',
    bedrooms: 3,
    bathrooms: 2,
    area: 128,
    description: 'Spacious apartment with modern amenities',
    fullDescription: 'Beautiful apartment with stunning views. Located in the prime Ayat development area with excellent infrastructure and accessibility.',
    images: [
      '/images/properties/ayat/01.png',
      '/images/properties/ayat/02.png',
      '/images/properties/ayat/03.png',
    ],
    amenities: ['Swimming Pool', 'Gym', 'Security', 'Parking', 'Garden'],
    location: {
      lat: 9.0065,
      lng: 38.7469,
      address: 'Ayat Site, Addis Ababa, Ethiopia'
    },
    featured: true,
    status: 'available',
    type: 'apartment',
  },
  {
    id: 'ayat-002',
    title: 'Ayat 2 Bedroom apartment',
    site: 'Ayat',
    price: 0,
    priceFormat: 'Call for price',
    bedrooms: 2,
    bathrooms: 2,
    area: 104,
    description: 'Luxury 2 bedroom apartment with premium finishes',
    fullDescription: 'Luxury apartment featuring high-end finishes, spacious rooms, and modern design. Perfect for families seeking comfort and style.',
    images: [
      '/images/properties/ayat/01.png',
      '/images/properties/ayat/02.png',
      '/images/properties/ayat/03.png',
    ],
    amenities: ['Private Garden', 'Pool', 'Home Theater', 'Security System', 'Maids Room'],
    location: {
      lat: 9.0065,
      lng: 38.7469,
      address: 'Ayat Site, Addis Ababa, Ethiopia'
    },
    featured: true,
    status: 'available',
    type: 'apartment',
  },
  {
    id: 'legehare-001',
    title: 'Legehare 2 Bedroom Apartment',
    site: 'Legehare',
    price: 0,
    priceFormat: 'Call for price',
    bedrooms: 2,
    bathrooms: 2,
    area: 141,
    description: 'Modern 2 bedroom apartment in Legehare',
    fullDescription: 'Well-designed apartment with modern amenities, located in the vibrant Legehare area.',
    images: [
      '/images/properties/legehare/01.png',
      '/images/properties/legehare/02.png',
      '/images/properties/legehare/03.png',
    ],
    amenities: ['Security', 'Parking', 'Water Tank', 'Generator Backup'],
    location: {
      lat: 9.0082,
      lng: 38.7489,
      address: 'Legehare, Addis Ababa, Ethiopia'
    },
    featured: false,
    status: 'available',
    type: 'apartment',
  },
  {
    id: 'cmc-001',
    title: 'CMC Site 3 Bedroom Apartment',
    site: 'CMC',
    price: 0,
    priceFormat: 'Call for price',
    bedrooms: 3,
    bathrooms: 2,
    area: 187,
    description: 'Spacious 3 bedroom apartment at CMC',
    fullDescription: 'Premium apartment in the CMC development with excellent amenities and location.',
    images: [
      '/images/properties/cmc/01.png',
      '/images/properties/cmc/02.png',
      '/images/properties/cmc/03.png',
    ],
    amenities: ['Pool', 'Gym', 'Security 24/7', 'Parking', 'Rooftop Garden'],
    location: {
      lat: 9.0110,
      lng: 38.7410,
      address: 'CMC Site, Addis Ababa, Ethiopia'
    },
    featured: true,
    status: 'available',
    type: 'apartment',
  },
  {
    id: 'bole-atlas-001',
    title: 'Bole Atlas 3 Bedroom Townhouse',
    site: 'Bole Atlas',
    price: 0,
    priceFormat: 'Call for price',
    bedrooms: 3,
    bathrooms: 2,
    area: 206,
    description: 'Modern townhouse in Bole Atlas',
    fullDescription: 'Contemporary townhouse with private entrance and modern design.',
    images: [
      '/images/properties/bole atlas/01.png',
      '/images/properties/bole atlas/02.png',
    ],
    amenities: ['Private Parking', 'Garden', 'Security Fence', 'Water Tank'],
    location: {
      lat: 9.0030,
      lng: 38.7560,
      address: 'Bole Atlas, Addis Ababa, Ethiopia'
    },
    featured: false,
    status: 'available',
    type: 'townhouse',
  },
  {
    id: 'bole-atlas-002',
    title: 'Bole Atlas Luxury Apartment',
    site: 'Bole Atlas',
    price: 0,
    priceFormat: 'Call for price',
    bedrooms: 2,
    bathrooms: 2,
    area: 144,
    description: 'Luxury 2bedroom apartmentin premium location',
    fullDescription: 'Exquisite apartment with premium finishes, spacious compound, and all modern amenities.',
    images: [
      '/images/properties/bole atlas/01.png',
      '/images/properties/bole atlas/02.png',
    ],
    amenities: ['Swimming Pool', 'Private Garden', 'Home Theater', 'Security System', 'Guest House'],
    location: {
      lat: 9.0030,
      lng: 38.7560,
      address: 'Bole Atlas, Addis Ababa, Ethiopia'
    },
    featured: true,
    status: 'available',
    type: 'apartment',
  },
  {
    id: 'teklehaimanot-001',
    title: 'Teklehaimanot 2 Bedroom Apartment',
    site: 'Teklehaimanot',
    price: 0,
    priceFormat: 'Call for price',
    bedrooms: 2,
    bathrooms: 2,
    area: 95,
    description: 'Modern apartment in Teklehaimanot',
    fullDescription: 'Well-located apartment with excellent access to amenities.',
    images: [
      '/images/properties/teklehaimanot/01.png',
      '/images/properties/teklehaimanot/02.png',
      '/images/properties/teklehaimanot/03.png',
    ],
    amenities: ['Parking', 'Security', 'Water Supply', 'Close to Schools'],
    location: {
      lat: 9.0200,
      lng: 38.7400,
      address: 'Teklehaimanot, Addis Ababa, Ethiopia'
    },
    featured: false,
    status: 'available',
    type: 'apartment',
  },
  {
    id: 'hayehulet-001',
    title: 'Hayahulet 2 Bedroom apartment',
    site: 'Hayahulet',
    price: 0,
    priceFormat: 'Call for price',
    bedrooms: 2,
    bathrooms: 2,
    area: 165,
    description: 'Modern apartment in hayahulet',
    fullDescription: 'Modern apartment with excellent amenities, located in the vibrant Hayahulet area',
    images: [
      '/images/properties/hayahulet/01.png',
      '/images/properties/hayahulet/02.png',
    ],
    amenities: ['Parking', 'Security', 'Display Window', 'Storage', 'Break Room'],
    location: {
      lat: 9.0250,
      lng: 38.7300,
      address: 'Hayehulet, Addis Ababa, Ethiopia'
    },
    featured: false,
    status: 'available',
    type: 'commercial',
  },
  {
    id: 'hayehulet-002',
    title: 'Hayahulet 3 Bedroom Apartment',
    site: 'Hayahulet',
    price: 0,
    priceFormat: 'Call for price',
    bedrooms: 3,
    bathrooms: 2,
    area: 159,
    description: 'Spacious apartment above commercial space',
    fullDescription: 'Mixed-use property with commercial space below and residential apartment above.',
    images: [
      '/images/properties/hayahulet/01.png',
      '/images/properties/hayahulet/02.png',
    ],
    amenities: ['Parking', 'Security 24/7', 'High Ceilings', 'Natural Light'],
    location: {
      lat: 9.0250,
      lng: 38.7300,
      address: 'Hayehulet, Addis Ababa, Ethiopia'
    },
    featured: true,
    status: 'available',
    type: 'apartment',
  },
]

export const sites = [
  'Ayat',
  'Legehare',
  'CMC',
  'Bole atlas',
  'Teklehaimanot',
  'Hayahulet',
]
