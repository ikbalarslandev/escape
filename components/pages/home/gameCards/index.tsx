"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import GameCard from "./card";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const GameCardsSection = () => {
  const gamesData = [
    {
      id: 1,
      title: "Hipodrome",
      difficulty: 7,
      playTime: "2 hours",
      kilometers: 1.8,
      languages: ["English"],
      image: "/game-cards/1.png",
      isActive: true,
    },
    {
      id: 2,
      title: "Seventh Minaret",
      difficulty: 7,
      playTime: "2 hours",
      kilometers: 1.8,
      languages: ["English"],
      image: "/hero.jpeg",
      isActive: false,
    },
  ];

  return (
    <section className="w-full bg-primary-900 py-16 lg:py-24">
      <div className="container sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Featured Games
          </h2>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            Choose your adventure and explore Istanbul like never before
          </p>
        </div>

        {/* Games Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false, // keeps autoplaying after user swipes
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {gamesData.map((game) => (
                <CarouselItem
                  key={game.id}
                  className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <GameCard
                    title={game.title}
                    difficulty={game.difficulty}
                    playTime={game.playTime}
                    kilometers={game.kilometers}
                    languages={game.languages}
                    image={game.image}
                    isActive={game.isActive}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows */}
          </Carousel>
        </div>

        {/* See All Games Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 rounded-lg shadow-sm"
          >
            <Link href="/games">See All Games</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GameCardsSection;
