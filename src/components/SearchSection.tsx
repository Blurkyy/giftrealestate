'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, MapPin, Home, } from 'lucide-react'
import { sites } from '@/lib/properties'

export default function SearchSection() {
  const router = useRouter()
  const [selectedSite, setSelectedSite] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [minBeds, setMinBeds] = useState('')

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (selectedSite) params.append('site', selectedSite)
    if (selectedType) params.append('type', selectedType)
    if (minBeds) params.append('beds', minBeds)

    router.push(`/properties?${params.toString()}`)
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-primary-600">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Find Your Property</h2>
            <p className="text-gray-600 mb-6">Search across our 6 premium development sites</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Site Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  Site Location
                </label>
                <select
                  value={selectedSite}
                  onChange={(e) => setSelectedSite(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                >
                  <option value="">All Sites</option>
                  {sites.map(site => (
                    <option key={site} value={site}>
                      {site}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Home className="inline w-4 h-4 mr-2" />
                  Property Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                >
                  <option value="">All Types</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>

              {/* Bedrooms Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Home className="inline w-4 h-4 mr-2" />
                  Bedrooms
                </label>
                <select
                  value={minBeds}
                  onChange={(e) => setMinBeds(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button
                  onClick={handleSearch}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-bold hover:shadow-lg transition duration-300 flex items-center justify-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="border-t pt-6">
              <p className="text-sm text-gray-600 mb-3">Popular Searches:</p>
              <div className="flex flex-wrap gap-2">
                {['AYAT', 'CMC', 'BOLE ATLAS', 'All Villas', '2+ Bedrooms'].map(filter => (
                  <button
                    key={filter}
                    onClick={() => {
                      if (sites.includes(filter)) {
                        setSelectedSite(filter)
                      } else if (filter === '2+ Bedrooms') {
                        setMinBeds('2')
                      } else if (filter === 'All Villas') {
                        setSelectedType('villa')
                      }
                    }}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
