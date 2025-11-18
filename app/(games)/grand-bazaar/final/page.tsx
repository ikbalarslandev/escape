"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaArrowRight,
  FaCoffee,
  FaStar,
  FaHistory,
  FaGlobe,
  FaStore,
} from "react-icons/fa";
import { GiLaurelsTrophy, GiStonePath } from "react-icons/gi";

export default function FinalPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <GiLaurelsTrophy className="h-12 w-12 text-secondary-300 mr-4" />
            <h1 className="text-3xl md:text-4xl font-light text-white">
              Congratulations!
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-300 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto">
            You've uncovered the secrets of the world's oldest covered market!
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-500 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-100 leading-relaxed">
              <p className="text-base md:text-lg">
                You did it! You've journeyed through 500 years of history,
                uncovering the hidden stories that made the Grand Bazaar one of
                the most influential marketplaces in human history.
              </p>

              <p className="text-base md:text-lg">
                From ancient trade routes to modern bargaining traditions,
                you've discovered how this labyrinthine market shaped empires,
                sparked discoveries, and created a unique commercial culture
                that continues to thrive today.
              </p>

              {/* Key Discoveries */}
              <Card className="bg-primary-700 border-primary-400 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-300 mb-3 flex items-center">
                    <FaHistory className="mr-2" />
                    The Grand Revelations You Uncovered
                  </h3>
                  <div className="space-y-3 text-primary-50">
                    <div className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>
                        <strong className="text-white">
                          The Silk Road's Final Stop:
                        </strong>{" "}
                        How the Grand Bazaar's wealth inspired Columbus to
                        discover America
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>
                        <strong className="text-white">
                          World's First Banking System:
                        </strong>{" "}
                        How Cevahir and Sandal Bedestens created modern finance
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>
                        <strong className="text-white">
                          Architectural Genius:
                        </strong>{" "}
                        Fire-proof design that protected precious silks for
                        centuries
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>
                        <strong className="text-white">
                          Tea Culture Diplomacy:
                        </strong>{" "}
                        How curved glasses and tea rituals drive sales to this
                        day
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Economic Impact */}
              <Card className="bg-primary-600 border-primary-400 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-300 mb-3 flex items-center">
                    <FaGlobe className="mr-2" />
                    Global Impact You Discovered
                  </h3>
                  <p className="text-primary-50 text-sm md:text-base">
                    The Grand Bazaar wasn't just a market—it was an economic
                    superpower. Its control over the Silk Road forced Europe to
                    seek new trade routes, accidentally leading to the discovery
                    of the Americas. Its secure bedestens invented banking, and
                    its tea rituals perfected the art of commercial hospitality
                    that continues to define Turkish business culture.
                  </p>
                </CardContent>
              </Card>

              {/* Journey Summary */}
              <Card className="bg-primary-700 border-primary-400 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-300 mb-3 flex items-center">
                    <GiStonePath className="mr-2" />
                    Your Journey Through the Bazaar
                  </h3>
                  <p className="text-primary-50 text-sm md:text-base mb-3">
                    You navigated the historic corridors and uncovered secrets
                    at every turn:
                  </p>
                  <ul className="text-primary-50 text-sm md:text-base space-y-2">
                    <li className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>
                        <strong className="text-white">
                          Nuruosmaniye Gate:
                        </strong>{" "}
                        Where you discovered the Silk Road's influence
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>
                        <strong className="text-white">
                          Sandal Bedesteni:
                        </strong>{" "}
                        The second core that grew organically into a global
                        market
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>
                        <strong className="text-white">
                          Cevahir Bedesteni:
                        </strong>{" "}
                        The world's first secure banking and jewelry trade
                        center
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>
                        <strong className="text-white">Çukur Kule:</strong> From
                        customs tower to legendary pudding shop
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>
                        <strong className="text-white">Zincirli Han:</strong>{" "}
                        Where chains and commerce created history
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>
                        <strong className="text-white">Esir Han:</strong>{" "}
                        Uncovering the complex history of trade and humanity
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Cultural Legacy */}
              <Card className="bg-primary-600 border-primary-400 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-300 mb-3 flex items-center">
                    <FaStore className="mr-2" />
                    Living Legacy You Experienced
                  </h3>
                  <p className="text-primary-50 text-sm md:text-base">
                    The traditions you discovered aren't just history—they're
                    alive today. The art of bargaining, the tea rituals, the
                    organic growth of shops around ancient bedestens, all
                    continue in the same corridors where merchants have traded
                    for five centuries. You haven't just learned about history;
                    you've experienced a living commercial culture that has
                    outlasted empires.
                  </p>
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
                Your journey through the Grand Bazaar helps preserve these
                ancient commercial traditions. Support our mission to bring more
                lost market histories back to life.
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
                Every coffee helps unlock another piece of commercial history
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
            Play Another Game
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-200 font-light italic text-sm md:text-base">
            Where commerce built empires and tea cups sealed deals for
            centuries...
          </p>
        </footer>
      </div>
    </div>
  );
}
