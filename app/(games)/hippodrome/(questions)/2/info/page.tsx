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
              Congratulations!
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            You freed Emperor Theodosius&apos;s spirit!
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <p className="text-base md:text-lg">
                Great job! You freed Theodosius&apos;s spirit and solved the
                ancient mystery. You are now in the center of the Hippodrome.
                The big stone beside you is not just a rock - it saw many
                amazing things and shows great power.
              </p>

              <p className="text-base md:text-lg">
                Emperor Theodosius took this red stone from Egypt. He brought it
                to Istanbul and put it in the middle of the Hippodrome.
              </p>

              <p className="text-base md:text-lg">
                This was very hard to do. Moving such a big and heavy stone was
                almost impossible at that time. The emperor did this to show
                everyone that he was the ruler of the whole world. The stone
                says: &quot;Look, my power is very big.&quot;
              </p>

              {/* Additional Historical Context */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    Did you know?
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    This stone is about 3,500 years old. It is the oldest thing
                    in the Hippodrome. Because the stone (red granit) is very
                    strong, the pictures and writing on it are still clear. It
                    saw the Roman Empire, the Byzantine Empire, and the Ottoman
                    Empire. And it still stands here today, looking amazing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/hippodrome/3/location")}
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
