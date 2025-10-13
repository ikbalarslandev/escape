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
            Tebrikler!
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-6">
            Dördüncü objenizi kazandınız
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
                Tuğla
              </h2>
              <p className="text-gray-300">
                İlk mühür için son parçayı tamamladınız
              </p>
            </div>

            {/* Historical Info */}
            <div className="space-y-6 text-gray-200 font-light leading-relaxed">
              <p>
                Tebrikler! Bu kadim anıtın sırrını çözdünüz. Bir zamanlar
                üzerini kaplayan bronz plakaları Haçlı Seferi&apos;nde sökülüp
                para basılan Örme Dikilitaş, o delikleriyle size tarihi
                fısıldıyor.
              </p>

              <p>
                Osmanlı döneminde askerlerin bu deliklere basarak tırmandığı ve
                padişahtan bahşiş aldığı bu anıtı, Assassin&apos;s Creed&apos;de
                İstanbul&apos;u keşfederken gerçek bir asker gibi tırmanmayı
                unutmayın.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Object Collection Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif font-bold text-white mb-4 text-center">
              🏆 Topladığınız Objeler
            </h3>
            <div className="flex justify-center gap-6">
              {/* First Object - Miniature Horse */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-900 border border-white rounded-2xl p-4 w-24 h-24 flex items-center justify-center shadow-lg">
                    <FaHorseHead className="text-white text-4xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-4">Minyatür At</p>
              </div>
              {/* Second Object - Stone Tablet */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-stone-400 to-stone-800 border border-white rounded-2xl p-4 w-24 h-24 flex items-center justify-center shadow-lg">
                    <GiStoneTablet className="text-white text-3xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-4">Parşömen</p>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-6">
              {/* Third Object - Snake */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-green-600 to-green-900 border border-white rounded-2xl p-4 w-24 h-24 flex items-center justify-center shadow-lg">
                    <GiSandSnake className="text-white text-3xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-4">Yılan</p>
              </div>
              {/* Fourth Object - Brick */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-orange-600 to-orange-900 border border-white rounded-2xl p-4 w-24 h-24 flex items-center justify-center shadow-lg">
                    <GiClayBrick className="text-white text-3xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-4">Tuğla</p>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">
              4/3 obje toplandı
            </p>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/4/seal")}
            className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-300"
          >
            İlk Mühre Git →
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-400 font-light">
          <p className="italic">
            Tüm objeleri topladınız! İlk mührü oluşturmaya hazırlanın...
          </p>
        </footer>
      </div>
    </div>
  );
}
