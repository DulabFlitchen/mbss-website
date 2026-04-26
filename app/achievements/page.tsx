import type { Metadata } from "next";
import Container from "../components/Container";
import { GraduationCap, Trophy, Star, Check, Award, Users, Heart, Flame, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Achievements | Mwandege Boys Secondary School",
  description: "Discover the accomplishments and accolades of Mwandege Boys Secondary School, including student awards, academic rankings, and alumni success stories.",
  keywords: "Achievements, Awards, Academic excellence, Rankings, Student success, Alumni achievements",
  openGraph: {
    title: "Achievements | Mwandege Boys Secondary School",
    description: "Celebrate our students' exceptional achievements in academics, sports, and extracurricular activities.",
    type: "website",
    url: "https://mwandege-school.com/achievements",
  },
};

export default function AchievementsPage() {
  const academicAchievements = [
    "Consistently high performance in national Form Four and Form Six examinations",
    "Multiple students achieving top grades in mathematics, sciences, and languages",
    "High university placement rate with admissions to prestigious institutions",
    "Recognition for innovative student research projects",
    "Awards for best performing students in Form Four and Form Six",
  ];

  const sportsAchievements = [
    "National Football Championship - Regional runners-up",
    "Athletics competition - Multiple medal winners",
    "Volleyball tournament - Consistent top finishers",
    "Basketball league - Rising competitive force",
    "Inter-school sports festival - Recognition for discipline and sportsmanship",
  ];

  const cocurricularAchievements = [
    "Debate competition national preliminaries participation",
    "Science fair projects recognized for innovation",
    "Drama festival performances receiving accolades",
    "Technology innovation competitions with student creations",
    "Community service recognized by local organizations",
  ];

  const facilities = [
    {
      title: "Outstanding Academic Infrastructure",
      description: "Modern facilities that support both traditional and innovative teaching methods",
    },
    {
      title: "Holistic Student Development",
      description: "Programs designed to develop not just academics but character and life skills",
    },
    {
      title: "Professional Faculty",
      description: "Experienced educators dedicated to individual student success",
    },
    {
      title: "Supportive Environment",
      description: "A community that encourages risk-taking, learning, and growth",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 sm:py-16">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Achievements</h1>
            <p className="text-lg text-blue-100">
              Celebrating excellence in academics, sports, and character development
            </p>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Pride in Performance</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Mwandege Boys Secondary School takes pride in the consistent achievements of our students across academic, athletic, and extracurricular domains. Our students have demonstrated excellence and earned recognition at regional and national levels. These achievements are a testament to our commitment to holistic development and the dedication of both our students and faculty.
            </p>
          </div>
        </Container>
      </section>

{/* Academic Achievements */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <Container>
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Academic Excellence</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ul className="space-y-4">
                {academicAchievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <Check className="w-6 h-6 flex-shrink-0 text-blue-600 mt-1" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Sports Achievements */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Sports Excellence</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg shadow-md">
              <ul className="space-y-4">
                {sportsAchievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <Trophy className="w-6 h-6 flex-shrink-0 text-blue-600 mt-1" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Cocurricular Achievements */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <Container>
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Extracurricular Excellence</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ul className="space-y-4">
                {cocurricularAchievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <Star className="w-6 h-6 flex-shrink-0 text-blue-600 mt-1" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Alumni Success Stories */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Alumni Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg">
              <GraduationCap className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">University Success</h3>
              <p className="text-gray-700">
                Our alumni have gained admission to leading universities both locally and internationally, studying fields ranging from medicine and engineering to law and business.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <Award className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Professional Excellence</h3>
              <p className="text-gray-700">
                Former students have gone on to establish successful careers as doctors, engineers, educators, entrepreneurs, and leaders in their respective fields.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Community Leadership</h3>
              <p className="text-gray-700">
                Alumni actively contribute to their communities through leadership roles, advocacy, and commitment to social development.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <Heart className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Continuous Growth</h3>
              <p className="text-gray-700">
                Our graduates remain engaged in lifelong learning and professional development, embodying the &ldquo;Learn & Serve&rdquo; motto throughout their lives.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Sports Achievements */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Sports Excellence</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg shadow-md">
              <ul className="space-y-4">
                {sportsAchievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <Trophy className="w-6 h-6 flex-shrink-0 text-blue-600 mt-1" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Cocurricular Achievements */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <Container>
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Extracurricular Excellence</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ul className="space-y-4">
                {cocurricularAchievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <Sparkles className="w-6 h-6 flex-shrink-0 text-blue-600 mt-1" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Alumni Success Stories */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Alumni Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-3">University Success</h3>
              <p className="text-gray-700">
                Our alumni have gained admission to leading universities both locally and internationally, studying fields ranging from medicine and engineering to law and business.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Professional Excellence</h3>
              <p className="text-gray-700">
                Former students have gone on to establish successful careers as doctors, engineers, educators, entrepreneurs, and leaders in their respective fields.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Community Leadership</h3>
              <p className="text-gray-700">
                Alumni actively contribute to their communities through leadership roles, advocacy, and commitment to social development.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Continuous Growth</h3>
              <p className="text-gray-700">
                Our graduates remain engaged in lifelong learning and professional development, embodying the "Learn & Serve" motto throughout their lives.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Our Students Succeed */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <Container>
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Why Our Students Excel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Statistics */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-blue-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-700 font-semibold">University Placement</p>
            </div>
            <div className="text-center bg-blue-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-700 font-semibold">Current Students</p>
            </div>
            <div className="text-center bg-blue-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-700 font-semibold">Faculty Members</p>
            </div>
            <div className="text-center bg-blue-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-700 font-semibold">Successful Alumni</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Recognition */}
      <section className="py-16 sm:py-24 bg-blue-900 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Commitment to Excellence</h2>
            <p className="text-lg text-blue-100 mb-6">
              Every achievement is a testament to the hard work of our students, the dedication of our educators, and the support of our community. We remain committed to maintaining and elevating these standards of excellence.
            </p>
            <p className="text-blue-200">
              Join us in our journey toward academic excellence and character development. Together, we create great thinkers and leaders.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
