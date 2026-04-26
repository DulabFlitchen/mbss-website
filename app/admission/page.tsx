import type { Metadata } from 'next';
import Container from '../components/Container';
import Link from 'next/link';
import ApplyForm from '../components/forms/ApplyForm';

export const metadata: Metadata = {
  title: 'Admission | Mwandege Boys Secondary School',
  description:
    'Learn about admission requirements, eligibility criteria, and the application process for Mwandege Boys Secondary School.',
  keywords:
    'Admission, Application, Eligibility, Forms, Application process, Secondary school admission',
  openGraph: {
    title: 'Admission | Mwandege Boys Secondary School',
    description:
      'Apply to Mwandege Boys Secondary School. Information on eligibility, requirements, and the application process.',
    type: 'website',
    url: 'https://mwandege-school.com/admission',
  },
};

const requirements = [
  'Valid certificate from primary school or equivalent',
  'Birth certificate or national identification',
  'Medical report (up to 3 months old)',
  'Vaccination records',
  'Character reference from previous school',
  'Passport-size photographs (4 copies)',
];

const steps = [
  {
    title: 'Submit Application',
    body: 'Complete our online or in-person application with student and guardian information.',
  },
  {
    title: 'Provide Documents',
    body: 'Submit all required supporting records and certificates for review.',
  },
  {
    title: 'Assessment Review',
    body: 'Our admissions team evaluates readiness, alignment, and overall application quality.',
  },
  {
    title: 'Interview (If Required)',
    body: 'Some applicants may be invited for a short interview with admissions staff.',
  },
  {
    title: 'Admission Decision',
    body: 'You receive confirmation and enrollment instructions via email or phone.',
  },
];

const faqItems = [
  {
    question: 'What are the entry requirements?',
    answer:
      'Students should have completed primary education and demonstrated academic readiness. Form Four and Form Six entries are considered based on examination performance and qualifications.',
  },
  {
    question: 'What is the application deadline?',
    answer:
      'Applications are accepted throughout the year, but early submission is strongly recommended before each intake period.',
  },
  {
    question: 'How long does the admission process take?',
    answer:
      'Most complete applications are processed within 2 to 4 weeks, depending on document readiness.',
  },
  {
    question: 'Is financial assistance available?',
    answer:
      'Yes. Scholarships are offered for outstanding performance, and flexible payment plans may be available.',
  },
  {
    question: 'Can I visit the campus before applying?',
    answer: 'Yes, campus tours are available by appointment through our admissions office.',
  },
];

export default function AdmissionPage() {
  return (
    <>
      <section className="section-shell surface-brand">
        <Container>
          <div className="section-heading mb-0">
            <span className="kicker !border-white/35 !bg-white/15 !text-white">Admissions</span>
            <h1 className="mt-5 font-bold !text-white">Join a Community of Disciplined Leaders</h1>
            <p className="mx-auto mt-4 prose-wrap text-on-dark">
              Our process is transparent, supportive, and focused on students ready to grow in academics and character.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <div className="section-heading">
            <span className="kicker">How It Works</span>
            <h2 className="mt-5 font-bold">Application Process</h2>
          </div>
          <div className="mx-auto max-w-5xl space-y-4">
            {steps.map((step, index) => (
              <article key={step.title} className="pro-card flex gap-5 p-6 sm:p-7">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-900">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-1 text-sm">{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell surface-alt">
        <Container>
          <div className="section-heading">
            <span className="kicker">Requirements</span>
            <h2 className="mt-5 font-bold">Required Admission Documents</h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <ul className="space-y-3">
              {requirements.map((req) => (
                <li key={req} className="pro-card flex items-start gap-3 p-4 text-sm">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-900">
                    ✓
                  </span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <div className="section-heading">
            <span className="kicker">Apply Online</span>
            <h2 className="mt-5 font-bold">Start Your Application</h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <ApplyForm />
          </div>
        </Container>
      </section>

      <section className="section-shell surface-alt">
        <Container>
          <div className="section-heading">
            <span className="kicker">FAQs</span>
            <h2 className="mt-5 font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="mx-auto max-w-4xl space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="pro-card overflow-hidden">
                <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-slate-900 transition-colors hover:bg-slate-50">
                  {item.question}
                </summary>
                <p className="border-t border-slate-100 px-6 py-5 text-sm">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell surface-brand">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="kicker !border-white/35 !bg-white/15 !text-white">Need Help?</span>
            <h2 className="mt-5 font-bold !text-white">Talk to Our Admissions Team</h2>
            <p className="mx-auto mt-4 prose-wrap text-on-dark">
              We are available to guide you through eligibility, timelines, and required documents.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="cta-secondary !min-w-44">
                Contact Admissions
              </Link>
              <a href="mailto:info@mwandegeschools.ac.tz" className="cta-secondary !min-w-44 !bg-transparent !text-white !border-white/35 hover:!bg-white/10">
                Email Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
