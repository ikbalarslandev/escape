"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { FaArrowRight, FaCoffee, FaStar, FaHistory } from "react-icons/fa";
import { GiLaurelsTrophy, GiStoneBlock } from "react-icons/gi";

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
            You restored the balance of Pagan, Cross, and Crescent!
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-500 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-100 leading-relaxed">
              <p className="text-base md:text-lg">
                You did it! You discovered how three great traditions came
                together to build one of the world's greatest cities. The
                ancient balance between Pagan, Cross, and Crescent has been
                restored.
              </p>

              <p className="text-base md:text-lg">
                Because of your journey, Istanbul's layered soul can continue to
                inspire generations with its story of unity in diversity.
              </p>

              {/* The Three Traditions */}
              <Card className="bg-primary-700 border-primary-400 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-300 mb-3 flex items-center">
                    <FaHistory className="mr-2" />
                    The Three Traditions You United
                  </h3>
                  <div className="space-y-3 text-primary-50">
                    <div className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>
                        <strong className="text-white">Pagan:</strong> The
                        ancient column from Apollo's temple that helped
                        Constantine build his capital
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>
                        <strong className="text-white">Cross:</strong> The
                        Christian Baroque architecture that inspired
                        Nuruosmaniye's revolutionary design
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>
                        <strong className="text-white">Crescent:</strong> The
                        Islamic tradition of social welfare and community
                        service through the külliye system
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Architectural Achievement */}
              <Card className="bg-primary-600 border-primary-400 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-300 mb-3 flex items-center">
                    <GiStoneBlock className="mr-2" />
                    Architectural Harmony You Discovered
                  </h3>
                  <p className="text-primary-50 text-sm md:text-base">
                    Nuruosmaniye Mosque stands as a perfect example of cultural
                    synthesis. Baroque curves from European cathedrals, ancient
                    columns from pagan temples, and Islamic social welfare
                    traditions all come together in perfect harmony.
                  </p>
                </CardContent>
              </Card>

              {/* Journey Summary */}
              <Card className="bg-primary-700 border-primary-400 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-300 mb-3">
                    Your Journey Through History
                  </h3>
                  <p className="text-primary-50 text-sm md:text-base mb-3">
                    You uncovered the secrets that made Istanbul the capital of
                    empires:
                  </p>
                  <ul className="text-primary-50 text-sm md:text-base space-y-2">
                    <li className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>
                        <strong className="text-white">
                          Constantine's Vision:
                        </strong>{" "}
                        How a pagan column attracted people from all faiths to
                        build a new capital
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>
                        <strong className="text-white">
                          Ottoman Innovation:
                        </strong>{" "}
                        The brilliant vakıf system that made mosques
                        self-sufficient for centuries
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>
                        <strong className="text-white">
                          Baroque Revolution:
                        </strong>{" "}
                        The first and only Baroque mosque in the Ottoman Empire
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>
                        <strong className="text-white">Social Welfare:</strong>{" "}
                        How soup kitchens and fountains served the entire
                        community
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-300 mr-2">•</span>
                      <span>
                        <strong className="text-white">
                          Engineering Genius:
                        </strong>{" "}
                        The hidden cistern that still provides water after 300
                        years
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
            Play Another Game
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-200 font-light italic text-sm md:text-base">
            Where different faiths and cultures found harmony in stone...
          </p>
        </footer>
      </div>
    </div>
  );
}
