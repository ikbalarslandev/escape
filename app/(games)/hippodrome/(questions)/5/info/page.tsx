"use client";

import { GiLaurelsTrophy } from "react-icons/gi";
import { FaStar, FaCoffee } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

export default function InfoPage() {
  return (
    <div className="min-h-screen text-gray-100 p-8 bg-gradient-to-br from-gray-900/30 to-gray-800/30">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <HeaderSection />

        {/* Main Content Grid */}
        <div className="grid gap-8 mb-8">
          {/* Achievement Section */}
          <AchievementSection />

          {/* Historical Info Section */}
          <HistoricalInfoSection />

          {/* Support Section */}
          <SupportSection />
        </div>

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
}

// Header Component
const HeaderSection = () => (
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
    <h1 className="text-3xl font-serif font-bold mb-6 text-white tracking-wider">
      CONGRATULATIONS!
    </h1>
    <p className="text-xl md:text-2xl text-gray-300 font-light mb-4">
      You&apos;ve Completed the Great Journey
    </p>
    <div className="w-32 h-1 bg-gradient-to-r from-white to-gray-300 mx-auto rounded-full"></div>
  </header>
);

// Achievement Component
const AchievementSection = () => (
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
    <div className="space-y-6 text-center">
      <div className="bg-white/10 rounded-xl p-6 border border-white/20">
        <h3 className="text-2xl font-serif font-bold text-white mb-4">
          🎉 Amazing Achievement!
        </h3>
        <p className="text-lg text-gray-200 leading-relaxed">
          In this great journey you embarked on to solve Istanbul&apos;s
          historical secrets, you overcame all obstacles, collected all seals,
          and finally managed to solve the ultimate code!
        </p>
      </div>
    </div>
  </div>
);

// Historical Info Component
const HistoricalInfoSection = () => (
  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
    <CardContent className="p-8">
      <div className="space-y-6 text-gray-200 font-light leading-relaxed">
        <h3 className="text-xl font-serif font-bold text-white text-center mb-4">
          📜 Historical Significance
        </h3>
        <p>
          Congratulations! These lands you stand upon witnessed the greatest
          rebellion of the Byzantine Empire. The Hippodrome was not just a
          racing arena, but also the heart of politics. The &quot;Blues&quot;
          represented the loyals, while the &quot;Greens&quot; represented the
          common people. In 532 AD, these teams united against the emperor with
          screams of &quot;Nika!&quot; (Victory!). The bloody Nika Rebellion
          that ensued destroyed much of the city, including Hagia Sophia.
        </p>
      </div>
    </CardContent>
  </Card>
);

// Support Component
const SupportSection = () => (
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
    <div className="flex justify-center mb-4">
      <FaCoffee className="text-4xl text-yellow-500" />
    </div>
    <h3 className="text-xl font-serif font-bold text-white mb-4">
      Did You Like the Game?
    </h3>
    <p className="text-gray-300 mb-6">
      If you&apos;d like to support me in developing this game, you can
      contribute by buying me a coffee!
    </p>
    <a
      href="https://buymeacoffee.com/nikapolis.today"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
    >
      <FaCoffee className="text-lg" />
      Buy Me a Coffee
    </a>
  </div>
);

// Footer Component
const FooterSection = () => (
  <footer className="text-center mt-12 text-gray-400 font-light">
    <p className="italic">
      In the footsteps of history, in the light of knowledge...
    </p>
  </footer>
);
