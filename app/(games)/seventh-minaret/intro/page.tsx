"use client";
import { useState } from "react";
import Link from "next/link";
import YouTube, { YouTubeEvent } from "react-youtube";

export default function IntroPage() {
  const [videoWatched, setVideoWatched] = useState(false);

  // Info text
  const introInfo = `Most of our game scene will take place on the Hippodrome, built by the ancient Eastern Roman Empire in Istanbul. Let's first get to know the Hippodrome: It is the name given to the racetracks where horse races were held in ancient times, and there were massive stands for spectators around it. The main purpose of the Hippodrome was not just to organize races; when Eastern Roman Emperor Constantine built Istanbul as the "New Rome," he constructed a large Hippodrome to both entertain the people and create a space where the ruler could meet with the public. Right in the middle of the Hippodrome, there was a monumental line called the spina, and it featured four monuments; unfortunately, only three of them have survived to the present day. Hippodromes were also centers of politics; the people would convey their requests to the ruler during these games, and chariot races represented political messages. The blue team symbolized the support of the aristocracy and the emperor's power, while the green team reflected the discontent of the poor people and their reaction against the emperor. The rivalry between these two teams was not limited to races alone; it also revealed the political power of the people and their relations with the emperor.`;

  const infoParagraphs = introInfo
    .split(". ")
    .filter((paragraph) => paragraph.length > 0);

  const videoOptions = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
      rel: 0,
      modestbranding: 1,
    },
  };

  const videoId = "AjrnvDn2tcA";

  // Detect when video ends
  const handleVideoStateChange = (event: YouTubeEvent) => {
    if (event.data === 0) {
      // 0 means video ended
      setVideoWatched(true);
    }
  };

  return (
    <div className="min-h-screen text-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white tracking-wider">
            Hippodrome
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-6 italic">
            The adventure begins in Istanbul’s ancient square...
          </p>
        </header>

        {/* Info Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 mb-8 border border-white/20">
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="w-1 h-12 bg-gradient-to-b from-white to-gray-300 mr-4"></div>
              <h2 className="text-2xl font-serif font-bold text-white">
                GETTING TO KNOW THE HIPPODROME
              </h2>
            </div>

            <div className="space-y-4 text-gray-200 font-light leading-relaxed">
              {infoParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}.</p>
              ))}
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-8">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <YouTube
              videoId={videoId}
              opts={videoOptions}
              onStateChange={handleVideoStateChange}
              className="w-full"
            />
          </div>
          <p className="text-center text-gray-400 text-sm mt-2 italic">
            Watch the video to unlock your adventure
          </p>
        </div>

        {/* Action Button */}
        <div className="text-center">
          {true ? (
            <Link href="/sultanahmet/1/location">
              <div className="inline-block bg-white/20 hover:bg-white/30 text-white font-serif font-bold text-xl py-4 px-12 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50 cursor-pointer hover:scale-105 transform">
                START THE ADVENTURE!
              </div>
            </Link>
          ) : (
            <div
              className="inline-block bg-gray-500/30 text-gray-400 font-serif font-bold text-xl py-4 px-12 rounded-full border border-gray-500/30 cursor-not-allowed"
              title="Watch the video to unlock"
            >
              START THE ADVENTURE!
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 text-gray-400 font-light">
          <p className="italic">
            A new adventure awaits you in the dusty pages of history...
          </p>
        </footer>
      </div>
    </div>
  );
}
