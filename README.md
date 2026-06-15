# Gift Real Estate Website

A modern, responsive real estate property listing website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🏠 **Modern Property Listings** - Beautiful property cards with images and details
- 🔍 **Advanced Filtering** - Filter by site, property type, bedrooms, and more
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Built with Next.js for optimal performance
- 🎨 **Premium Design** - Professional UI inspired by PropFind design patterns
- 🌐 **SEO Optimized** - Proper meta tags and structured data

## Project Structure

```
gift-real-estate/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Global styles
│   │   └── properties/
│   │       ├── page.tsx          # Properties listing page
│   │       └── [id]/
│   │           └── page.tsx      # Individual property detail page
│   ├── components/
│   │   ├── Header.tsx            # Navigation header
│   │   ├── Footer.tsx            # Footer section
│   │   ├── Hero.tsx              # Hero section
│   │   ├── SearchSection.tsx     # Search/filter component
│   │   ├── Statistics.tsx        # Stats section
│   │   ├── FeaturedProperties.tsx# Featured properties section
│   │   ├── PropertyCard.tsx      # Individual property card
│   │   ├── ContactForm.tsx       # Contact form component
│   │   └── CTA.tsx               # Call-to-action section
│   └── lib/
│       └── properties.ts         # Property data and types
├── public/
│   └── images/
│       └── properties/           # Property images folder
├── package.json
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

## Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd gift-real-estate
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## Setup Instructions

### 1. Add Property Images

Create the following folder structure and add your images:
```
public/
└── images/
    └── properties/
        ├── ayat/
        │   ├── 01.jpg
        │   ├── 02.jpg
        │   └── 03.jpg
        ├── ayat-villa/
        ├── legehare/
        ├── cmc/
        ├── bole-atlas/
        ├── bole-atlas-villa/
        ├── teklehaimanot/
        ├── hayehulet/
        └── hayehulet-res/
```

### 2. Update Property Data

Edit `src/lib/properties.ts` to add your property details:

```typescript
export const properties: Property[] = [
  {
    id: 'ayat-001',
    title: 'AYAT 2 Bedroom Apartment',
    site: 'AYAT',
    price: 2500000,
    priceFormat: 'ETB 2,500,000',
    bedrooms: 2,
    bathrooms: 2,
    area: 166.21,
    description: 'Your property description',
    fullDescription: 'Detailed property description',
    images: [
      '/images/properties/ayat/01.jpg',
      '/images/properties/ayat/02.jpg',
      '/images/properties/ayat/03.jpg',
    ],
    amenities: ['Swimming Pool', 'Gym', 'Security', 'Parking'],
    location: {
      lat: 9.0065,
      lng: 38.7469,
      address: 'AYAT Site, Addis Ababa, Ethiopia'
    },
    featured: true,
    status: 'available',
    type: 'apartment',
    paymentPlan: '15% down, 7 years payment',
  },
  // Add more properties...
]
```

### 3. Update Contact Information

Edit components/Footer.tsx and components/CTA.tsx to update:
- Phone numbers
- Email addresses
- Office address
- Social media links

### 4. Customize Colors (Optional)

Edit `tailwind.config.ts` to change the primary/secondary colors:

```typescript
colors: {
  primary: {
    // Your custom colors
  },
  secondary: {
    // Your custom colors
  },
}
```

## Property Data Structure

Each property object includes:

```typescript
{
  id: string                    // Unique identifier
  title: string                 // Property title
  site: string                  // Development site name
  price: number                 // Price in numbers
  priceFormat: string           // Formatted price (e.g., "ETB 2,500,000")
  bedrooms: number              // Number of bedrooms
  bathrooms: number             // Number of bathrooms
  area: number                  // Area in sq ft
  description: string           // Short description
  fullDescription: string       // Detailed description
  images: string[]              // Array of image URLs
  amenities: string[]           // List of amenities
  location: {                   // Location details
    lat: number                 // Latitude
    lng: number                 // Longitude
    address: string             // Full address
  }
  featured: boolean             // Show in featured section?
  status: string                // 'available' | 'sold' | 'coming-soon'
  type: string                  // 'apartment' | 'villa' | 'townhouse' | 'commercial'
  paymentPlan?: string          // Optional payment plan details
}
```

## Available Pages

- **Home** (`/`) - Landing page with featured properties
- **Properties** (`/properties`) - Full property listing with filters
- **Property Detail** (`/properties/[id]`) - Individual property page

## Development

### Available Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Icons** - Icons (lucide-react)
- **Image Optimization** - Next.js Image component

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import repository to Vercel
3. Set environment variables if needed
4. Deploy

### Deploy to Other Platforms

The project is compatible with any hosting that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean
- Railway
- Heroku (with additional configuration)

## Performance Tips

1. **Image Optimization**: Ensure all property images are optimized (max 1-2 MB)
2. **Lazy Loading**: Images are automatically lazy-loaded by Next.js
3. **Caching**: Configure appropriate cache headers in deployment
4. **CDN**: Use a CDN for image delivery

## SEO Optimization

The site includes:
- Meta descriptions
- Open Graph tags
- Mobile viewport configuration
- Proper heading hierarchy
- Structured data ready for implementation

## Customization Guide

### Changing the Logo

Replace the "G" in the header with your actual logo in `src/components/Header.tsx`:

```tsx
<div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center text-white font-bold">
  {/* Replace with <Image src="/logo.png" ... /> */}
</div>
```

### Adding More Sites

Update `src/lib/properties.ts`:

```typescript
export const sites = [
  'AYAT',
  'LEGEHARE',
  'CMC',
  'BOLE ATLAS',
  'TEKLEHAIMANOT',
  'HAYEHULET',
  'YOUR_NEW_SITE',  // Add new site
]
```

Then add properties for that site.

## Support

For questions or issues, contact:
- Email: giftrealestateofficialmd@gmail.com
- Phone: +251 921878641
- Address: Kazanchis, Black Gold Plaza, Addis Ababa, Ethiopia

## License

© 2026 Gift Real Estate. All rights reserved.

---

**Happy Selling! 🏠**
