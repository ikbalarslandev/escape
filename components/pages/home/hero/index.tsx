"use client";

import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import Image from "next/image";
import PartnerAutoScroller from "./partners";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-dvh w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpeg"
          alt="Outdoor Escape Games in Istanbul"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center mt-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            Outdoor Escape <span>Games in</span>
            <span className="block text-secondary-400 ml-auto w-full">
              Istanbul
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-primary-100 mb-8 leading-relaxed max-w-lg">
            Discover Istanbul from a new perspective with your friends or
            family!
          </p>

          <div className="flex items-center space-x-6 mb-8">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-secondary-400" />
              <span className="font-semibold">3 people</span>
              <span className="text-primary-200">played the game</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Link href="/games">See the Games</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Link href="/howItWorks">How it Works</Link>
            </Button>
          </div>
        </div>
      </div>

      <PartnerAutoScroller />
    </section>
  );
};

export default HeroSection;
