"use client";

import { GiStoneTablet, GiSandSnake } from "react-icons/gi";
import { FaHorseHead } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";

export default function InfoPage() {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("/opt/3/greek_war.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // 30% volume level

    // Start music when page loads
    const playAudio = async () => {
      try {
        await audioRef.current?.play();
      } catch (error) {
        console.log("Audio play failed:", error);
      }
    };

    playAudio();

    // Stop music when leaving page
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="min-h-screen text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white tracking-wider">
            Congratulations!
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-6">
            Youve obtained your third artifact
          </p>
        </header>

        {/* Success Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-900 border border-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <GiSandSnake className="text-white text-3xl" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-white mb-2">
                Snake
              </h2>
              <p className="text-gray-300">
                The third piece in your quest to cure the ancient poison
              </p>
            </div>

            {/* Historical Info */}
            <div className="space-y-6 text-gray-200 font-light leading-relaxed">
              <p>
                Congratulations! You found the antidote tree and neutralized the
                effects of the ancient poison. This bronze body is a symbol of
                the victory won by 31 Greek city-states united against the
                Persians.
              </p>

              <p>
                This monument was cast from melted bronze weapons of the Persian
                army. Its purpose was to forever commemorate the power of Greek
                unity. Centuries later, Emperor Constantine brought it to
                Istanbul and erected it in the Hippodrome to show his respect
                for Greek culture and win the peoples affection.
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
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-900 border border-white rounded-2xl p-4 w-20 h-20 flex items-center justify-center shadow-lg">
                    <FaHorseHead className="text-white text-3xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-2 text-sm">
                  Miniature Horse
                </p>
              </div>
              {/* Second Artifact - Stone Tablet */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-stone-400 to-stone-800 border border-white rounded-2xl p-4 w-20 h-20 flex items-center justify-center shadow-lg">
                    <GiStoneTablet className="text-white text-3xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-2 text-sm">
                  Parchment
                </p>
              </div>
              {/* Third Artifact - Snake */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-green-600 to-green-900 border border-white rounded-2xl p-4 w-20 h-20 flex items-center justify-center shadow-lg">
                    <GiSandSnake className="text-white text-3xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-2 text-sm">Snake</p>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">
              3 artifacts collected
            </p>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/hippodrome/4/location")}
            className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-300"
          >
            Next Question →
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-400 font-light">
          <p className="italic">
            Continue your journey in pursuit of ancient secrets...
          </p>
        </footer>
      </div>
    </div>
  );
}
