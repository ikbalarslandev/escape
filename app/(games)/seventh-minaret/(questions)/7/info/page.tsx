"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaCheckCircle,
  FaArrowRight,
  FaHistory,
  FaMosque,
  FaBalanceScale,
} from "react-icons/fa";

export default function InfoPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4">
            <FaCheckCircle className="h-12 w-12 text-secondary-400 mr-4" />
            <h1 className="text-3xl md:text-4xl font-light text-white">
              Congratulations!
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            You solved the seventh riddle and uncovered the hidden story
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
                  The Story in Stones and Towers
                </h2>
              </div>

              <p className="text-base md:text-lg">
                Now, the story hidden in these stones and towers can be
                understood.
              </p>

              <div className="flex items-start bg-primary-700/50 rounded-lg p-4 border border-primary-500">
                <FaMosque className="text-secondary-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-primary-100 text-base md:text-lg">
                  Long ago, in this city, two great mosques were built facing
                  each other. One was Hagia Sophia, with four minarets for
                  sultans, and the other was the Blue Mosque, built with six
                  minarets — more than tradition allowed.
                </p>
              </div>

              <p className="text-base md:text-lg">
                This was not just about architecture. It was a story of pride,
                power, and respect. The sultan wanted to show strength, but he
                also had to honor the most sacred mosque in Islam — Masjid
                al-Haram, which had six minarets.
              </p>

              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center mb-3">
                    <FaBalanceScale className="text-secondary-400 mr-2" />
                    <h3 className="text-lg font-semibold text-secondary-400">
                      A Clever Solution
                    </h3>
                  </div>
                  <p className="text-primary-100 text-sm md:text-base">
                    To keep balance, a seventh minaret was added to Masjid
                    al-Haram, allowing the Blue Mosque to remain with six
                    minarets.
                  </p>
                </CardContent>
              </Card>

              <p className="text-base md:text-lg">
                Every minaret, every stone, and every shadow in these buildings
                tells a story — of faith, competition, and clever solutions.
                Even small details, like ostrich eggs inside the mosque, were
                placed to protect and bless the building.
              </p>

              <div className="bg-secondary-400/20 border-l-4 border-secondary-400 p-4 rounded-r-lg">
                <p className="text-lg text-white">
                  Chains and doors remind us of respect, and the careful
                  alignment of domes and towers shows harmony.
                </p>
              </div>

              <p className="text-base md:text-lg">
                All seven riddles you solved were steps toward understanding
                this hidden balance. You've uncovered how pride and humility,
                tradition and innovation, faith and power lived together in this
                city.
              </p>

              <div className="text-center p-6 bg-primary-700/50 rounded-xl border border-secondary-400/30 mt-6">
                <p className="text-2xl md:text-3xl font-semibold text-secondary-400 mb-2">
                  The Journey is Complete
                </p>
                <p className="text-primary-200">
                  You've discovered the harmony behind the architecture
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/seventh-minaret/final")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Complete Journey
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Where stones speak and towers tell stories of balance...
          </p>
        </footer>
      </div>
    </div>
  );
}
