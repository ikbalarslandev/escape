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
    // Audio element oluştur
    audioRef.current = new Audio("/opt/3/greek_war.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // %30 ses seviyesi

    // Sayfa yüklendiğinde müziği başlat
    const playAudio = async () => {
      try {
        await audioRef.current?.play();
      } catch (error) {
        console.log("Audio play failed:", error);
      }
    };

    playAudio();

    // Sayfadan çıkıldığında müziği durdur
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
            Tebrikler!
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-6">
            Üçüncü objenizi kazandınız
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
                Yılan
              </h2>
              <p className="text-gray-300">
                Kadim zehri çözme yolunda üçüncü parçan
              </p>
            </div>

            {/* Historical Info */}
            <div className="space-y-6 text-gray-200 font-light leading-relaxed">
              <p>
                Tebrikler! Panzehir ağacını bularak kadim zehrin etkisini yok
                ettin. Bu tunç gövde, 31 Yunan şehir devletinin Perslere karşı
                birleşerek kazandığı zaferin simgesidir.
              </p>

              <p>
                Bu anıt, Pers ordusunun bronz silahları eritilerek döküldü.
                Amacı, Yunan birliğinin gücünü sonsuza kadar hatırlatmaktı.
                Yüzyıllar sonra İmparator Konstantin tarafından, Yunan kültürüne
                olan saygısını göstermek ve halkın sevgisini kazanmak amacıyla
                İstanbul&apos;a getirildi ve Hipodrom&apos;a dikildi.
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
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-900 border border-white rounded-2xl p-4 w-20 h-20 flex items-center justify-center shadow-lg">
                    <FaHorseHead className="text-white text-3xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-2 text-sm">
                  Minyatür At
                </p>
              </div>
              {/* Second Object - Stone Tablet */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-stone-400 to-stone-800 border border-white rounded-2xl p-4 w-20 h-20 flex items-center justify-center shadow-lg">
                    <GiStoneTablet className="text-white text-3xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-2 text-sm">
                  Parşömen
                </p>
              </div>
              {/* Third Object - Snake */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-green-600 to-green-900 border border-white rounded-2xl p-4 w-20 h-20 flex items-center justify-center shadow-lg">
                    <GiSandSnake className="text-white text-3xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-2 text-sm">Yılan</p>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">
              3 obje toplandı
            </p>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/4/location")}
            className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-300"
          >
            Sonraki Soru →
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-400 font-light">
          <p className="italic">
            Kadim sırların peşinde ilerlemeye devam edin...
          </p>
        </footer>
      </div>
    </div>
  );
}
