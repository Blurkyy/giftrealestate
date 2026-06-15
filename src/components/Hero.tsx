'use client'


import Link from 'next/link'
import { ChevronRight, Home, MapPin, DollarSign } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 min-h-screen flex items-center">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-block mb-6 px-4 py-2 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm">
              Welcome to Gift Real Estate
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Find Your Perfect Home in Addis Ababa
            </h1>

            <p className="text-xl text-primary-100 mb-8 leading-relaxed max-w-md">
              Discover exceptional properties from our 6 premium development sites. Whether you're looking for a cozy apartment or a luxury villa, we have the perfect property for you.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/properties"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-lg font-bold hover:shadow-xl transition duration-300 transform hover:scale-105"
              >
                Browse Properties
                <ChevronRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+251983468888"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-700 text-white rounded-lg font-bold hover:bg-primary-800 transition border border-white/20"
              >
                Call Now
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold">3000+</div>
                <div className="text-primary-100 text-sm">Properties Sold</div>
              </div>
              <div>
                <div className="text-3xl font-bold">25+</div>
                <div className="text-primary-100 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold">6</div>
                <div className="text-primary-100 text-sm">Premium Sites</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Property Cards Stack */}
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center">
                      <Home className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Luxury Villa</div>
                      <div className="text-primary-100 text-sm">BOLE ATLAS</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-4">
                      <span className="text-sm"></span>
                      <span className="text-sm"></span>
                    </div>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition ml-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Modern Apartment</div>
                      <div className="text-primary-100 text-sm">CMC Site</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-4">
                      <span className="text-sm"></span>
                      <span className="text-sm"></span>
                    </div>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Flexible Payment</div>
                      <div className="text-primary-100 text-sm">Easy & Affordable</div>
                    </div>
                  </div>
                  <div className="text-white text-sm">
                    Customized payment plans available for all properties
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
