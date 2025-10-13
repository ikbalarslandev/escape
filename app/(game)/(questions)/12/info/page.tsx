"use client";

import { useRouter } from "next/navigation";
import { FaTrophy, FaStar, FaMedal, FaFlagCheckered } from "react-icons/fa";
import { GiLaurelsTrophy } from "react-icons/gi";

export default function FinalSuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen text-gray-100 p-8 bg-gradient-to-br from-gray-900/30 to-gray-800/30">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <GiLaurelsTrophy className="text-8xl text-yellow-400" />
              <FaStar className="text-4xl text-yellow-300 absolute -top-2 -right-2 animate-pulse" />
              <FaStar
                className="text-3xl text-yellow-200 absolute -bottom-2 -left-2 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>
          <h1 className="text-3xl  font-serif font-bold mb-6 text-white tracking-wider">
            TEBRİKLER!
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-4">
            Büyük Yolculuğu Tamamladınız
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-white to-gray-300 mx-auto rounded-full"></div>
        </header>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          {/* Achievement Summary */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-6">
              <FaFlagCheckered className="text-4xl text-green-400 mr-4" />
              <h2 className="text-3xl font-serif font-bold text-white">
                Başarı Özeti
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <FaMedal className="text-3xl text-green-400 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-white mb-2">3 Mühür</h3>
                <p className="text-gray-300">Tamamlandı</p>
              </div>

              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <FaStar className="text-3xl text-blue-400 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-white mb-2">12 Soru</h3>
                <p className="text-gray-300">Çözüldü</p>
              </div>

              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <FaTrophy className="text-3xl text-yellow-400 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-white mb-2">%100</h3>
                <p className="text-gray-300">Tamamlanma</p>
              </div>
            </div>
          </div>

          {/* Completion Message */}
          <div className="space-y-6 text-center">
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                🎉 Muhteşem Başarı!
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                İstanbul&apos;un tarihi sırlarını çözmek için çıktığınız bu
                büyük yolculukta tüm engelleri aştınız, tüm mühürleri topladınız
                ve en sonunda nihai şifreyi çözmeyi başardınız!
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4">🌟 Son Söz</h4>
              <p className="text-lg text-gray-200 leading-relaxed italic">
                &quot;Tarih, sadece geçmişi anlamak değil, geleceği inşa
                etmektir. Bu yolculukta gösterdiğiniz azim ve zeka, sadece
                İstanbul&apos;un değil, tüm insanlığın ortak mirasını anlamanızı
                sağladı.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-400 font-light">
          <p className="italic">Tarihin izinde, bilginin ışığında...</p>
        </footer>
      </div>
    </div>
  );
}
