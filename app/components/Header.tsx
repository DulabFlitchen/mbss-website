'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'ADMISSION', href: '/admission' },
    { label: 'ACADEMIC', href: '/academic' },
    { label: 'ACHIEVEMENTS', href: '/achievements' },
    { label: 'GALLERY', href: '/gallery' },
    { label: 'CONTACTS', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <Image
              src="/schoolLogo.png"
              alt="Mwandege Boys Secondary School Logo"
              width={45}
              height={45}
              className="w-10 sm:w-12 h-auto"
              priority
            />
            <div className="hidden sm:block">
              <p className="text-xs sm:text-sm font-bold text-blue-900">MWANDEGE</p>
              <p className="text-xs text-blue-700">BOYS SECONDARY</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-blue-900 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Apply Button */}
          <div className="hidden lg:block">
            <Link
              href="/admission"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-4">
            <Link
              href="/admission"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200"
            >
              Apply
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-blue-900 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
