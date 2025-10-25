import Link from "next/link";
import { GiShakingHands, GiAncientColumns, GiCastle } from "react-icons/gi";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-100 p-8 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <GiAncientColumns className="text-4xl text-white mr-4" />
            <h1 className="text-3xl font-serif font-bold text-white tracking-wider">
              Nikapolis
            </h1>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white tracking-wider">
            Istanbul Escape Games
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-6 italic">
            Uncover secrets. Solve mysteries. Experience the soul of Istanbul.
          </p>
        </header>

        {/* Company Mission */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
          <div className="flex items-center mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-yellow-400 to-orange-500 mr-4"></div>
            <h2 className="text-2xl font-serif font-bold text-white">
              WELCOME TO NIKAPOLIS
            </h2>
          </div>
          <p className="text-lg leading-relaxed mb-6 text-gray-200 font-light">
            At Nikapolis, we transform Istanbul&apos;s most iconic districts
            into living puzzle boxes. Each game immerses you in the rich history
            and hidden secrets of this magnificent city, challenging you to
            solve mysteries that bridge empires and centuries.
          </p>
          <p className="text-lg leading-relaxed text-gray-200 font-light">
            Choose your district and become part of Istanbul&apos;s eternal
            story...
          </p>
        </div>

        {/* Available Games */}
        <div className="mb-12">
          <h3 className="text-2xl font-serif font-bold text-white text-center mb-8">
            EXPLORE ISTANBUL&apos;S DISTRICTS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sultanahmet Game */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-400/60 transition-all duration-300 group hover:scale-105 transform">
              <div className="text-center mb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white shadow-inner group-hover:shadow-lg transition-all">
                  <GiAncientColumns className="text-white text-4xl" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  Istanbul&apos;s Lost Seals
                </h3>
                <p className="text-yellow-400 font-semibold mb-2">
                  Sultanahmet
                </p>
              </div>
              <p className="text-gray-300 font-light leading-relaxed text-center mb-6">
                Three ancient seals hidden in the heart of historic Istanbul
                await discovery. Solve the city&apos;s deepest secrets to
                restore balance between empires.
              </p>
              <div className="text-center">
                <Link href="/sultanahmet">
                  <div className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 border border-yellow-400 cursor-pointer inline-block">
                    PLAY NOW
                  </div>
                </Link>
              </div>
            </div>

            {/* Grand Bazaar Game */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-400/40 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white shadow-inner">
                  <GiShakingHands className="text-white text-4xl" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  Merchant&apos;s Gambit
                </h3>
                <p className="text-orange-400 font-semibold mb-2">
                  Grand Bazaar
                </p>
                <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
              <p className="text-gray-300 font-light leading-relaxed text-center mb-6">
                Navigate the labyrinthine corridors of the world&apos;s oldest
                market. Decode merchant secrets and uncover a conspiracy that
                could shake the economy of empires.
              </p>
              <div className="text-center">
                <div className="bg-gray-700 text-gray-300 font-bold py-3 px-8 rounded-full border border-orange-500/30 inline-block">
                  COMING SOON
                </div>
              </div>
            </div>

            {/* Galata Game */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/40 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-600 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white shadow-inner">
                  <GiCastle className="text-white text-4xl" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  Tower&apos;s Secret
                </h3>
                <p className="text-blue-400 font-semibold mb-2">
                  Galata District
                </p>
                <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
              <p className="text-gray-300 font-light leading-relaxed text-center mb-6">
                Scale the heights of Galata Tower and unravel mysteries of
                medieval Genoese traders. Your choices will determine the fate
                of the Golden Horn.
              </p>
              <div className="text-center">
                <div className="bg-gray-700 text-gray-300 font-bold py-3 px-8 rounded-full border border-blue-500/30 inline-block">
                  COMING SOON
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 mb-8 border border-white/20">
          <h3 className="text-2xl font-serif font-bold text-white text-center mb-8">
            THE ISTANBUL EXPERIENCE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <GiAncientColumns className="text-white text-2xl" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Historic Districts
              </h4>
              <p className="text-gray-300 font-light">
                Journey through Istanbul&apos;s most iconic neighborhoods
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <GiShakingHands className="text-white text-2xl" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Authentic Settings
              </h4>
              <p className="text-gray-300 font-light">
                Games based on real locations and historical facts
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <GiCastle className="text-white text-2xl" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Cultural Mysteries
              </h4>
              <p className="text-gray-300 font-light">
                Uncover secrets spanning Byzantine to Ottoman eras
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/sultanahmet">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-serif font-bold text-xl py-4 px-12 rounded-full transition-all duration-300 border border-yellow-400 cursor-pointer hover:scale-105 transform inline-block">
              BEGIN IN SULTANAHMET
            </div>
          </Link>
          <p className="text-gray-400 mt-4 font-light italic">
            Start your Istanbul adventure where empires converged...
          </p>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-400 font-light">
          <p className="italic">
            Nikapolis - Discovering Istanbul&apos;s Hidden Stories
          </p>
          <p className="text-sm mt-2">© 2024 Nikapolis Istanbul Escape Games</p>
        </footer>
      </div>
    </div>
  );
}
