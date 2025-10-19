"use client";

import { GiStoneTablet } from "react-icons/gi";
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
            You've won your second artifact
          </p>
        </header>

        {/* Success Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-stone-600 to-stone-900 border border-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <GiStoneTablet className="text-white text-3xl" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-white mb-2">
                Parchment
              </h2>
              <p className="text-gray-300">
                The second piece in your journey to unravel ancient secrets
              </p>
            </div>

            {/* Historical Info */}
            <div className="space-y-6 text-gray-200 font-light leading-relaxed">
              <p>
                Congratulations! You've freed Theodosius's spirit and solved the
                ancient mystery. You're currently at the very heart of the
                Hippodrome. This massive obelisk beside you is not just a stone
                block, but a silent witness to an impossible achievement and
                absolute power.
              </p>

              <p>
                Emperor Theodosius I had this red granite slab removed from a
                pharaoh's tomb in Egypt, brought to Istanbul, and erected on the
                spina of the Hippodrome, right where you're standing now.
              </p>

              <p>
                This was an engineering marvel. At that time, transporting such
                an enormous and heavy monolithic stone first via the Nile River,
                then across the Mediterranean, and finally erecting it upright,
                was considered nearly impossible. This tremendous cost and
                effort was meant to show everyone that the emperor was not just
                the ruler of Rome, but the master of the entire world. "Behold,"
                this stone declared, "my power transcends time and space."
              </p>

              <p>
                And so it did. This approximately 3500-year-old monument holds
                the distinction of being the oldest structure in the Hippodrome.
                Thanks to the unique durability of red granite, the hieroglyphs
                on it are still as clear as the first day. It has seen Rome,
                Byzantium, the Ottomans, and still stands here today in all its
                magnificence.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Object Collection Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif font-bold text-white mb-4 text-center">
              🏆 Collected Artifacts
            </h3>
            <div className="flex justify-center gap-6">
              {/* First Object - Miniature Horse */}
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
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-stone-400 to-stone-800 border border-white rounded-2xl p-4 w-24 h-24 flex items-center justify-center shadow-lg">
                    <GiStoneTablet className="text-white text-3xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-4">Parchment</p>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">
              2 artifacts collected
            </p>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/3/location")}
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
