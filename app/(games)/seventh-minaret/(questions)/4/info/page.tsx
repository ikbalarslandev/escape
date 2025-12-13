"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaCheckCircle,
  FaArrowRight,
  FaHistory,
  FaMosque,
  FaKaaba,
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
              Brilliant Solution!
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            You&apos;ve uncovered the story behind the six minarets
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
                  The Story of Six Minarets
                </h2>
              </div>

              <div className="flex items-start bg-primary-700/50 rounded-lg p-4 border border-primary-500">
                <FaKaaba className="text-secondary-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-primary-100">
                  Before we explain the Blue Mosque, you need to know about the
                  Kaaba — the holiest place for Muslims.
                </p>
              </div>

              <p className="text-base md:text-lg">
                Muslims around the world pray facing the Kaaba. The Kaaba is
                inside a big building called Masjid al-Haram. You can think of
                it like walls that protect the Kaaba.
              </p>

              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaMosque className="mr-2" />
                    The Minaret Challenge
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-secondary-400 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-primary-900 font-bold text-sm">
                          1
                        </span>
                      </div>
                      <p className="text-primary-100">
                        A long time ago, Masjid al-Haram had{" "}
                        <strong className="text-white">six minarets</strong> —
                        the tallest and most important mosque in the world.
                      </p>
                    </div>

                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-secondary-400 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-primary-900 font-bold text-sm">
                          2
                        </span>
                      </div>
                      <p className="text-primary-100">
                        When the Blue Mosque was built, the sultan wanted to
                        show the world how strong he was. So he built{" "}
                        <strong className="text-white">six minarets</strong> for
                        it — even though normally sultans only built four.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <p className="text-base md:text-lg">
                Many Muslims didn&apos;t like this. They said it looked like the
                sultan wanted to be equal to God.
              </p>

              <div className="bg-secondary-400/20 border-l-4 border-secondary-400 p-4 rounded-r-lg">
                <p className="text-base md:text-lg text-white">
                  To solve the problem, the sultan came up with a clever
                  solution:
                </p>
                <p className="text-xl md:text-2xl font-semibold text-secondary-400 text-center mt-3">
                  He added one more minaret to Masjid al-Haram
                </p>
              </div>

              <p className="text-base md:text-lg">
                So Masjid al-Haram now had{" "}
                <strong className="text-white">seven minarets</strong>. This
                meant the Blue Mosque could keep its six minarets safely —
                because it was still less than Masjid al-Haram.
              </p>

              <div className="text-center p-6 bg-primary-700/50 rounded-xl border border-secondary-400/30">
                <p className="text-2xl md:text-3xl font-semibold text-secondary-400 mb-2">
                  Isn&apos;t that smart?
                </p>
                <p className="text-primary-200">
                  A diplomatic solution that respected tradition while allowing
                  innovation
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/seventh-minaret/5/location")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Continue Journey
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Where architecture meets diplomacy...
          </p>
        </footer>
      </div>
    </div>
  );
}
