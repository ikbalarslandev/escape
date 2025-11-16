"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaCheckCircle,
  FaArrowRight,
  FaHotel,
  FaWarehouse,
  FaBuilding,
} from "react-icons/fa";
import { GiStonePath } from "react-icons/gi";
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
            You discovered the secret of Ottoman Hans!
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-light text-secondary-400 text-center mb-6">
                The Multi-Purpose Trading Centers
              </h2>

              {/* Han Overview Image */}
              <div className="my-6 rounded-xl overflow-hidden border border-primary-600 shadow-lg">
                <Image
                  src="/qs-imgs/grand-bazaar/info/8/1.jpg"
                  alt="Traditional Ottoman Han - merchant trading center"
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="bg-primary-900 bg-opacity-70 p-3 text-center">
                  <p className="text-sm text-primary-200 italic">
                    An Ottoman Han - where merchants lived, stored goods, and
                    conducted business
                  </p>
                </div>
              </div>

              <p className="text-base md:text-lg">
                <strong className="text-white">Hans</strong> were multi-purpose
                buildings in Ottoman cities where merchants could stay, store
                their goods, and conduct business - all in one place.
              </p>

              <div className="flex items-start mb-4">
                <FaHotel className="h-6 w-6 text-secondary-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg">
                  Think of them as today&apos;s{" "}
                  <strong className="text-white">
                    hotels, warehouses, and office centers combined
                  </strong>
                  . They were vital rest, supply, and trading points for
                  merchant caravans.
                </p>
              </div>

              {/* What is a Han? */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaBuilding className="mr-2" />
                    The Ottoman Business Hub
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    When merchant caravans arrived in a city after long
                    journeys, they needed a safe place to rest, store their
                    valuable goods, and meet with other traders.
                  </p>
                  <p className="text-primary-100 text-sm md:text-base">
                    Hans provided{" "}
                    <strong className="text-white">
                      everything a merchant needed
                    </strong>{" "}
                    - from sleeping quarters to secure storage and business
                    meeting spaces.
                  </p>
                </CardContent>
              </Card>

              {/* Zincirli Han */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <GiStonePath className="mr-2" />
                    Zincirli Han: The Han with Chains
                  </h3>

                  {/* Zincirli Han Image */}
                  <div className="my-4 rounded-lg overflow-hidden border border-primary-500">
                    <Image
                      src="/qs-imgs/grand-bazaar/info/8/2.jpg"
                      alt="Zincirli Han with its characteristic chains on the facade"
                      width={600}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                    <div className="bg-primary-800 bg-opacity-70 p-2 text-center">
                      <p className="text-xs text-primary-200 italic">
                        Zincirli Han gets its name from the chains used for
                        rainwater drainage
                      </p>
                    </div>
                  </div>

                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    Zincirli Han is one of these commercial hans in the Grand
                    Bazaar area. It gets its name from the{" "}
                    <strong className="text-white">chains on its facade</strong>
                    that were used to drain rainwater.
                  </p>

                  <p className="text-primary-100 text-sm md:text-base">
                    These chains served a practical purpose but also gave the
                    building its{" "}
                    <strong className="text-white">
                      characteristic appearance
                    </strong>
                    , making it instantly recognizable.
                  </p>
                </CardContent>
              </Card>

              {/* Architectural Details */}
              <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <GiStonePath className="mr-2" />
                    Centuries of History Underfoot
                  </h3>
                  <p className="text-secondary-100 text-sm md:text-base mb-3">
                    The{" "}
                    <strong className="text-white">cobblestone pavement</strong>{" "}
                    on Zincirli Han&apos;s ground floor has witnessed centuries
                    of commercial activity. Each stone has seen countless
                    merchants, customers, and trade deals over hundreds of
                    years.
                  </p>
                  <p className="text-secondary-100 text-sm md:text-base">
                    In short, Zincirli Han is one of Istanbul&apos;s most
                    vibrant trading centers, a place where{" "}
                    <strong className="text-white">
                      architecture tells the story of commerce
                    </strong>
                    and where every element has both function and meaning.
                  </p>
                </CardContent>
              </Card>

              {/* Legacy */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaWarehouse className="mr-2" />
                    The Heartbeat of Ottoman Commerce
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    Places like Zincirli Han were the{" "}
                    <strong className="text-white">
                      beating heart of Ottoman trade
                    </strong>
                    . They weren&apos;t just buildings - they were complete
                    ecosystems where commerce, culture, and community came
                    together. The chains that give Zincirli Han its name are
                    more than just architectural features; they&apos;re symbols
                    of a sophisticated trading network that connected continents
                    and made Istanbul one of the world&apos;s greatest
                    commercial centers.
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
            Where merchants found rest, goods found safety, and deals found
            life...
          </p>
        </footer>
      </div>
    </div>
  );
}
