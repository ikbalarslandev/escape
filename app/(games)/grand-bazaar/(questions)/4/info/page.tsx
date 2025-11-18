"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaCheckCircle,
  FaArrowRight,
  FaShip,
  FaCoins,
  FaMap,
} from "react-icons/fa";
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
            You discovered how the Grand Bazaar changed world history!
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <h2 className="text-xl md:text-3xl font-light text-secondary-400 text-center mb-6">
                America Discovered because of The Grand Bazaar
              </h2>

              {/* Spices and Silk Image */}
              <div className="my-6 rounded-xl overflow-hidden border border-primary-600 shadow-lg">
                <Image
                  src="/qs-imgs/grand-bazaar/info/4/4.png"
                  alt="Spices and silk traded in the Grand Bazaar"
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Spices and Silk Image */}
              <div className="my-6 rounded-xl overflow-hidden border border-primary-600 shadow-lg">
                <Image
                  src="/qs-imgs/grand-bazaar/info/4/1.jpg"
                  alt="Spices and silk traded in the Grand Bazaar"
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="bg-primary-900 bg-opacity-70 p-3 text-center">
                  <p className="text-sm text-primary-200 italic">
                    Valuable spices and silk from India that made the Grand
                    Bazaar rich
                  </p>
                </div>
              </div>

              <p className="text-base md:text-lg">
                A long time ago, the{" "}
                <strong className="text-white">
                  Ottoman Empire controlled the Silk Road
                </strong>
                . This meant they controlled all the trade of valuable spices
                and silk coming from India.
              </p>

              <div className="flex items-start mb-4">
                <FaCoins className="h-6 w-6 text-secondary-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg">
                  The biggest market for these expensive goods was the{" "}
                  <strong className="text-white">
                    Grand Bazaar in Istanbul
                  </strong>
                  . Everyone wanted to buy these special things.
                </p>
              </div>

              {/* European Problem */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaCoins className="mr-2" />
                    Europe&apos;s Big Money Problem
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    European countries had to buy spices and silk from the
                    Ottomans at{" "}
                    <strong className="text-white">very high prices</strong>.
                    This was making them poor and desperate for a new way.
                  </p>
                  <p className="text-primary-100 text-sm md:text-base">
                    They were so desperate that they started sending{" "}
                    <strong className="text-white">
                      many explorers across the ocean
                    </strong>{" "}
                    to find a route to India that didn&apos;t go through Ottoman
                    lands.
                  </p>
                </CardContent>
              </Card>

              {/* Columbus Solution */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaShip className="mr-2" />
                    Columbus&apos;s Big Plan
                  </h3>

                  {/* Columbus Voyage Image */}
                  <div className="my-4 rounded-lg overflow-hidden border border-primary-500">
                    <Image
                      src="/qs-imgs/grand-bazaar/info/4/2.jpg"
                      alt="Christopher Columbus's voyage across the Atlantic"
                      width={600}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                    <div className="bg-primary-800 bg-opacity-70 p-2 text-center">
                      <p className="text-xs text-primary-200 italic">
                        Columbus was one of many explorers sent to find a new
                        route to India
                      </p>
                    </div>
                  </div>

                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    A man named{" "}
                    <strong className="text-white">Christopher Columbus</strong>{" "}
                    had an idea. He thought he could sail west across the ocean
                    to reach India, avoiding the Ottoman Empire completely.
                  </p>

                  <p className="text-primary-100 text-sm md:text-base">
                    He asked European kings and queens for ships and money. They
                    agreed because they were desperate to break the Ottoman
                    control of trade and find a new way to India.
                  </p>
                </CardContent>
              </Card>

              {/* The Accidental Discovery */}
              <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    The Big Mistake That Changed the World
                  </h3>

                  {/* Native Americans Image */}
                  <div className="my-4 rounded-lg overflow-hidden border border-secondary-500">
                    <Image
                      src="/qs-imgs/grand-bazaar/info/4/3.jpg"
                      alt="Native Americans that Columbus mistakenly called Indians"
                      width={600}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                    <div className="bg-secondary-800 bg-opacity-70 p-2 text-center">
                      <p className="text-xs text-secondary-200 italic">
                        The people Columbus met in America, whom he mistakenly
                        called &quot;Indians&quot;
                      </p>
                    </div>
                  </div>

                  <p className="text-secondary-100 text-sm md:text-base mb-3">
                    Columbus sailed west, but he didn&apos;t find India.
                    Instead, he found{" "}
                    <strong className="text-white">
                      a whole new continent: America
                    </strong>
                    !
                  </p>

                  <p className="text-secondary-100 text-sm md:text-base">
                    But he was so sure he had reached India that he called the
                    local people{" "}
                    <strong className="text-white">&quot;Indians&quot;</strong>.
                    This name stuck for centuries, even though he was completely
                    wrong!
                  </p>
                </CardContent>
              </Card>

              {/* The Connection */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaMap className="mr-2" />
                    So What Does This Have To Do With The Grand Bazaar?
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    Without the{" "}
                    <strong className="text-white">
                      Grand Bazaar&apos;s economic power
                    </strong>
                    and the high prices Europeans had to pay there, they would
                    never have been so desperate to find a new route to India.
                    Columbus might never have sailed west. The Grand
                    Bazaar&apos;s success actually led to the discovery of
                    America!
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/grand-bazaar/5/location")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Continue Your Journey
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Sometimes the biggest discoveries happen by accident...
          </p>
        </footer>
      </div>
    </div>
  );
}
