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
            You restored the Genius Loci of the Hippodrome!
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <p className="text-base md:text-lg">
                You successfully created the genius loci of the Hippodrome. This
                ancient place has its soul again just because of you,
                adventurer.
              </p>

              <p className="text-base md:text-lg">
                The spirit of this legendary arena - where chariots thundered
                and empires were decided - has been awakened from centuries of
                slumber.
              </p>

              {/* Genius Loci Explanation */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <GiGreekTemple className="mr-2" />
                    What is Genius Loci?
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    In ancient Roman belief, every place has a "genius loci" - a
                    protective spirit that embodies its essence and memory.
                    You've restored the Hippodrome's spirit, bringing back the
                    echoes of ancient crowds and the thrill of chariot races.
                  </p>
                </CardContent>
              </Card>

              {/* Nikapolis Meaning */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaStar className="mr-2" />
                    The Meaning of Nikapolis
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    "Nika" means "victory" in Ancient Greek, and "polis" means
                    "city." Together, Nikapolis means "victorious city" -
                    honoring the Nika Rebellion and using the language of the
                    Eastern Roman Empire where this history unfolded.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Support Section */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FaCoffee className="h-8 w-8 text-secondary-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Enjoyed Your Journey?
              </h3>
              <p className="text-primary-200 mb-4 text-sm md:text-base">
                Support our mission to bring more historical locations back to
                life!
              </p>
              <a
                href="https://buymeacoffee.com/nikapolis.today"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 text-sm"
              >
                <FaCoffee className="text-lg" />
                Buy Me a Coffee
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start New Journey
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            In the footsteps of history, in the light of knowledge...
          </p>
        </footer>
      </div>
    </div>
  );
}
