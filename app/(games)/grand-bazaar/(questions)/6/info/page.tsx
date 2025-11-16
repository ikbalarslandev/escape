"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaCheckCircle,
  FaArrowRight,
  FaFire,
  FaSun,
  FaLightbulb,
} from "react-icons/fa";
import { GiWindow } from "react-icons/gi";
import Image from "next/image";

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
              Well Done!
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            You discovered the Grand Bazaar's brilliant fire protection system!
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-light text-secondary-400 text-center mb-6">
                The Bazaar That Lived by the Sun
              </h2>

              {/* Grand Bazaar Interior Image */}
              <div className="my-6 rounded-xl overflow-hidden border border-primary-600 shadow-lg">
                <Image
                  src="/qs-imgs/grand-bazaar/info/6/1.jpg"
                  alt="Grand Bazaar interior showing natural light from dome windows"
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="bg-primary-900 bg-opacity-70 p-3 text-center">
                  <p className="text-sm text-primary-200 italic">
                    Natural light flooding through hundreds of windows in the
                    domes and roof
                  </p>
                </div>
              </div>

              <p className="text-base md:text-lg">
                In the Grand Bazaar, there was a strict rule:{" "}
                <strong className="text-white">no open flames allowed</strong>.
                No gas lamps, no oil lamps - nothing that could start a fire.
              </p>

              <div className="flex items-start mb-4">
                <FaFire className="h-6 w-6 text-secondary-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg">
                  This was because the main goods traded here -{" "}
                  <strong className="text-white">
                    silk, velvet, and other precious fabrics
                  </strong>{" "}
                  - were extremely flammable. A single spark could destroy
                  everything.
                </p>
              </div>

              {/* The Fire Danger */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <GiWindow className="mr-2" />
                    Why Fire Was the Greatest Enemy
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    The Grand Bazaar was filled with the most valuable fabrics
                    in the world. These materials could catch fire easily and
                    burn quickly.
                  </p>
                  <p className="text-primary-100 text-sm md:text-base">
                    An open flame in this environment would create{" "}
                    <strong className="text-white">
                      an enormous fire risk
                    </strong>
                    that could destroy the entire market and the empire's
                    commercial heart.
                  </p>
                </CardContent>
              </Card>

              {/* The Brilliant Solution */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <GiWindow className="mr-2" />
                    The Architectural Masterpiece
                  </h3>

                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    The architects solved this problem brilliantly. They placed{" "}
                    <strong className="text-white">
                      hundreds of windows and holes
                    </strong>
                    in the domes and roof, allowing natural light to flood the
                    interior all day long.
                  </p>
                  <p className="text-primary-100 text-sm md:text-base">
                    This clever design eliminated the need for artificial
                    lighting completely. The bazaar was designed to work with
                    nature, not against it.
                  </p>
                </CardContent>
              </Card>

              {/* The Daily Rhythm */}
              <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaSun className="mr-2" />
                    Trading with the Sun
                  </h3>
                  <p className="text-secondary-100 text-sm md:text-base mb-3">
                    Business in the Grand Bazaar followed the sun's rhythm.
                    Trading{" "}
                    <strong className="text-white">
                      started with sunrise and ended with sunset
                    </strong>
                    . When natural light was available, the market was open.
                  </p>
                  <p className="text-secondary-100 text-sm md:text-base">
                    This natural schedule meant the{" "}
                    <strong className="text-white">
                      commercial heart of the Empire
                    </strong>
                    could beat safely, without any fire danger threatening its
                    existence.
                  </p>
                </CardContent>
              </Card>

              {/* Legacy */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaLightbulb className="mr-2" />
                    Sustainable Design Before Its Time
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    The Grand Bazaar's lighting solution was not just about
                    safety - it was about
                    <strong className="text-white">
                      {" "}
                      intelligent, sustainable design
                    </strong>
                    . Centuries before electricity, the architects created a
                    building that used natural resources perfectly. This
                    brilliant approach protected priceless goods, enabled
                    international trade, and showed how architecture could solve
                    practical problems in beautiful ways.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/grand-bazaar/7/location")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Continue Your Journey
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Where sunlight protects commerce and architecture solves problems...
          </p>
        </footer>
      </div>
    </div>
  );
}
