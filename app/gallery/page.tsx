import type { Metadata } from 'next';
import Container from '../components/Container';
import GalleryGrid from '../components/GalleryGrid';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gallery | Mwandege Boys Secondary School',
  description:
    'Explore our photo gallery showcasing campus life, events, activities, and facilities at Mwandege Boys Secondary School.',
  keywords: 'Gallery, Photos, Campus, Events, Activities, School life, Facilities',
  openGraph: {
    title: 'Gallery | Mwandege Boys Secondary School',
    description:
      'View photos of campus life, events, activities, and facilities at Mwandege Boys Secondary School.',
    type: 'website',
    url: 'https://mwandege-school.com/gallery',
  },
};

export default function GalleryPage() {
  return (
    <>
      <section className="section-shell surface-brand">
        <Container>
          <div className="section-heading mb-0">
            <span className="kicker !border-white/35 !bg-white/15 !text-white">Photo Gallery</span>
            <h1 className="mt-5 font-bold !text-white">A Visual Story of Campus Life</h1>
            <p className="mx-auto mt-4 prose-wrap text-on-dark">
              Explore moments from academics, student activities, events, and the everyday spirit of Mwandege Boys Secondary School.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <div className="section-heading">
            <span className="kicker">Our Campus</span>
            <h2 className="mt-5 font-bold">Learning, Leadership, and Community in Action</h2>
          </div>
          <GalleryGrid />
        </Container>
      </section>

      <section className="section-shell surface-alt">
        <Container>
          <article className="pro-card mx-auto max-w-4xl p-8 text-center sm:p-10">
            <span className="kicker">Visit Us</span>
            <h2 className="mt-5 font-bold">Experience Mwandege Firsthand</h2>
            <p className="mx-auto mt-4 prose-wrap text-base">
              Schedule a campus tour to explore our facilities, meet our team, and see the learning environment in person.
            </p>
            <Link href="/contact" className="cta-primary mt-8">
              Contact Us
            </Link>
          </article>
        </Container>
      </section>
    </>
  );
}
