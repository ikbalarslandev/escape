"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

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
              Magnificent Discovery!
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            You&apos;ve uncovered the revolutionary courtyard of Nuruosmaniye
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-light text-secondary-400 text-center mb-6">
                A Revolution in Stone
              </h2>

              <p className="text-base md:text-lg">
                Right now, you are standing in the courtyard of the Nuruosmaniye
                Mosque. You are looking at a revolution made of stone. This is
                the{" "}
                <strong className="text-white">
                  first and only Baroque Style Mosque
                </strong>{" "}
                of the Ottoman Empire.
              </p>

              {/* What is Baroque */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    What is Baroque?
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    Baroque is a style of art and architecture. It is famous for
                    its{" "}
                    <strong className="text-white">
                      curves, grandeur, and dramatic effect
                    </strong>
                    . You can often see this style in the cathedrals of Europe.
                  </p>
                </CardContent>
              </Card>

              {/* Unique Shape */}
              <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    A Unique Shape
                  </h3>
                  <p className="text-secondary-100 text-sm md:text-base">
                    Look around you. Traditional Ottoman mosque courtyards are{" "}
                    <strong className="text-white">rectangular</strong>. But
                    this courtyard is different. It is a graceful{" "}
                    <strong className="text-white">semi-circle</strong>, like it
                    is opening its arms to you. This design is the{" "}
                    <strong className="text-white">
                      first and only of its kind
                    </strong>{" "}
                    in Ottoman architecture.
                  </p>
                </CardContent>
              </Card>

              {/* Columns from Pagan Temple */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    Columns from a Pagan Temple
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    There is something even more amazing. The columns that hold
                    up this courtyard have a secret past. They came from an{" "}
                    <strong className="text-white">
                      ancient pagan temple in Bergama
                    </strong>
                    .
                  </p>
                </CardContent>
              </Card>

              {/* The Three Traditions */}
              <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    Three Traditions, One Space
                  </h3>
                  <p className="text-secondary-100 text-sm md:text-base mb-3">
                    So, here in one place, we have:
                  </p>
                  <div className="space-y-2">
                    <p className="text-secondary-100 text-sm md:text-base">
                      •{" "}
                      <strong className="text-white">
                        Architecture inspired by Christian cathedrals
                      </strong>
                    </p>
                    <p className="text-secondary-100 text-sm md:text-base">
                      •{" "}
                      <strong className="text-white">
                        Columns from a pagan temple
                      </strong>
                    </p>
                    <p className="text-secondary-100 text-sm md:text-base">
                      •{" "}
                      <strong className="text-white">
                        All together in an Islamic building
                      </strong>
                    </p>
                  </div>
                  <p className="text-secondary-100 text-sm md:text-base mt-3">
                    This mix shows the{" "}
                    <strong className="text-white">
                      layered spirit of Istanbul
                    </strong>
                    , where different histories and faiths meet under one roof.
                  </p>
                </CardContent>
              </Card>

              {/* Cultural Significance */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    Cultural Significance
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base">
                    Nuruosmaniye represents a pivotal moment when the Ottoman
                    Empire began looking westward, embracing European influences
                    while maintaining its Islamic identity. The reuse of ancient
                    columns demonstrates a respect for history and a practical
                    approach to building materials, creating a space that truly
                    embodies Istanbul&apos;s position as a bridge between
                    civilizations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/pagan-cross-crescent/10/location")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Enter the Mosque
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Where East meets West in architectural harmony...
          </p>
        </footer>
      </div>
    </div>
  );
}
