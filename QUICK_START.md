# Gift Real Estate Website - Quick Start Guide

## 🎉 Welcome!

Your Gift Real Estate website is ready to go! Follow these steps to get it running with your property data and images.

---

## 📋 What You Got

A complete Next.js real estate website with:

✅ **6 Property Sites**: AYAT, LEGEHARE, CMC, BOLE ATLAS, TEKLEHAIMANOT, HAYEHULET  
✅ **Modern Design**: Inspired by PropFind  
✅ **Color Scheme**: From Gift Real Estate branding  
✅ **Full Features**: 
- Home page with hero section
- Featured properties
- Advanced filtering
- Individual property pages
- Contact forms
- Mobile responsive

---

## 🚀 Getting Started (5 Minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: Add Your Property Images
Create folder structure:
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

### Step 4: Update Property Data
Edit `src/lib/properties.ts` and replace the sample properties with your actual property details:

```typescript
export const properties: Property[] = [
  {
    id: 'ayat-001',
    title: 'AYAT 2 Bedroom Apartment',
    site: 'AYAT',
    price: YOUR_PRICE,
    priceFormat: 'ETB X,XXX,XXX',
    bedrooms: 2,
    bathrooms: 2,
    area: 166.21,
    description: 'Your description here',
    images: [
      '/images/properties/ayat/01.jpg',
      '/images/properties/ayat/02.jpg',
      '/images/properties/ayat/03.jpg',
    ],
    // ... rest of the properties
  },
]
```

---

## 📝 Property Data Format

Each property needs these details:

```typescript
{
  id: string                   // Unique ID (e.g., 'ayat-001')
  title: string                // Property title
  site: string                 // Site name (AYAT, LEGEHARE, etc.)
  price: number                // Numeric price
  priceFormat: string          // Display price (e.g., "ETB 2,500,000")
  bedrooms: number             // Number of bedrooms
  bathrooms: number            // Number of bathrooms
  area: number                 // Area in square feet
  description: string          // Short description (for cards)
  fullDescription: string      // Long description (for detail page)
  images: string[]             // Array of image paths
  amenities: string[]          // List of amenities
  location: {
    lat: number                // Latitude
    lng: number                // Longitude
    address: string            // Full address
  }
  featured: boolean            // Show on home page?
  status: string               // 'available', 'sold', or 'coming-soon'
  type: string                 // 'apartment', 'villa', 'townhouse', 'commercial'
  paymentPlan?: string         // Optional payment terms
}
```

---

## 📧 Update Contact Information

Edit these files to add your contact details:

### 1. Header Component (`src/components/Header.tsx`)
Update the phone number in the header

### 2. Footer Component (`src/components/Footer.tsx`)
Update:
- Phone numbers
- Email addresses
- Social media links
- Office address

### 3. CTA Section (`src/components/CTA.tsx`)
Update contact details for the call-to-action section

---

## 🎨 Customize Colors (Optional)

Edit `tailwind.config.ts` to match your brand colors:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        // ... adjust to your colors
      },
    },
  },
}
```

---

## 🌐 Deploy to Production

### Option 1: Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Option 2: Build for Any Host
```bash
npm run build
npm start
```

Then deploy the `/out` folder to your hosting provider.

---

## 📁 File Structure Overview

```
gift-real-estate/
├── src/
│   ├── app/
│   │   ├── page.tsx              ← Home page
│   │   ├── properties/
│   │   │   ├── page.tsx          ← Properties listing
│   │   │   └── [id]/page.tsx     ← Property detail
│   │   └── layout.tsx
│   ├── components/               ← All React components
│   └── lib/
│       └── properties.ts         ← YOUR DATA GOES HERE
├── public/
│   └── images/
│       └── properties/           ← YOUR IMAGES GO HERE
├── package.json
├── tailwind.config.ts
└── README.md
```

---

## ✨ Features Already Built In

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Image lazy loading
- ✅ Fast performance
- ✅ SEO optimized
- ✅ Contact forms
- ✅ Property filtering by:
  - Site location
  - Property type
  - Number of bedrooms
  - Featured/newest sorting
- ✅ Detailed property pages
- ✅ Mobile navigation
- ✅ Social media integration ready

---

## 🔧 Troubleshooting

### Images not showing?
1. Make sure image paths are correct in properties.ts
2. Check that image files exist in `public/images/properties/`
3. Use absolute paths starting with `/images/`

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Build failing?
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

---

## 📞 Support

If you need help:
1. Check the README.md file for detailed documentation
2. Review the component files - they're well-commented
3. Refer to Next.js documentation: https://nextjs.org/docs

---

## 🎯 Next Steps

1. ✅ Install and run the project
2. ✅ Add your property images
3. ✅ Update properties.ts with your data
4. ✅ Update contact information
5. ✅ Customize colors (optional)
6. ✅ Deploy to Vercel or your hosting

---

**You're all set! Happy selling! 🏠**

Built with ❤️ for Gift Real Estate
