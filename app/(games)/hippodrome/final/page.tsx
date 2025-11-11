// app/hippodrome/final/page.tsx - FINAL PAGE
"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { FaArrowRight, FaCoffee, FaStar } from "react-icons/fa";
import { GiLaurelsTrophy, GiGreekTemple } from "react-icons/gi";

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
              Congratulations!
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            You brought the soul back to the Hippodrome!
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <p className="text-base md:text-lg">
                You did it! You brought the spirit back to this ancient place.
                The Hippodrome has its soul again because of you.
              </p>

              <p className="text-base md:text-lg">
                Now this place can remember its great past. The sounds of
                chariot races and happy crowds can live here again.
              </p>

              {/* Genius Loci Explanation */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <GiGreekTemple className="mr-2" />
                    What is "Genius Loci"?
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    In old times, people believed every place has a special
                    spirit. This spirit holds the memories and feelings of the
                    place. You brought back the Hippodrome's spirit.
                  </p>
                </CardContent>
              </Card>

              {/* Nikapolis Meaning */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaStar className="mr-2" />
                    What Does "Nikapolis" Mean?
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    "Nika" is an old Greek word. It means "conquer" or "win".
                    "Polis" means "city". So "Nikapolis" means "conquer the
                    city".
                  </p>
                  <p className="text-primary-100 text-sm md:text-base mt-2">
                    This name comes from the Nika Rebellion. People shouted
                    "Nika! Nika! Nika!" when they tried to conquer the city. Now
                    our company name remembers this history.
                  </p>
                </CardContent>
              </Card>

              {/* Achievement Summary */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    You Made History Live Again!
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    Because of you, the Hippodrome remembers:
                  </p>
                  <ul className="text-primary-100 text-sm md:text-base mt-2 space-y-2">
                    <li className="flex items-start">
                      <span className="text-secondary-400 mr-2">•</span>
                      <span>
                        <strong>Greek Unity:</strong> 31 city-states united
                        against Persia, celebrating victory with the Serpent
                        Column
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-400 mr-2">•</span>
                      <span>
                        <strong>Imperial Power:</strong> Theodosius brought an
                        obelisk from Egypt to show Roman strength across
                        continents
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-400 mr-2">•</span>
                      <span>
                        <strong>Ancient Engineering:</strong> Massive stones
                        traveled from Egypt to Constantinople by river and sea
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-400 mr-2">•</span>
                      <span>
                        <strong>Political Voice:</strong> Common people and
                        nobles used chariot races to speak to emperors
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-400 mr-2">•</span>
                      <span>
                        <strong>The Great Rebellion:</strong> When Blues and
                        Greens united shouting "Nika!" and nearly destroyed the
                        empire
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
            Play Again
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Walking through history, learning from the past...
          </p>
        </footer>
      </div>
    </div>
  );
}
