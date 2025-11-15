"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
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
            You discovered the path and found the holy tree!
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-light text-secondary-400 text-center mb-6">
                The Story of Çemberlitaş
              </h2>

              {/* Column of Constantine Image */}
              <div className="my-6 rounded-xl overflow-hidden border border-primary-600 shadow-lg">
                <Image
                  src="/qs-imgs/pagan-cross-crescent/info/2/column.jpg"
                  alt="Column of Constantine showing the nine distinct stone blocks"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="bg-primary-900 bg-opacity-70 p-3 text-center">
                  <p className="text-sm text-primary-200 italic">
                    The Column of Constantine (Çemberlitaş) showing the nine
                    stone blocks
                  </p>
                </div>
              </div>

              <p className="text-base md:text-lg">
                The Column of Constantine was very tall and was made of{" "}
                <strong className="text-white">
                  nine separate stone blocks
                </strong>
                .
              </p>

              <p className="text-base md:text-lg">
                One day, a very{" "}
                <strong className="text-white">strong wind storm</strong> hit
                the city. The wind was so powerful that the statue of
                Constantine on top of the column fell down. When it fell, it
                broke, and it also broke{" "}
                <strong className="text-white">
                  three of the nine stone blocks
                </strong>
                .
              </p>

              {/* Repair Story */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    How They Fixed the Column
                  </h3>

                  {/* Column with Rings Image */}
                  <div className="my-4 rounded-lg overflow-hidden border border-primary-500">
                    <Image
                      src="/qs-imgs/pagan-cross-crescent/info/2/column-with-rings.jpg"
                      alt="Close-up view of the iron reinforcement rings that give Çemberlitaş its name"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                    <div className="bg-primary-800 bg-opacity-70 p-2 text-center">
                      <p className="text-xs text-primary-200 italic">
                        The iron reinforcement rings that give the column its
                        Turkish name &quot;Çemberlitaş&quot;
                      </p>
                    </div>
                  </div>

                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    After the statue and the top blocks fell, the column was
                    shorter and damaged. To fix it, people put a simple{" "}
                    <strong className="text-white">white marble capital</strong>{" "}
                    on the top to finish it.
                  </p>
                  <p className="text-primary-100 text-sm md:text-base">
                    They also saw that the column was now weak. So, they placed{" "}
                    <strong className="text-white">strong iron rings</strong>{" "}
                    around it to hold the stone blocks together and make it
                    strong again.
                  </p>
                </CardContent>
              </Card>

              {/* Name Origin */}
              <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    How It Got Its Name
                  </h3>
                  <p className="text-secondary-100 text-sm md:text-base">
                    Because of these metal rings, the column got a new name.
                    People started to call it{" "}
                    <strong className="text-white">
                      &quot;Çemberlitaş&quot;
                    </strong>
                    , which means{" "}
                    <strong className="text-white">
                      &quot;The Hooped Stone&quot;
                    </strong>{" "}
                    or{" "}
                    <strong className="text-white">
                      &quot;The Column with Rings&quot;
                    </strong>
                    . That is the name we still use today.
                  </p>
                </CardContent>
              </Card>

              {/* Fun Fact */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    Did You Know?
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    The original column stood approximately 50 meters high.
                    After the storm damage and repairs, it now stands at about
                    35 meters tall. The iron rings that gave it its famous name
                    have been replaced and reinforced several times over the
                    centuries to keep this ancient monument standing strong.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/pagan-cross-crescent/3/location")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Continue Your Journey
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            The stones remember what people forget...
          </p>
        </footer>
      </div>
    </div>
  );
}
