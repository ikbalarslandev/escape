"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Clock,
  Users,
  Star,
  ArrowRight,
  Play,
  Target,
  History,
} from "lucide-react";
import { FaSearch, FaMapMarkerAlt, FaLightbulb } from "react-icons/fa";
import YouTube from "react-youtube";

const HippodromeIntroPage = () => {
  const [showIntro, setShowIntro] = useState(true);

  const gameInfo = {
    title: "Hippodrome: The Lost Spirit",
    location: "Sultanahmet Square, Istanbul",
    duration: "1.5-2 hours",
    difficulty: "Medium",
    teamSize: "2-4 players",
    distance: "2.5 km",
    monuments: [
      "German Fountain",
      "Serpent Column",
      "Walled Obelisk",
      "Obelisk of Theodosius",
    ],
  };

  const startGame = () => {
    window.location.href = "/hippodrome/1/location";
  };

  const handleIntroClick = () => {
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setShowIntro(false);
    }
  };

  // YouTube video options
  const videoOpts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      {/* Animated Intro Overlay */}
      {showIntro && (
        <div
          className="fixed inset-0 bg-primary-900 z-50 flex flex-col items-center justify-start overflow-y-auto p-4 md:p-8"
          onClick={handleIntroClick}
        >
          <div className="max-w-2xl mx-auto text-center bg-primary-800 rounded-2xl p-6 md:p-8 border border-primary-600">
            <div className="mb-6 md:mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-secondary-400">
                Hippodrome: The Lost Spirit
              </h1>
              <div className="w-20 md:w-24 h-1 bg-secondary-400 mx-auto mb-4 md:mb-6"></div>
            </div>

            <div className="text-base md:text-lg lg:text-xl leading-relaxed space-y-3 md:space-y-4 mb-6 md:mb-8 text-primary-100">
              <p>
                Welcome, time traveler. Before we begin our journey, let me
                share a secret about places...
              </p>
              <p className="text-secondary-300 italic text-sm md:text-base">
                Every location has a soul - what the ancients called{" "}
                <strong>'Genius Loci'</strong>. It's the unique spirit, the
                memory, the very essence that makes a place what it truly is.
              </p>
              <p>
                The Hippodrome was once the beating heart of Constantinople,
                where emperors connected with the people, where chariots
                thundered, and where the fate of empires was decided.
              </p>
              <p>
                But over centuries, its genius loci has faded, its stories
                forgotten.
              </p>
              <p className="text-secondary-300 font-semibold text-sm md:text-base">
                Your mission: Help us reawaken the spirit of this ancient arena.
                Solve the puzzles hidden in its surviving monuments to restore
                the genius loci and hear the Hippodrome's lost stories.
              </p>
            </div>

            <Button
              onClick={() => setShowIntro(false)}
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold w-full md:w-auto"
            >
              Begin the Quest
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>

            {/* Mobile hint */}
            <p className="text-primary-300 text-xs mt-4 md:hidden">
              Tap anywhere to continue
            </p>
          </div>
        </div>
      )}

      {/* Main Content - Now scrollable */}
      <div className="container mx-auto px-4 sm:px-6 py-6 max-w-6xl min-h-screen">
        {/* Header */}
        <div className="text-center mb-8 pt-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-3 md:mb-4">
            Hippodrome: The Lost Spirit
          </h1>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto px-2">
            Reawaken the ancient soul of Constantinople's greatest arena
          </p>
        </div>

        {/* YouTube Video Section */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl mb-6 md:mb-8">
          <CardContent className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-light text-white mb-4 flex items-center">
              <History className="h-5 w-5 md:h-6 md:w-6 text-secondary-400 mr-2 md:mr-3" />
              Discover the Hippodrome
            </h2>
            <p className="text-primary-200 mb-4 text-sm md:text-base">
              Watch this short documentary to understand the historical
              significance of the Hippodrome before you begin your adventure.
            </p>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-primary-900">
              <div className="relative h-48 md:h-64 lg:h-80 w-full">
                <YouTube
                  videoId="AjrnvDn2tcA"
                  opts={videoOpts}
                  className="w-full h-full"
                  iframeClassName="w-full h-full rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-8">
          {/* Left Column - Game Preview */}
          <div className="space-y-6 md:space-y-8">
            {/* Game Features */}
            <Card className="border border-primary-600 bg-primary-800 rounded-2xl">
              <CardContent className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-light text-white mb-4 md:mb-6 flex items-center">
                  <Target className="h-5 w-5 md:h-6 md:w-6 text-secondary-400 mr-2 md:mr-3" />
                  Your Quest
                </h2>
                <ul className="space-y-3 md:space-y-4 text-primary-200">
                  <li className="flex items-start">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-secondary-500 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs md:text-sm font-bold">
                        1
                      </span>
                    </div>
                    <span className="text-sm md:text-base">
                      Visit 4 ancient monuments around the Hippodrome
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-secondary-500 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs md:text-sm font-bold">
                        2
                      </span>
                    </div>
                    <span className="text-sm md:text-base">
                      Solve historical puzzles tied to each location
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-secondary-500 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs md:text-sm font-bold">
                        3
                      </span>
                    </div>
                    <span className="text-sm md:text-base">
                      Uncover stories of chariot races and imperial politics
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-secondary-500 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs md:text-sm font-bold">
                        4
                      </span>
                    </div>
                    <span className="text-sm md:text-base">
                      Restore the Genius Loci - the spirit of the place
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Game Details */}
          <div className="space-y-6 md:space-y-8">
            {/* Game Information */}
            <Card className="border border-primary-600 bg-primary-800 rounded-2xl">
              <CardContent className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-light text-white mb-4 md:mb-6">
                  Game Details
                </h2>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-primary-700">
                    <div className="flex items-center text-primary-300">
                      <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 text-secondary-400" />
                      <span className="text-sm md:text-base">Location</span>
                    </div>
                    <span className="text-white text-sm md:text-base text-right">
                      {gameInfo.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-primary-700">
                    <div className="flex items-center text-primary-300">
                      <Clock className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 text-secondary-400" />
                      <span className="text-sm md:text-base">Duration</span>
                    </div>
                    <span className="text-white text-sm md:text-base">
                      {gameInfo.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-primary-700">
                    <div className="flex items-center text-primary-300">
                      <Users className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 text-secondary-400" />
                      <span className="text-sm md:text-base">Team Size</span>
                    </div>
                    <span className="text-white text-sm md:text-base">
                      {gameInfo.teamSize}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-primary-700">
                    <div className="flex items-center text-primary-300">
                      <Star className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 text-secondary-400" />
                      <span className="text-sm md:text-base">Difficulty</span>
                    </div>
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 md:h-4 md:w-4 ${
                            i < 2
                              ? "text-secondary-400 fill-current"
                              : "text-primary-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center text-primary-300">
                      <FaMapMarkerAlt className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 text-secondary-400" />
                      <span className="text-sm md:text-base">Distance</span>
                    </div>
                    <span className="text-white text-sm md:text-base">
                      {gameInfo.distance}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Monuments You'll Visit */}
            <Card className="border border-primary-600 bg-primary-800 rounded-2xl">
              <CardContent className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-light text-white mb-4 md:mb-6">
                  Ancient Monuments
                </h2>
                <div className="grid grid-cols-1 gap-2 md:gap-3">
                  {gameInfo.monuments.map((monument, index) => (
                    <div
                      key={index}
                      className="flex items-center p-2 md:p-3 bg-primary-700 rounded-lg"
                    >
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-secondary-500 rounded-lg flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                        <span className="text-white font-bold text-xs md:text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-white text-sm md:text-base">
                        {monument}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What You'll Learn */}
        <Card className="border border-secondary-600 bg-secondary-900 bg-opacity-20 rounded-2xl mb-8">
          <CardContent className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-light text-secondary-200 mb-3 md:mb-4">
              Historical Insights
            </h2>
            <ul className="space-y-2 md:space-y-3 text-secondary-100 text-xs md:text-sm">
              <li className="flex items-start">
                <span className="text-secondary-400 mr-2">•</span>
                The political power of chariot racing factions (Blues vs Greens)
              </li>
              <li className="flex items-start">
                <span className="text-secondary-400 mr-2">•</span>
                How emperors used the Hippodrome to connect with citizens
              </li>
              <li className="flex items-start">
                <span className="text-secondary-400 mr-2">•</span>
                The engineering marvel of ancient Roman stadium design
              </li>
              <li className="flex items-start">
                <span className="text-secondary-400 mr-2">•</span>
                Stories of famous charioteers and their legendary races
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Tips Section */}
        <div className="max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Card className="border border-primary-600 bg-primary-800 rounded-2xl">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <FaSearch className="text-secondary-400 text-lg md:text-xl" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">
                Observe Carefully
              </h3>
              <p className="text-primary-300 text-xs md:text-sm">
                Look for details in architecture and inscriptions
              </p>
            </CardContent>
          </Card>
          <Card className="border border-primary-600 bg-primary-800 rounded-2xl">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <FaMapMarkerAlt className="text-secondary-400 text-lg md:text-xl" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">
                Be Present
              </h3>
              <p className="text-primary-300 text-xs md:text-sm">
                Puzzles require you to be at each location
              </p>
            </CardContent>
          </Card>
          <Card className="border border-primary-600 bg-primary-800 rounded-2xl">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <FaLightbulb className="text-secondary-400 text-lg md:text-xl" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">
                Use Hints
              </h3>
              <p className="text-primary-300 text-xs md:text-sm">
                Multiple hint levels available if stuck
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Start Game CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-secondary-600 to-secondary-700 rounded-2xl p-6 md:p-8 border border-secondary-500">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-3 md:mb-4">
              Ready to Awaken the Spirit?
            </h2>
            <p className="text-secondary-100 mb-4 md:mb-6 text-sm md:text-base max-w-2xl mx-auto px-2">
              Begin your journey at the German Fountain and follow the path of
              ancient chariots. Remember to observe carefully - the answers are
              hidden in plain sight!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button
                onClick={startGame}
                className="bg-white hover:bg-gray-100 text-primary-900 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold shadow-2xl"
              >
                <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Start Adventure
              </Button>
              <Link href="/games">
                <Button
                  variant="outline"
                  className="border-secondary-400 text-secondary-500 hover:bg-secondary-400 hover:text-primary-900 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full"
                >
                  Choose Different Game
                </Button>
              </Link>
            </div>
            <p className="text-secondary-200 text-xs md:text-sm mt-3 md:mt-4">
              Free to play • No booking required • Play at your own pace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HippodromeIntroPage;
