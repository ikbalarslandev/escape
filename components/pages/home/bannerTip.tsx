import { Button } from "@/components/ui/button";
import { Coffee, Heart } from "lucide-react";

const BannerTipSection = () => {
  return (
    <section className="w-full bg-primary-800/80 py-12 lg:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Free to Play Tip if You Enjoy
            </h2>

            <p className="text-primary-200 text-lg mb-6 leading-relaxed">
              playing the games are Free , yes you heard right its free. at the
              end of the each game you will see links to review us and links to
              tip us. your support is really important for us so if you enjoyed
              the experience please consider tipping
            </p>
          </div>

          {/* Thank you note */}
          <div className="mt-6">
            <p className="text-primary-300 text-sm">
              Thank you for being part of our adventure community! 🎉
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTipSection;
