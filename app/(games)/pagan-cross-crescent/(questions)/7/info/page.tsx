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
              Well Done!
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            You discovered the heart of the külliye's community service
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-light text-secondary-400 text-center mb-6">
                The Küllıye: A Self-Sufficient Community
              </h2>

              {/* What is a Küllıye */}
              <Card className="bg-primary-700 border-primary-500">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    What is a Küllıye?
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    A Küllıye is not just one building. It is a group of
                    buildings with a mosque at its center. It was like a small
                    city that provided for all the needs of the people.
                  </p>
                </CardContent>
              </Card>

              {/* Buildings of a Küllıye */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  The Buildings of a Küllıye:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-base">
                      <strong className="text-white">Mosque:</strong> The main
                      building for prayer
                    </p>
                    <p className="text-base">
                      <strong className="text-white">Medrese:</strong> The
                      school for education
                    </p>
                    <p className="text-base">
                      <strong className="text-white">Imaret:</strong> The soup
                      kitchen for free food
                    </p>
                    <p className="text-base">
                      <strong className="text-white">Bath (Hamam):</strong> The
                      public bath for cleaning
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-base">
                      <strong className="text-white">Inn (Han):</strong> A place
                      for traders to stay and sell their goods
                    </p>
                    <p className="text-base">
                      <strong className="text-white">Library:</strong> A place
                      to read and study books
                    </p>
                    <p className="text-base">
                      <strong className="text-white">Tomb (Türbe):</strong> A
                      special building for important graves
                    </p>
                  </div>
                </div>
              </div>

              {/* The Free Soup Kitchen */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    The Free Soup Kitchen (Imaret)
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    Right now, you are looking at the Imaret – the soup kitchen
                    of the Nuruosmaniye Küllıye. From this building,{" "}
                    <strong className="text-white">
                      free food was given out every single day
                    </strong>{" "}
                    to people in need, like poor people and students. This was a
                    very important social service that demonstrated the Ottoman
                    tradition of caring for the community.
                  </p>
                </CardContent>
              </Card>

              {/* Sultan's Mosque */}
              <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    A Special Note: How to Know a Sultan Built This Mosque
                  </h3>
                  <p className="text-secondary-100 text-sm md:text-base">
                    Look at the mosque from here. Can you see it has{" "}
                    <strong className="text-white">four minarets</strong>? This
                    is a very important sign. In the Ottoman Empire, only a{" "}
                    <strong className="text-white">Sultan (the emperor)</strong>{" "}
                    was allowed to build a mosque with four or more minarets.
                    So, this mosque was definitely built by a Sultan.
                  </p>
                </CardContent>
              </Card>

              {/* Social Impact */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    Social Impact
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    The külliye system represented a comprehensive approach to
                    social welfare. It provided education, healthcare, food,
                    shelter, and spiritual guidance all in one complex. This
                    innovative system ensured that knowledge, charity, and
                    community support were accessible to everyone, regardless of
                    their social status or wealth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/pagan-cross-crescent/6/location")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Continue Your Journey
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Where faith, education, and charity came together as one...
          </p>
        </footer>
      </div>
    </div>
  );
}
