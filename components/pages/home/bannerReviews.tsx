"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Circle } from "lucide-react";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";

interface ReviewUser {
  name: string;
  img: string;
}

interface ReviewDetails {
  url: string;
  rating: number;
  title: string;
  desc: string;
  type: string;
}

interface Review {
  date: string;
  user: ReviewUser;
  details: ReviewDetails;
}

interface ReviewsData {
  data: {
    totalReviews: number;
    averageRating: number;
    allReviews: Review[];
  };
}

const BannerReviewsSection = () => {
  const [reviewsData, setReviewsData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/review-data/all.json")
      .then((res) => res.json())
      .then((data) => {
        setReviewsData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Circle
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "fill-tripadvisor-500 text-tripadvisor-500"
                : "fill-gray-300 text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <section className="w-full bg-gray-50 py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading reviews...</div>
        </div>
      </section>
    );
  }

  if (!reviewsData) {
    return null;
  }

  return (
    <section className="w-full bg-gray-50 py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            What Our Players Say
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              {renderStars(reviewsData.data.averageRating)}
              <span className="text-gray-700 font-semibold">
                {reviewsData.data.averageRating.toFixed(1)}
              </span>
            </div>
            <span className="text-gray-600">
              • {reviewsData.data.totalReviews} reviews on TripAdvisor
            </span>
          </div>
          <p className="text-gray-600 text-sm lg:text-base">
            Real experiences from our adventurers
          </p>
        </div>

        {/* Reviews Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {reviewsData.data.allReviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden">
                          <Image
                            src={review.user.img}
                            alt={review.user.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {review.user.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {formatDate(review.date)}
                          </p>
                        </div>
                      </div>
                      {renderStars(review.details.rating)}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
                      {review.details.title}
                    </h3>
                    <Badge className="w-fit mt-2" variant="secondary">
                      {review.details.type}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 line-clamp-4 mb-4">
                      {review.details.desc}
                    </p>
                    <a
                      href={review.details.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1"
                    >
                      Read full review on TripAdvisor →
                    </a>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <a
            href="https://www.tripadvisor.com/Attraction_Review-g293974-d34026318-Reviews-Nikapolis_Hippodrome-Istanbul.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
          >
            <Image
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt="TripAdvisor"
              width={120}
              height={32}
              className="h-6 w-auto"
            />
            <span>View All Reviews</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BannerReviewsSection;
