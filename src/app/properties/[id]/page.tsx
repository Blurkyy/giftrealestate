'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { properties } from '@/lib/properties'
import ContactForm from '@/components/ContactForm'
import { MapPin, Bed, Bath, Ruler, Check, ChevronLeft, ChevronRight, Phone, Mail } from 'lucide-react'

interface PropertyDetailPageProps {
  params: {
    id: string
  }
}

export default function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const property = properties.find(p => p.id === params.id)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
          <Link href="/properties" className="text-primary-600 hover:text-primary-700">
            ← Back to Properties
          </Link>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/properties" className="text-primary-600 hover:text-primary-700 flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            Back to Properties
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Gallery */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Main Image */}
              <div className="relative bg-gray-900 aspect-video">
                <Image
                  src={property.images[selectedImageIndex]}
                  alt={property.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = 'https://via.placeholder.com/800x600?text=Property+Image'
                  }}
                />
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-secondary-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button
                    onClick={prevImage}
                    className="bg-white/80 hover:bg-white rounded-full p-2 transition"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="bg-white/80 hover:bg-white rounded-full p-2 transition"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
                  {selectedImageIndex + 1} / {property.images.length}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2 p-4">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative aspect-video rounded-lg overflow-hidden border-2 transition ${
                      index === selectedImageIndex
                        ? 'border-primary-500'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${property.title} ${index + 1}`}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = 'https://via.placeholder.com/200x150?text=Image'
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPin className="w-5 h-5" />
                <span>{property.location.address}</span>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-6 py-6 border-t border-b">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{property.bedrooms}</div>
                  <div className="text-sm text-gray-600 flex items-center justify-center gap-1 mt-1">
                    <Bed className="w-4 h-4" />
                    Bedrooms
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{property.bathrooms}</div>
                  <div className="text-sm text-gray-600 flex items-center justify-center gap-1 mt-1">
                    <Bath className="w-4 h-4" />
                    Bathrooms
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{property.area}</div>
                  <div className="text-sm text-gray-600 flex items-center justify-center gap-1 mt-1">
                    <Ruler className="w-4 h-4" />
                    Sq Ft
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-secondary-600 capitalize">{property.status}</div>
                  <div className="text-sm text-gray-600 mt-1">Status</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">About This Property</h3>
                <p className="text-gray-700 leading-relaxed">{property.fullDescription}</p>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-xl font-bold mb-3">Amenities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Price Card */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-lg shadow-md p-6 mb-6">
              <div className="text-sm opacity-90 mb-2">Price</div>
              <div className="text-3xl font-bold mb-2">{property.priceFormat}</div>
              <div className="text-sm opacity-90">{property.site} Development</div>
              {property.paymentPlan && (
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="text-sm">{property.paymentPlan}</div>
                </div>
              )}
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">Contact Property Agent</h3>
              <ContactForm propertyTitle={property.title} />
            </div>

            {/* Quick Contact */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <a
                  href="tel:+251921878641"
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <Phone className="w-5 h-5 text-primary-600" />
                  <div>
                    <div className="text-xs text-gray-600">Call Us</div>
                    <div className="font-semibold">+251 921878641</div>
                  </div>
                </a>
                <a
                  href="mailto:giftrealestateofficialmd@gmail.com"
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <Mail className="w-5 h-5 text-primary-600" />
                  <div>
                    <div className="text-xs text-gray-600">Email</div>
                    <div className="font-semibold text-sm">gift@realestateethiopia.com</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
