import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react'
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold">
                <Image
                  src="/LOGO.png"
                  alt="Logo"
                  width={100}
                  height={40}
                />
              </div>
              <div>
                <div className="font-bold">Gift Real Estate</div>
                <div className="text-xs text-primary-400">Find Your Home</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Ethiopia's most trusted real estate partner. We help you find your perfect property and build your future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-gray-400 hover:text-white transition">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Sites */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Sites</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white transition cursor-pointer">Ayat</li>
              <li className="text-gray-400 hover:text-white transition cursor-pointer">Legehare</li>
              <li className="text-gray-400 hover:text-white transition cursor-pointer">CMC</li>
              <li className="text-gray-400 hover:text-white transition cursor-pointer">Bole atlas</li>
              <li className="text-gray-400 hover:text-white transition cursor-pointer">Teklehaymanot</li>
              <li className="text-gray-400 hover:text-white transition cursor-pointer">Hayahulet</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+251983468888" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                <Phone className="w-4 h-4" />
                +251983468888
              </a>
              <a href="mailto:addishomesfinder@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                <Mail className="w-4 h-4" />
                <span className="text-sm">
                  addishomesfinder@gmail.com
                </span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Kazanchis, Addis Ababa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#facebook"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#twitter"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#instagram"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/liegehomes"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send className="w-5 h-5" />
            </a>
            <a
              href="#linkedin"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-right text-gray-400 text-sm">
            <p>&copy; {currentYear} Gift Real Estate. All rights reserved.</p>
            <p className="mt-1">Designed & Developed with passion for Ethiopian real estate.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
