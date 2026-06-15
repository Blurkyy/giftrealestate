import Link from 'next/link'
import { properties } from '@/lib/properties'
import PropertyCard from '@/components/PropertyCard'
import { ArrowRight } from 'lucide-react'

export default function FeaturedProperties() {
  const featuredProperties = properties.filter(p => p.featured).slice(0, 6)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Properties</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of exceptional properties, carefully chosen to meet the highest standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-bold hover:shadow-lg transition duration-300"
          >
            View All Properties
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
