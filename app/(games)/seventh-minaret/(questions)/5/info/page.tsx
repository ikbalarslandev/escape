"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { FaCheckCircle, FaArrowRight, FaHistory, FaEgg } from "react-icons/fa";

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
              Mystery Solved!
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            You&apos;ve discovered the secret of the ostrich eggs
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
                  The Secret of Ostrich Eggs
                </h2>
              </div>

              <div className="flex items-start bg-primary-700/50 rounded-lg p-4 border border-primary-500">
                <FaEgg className="text-secondary-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-primary-100">
                  In Ottoman tradition, people believed that ostrich eggs could
                  keep insects away.
                </p>
              </div>

              <p className="text-base md:text-lg">
                The architect who used this method best in his works was{" "}
                <strong className="text-white">Mimar Sinan</strong>, the great
                Ottoman architect.
              </p>

              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    Mimar Sinan&apos;s Legacy
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    His architectural style was so influential that two world
                    wonder buildings — the{" "}
                    <strong className="text-white">Sultanahmet Mosque</strong>{" "}
                    (where you are now) and India&apos;s{" "}
                    <strong className="text-white">Taj Mahal</strong> — took
                    their basic design and aesthetic understanding directly from
                    Mimar Sinan&apos;s masterpiece, the Süleymaniye Mosque.
                  </p>
                </CardContent>
              </Card>

              <p className="text-base md:text-lg">
                Both of these amazing structures were built by students trained
                by Mimar Sinan, showing how his genius influenced architecture
                across different countries and cultures.
              </p>

              <div className="bg-secondary-400/20 border-l-4 border-secondary-400 p-4 rounded-r-lg">
                <p className="text-lg font-semibold text-secondary-400 text-center">
                  A natural insect repellent that became part of architectural
                  tradition
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/seventh-minaret/6/location")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Continue Journey
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Where tradition meets innovation...
          </p>
        </footer>
      </div>
    </div>
  );
}
