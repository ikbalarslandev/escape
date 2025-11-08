const BannerTipSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-primary-800 to-primary-900 py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header with Icons */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Free to Play{" "}
              <span className="text-secondary-400">Tip if You Enjoy</span>
            </h2>

            {/* Main Content Box */}
            <div className="bg-primary-700/50 rounded-2xl p-8 border border-primary-600/50 backdrop-blur-sm">
              <p className="text-primary-200 text-lg lg:text-xl leading-relaxed mb-6">
                <span className="text-secondary-400 font-semibold">
                  yes, you heard right{" "}
                </span>{" "}
                it&apos;s completely free! At the end of each game, you&apos;ll
                see links to review us and options to tip us. Your support is
                really important for us, so if you enjoyed the experience,
                please consider tipping.
              </p>
            </div>
          </div>

          {/* Thank you note */}
          <div className="text-center">
            <p className="text-primary-300 text-lg font-light">
              Thank you for being part of our adventure community! 🎉
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTipSection;
