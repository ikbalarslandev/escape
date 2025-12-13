import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8 md:mb-12">
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-light mb-2 text-white">
              Question 3
            </h1>
            <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
            <h2 className="text-2xl md:text-3xl font-light text-secondary-400 mb-4">
              Location
            </h2>
          </div>
          <p className="text-lg md:text-xl text-primary-200 font-light max-w-2xl mx-auto">
            Continue exploring the historical sites around you
          </p>
        </header>

        {/* Location Content */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Image Section */}
            <div className="mb-6 md:mb-8">
              <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden">
                <Image
                  src="/q_imgs/7.jpg"
                  alt="Sultanahmet Mosque"
                  fill
                  className="object-cover z-10"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
                <div className="absolute inset-0 bg-primary-900 bg-opacity-20"></div>
              </div>
            </div>

            {/* Description Section */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-secondary-400 to-secondary-600 mr-3"></div>
                <h2 className="text-xl md:text-2xl font-semibold text-white flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-secondary-400" />
                  BLUE MOSQUE
                </h2>
              </div>
              <p className="text-primary-200 leading-relaxed text-base md:text-lg">
                Look at the Blue Mosque from Sultanahmet Park where you are
                located.
              </p>
            </div>

            {/* Location Status */}
            <div className="text-center">
              <div className="inline-flex items-center bg-primary-700 text-primary-300 font-semibold py-3 px-6 rounded-full border border-primary-500 opacity-75 cursor-not-allowed">
                <FaMapMarkerAlt className="mr-2" />
                You Are Already Here
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Button */}
        <div className="text-center">
          <Link href="/seventh-minaret/3/qs">
            <Button className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Go to Question
              <FaArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Follow the traces of history...
          </p>
        </footer>
      </div>
    </div>
  );
}
