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
              Congratulations!
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            You solved the first puzzle!
          </p>
        </header>

        <div className="flex items-center justify-center w-screen mb-4">
          <Image
            width={200}
            height={500}
            src="/q_imgs/1/serpent.png"
            alt="serpent column with gold boiler bg-red-500 w-full"
          />
        </div>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <p className="text-base md:text-lg">
                <strong className="text-white font-semibold">
                  Correct answer: Gold Boiler
                </strong>
                . You are now in the center of the Hippodrome. Imagine this
                place long ago: big stands all around you and the spina in the
                middle. This whole area was as big as 9 football fields
                together!
              </p>

              <p className="text-base md:text-lg">
                Can you imagine? They built this huge place to bring people
                together, to have fun, and to show the power of the empire.
              </p>

              {/* Additional Historical Context */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    Did you know?
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    The Hippodrome could hold up to 100,000 people. Chariot
                    races were not just for fun. They were also important for
                    politics. People showed if they supported the emperor or not
                    during these races.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/hippodrome/review")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Next Question
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Keep following the story of history...
          </p>
        </footer>
      </div>
    </div>
  );
}
