"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Play,
  MapPin,
  HelpCircle,
  BookOpen,
  Award,
  Smartphone,
  ExternalLink,
} from "lucide-react";

const HowItWorksPage = () => {
  const [showVideo, setShowVideo] = useState(false);

  const infoBanners = [
    {
      icon: Smartphone,
      title: "Activate Your Game",
      description:
        "No booking needed! Choose your game and start playing immediately. Everything works directly in your mobile browser - no app download required.",
      color: "bg-blue-50 border-blue-200",
      iconColor: "bg-blue-500",
    },
    {
      icon: MapPin,
      title: "Prepare Your Tools",
      description:
        "Bring 1 smartphone with internet access per team. We recommend a power bank. That's all you need!",
      color: "bg-green-50 border-green-200",
      iconColor: "bg-green-500",
    },
    {
      icon: HelpCircle,
      title: "Explore and Solve",
      description:
        "Follow the map, listen to the story, and solve riddles at real historical locations. Each correct answer reveals new secrets about Istanbul.",
      color: "bg-purple-50 border-purple-200",
      iconColor: "bg-purple-500",
    },
    {
      icon: Award,
      title: "Complete Your Quest",
      description:
        "At the end, you'll unlock a digital certificate and receive a PDF summary with all the stories and historical facts you uncovered.",
      color: "bg-orange-50 border-orange-200",
      iconColor: "bg-orange-500",
    },
  ];

  const gameSteps = [
    {
      step: "1",
      title: "Location Page",
      description:
        "This page shows you the exact historical location you need to visit. Each puzzle is tied to a specific building or landmark in Istanbul.",
      details:
        "You'll see the location on a map and get directions. The puzzle can only be solved when you're physically present at the location.",
      icon: MapPin,
      color: "from-blue-500 to-blue-600",
    },
    {
      step: "2",
      title: "Question Page",
      description:
        "Once you're at the location, you'll find a puzzle related to that specific place. Observe the details around you to find the solution.",
      details:
        "Each question comes with 3-6 progressive hints. Start with the subtle hints and reveal more if needed. The answer is always found in your surroundings.",
      icon: HelpCircle,
      color: "from-purple-500 to-purple-600",
    },
    {
      step: "3",
      title: "Info Page",
      description:
        "After solving the puzzle correctly, you'll unlock historical information about that location.",
      details:
        "Learn fascinating facts and stories about the place you just explored. This page then automatically directs you to the next location, continuing your adventure.",
      icon: BookOpen,
      color: "from-green-500 to-green-600",
    },
  ];

  const videoUrl = ""; // Add your video URL here when available

  const scrollToVideo = () => {
    const videoSection = document.getElementById("video-section");
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
              How to Play
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed mb-8">
              Your guide to experiencing Istanbul through interactive outdoor
              escape games
            </p>
            {videoUrl && (
              <Button
                onClick={scrollToVideo}
                className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-normal text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Tutorial Video
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Info Banners */}
      <section className="py-12 lg:py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoBanners.map((banner, index) => (
              <Card
                key={index}
                className={`border-2 ${banner.color} shadow-sm rounded-2xl`}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${banner.iconColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <banner.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {banner.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {banner.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Game Flow Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
                How Each Question Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every question follows this simple three-step loop that repeats
                until you complete your quest
              </p>
            </div>

            <div className="space-y-8">
              {gameSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row items-center gap-8"
                >
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg`}
                    >
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <Card className="flex-1 border border-gray-200 shadow-sm rounded-2xl">
                    <CardContent className="p-6 lg:p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                          <step.icon className="h-6 w-6 text-gray-600" />
                        </div>
                        <h3 className="text-2xl font-light text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-lg mb-3">
                        {step.description}
                      </p>
                      <p className="text-gray-500">{step.details}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Completion Section */}
            <div className="mt-12 text-center">
              <Card className="border border-secondary-200 bg-secondary-50 rounded-2xl max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <Award className="h-12 w-12 text-secondary-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-light text-gray-900 mb-4">
                    Complete Your Adventure
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    After solving the final puzzle, you&apos;ll reach the
                    completion page where you can:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                    <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">
                        Leave a review about your experience
                      </span>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                      <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-sm">💝</span>
                      </div>
                      <span className="text-gray-700">
                        Support us with a tip if you enjoyed the game
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-500 mt-6 text-sm">
                    Your support helps us create more amazing adventures and
                    continue providing free urban exploration experiences!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      {videoUrl ? (
        <section id="video-section" className="py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
                  Video Tutorial
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Watch Ikbal (the creator of Nikapolis) play one of the puzzles
                  at the Hippodrome of Istanbul. You&apos;ll see how the
                  riddles, locations and hints work in real life.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                {showVideo ? (
                  <div className="relative aspect-w-16 aspect-h-9">
                    <iframe
                      src={videoUrl}
                      className="w-full h-64 lg:h-96"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Nikapolis Tutorial Video"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-w-16 aspect-h-9">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-600 flex items-center justify-center">
                      <Button
                        onClick={() => setShowVideo(true)}
                        className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-2xl"
                      >
                        <Play className="mr-2 h-6 w-6" />
                        Play Tutorial Video
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section id="video-section" className="py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
                <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Play className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  Video Tutorial Coming Soon
                </h3>
                <p className="text-gray-600 mb-6">
                  We&apos;re working on a video tutorial to show you exactly how
                  Nikapolis games work in real life. Soon you&apos;ll be able to
                  watch our creator demonstrate the puzzle-solving experience at
                  historical locations in Istanbul.
                </p>
                <p className="text-gray-500 text-sm">
                  In the meantime, why not try a game yourself? It&apos;s easier
                  than you think!
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose from our available games and begin exploring
              Istanbul&apos;s hidden secrets today.
            </p>
            <Link href="/games">
              <Button className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-normal text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Choose Your Game
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
