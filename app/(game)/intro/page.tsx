"use client";
import Link from "next/link";
import YouTube from "react-youtube";

export default function IntroPage() {
  // Hardcoded data
  const introInfo = `Oyun sahnemizin büyük kısmı, eski Doğu Roma İmparatorluğu'nun İstanbul'da inşa ettiği Hipodrom üzerinde geçecek. Önce Hipodrom'u tanıyalım: Antik çağda at yarışı düzenlenen pistlere verilen isimdir ve etrafında izleyiciler için devasa tribünler bulunur. Hipodromun ana amacı sadece yarış düzenlemek değildi; Doğu Roma İmparatoru Konstantin, İstanbul'u "Yeni Roma" olarak inşa ederken, büyük bir Hipodrom yaparak hem halkın eğlenmesini sağladı hem de hükümdarın halkla bir araya gelebileceği bir alan oluşturdu. Hipodromun tam ortasında, spina denilen anıtsal bir çizgi vardı ve üzerinde dört adet anıt yer alıyordu; ne yazık ki günümüze sadece üçü ulaşabildi. Hipodromlar aynı zamanda siyasetin de merkeziydi; halk, hükümdara dileklerini bu oyunlar sırasında iletir, araba yarışları ise siyasi mesajları temsil ederdi. Mavi takım, aristokratların desteğini ve imparatorun gücünü simgelerken, yesil takım, fakir halkın hoşnutsuzluğunu ve imparatora karşı tepkisini yansıtırdı. Bu iki takım arasındaki rekabet sadece yarışlarla sınırlı kalmaz, halkın siyasi gücünü ve imparatorla ilişkilerini de gözler önüne sererdi.`;

  // Split the info text into paragraphs for better readability
  const infoParagraphs = introInfo
    .split(". ")
    .filter((paragraph) => paragraph.length > 0);

  // YouTube video options
  const videoOptions = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
      rel: 0,
      modestbranding: 1,
    },
  };

  // Extract video ID from URL
  const videoId = "AjrnvDn2tcA";

  return (
    <div className="min-h-screen text-gray-100 p-4">
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
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 mb-8 border border-white/20">
          {/* Video Section */}
          <div className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <YouTube
                videoId={videoId}
                opts={videoOptions}
                className="w-full"
              />
            </div>
            <p className="text-center text-gray-400 text-sm mt-2 italic">
              Hipodrom&apos;un tarihini keşfedin
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

        {/* Action Button */}
        <div className="text-center">
          <Link href="/1/location">
            <div className="inline-block bg-white/20 hover:bg-white/30 text-white font-serif font-bold text-xl py-4 px-12 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50 cursor-pointer hover:scale-105 transform">
              MACERAYA BAŞLA!
            </div>
          </Link>
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
