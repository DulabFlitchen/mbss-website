import type { Metadata } from "next";
import Container from "../components/Container";
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
  BookOpen
} from "lucide-react";

export const metadata: Metadata = {
  title: "Academic Programs | Mwandege Boys Secondary School",
  description: "Explore our comprehensive academic programs, curriculum, teaching methodology, and extracurricular activities designed for holistic student development.",
  keywords: "Academic programs, Curriculum, Teaching methodology, Subjects, Form Four, Form Six, Extracurricular activities",
  openGraph: {
    title: "Academic Programs | Mwandege Boys Secondary School",
    description: "Discover our innovative academic approach combining Tanzania National Syllabus with practical learning and character development.",
    type: "website",
    url: "https://mwandege-school.com/academic",
  },
};

export default function AcademicPage() {
  const programsFormFour = [
    "English Language",
    "Kiswahili",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "History",
    "Geography",
    "Civics",
    "Information Technology",
  ];

  const programsFormSix = [
    "English Language",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "History",
    "Geography",
    "Literature",
    "Economics",
    "Accounting",
    "Information Technology",
    "Entrepreneurship",
  ];

  const teachingMethodologies = [
    {
      title: "Learning by Doing",
      description: "Practical, hands-on learning experiences that connect theory to real-world applications.",
      icon: FlaskConical,
    },
    {
      title: "Critical Thinking",
      description: "Students analyze, evaluate, and synthesize information to develop independent thought.",
      icon: Lightbulb,
    },
    {
      title: "Collaborative Learning",
      description: "Group projects and discussions that develop communication and teamwork skills.",
      icon: Users,
    },
    {
      title: "Individual Mentorship",
      description: "One-on-one guidance from experienced educators for personalized learning paths.",
      icon: Target,
    },
  ];

  const extracurricular = [
    "Science Club - Conduct experiments and explore scientific discoveries",
    "Debate Club - Develop public speaking and argumentation skills",
    "Sports (Football, Basketball, Volleyball, Athletics) - Build discipline and teamwork",
    "Drama & Arts - Express creativity through theater and visual arts",
    "Robotics & Technology Club - Explore innovation and coding",
    "Community Service - Engage in meaningful social projects",
    "Student Council - Develop leadership through school governance",
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 sm:py-16">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Academic Excellence</h1>
            <p className="text-lg text-blue-100">
              Comprehensive programs designed for intellectual growth and practical competence
            </p>
          </div>
        </Container>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Curriculum</h2>
            <p className="text-gray-700 text-lg">
              We follow the Tanzania National Syllabus while integrating innovative teaching methodologies that emphasize critical thinking, creativity, and practical application. Our balanced approach ensures students master foundational knowledge while developing 21st-century skills.
            </p>
          </div>
        </Container>
      </section>

      {/* Form Four Programs */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <Container>
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Form Four Programs</h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-8 text-center">
              Our Form Four curriculum provides a solid foundation in core subjects while allowing students to explore diverse areas of knowledge.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {programsFormFour.map((program, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-gray-800">{program}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Form Six Programs */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Form Six Programs</h2>
          <div className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-8 text-center">
              Form Six offers specialized streams allowing students to deepen knowledge in their areas of interest and strength.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {programsFormSix.map((program, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-gray-800">{program}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <Container>
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Our Teaching Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teachingMethodologies.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <IconComponent className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">{method.title}</h3>
                  <p className="text-gray-700">{method.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* WTS Program */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            WTS Program: What Is Not Taught in School
          </h2>
          <div className="max-w-3xl mx-auto bg-blue-50 p-12 rounded-lg">
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Our exclusive WTS program fills the gap between traditional education and life skills development. We recognize that success in life requires more than academic knowledge. This program focuses on:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <Brain className="w-8 h-8 text-blue-600 mb-2" />
                <h4 className="font-bold text-blue-900 mb-2">Emotional Intelligence</h4>
                <p className="text-gray-700 text-sm">
                  Self-awareness, empathy, and relationship management skills for healthy interactions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <Heart className="w-8 h-8 text-blue-600 mb-2" />
                <h4 className="font-bold text-blue-900 mb-2">Resilience</h4>
                <p className="text-gray-700 text-sm">
                  Coping with challenges, overcoming setbacks, and maintaining mental well-being.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <Palette className="w-8 h-8 text-blue-600 mb-2" />
                <h4 className="font-bold text-blue-900 mb-2">Creativity & Innovation</h4>
                <p className="text-gray-700 text-sm">
                  Creative thinking, problem-solving, and innovation in various domains.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <Briefcase className="w-8 h-8 text-blue-600 mb-2" />
                <h4 className="font-bold text-blue-900 mb-2">Professional Skills</h4>
                <p className="text-gray-700 text-sm">
                  Communication, leadership, negotiation, and workplace etiquette.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <Container>
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Extracurricular Activities</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-center mb-8">
              We believe in holistic development. Our diverse extracurricular programs allow students to discover passions, develop talents, and build character beyond the classroom.
            </p>
            <div className="space-y-4">
              {[
                { icon: FlaskConical, text: "Science Club - Conduct experiments and explore scientific discoveries" },
                { icon: Megaphone, text: "Debate Club - Develop public speaking and argumentation skills" },
                { icon: Trophy, text: "Sports (Football, Basketball, Volleyball, Athletics) - Build discipline and teamwork" },
                { icon: Palette, text: "Drama & Arts - Express creativity through theater and visual arts" },
                { icon: Code, text: "Robotics & Technology Club - Explore innovation and coding" },
                { icon: Heart, text: "Community Service - Engage in meaningful social projects" },
                { icon: Shield, text: "Student Council - Develop leadership through school governance" },
              ].map((activity, index) => (
                <div key={index} className="bg-white p-6 rounded-lg flex items-start gap-4 shadow-md">
                  <activity.icon className="w-6 h-6 flex-shrink-0 text-blue-600 mt-1" />
                  <p className="text-gray-700 pt-0.5">{activity.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Assessment & Evaluation */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Assessment & Evaluation</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-blue-50 p-8 rounded-lg">
              <Calculator className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Continuous Assessment</h3>
              <p className="text-gray-700">
                Regular quizzes, assignments, and projects ensure students stay engaged and receive immediate feedback on their progress.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <GraduationCap className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Comprehensive Examinations</h3>
              <p className="text-gray-700">
                Terminal exams and national examinations assess overall mastery of subject matter and readiness for higher levels of study.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <Leaf className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Progress Reports</h3>
              <p className="text-gray-700">
                Regular progress reports keep parents and guardians informed of academic performance and areas for improvement.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* No-Bell System */}
      <section className="py-16 sm:py-24 bg-blue-900 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">The No-Bell System</h2>
            <p className="text-lg text-blue-100 mb-6">
              To foster independence and self-discipline, Mwandege uses no bells to signal class changes. Students manage their schedules using personal wristwatches and diaries, developing responsibility, time management, and self-directed learning habits.
            </p>
            <p className="text-blue-200">
              This unique approach prepares students for university and professional life where self-management is crucial.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
