"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaCheckCircle,
  FaArrowRight,
  FaHistory,
  FaVolumeUp,
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
            You&apos;ve discovered the secret language of minarets!
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
                  The Secret Language of Minarets
                </h2>
              </div>

              <p className="text-base md:text-lg">
                When you look at the tall towers beside the Blue Mosque, you see
                minarets — the thin towers where the call to prayer is made five
                times a day.
              </p>

              <div className="flex items-start bg-primary-700/50 rounded-lg p-4 border border-primary-500">
                <FaVolumeUp className="text-secondary-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-primary-100">
                  But minarets are not just for sound. In the Ottoman times,
                  they also showed power and respect.
                </p>
              </div>

              <p className="text-base md:text-lg">
                The number of minarets told who built the mosque — it was like a
                secret code that everyone understood:
              </p>

              {/* Minaret Hierarchy */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-4">
                    What the Minarets Say:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-primary-600/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-secondary-400 flex items-center justify-center mr-4">
                        <span className="text-primary-900 font-bold">1</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold">Rich man</p>
                        <p className="text-primary-200 text-sm">
                          Could build a mosque with 1 minaret
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-primary-600/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-secondary-400 flex items-center justify-center mr-4">
                        <span className="text-primary-900 font-bold">2</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold">Royal family</p>
                        <p className="text-primary-200 text-sm">
                          Could build a mosque with 2 minarets
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-primary-600/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-secondary-400 flex items-center justify-center mr-4">
                        <span className="text-primary-900 font-bold">4</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold">Sultan</p>
                        <p className="text-primary-200 text-sm">
                          Could build a mosque with 4 minarets
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <p className="text-base md:text-lg">
                When Hagia Sophia became a mosque, it was seen as a mosque for
                sultans — so four minarets were built around it.
              </p>

              <div className="bg-secondary-400/20 border-l-4 border-secondary-400 p-4 rounded-r-lg">
                <p className="text-base md:text-lg text-white">
                  Now, look again at the Blue Mosque in front of you. Count the
                  minarets carefully.
                </p>
                <p className="text-xl md:text-2xl font-semibold text-secondary-400 text-center mt-3">
                  Do you notice something different?
                </p>
                <p className="text-lg font-semibold text-white text-center mt-2">
                  Why do you think that is?
                </p>
              </div>

              <p className="text-base md:text-lg">
                The Blue Mosque has <strong className="text-white">six</strong>{" "}
                minarets — more than even a sultan&apos;s mosque! This was a
                bold statement by Sultan Ahmed I, showing his special devotion
                and the importance of this magnificent mosque.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/seventh-minaret/4/location")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Continue Journey
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Reading the stones, hearing the stories...
          </p>
        </footer>
      </div>
    </div>
  );
}
