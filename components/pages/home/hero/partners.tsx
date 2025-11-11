"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

const PartnerAutoScroller = () => {
  const partners = [
    {
      name: "Airbnb",
      img: "/partners/airbnb.png",
      link: "https://www.airbnb.com/",
    },
    {
      name: "Tripadvisor",
      img: "/partners/tripadvisor.png",
      link: "https://www.tripadvisor.com/",
    },
    {
      name: "Tiqets",
      img: "/partners/tiqets.png",
      link: "https://www.tiqets.com/en/",
    },
    {
      name: "GetYourGuide",
      img: "/partners/gyg.png",
      link: "https://www.getyourguide.com/",
    },
  ];

  return (
    <div className="absolute bottom-8 left-0 z-10 mt-16">
      <div className="text-center">
        <p className="text-primary-200 z-50 text-sm mb-6 uppercase tracking-wider">
          Trusted by adventurers worldwide
        </p>

        {/* Desktop - Simple Grid */}
        <div className="hidden md:flex justify-center items-center gap-8 lg:gap-12 px-4">
          {partners.map((partner, index) => (
            <Link key={`desktop-${index}`} href={partner.link} target="_blank">
              <div className="relative h-10 w-24">
                <Image
                  src={partner.img}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile - Carousel (unchanged) */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 1500,
                stopOnInteraction: false,
              }),
            ]}
            className="w-screen bg-gray-600/40"
          >
            <CarouselContent>
              {partners.map((partner, index) => (
                <CarouselItem
                  key={`mobile-${index}`}
                  className="basis-1/2 mx-2 flex items-center justify-center"
                >
                  <Link href={partner.link} target="_blank">
                    <Image
                      width={70}
                      height={30}
                      src={partner.img}
                      alt={partner.name}
                    />
                  </Link>
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
