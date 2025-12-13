"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { FaCheckCircle, FaArrowRight, FaHistory } from "react-icons/fa";

export default function InfoPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4">
            <FaCheckCircle className="h-12 w-12 text-secondary-400 mr-4" />
            <h1 className="text-3xl md:text-4xl font-light text-white">
              Congratulations!
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            You&apos;ve unlocked the mystery behind the puzzle — now it&apos;s
            time to learn the story behind these stones.
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Story */}
            <div className="space-y-6 text-primary-200 leading-relaxed">
              <div className="flex items-center mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-secondary-400 to-secondary-600 mr-3"></div>
                <h2 className="text-xl md:text-2xl font-semibold text-white flex items-center">
                  <FaHistory className="mr-2 text-secondary-400" />
                  The Story of Hagia Sophia
                </h2>
              </div>

              <p className="text-base md:text-lg">
                The story of Hagia Sophia is not just about a building —
                it&apos;s about an emperor&apos;s pride and ambition.
              </p>

              <p className="text-base md:text-lg">
                In <strong className="text-white">532 AD</strong>, one of the
                bloodiest events in Istanbul&apos;s history happened — the{" "}
                <strong className="text-secondary-400">Nika Revolt</strong>.
                People were tired of taxes and the emperor&apos;s harsh rule.
                After days of rebellion, the city was set on fire; palaces,
                churches, and the original Hagia Sophia were completely burned
                and destroyed.
              </p>

              <p className="text-base md:text-lg">
                Emperor <strong className="text-white">Justinian I</strong>{" "}
                swore to build a new Hagia Sophia from the ashes — but this time
                it wouldn&apos;t just be a church, it would be a masterpiece
                that challenged the world.
              </p>

              {/* Solomon&apos;s Temple Info */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    Why Solomon&apos;s Temple Was Important
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    His goal was to surpass the{" "}
                    <strong className="text-white">Temple of Solomon</strong> in
                    Jerusalem.
                  </p>
                  <p className="text-primary-100 text-sm md:text-base">
                    In Jewish belief, this was God&apos;s house on Earth — in
                    the &quot;Holy of Holies,&quot; God&apos;s presence was
                    closest to humanity. For centuries, when people spoke of
                    &quot;God&apos;s House,&quot; they meant Solomon&apos;s
                    Temple.
                  </p>
                </CardContent>
              </Card>

              <p className="text-base md:text-lg">
                Justinian wanted to beat this holy symbol. With thousands of
                craftsmen, architects, and workers, he completed Hagia Sophia in
                just <strong className="text-white">five years</strong>.
              </p>

              <div className="bg-secondary-400/20 border-l-4 border-secondary-400 p-4 rounded-r-lg">
                <p className="text-base md:text-lg italic text-white">
                  &quot;On opening day, when he entered under the dome and saw
                  the light shining down like from heaven, he shouted these
                  words that would go down in history:&quot;
                </p>
                <p className="text-xl md:text-2xl font-semibold text-secondary-400 text-center mt-3">
                  &quot;Oh Solomon, I have surpassed you!&quot;
                </p>
              </div>

              <p className="text-base md:text-lg">
                That moment marked not just the birth of a building, but also a
                struggle for religious superiority. Hagia Sophia became a
                declaration made of stone, light, and pride — a monument where
                an emperor spoke not to God, but to history itself.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/seventh-minaret/review")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Continue Journey
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Continue following the traces of history...
          </p>
        </footer>
      </div>
    </div>
  );
}
