'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* School Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Mwandege Boys Secondary School</h3>
            <p className="text-blue-100 text-sm mb-4">
              Developing disciplined, motivated leaders through quality education and character development. Motto: "Learn & Serve"
            </p>
            <div className="space-y-2 text-sm text-blue-100">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <p>Tanzania<br />East Africa</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+255656209607" className="hover:text-white transition-colors">
                  +255 656 209 607
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@mwandegeschools.ac.tz" className="hover:text-white transition-colors">
                  info@mwandegeschools.ac.tz
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/admission" className="hover:text-white transition-colors">
                  Admission
                </Link>
              </li>
              <li>
                <Link href="/academic" className="hover:text-white transition-colors">
                  Academic
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-white transition-colors">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4 mb-6">
              {/* Facebook */}
              <a
                href="https://facebook.com/mwandege-school"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="bg-blue-700 hover:bg-blue-600 p-2 rounded-lg transition-colors duration-200 flex items-center justify-center w-10 h-10"
                title="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href="https://twitter.com/mwandege_school"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="bg-blue-700 hover:bg-blue-600 p-2 rounded-lg transition-colors duration-200 flex items-center justify-center w-10 h-10"
                title="Twitter"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.627l-5.1-6.659-5.833 6.659H2.705l7.73-8.835L1.75 2.25h6.969l4.557 6.01L17.464 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/mwandege_school"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="bg-blue-700 hover:bg-blue-600 p-2 rounded-lg transition-colors duration-200 flex items-center justify-center w-10 h-10"
                title="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@mwandege-school"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on YouTube"
                className="bg-blue-700 hover:bg-blue-600 p-2 rounded-lg transition-colors duration-200 flex items-center justify-center w-10 h-10"
                title="YouTube"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            <p className="text-blue-100 text-sm">
              Stay connected with us for the latest updates and announcements.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700"></div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-blue-100">
          <p>&copy; {currentYear} Mwandege Boys Secondary School. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
