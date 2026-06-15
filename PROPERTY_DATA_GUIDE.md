# Property Data - Complete Example

This file shows exactly how to format your property data.

## Location in Project

Edit this file: `src/lib/properties.ts`

---

## Complete Example: Adding a Property

Here's a complete example for a property at AYAT:

```typescript
{
  id: 'ayat-001',                          // Unique identifier - MUST BE UNIQUE
  title: 'AYAT 2 Bedroom Apartment',       // Property title
  site: 'AYAT',                            // Must match one of the 6 sites
  price: 2500000,                          // Numeric price (for filtering)
  priceFormat: 'ETB 2,500,000',           // Display price (formatted)
  bedrooms: 2,                             // Number of bedrooms
  bathrooms: 2,                            // Number of bathrooms
  area: 166.21,                            // Area in square feet
  description: 'Spacious 2 bedroom apartment with modern amenities', // Short description for card
  fullDescription: 'Beautiful 2 bedroom apartment with stunning views. Located in the prime AYAT development area with excellent infrastructure and accessibility. Built with premium materials and finished to the highest standards.',
  images: [
    '/images/properties/ayat/01.jpg',      // Main image
    '/images/properties/ayat/02.jpg',      // Additional images
    '/images/properties/ayat/03.jpg',      // Add at least 2-3 images per property
  ],
  amenities: [                             // List of amenities
    'Swimming Pool',
    'Gym',
    'Security 24/7',
    'Parking',
    'Garden',
    'Hot Water System',
  ],
  location: {
    lat: 9.0065,                           // Latitude
    lng: 38.7469,                          // Longitude
    address: 'AYAT Site Phase VII, Addis Ababa, Ethiopia'
  },
  featured: true,                          // Show on home page? (true/false)
  status: 'available',                     // 'available', 'sold', 'coming-soon'
  type: 'apartment',                       // Type: 'apartment', 'villa', 'townhouse', 'commercial'
  paymentPlan: '15% down, 7 years payment', // Optional: payment terms
}
```

---

## All 6 Sites & Property IDs

When creating properties, use these naming conventions:

### AYAT
- `ayat-001`, `ayat-002`, `ayat-003`, etc.

### LEGEHARE
- `legehare-001`, `legehare-002`, `legehare-003`, etc.

### CMC
- `cmc-001`, `cmc-002`, `cmc-003`, etc.

### BOLE ATLAS
- `bole-atlas-001`, `bole-atlas-002`, `bole-atlas-003`, etc.

### TEKLEHAIMANOT
- `teklehaimanot-001`, `teklehaimanot-002`, `teklehaimanot-003`, etc.

### HAYEHULET
- `hayehulet-001`, `hayehulet-002`, `hayehulet-003`, etc.

---

## Property Types

Choose from these:
- `'apartment'` - For apartments and flats
- `'villa'` - For villas and standalone houses
- `'townhouse'` - For townhouses
- `'commercial'` - For commercial spaces, shops, offices

---

## Status Options

- `'available'` - Property is for sale
- `'sold'` - Property is already sold
- `'coming-soon'` - Property coming soon

---

## Image Naming Convention

For easier management, organize images by property:

```
public/images/properties/
├── ayat/
│   ├── 01.jpg (bedroom)
│   ├── 02.jpg (living room)
│   ├── 03.jpg (kitchen)
│   └── 04.jpg (exterior)
├── ayat-villa/
│   ├── 01.jpg
│   ├── 02.jpg
│   └── 03.jpg
├── legehare/
├── cmc/
├── bole-atlas/
├── bole-atlas-villa/
├── teklehaimanot/
├── hayehulet/
└── hayehulet-res/
```

---

## Complete Properties Array Example

Here's how your `properties.ts` file should look:

```typescript
import { Property } from '@/lib/properties'

export const properties: Property[] = [
  // AYAT Properties
  {
    id: 'ayat-001',
    title: 'AYAT 2 Bedroom Apartment',
    site: 'AYAT',
    price: 2500000,
    priceFormat: 'ETB 2,500,000',
    bedrooms: 2,
    bathrooms: 2,
    area: 166.21,
    description: 'Spacious 2 bedroom apartment with modern amenities',
    fullDescription: 'Beautiful 2 bedroom apartment with stunning views...',
    images: [
      '/images/properties/ayat/01.jpg',
      '/images/properties/ayat/02.jpg',
      '/images/properties/ayat/03.jpg',
    ],
    amenities: ['Swimming Pool', 'Gym', 'Security', 'Parking', 'Garden'],
    location: {
      lat: 9.0065,
      lng: 38.7469,
      address: 'AYAT Site, Addis Ababa, Ethiopia'
    },
    featured: true,
    status: 'available',
    type: 'apartment',
    paymentPlan: '15% down, 7 years',
  },
  
  // LEGEHARE Properties
  {
    id: 'legehare-001',
    title: 'LEGEHARE 3 Bedroom Villa',
    site: 'LEGEHARE',
    price: 3500000,
    priceFormat: 'ETB 3,500,000',
    bedrooms: 3,
    bathrooms: 2,
    area: 250,
    description: 'Luxury villa in prime location',
    fullDescription: 'Premium villa with high-end finishes...',
    images: [
      '/images/properties/legehare/01.jpg',
      '/images/properties/legehare/02.jpg',
      '/images/properties/legehare/03.jpg',
    ],
    amenities: ['Private Pool', 'Garden', 'Security System', 'Parking'],
    location: {
      lat: 9.0082,
      lng: 38.7489,
      address: 'LEGEHARE, Addis Ababa, Ethiopia'
    },
    featured: true,
    status: 'available',
    type: 'villa',
  },
  
  // Add more properties following the same pattern...
]
```

---

## Featured vs Non-Featured

Properties with `featured: true` will:
- Appear on the home page in the "Featured Properties" section
- Have a "Featured" badge in the card

Properties with `featured: false` will:
- Still appear in the full property listing
- Not appear on home page
- Good for "sold" properties or regular listings

---

## Price Formats

Keep the `priceFormat` field readable:

```
// Good examples:
'ETB 2,500,000'
'ETB 3.5 Million'
'Call for price'
'Price on request'
'From ETB 2,000,000'

// For payment plans:
priceFormat: 'ETB 2,500,000'
paymentPlan: '20% down, 10 years payment'
```

---

## Amenities List (Examples)

Use these for consistency:

```
Residential:
- Swimming Pool
- Gym/Fitness Center
- Security 24/7
- Parking
- Garden
- Water Tank
- Generator Backup
- Hot Water System
- Air Conditioning
- Furnished/Semi-furnished

Commercial:
- Parking
- Security
- Display Window
- Storage
- Break Room
- High Ceilings
- Corner Location
```

---

## Tips for Success

1. **Unique IDs**: Make sure each property has a unique ID
2. **Correct Site Names**: Use exact names: AYAT, LEGEHARE, CMC, BOLE ATLAS, TEKLEHAIMANOT, HAYEHULET
3. **Image Paths**: Always start with `/images/`
4. **Area**: Use square feet (adjust if using sqm, just be consistent)
5. **Featured**: Set 6-8 properties as featured for home page
6. **Coordinates**: Use actual coordinates for accurate location

---

## How to Get Coordinates

Use Google Maps:
1. Right-click on the location
2. Click the coordinates
3. Copy lat/lng values

Example: `9.0065, 38.7469`

---

## Ready?

Once you've updated all your properties:

1. Save the file
2. Run `npm run dev`
3. Visit http://localhost:3000
4. Your properties should appear!

---

**Good luck! 🏠**
