import type { Metadata } from "next";
import Container from "../components/Container";
import GalleryGrid from "../components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Mwandege Boys Secondary School",
  description: "Explore our photo gallery showcasing campus life, events, activities, and facilities at Mwandege Boys Secondary School.",
  keywords: "Gallery, Photos, Campus, Events, Activities, School life, Facilities",
  openGraph: {
    title: "Gallery | Mwandege Boys Secondary School",
    description: "View photos of campus life, events, activities, and facilities at Mwandege Boys Secondary School.",
    type: "website",
    url: "https://mwandege-school.com/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 sm:py-16">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Photo Gallery</h1>
            <p className="text-lg text-blue-100">
              Glimpses of life, learning, and achievement at Mwandege
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Campus Life</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Explore moments captured from our vibrant school community. From classroom learning
              and laboratory experiments to sports, cultural events, and community service—
              experience the dynamic environment where great thinkers are forged.
            </p>
          </div>
          <GalleryGrid />
        </Container>
      </section>

      {/* Visit CTA */}
      <section className="py-16 sm:py-24 bg-blue-900 text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Experience Mwandege Firsthand</h2>
            <p className="text-lg mb-8 text-blue-100">
              Schedule a campus tour to see our facilities and meet our community in person.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}