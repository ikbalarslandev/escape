"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaCheckCircle,
  FaArrowRight,
  FaShieldAlt,
  FaHistory,
} from "react-icons/fa";
import { GiBank, GiMoneyStack } from "react-icons/gi";
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
            You discovered the world&apos;s first banking system!
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-light text-secondary-400 text-center mb-6">
                The First Banks of the World
              </h2>

              {/* Bedesten Security Image */}
              <div className="my-6 rounded-xl overflow-hidden border border-primary-600 shadow-lg">
                <Image
                  src="/qs-imgs/grand-bazaar/info/5/1.jpg"
                  alt="Cevahir and Sandal Bedestenleri - the secure banking centers"
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="bg-primary-900 bg-opacity-70 p-3 text-center">
                  <p className="text-sm text-primary-200 italic">
                    Cevahir and Sandal Bedestenleri - protected by state
                    soldiers as secure banking centers
                  </p>
                </div>
              </div>

              <p className="text-base md:text-lg">
                Cevahir and Sandal Bedestenleri were much more than just markets
                - they were{" "}
                <strong className="text-white">
                  one of the world&apos;s first banking systems
                </strong>
                .
              </p>

              <div className="flex items-start mb-4">
                <FaShieldAlt className="h-6 w-6 text-secondary-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg">
                  These buildings were{" "}
                  <strong className="text-white">
                    protected by state soldiers
                  </strong>
                  , making them the safest places in the city. Merchants trusted
                  them completely.
                </p>
              </div>

              {/* Banking Functions */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <GiBank className="mr-2" />
                    More Than Just Trading
                  </h3>

                  {/* Money Storage Image */}
                  <div className="my-4 rounded-lg overflow-hidden border border-primary-500">
                    <Image
                      src="/qs-imgs/grand-bazaar/info/5/2.jpg"
                      alt="Merchants storing money and gold in secure chests"
                      width={600}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                    <div className="bg-primary-800 bg-opacity-70 p-2 text-center">
                      <p className="text-xs text-primary-200 italic">
                        Merchants stored their money and gold in the secure
                        bedestens
                      </p>
                    </div>
                  </div>

                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    In these secure buildings, merchants didn&apos;t just trade
                    jewels and fabrics. They also stored their{" "}
                    <strong className="text-white">money and gold</strong> for
                    safekeeping.
                  </p>
                  <p className="text-primary-100 text-sm md:text-base">
                    This security function turned the bedestens into something
                    like a{" "}
                    <strong className="text-white">
                      &quot;state-guaranteed bank&quot;
                    </strong>{" "}
                    - the most trusted financial institution of its time.
                  </p>
                </CardContent>
              </Card>

              {/* Modern Banking Foundations */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <GiMoneyStack className="mr-2" />
                    The Birth of Modern Banking
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    Large payments were made directly from the{" "}
                    <strong className="text-white">trust accounts</strong> kept
                    in these bedestens. Merchants didn&apos;t need to carry
                    heavy gold or coins - they could transfer money safely.
                  </p>
                  <p className="text-primary-100 text-sm md:text-base">
                    This system laid the{" "}
                    <strong className="text-white">
                      foundations of modern banking
                    </strong>
                    . The concepts of secure storage, money transfers, and
                    trusted financial institutions all started here, centuries
                    ago.
                  </p>
                </CardContent>
              </Card>

              {/* How It Worked */}
              <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    How This Ancient Banking Worked
                  </h3>
                  <div className="space-y-2 text-secondary-100 text-sm md:text-base">
                    <p>
                      • <strong>State soldiers protected</strong> the bedestens
                      day and night
                    </p>
                    <p>
                      • Merchants stored{" "}
                      <strong>money, gold, and valuable items</strong> in secure
                      chests
                    </p>
                    <p>
                      • <strong>Trust accounts</strong> were created for each
                      merchant
                    </p>
                    <p>
                      • Large payments were{" "}
                      <strong>transferred between accounts</strong> without
                      moving physical money
                    </p>
                    <p>
                      • The system was <strong>state-guaranteed</strong> -
                      completely secure and reliable
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Historical Significance */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaHistory className="mr-2" />A Financial Revolution
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    The banking system developed in Cevahir and Sandal
                    Bedestenleri was revolutionary. It created a{" "}
                    <strong className="text-white">
                      safe, efficient way to handle money
                    </strong>{" "}
                    that enabled international trade to flourish. Without this
                    secure financial foundation, the Grand Bazaar could never
                    have become the world&apos;s most important trading center.
                    These buildings weren&apos;t just markets - they were the
                    heart of a global financial network.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/grand-bazaar/7/location")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Continue Your Journey
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Where commerce meets security, banking is born...
          </p>
        </footer>
      </div>
    </div>
  );
}
