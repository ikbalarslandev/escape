"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaCheckCircle,
  FaArrowRight,
  FaHistory,
  FaExchangeAlt,
} from "react-icons/fa";
import { GiGate } from "react-icons/gi";
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
            You discovered the hidden history of Çukur Kule!
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-light text-secondary-400 text-center mb-6">
                From Customs Tower to Shop
              </h2>

              {/* Çukur Kule Image */}
              <div className="my-6 rounded-xl overflow-hidden border border-primary-600 shadow-lg">
                <Image
                  src="/qs-imgs/grand-bazaar/info/9/1.jpg"
                  alt="Çukur Kule - the former customs tower in Grand Bazaar"
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="bg-primary-900 bg-opacity-70 p-3 text-center">
                  <p className="text-sm text-primary-200 italic">
                    Çukur Kule at the lowest point of the Grand Bazaar - once a
                    customs checkpoint
                  </p>
                </div>
              </div>

              <p className="text-base md:text-lg">
                At the{" "}
                <strong className="text-white">
                  lowest point of the Grand Bazaar
                </strong>{" "}
                stands Çukur Kule, a building with a fascinating history of
                transformation.
              </p>

              <div className="flex items-start mb-4">
                <GiGate className="h-6 w-6 text-secondary-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg">
                  This tower originally served as the{" "}
                  <strong className="text-white">customs control point</strong>{" "}
                  for the entire market, monitoring all goods entering and
                  leaving the bazaar.
                </p>
              </div>

              {/* Original Function */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <GiGate className="mr-2" />
                    The Grand Bazaar's Gateway
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    In its early days, Çukur Kule was the{" "}
                    <strong className="text-white">
                      main entry and exit point
                    </strong>
                    for the Grand Bazaar. Officials here would check all
                    merchandise, collect taxes, and ensure proper documentation
                    for goods.
                  </p>
                  <p className="text-primary-100 text-sm md:text-base">
                    Its location at the lowest point made it the{" "}
                    <strong className="text-white">
                      natural control point
                    </strong>{" "}
                    for monitoring the flow of trade through the market.
                  </p>
                </CardContent>
              </Card>

              {/* The Transformation */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaExchangeAlt className="mr-2" />
                    Swallowed by Growth
                  </h3>

                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    Over time, the Grand Bazaar experienced{" "}
                    <strong className="text-white">massive growth</strong>.
                    Shops, streets, and new sections were added, gradually
                    expanding the market's boundaries.
                  </p>

                  <p className="text-primary-100 text-sm md:text-base">
                    Eventually, the bazaar grew so large that it{" "}
                    <strong className="text-white">
                      completely surrounded and absorbed
                    </strong>
                    the once-separate Çukur Kule, turning it from a border
                    checkpoint into just another building within the market.
                  </p>
                </CardContent>
              </Card>

              {/* New Life as a Shop */}
              <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    From Customs Office to Commercial Space
                  </h3>
                  <p className="text-secondary-100 text-sm md:text-base mb-3">
                    With its original function no longer needed, Çukur Kule
                    found a new purpose. It was transformed into one of the many{" "}
                    <strong className="text-white">
                      shops within the bazaar
                    </strong>
                    , joining the commercial life it once monitored.
                  </p>
                  <p className="text-secondary-100 text-sm md:text-base">
                    Today, this historic building continues to serve traders and
                    customers, but as part of the market rather than its
                    gatekeeper.
                  </p>
                </CardContent>
              </Card>

              {/* Historical Significance */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaHistory className="mr-2" />A Living Monument to Growth
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    Çukur Kule stands as a{" "}
                    <strong className="text-white">
                      living testament to the Grand Bazaar's incredible
                      expansion
                    </strong>
                    . Its transformation from customs checkpoint to ordinary
                    shop shows how organic urban development can repurpose
                    historical structures. This tower witnessed the bazaar's
                    growth from a small trading center to the world's largest
                    covered market, and its story reminds us that cities and
                    markets are always evolving, constantly rewriting their own
                    histories through growth and change.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/grand-bazaar/10/location")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Continue Your Journey
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Where history transforms and buildings tell stories of growth...
          </p>
        </footer>
      </div>
    </div>
  );
}
