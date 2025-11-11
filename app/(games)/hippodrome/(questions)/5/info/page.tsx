// app/hippodrome/info/page.tsx - INFO PAGE
"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaCheckCircle,
  FaArrowRight,
  FaHistory,
  FaCrown,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function InfoPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <FaCheckCircle className="h-12 w-12 text-secondary-400 mr-4" />
            <h1 className="text-3xl md:text-4xl font-light text-white">
              Congratulations!
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            You solved the last question!
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <p className="text-base md:text-lg">
                You've uncovered the story of the Nika Rebellion - the greatest
                uprising in Byzantine history that shook Constantinople to its
                core in 532 AD.
              </p>

              <p className="text-base md:text-lg">
                The Hippodrome was not just a racing arena, but the political
                heart where the "Blues" and "Greens" united against Emperor
                Justinian with cries of "Nika!" meaning "Victory!"
              </p>

              {/* Additional Historical Context */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaHistory className="mr-2" />
                    Historical Significance
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    The Nika Rebellion resulted in approximately 30,000 deaths
                    and nearly toppled the Byzantine Empire. The original Hagia
                    Sophia was destroyed during the chaos, leading to the
                    construction of the magnificent structure we know today.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/hippodrome/final")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            See Your Achievement
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            You have uncovered the final piece of history! Prepare to restore
            the genius loci...
          </p>
        </footer>
      </div>
    </div>
  );
}
