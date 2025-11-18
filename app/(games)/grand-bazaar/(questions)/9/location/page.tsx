import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaMapMarkerAlt,
  FaArrowRight,
  FaBuilding,
  FaSign,
  FaWalking,
  FaArrowLeft,
} from "react-icons/fa";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light mb-2 text-white">
            Question 9
          </h1>
          <div className="w-20 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <h2 className="text-2xl md:text-3xl font-light text-secondary-400 mb-4">
            Location
          </h2>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            Continue your exploration from Zincirli Han
          </p>
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
                  ZİNCİRLİ HAN EXIT - LEFT STREET
                </h2>
              </div>

              {/* Directions */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaWalking className="text-secondary-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-primary-200 leading-relaxed text-base md:text-lg">
                    From Zincirli Han exit, take the street on the left
                  </p>
                </div>

                <div className="flex items-start">
                  <FaArrowLeft className="text-secondary-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-primary-200 leading-relaxed text-base md:text-lg">
                    Explore the left side street from the han exit
                  </p>
                </div>
              </div>
            </div>

            {/* First Image */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <FaSign className="mr-2 text-secondary-400" />
                Street View 1
              </h3>
              <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden">
                <Image
                  src="/qs-imgs/grand-bazaar/location/9/1.png"
                  alt="Zincirli Han exit left street view 1"
                  fill
                  className="object-cover z-10"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
                <div className="absolute inset-0 bg-primary-900 bg-opacity-20"></div>
              </div>
              <p className="text-primary-300 text-sm mt-2 text-center italic">
                View of the left street from Zincirli Han exit
              </p>
            </div>

            {/* Second Image */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <FaBuilding className="mr-2 text-secondary-400" />
                Street View 2
              </h3>
              <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden">
                <Image
                  src="/qs-imgs/grand-bazaar/location/9/2.png"
                  alt="Zincirli Han exit left street view 2"
                  fill
                  className="object-cover z-10"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
                <div className="absolute inset-0 bg-primary-900 bg-opacity-20"></div>
              </div>
              <p className="text-primary-300 text-sm mt-2 text-center italic">
                Another perspective of the left street area
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Next Button */}
        <div className="text-center">
          <Link href="/grand-bazaar/9/qs">
            <Button className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Go to Question
              <FaArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Every turn reveals new discoveries in the bazaar&apos;s maze...
          </p>
        </footer>
      </div>
    </div>
  );
}
