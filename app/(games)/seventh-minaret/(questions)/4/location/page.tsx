import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

export default function LocationPage() {
  return (
    <div className="min-h-screen text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white tracking-wider">
            Question 4
          </h1>
          <h1 className="text-2xl md:text-6xl font-serif font-bold mb-4 text-orange-300 tracking-wider">
            Location
          </h1>
        </header>

        {/* Location Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          {/* Image Section */}
          <div className="mb-8">
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/q_imgs/9.jpg"
                alt="Sultanahmet Mosque Courtyard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          </div>

          {/* Description Section */}
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-1 h-12 bg-gradient-to-b from-white to-gray-300 mr-4"></div>
              <h2 className="text-2xl font-serif font-bold text-white flex items-center">
                <FaMapMarkerAlt className="mr-3" />
                BLUE MOSQUE COURTYARD
              </h2>
            </div>
            <p className="text-lg text-gray-200 font-light leading-relaxed">
              For the next question, we need to go to the courtyard of Blue
              Mosque.
            </p>
          </div>

          <Link
            href="https://maps.app.goo.gl/K7HfxZJGdTGaXgrC7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50"
          >
            <FaMapMarkerAlt className="mr-2" />
            Open in Google Maps
          </Link>
        </div>

        <Link
          href="/seventh-minaret/4/qs"
          className="bg-white/20 hover:bg-white/30 text-white font-serif font-bold py-3 px-8 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50 flex justify-center items-center"
        >
          Go to Question <FaArrowRight className="ml-2" />
        </Link>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-400 font-light">
          <p className="italic">Follow the traces of history...</p>
        </footer>
      </div>
    </div>
  );
}
