"use client";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaInstagram } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import BannerReviewsSection from "@/components/pages/home/bannerReviews";

// Mock data from your JSON
const playersData = [
  {
    number: 1,
    name: "Ikbal Arslan",
    games: [1, 2],
  },
  {
    number: 2,
    name: "Elif Demir",
    instagram: "elif.demir",
    games: [1],
  },
  {
    number: 3,
    name: "Mehmet Kaya",
    games: [2, 3],
  },
  {
    number: 4,
    name: "Ayşe Yılmaz",
    instagram: "ayse.yilmaz",
    games: [1, 3],
  },
  {
    number: 5,
    name: "Can Özkan",
    games: [2],
  },
  {
    number: 6,
    name: "Zeynep Aydın",
    instagram: "zeynep.aydin",
    games: [1, 2, 3],
  },
  {
    number: 7,
    name: "Burak Şahin",
    games: [3],
  },
  {
    number: 8,
    name: "Ece Koç",
    instagram: "ece.koc",
    games: [2, 3],
  },
  {
    number: 9,
    name: "Kerem Polat",
    games: [1],
  },
  {
    number: 10,
    name: "Melis Karaca",
    instagram: "melis.karaca",
    games: [1, 2],
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Players Dashboard
              </h1>
              <p className="text-gray-600 mt-1">
                Each player is really important for us.
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto border rounded-2xl">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow className="hover:bg-transparent">
                <TableHead className="font-semibold text-gray-700 py-4 px-6 border-b">
                  <div className="flex items-center gap-2">Number</div>
                </TableHead>
                <TableHead className="font-semibold text-gray-700 py-4 px-6 border-b">
                  Player
                </TableHead>
                <TableHead className="font-semibold text-gray-700 py-4 px-6 border-b text-center">
                  <Badge
                    variant="outline"
                    className="bg-purple-50 text-purple-700 border-purple-200"
                  >
                    Hippodrome
                  </Badge>
                </TableHead>
                <TableHead className="font-semibold text-gray-700 py-4 px-6 border-b text-center">
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 border-green-200"
                  >
                    Game 2
                  </Badge>
                </TableHead>
                <TableHead className="font-semibold text-gray-700 py-4 px-6 border-b text-center">
                  <Badge
                    variant="outline"
                    className="bg-orange-50 text-orange-700 border-orange-200"
                  >
                    Game 3
                  </Badge>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {playersData.map((player) => (
                <TableRow
                  key={player.number}
                  className="hover:bg-gray-50 transition-colors duration-150 border-b last:border-0"
                >
                  <TableCell className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg shadow">
                        <span className="text-white font-bold text-lg">
                          {player.number}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          player.instagram
                            ? "bg-gradient-to-br from-pink-500 to-purple-500"
                            : "bg-gradient-to-br from-gray-500 to-gray-700"
                        }`}
                      >
                        {player.instagram ? (
                          <FaInstagram className="h-5 w-5 text-white" />
                        ) : (
                          <FaUser className="h-5 w-5 text-white" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {player.instagram ? (
                            <span className="flex items-center gap-2">
                              @{player.instagram}
                              {/* <span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full">
                                Instagram
                              </span> */}
                            </span>
                          ) : (
                            player.name
                          )}
                        </div>
                        {player.instagram && (
                          <div className="text-sm text-gray-500 mt-0.5">
                            {player.name}
                          </div>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  {[1, 2, 3].map((gameNumber) => (
                    <TableCell key={gameNumber} className="py-4 px-6">
                      <div className="flex justify-center">
                        <div
                          className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                            player.games.includes(gameNumber)
                              ? gameNumber === 1
                                ? "bg-purple-100 border-2 border-purple-200"
                                : gameNumber === 2
                                ? "bg-green-100 border-2 border-green-200"
                                : "bg-orange-100 border-2 border-orange-200"
                              : "bg-gray-100 border-2 border-gray-200"
                          }`}
                        >
                          <Checkbox
                            checked={player.games.includes(gameNumber)}
                            disabled
                            className={`h-6 w-6 ${
                              player.games.includes(gameNumber)
                                ? gameNumber === 1
                                  ? "data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                                  : gameNumber === 2
                                  ? "data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                                  : "data-[state=checked]:bg-orange-600 data-[state=checked]:border-orange-600"
                                : ""
                            }`}
                          />
                        </div>
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <BannerReviewsSection />
      </div>
    </div>
  );
}
