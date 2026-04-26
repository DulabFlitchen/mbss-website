'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import Container from './Container';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Admission', href: '/admission' },
  { label: 'Academic', href: '/academic' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
];

const socials = [
  { label: 'Facebook', href: 'https://ww.facebook.com/MwandegeBoysHighSchool' },
  { label: 'X', href: 'https://twitter.com/MwandegeBoys?t=VRDvn7LwjiElejyH9iEMMQ&s=09' },
  { label: 'Instagram', href: 'https://www.instagram.com/mwandege_boys_high_school/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@mwandegeboyshighschool' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-on-dark mt-auto border-t border-slate-200 bg-slate-950">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <section>
            <p className="eyebrow !text-on-dark-muted">Mwandege Boys Secondary School</p>
            <h3 className="mt-3 text-2xl font-semibold !text-white">Learn &amp; Serve</h3>
            <p className="text-on-dark-muted mt-4 max-w-sm text-sm">
              Developing disciplined, motivated leaders through quality education, character, and practical life skills.
            </p>
            <div className="mt-6 space-y-3 text-sm text-on-dark">
              <p className="flex items-center gap-2 !text-white"><MapPin size={16} /> Mwandege, Pwani, Tanzania</p>
              <a href="tel:+255656209607" className="flex items-center gap-2 hover:text-white"><Phone size={16} /> +255 656 209 607</a>
              <a href="mailto:info@mwandegeschools.ac.tz" className="flex items-center gap-2 hover:text-white"><Mail size={16} /> info@mwandegeschools.ac.tz</a>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold !text-white">Quick Links</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-on-dark-muted transition-colors hover:text-on-dark-strong">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold !text-white">Connect With Us</h3>
            <p className="text-on-dark-muted mt-4 text-sm">Stay updated on school events, admissions, and student achievements.</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-dark rounded-full border border-slate-700 bg-slate-900 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.06em] hover:border-slate-500 hover:text-on-dark-strong"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className="text-on-dark-muted mt-12 flex flex-col items-start justify-between gap-3 border-t border-slate-800 pt-6 text-sm sm:flex-row sm:items-center">
          <p>© {currentYear} Mwandege Boys Secondary School. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-on-dark-strong">Privacy Policy</Link>
            <Link href="#" className="hover:text-on-dark-strong">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
