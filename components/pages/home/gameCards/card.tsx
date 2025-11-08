import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock, MapPin, Languages, Users } from "lucide-react";
import Image from "next/image";

interface GameCardProps {
  title: string;
  difficulty: number; // out of 10
  playTime: string; // e.g., "2 hours"
  kilometers: number; // e.g., 1.3
  languages: string[];
  image: string;
  isActive: boolean;
}

const GameCard = ({
  title,
  difficulty,
  playTime,
  kilometers,
  languages,
  image,
  isActive,
}: GameCardProps) => {
  return (
    <Card className="mx-2 bg-primary-800 border-primary-600 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
      {/* Game Image */}
      <div className="relative h-48">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        {!isActive && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-bold text-lg bg-primary-800/90 px-4 py-2 rounded-lg">
              Coming Soon
            </span>
          </div>
        )}
        <div className="absolute bottom-4 left-0 w-full">
          <h3
            className={`text-xl font-bold text-primary-50 ${
              isActive && "bg-primary-800/60"
            }  px-2 w-full`}
          >
            {title}
          </h3>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Difficulty */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-primary-200 text-sm">Difficulty</span>
          </div>
          <div className="flex space-x-1">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i < difficulty ? "bg-yellow-400" : "bg-primary-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Game Details Grid */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          {/* Play Time */}
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-secondary-400" />
            <div>
              <p className="text-primary-200">Duration</p>
              <p className="text-white font-semibold">{playTime}</p>
            </div>
          </div>

          {/* Distance */}
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-secondary-400" />
            <div>
              <p className="text-primary-200">Distance</p>
              <p className="text-white font-semibold">{kilometers} km</p>
            </div>
          </div>

          {/* Languages */}
          <div className="flex items-center space-x-2">
            <Languages className="w-4 h-4 text-secondary-400" />
            <div>
              <p className="text-primary-200">Language</p>
              <p className="text-white font-semibold">{languages.join(", ")}</p>
            </div>
          </div>

          {/* Players */}
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-secondary-400" />
            <div>
              <p className="text-primary-200">Recomended for</p>
              <p className="text-white font-semibold">2-4 people</p>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          className={`w-full ${
            isActive
              ? "bg-secondary-500 hover:bg-secondary-600 text-white"
              : "bg-primary-600 text-primary-300 cursor-not-allowed"
          }`}
          disabled={!isActive}
        >
          {isActive ? "Book Now" : "Coming Soon"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
