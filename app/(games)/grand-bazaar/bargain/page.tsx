"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaCoffee,
  FaShoppingBag,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaArrowRight,
} from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";

export default function BreakTimePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <FaCoffee className="h-12 w-12 text-secondary-400 mr-4" />
            <h1 className="text-3xl md:text-4xl font-light text-white">
              Break Time
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            Important information about your next steps
          </p>
        </header>

        {/* Main Content */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-6 md:space-y-8 text-primary-200 leading-relaxed">
              {/* Final Question Notice */}
              <Card className="bg-secondary-900 bg-opacity-30 border-secondary-500">
                <CardContent className="p-4">
                  <h2 className="text-2xl md:text-3xl font-light text-secondary-400 text-center mb-4 flex items-center justify-center">
                    <FaMapMarkerAlt className="mr-3" />
                    Important Notice About Final Question
                  </h2>
                  <p className="text-lg md:text-xl text-center text-secondary-100 mb-4">
                    The{" "}
                    <strong className="text-white">
                      next question will be your final one
                    </strong>{" "}
                    and it's located{" "}
                    <strong className="text-white">
                      outside the Grand Bazaar
                    </strong>
                    .
                  </p>
                </CardContent>
              </Card>

              {/* Exploration Opportunity */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center justify-center">
                  <FaInfoCircle className="mr-3 text-secondary-400" />
                  Take Your Time to Explore
                </h3>
                <p className="text-base md:text-lg mb-4">
                  If you'd like to spend more time exploring the Grand Bazaar,
                  now is your chance! Once you proceed to the final question,
                  you'll be leaving this historic marketplace.
                </p>
              </div>

              {/* Bargaining Info */}
              <Card className="bg-primary-700 border-primary-500">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <GiPriceTag className="mr-2" />
                    The Art of Bargaining in Grand Bazaar
                  </h3>
                  <div className="space-y-3">
                    <p className="text-primary-100 text-sm md:text-base">
                      The Grand Bazaar is world-famous for its bargaining
                      culture. This is your opportunity to practice this ancient
                      tradition!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <Card className="bg-primary-600 border-primary-400">
                        <CardContent className="p-3">
                          <h4 className="font-semibold text-white mb-2">
                            Bargaining Tips:
                          </h4>
                          <ul className="text-primary-100 text-sm space-y-1 list-disc list-inside">
                            <li>Start at about 50-60% of the asking price</li>
                            <li>Be polite and friendly throughout</li>
                            <li>Be prepared to walk away if needed</li>
                            <li>Compare prices at different shops</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="bg-primary-600 border-primary-400">
                        <CardContent className="p-3">
                          <h4 className="font-semibold text-white mb-2">
                            What to Look For:
                          </h4>
                          <ul className="text-primary-100 text-sm space-y-1 list-disc list-inside">
                            <li>Turkish carpets and kilims</li>
                            <li>Ceramics and pottery</li>
                            <li>Leather goods</li>
                            <li>Jewelry and silver</li>
                            <li>Spices and Turkish delight</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Historical Context */}
              <Card className="bg-primary-700 border-primary-500">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaShoppingBag className="mr-2" />A Final Moment in History
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    You've explored the heart of one of the world's oldest and
                    largest covered markets. From the original bedestens to the
                    maze-like corridors, you've walked in the footsteps of
                    merchants and traders from centuries past. This is your
                    chance to fully immerse yourself in the atmosphere before
                    continuing your journey.
                  </p>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="bg-secondary-400 text-primary-900 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0"></div>
                      <p className="text-primary-100 text-sm md:text-base">
                        <strong className="text-white">Explore First:</strong>{" "}
                        Take your time to shop, take photos, and experience the
                        bazaar fully. Return to this page when you're ready to
                        continue.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="text-center space-y-4 md:space-y-0 md:flex md:justify-center md:gap-6">
          <Button
            onClick={() => router.push("/grand-bazaar/10/location")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl w-full md:w-auto"
          >
            Continue to Final Question
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            The Grand Bazaar awaits your exploration - treasures and traditions
            at every turn...
          </p>
        </footer>
      </div>
    </div>
  );
}
