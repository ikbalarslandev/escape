"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
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
              Congratulations!
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            You discovered the secret of Çemberlitaş!
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-4 md:space-y-6 text-primary-200 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-light text-secondary-400 text-center mb-6">
                The Column That Built a Capital City
              </h2>

              {/* Forum of Constantine Image */}
              <div className="my-6 rounded-xl overflow-hidden border border-primary-600 shadow-lg">
                <Image
                  src="/qs-imgs/pagan-cross-crescent/info/1/forum.jpeg"
                  alt="Forum of Constantine with the Column of Constantine erected in the center"
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="bg-primary-900 bg-opacity-70 p-3 text-center">
                  <p className="text-sm text-primary-200 italic">
                    The Forum of Constantine with the Column of Constantine
                    standing proudly in the center
                  </p>
                </div>
              </div>

              <p className="text-base md:text-lg">
                A long time ago, Emperor Constantine visited a small pagan town
                called <strong className="text-white">Byzantium</strong>. He
                decided, &quot;I will build my new capital city here. I will
                call it <strong className="text-white">New Rome</strong>.&quot;
              </p>

              <p className="text-base md:text-lg">
                But he had a big problem. The town was very small. He did not
                have enough people to build a great capital for his empire.
              </p>

              <p className="text-base md:text-lg">
                So, Constantine made a clever plan. First, he built a large,
                round public square called a{" "}
                <strong className="text-white">Forum</strong>. This was a place
                for people to meet. Then, he made a brilliant &quot;honey
                pot&quot; plan to attract people from all around the world. If
                many people came, he could build a big and powerful nation.
              </p>

              {/* How He Attracted Pagans */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    How Did He Attract the Pagans?
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    In the exact center of the new Forum, he erected a giant
                    column. This column was special because it came from a
                    temple for the sun god,{" "}
                    <strong className="text-white">Apollo</strong>. On top of
                    the column, he put a statue of himself. The statue wore a
                    crown with{" "}
                    <strong className="text-white">seven lights</strong> to look
                    like Apollo. This made all the pagan people respect him and
                    want to live in his city.
                  </p>
                  <p className="text-primary-100 text-sm md:text-base">
                    He also made a very important rule: the country became{" "}
                    <strong className="text-white">bilingual</strong>. This
                    means there were two official languages:{" "}
                    <strong className="text-white">Latin and Greek</strong>.
                    Now, the Greek-speaking pagan people felt welcome and were
                    happy to join his new empire.
                  </p>
                </CardContent>
              </Card>

              {/* How He Attracted Christians and Jews */}
              <Card className="bg-primary-700 border-primary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    How Did He Attract Christians and Jews?
                  </h3>
                  <p className="text-primary-100 text-sm md:text-base mb-3">
                    Constantine sent his mother,{" "}
                    <strong className="text-white">Helena</strong>, to
                    Jerusalem. She brought back many holy objects for Christians
                    and Jews. They buried these holy things under the column in
                    the forum to protect the city.
                  </p>
                  <div className="text-primary-100 text-sm md:text-base space-y-2">
                    <p>
                      <strong>For Jews:</strong> The seven-branched candlestick
                      (Menorah) from King Solomon&apos;s Temple.
                    </p>
                    <p>
                      <strong>For Christians:</strong> Pieces of wood from the
                      cross where Jesus died.
                    </p>
                    <p>
                      <strong>For Christians:</strong> Pieces of the bread that
                      Jesus used to feed 5,000 people.
                    </p>
                    <p>
                      <strong>For Jews and Christians:</strong> The axe that
                      Noah used to build his ark.
                    </p>
                    <p>
                      <strong>For Jews and Christians:</strong> One of the
                      stones that David used in his sling.
                    </p>
                  </div>
                  <p className="text-primary-100 text-sm md:text-base mt-3">
                    Because of this, Christians and Jews from all over the world
                    wanted to come and join him.
                  </p>
                </CardContent>
              </Card>

              {/* The Center of Everything */}
              <Card className="bg-secondary-900 bg-opacity-20 border-secondary-500 mt-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-400 mb-3">
                    The Center of Everything
                  </h3>
                  <p className="text-secondary-100 text-sm md:text-base">
                    This Forum with its column was the{" "}
                    <strong className="text-white">
                      heart of Constantinople
                    </strong>
                    . It was the reason people came, and it was the reason the
                    city became a great Empire. Without this special place,
                    there may have been no great capital city at all.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/pagan-cross-crescent/2/location")}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Continue Your Journey
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Discover how three traditions came together to build an empire...
          </p>
        </footer>
      </div>
    </div>
  );
}
