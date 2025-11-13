"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaArrowRight,
  FaBalanceScale,
  FaHistory,
  FaMosque,
  FaCoffee,
} from "react-icons/fa";
import { GiLaurelsTrophy } from "react-icons/gi";

export default function FinalPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <GiLaurelsTrophy className="h-12 w-12 text-secondary-400 mr-4" />
            <h1 className="text-3xl md:text-4xl font-light text-white">
              Journey Complete!
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            You have uncovered the secret of the Seventh Minaret
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Story */}
            <div className="space-y-6 text-primary-200 leading-relaxed">
              <div className="flex items-center mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-secondary-400 to-secondary-600 mr-3"></div>
                <h2 className="text-xl md:text-2xl font-semibold text-white flex items-center">
                  <FaHistory className="mr-2 text-secondary-400" />
                  The Seventh Minaret Revealed
                </h2>
              </div>

              <p className="text-base md:text-lg">
                You have completed the journey. You have counted the minarets,
                found the hidden eggs, followed the chains, and listened to the
                clues.
              </p>

              <div className="flex items-start bg-primary-700/50 rounded-lg p-4 border border-primary-500">
                <GiLaurelsTrophy className="text-secondary-400 mr-3 mt-1 flex-shrink-0 text-2xl" />
                <p className="text-primary-100 text-base md:text-lg">
                  The Seventh Minaret is not just a tower. It is a symbol of
                  balance — between human ambition and divine respect, between
                  competition and harmony.
                </p>
              </div>

              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center mb-3">
                    <FaBalanceScale className="text-secondary-400 mr-2" />
                    <h3 className="text-lg font-semibold text-secondary-400">
                      The Two Great Mosques
                    </h3>
                  </div>
                  <p className="text-primary-100 text-sm md:text-base">
                    Look around. These two great mosques are like two sides of
                    the same mirror. One does not exist without the other. One
                    shows power, the other teaches humility. Together, they tell
                    a story that has lasted centuries.
                  </p>
                </CardContent>
              </Card>

              <div className="bg-secondary-400/20 border-l-4 border-secondary-400 p-4 rounded-r-lg">
                <p className="text-lg text-white">
                  You are now part of that story. The city speaks to those who
                  observe, who listen, and who understand. You have found the
                  forgotten secret.
                </p>
              </div>

              <div className="text-center p-6 bg-primary-700/50 rounded-xl border border-secondary-400/30 mt-6">
                <p className="text-2xl md:text-3xl font-semibold text-secondary-400 mb-2">
                  The Final Truth
                </p>
                <p className="text-primary-200 text-lg">
                  Remember: It's not about which building is greater. It's about
                  the balance between them.
                </p>
              </div>

              {/* Achievement Summary */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaMosque className="mr-2" />
                    Your Journey Through History
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base mb-4">
                    You discovered the hidden meanings behind:
                  </p>
                  <ul className="text-primary-100 text-sm md:text-base space-y-3">
                    <li className="flex items-start">
                      <span className="text-secondary-400 mr-2">•</span>
                      <span>
                        <strong>The Minaret Code:</strong> How the number of
                        minarets reveals status and power in Ottoman tradition
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-400 mr-2">•</span>
                      <span>
                        <strong>The Sultan's Chain:</strong> A symbol of
                        humility where even emperors must bow before God
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-400 mr-2">•</span>
                      <span>
                        <strong>Ostrich Egg Secrets:</strong> Ancient wisdom
                        used to protect sacred spaces
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-400 mr-2">•</span>
                      <span>
                        <strong>Architectural Diplomacy:</strong> How adding one
                        minaret in Mecca solved a political challenge
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-400 mr-2">•</span>
                      <span>
                        <strong>The Hidden Balance:</strong> The eternal dance
                        between Hagia Sophia and the Blue Mosque
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Support Section */}
        <Card className="border border-secondary-500/30 bg-gradient-to-br from-secondary-900/20 to-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary-400/20 rounded-full animate-ping"></div>
                  <FaCoffee className="h-12 w-12 text-secondary-400 relative z-10" />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                Keep History Alive!
              </h3>
              <p className="text-primary-200 mb-6 text-lg leading-relaxed max-w-md mx-auto">
                Your journey through time helps preserve these ancient stories.
                Support our mission to bring more lost histories back to life.
              </p>
              <a
                href="https://buymeacoffee.com/nikapolis.today"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-secondary-400/30"
              >
                Support Our Journey
              </a>
              <p className="text-primary-300 text-sm mt-4 italic">
                Every coffee helps unlock another piece of history
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Begin New Journey
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            In the space between minarets, we find the truth...
          </p>
        </footer>
      </div>
    </div>
  );
}
