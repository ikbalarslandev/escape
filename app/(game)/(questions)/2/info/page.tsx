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
              <div className="w-20 h-20 bg-gradient-to-br from-stone-600 to-stone-900 border border-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <GiStoneTablet className="text-white text-3xl" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-white mb-2">
                Parşömen
              </h2>
              <p className="text-gray-300">
                Kadim sırları çözme yolunda ikinci parçan
              </p>
            </div>

            {/* Historical Info */}
            <div className="space-y-6 text-gray-200 font-light leading-relaxed">
              <p>
                Tebrikler! Theodosius&apos;un ruhunu özgür bıraktın ve kadim
                sırrı çözdün. Şu an Hipodrom&apos;un tam kalbindesin. Hemen
                yanındaki bu devasa dikilitaş, sadece bir taş parçası değil, bir
                imkansızlığın başarılışının ve mutlak iktidarın sessiz bir
                tanığı.
              </p>

              <p>
                İmparator I. Theodosius, Mısır&apos;daki bir firavun lahitinden
                söktürdüğü bu kırmızı granit levhayı, İstanbul&apos;a getirtti
                ve Hipodrom&apos;un spinasına, tam da şu an üzerinde durduğun
                yere diktirdi.
              </p>

              <p>
                Bu bir mühendislik harikasıydı. O dönemde böylesine devasa ve
                ağır bir tek parça taşı, önce Nil Nehri üzerinden, sonra
                Akdeniz&apos;i aşarak getirmek, sonra da olduğu gibi dikmek,
                neredeyse imkansız denilebilecek bir işti. Bu muazzam maliyet ve
                emek, imparatorun sadece Roma&apos;nın değil, tüm dünyanın
                efendisi olduğunu herkese göstermek içindi. &quot;Bakın,&quot;
                diyordu bu taş, &quot;benim gücüm, zamanı ve mekanı aşar.&quot;
              </p>

              <p>
                Ve öyle de oldu. Yaklaşık 3500 yıllık bu anıt,
                Hipodrom&apos;daki en eski yapı olma özelliğini taşıyor. Kırmızı
                granitin eşsiz dayanıklılığı sayesinde, üzerindeki hiyeroglifler
                hala ilk günkü kadar net. Roma&apos;yı, Bizans&apos;ı,
                Osmanlı&apos;yı gördü ve hala burada, tüm ihtişamıyla ayakta.
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
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-stone-400 to-stone-800 border border-white rounded-2xl p-4 w-24 h-24 flex items-center justify-center shadow-lg">
                    <GiStoneTablet className="text-white text-3xl" />
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-4">Parşömen</p>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">
              2 obje toplandı
            </p>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/3/location")}
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
