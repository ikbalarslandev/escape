import Link from "next/link";
import { GiShakingHands, GiStrong, GiMeditation } from "react-icons/gi";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white tracking-wider">
            Istanbul's Lost Seals
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-6 italic">
            The fate of the city is in your hands...
          </p>
        </header>

        {/* Mission Briefing */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <div className="flex items-center mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-white to-gray-300 mr-4"></div>
            <h2 className="text-2xl font-serif font-bold text-white">
              MISSION
            </h2>
          </div>
          <p className="text-lg leading-relaxed mb-6 text-gray-200 font-light">
            Explorers, attention! There are three ancient seals hidden in the
            heart of Istanbul:{" "}
            <span className="font-semibold text-white">Unity</span>,{" "}
            <span className="font-semibold text-white">Power</span>, and{" "}
            <span className="font-semibold text-white">Humility</span>.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-gray-200 font-light">
            But the seals aren't just waiting to be found; to discover them, you
            must first solve the city's secrets, uncover hidden objects, and
            then combine these objects to form the seals.
          </p>
        </div>

        {/* Seals Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Unity Seal */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white shadow-inner">
                <GiShakingHands className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">UNITY</h3>
            </div>
            <p className="text-gray-300 font-light leading-relaxed text-center">
              The energy that unites different cultures.
            </p>
          </div>

          {/* Power Seal */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-green-700 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white shadow-inner">
                <GiStrong className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">POWER</h3>
            </div>
            <p className="text-gray-300 font-light leading-relaxed text-center">
              The energy of strength and challenge.
            </p>
          </div>

          {/* Humility Seal */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-green-800 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white shadow-inner">
                <GiMeditation className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">
                HUMILITY
              </h3>
            </div>
            <p className="text-gray-300 font-light leading-relaxed text-center">
              Everyone is equal before the Creator.
            </p>
          </div>
        </div>

        {/* Final Warning */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-center border border-white/20">
          <p className="text-lg mb-4 text-gray-200 font-light italic">
            Creating the seals is not just about solving puzzles; it's about
            rebuilding the soul and history of Istanbul.
          </p>

          <Link href="/intro">
            <div className="bg-white/20 hover:bg-white/30 text-white font-serif font-bold text-xl py-4 px-12 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50 cursor-pointer hover:scale-105 transform">
              START THE ADVENTURE!
            </div>
          </Link>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 text-gray-400 font-light">
          <p className="italic">The fate of Istanbul is now in your hands...</p>
          <p className="text-sm mt-2">Let's get started!</p>
        </footer>
      </div>
    </div>
  );
}
