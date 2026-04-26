import type { Metadata } from "next";
import Container from "../components/Container";
import Link from "next/link";
import { BookOpen, Target, Rocket, HandHeart, Eye, Search, FlaskConical, Library, Laptop, TreePine } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Mwandege Boys Secondary School",
  description: "Learn about Mwandege Boys Secondary School - Our mission, vision, values, history, and commitment to developing great thinkers and disciplined leaders.",
  keywords: "About Mwandege, School mission, School vision, School values, Educational programs, Tanzania secondary school",
  openGraph: {
    title: "About Us | Mwandege Boys Secondary School",
    description: "Discover our mission to develop student talent and create great thinkers through quality education and character development.",
    type: "website",
    url: "https://mwandege-school.com/about",
    images: [
      {
        url: "https://mwandege-school.com/schoolLogo.png",
        width: 200,
        height: 200,
        alt: "Mwandege Boys Secondary School Logo",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 sm:py-16">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Mwandege</h1>
            <p className="text-lg text-blue-100">
              Committed to developing great thinkers and disciplined leaders
            </p>
          </div>
        </Container>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Motto */}
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <BookOpen className="w-10 h-10 mx-auto text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Our Motto</h3>
              <p className="text-xl text-gray-700 font-semibold">&ldquo;Learn & Serve&rdquo;</p>
              <p className="text-gray-600 mt-4">
                Guiding every student toward academic excellence and social responsibility.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <Target className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the most disciplined secondary school in Tanzania, where every student achieves their potential and becomes a positive force in society.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <Rocket className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To develop student talent and potential to create &ldquo;great thinkers&rdquo; equipped with knowledge, skills, and values needed for success.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-blue-100 p-12 rounded-lg">
            <h3 className="text-3xl font-bold text-blue-900 text-center mb-8">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <HandHeart className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-blue-900 mb-2">Trust</h4>
                <p className="text-gray-700">
                  We build strong relationships based on honesty, reliability, and mutual confidence among all stakeholders.
                </p>
              </div>
              <div className="text-center">
                <Eye className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-blue-900 mb-2">Respect</h4>
                <p className="text-gray-700">
                  We honor diversity, value every individual, and maintain dignity in all our interactions and decisions.
                </p>
              </div>
              <div className="text-center">
                <Search className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-blue-900 mb-2">Transparency</h4>
                <p className="text-gray-700">
                  We operate with openness and accountability, ensuring clear communication in all school matters.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* School Overview */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-12">Who We Are</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Mwandege Boys Secondary School is a prestigious Tanzanian educational institution dedicated to developing disciplined, motivated leaders through quality education and specialized life-skills programming. Our institution has established itself as a beacon of academic excellence and character development.
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              We combine the national syllabus with innovative teaching methodologies to ensure our students are well-rounded, critical thinkers prepared for higher education and professional success. Our commitment extends beyond academics to shape responsible, ethical leaders who will contribute positively to society.
            </p>
          </div>
        </Container>
      </section>

      {/* Educational Philosophy */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-12 text-center">Our Educational Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Learning by Doing</h3>
              <p className="text-gray-700 mb-4">
                We follow the Tanzania National Syllabus with a strong emphasis on practical, experiential learning. Our students don't just memorize concepts—they apply them in real-world scenarios, developing critical thinking and problem-solving skills.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">WTS Program</h3>
              <p className="text-gray-700 mb-4">
                Our unique "What Is Not Taught in School" program focuses on developing skills often overlooked in traditional education: emotional intelligence, creativity, resilience, and leadership. These skills are essential for success in the modern world.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">No-Bell System</h3>
              <p className="text-gray-700 mb-4">
                To foster independence and self-discipline, we don't use bells to signal class changes. Instead, students manage their schedules using wristwatches and personal diaries, developing time management and responsibility skills.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Professional Facilitation</h3>
              <p className="text-gray-700 mb-4">
                Our experienced educators act as facilitators, focusing on building close relationships with students and providing personalized mentorship. We prioritize individual support and understanding each student's unique potential.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Facilities & Resources */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-12 text-center">World-Class Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <FlaskConical className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Science Laboratories</h3>
              <p className="text-gray-700">
                Modern, fully-equipped laboratories for biology, chemistry, and physics where students conduct practical experiments and develop scientific inquiry skills.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Library className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Advanced Library</h3>
              <p className="text-gray-700">
                A comprehensive library with extensive resources, research materials, and quiet study spaces to support academic exploration and research projects.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Laptop className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Technology Center</h3>
              <p className="text-gray-700">
                State-of-the-art computer labs with internet connectivity for digital literacy, coding, and online research to prepare students for the digital age.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <TreePine className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Safe Environment</h3>
              <p className="text-gray-700">
                A calm, secure, and conducive learning environment with well-maintained grounds and facilities that promote focus, creativity, and personal growth.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Scholarships */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-12 text-center">Scholarship Opportunities</h2>
          <div className="max-w-2xl mx-auto bg-blue-50 p-8 rounded-lg text-center">
            <p className="text-gray-700 text-lg mb-6">
              We recognize and reward academic excellence. Outstanding students who perform exceptionally well in Form Four and Form Six National Examinations are eligible for scholarships, reducing financial barriers to quality education.
            </p>
            <p className="text-gray-600">
              Our scholarship program is designed to ensure that financial circumstances never prevent talented students from accessing the quality education they deserve.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-blue-900 text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Interested in Joining Our Community?</h2>
            <p className="text-lg mb-8 text-blue-100">
              Learn about our admission process and become part of a school committed to excellence and character development.
            </p>
            <Link
              href="/admission"
              className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Explore Admission
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
