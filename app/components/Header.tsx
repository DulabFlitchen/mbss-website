'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Container from './Container';

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Admission', href: '/admission' },
  { label: 'Academic', href: '/academic' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-lg" style={{ boxShadow: 'var(--shadow-nav)' }}>
      <Container>
        <div className="flex h-18 items-center justify-between gap-4 sm:h-20">
          <Link href="/" className="flex items-center gap-3 rounded-xl pr-2">
            <Image
              src="/schoolLogo.png"
              alt="Mwandege Boys Secondary School Logo"
              width={52}
              height={52}
              className="h-11 w-11 rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm sm:h-12 sm:w-12"
              priority
            />
            <div className="hidden sm:block leading-tight">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-900">Mwandege</p>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Boys Secondary</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1.5 lg:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-3.5 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive(link.href)
                    ? 'bg-sky-50 text-sky-900 shadow-sm'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="/admission" className="cta-primary">
              Apply Now
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link href="/admission" className="cta-primary text-sm">
              Apply
            </Link>
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="pb-5 lg:hidden">
            <div className="pro-card flex flex-col gap-1 p-2.5">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                    isActive(link.href)
                      ? 'bg-sky-50 text-sky-900'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
