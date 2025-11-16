"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaCheckCircle,
  FaArrowRight,
  FaHistory,
  FaBook,
  FaBan,
} from "react-icons/fa";
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
            You discovered the complex history of Esir Han!
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-light text-secondary-400 text-center mb-6">
                The Slave Market and Its Ironic Connections
              </h2>

              {/* Esir Han Image */}
              <div className="my-6 rounded-xl overflow-hidden border border-primary-600 shadow-lg">
                <Image
                  src="/qs-imgs/grand-bazaar/info/10/1.jpg"
                  alt="Esir Han - the former slave market in Grand Bazaar"
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="bg-primary-900 bg-opacity-70 p-3 text-center">
                  <p className="text-sm text-primary-200 italic">
                    Esir Han - where war captives and slaves were once bought
                    and sold
                  </p>
                </div>
              </div>

              <p className="text-base md:text-lg">
                Esir Han served as a{" "}
                <strong className="text-white">slave trading center</strong>,
                particularly for buying and selling war captives. This building
                witnessed some of history&apos;s most painful human
                transactions.
              </p>

              <div className="flex items-start mb-4">
                <FaHistory className="h-6 w-6 text-secondary-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg">
                  But within this dark history lie some of the most{" "}
                  <strong className="text-white">
                    surprising and ironic connections
                  </strong>
                  to world literature and art.
                </p>
              </div>

              {/* Pushkin's Grandfather */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaBook className="mr-2" />
                    Pushkin&apos;s Grandfather: From Slave to Noble
                  </h3>

                  {/* Abraham Hannibal Image */}
                  <div className="my-4 rounded-lg overflow-hidden border border-primary-500">
                    <Image
                      src="/qs-imgs/grand-bazaar/info/10/2.jpg"
                      alt="Abraham Hannibal - Pushkin's grandfather"
                      width={600}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                    <div className="bg-primary-800 bg-opacity-70 p-2 text-center">
                      <p className="text-xs text-primary-200 italic">
                        Abraham Hannibal, sold in this han, became ancestor to
                        Russia&apos;s greatest poet
                      </p>
                    </div>
                  </div>

                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    <strong className="text-white">Abraham Hannibal</strong>,
                    grandfather of Russian literature&apos;s founder Alexander
                    Pushkin, was kidnapped from Cameroon at age 6 and sold in
                    this very han.
                  </p>
                  <p className="text-primary-100 text-sm md:text-base">
                    Bought by a Russian diplomat and gifted to Tsar Peter I, his
                    intelligence impressed the Tsar so much that he was{" "}
                    <strong className="text-white">
                      adopted and given excellent education
                    </strong>
                    . He became a high-ranking soldier and diplomat, and Pushkin
                    wrote about his grandfather&apos;s story in &quot;The Moor
                    of Peter the Great.&quot;
                  </p>
                </CardContent>
              </Card>

              {/* Itri Efendi Connection */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <div className="my-4 rounded-lg overflow-hidden border border-primary-500">
                  <Image
                    src="/qs-imgs/grand-bazaar/info/10/3.jpg"
                    alt="Abraham Hannibal - Pushkin's grandfather"
                    width={600}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                  <div className="bg-primary-800 bg-opacity-70 p-2 text-center">
                    <p className="text-xs text-primary-200 italic">
                      {" "}
                      Buhurizade Mustafa Itri Efendi portrait on top of 100
                      turkish lira
                    </p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    Manager of The Slave Market
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    In another historical irony, composer{" "}
                    <strong className="text-white">
                      Buhurizade Mustafa Itri Efendi
                    </strong>{" "}
                    - whose portrait appears on today&apos;s 100 Turkish Lira
                    banknotes - once served as the manager of this very slave
                    market.
                  </p>
                </CardContent>
              </Card>

              {/* Ottoman Slavery Ban */}
              <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaBan className="mr-2" />
                    Ottoman Empire: Pioneer in Abolishing Slavery
                  </h3>
                  <p className="text-secondary-100 text-sm md:text-base mb-3">
                    Despite this dark history, the Ottoman Empire was among the{" "}
                    <strong className="text-white">
                      first states to ban and gradually end slave trade
                    </strong>
                    in the 19th century, showing progressive steps toward human
                    rights.
                  </p>
                  <p className="text-secondary-100 text-sm md:text-base">
                    The story of Esir Han serves as a{" "}
                    <strong className="text-white">painful reminder</strong>
                    of the brutal face of human trade, while also showing how
                    societies can evolve and reform over time.
                  </p>
                </CardContent>
              </Card>

              {/* Historical Reflection */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaHistory className="mr-2" />
                    Layers of History in Stone
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    Esir Han stands as a monument to history&apos;s complexities
                    - where human suffering and great art intersect, where
                    slaves could become nobles, and where artists managed
                    institutions of human trade. This building reminds us that
                    history is never simple, and that even in darkness, there
                    can be threads leading to light. The story of Abraham
                    Hannibal shows how human potential can triumph over brutal
                    circumstances, while the Ottoman Empire&apos;s eventual
                    banning of slavery demonstrates society&apos;s capacity for
                    moral progress.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Complete Journey
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Where history&apos;s darkest chapters and brightest legacies
            intertwine...
          </p>
        </footer>
      </div>
    </div>
  );
}
