import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaMapMarkerAlt,
  FaArrowRight,
  FaStore,
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
            Question 6
          </h1>
          <div className="w-20 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <h2 className="text-2xl md:text-3xl font-light text-secondary-400 mb-4">
            Location
          </h2>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            Continue your journey through the historic corridors
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
                  STORE 78-82
                </h2>
              </div>

              {/* Directions */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaArrowLeft className="text-secondary-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-primary-200 leading-relaxed text-base md:text-lg">
                    Now go back to Store Number 49
                  </p>
                </div>

                <div className="flex items-start">
                  <FaWalking className="text-secondary-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-primary-200 leading-relaxed text-base md:text-lg">
                    Walk down this street and try to find{" "}
                    <strong className="text-white">Store Number 78-82</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Street View Image */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <FaWalking className="mr-2 text-secondary-400" />
                The Street to Walk Down
              </h3>
              <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden">
                <Image
                  src="/qs-imgs/grand-bazaar/location/6/1.png"
                  alt="Street view showing the path to Store 78-82"
                  fill
                  className="object-cover z-10"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
                <div className="absolute inset-0 bg-primary-900 bg-opacity-20"></div>
              </div>
              <p className="text-primary-300 text-sm mt-2 text-center italic">
                Walk down this street from Store 49 to find Store 78-82
              </p>
            </div>

            {/* Store Appearance Image */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <FaStore className="mr-2 text-secondary-400" />
                Store 78-82 Look Like This
              </h3>
              <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden">
                <Image
                  src="/qs-imgs/grand-bazaar/location/6/2.png"
                  alt="Store Number 78-82 appearance"
                  fill
                  className="object-cover z-10"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
                <div className="absolute inset-0 bg-primary-900 bg-opacity-20"></div>
              </div>
              <p className="text-primary-300 text-sm mt-2 text-center italic">
                This is what Store 78-82 look like
              </p>
            </div>

            {/* Location Instructions */}
            <Card className="bg-primary-700 border-primary-500 mt-6">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  Finding Store 78-82
                </h3>
                <ol className="text-primary-100 text-sm md:text-base space-y-2 list-decimal list-inside">
                  <li>
                    Return to Store Number 49 (where you saw the golf ball)
                  </li>
                  <li>
                    From there, walk down the street shown in the first image
                  </li>
                  <li>Look for store numbers as you walk along the street</li>
                  <li>
                    Find the group of store numbered{" "}
                    <strong className="text-white">78, 79, 80, 81, 82</strong>
                  </li>
                  <li>
                    The store should match the appearance shown in the second
                    image
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Navigation Help */}
            <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500 mt-6">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                  Navigation Tip
                </h3>
                <p className="text-primary-100 text-sm md:text-base">
                  You&apos;re exploring the interconnected corridors of the
                  Grand Bazaar. The store are arranged in a logical numbering
                  sequence, so if you find Store 49, continuing in the right
                  direction should lead you to the higher numbered store.
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Next Button */}
        <div className="text-center">
          <Link href="/grand-bazaar/6/qs">
            <Button className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Go to Question
              <FaArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Following the numbers, discovering the stories...
          </p>
        </footer>
      </div>
    </div>
  );
}
