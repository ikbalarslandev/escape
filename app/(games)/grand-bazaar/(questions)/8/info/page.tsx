"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

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
              Perfect Discovery!
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            You uncovered the hidden engineering marvel beneath the mosque
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-light text-secondary-400 text-center mb-6">
                The Hidden Engineering Marvel
              </h2>

              {/* Foundation Story */}
              <Card className="bg-primary-700 border-primary-500">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    A Huge Hole for a Foundation
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    Before builders could start the mosque, they had a big job.
                    They needed to dig a giant hole. They dug down{" "}
                    <strong className="text-white">10 meters deep</strong> into
                    the earth.
                  </p>
                  <p className="text-primary-100 text-sm md:text-base mt-2">
                    The bottom{" "}
                    <strong className="text-white">
                      8 meters became a huge cistern
                    </strong>{" "}
                    (an underground water tank).
                  </p>
                  <p className="text-primary-100 text-sm md:text-base mt-2">
                    The top{" "}
                    <strong className="text-white">
                      2 meters were filled with stones and earth
                    </strong>{" "}
                    to make a strong, flat foundation for the mosque.
                  </p>
                  <p className="text-primary-100 text-sm md:text-base mt-2">
                    So, the mosque you see stands on a man-made hill, with a
                    secret water palace beneath it.
                  </p>
                </CardContent>
              </Card>

              {/* Where Did the Dirt Go */}
              <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    Where Did All the Dirt Go?
                  </h3>
                  <p className="text-secondary-100 text-sm md:text-base">
                    All the earth from this big dig was taken to{" "}
                    <strong className="text-white">Sultanahmet Square</strong>.
                    They used it to raise the level of the ground.
                  </p>
                  <p className="text-secondary-100 text-sm md:text-base mt-2">
                    This is why the ancient{" "}
                    <strong className="text-white">
                      Obelisk and Serpent Column
                    </strong>{" "}
                    in the square look like they sank. They did not sink.{" "}
                    <strong className="text-white">
                      The ground around them was made higher!
                    </strong>
                  </p>
                </CardContent>
              </Card>

              {/* Working Cistern */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    A Cistern That Still Works Today
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    The amazing part is that the{" "}
                    <strong className="text-white">
                      Nuruosmaniye Cistern still works after hundreds of years!
                    </strong>{" "}
                    It still provides water today. It gives water to the elegant
                    fountain in front of the mosque. It even provides water for
                    the famous{" "}
                    <strong className="text-white">German Fountain</strong> in
                    the middle of Sultanahmet Square.
                  </p>
                  <p className="text-primary-100 text-sm md:text-base mt-2">
                    This shows the{" "}
                    <strong className="text-white">
                      brilliant and lasting vision of Ottoman engineers.
                    </strong>
                  </p>
                </CardContent>
              </Card>

              {/* Engineering Innovation */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    Ottoman Engineering Genius
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    This project demonstrates incredible foresight. Instead of
                    simply disposing of the excavated earth, the Ottoman
                    engineers found multiple practical uses for it. They created
                    a stable foundation, built a massive water storage system,
                    and improved another public space - all from the same
                    excavation.
                  </p>
                </CardContent>
              </Card>

              {/* Water Management */}
              <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    Advanced Water Management
                  </h3>
                  <p className="text-secondary-100 text-sm md:text-base">
                    The cistern system was part of a sophisticated water network
                    that collected rainwater and channeled it through aqueducts.
                    This ensured the külliye had a reliable water supply for
                    drinking, cooking, cleaning, and the fountains - essential
                    for a complex that served thousands of people daily.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/grand-bazaar/9/location")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Continue Your Journey
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Where vision built foundations that lasted centuries...
          </p>
        </footer>
      </div>
    </div>
  );
}
