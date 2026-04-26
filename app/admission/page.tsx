import type { Metadata } from "next";
import Container from "../components/Container";
import Link from "next/link";
import ApplyForm from "../components/forms/ApplyForm";

export const metadata: Metadata = {
  title: "Admission | Mwandege Boys Secondary School",
  description: "Learn about admission requirements, eligibility criteria, and the application process for Mwandege Boys Secondary School.",
  keywords: "Admission, Application, Eligibility, Forms, Application process, Secondary school admission",
  openGraph: {
    title: "Admission | Mwandege Boys Secondary School",
    description: "Apply to Mwandege Boys Secondary School. Information on eligibility, requirements, and the application process.",
    type: "website",
    url: "https://mwandege-school.com/admission",
  },
};

export default function AdmissionPage() {
  const requirements = [
    "Valid certificate from primary school or equivalent",
    "Birth certificate or national identification",
    "Medical report (up to 3 months old)",
    "Vaccination records",
    "Character reference from previous school",
    "Passport-size photographs (4 copies)",
  ];

  const faqItems = [
    {
      question: "What are the entry requirements?",
      answer: "Students must have completed primary education and demonstrated academic competency. We consider Form Four and Form Six applications based on national exam results and other qualifications.",
    },
    {
      question: "What is the application deadline?",
      answer: "Applications are accepted throughout the year, but we recommend submitting applications by the end of the academic year before entry. Contact our admissions office for specific deadlines.",
    },
    {
      question: "How long does the admission process take?",
      answer: "Typically, the admission process takes 2-4 weeks from application submission to final decision, depending on document completeness and any additional requirements.",
    },
    {
      question: "Is there financial assistance available?",
      answer: "Yes, we offer scholarships to outstanding students based on academic performance. Additionally, flexible payment plans may be available. Contact admissions for details.",
    },
    {
      question: "Can I tour the campus?",
      answer: "We welcome campus tours! Please contact our admissions office to schedule a visit. You'll get to experience our facilities and meet our team.",
    },
    {
      question: "What is the school's disciplinary policy?",
      answer: "We maintain high standards of discipline while being fair and supportive. Our no-bell system encourages responsibility, and we focus on developing character alongside academics.",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 sm:py-16">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Admission</h1>
            <p className="text-lg text-blue-100">
              Join our community of disciplined leaders and great thinkers
            </p>
          </div>
        </Container>
      </section>

      {/* Admission Overview */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Welcome to Our Application Process</h2>
            <p className="text-gray-700 text-lg mb-6">
              We are committed to admitting exceptional students who share our vision of academic excellence and character development. Our holistic admissions process considers academic performance, potential, and alignment with our values.
            </p>
          </div>
        </Container>
      </section>

      {/* Admission Process */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <Container>
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Application Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Submit Application</h3>
                  <p className="text-gray-700">
                    Complete our application form with your personal information, academic history, and contact details. You can apply online or visit our admissions office.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Submit Required Documents</h3>
                  <p className="text-gray-700">
                    Provide all required supporting documents including certificates, identification, medical reports, and references.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Assessment Review</h3>
                  <p className="text-gray-700">
                    Our admissions team reviews your application, academic records, and potential fit with our school community.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Interview (if required)</h3>
                  <p className="text-gray-700">
                    Selected applicants may be invited for an interview with our admissions team to discuss their aspirations and fit with our school.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Admission Decision</h3>
                  <p className="text-gray-700">
                    You will receive an admission decision via email or phone. Accepted students receive enrollment instructions and payment details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Requirements */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Required Documents</h2>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg">
                  <span className="inline-block w-6 h-6 bg-blue-600 text-white rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Application Form */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <Container>
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Online Application</h2>
          <div className="max-w-3xl mx-auto">
            <ApplyForm />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <Container>
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              >
                <summary className="p-6 font-semibold text-blue-900 hover:bg-blue-50 flex items-center justify-between">
                  {item.question}
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="px-6 pb-6 text-gray-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact & CTA */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Apply?</h2>
            <p className="text-gray-700 text-lg mb-8">
              Have questions? Contact our admissions office for more information or to schedule a campus tour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
              >
                Contact Admissions
              </Link>
              <a
                href="mailto:info@mwandegeschools.ac.tz"
                className="inline-block bg-white hover:bg-gray-50 text-blue-600 font-semibold px-8 py-3 rounded-lg border-2 border-blue-600 transition-colors duration-200"
              >
                Email Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
