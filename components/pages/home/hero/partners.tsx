"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const PartnerAutoScroller = () => {
  const partners = [
    { name: "Airbnb", logo: "/partners/airbnb.svg" },
    { name: "Tripadvisor", logo: "/partners/tripadvisor.svg" },
    { name: "Tiqets", logo: "/partners/tiqets.svg" },
    { name: "GetYourGuide", logo: "/partners/getyourguide.svg" },
  ];

  return (
    <div className="absolute bottom-8 left-0 z-10 mt-16">
      <div className="text-center">
        <p className="text-primary-200 z-50 text-sm mb-6 uppercase tracking-wider">
          Trusted by adventurers worldwide
        </p>

        {/* Desktop - Static Grid */}
        <div className="hidden md:flex justify-center items-center gap-8 lg:gap-12 px-4">
          {partners.map((partner, index) => (
            <Card
              key={`desktop-${index}`}
              className="bg-white/10 backdrop-blur-sm border-white/20"
            >
              <CardContent className="p-3 flex items-center justify-center">
                <div className="relative h-6 w-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100">
                  <div className="text-white text-xs font-semibold text-center">
                    {partner.name}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile - Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 1000, // 2 seconds between slides
                stopOnInteraction: false, // keeps autoplaying after user swipes
              }),
            ]}
            className="w-screen"
          >
            <CarouselContent>
              {partners.map((partner, index) => (
                <CarouselItem
                  key={`mobile-${index}`}
                  className="basis-1/2 bg-gray-400/50 mx-2 "
                >
                  {partner.name}
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PartnerAutoScroller;
