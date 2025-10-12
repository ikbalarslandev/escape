export default function Home() {
  return (
    <div className="min-h-screen text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white tracking-wider">
            İstanbul'un Kayıp Mühürleri
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-6 italic">
            Şehrin kaderi sizin ellerinizde...
          </p>
        </header>

        {/* Mission Briefing */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <div className="flex items-center mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-white to-gray-300 mr-4"></div>
            <h2 className="text-2xl font-serif font-bold text-white">GÖREV</h2>
          </div>
          <p className="text-lg leading-relaxed mb-6 text-gray-200 font-light">
            Kaşifler, dikkat! İstanbul'un kalbinde saklı üç kadim mühür var:{" "}
            <span className="font-semibold text-white">Birlik</span>,{" "}
            <span className="font-semibold text-gray-100">Kudret</span> ve{" "}
            <span className="font-semibold text-gray-300">Tevazu</span>.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-gray-200 font-light">
            Ama mühürler öylece beklemiyor; onları bulmak için önce şehrin
            sırlarını çözecek, gizli objeleri keşfedecek ve ardından bu objeleri
            mühürleri aktif hâle getireceksiniz.
          </p>
          <div className="bg-white/5 border-l-4 border-white/40 rounded-r-lg p-4 mb-4">
            <div className="flex items-center mb-2">
              <span className="text-white/80 mr-2">⏰</span>
              <p className="text-lg font-semibold text-white">
                ZAMAN DARALIYOR!
              </p>
            </div>
            <p className="text-gray-200 font-light">
              Eğer iki saat içinde tüm mühürleri oluşturup sırlarını
              çözemezseniz, İstanbul'un tarihi tamamen unutulacak ve şehir
              lanetlenecek!
            </p>
          </div>
        </div>

        {/* Seals Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Birlik Mührü */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white shadow-inner">
                ☯
              </div>
              <h3 className="text-xl font-serif font-bold text-white">
                BİRLİK
              </h3>
            </div>
            <p className="text-gray-300 font-light leading-relaxed text-center">
              Halkı bir araya getiren güçleri simgeliyor. Farklı kültürleri,
              inançları ve insanları birleştiren kadim enerji.
            </p>
          </div>

          {/* Kudret Mührü */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white shadow-inner">
                ⚜
              </div>
              <h3 className="text-xl font-serif font-bold text-white">
                KUDRET
              </h3>
            </div>
            <p className="text-gray-300 font-light leading-relaxed text-center">
              İmparatorluğun kudretini ve meydan okumalarını hatırlatıyor.
              Tarihin gördüğü en büyük medeniyetlerden birinin gücü.
            </p>
          </div>

          {/* Tevazu Mührü */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white shadow-inner">
                ☪
              </div>
              <h3 className="text-xl font-serif font-bold text-white">
                TEVAZU
              </h3>
            </div>
            <p className="text-gray-300 font-light leading-relaxed text-center">
              Allah inancını, ibadeti ve tevazuyu gösteriyor. İnancın ve
              alçakgönüllülüğün kadim bilgeliği.
            </p>
          </div>
        </div>

        {/* Final Warning */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-center border border-white/20">
          <h2 className="text-2xl font-serif font-bold mb-4 text-white">
            SON UYARI
          </h2>
          <p className="text-lg mb-4 text-gray-200 font-light italic">
            Mühürleri oluşturmak, sadece bulmacaları çözmek değil; İstanbul'un
            ruhunu ve tarihini yeniden inşa etmek demek.
          </p>
          <p className="text-lg mb-6 text-gray-200 font-light italic">
            Her obje, her ipucu, şehrin kadim bilgeliğine giden bir anahtar.
          </p>

          {/* Start Button */}
          <button className="bg-white/20 hover:bg-white/30 text-white font-serif font-bold text-xl py-4 px-12 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50">
            MACERAYA BAŞLA!
          </button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 text-gray-400 font-light">
          <p className="italic">
            İstanbul'un kaderi artık sizin ellerinizde...
          </p>
          <p className="text-sm mt-2">Hadi başlayalım!</p>
        </footer>
      </div>
    </div>
  );
}
