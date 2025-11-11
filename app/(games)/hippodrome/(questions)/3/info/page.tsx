"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { FaCheckCircle, FaArrowRight, FaMusic } from "react-icons/fa";
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
          <div className="flex items-center justify-center text-primary-300 text-sm">
            <FaMusic className="mr-2" />
            <span>Ancient Greek music playing...</span>
          </div>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <p className="text-base md:text-lg">
                Great job! You found the antidote tree and stopped the ancient
                poison. This bronze column is a symbol of victory. 31 Greek
                cities worked together to win against the Persians.
              </p>

              <p className="text-base md:text-lg">
                They made this monument from melted Persian weapons. They wanted
                to show how strong the Greek cities were when they worked
                together. Many years later, Emperor Constantine brought it to
                Istanbul. He put it in the Hippodrome to show he respected Greek
                culture and to make people like him.
              </p>

              {/* Additional Historical Context */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    Did you know?
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    The Serpent Column originally had three snake heads at the
                    top holding a golden bowl. Over time, the heads broke off.
                    One head was found and is now in the Istanbul Archaeology
                    Museum.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/hippodrome/4/location")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Next Question
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Continue your journey to find more ancient secrets...
          </p>
        </footer>
      </div>
    </div>
  );
}
