import Container from './components/Container';
import Carousel from './components/Carousel';
import Link from 'next/link';
import { GraduationCap, Users, Target, BookOpen, FlaskConical, Award, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Carousel Section */}
      <section className="relative">
        <Carousel />
      </section>

      {/* Key Highlights */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <GraduationCap className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Academic Excellence</h3>
              <p className="text-gray-600">
                Following the Tanzania National Syllabus with a "Learning by Doing" approach for practical knowledge.
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Students</h3>
              <p className="text-gray-600">
                A diverse, motivated community of young learners committed to excellence and discipline.
              </p>
            </div>
            <div className="text-center p-6">
              <Target className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Disciplined Leaders</h3>
              <p className="text-gray-600">
                To be the most disciplined secondary school in Tanzania, developing great thinkers and leaders.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-8">
              About Mwandege Boys Secondary School
            </h2>
            <p className="text-gray-700 text-center mb-6 leading-relaxed">
              Mwandege Boys Secondary School is a Tanzanian educational institution focused on developing disciplined, motivated leaders through the national syllabus and specialized life-skills programming. With our motto "<span className="font-semibold text-blue-900">Learn & Serve</span>", we are committed to nurturing excellence in academics and character.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                To develop student talent and potential to create "great thinkers" equipped with knowledge, skills, and values needed for success in higher education and beyond.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Core Values</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>✓ <span className="font-medium">Trust</span></li>
                    <li>✓ <span className="font-medium">Respect</span></li>
                    <li>✓ <span className="font-medium">Transparency</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Key Features</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>✓ Modern facilities</li>
                    <li>✓ Professional facilitation</li>
                    <li>✓ Holistic development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12">
            Why Choose Mwandege?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Innovative Learning Programs</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>WTS Program:</strong> &ldquo;What Is Not Taught in School&rdquo; focusing on critical thinking, emotional resilience, creativity, and problem-solving
                  </div>
                </li>
                <li className="flex gap-3">
                  <FlaskConical className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>No-Bell System:</strong> Students manage their schedules using wristwatches and diaries, fostering independence
                  </div>
                </li>
                <li className="flex gap-3">
                  <GraduationCap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Learning by Doing:</strong> Tanzania National Syllabus with practical application emphasis
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">World-Class Facilities & Support</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Modern Infrastructure:</strong> Advanced science laboratories, comprehensive library, and cutting-edge technology tools
                  </div>
                </li>
                <li className="flex gap-3">
                  <Users className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Professional Facilitation:</strong> Experienced educators prioritizing close relationships and individual mentorship
                  </div>
                </li>
                <li className="flex gap-3">
                  <Target className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Scholarships:</strong> Awarded to top performers in national examinations
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-blue-900 text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-lg mb-8 text-blue-100">
              Start your journey towards academic excellence, personal growth, and becoming a great thinker. Apply today!
            </p>
            <Link
              href="/admission"
              className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Apply Now
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
