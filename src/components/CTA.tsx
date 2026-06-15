import Link from 'next/link'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
            <p className="text-lg text-primary-100 mb-6 leading-relaxed">
              Our expert team at Gift Real Estate is ready to help you find the perfect property that matches your needs and budget. Contact us today for a free consultation.
            </p>

            {/* Contact Options */}
            <div className="space-y-4 mb-8">
              <a
                href="tel:+251983468888"
                className="flex items-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition"
              >
                <Phone className="w-6 h-6" />
                <div>
                  <div className="text-sm opacity-75">Call Us Now</div>
                  <div className="font-bold">+251983468888</div>
                </div>
              </a>

              <a
                href="mailto:zelealemtesfa8@gmail.com"
                className="flex items-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition"
              >
                <Mail className="w-6 h-6" />
                <div>
                  <div className="text-sm opacity-75">Email Us</div>
                  <div className="font-bold">zelealemtesfa8@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                <MapPin className="w-6 h-6" />
                <div>
                  <div className="text-sm opacity-75">Visit Our Office</div>
                  <div className="font-bold">Kazanchis, Black Gold Plaza</div>
                </div>
              </div>
            </div>

            <Link
              href="/properties"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-lg font-bold hover:shadow-lg transition duration-300"
            >
              Browse Properties
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <div>
                  <div className="font-bold mb-1">25+ Years Experience</div>
                  <div className="text-sm opacity-75">Trusted by thousands of customers</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <div>
                  <div className="font-bold mb-1">Premium Locations</div>
                  <div className="text-sm opacity-75">6 premium development sites</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <div>
                  <div className="font-bold mb-1">Flexible Payment Plans</div>
                  <div className="text-sm opacity-75">Customized to suit your budget</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <div>
                  <div className="font-bold mb-1">Quality Assurance</div>
                  <div className="text-sm opacity-75">Every property meets strict standards</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
