import type { Metadata } from 'next';
import Container from '../components/Container';
import {
  FlaskConical,
  Lightbulb,
  Users,
  Target,
  Brain,
  Heart,
  Palette,
  Briefcase,
  Calculator,
  Leaf,
  Code,
  GraduationCap,
  Trophy,
  Megaphone,
  Shield,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Academic Programs | Mwandege Boys Secondary School',
  description:
    'Explore our comprehensive academic programs, curriculum, teaching methodology, and extracurricular activities designed for holistic student development.',
  keywords:
    'Academic programs, Curriculum, Teaching methodology, Subjects, Form Four, Form Six, Extracurricular activities',
  openGraph: {
    title: 'Academic Programs | Mwandege Boys Secondary School',
    description:
      'Discover our innovative academic approach combining Tanzania National Syllabus with practical learning and character development.',
    type: 'website',
    url: 'https://mwandege-school.com/academic',
  },
};

const programsFormFour = [
  'English Language',
  'Kiswahili',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'History',
  'Geography',
  'Civics',
  'Information Technology',
];

const programsFormSix = [
  'English Language',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'History',
  'Geography',
  'Literature',
  'Economics',
  'Accounting',
  'Information Technology',
  'Entrepreneurship',
];

const teachingMethodologies = [
  {
    title: 'Learning by Doing',
    description:
      'Practical, hands-on learning experiences that connect theory to real-world application.',
    icon: FlaskConical,
  },
  {
    title: 'Critical Thinking',
    description: 'Students evaluate, analyze, and synthesize ideas to form independent judgment.',
    icon: Lightbulb,
  },
  {
    title: 'Collaborative Learning',
    description: 'Group projects and discussions strengthen communication and teamwork skills.',
    icon: Users,
  },
  {
    title: 'Individual Mentorship',
    description: 'One-on-one support helps each student progress with confidence and direction.',
    icon: Target,
  },
];

const activities = [
  { icon: FlaskConical, text: 'Science Club - experiments and scientific inquiry' },
  { icon: Megaphone, text: 'Debate Club - argumentation and public speaking' },
  { icon: Trophy, text: 'Sports - football, basketball, volleyball, and athletics' },
  { icon: Palette, text: 'Drama & Arts - creative expression and performance' },
  { icon: Code, text: 'Robotics & Technology Club - innovation and coding' },
  { icon: Heart, text: 'Community Service - meaningful social engagement' },
  { icon: Shield, text: 'Student Council - leadership and school governance' },
];

export default function AcademicPage() {
  return (
    <>
      <section className="section-shell surface-brand">
        <Container>
          <div className="section-heading mb-0">
            <span className="kicker !border-white/35 !bg-white/15 !text-white">Academic Excellence</span>
            <h1 className="mt-5 font-bold !text-white">Comprehensive Programs for Holistic Development</h1>
            <p className="mx-auto mt-4 prose-wrap text-on-dark">
              We combine curriculum mastery, practical learning, and leadership development to prepare students for advanced study and life beyond school.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <div className="section-heading">
            <span className="kicker">Curriculum</span>
            <h2 className="mt-5 font-bold">National Standards, Modern Delivery</h2>
            <p className="mx-auto mt-4 prose-wrap text-base">
              Our teaching approach blends Tanzania National Syllabus requirements with critical thinking, practical application, and mentorship.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="pro-card p-7 sm:p-8">
              <p className="eyebrow">Form Four</p>
              <h3 className="mt-3 font-semibold text-slate-900">Core Programs</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {programsFormFour.map((program) => (
                  <div key={program} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-700">
                    {program}
                  </div>
                ))}
              </div>
            </article>

            <article className="pro-card p-7 sm:p-8">
              <p className="eyebrow">Form Six</p>
              <h3 className="mt-3 font-semibold text-slate-900">Advanced Streams</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {programsFormSix.map((program) => (
                  <div key={program} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-700">
                    {program}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="section-shell surface-alt">
        <Container>
          <div className="section-heading">
            <span className="kicker">Methodology</span>
            <h2 className="mt-5 font-bold">How We Teach</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {teachingMethodologies.map((method) => {
              const Icon = method.icon;
              return (
                <article key={method.title} className="pro-card p-7">
                  <span className="icon-chip"><Icon className="h-5 w-5" /></span>
                  <h3 className="mt-4 font-semibold text-slate-900">{method.title}</h3>
                  <p className="mt-2 text-sm">{method.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <div className="section-heading">
            <span className="kicker">WTS Program</span>
            <h2 className="mt-5 font-bold">What Is Not Taught in School</h2>
            <p className="mx-auto mt-4 prose-wrap text-base">
              Our WTS program bridges classroom learning with essential life and leadership skills.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: Brain, title: 'Emotional Intelligence', text: 'Self-awareness, empathy, and healthy relationship management.' },
              { icon: Heart, title: 'Resilience', text: 'Coping strategies for setbacks, pressure, and personal growth.' },
              { icon: Palette, title: 'Creativity & Innovation', text: 'Flexible thinking and practical problem-solving in dynamic contexts.' },
              { icon: Briefcase, title: 'Professional Skills', text: 'Communication, leadership, and workplace readiness.' },
            ].map((item) => (
              <article key={item.title} className="pro-card p-7">
                <span className="icon-chip"><item.icon className="h-5 w-5" /></span>
                <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell surface-alt">
        <Container>
          <div className="section-heading">
            <span className="kicker">Beyond the Classroom</span>
            <h2 className="mt-5 font-bold">Extracurricular Activities</h2>
          </div>
          <div className="mx-auto max-w-4xl space-y-3">
            {activities.map((activity, index) => (
              <article key={index} className="pro-card flex items-start gap-4 p-5">
                <span className="icon-chip !h-10 !w-10 !rounded-lg"><activity.icon className="h-4.5 w-4.5" /></span>
                <p className="pt-1 text-sm">{activity.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <div className="section-heading">
            <span className="kicker">Assessment</span>
            <h2 className="mt-5 font-bold">Evaluation and Progress Tracking</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Calculator,
                title: 'Continuous Assessment',
                text: 'Frequent quizzes, assignments, and projects for ongoing feedback and mastery.',
              },
              {
                icon: GraduationCap,
                title: 'Comprehensive Examinations',
                text: 'Structured term and national exams to measure subject readiness and progression.',
              },
              {
                icon: Leaf,
                title: 'Progress Reports',
                text: 'Regular communication with parents and guardians on student performance.',
              },
            ].map((item) => (
              <article key={item.title} className="pro-card p-7">
                <span className="icon-chip"><item.icon className="h-5 w-5" /></span>
                <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell surface-brand">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="kicker !border-white/35 !bg-white/15 !text-white">Signature System</span>
            <h2 className="mt-5 font-bold !text-white">The No-Bell Culture of Responsibility</h2>
            <p className="mx-auto mt-4 prose-wrap text-on-dark">
              Students manage time through personal planning and discipline, building habits that translate directly to higher education and professional success.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
