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
  Cross,
  Moon,
} from "lucide-react";
import { FaSearch, FaMapMarkerAlt, FaLightbulb } from "react-icons/fa";
import YouTube from "react-youtube";

const PaganCrossCrescentIntroPage = () => {
  const [showIntro, setShowIntro] = useState(true);

  const gameInfo = {
    title: "Pagan, Cross, Crescent",
    location: "Historic Peninsula, Istanbul",
    duration: "2-2.5 hours",
    difficulty: "Medium",
    teamSize: "2-5 players",
    distance: "1.8 km",
    monuments: ["Çemberlitaş Column", "Nuruosmaniye Mosque", "Vezir Han"],
  };

  const startGame = () => {
    window.location.href = "/pagan-cross-crescent/1/location";
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
                Pagan, Cross, Crescent
              </h1>
              <div className="w-20 md:w-24 h-1 bg-secondary-400 mx-auto mb-4 md:mb-6"></div>
            </div>

            <div className="text-base md:text-lg lg:text-xl leading-relaxed space-y-3 md:space-y-4 mb-6 md:mb-8 text-primary-100">
              <p>
                Do you want to know why this city became the capital of empires?
              </p>
              <p className="text-secondary-300 italic text-sm md:text-base">
                The answer lies in three powerful forces that shaped its
                destiny...
              </p>
              <p>
                For centuries, three great traditions have existed in harmony
                here:
                <span className="text-secondary-300"> Pagan</span>,{" "}
                <span className="text-blue-300">Cross</span>, and{" "}
                <span className="text-green-300">Crescent</span>.
              </p>
              <p>
                This unique balance is what made Istanbul the heart of empires.
                Each tradition left its mark, creating the city we know today.
              </p>
              <p className="text-secondary-300 font-semibold text-sm md:text-base">
                Now it&apos;s your turn to discover how these three forces came
                together to build one of the world&apos;s greatest cities.
              </p>
            </div>

            <Button
              onClick={() => setShowIntro(false)}
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold w-full md:w-auto"
            >
              Discover the Secret
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
            Pagan, Cross, Crescent
          </h1>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto px-2">
            Discover how three traditions created an imperial capital
          </p>
        </div>

        {/* YouTube Video Section */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl mb-6 md:mb-8">
          <CardContent className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-light text-white mb-4 flex items-center">
              <History className="h-5 w-5 md:h-6 md:w-6 text-secondary-400 mr-2 md:mr-3" />
              The Three Traditions
            </h2>
            <p className="text-primary-200 mb-4 text-sm md:text-base">
              Explore how Pagan, Christian, and Islamic influences shaped
              Istanbul&apos;s unique character.
            </p>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-primary-900">
              <div className="relative h-48 md:h-64 lg:h-80 w-full">
                <YouTube
                  videoId="YOUR_VIDEO_ID_HERE"
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
                  Your Journey
                </h2>
                <ul className="space-y-3 md:space-y-4 text-primary-200">
                  <li className="flex items-start">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-secondary-500 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0">
                      <Moon className="text-white text-xs md:text-sm" />
                    </div>
                    <span className="text-sm md:text-base">
                      Start at the <strong>Pagan Column</strong> in Çemberlitaş
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-secondary-500 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0">
                      <Cross className="text-white text-xs md:text-sm" />
                    </div>
                    <span className="text-sm md:text-base">
                      Explore the <strong>Baroque Mosque</strong> of
                      Nuruosmaniye
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-secondary-500 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs md:text-sm font-bold">
                        ☪
                      </span>
                    </div>
                    <span className="text-sm md:text-base">
                      Discover the <strong>Trade Hub</strong> at Vezir Han
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-secondary-500 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs md:text-sm font-bold">
                        !
                      </span>
                    </div>
                    <span className="text-sm md:text-base">
                      Uncover how three traditions built an empire
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
              What You&apos;ll Discover
            </h2>
            <ul className="space-y-2 md:space-y-3 text-secondary-100 text-xs md:text-sm">
              <li className="flex items-start">
                <span className="text-secondary-400 mr-2">•</span>
                How a pagan column helped establish a Christian capital
              </li>
              <li className="flex items-start">
                <span className="text-secondary-400 mr-2">•</span>
                Why a mosque features Christian Baroque architecture
              </li>
              <li className="flex items-start">
                <span className="text-secondary-400 mr-2">•</span>
                The economic system that sustained empires for centuries
              </li>
              <li className="flex items-start">
                <span className="text-secondary-400 mr-2">•</span>
                The secret behind Istanbul&apos;s enduring power
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
                Look for Symbols
              </h3>
              <p className="text-primary-300 text-xs md:text-sm">
                Find hidden pagan, Christian, and Islamic symbols
              </p>
            </CardContent>
          </Card>
          <Card className="border border-primary-600 bg-primary-800 rounded-2xl">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <FaMapMarkerAlt className="text-secondary-400 text-lg md:text-xl" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">
                Follow the Path
              </h3>
              <p className="text-primary-300 text-xs md:text-sm">
                Each location reveals clues to the next
              </p>
            </CardContent>
          </Card>
          <Card className="border border-primary-600 bg-primary-800 rounded-2xl">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <FaLightbulb className="text-secondary-400 text-lg md:text-xl" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">
                Connect the Dots
              </h3>
              <p className="text-primary-300 text-xs md:text-sm">
                See how three traditions created one great city
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Start Game CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-secondary-600 to-secondary-700 rounded-2xl p-6 md:p-8 border border-secondary-500">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-3 md:mb-4">
              Ready to Discover the Secret?
            </h2>
            <p className="text-secondary-100 mb-4 md:mb-6 text-sm md:text-base max-w-2xl mx-auto px-2">
              Begin your journey at the Çemberlitaş Column and uncover how three
              great traditions came together to build an imperial capital that
              stood the test of time.
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
              Free to play • No booking required • Discover Istanbul&apos;s
              secret
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaganCrossCrescentIntroPage;
