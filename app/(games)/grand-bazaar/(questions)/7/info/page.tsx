"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { FaCheckCircle, FaArrowRight, FaMugHot, FaHeart } from "react-icons/fa";
import { GiTeapot, GiTeapotLeaves } from "react-icons/gi";
import Image from "next/image";

export default function InfoPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <FaCheckCircle className="h-12 w-12 text-secondary-400 mr-4" />
            <h1 className="text-3xl md:text-4xl font-light text-white">
              Well Done!
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            You discovered the secret language of tea in the Grand Bazaar!
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-light text-secondary-400 text-center mb-6">
                The Walkie-Talkie Tea Culture
              </h2>

              {/* Tea in Grand Bazaar Image */}
              <div className="my-6 rounded-xl overflow-hidden border border-primary-600 shadow-lg">
                <Image
                  src="/qs-imgs/grand-bazaar/info/7/1.jpg"
                  alt="Shop with walkie-talkie and traditional Turkish tea"
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="bg-primary-900 bg-opacity-70 p-3 text-center">
                  <p className="text-sm text-primary-200 italic">
                    Every shop in the Grand Bazaar has a walkie-talkie for one
                    purpose: ordering tea
                  </p>
                </div>
              </div>

              <p className="text-base md:text-lg">
                If you walk through the Grand Bazaar, you&apos;ll see{" "}
                <strong className="text-white">
                  walkie-talkies at almost every shop entrance
                </strong>
                . These devices have one single purpose:{" "}
                <strong className="text-white">to order tea</strong>.
              </p>

              <div className="flex items-start mb-4">
                <FaMugHot className="h-6 w-6 text-secondary-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg">
                  Tea is at the{" "}
                  <strong className="text-white">
                    heart of the sales culture
                  </strong>{" "}
                  here. Offering free tea to customers is one of the most
                  effective ways to keep them in the shop and build a friendly
                  connection.
                </p>
              </div>

              {/* The Psychology of Tea */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaHeart className="mr-2" />
                    The Psychology Behind the Tea
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    When a customer accepts tea, they{" "}
                    <strong className="text-white">
                      feel good and develop sympathy
                    </strong>
                    for the seller. This simple gesture makes the customer more
                    relaxed and increases the likelihood of making a sale.
                  </p>
                  <p className="text-primary-100 text-sm md:text-base">
                    It&apos;s a{" "}
                    <strong className="text-white">
                      brilliant psychological strategy
                    </strong>{" "}
                    - the tea creates warmth and trust, turning a business
                    transaction into a friendly conversation.
                  </p>
                </CardContent>
              </Card>

              {/* The Special Glass Design */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <FaMugHot className="mr-2" />
                    The Waist-Shaped Glass: A Clever Design
                  </h3>

                  {/* Turkish Tea Glass Image */}
                  <div className="my-4 rounded-lg overflow-hidden border border-primary-500">
                    <Image
                      src="/qs-imgs/grand-bazaar/info/7/2.jpg"
                      alt="Traditional Turkish tea glass with waist design"
                      width={600}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                    <div className="bg-primary-800 bg-opacity-70 p-2 text-center">
                      <p className="text-xs text-primary-200 italic">
                        The waist-shaped glass cools tea faster and serves as a
                        communication tool
                      </p>
                    </div>
                  </div>

                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    Tea is served in special{" "}
                    <strong className="text-white">waist-shaped glasses</strong>
                    that are inspired by the female form. This design isn&apos;t
                    just beautiful - it&apos;s{" "}
                    <strong className="text-white">
                      practical and functional
                    </strong>
                    .
                  </p>

                  <p className="text-primary-100 text-sm md:text-base">
                    The unique shape allows the tea to{" "}
                    <strong className="text-white">cool faster</strong>, making
                    it drinkable sooner. But it also serves a secret social
                    purpose...
                  </p>
                </CardContent>
              </Card>

              {/* The Silent Communication */}
              <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <GiTeapotLeaves className="mr-2" />
                    Tea as a Silent Communication Tool
                  </h3>
                  <p className="text-secondary-100 text-sm md:text-base mb-3">
                    The cooling tea becomes a{" "}
                    <strong className="text-white">
                      silent communication tool
                    </strong>
                    . If the customer isn&apos;t interested in buying, the
                    seller can politely say{" "}
                    <strong className="text-white">
                      &quot;The tea got cold!&quot;
                    </strong>{" "}
                    as a gentle way to end the conversation.
                  </p>
                  <p className="text-secondary-100 text-sm md:text-base">
                    But if the seller likes the customer and wants to continue
                    the conversation, they use the same excuse to{" "}
                    <strong className="text-white">
                      bring fresh, hot tea immediately
                    </strong>
                    . One glass of tea speaks volumes without saying a word.
                  </p>
                </CardContent>
              </Card>

              {/* Cultural Significance */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3 flex items-center">
                    <GiTeapot className="mr-2" />
                    More Than Just a Drink
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    In the Grand Bazaar, tea is{" "}
                    <strong className="text-white">
                      much more than a beverage
                    </strong>
                    . It&apos;s a social lubricant, a psychological tool, a
                    time-management device, and a silent language all rolled
                    into one. This centuries-old tradition shows the
                    sophistication of Turkish sales culture, where every detail
                    - from the walkie-talkie order to the waist-shaped glass -
                    is carefully designed to create the perfect environment for
                    commerce and connection.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/grand-bazaar/8/location")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Continue Your Journey
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Where tea speaks louder than words and business becomes
            friendship...
          </p>
        </footer>
      </div>
    </div>
  );
}
