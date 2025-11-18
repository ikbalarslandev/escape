import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaMapMarkerAlt,
  FaArrowRight,
  FaBuilding,
  FaCompass,
} from "react-icons/fa";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light mb-2 text-white">
            Question 5
          </h1>
          <div className="w-20 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <h2 className="text-2xl md:text-3xl font-light text-secondary-400 mb-4">
            Location
          </h2>
        </header>

        {/* Location Content */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Directions Section */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-secondary-400 to-secondary-600 mr-3"></div>
                <h2 className="text-xl md:text-2xl font-semibold text-white flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-secondary-400" />
                  CEVAHİR BEDESTENİ
                </h2>
              </div>

              {/* Directions */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaCompass className="text-secondary-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-primary-200 leading-relaxed text-base md:text-lg">
                    Right next to Store Number 49, you can see the entrance for{" "}
                    <strong className="text-white">Cevahir Bedesteni</strong>
                  </p>
                </div>

                <div className="flex items-start">
                  <FaBuilding className="text-secondary-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-primary-200 leading-relaxed text-base md:text-lg">
                    This is the{" "}
                    <strong className="text-white">core building</strong> of the
                    Grand Bazaar
                  </p>
                </div>
              </div>
            </div>

            {/* Entrance Image */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <FaBuilding className="mr-2 text-secondary-400" />
                Cevahir Bedesteni Entrance
              </h3>
              <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden">
                <Image
                  src="/qs-imgs/grand-bazaar/location/5/1.png"
                  alt="Cevahir Bedesteni entrance"
                  fill
                  className="object-cover z-10"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
                <div className="absolute inset-0 bg-primary-900 bg-opacity-20"></div>
              </div>
              <p className="text-primary-300 text-sm mt-2 text-center italic">
                The main entrance to Cevahir Bedesteni - the heart of the Grand
                Bazaar
              </p>
            </div>

            {/* Bird's Eye View Image */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <FaCompass className="mr-2 text-secondary-400" />
                Grand Bazaar Bird&apos;s Eye View
              </h3>
              <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden">
                <Image
                  src="/qs-imgs/grand-bazaar/location/5/2.jpeg"
                  alt="Grand Bazaar bird's eye view showing both bedestens"
                  fill
                  className="object-cover z-10"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
                <div className="absolute inset-0 bg-primary-900 bg-opacity-20"></div>
              </div>
              <p className="text-primary-300 text-sm mt-2 text-center italic">
                Can you spot both Sandal Bedesteni and Cevahir Bedesteni in this
                overview?
              </p>
            </div>

            {/* Historical Context */}
            <Card className="bg-primary-700 border-primary-500 mt-6">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                  <FaBuilding className="mr-2" />
                  The Core of the Bazaar
                </h3>
                <div className="text-primary-100 text-sm md:text-base space-y-2">
                  <p>
                    <strong className="text-white">Cevahir Bedesteni</strong>{" "}
                    (also known as the &quot;Inner Bedesten&quot;) is the{" "}
                    <strong className="text-white">
                      original and most important building
                    </strong>{" "}
                    of the Grand Bazaar.
                  </p>
                  <p>
                    Built in the 15th century, this is where the most valuable
                    goods were traded - jewelry, precious metals, and expensive
                    fabrics.
                  </p>
                  <p>
                    Together with Sandal Bedesteni, these two structures formed
                    the <strong className="text-white">nucleus</strong>
                    around which the entire Grand Bazaar grew organically over
                    centuries.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Location Instructions */}
            <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500 mt-6">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                  Finding Cevahir Bedesteni
                </h3>
                <ol className="text-primary-100 text-sm md:text-base space-y-2 list-decimal list-inside">
                  <li>From Store 49, look for the grand entrance nearby</li>
                  <li>Find the entrance that matches the first image above</li>
                  <li>
                    Enter Cevahir Bedesteni and explore its historic interior
                  </li>
                  <li>
                    Notice how this building connects to the rest of the bazaar
                  </li>
                </ol>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Next Button */}
        <div className="text-center">
          <Link href="/grand-bazaar/5/qs">
            <Button className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Go to Question
              <FaArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Where treasures were traded and empires were built...
          </p>
        </footer>
      </div>
    </div>
  );
}
