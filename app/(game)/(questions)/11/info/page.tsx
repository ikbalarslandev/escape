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
            Tebrikler!
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-6">
            İkinci objenizi kazandınız
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
                Zincir
              </h2>
              <p className="text-gray-300">
                İkinci mühür için önemli bir parça elde ettiniz
              </p>
            </div>

            {/* Historical Info */}
            <div className="space-y-6 text-gray-200 font-light leading-relaxed">
              <p>
                Cami avlusuna atıyla yalnızca padişah girebilirdi. Fakat bu
                zincir, tam da bu yüzden kapı girişine yerleştirilmişti. Öyle
                ki, padişah dahi olsa, Allah'ın evine saygı göstermek için
                eğilmek zorundaydı.
              </p>

              <p>
                Bu zarif ama anlamlı engel, dünyevi gücün ilahi alandaki
                sınırlarını simgeliyordu. En güçlü padişah bile ibadethaneye
                girerken tevazu göstermeliydi. Bu zincir, günümüzde hala cami
                mimarisindeki incelikli detaylardan biri olarak varlığını
                sürdürüyor.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Seals Collection Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif font-bold text-white mb-4 text-center">
              🏆 Mühürler
            </h3>
            <div className="flex justify-center gap-6 flex-wrap">
              {/* Completed Seal - Birlik Mühürü */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-white rounded-full mx-auto flex items-center justify-center shadow-2xl mb-4">
                    <GiShakingHands className="text-white text-5xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-4">Birlik Mühürü</p>
                <div className="flex justify-center mt-2">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Tamamlandı
                  </span>
                </div>
              </div>

              {/* Completed Seal - Kudret Mühürü */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-yellow-600 border-4 border-white rounded-full mx-auto flex items-center justify-center shadow-2xl mb-4">
                    <GiStrong className="text-white text-5xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-4">Kudret Mühürü</p>
                <div className="flex justify-center mt-2">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Tamamlandı
                  </span>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">
              2/3 mühür tamamlandı
            </p>
          </CardContent>
        </Card>

        {/* Object Collection Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif font-bold text-white mb-4 text-center">
              📦 Mevcut Objeler
            </h3>
            <div className="flex justify-center gap-6 flex-wrap">
              {/* New Minare Object */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-700 border border-white rounded-lg p-4 w-24 h-24 flex items-center justify-center shadow-lg">
                    <GiWatchtower className="text-white text-3xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-4">Minare</p>
              </div>
              {/* Second Object - Chain */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-gray-600 to-gray-900 border border-white rounded-2xl p-4 w-24 h-24 flex items-center justify-center shadow-lg">
                    <GiCrossedChains className="text-white text-3xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-4">Zincir</p>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">
              2/2 obje toplandı
            </p>
          </CardContent>
        </Card>

        {/* Progress Summary */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif font-bold text-white mb-4 text-center">
              📊 İlerleme Durumu
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Mühürler</h4>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div
                      className="bg-purple-600 h-4 rounded-full transition-all duration-500"
                      style={{ width: "67%" }}
                    ></div>
                  </div>
                  <span className="text-white font-bold">2/3</span>
                </div>
                <p className="text-gray-300 text-sm mt-2">%67 tamamlandı</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Objeler</h4>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div
                      className="bg-orange-600 h-4 rounded-full transition-all duration-500"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <span className="text-white font-bold">2/2</span>
                </div>
                <p className="text-gray-300 text-sm mt-2">objeler tamamlandi</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/11/seal")}
            className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-300"
          >
            Son Mühre Git →
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-400 font-light">
          <p className="italic">
            Tüm objeleri topladınız! İkinci mührü oluşturmaya hazırlanın...
          </p>
        </footer>
      </div>
    </div>
  );
}
