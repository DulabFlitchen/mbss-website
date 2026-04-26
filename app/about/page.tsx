import type { Metadata } from 'next';
import Container from '../components/Container';
import Link from 'next/link';
import { BookOpen, Target, Rocket, HandHeart, Eye, Search, FlaskConical, Library, Laptop, TreePine } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Mwandege Boys Secondary School',
  description:
    'Learn about Mwandege Boys Secondary School - our mission, vision, values, and commitment to developing disciplined leaders.',
  keywords:
    'About Mwandege, school mission, school vision, school values, educational programs, Tanzania secondary school',
  openGraph: {
    title: 'About Us | Mwandege Boys Secondary School',
    description:
      'Discover our mission to develop student talent and create great thinkers through quality education and character development.',
    type: 'website',
    url: 'https://mwandege-school.com/about',
  },
};

const values = [
  { title: 'Trust', icon: HandHeart, text: 'Strong relationships grounded in reliability, honesty, and responsibility.' },
  { title: 'Respect', icon: Eye, text: 'Dignity and fairness in every interaction, inside and outside the classroom.' },
  { title: 'Transparency', icon: Search, text: 'Open communication and accountability in learning and leadership.' },
];

const facilities = [
  {
    title: 'Science Laboratories',
    text: 'Well-equipped labs for practical biology, chemistry, and physics learning.',
    icon: FlaskConical,
  },
  {
    title: 'Advanced Library',
    text: 'Research resources and focused study spaces that support independent learning.',
    icon: Library,
  },
  {
    title: 'Technology Center',
    text: 'Digital literacy and applied technology learning for the modern world.',
    icon: Laptop,
  },
  {
    title: 'Safe Learning Environment',
    text: 'A calm and secure campus designed for growth, focus, and character formation.',
    icon: TreePine,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-shell surface-brand">
        <Container>
          <div className="section-heading mb-0">
            <span className="kicker !border-white/35 !bg-white/15 !text-white">About Mwandege</span>
            <h1 className="mt-5 font-bold !text-white">Committed to Developing Great Thinkers</h1>
            <p className="mx-auto mt-4 prose-wrap text-on-dark">
              We blend academic discipline, modern pedagogy, and values-driven mentorship to shape students for lifelong impact.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="pro-card p-7 text-center">
              <span className="icon-chip mx-auto"><BookOpen className="h-5 w-5" /></span>
              <h3 className="mt-4 font-semibold text-slate-900">Our Motto</h3>
              <p className="mt-2 text-lg font-semibold text-slate-900">Learn &amp; Serve</p>
            </article>
            <article className="pro-card p-7">
              <span className="icon-chip"><Target className="h-5 w-5" /></span>
              <h3 className="mt-4 font-semibold text-slate-900">Our Vision</h3>
              <p className="mt-2 text-sm">To be Tanzania&apos;s most disciplined secondary school, developing students who become positive forces in society.</p>
            </article>
            <article className="pro-card p-7">
              <span className="icon-chip"><Rocket className="h-5 w-5" /></span>
              <h3 className="mt-4 font-semibold text-slate-900">Our Mission</h3>
              <p className="mt-2 text-sm">To unlock student potential and form great thinkers equipped with knowledge, skills, and values for success.</p>
            </article>
          </div>
        </Container>
      </section>

      <section className="section-shell surface-alt">
        <Container>
          <div className="section-heading">
            <span className="kicker">Core Values</span>
            <h2 className="mt-5 font-bold">The Principles Behind Our School Culture</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.title} className="pro-card p-7 text-center">
                  <span className="icon-chip mx-auto"><Icon className="h-5 w-5" /></span>
                  <h3 className="mt-4 font-semibold text-slate-900">{value.title}</h3>
                  <p className="mt-2 text-sm">{value.text}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <div className="section-heading">
            <span className="kicker">Educational Approach</span>
            <h2 className="mt-5 font-bold">Learning by Doing, Guided by Mentorship</h2>
          </div>
          <article className="pro-card mx-auto max-w-5xl p-8 sm:p-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-slate-900">WTS Program</h3>
                <p className="mt-2 text-sm">
                  Our What Is Not Taught in School initiative cultivates emotional intelligence, creativity, resilience, and leadership beyond conventional academics.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">No-Bell System</h3>
                <p className="mt-2 text-sm">
                  Students manage time with personal schedules and accountability, preparing them for university and professional life.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Professional Facilitation</h3>
                <p className="mt-2 text-sm">
                  Educators mentor each learner intentionally, helping students identify strengths and grow with confidence.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">National Curriculum Excellence</h3>
                <p className="mt-2 text-sm">
                  We implement the Tanzania National Syllabus with practical depth, ensuring readiness for advanced studies and leadership.
                </p>
              </div>
            </div>
          </article>
        </Container>
      </section>

      <section className="section-shell surface-alt">
        <Container>
          <div className="section-heading">
            <span className="kicker">Facilities</span>
            <h2 className="mt-5 font-bold">A Campus Built for Serious Learning</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {facilities.map((facility) => {
              const Icon = facility.icon;
              return (
                <article key={facility.title} className="pro-card p-7">
                  <span className="icon-chip"><Icon className="h-5 w-5" /></span>
                  <h3 className="mt-4 font-semibold text-slate-900">{facility.title}</h3>
                  <p className="mt-2 text-sm">{facility.text}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-shell surface-brand">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="kicker !border-white/35 !bg-white/15 !text-white">Join Us</span>
            <h2 className="mt-5 font-bold !text-white">Interested in Joining Our Community?</h2>
            <p className="mx-auto mt-4 prose-wrap text-on-dark">
              Explore our admission process and become part of a school dedicated to excellence, discipline, and service.
            </p>
            <Link href="/admission" className="cta-secondary mt-8 !min-w-44">
              Explore Admission
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
