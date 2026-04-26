import type { Metadata } from 'next';
import Container from '../components/Container';
import { GraduationCap, Trophy, Star, Check, Award, Users, Heart, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Achievements | Mwandege Boys Secondary School',
  description:
    'Discover the accomplishments and accolades of Mwandege Boys Secondary School, including academic, sports, and alumni success stories.',
  keywords: 'Achievements, Awards, Academic excellence, Rankings, Student success, Alumni achievements',
  openGraph: {
    title: 'Achievements | Mwandege Boys Secondary School',
    description: 'Celebrate our students’ achievements in academics, sports, and extracurricular development.',
    type: 'website',
    url: 'https://mwandege-school.com/achievements',
  },
};

const academicAchievements = [
  'Consistent high performance in Form Four and Form Six national examinations',
  'Top grades in mathematics, sciences, and language subjects',
  'Strong university placement outcomes across competitive programs',
  'Recognition for innovative student-led research and projects',
  'Academic excellence awards across both ordinary and advanced levels',
];

const sportsAchievements = [
  'Regional runners-up in football championships',
  'Multiple medal placements in athletics competitions',
  'Top-tier finishes in volleyball and basketball events',
  'Recognition for discipline and sportsmanship in inter-school tournaments',
];

const cocurricularAchievements = [
  'Participation in national debate preliminaries',
  'Science fair projects recognized for creativity and practical value',
  'Award-winning drama and arts festival performances',
  'Student technology innovations presented in competitions',
  'Community service contributions acknowledged by local partners',
];

const drivers = [
  {
    title: 'Strong Academic Infrastructure',
    description: 'Facilities and systems designed for consistency, rigor, and practical application.',
  },
  {
    title: 'Holistic Student Development',
    description: 'Programs focused on intellect, discipline, leadership, and life skills.',
  },
  {
    title: 'Professional Faculty',
    description: 'Dedicated educators who mentor and challenge students toward excellence.',
  },
  {
    title: 'Supportive School Culture',
    description: 'A learning community that rewards growth, effort, and integrity.',
  },
];

export default function AchievementsPage() {
  return (
    <>
      <section className="section-shell surface-brand">
        <Container>
          <div className="section-heading mb-0">
            <span className="kicker !border-white/35 !bg-white/15 !text-white">Our Achievements</span>
            <h1 className="mt-5 font-bold !text-white">Celebrating Excellence Across Every Dimension</h1>
            <p className="mx-auto mt-4 prose-wrap text-on-dark">
              Our students continue to stand out in academics, athletics, leadership, and service through disciplined effort and supportive mentorship.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <div className="section-heading">
            <span className="kicker">Academic Excellence</span>
            <h2 className="mt-5 font-bold">Performance with Consistency</h2>
          </div>
          <article className="pro-card mx-auto max-w-4xl p-7 sm:p-8">
            <ul className="space-y-4">
              {academicAchievements.map((achievement) => (
                <li key={achievement} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </article>
        </Container>
      </section>

      <section className="section-shell surface-alt">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="pro-card p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="icon-chip"><Trophy className="h-5 w-5" /></span>
                <h3 className="font-semibold text-slate-900">Sports Excellence</h3>
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {sportsAchievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-3">
                    <Star className="mt-0.5 h-4.5 w-4.5 shrink-0 text-sky-700" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="pro-card p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="icon-chip"><Sparkles className="h-5 w-5" /></span>
                <h3 className="font-semibold text-slate-900">Co-Curricular Impact</h3>
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {cocurricularAchievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-3">
                    <Star className="mt-0.5 h-4.5 w-4.5 shrink-0 text-sky-700" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <div className="section-heading">
            <span className="kicker">Alumni Outcomes</span>
            <h2 className="mt-5 font-bold">Success Stories Beyond Campus</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: GraduationCap,
                title: 'University Success',
                text: 'Graduates gain admission into leading local and international institutions across diverse fields.',
              },
              {
                icon: Award,
                title: 'Professional Excellence',
                text: 'Alumni thrive as doctors, engineers, educators, entrepreneurs, and public leaders.',
              },
              {
                icon: Users,
                title: 'Community Leadership',
                text: 'Former students contribute through service, advocacy, and meaningful civic participation.',
              },
              {
                icon: Heart,
                title: 'Lifelong Growth',
                text: 'Our graduates continue to embody the Learn & Serve mindset in every stage of life.',
              },
            ].map((story) => (
              <article key={story.title} className="pro-card p-7">
                <span className="icon-chip"><story.icon className="h-5 w-5" /></span>
                <h3 className="mt-4 font-semibold text-slate-900">{story.title}</h3>
                <p className="mt-2 text-sm">{story.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell surface-alt">
        <Container>
          <div className="section-heading">
            <span className="kicker">Why Students Excel</span>
            <h2 className="mt-5 font-bold">The Drivers Behind Our Results</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {drivers.map((item) => (
              <article key={item.title} className="pro-card p-7">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell surface-brand">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="kicker !border-white/35 !bg-white/15 !text-white">By The Numbers</span>
            <h2 className="mt-5 font-bold !text-white">Measured Impact, Growing Every Year</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['95%', 'University Placement'],
                ['500+', 'Current Students'],
                ['50+', 'Faculty Members'],
                ['1000+', 'Alumni Network'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur">
                  <p className="text-3xl font-bold text-white">{value}</p>
                  <p className="mt-1 text-sm text-on-dark">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
