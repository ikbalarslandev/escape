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
              Perfect Discovery!
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            You found the hidden stone and uncovered its story!
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-light text-secondary-400 text-center mb-6">
                The Fallen Capital Stone
              </h2>

              <p className="text-base md:text-lg">
                Do you remember the story of the strong wind storm? The wind was
                so powerful that it broke the column. The statue of Constantine
                and the top part of the column fell to the ground and broke.
              </p>

              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    A Piece of History
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    Right now, you are not looking at the column itself. You are
                    looking at one of the broken pieces. This stone piece is
                    very important. It is the{" "}
                    <strong className="text-white">capital</strong> – the
                    special head of the column that held the giant statue of
                    Emperor Constantine.
                  </p>
                </CardContent>
              </Card>

              <p className="text-base md:text-lg">
                Imagine, this stone was at the very top of the tall column for
                hundreds of years. The statue of the emperor with his crown of
                seven lights stood right on top of it. After the storm, this
                piece fell down and was lost to time until now.
              </p>

              {/* Historical Significance */}
              <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    Historical Significance
                  </h3>
                  <p className="text-secondary-100 text-sm md:text-base">
                    This capital stone witnessed the entire history of
                    Constantinople/Istanbul from its highest vantage point. It
                    saw empires rise and fall, heard the prayers of different
                    faiths, and watched as the city transformed around it.
                    Finding this piece connects us directly to the column&apos;s
                    original glory.
                  </p>
                </CardContent>
              </Card>

              {/* Architectural Detail */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    Architectural Marvel
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    The capital was designed to distribute the enormous weight
                    of the statue evenly across the column. Its intricate
                    carving and precise engineering demonstrate the advanced
                    skills of Roman architects. Even broken, this stone tells a
                    story of ancient craftsmanship and imperial ambition.
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
            Every stone has a story waiting to be told...
          </p>
        </footer>
      </div>
    </div>
  );
}
