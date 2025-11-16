"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaCheckCircle,
  FaArrowRight,
  FaGlobeAsia,
  FaRoute,
} from "react-icons/fa";
import { GiTrade } from "react-icons/gi";
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
              Congratulations!
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            You found the secret of the Silk Road and Grand Bazaar!
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-light text-secondary-400 text-center mb-6">
                The Silk Road
              </h2>

              {/* Silk Road Map Image */}
              <div className="my-6 rounded-xl overflow-hidden border border-primary-600 shadow-lg">
                <Image
                  src="/qs-imgs/grand-bazaar/info/1/1.png"
                  alt="Ancient Silk Road trade routes stretching from China to the Mediterranean"
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="bg-primary-900 bg-opacity-70 p-3 text-center">
                  <p className="text-sm text-primary-200 italic">
                    The Silk Road connected many countries from East to West
                  </p>
                </div>
              </div>

              <p className="text-base md:text-lg">
                The <strong className="text-white">Silk Road</strong> was a very
                long road for traders. It went from{" "}
                <strong className="text-white">India to Europe</strong>. It had
                the name "Silk Road" because silk was a very expensive and
                important thing to sell.
              </p>

              <div className="flex items-start mb-4">
                <GiTrade className="h-6 w-6 text-secondary-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg">
                  But the road was not only for things to buy and sell. It also
                  carried{" "}
                  <strong className="text-white">ideas and culture</strong>.
                  People shared stories, art, and new ways of thinking.
                </p>
              </div>

              {/* Ottoman Conquest Impact */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaRoute className="mr-2" />
                    The Ottoman Empire's Big Plan
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    When the{" "}
                    <strong className="text-white">
                      Ottoman Empire took Istanbul
                    </strong>
                    , they got control of the most important parts of the Silk
                    Road.
                  </p>
                  <p className="text-primary-100 text-sm md:text-base">
                    This was very smart because they could{" "}
                    <strong className="text-white">
                      control all the trade
                    </strong>
                    between East and West. They became very rich and powerful.
                  </p>
                </CardContent>
              </Card>

              {/* Grand Bazaar Section */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <GiTrade className="mr-2" />
                    The Grand Bazaar: The Biggest Market
                  </h3>

                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    Along the Silk Road, there were many markets. But the best
                    and biggest one was in Istanbul. It was called{" "}
                    <strong className="text-white">
                      Kapalıçarşı (Grand Bazaar)
                    </strong>
                    .
                  </p>

                  <div className="space-y-2 text-primary-100 text-sm md:text-base">
                    <p>
                      • <strong>All expensive things</strong> from far away came
                      here
                    </p>
                    <p>
                      • <strong>Traders from everywhere</strong> met here to do
                      business
                    </p>
                    <p>
                      • <strong>The world's largest covered market</strong> -
                      very special!
                    </p>
                  </div>

                  <p className="text-primary-100 text-sm md:text-base mt-3">
                    The Grand Bazaar showed everyone that the Ottoman Empire was
                    the{" "}
                    <strong className="text-white">
                      most important trading center
                    </strong>{" "}
                    in the world.
                  </p>
                </CardContent>
              </Card>

              {/* Global Impact */}
              <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaGlobeAsia className="mr-2" />
                    Changing the World
                  </h3>
                  <p className="text-secondary-100 text-sm md:text-base">
                    The Silk Road and Grand Bazaar were not just for buying and
                    selling. They were like{" "}
                    <strong className="text-white">
                      bridges between different people
                    </strong>
                    . They helped share knowledge and culture around the world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/grand-bazaar/2/location")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Continue Your Journey
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Learn how trade roads built great empires...
          </p>
        </footer>
      </div>
    </div>
  );
}
