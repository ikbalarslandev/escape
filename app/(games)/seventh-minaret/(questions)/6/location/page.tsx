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
            Question 6
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
                src="/q_imgs/11/avlu.jpeg"
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
                BLUE MOSQUE COURTYARD EXIT
              </h2>
            </div>
            <p className="text-lg text-gray-200 font-light leading-relaxed">
              For the next question, we need to exit from the Sultanahmet Mosque
              courtyard through the exit in the direction of the arrow and go
              under the Arabic writing shown in the photo. While you are
              standing under the arabic writing look at the garden. the question
              is in the garden
            </p>
          </div>

          {/* Image Section */}
          <div className="mb-8">
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/q_imgs/11/door.jpeg"
                alt="Sultanahmet Mosque Courtyard Exit"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          </div>

          <Link
            href="https://maps.app.goo.gl/Csu2heRUGVN4aHzr9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50"
          >
            <FaMapMarkerAlt className="mr-2" />
            Open in Google Maps
          </Link>
        </div>

        <Link
          href="/sultanahmet/6/qs"
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
