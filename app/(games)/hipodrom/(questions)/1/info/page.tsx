"use client";

import { FaHorseHead } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

export default function InfoPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white tracking-wider">
            Congratulations!
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-6">
            Youve earned your first object
          </p>
        </header>

        {/* Success Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-900 border border-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaHorseHead className="text-white text-3xl" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-white mb-2">
                Miniature Horse
              </h2>
              <p className="text-gray-300">
                This is your first piece in creating the seals
              </p>
            </div>

            {/* Historical Info */}
            <div className="space-y-6 text-gray-200 font-light leading-relaxed">
              <p>
                <strong className="text-white">
                  Correct answer: Serpent Column
                </strong>
                . You are now right in the center of the Hippodrome. Imagine,
                around you are massive stands and in the middle is the spina;
                this entire area is about the size of 9 football fields!
              </p>

              <p>
                Can you imagine that such a vast area was built to bring people
                together, entertain them, and showcase the glory of the empire?
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Object Collection Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif font-bold text-white mb-4 text-center">
              🏆 Collected Objects
            </h3>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-900 border border-white rounded-2xl p-4 w-24 h-24 flex items-center justify-center shadow-lg">
                <FaHorseHead className="text-white text-4xl" />
              </div>
            </div>
            <p className="text-center text-gray-300 mt-4">Miniature Horse</p>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/hipodrom/review")}
            className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-300"
          >
            Next Question →
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-400 font-light">
          <p className="italic">Continue following the traces of history...</p>
        </footer>
      </div>
    </div>
  );
}
