import type { Metadata } from "next";
import Container from "../components/Container";
import ContactForm from "../components/forms/ContactForm";
import { MapPin, Phone, Mail, Circle, Video, X, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Mwandege Boys Secondary School",
  description: "Get in touch with Mwandege Boys Secondary School. Contact us for admissions, inquiries, or to schedule a campus tour.",
  keywords: "Contact, Email, Phone, Address, Location, Admissions inquiry, Campus tour",
  openGraph: {
    title: "Contact Us | Mwandege Boys Secondary School",
    description: "Get in touch with Mwandege Boys Secondary School. Contact us for admissions, inquiries, or to schedule a campus tour.",
    type: "website",
    url: "https://mwandege-school.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 sm:py-16">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-blue-100">
              We'd love to hear from you. Reach out with any questions.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-blue-50 rounded-lg">
              <MapPin className="w-10 h-10 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Address</h3>
              <p className="text-gray-700">
                Mwandege Boys Secondary School<br />
                P.O. Box [Postal Code]<br />
                Mwandege, Tanzania
              </p>
            </div>
            <div className="text-center p-8 bg-blue-50 rounded-lg">
              <Phone className="w-10 h-10 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Phone</h3>
              <p className="text-gray-700">
                +255 [Phone Number]<br />
                Office Hours: Mon-Fri<br />
                8:00 AM - 4:00 PM
              </p>
            </div>
            <div className="text-center p-8 bg-blue-50 rounded-lg">
              <Mail className="w-10 h-10 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Email</h3>
              <p className="text-gray-700">
                info@mwandegeschools.ac.tz<br />
                admissions@mwandegeschools.ac.tz
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <Container>
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Send Us a Message</h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Find Us</h2>
            <p className="text-gray-700 mb-8">
              Located in Mwandege, our campus provides a serene learning environment away from the city bustle while remaining accessible.
            </p>
            <div className="bg-blue-50 rounded-lg p-8">
              <p className="text-gray-700">
                [Google Maps embed would go here]<br />
                Contact us for directions or to schedule a campus tour.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Social Media */}
      <section className="py-16 sm:py-24 bg-blue-900 text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Connect With Us</h2>
            <p className="text-lg mb-8 text-blue-100">
              Follow us on social media for the latest news, events, and updates.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Social 1"
              >
                <Circle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Social 2"
              >
                <X className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Social 3"
              >
                <Video className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Social 4"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}