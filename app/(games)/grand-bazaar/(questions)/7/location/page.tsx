import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaMapMarkerAlt,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light mb-2 text-white">
            Question 7
          </h1>
          <div className="w-20 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <h2 className="text-2xl md:text-3xl font-light text-secondary-400 mb-4">
            Location
          </h2>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            Discover the elegant water source of the külliye
          </p>
        </header>

        {/* Location Content */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Image Section */}
            <div className="mb-6 md:mb-8">
              <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden">
                <Image
                  src="/qs-imgs/pagan-cross-crescent/loc/7.JPG"
                  alt="Nuruosmaniye Sebili"
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
                  NURUOSMANIYE SEBİLİ
                </h2>
              </div>
              <p className="text-primary-200 leading-relaxed text-base md:text-lg">
                Approach the beautiful Nuruosmaniye Sebili, the ornate fountain
                that provided fresh water to the community. Sebils were
                charitable fountains where free water was distributed to
                passersby, reflecting the Ottoman tradition of public service
                and community care.
              </p>
            </div>

            {/* Google Maps Link */}
            <div className="text-center">
              <Link
                href="https://maps.app.goo.gl/S6GvBX93BZmD11C98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-secondary-400 text-secondary-400 hover:bg-secondary-400 hover:text-primary-900 font-semibold py-3 px-6 rounded-full transition-all duration-300"
                >
                  <FaMapMarkerAlt className="mr-2" />
                  Open in Google Maps
                  <FaExternalLinkAlt className="ml-2 h-3 w-3" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Next Button */}
        <div className="text-center">
          <Link href="/pagan-cross-crescent/7/qs">
            <Button className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Go to Question
              <FaArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Where water flowed as a gift to all...
          </p>
        </footer>
      </div>
    </div>
  );
}
