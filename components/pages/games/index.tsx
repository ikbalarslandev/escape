import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Users,
  Clock,
  Star,
  ArrowRight,
  Calendar,
  Sparkles,
} from "lucide-react";

const GamesPage = () => {
  const games = [
    {
      id: "hippodrome",
      title: "Hippodrome Adventure",
      location: "Sultanahmet, Istanbul",
      description:
        "Step back in time to the heart of Byzantine Constantinople. The Hippodrome was the center of social and political life for over 1000 years. Help us recreate the genius loci of this ancient space as you solve puzzles that bring its history to life.",
      image: "/hero.jpeg", // Replace with your actual image
      idealFor: [
        "Travelers",
        "Families with kids",
        "Groups of friends",
        "Coworkers",
      ],
      startingLocation: "German Fountain",
      difficulty: 2,
      teamSize: "2-4 players",
      playTime: "1.5-2 hours",
      distance: "2.5 km",
      languages: ["English"],
      playedBy: 3,
      highlights: [
        "The German Fountain",
        "The Serpent Column",
        "The Walled Obelisk",
        "The Obelisk of Theodosius",
      ],
      available: true,
    },
    {
      id: "coming-soon-1",
      title: "Galata Secrets",
      location: "Beyoğlu, Istanbul",
      description:
        "Discover the hidden stories of Galata Tower and its surrounding medieval streets. Uncover the mysteries of Genoese traders, ancient passages, and panoramic views of the Golden Horn.",
      image: "/coming-soon.jpg",
      idealFor: [
        "History lovers",
        "Photographers",
        "Couples",
        "Solo travelers",
      ],
      startingLocation: "Galata Tower",
      difficulty: 3,
      teamSize: "1-3 players",
      playTime: "2-2.5 hours",
      distance: "3.2 km",
      languages: ["English"],
      playedBy: 0,
      highlights: [
        "Galata Tower",
        "Serpentine Streets",
        "Historic Passages",
        "Golden Horn Views",
      ],
      available: false,
    },
    {
      id: "coming-soon-2",
      title: "Bosphorus Mysteries",
      location: "Ortaköy, Istanbul",
      description:
        "Follow the shores of the Bosphorus and uncover stories of palaces, fishermen, and the meeting of two continents. Solve puzzles that reveal the soul of Istanbul's most famous waterway.",
      image: "/coming-soon.jpg",
      idealFor: [
        "Romantic couples",
        "Nature lovers",
        "Architecture enthusiasts",
      ],
      startingLocation: "Ortaköy Square",
      difficulty: 3,
      teamSize: "2-4 players",
      playTime: "2 hours",
      distance: "4.1 km",
      languages: ["English"],
      playedBy: 0,
      highlights: [
        "Ortaköy Mosque",
        "Bosphorus Bridges",
        "Waterfront Palaces",
        "Continental Divide",
      ],
      available: false,
    },
  ];

  const GameCard = ({ game }: { game: (typeof games)[0] }) => (
    <Card className="border border-gray-200 shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="relative h-64 bg-gradient-to-br from-primary-400 to-primary-600">
        {game.available ? (
          <Image
            src={game.image}
            alt={game.title}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
            <div className="text-white text-center">
              <Calendar className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p className="text-lg font-light">Coming Soon</p>
            </div>
          </div>
        )}
        {!game.available && (
          <div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
            Coming Soon
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{game.title}</h3>
          {game.available && (
            <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
              <Star className="h-3 w-3 mr-1 fill-current" />
              Available
            </div>
          )}
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{game.location}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {game.description}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">
            Ideal for:
          </h4>
          <div className="flex flex-wrap gap-1">
            {game.idealFor.map((item, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          {game.available ? (
            <Link href={`/${game.id}`} className="flex-1">
              <Button className="w-full bg-secondary-500 hover:bg-secondary-600 text-white">
                Play Game
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Button
              disabled
              className="w-full bg-gray-300 text-gray-500 cursor-not-allowed"
            >
              Coming Soon
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const featuredGame = games[0]; // Hippodrome is the featured game

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
              Choose Your Adventure
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed">
              Explore Istanbul's hidden stories through interactive outdoor
              escape games
            </p>
          </div>
        </div>
      </section>

      {/* Available Games Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
                Available Games
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Start with our featured adventure or explore upcoming games
              </p>
            </div>

            {/* Featured Game Banner */}
            <Card className="border border-gray-200 shadow-lg rounded-2xl overflow-hidden mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Section */}
                <div className="relative h-64 lg:h-full min-h-[400px] bg-gradient-to-br from-primary-400 to-primary-600">
                  {featuredGame.available ? (
                    <Image
                      src={featuredGame.image}
                      alt={featuredGame.title}
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <Calendar className="h-16 w-16 mx-auto mb-4 opacity-50" />
                        <p className="text-xl font-light">Coming Soon</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex items-center mb-2">
                    <Sparkles className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-sm font-semibold text-yellow-600">
                      FEATURED GAME
                    </span>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
                    {featuredGame.title}
                  </h2>

                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredGame.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Starting Location
                      </h4>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{featuredGame.startingLocation}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Ideal For
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {featuredGame.idealFor
                          .slice(0, 3)
                          .map((item, index) => (
                            <span
                              key={index}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                            >
                              {item}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>

                  {/* Features Banner */}
                  <Card className="bg-primary-50 border-primary-200 mb-6">
                    <CardContent className="p-4">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">
                            Difficulty
                          </div>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < featuredGame.difficulty
                                    ? "fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">
                            Team Size
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Users className="h-4 w-4 mr-1" />
                            {featuredGame.teamSize}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">
                            Play Time
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="h-4 w-4 mr-1" />
                            {featuredGame.playTime}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">
                            Distance
                          </div>
                          <div className="text-gray-600">
                            {featuredGame.distance}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">
                            Languages
                          </div>
                          <div className="text-gray-600">
                            {featuredGame.languages.join(", ")}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">
                            Played By
                          </div>
                          <div className="text-gray-600">
                            {featuredGame.playedBy} explorers
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Highlights Banner */}
                  <Card className="bg-secondary-50 border-secondary-200 mb-6">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Highlights along the route:
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {featuredGame.highlights.map((highlight, index) => (
                          <div
                            key={index}
                            className="flex items-center text-gray-700"
                          >
                            <div className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></div>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {featuredGame.available && (
                    <Link href={`/${featuredGame.id}`}>
                      <Button className="w-full bg-secondary-500 hover:bg-secondary-600 text-white py-4 text-lg">
                        Start Hippodrome Adventure
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </Card>

            {/* All Games Grid */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-8 text-center">
                More Adventures
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {games.map((game, index) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Ready to Explore Istanbul?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Start your adventure today and discover the hidden stories of this
              magnificent city.
            </p>
            <Link href="/how-to-play">
              <Button
                variant="outline"
                className="border-primary-300 text-primary-700 hover:bg-primary-50 px-8 py-4 rounded-lg font-normal text-lg"
              >
                Learn How to Play
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GamesPage;
