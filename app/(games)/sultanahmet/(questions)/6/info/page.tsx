"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  GiShakingHands,
  GiStrong,
  GiWatchtower,
  GiCrossedChains,
} from "react-icons/gi";

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
            Youve obtained your second artifact
          </p>
        </header>

        {/* Success Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-900 border border-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <GiCrossedChains className="text-white text-3xl" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-white mb-2">
                Chain
              </h2>
              <p className="text-gray-300">
                Youve obtained an important piece for the second seal
              </p>
            </div>

            {/* Historical Info */}
            <div className="space-y-6 text-gray-200 font-light leading-relaxed">
              <p>
                Only the sultan could enter the mosque courtyard with his horse.
                However, this chain was placed at the entrance for exactly that
                reason. Even if he was the sultan, he had to bow to show respect
                to Gods house.
              </p>

              <p>
                This elegant but meaningful barrier symbolized the limits of
                worldly power in the divine realm. Even the most powerful sultan
                had to show humility when entering the place of worship. This
                chain still exists today as one of the subtle details in mosque
                architecture.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Seals Collection Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif font-bold text-white mb-4 text-center">
              🏆 Seals
            </h3>
            <div className="flex justify-center gap-6 flex-wrap">
              {/* Completed Seal - Unity Seal */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-white rounded-full mx-auto flex items-center justify-center shadow-2xl mb-4">
                    <GiShakingHands className="text-white text-5xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-4">Unity Seal</p>
                <div className="flex justify-center mt-2">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Completed
                  </span>
                </div>
              </div>

              {/* Completed Seal - Power Seal */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-yellow-600 border-4 border-white rounded-full mx-auto flex items-center justify-center shadow-2xl mb-4">
                    <GiStrong className="text-white text-5xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-4">Power Seal</p>
                <div className="flex justify-center mt-2">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Completed
                  </span>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">
              2/3 seals completed
            </p>
          </CardContent>
        </Card>

        {/* Artifact Collection Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif font-bold text-white mb-4 text-center">
              📦 Current Artifacts
            </h3>
            <div className="flex justify-center gap-6 flex-wrap">
              {/* Minaret Artifact */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-700 border border-white rounded-lg p-4 w-24 h-24 flex items-center justify-center shadow-lg">
                    <GiWatchtower className="text-white text-3xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-4">Minaret</p>
              </div>
              {/* Chain Artifact */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-gray-600 to-gray-900 border border-white rounded-2xl p-4 w-24 h-24 flex items-center justify-center shadow-lg">
                    <GiCrossedChains className="text-white text-3xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-4">Chain</p>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">
              2/2 artifacts collected
            </p>
          </CardContent>
        </Card>

        {/* Progress Summary */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif font-bold text-white mb-4 text-center">
              📊 Progress Status
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Seals</h4>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div
                      className="bg-purple-600 h-4 rounded-full transition-all duration-500"
                      style={{ width: "67%" }}
                    ></div>
                  </div>
                  <span className="text-white font-bold">2/3</span>
                </div>
                <p className="text-gray-300 text-sm mt-2">67% completed</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Artifacts</h4>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div
                      className="bg-orange-600 h-4 rounded-full transition-all duration-500"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <span className="text-white font-bold">2/2</span>
                </div>
                <p className="text-gray-300 text-sm mt-2">
                  artifacts completed
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/sultanahmet/7/location")}
            className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-300"
          >
            Go to Final Seal →
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-400 font-light">
          <p className="italic">
            Youve collected all artifacts! Prepare to create the second seal...
          </p>
        </footer>
      </div>
    </div>
  );
}
