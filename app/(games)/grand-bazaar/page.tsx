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
  ShoppingBag,
  Coins,
  Globe,
} from "lucide-react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaLightbulb,
  FaCoffee,
} from "react-icons/fa";
import YouTube from "react-youtube";

const GrandBazaarIntroPage = () => {
  const [showIntro, setShowIntro] = useState(true);

  const gameInfo = {
    title: "Grand Bazaar Secrets",
    location: "Grand Bazaar, Istanbul",
    duration: "2-3 hours",
    difficulty: "Medium",
    teamSize: "2-6 players",
    distance: "2.2 km",
    monuments: [
      "Nuruosmaniye Gate",
      "Sandal Bedesteni",
      "Cevahir Bedesteni",
      "Zincirli Han",
      "Historic Corridors",
    ],
  };

  const startGame = () => {
    window.location.href = "/grand-bazaar/1/location";
  };

  const handleIntroClick = () => {
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setShowIntro(false);
    }
  };

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
                Grand Bazaar Secrets
              </h1>
              <div className="w-20 md:w-24 h-1 bg-secondary-400 mx-auto mb-4 md:mb-6"></div>
            </div>

            <div className="text-base md:text-lg lg:text-xl leading-relaxed space-y-3 md:space-y-4 mb-6 md:mb-8 text-primary-100">
              <p>
                Did you know the Grand Bazaar accidentally led to the discovery
                of America?
              </p>
              <p className="text-secondary-300 italic text-sm md:text-base">
                This market didn't just sell goods—it shaped world history...
              </p>
              <p>
                For over 500 years, this labyrinthine market has been the heart
                of global trade, influencing empires, economies, and even
                geographical discoveries.
              </p>
              <p>
                From the Silk Road's final stop to the world's first banking
                system, the Grand Bazaar holds secrets that changed the course
                of history.
              </p>
              <p className="text-secondary-300 font-semibold text-sm md:text-base">
                Now it's your turn to uncover how this market shaped our world.
              </p>
            </div>

            <Button
              onClick={() => setShowIntro(false)}
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold w-full md:w-auto"
            >
              Discover the Secrets
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>

            <p className="text-primary-300 text-xs mt-4 md:hidden">
              Tap anywhere to continue
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-6 max-w-6xl min-h-screen">
        {/* Header */}
        <div className="text-center mb-8 pt-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-3 md:mb-4">
            Grand Bazaar Secrets
          </h1>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto px-2">
            Uncover 500 years of trade, treasures, and world-changing history
          </p>
        </div>

        {/* YouTube Video Section */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl mb-6 md:mb-8">
          <CardContent className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-light text-white mb-4 flex items-center">
              <History className="h-5 w-5 md:h-6 md:w-6 text-secondary-400 mr-2 md:mr-3" />
              The Market That Changed the World
            </h2>
            <p className="text-primary-200 mb-4 text-sm md:text-base">
              Discover how the Grand Bazaar's influence reached from the Silk
              Road to the Americas.
            </p>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-primary-900">
              <div className="relative h-48 md:h-64 lg:h-80 w-full">
                <YouTube
                  videoId="0zDa-7_cz8Y"
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
                  Your Journey Through History
                </h2>
                <ul className="space-y-3 md:space-y-4 text-primary-200">
                  <li className="flex items-start">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-secondary-500 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0">
                      <ShoppingBag className="text-white text-xs md:text-sm" />
                    </div>
                    <span className="text-sm md:text-base">
                      Start at the <strong>Nuruosmaniye Gate</strong> - Silk
                      Road's final stop
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-secondary-500 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0">
                      <Coins className="text-white text-xs md:text-sm" />
                    </div>
                    <span className="text-sm md:text-base">
                      Explore the <strong>World's First Banks</strong> in the
                      Bedestens
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-secondary-500 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0">
                      <FaCoffee className="text-white text-xs md:text-sm" />
                    </div>
                    <span className="text-sm md:text-base">
                      Discover <strong>Tea Culture Diplomacy</strong> that
                      drives sales
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-secondary-500 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0">
                      <Globe className="text-white text-xs md:text-sm" />
                    </div>
                    <span className="text-sm md:text-base">
                      Uncover how this market{" "}
                      <strong>shaped global trade</strong>
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

            {/* Locations You'll Visit */}
            <Card className="border border-primary-600 bg-primary-800 rounded-2xl">
              <CardContent className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-light text-white mb-4 md:mb-6">
                  Historic Locations
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

        {/* What You'll Discover */}
        <Card className="border border-secondary-600 bg-secondary-900 bg-opacity-20 rounded-2xl mb-8">
          <CardContent className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-light text-secondary-200 mb-3 md:mb-4">
              World-Changing Secrets You'll Uncover
            </h2>
            <ul className="space-y-2 md:space-y-3 text-secondary-100 text-xs md:text-sm">
              <li className="flex items-start">
                <span className="text-secondary-400 mr-2">•</span>
                How the Grand Bazaar's wealth inspired Columbus to discover
                America
              </li>
              <li className="flex items-start">
                <span className="text-secondary-400 mr-2">•</span>
                The world's first banking system in Cevahir and Sandal Bedestens
              </li>
              <li className="flex items-start">
                <span className="text-secondary-400 mr-2">•</span>
                Architectural genius: Fire-proof design that protected precious
                silks
              </li>
              <li className="flex items-start">
                <span className="text-secondary-400 mr-2">•</span>
                Tea culture diplomacy: How curved glasses drive sales to this
                day
              </li>
              <li className="flex items-start">
                <span className="text-secondary-400 mr-2">•</span>
                The complex history of trade and humanity at Esir Han
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
                Look for Details
              </h3>
              <p className="text-primary-300 text-xs md:text-sm">
                Hidden symbols, architectural features, and historical clues
              </p>
            </CardContent>
          </Card>
          <Card className="border border-primary-600 bg-primary-800 rounded-2xl">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <FaMapMarkerAlt className="text-secondary-400 text-lg md:text-xl" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">
                Navigate the Maze
              </h3>
              <p className="text-primary-300 text-xs md:text-sm">
                Follow the historic corridors and discover hidden passages
              </p>
            </CardContent>
          </Card>
          <Card className="border border-primary-600 bg-primary-800 rounded-2xl">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <FaLightbulb className="text-secondary-400 text-lg md:text-xl" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">
                Connect History
              </h3>
              <p className="text-primary-300 text-xs md:text-sm">
                See how local trade shaped global history and discoveries
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Start Game CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-secondary-600 to-secondary-700 rounded-2xl p-6 md:p-8 border border-secondary-500">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-3 md:mb-4">
              Ready to Uncover 500 Years of Secrets?
            </h2>
            <p className="text-secondary-100 mb-4 md:mb-6 text-sm md:text-base max-w-2xl mx-auto px-2">
              Begin your journey at the Nuruosmaniye Gate and discover how this
              ancient market shaped empires, inspired discoveries, and created
              commercial traditions that continue today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button
                onClick={startGame}
                className="bg-white hover:bg-gray-100 text-primary-900 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold shadow-2xl"
              >
                <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Start Your Discovery
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
              Free to play • No booking required • Discover world-changing
              secrets
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrandBazaarIntroPage;
