import Container from './components/Container';
import Carousel from './components/Carousel';
import Link from 'next/link';
import { GraduationCap, Users, Target, BookOpen, FlaskConical, Award, ArrowRight } from 'lucide-react';

const highlights = [
  {
    title: 'Academic Excellence',
    description:
      'Following the Tanzania National Syllabus with practical "learning by doing" for deep understanding.',
    icon: GraduationCap,
  },
  {
    title: 'Supportive Community',
    description:
      'A diverse and motivated student body built on discipline, mentorship, and shared ambition.',
    icon: Users,
  },
  {
    title: 'Leadership Formation',
    description:
      'Developing great thinkers and responsible leaders prepared to serve society with integrity.',
    icon: Target,
  },
];

const whyChooseUs = [
  {
    title: 'WTS Program',
    body: 'Our What Is Not Taught in School program strengthens critical thinking, resilience, creativity, and emotional intelligence.',
    icon: BookOpen,
  },
  {
    title: 'No-Bell System',
    body: 'Students manage schedules through personal responsibility, building independence and high self-discipline.',
    icon: FlaskConical,
  },
  {
    title: 'Modern Learning Facilities',
    body: 'Science labs, digital resources, and professional facilitation combine to create a future-ready education environment.',
    icon: Award,
  },
];

export default function Home() {
  return (
    <>
      <section className="relative">
        <Carousel />
      </section>

      <section className="section-shell">
        <Container>
          <div className="section-heading">
            <span className="kicker">Why Families Choose Mwandege</span>
            <h2 className="mt-5 font-bold">Built for Academic Strength and Character</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="pro-card p-7">
                  <span className="icon-chip">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm">{item.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-shell surface-alt">
        <Container>
          <div className="section-heading">
            <span className="kicker">About Mwandege</span>
            <h2 className="mt-5 font-bold">A School Culture Centered on Excellence</h2>
            <p className="mx-auto mt-4 prose-wrap text-base">
              Mwandege Boys Secondary School combines strong academics with values-based leadership training. Guided by our motto,
              <strong> Learn &amp; Serve</strong>, we nurture students who excel intellectually and contribute positively to their communities.
            </p>
          </div>
          <article className="pro-card mx-auto max-w-4xl p-8 sm:p-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="eyebrow">Our Mission</p>
                <h3 className="mt-3 font-semibold text-slate-900">Developing Great Thinkers</h3>
                <p className="mt-3 text-sm">
                  We cultivate talent and potential through practical learning, professional facilitation, and strong character formation for long-term success.
                </p>
              </div>
              <div>
                <p className="eyebrow">Core Values</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>Trust and accountability in every interaction</li>
                  <li>Respect for self, peers, and community</li>
                  <li>Transparency in teaching and leadership</li>
                </ul>
              </div>
            </div>
          </article>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <div className="section-heading">
            <span className="kicker">Our Approach</span>
            <h2 className="mt-5 font-bold">Programs that Shape Future Leaders</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="pro-card p-7">
                  <span className="icon-chip">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm">{item.body}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-shell surface-brand">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="kicker !border-white/35 !bg-white/15 !text-white">Admissions Open</span>
            <h2 className="mt-5 font-bold !text-white">Ready to Join the Mwandege Community?</h2>
            <p className="mx-auto mt-4 prose-wrap text-on-dark">
              Begin your journey toward academic excellence, personal growth, and disciplined leadership.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/admission" className="cta-secondary !min-w-42">
                Apply Now
              </Link>
              <Link href="/about" className="cta-secondary !min-w-42 !bg-transparent !text-white !border-white/35 hover:!bg-white/10">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
