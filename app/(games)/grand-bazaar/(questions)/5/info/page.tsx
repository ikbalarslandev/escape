"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { FaCheckCircle, FaArrowRight, FaGem, FaMosque } from "react-icons/fa";
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
            You discovered the secret of Cevahir Bedesteni!
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-light text-secondary-400 text-center mb-6">
                The Jewel Market That Supported a Great Mosque
              </h2>

              {/* Cevahir Bedesteni Image */}
              <div className="my-6 rounded-xl overflow-hidden border border-primary-600 shadow-lg">
                <Image
                  src="/qs-imgs/grand-bazaar/info/5/1.jpg"
                  alt="Cevahir Bedesteni - the jewel market building"
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="bg-primary-900 bg-opacity-70 p-3 text-center">
                  <p className="text-sm text-primary-200 italic">
                    Cevahir Bedesteni - the secure market for precious jewels
                    and goods
                  </p>
                </div>
              </div>

              <p className="text-base md:text-lg">
                After the conquest of Istanbul,{" "}
                <strong className="text-white">
                  Sultan Mehmet the Conqueror
                </strong>{" "}
                built a special market called{" "}
                <strong className="text-white">Cevahir Bedesteni</strong>.
              </p>

              <div className="flex items-start mb-4">
                <FaGem className="h-6 w-6 text-secondary-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg">
                  The name{" "}
                  <strong className="text-white">
                    &quot;Cevahir&quot; means &quot;jewels&quot;
                  </strong>
                  . This tells us exactly what this building was for - it was a
                  secure place where the most valuable jewels and precious items
                  were bought and sold.
                </p>
              </div>

              {/* The Purpose */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaMosque className="mr-2" />A Clever Plan for Hagia Sophia
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    Sultan Mehmet built this market for a very special reason.
                    All the{" "}
                    <strong className="text-white">
                      rent money from the shops
                    </strong>{" "}
                    would go directly to support{" "}
                    <strong className="text-white">Hagia Sophia Mosque</strong>.
                  </p>
                  <p className="text-primary-100 text-sm md:text-base">
                    This money was used for the{" "}
                    <strong className="text-white">
                      maintenance and needs
                    </strong>{" "}
                    of the great mosque, ensuring it would always be beautiful
                    and well-cared for.
                  </p>
                </CardContent>
              </Card>

              {/* How It Worked */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    How This Brilliant System Worked
                  </h3>

                  <div className="space-y-3 text-primary-100 text-sm md:text-base">
                    <p>
                      • <strong>Rich merchants rented shops</strong> in this
                      secure building
                    </p>
                    <p>
                      • They sold{" "}
                      <strong>valuable jewels, gold, and precious items</strong>
                    </p>
                    <p>
                      • The <strong>rent money collected</strong> from these
                      shops
                    </p>
                    <p>
                      • This money was{" "}
                      <strong>given directly to Hagia Sophia</strong>
                    </p>
                    <p>
                      • The mosque used this money for{" "}
                      <strong>repairs, maintenance, and daily needs</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Dual Function */}
              <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    Two Important Jobs in One Building
                  </h3>
                  <p className="text-secondary-100 text-sm md:text-base">
                    Cevahir Bedesteni served{" "}
                    <strong className="text-white">
                      both economic and religious purposes
                    </strong>
                    . It was not just a market, but also a way to support one of
                    the most important religious buildings in Istanbul. This
                    clever system helped connect business with faith in a
                    beautiful way.
                  </p>
                </CardContent>
              </Card>

              {/* Legacy */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    A Lasting Legacy
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    This system created by Sultan Mehmet showed great wisdom. It
                    ensured that
                    <strong className="text-white">
                      {" "}
                      Hagia Sophia would always have financial support
                    </strong>
                    , while also creating a secure trading place for the most
                    valuable goods in the empire. It was a perfect solution that
                    served both God and commerce.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/grand-bazaar/5/location")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Continue Your Journey
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Where commerce meets faith, great things are built...
          </p>
        </footer>
      </div>
    </div>
  );
}
