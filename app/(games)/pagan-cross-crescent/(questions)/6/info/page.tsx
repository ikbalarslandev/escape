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
              Excellent
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            You discovered the economic engine behind the külliye
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-light text-secondary-400 text-center mb-6">
                The Vakıf Han: Economic Engine of the Küllıye
              </h2>

              {/* What is a Vakıf Han */}
              <Card className="bg-primary-700 border-primary-500">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    What is a Vakıf Han?
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    A Vakıf Han is a special building for shops. It was built to
                    be a money-making machine for a mosque complex (a küllıye).
                    All the shops you see under this mosque were built for this
                    purpose.
                  </p>
                  <p className="text-primary-100 text-sm md:text-base mt-2">
                    <strong className="text-white">
                      The Sofcu Han you are in right now and the Vezir Han you
                      previously saw are vakıf han.
                    </strong>
                  </p>
                </CardContent>
              </Card>

              {/* How It Worked */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  How Did It Work?
                </h3>
                <p className="text-base md:text-lg mb-4">
                  The money from the shop rents was used to pay for everything
                  the mosque complex needed. This money was used for:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-base">
                      • Cleaning and repairing the mosque
                    </p>
                    <p className="text-base">
                      • Salaries for the imam and the prayer caller
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-base">
                      • Salaries for the teachers in the school
                    </p>
                    <p className="text-base">
                      • The free food for poor people in the soup kitchen
                    </p>
                  </div>
                </div>
              </div>

              {/* Self-Sufficient System */}
              <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    A Self-Sufficient System
                  </h3>
                  <p className="text-secondary-100 text-sm md:text-base">
                    This system was very clever. The küllıye was
                    self-sufficient. This means it took care of itself.
                  </p>
                  <div className="mt-3 space-y-2">
                    <p className="text-secondary-100 text-sm md:text-base">
                      •{" "}
                      <strong className="text-white">
                        It did not need money from the government.
                      </strong>
                    </p>
                    <p className="text-secondary-100 text-sm md:text-base">
                      •{" "}
                      <strong className="text-white">
                        It did not pay taxes to the government.
                      </strong>
                    </p>
                  </div>
                  <p className="text-secondary-100 text-sm md:text-base mt-3">
                    The shops paid for everything. This way, the mosque, school,
                    and soup kitchen could run forever, helping people for
                    centuries without ever asking for help.
                  </p>
                </CardContent>
              </Card>

              {/* Economic Innovation */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    Ottoman Economic Innovation
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    This vakıf (endowment) system was one of the most
                    sophisticated social welfare systems of its time. By
                    creating sustainable income sources through commercial
                    buildings like Sofcu Han and Vezir Han, the Ottomans ensured
                    that education, healthcare, and charity could continue for
                    generations without relying on unpredictable government
                    funding or donations.
                  </p>
                </CardContent>
              </Card>

              {/* Legacy */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    Lasting Legacy
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    Thanks to this brilliant economic model, institutions like
                    the Nuruosmaniye Külliyesi could operate independently for
                    centuries. The rental income from these hans provided
                    financial stability that allowed the complex to survive
                    political changes, economic crises, and even the transition
                    from empire to republic, continuing to serve the community
                    through the ages.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/pagan-cross-crescent/7/location")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Continue Your Journey
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Where commerce sustained compassion for centuries...
          </p>
        </footer>
      </div>
    </div>
  );
}
