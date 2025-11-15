"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import YouTube from "react-youtube";

export default function InfoPage() {
  const router = useRouter();

  const videoOpts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <FaCheckCircle className="h-12 w-12 text-secondary-400 mr-4" />
            <h1 className="text-3xl md:text-4xl font-light text-white">
              Excellent!
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            You discovered the secrets of Vezir Han!
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-light text-secondary-400 text-center mb-6">
                Vezir Han: The Heart of the Silk Road
              </h2>

              {/* Silk Road Section */}
              <Card className="bg-primary-700 border-primary-500">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    What was the Silk Road?
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    The Silk Road was not one road, but a very long network of
                    trade routes that connected countries. For centuries,
                    merchants used these routes to carry valuable goods like{" "}
                    <strong className="text-white">
                      silk, spices, gems, and ideas
                    </strong>{" "}
                    between Asia and Europe.
                  </p>
                </CardContent>
              </Card>

              {/* Logistics and Trade Center */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  A Logistics and Trade Center
                </h3>
                <p className="text-base md:text-lg">
                  Vezir Han was a major hub on this network and one of the
                  biggest trading buildings in Istanbul. It was a central point
                  where goods traveling the Silk Road were{" "}
                  <strong className="text-white">
                    stored, sorted, and sold
                  </strong>
                  . Traders from far away came here to stay and do business.
                </p>
                <p className="text-base md:text-lg mt-4">
                  Because of this, Vezir Han was a vital part of the Grand
                  Bazaar.{" "}
                  <strong className="text-white">
                    The economy of the city and the whole empire was directed
                    from this place.
                  </strong>
                </p>
              </div>

              {/* Vezir Han Today */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    The Vezir Han Today
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    Today, Vezir Han is still a center for business, but now it
                    is the{" "}
                    <strong className="text-white">
                      heart of the jewelry and gold trade
                    </strong>
                    . Inside the building, you will find many shops and
                    workshops. People here work with{" "}
                    <strong className="text-white">
                      gold, silver, precious stones, and jewelry
                    </strong>
                    .
                  </p>
                </CardContent>
              </Card>

              {/* James Bond Section */}
              <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    James Bond Recorded Here
                  </h3>
                  <p className="text-secondary-100 text-sm md:text-base mb-4">
                    This building is so famous that it was in a James Bond
                    movie! A scene from{" "}
                    <strong className="text-white">"Skyfall" (2012)</strong> was
                    filmed right here inside Vezir Han.
                  </p>

                  {/* YouTube Video */}
                  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-primary-900 mt-4">
                    <div className="relative h-48 md:h-64 w-full">
                      <YouTube
                        videoId="yV8-IGY64pE"
                        opts={videoOpts}
                        className="w-full h-full"
                        iframeClassName="w-full h-full rounded-lg"
                      />
                    </div>
                  </div>
                  <p className="text-secondary-300 text-sm text-center mt-2 italic">
                    James Bond chase scene filmed in Vezir Han
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
                    Vezir Han was built in 1659-1660 by the famous Ottoman Grand
                    Vizier Köprülü Mehmed Pasha. The han was designed to be
                    self-sufficient, with its income supporting the Nuruosmaniye
                    Mosque complex. For centuries, it has stood as a testament
                    to Ottoman engineering and commercial prowess.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/pagan-cross-crescent/4/location")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Continue Your Journey
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Where ancient trade meets modern adventure...
          </p>
        </footer>
      </div>
    </div>
  );
}
