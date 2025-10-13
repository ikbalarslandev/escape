"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { GiShakingHands, GiStrong, GiMeditation } from "react-icons/gi";

export default function SealFinalPage() {
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
            Tüm objeleri topladınız ve mühürleri oluşturdunuz
          </p>
        </header>

        {/* Success Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-white mb-2">
                Tüm Mühürler Tamamlandı!
              </h2>
              <p className="text-gray-300 text-lg">
                Tüm objeler başarıyla toplandı
              </p>
            </div>

            {/* Completion Message */}
            <div className="space-y-6 text-gray-200 font-light leading-relaxed text-center">
              <p className="text-xl">
                🎉 <strong>Büyük başarı!</strong> Tüm objeleri başarıyla
                topladınız ve üç mührü de oluşturdunuz.
              </p>

              <p>
                Birlik Mührü, Kudret Mührü ve Tevazu Mührü artık sizin
                kontrolünüzde. Bu mühürler İstanbul'un en derin sırlarına
                erişmenizi sağlayacak anahtarlardır.
              </p>

              <div className="p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                <p className="text-yellow-200 font-semibold">
                  ⚡ Şimdi son adım: Mühürleri aktifleştirmek için son bir soru
                  çözmeniz gerekiyor. Bu soru, tüm mühürlerin gücünü birleştirip
                  nihai sırrı ortaya çıkaracak.
                </p>
              </div>

              <p>
                Hazır olduğunuzda, aşağıdaki butona tıklayarak son soruya geçin
                ve bu büyük yolculuğu tamamlayın.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* All Seals Collection Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif font-bold text-white mb-6 text-center">
              🏆 Tamamlanan Tüm Mühürler
            </h3>
            <div className="flex justify-center gap-6 flex-wrap">
              {/* Birlik Mühürü */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-white rounded-full mx-auto flex items-center justify-center shadow-2xl mb-4">
                    <GiShakingHands className="text-white text-4xl" />
                  </div>
                </div>
                <p className="text-center text-white font-bold mt-2">
                  Birlik Mührü
                </p>
                <div className="flex justify-center mt-2">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Tamamlandı
                  </span>
                </div>
              </div>

              {/* Kudret Mühürü */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="w-28 h-28 bg-gradient-to-br from-red-500 to-yellow-600 border-4 border-white rounded-full mx-auto flex items-center justify-center shadow-2xl mb-4">
                    <GiStrong className="text-white text-4xl" />
                  </div>
                </div>
                <p className="text-center text-white font-bold mt-2">
                  Kudret Mührü
                </p>
                <div className="flex justify-center mt-2">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Tamamlandı
                  </span>
                </div>
              </div>

              {/* Tevazu Mühürü */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="w-28 h-28 bg-gradient-to-br from-green-500 to-blue-600 border-4 border-white rounded-full mx-auto flex items-center justify-center shadow-2xl mb-4">
                    <GiMeditation className="text-white text-4xl" />
                  </div>
                </div>
                <p className="text-center text-white font-bold mt-2">
                  Tevazu Mührü
                </p>
                <div className="flex justify-center mt-2">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Tamamlandı
                  </span>
                </div>
              </div>
            </div>
            <p className="text-center text-green-400 font-bold text-lg mt-6">
              ✅ 3/3 mühür tamamlandı - Tüm objeler toplandı!
            </p>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/final-question")}
            className="bg-yellow-500 hover:bg-yellow-600 border-yellow-600 text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-300"
          >
            Son Soruya Geç ⚡
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-400 font-light">
          <p className="italic">
            Mühürlerin gücü sizinle olsun. Son soruya hazır olun...
          </p>
        </footer>
      </div>
    </div>
  );
}
