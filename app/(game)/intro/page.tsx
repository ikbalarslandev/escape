import Image from "next/image";
import data from "@/questions/info.json";

export default function IntroPage() {
  const { intro } = data;

  // Split the info text into paragraphs for better readability
  const infoParagraphs = intro.info
    .split(". ")
    .filter((paragraph) => paragraph.length > 0);

  return (
    <div className="min-h-screen text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white tracking-wider">
            Hipodrom
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-6 italic">
            İstanbul&apos;un kadim meydanında macera başlıyor...
          </p>
        </header>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          {/* Image Section */}
          <div className="mb-8">
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={intro.img_url}
                alt="Hipodrom tarihi çizimi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
            <p className="text-center text-gray-400 text-sm mt-2 italic">
              Hipodrom&apos;un tarihi temsili
            </p>
          </div>

          {/* Information Section */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="w-1 h-12 bg-gradient-to-b from-white to-gray-300 mr-4"></div>
              <h2 className="text-2xl font-serif font-bold text-white">
                HİPODROM&apos;U TANIYALIM
              </h2>
            </div>

            <div className="space-y-4 text-gray-200 font-light leading-relaxed">
              {infoParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}.</p>
              ))}
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button className="bg-white/20 hover:bg-white/30 text-white font-serif font-bold text-xl py-4 px-12 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50 hover:scale-105">
            İlk Soruyu Gör
          </button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 text-gray-400 font-light">
          <p className="italic">
            Tarihin tozlu sayfalarında yeni bir macera sizi bekliyor...
          </p>
        </footer>
      </div>
    </div>
  );
}
