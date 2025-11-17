"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { FaCheckCircle, FaArrowRight, FaBuilding, FaMap } from "react-icons/fa";
import { GiGrowth } from "react-icons/gi";
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
            You discovered how the Grand Bazaar was born!
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-light text-secondary-400 text-center mb-6">
                The Second Heart of the Grand Bazaar
              </h2>

              {/* Sandal Bedesteni Image */}
              <div className="my-6 rounded-xl overflow-hidden border border-primary-600 shadow-lg">
                <Image
                  src="/qs-imgs/grand-bazaar/info/2/1.jpg"
                  alt="Sandal Bedesteni - the second core building of the Grand Bazaar"
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="bg-primary-900 bg-opacity-70 p-3 text-center">
                  <p className="text-sm text-primary-200 italic">
                    Sandal Bedesteni - where precious silk and fabrics were
                    traded
                  </p>
                </div>
              </div>

              <p className="text-base md:text-lg">
                After Cevahir Bedesteni was built, a second important building
                appeared:{" "}
                <strong className="text-white">Sandal Bedesteni</strong>. This
                was the{" "}
                <strong className="text-white">second core structure</strong>
                that would become the heart of the Grand Bazaar.
              </p>

              <div className="flex items-start mb-4">
                <GiGrowth className="h-6 w-6 text-secondary-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg">
                  The name{" "}
                  <strong className="text-white">&quot;Sandal&quot;</strong>{" "}
                  comes from a special type of{" "}
                  <strong className="text-white">
                    valuable fabric and silk
                  </strong>{" "}
                  that was traded here. This building was created specifically
                  for trading these precious textiles.
                </p>
              </div>

              {/* The Growth Story */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <GiGrowth className="mr-2" />
                    How the Grand Bazaar Grew Organically
                  </h3>

                  {/* Grand Bazaar Growth Image */}
                  <div className="my-4 rounded-lg overflow-hidden border border-primary-500">
                    <Image
                      src="/qs-imgs/grand-bazaar/info/2/2.jpeg"
                      alt="The organic growth of shops and streets around the bedestens"
                      width={600}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                    <div className="bg-primary-800 bg-opacity-70 p-2 text-center">
                      <p className="text-xs text-primary-200 italic">
                        Cevahir bedesteni is the one in the center and Sandal
                        bedesteni is the one close to the mosque
                      </p>
                    </div>
                  </div>

                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    Over time, the space{" "}
                    <strong className="text-white">
                      between and around these two bedestens
                    </strong>{" "}
                    began to fill with shops, streets, and inns. This
                    wasn&apos;t planned by architects - it happened naturally as
                    trade grew.
                  </p>
                  <p className="text-primary-100 text-sm md:text-base">
                    This organic growth eventually formed the massive Grand
                    Bazaar we know today. What started as two buildings became a{" "}
                    <strong className="text-white">whole city of trade</strong>.
                  </p>
                </CardContent>
              </Card>

              {/* Natural Development */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    Not Designed, But Born from Need
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    The Grand Bazaar wasn&apos;t created by architects with
                    drawings and plans. It was the{" "}
                    <strong className="text-white">
                      natural result of commercial need
                    </strong>
                    . As trade increased, more space was needed, and the market
                    grew to meet that need.
                  </p>
                  <p className="text-primary-100 text-sm md:text-base">
                    This makes the Grand Bazaar special - it&apos;s a{" "}
                    <strong className="text-white">
                      living, breathing organism
                    </strong>{" "}
                    that grew to serve the people who used it.
                  </p>
                </CardContent>
              </Card>

              {/* International Significance */}
              <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaMap className="mr-2" />A Sign of Global Importance
                  </h3>
                  <p className="text-secondary-100 text-sm md:text-base mb-3">
                    In Ottoman times, having a bedesten in your city was the
                    strongest sign that your city was an{" "}
                    <strong className="text-white">
                      international trade center
                    </strong>
                    . It meant merchants from all over the world came there to
                    do business.
                  </p>
                  <p className="text-secondary-100 text-sm md:text-base">
                    Just like other important Ottoman cities -{" "}
                    <strong className="text-white">
                      Bursa, Edirne, and Trabzon
                    </strong>{" "}
                    - Istanbul&apos;s two bedestens proved it was one of the{" "}
                    <strong className="text-white">
                      most important trade centers in the world
                    </strong>
                    .
                  </p>
                </CardContent>
              </Card>

              {/* Legacy */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaBuilding className="mr-2" />
                    From Two Buildings to a World Wonder
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    The story of Cevahir and Sandal Bedestenleri shows us how
                    great things often start small. These two buildings, each
                    serving different but equally valuable trades, became the{" "}
                    <strong className="text-white">
                      nucleus around which the world&apos;s largest covered
                      market grew
                    </strong>
                    . They prove that sometimes the most magnificent structures
                    aren&apos;t designed, but born from practical need.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/grand-bazaar/6/location")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Continue Your Journey
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Great markets grow from small beginnings...
          </p>
        </footer>
      </div>
    </div>
  );
}
