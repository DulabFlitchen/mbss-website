import type { Metadata } from 'next';
import Container from '../components/Container';
import ContactForm from '../components/forms/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Mwandege Boys Secondary School',
  description:
    'Get in touch with Mwandege Boys Secondary School. Contact us for admissions, inquiries, or to schedule a campus tour.',
  keywords: 'Contact, Email, Phone, Address, Location, Admissions inquiry, Campus tour',
  openGraph: {
    title: 'Contact Us | Mwandege Boys Secondary School',
    description:
      'Get in touch with Mwandege Boys Secondary School. Contact us for admissions, inquiries, or to schedule a campus tour.',
    type: 'website',
    url: 'https://mwandege-school.com/contact',
  },
};

const socialLinks = [
  {
    href: 'https://ww.facebook.com/MwandegeBoysHighSchool',
    label: 'Facebook',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 4.84 3.44 8.89 8 9.8v-6.93H7.9v-2.87H10V9.85c0-2.08 1.23-3.23 3.12-3.23.9 0 1.85.16 1.85.16v2.03h-1.04c-1.03 0-1.35.64-1.35 1.3v1.56h2.3l-.37 2.87h-1.93v6.93c4.56-.91 8-4.96 8-9.8Z" />
      </svg>
    ),
  },
  {
     href: 'https://twitter.com/MwandegeBoys?t=VRDvn7LwjiElejyH9iEMMQ&s=09' ,
    label: 'X',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.9 2h3.3l-7.2 8.2 8.5 11.8H17l-5.2-6.8L5.7 22H2.4l7.7-8.8L1.8 2h6.7l4.8 6.2L18.9 2Zm-1.1 18h1.8L7.1 3.9H5.2L17.8 20Z" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/mwandege_boys_high_school/' ,
    label: 'Instagram',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm10 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    ),
  },
  {
    href:'https://www.youtube.com/@mwandegeboyshighschool' ,
    label: 'YouTube',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23 12s0-3.2-.4-4.7a3 3 0 0 0-2.1-2.1C18.9 4.8 12 4.8 12 4.8s-6.9 0-8.5.4a3 3 0 0 0-2.1 2.1C1 8.8 1 12 1 12s0 3.2.4 4.7a3 3 0 0 0 2.1 2.1c1.6.4 8.5.4 8.5.4s6.9 0 8.5-.4a3 3 0 0 0 2.1-2.1C23 15.2 23 12 23 12Zm-13.2 3.8V8.2l6.2 3.8-6.2 3.8Z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="section-shell surface-brand">
        <Container>
          <div className="section-heading mb-0">
            <span className="kicker !border-white/35 !bg-white/15 !text-white">Contact Us</span>
            <h1 className="mt-5 font-bold !text-white">We Are Here to Help</h1>
            <p className="mx-auto mt-4 prose-wrap text-on-dark">
              Reach out for admissions guidance, campus visits, or general school inquiries.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="pro-card p-7 text-center">
              <span className="icon-chip mx-auto"><MapPin className="h-5 w-5" /></span>
              <h3 className="mt-4 font-semibold text-slate-900">Address</h3>
              <p className="mt-2 text-sm">Mwandege Boys Secondary School<br />P.O. Box 61524<br />Mwandege, Tanzania</p>
            </article>
            <article className="pro-card p-7 text-center">
              <span className="icon-chip mx-auto"><Phone className="h-5 w-5" /></span>
              <h3 className="mt-4 font-semibold text-slate-900">Phone</h3>
              <p className="mt-2 text-sm">+255 656 209 607<br />Office Hours: Mon-Fri<br />8:00 AM - 4:00 PM</p>
            </article>
            <article className="pro-card p-7 text-center">
              <span className="icon-chip mx-auto"><Mail className="h-5 w-5" /></span>
              <h3 className="mt-4 font-semibold text-slate-900">Email</h3>
              <p className="mt-2 text-sm">info@mwandegeschools.ac.tz<br />admissions@mwandegeschools.ac.tz</p>
            </article>
          </div>
        </Container>
      </section>

      <section className="section-shell surface-alt">
        <Container>
          <div className="section-heading">
            <span className="kicker">Send a Message</span>
            <h2 className="mt-5 font-bold">Talk to Our Team</h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <ContactForm />
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <article className="pro-card mx-auto max-w-4xl p-8 text-center sm:p-10">
            <span className="kicker">Location</span>
            <h2 className="mt-5 font-bold">Find Us</h2>
            <p className="mx-auto mt-4 prose-wrap text-base">
              Located in Mwandege, our campus provides a focused learning environment while remaining accessible for families and visitors.
            </p>
              {/* Google Maps Embed */}
              <div className="bg-gray-800 rounded-xl overflow-hidden mb-8 h-[400px]">
             <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3564356833112!2d39.27803719765562!3d-6.967210638834684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c3392d1d848d7%3A0x4715f394c8f3efe0!2sMwandege%20Secondary%20School!5e0!3m2!1sen!2stz!4v1777203108808!5m2!1sen!2stz" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm">
              Contact us for directions or to schedule a campus tour.
            </div>
          </article>
        </Container>
      </section>

      <section className="section-shell surface-brand">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="kicker !border-white/35 !bg-white/15 !text-white">Stay Connected</span>
            <h2 className="mt-5 font-bold !text-white">Follow Our School Updates</h2>
            <p className="mx-auto mt-4 prose-wrap text-on-dark">
              Get updates on student activities, admissions, events, and academic milestones.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {socialLinks.map((item) => {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/12 text-white transition hover:bg-white/20"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
