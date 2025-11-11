// app/hippodrome/info/page.tsx - INFO PAGE
"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaCheckCircle,
  FaArrowRight,
  FaFire,
  FaUsers,
  FaLandmark,
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
            You discovered the secrets of the Hippodrome walls!
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <p className="text-base md:text-lg">
                Look around you, these walls you see are the actual walls of the
                ancient Hippodrome, standing strong for centuries. While most of
                the structure is gone, these edges remain as silent witnesses to
                history.
              </p>

              <p className="text-base md:text-lg">
                The Hippodrome was not just an arena for chariot races. This was
                the political heart of Constantinople, where emperors met with
                the people, and citizens had their only chance to show the
                emperor their satisfaction or discontent.
              </p>

              {/* Teams and Colors */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaUsers className="mr-2" />
                    Teams of the Races
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-primary-100 text-sm md:text-base">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-1">
                        Blue Team
                      </h4>
                      <p className="mb-3">
                        Represented the aristocracy, supported orthodox
                        Christianity, and were generally loyal to the emperor.
                      </p>

                      <h4 className="font-semibold text-green-400 mb-1">
                        Green Team
                      </h4>
                      <p>
                        Represented the merchant class and common people, often
                        opposed imperial policies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Nika Rebellion */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaFire className="mr-2" />
                    The Nika Rebellion
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    In 532 AD, something unprecedented happened. The Blues and
                    Greens put aside their rivalry and united against Emperor
                    Justinian. The Hippodrome echoed with cries of "Nika! Nika!
                    Nika!" meaning "Conquer!" in Greek.
                  </p>
                  <p className="text-primary-100 text-sm md:text-base mt-2">
                    This rebellion turned into one of the most violent uprisings
                    in Byzantine history, resulting in widespread destruction
                    across Constantinople.
                  </p>
                </CardContent>
              </Card>

              {/* Hagia Sophia Card */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaLandmark className="mr-2" />
                    The Burning of Hagia Sophia
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    During the Nika Rebellion, one of the most significant
                    casualties was the second Hagia Sophia. The magnificent
                    church was burned to the ground in the chaos that consumed
                    the city.
                  </p>
                  <p className="text-primary-100 text-sm md:text-base mt-2">
                    From these ashes, Emperor Justinian would later build the
                    even more magnificent Hagia Sophia that stands today. The
                    Third Hagia Sophia
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
            Continue to Final
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            These walls witnessed empires rise and fall, and now they witness
            your discovery...
          </p>
        </footer>
      </div>
    </div>
  );
}
