"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaEgg, FaHistory, FaLightbulb } from "react-icons/fa";
import { GiOstrich } from "react-icons/gi";

export default function InfoPage() {
  const router = useRouter();

  const handleProceed = () => {
    router.push("/11/location");
  };

  return (
    <div className="min-h-screen text-gray-100 p-8 bg-gradient-to-br from-amber-900/20 to-yellow-800/20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-xl text-amber-200 font-light">
            Devekuşu Yumurtalarının Mimari Sırrı
          </p>
        </header>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-amber-200/30">
          {/* Icon Header */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <GiOstrich className="text-6xl text-amber-400 mr-4" />
              <FaEgg className="text-4xl text-amber-200 absolute -bottom-2 -right-2" />
            </div>
          </div>

          {/* Information Sections */}
          <div className="space-y-8">
            {/* Historical Belief */}
            <div className="bg-amber-900/30 rounded-xl p-6 border border-amber-200/20">
              <div className="flex items-center mb-4">
                <FaHistory className="text-2xl text-amber-400 mr-3" />
                <h3 className="text-2xl font-serif font-bold text-amber-200">
                  Tarihi İnanç
                </h3>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed">
                Osmanlı geleneğinde devekuşu yumurtasının böcekleri, örümcekleri
                ve haşereleri uzak tuttuğuna inanılırdı. Bu nedenle cami,
                medrese ve türbe gibi dini yapılarda tavana asılan devekuşu
                yumurtaları, doğal bir haşere savar olarak kullanılırdı.
              </p>
            </div>

            {/* Mimar Sinan Section */}
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <FaLightbulb className="text-2xl text-amber-300 mr-3" />
                <h3 className="text-2xl font-serif font-bold text-amber-200">
                  Mimar Sinan
                </h3>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed">
                Osmanlı İmparatorluğu'nun en ünlü ve en etkili mimarıdır.
                Yüzlerce esere imza atmış ve mimari tarzıyla sonraki nesilleri
                derinden etkilemiştir.
              </p>
            </div>

            {/* Architectural Legacy */}
            <div className="bg-amber-800/30 rounded-xl p-6 border border-amber-200/20">
              <div className="flex items-center mb-4">
                <FaLightbulb className="text-2xl text-yellow-400 mr-3" />
                <h3 className="text-2xl font-serif font-bold text-amber-200">
                  Mimari Miras
                </h3>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                Mimar Sinan'ın mimari üslubu o kadar etkili oldu ki, dünyaca
                ünlü iki harika eser temel tasarım ve estetik anlayışını
                doğrudan onun başyapıtı Süleymaniye Camisi'nden aldı:
              </p>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>
                    <strong>Sultanahmet Camii</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>
                    <strong>Tac Mahal</strong>
                  </span>
                </li>
              </ul>
              <p className="text-lg text-gray-200 leading-relaxed mt-4">
                Her iki eser de Mimar Sinan'ın yetiştirdiği öğrenciler ve onun
                ekolünden gelen mimarlar tarafından inşa edilmiştir.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation - Centered Button */}
        <div className="flex justify-center items-center">
          <Button
            onClick={handleProceed}
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 transition-all duration-300"
          >
            Sonraki Soruya Git →
          </Button>
        </div>
      </div>
    </div>
  );
}
