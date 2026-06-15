import Link from 'next/link'
import Image from 'next/image'
import { Property } from '@/lib/properties'
import { Bed, Bath, Ruler, MapPin, Star } from 'lucide-react'

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 group cursor-pointer h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-64 bg-gray-200 overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-110 transition duration-300"
          />

          {/* Badges */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {property.featured && (
              <div className="flex items-center gap-1 px-3 py-1 bg-secondary-500 text-white rounded-full text-xs font-bold">
                <Star className="w-3 h-3" />
                Featured
              </div>
            )}
            <div className="px-3 py-1 bg-gray-900/70 text-white rounded-full text-xs font-bold capitalize">
              {property.status}
            </div>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <button className="px-6 py-2 bg-white text-primary-600 rounded-lg font-bold hover:bg-gray-100 transition">
              View Details
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-6">
          {/* Title and Location */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
              {property.title}
            </h3>
            <div className="flex items-center gap-1 text-gray-600 text-sm mb-2">
              <MapPin className="w-4 h-4" />
              <span>{property.site}</span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-4 pb-4 border-b">
            <div className="text-2xl font-bold text-primary-600">{property.priceFormat}</div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col items-center text-center">
              <Bed className="w-5 h-5 text-gray-400 mb-1" />
              <div className="text-sm font-bold text-gray-900">{property.bedrooms}</div>
              <div className="text-xs text-gray-500">Beds</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <Bath className="w-5 h-5 text-gray-400 mb-1" />
              <div className="text-sm font-bold text-gray-900">{property.bathrooms}</div>
              <div className="text-xs text-gray-500">Baths</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <Ruler className="w-5 h-5 text-gray-400 mb-1" />
              <div className="text-sm font-bold text-gray-900">{property.area}</div>
              <div className="text-xs text-gray-500">Sq Ft</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-4 flex-1">
            {property.description}
          </p>

          {/* Type Badge */}
          <div className="flex justify-between items-center">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold capitalize">
              {property.type}
            </span>
            <div className="text-primary-600 font-bold text-sm group-hover:translate-x-1 transition">
              →
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
