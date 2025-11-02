"use client";

import { GiStoneTablet, GiSandSnake, GiClayBrick } from "react-icons/gi";
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
            You have found your fourth treasure.
          </p>
        </header>

        {/* Success Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-900 border border-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <GiClayBrick className="text-white text-3xl" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-white mb-2">
                Brick
              </h2>
              <p className="text-gray-300">
                You have completed the final piece for the first seal
              </p>
            </div>

            {/* Historical Info */}
            <div className="space-y-6 text-gray-200 font-light leading-relaxed">
              <p>
                This obelisk was once covered with bronze plates. During the
                Crusades, soldiers took the bronze by force, leaving many holes
                that you can still see today. These holes are where the bronze
                plates were attached to the obelisk.
              </p>

              <p>
                During the Ottoman period, soldiers would climb this monument by
                stepping into these holes and receive tips from the sultan. Dont
                forget to climb it like a real soldier while exploring Istanbul
                in Assassins Creed.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Artifact Collection Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif font-bold text-white mb-4 text-center">
              🏆 Collected Artifacts
            </h3>
            <div className="flex justify-center gap-6">
              {/* First Artifact - Miniature Horse */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-900 border border-white rounded-2xl p-4 w-24 h-24 flex items-center justify-center shadow-lg">
                    <FaHorseHead className="text-white text-4xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-4">
                  Miniature Horse
                </p>
              </div>
              {/* Second Artifact - Stone Tablet */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-stone-400 to-stone-800 border border-white rounded-2xl p-4 w-24 h-24 flex items-center justify-center shadow-lg">
                    <GiStoneTablet className="text-white text-3xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-4">Parchment</p>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-6">
              {/* Third Artifact - Snake */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-green-600 to-green-900 border border-white rounded-2xl p-4 w-24 h-24 flex items-center justify-center shadow-lg">
                    <GiSandSnake className="text-white text-3xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-4">Snake</p>
              </div>
              {/* Fourth Artifact - Brick */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-orange-600 to-orange-900 border border-white rounded-2xl p-4 w-24 h-24 flex items-center justify-center shadow-lg">
                    <GiClayBrick className="text-white text-3xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-4">Brick</p>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">
              4/4 artifacts collected
            </p>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/hipodrom/4/seal")}
            className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-300"
          >
            Go to First Seal →
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-400 font-light">
          <p className="italic">
            You have collected all artifacts! Prepare to create the first
            seal...
          </p>
        </footer>
      </div>
    </div>
  );
}
