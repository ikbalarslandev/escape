"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const BannerScrollerSection = () => {
  const galleryImages = [
    { src: "/gallery/1.jpeg", alt: "Player adventure 1" },
    { src: "/gallery/2.jpeg", alt: "Player adventure 2" },
    { src: "/gallery/3.jpeg", alt: "Player adventure 3" },
    { src: "/gallery/4.jpeg", alt: "Player adventure 4" },
    { src: "/gallery/5.jpeg", alt: "Player adventure 5" },
    { src: "/gallery/6.jpeg", alt: "Player adventure 6" },
    { src: "/gallery/7.jpeg", alt: "Player adventure 7" },
    { src: "/gallery/8.jpeg", alt: "Player adventure 8" },
  ];

  return (
    <section className="w-full bg-primary-700 py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            Adventure Gallery
          </h2>
          <p className="text-primary-200 text-sm lg:text-base">
            See our players in action
          </p>
        </div>

        {/* Gallery Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="basis md:basis-1/3 lg:basis-1/4"
              >
                <div className="relative aspect-square overflow-hidden rounded">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default BannerScrollerSection;
