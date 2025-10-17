"use client";

import { useRouter } from "next/navigation";
import {
  FaTrophy,
  FaStar,
  FaMedal,
  FaFlagCheckered,
  FaCoffee,
} from "react-icons/fa";
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
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20 text-center">
          <div className="flex justify-center mb-4">
            <FaCoffee className="text-4xl text-yellow-500" />
          </div>
          <h3 className="text-xl font-serif font-bold text-white mb-4">
            Oyunu Beğendiniz mi?
          </h3>
          <p className="text-gray-300 mb-6">
            Bu oyunu geliştirmemde bana destek olmak isterseniz, bir kahve
            ısmarlayarak katkıda bulunabilirsiniz!
          </p>
          <a
            href="https://buymeacoffee.com/nikapolis.today"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <FaCoffee className="text-lg" />
            Bana Kahve Ismarla
          </a>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-400 font-light">
          <p className="italic">Tarihin izinde, bilginin ışığında...</p>
        </footer>
      </div>
    </div>
  );
}
