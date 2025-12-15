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
import { FaInstagram, FaTrophy, FaCrown } from "react-icons/fa";
import { FaUser, FaChartLine } from "react-icons/fa6";
import BannerReviewsSection from "@/components/pages/home/bannerReviews";

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
  const playersWithAllGames = playersData.filter((p) => p.games.length === 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/20 pt-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 mx-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg">
                  <FaTrophy className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent">
                  Players Dashboard
                </h1>
              </div>
              <p className="text-gray-600 mt-1 text-lg">
                Each player is important for us.
              </p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex md:flex-row gap-4 mb-8">
            <div className="flex-1 bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-2xl p-5 shadow-sm">
              <div className="flex flex-col items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {playersData.length}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Total Players
                  </div>
                </div>
                <div className="p-3 bg-blue-100 rounded-xl">
                  <FaUser className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="flex-1 bg-gradient-to-br from-white to-purple-50 border border-purple-100 rounded-2xl p-5 shadow-sm">
              <div className="flex flex-col items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {playersWithAllGames.length}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    All-Star Players
                  </div>
                </div>
                <div className="p-3 bg-purple-100 rounded-xl">
                  <FaCrown className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white  shadow-xl border border-gray-200 overflow-hidden mb-12">
          {/* Table Header */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaChartLine className="h-5 w-5 text-gray-600" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Player Participation
                </h2>
              </div>
              <Badge
                variant="outline"
                className="bg-blue-50 text-blue-700 border-blue-200"
              >
                Active Players
              </Badge>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gray-50/50">
                <TableRow className="hover:bg-transparent border-b border-gray-200">
                  <TableHead className="py-5 px-6">
                    <div className="flex items-center gap-2 text-gray-700 font-semibold">
                      <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg">
                        <span className="text-gray-600 font-mono">#</span>
                      </div>
                      <span>Number</span>
                    </div>
                  </TableHead>
                  <TableHead className="py-5 px-6 text-gray-700 font-semibold">
                    Player Details
                  </TableHead>
                  <TableHead className="py-5 px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-purple-100/50 border border-purple-200 rounded-xl">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="font-semibold text-purple-800">
                        Hippodrome
                      </span>
                    </div>
                  </TableHead>
                  <TableHead className="py-5 px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-emerald-100/50 border border-emerald-200 rounded-xl">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="font-semibold text-emerald-800">
                        Game 2
                      </span>
                    </div>
                  </TableHead>
                  <TableHead className="py-5 px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200 rounded-xl">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="font-semibold text-amber-800">
                        Game 3
                      </span>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {playersData.map((player, index) => (
                  <TableRow
                    key={player.number}
                    className={`group transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-blue-50/30 ${
                      index % 2 === 0 ? "bg-gray-50/30" : ""
                    } border-b border-gray-100 last:border-0`}
                  >
                    <TableCell className="py-5 px-6">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                            <span className="text-white font-bold text-lg">
                              {player.number}
                            </span>
                            {player.games.length === 3 && (
                              <div className="absolute -top-1 -right-1">
                                <div className="p-1 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow">
                                  <FaCrown className="h-2 w-2 text-white" />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-medium text-gray-500">
                            Player
                          </span>
                          <span className="text-sm font-semibold text-gray-700">
                            #{player.number}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-5 px-6">
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-3 rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105 ${
                            player.instagram
                              ? "bg-gradient-to-br from-pink-500 via-rose-500 to-purple-500"
                              : "bg-gradient-to-br from-gray-600 to-gray-800"
                          }`}
                        >
                          {player.instagram ? (
                            <FaInstagram className="h-5 w-5 text-white" />
                          ) : (
                            <FaUser className="h-5 w-5 text-white" />
                          )}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-lg">
                            {player.instagram ? (
                              <div className="flex items-center gap-2">
                                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                  @{player.instagram}
                                </span>
                                <Badge
                                  variant="outline"
                                  className="border-pink-200 text-pink-700 bg-pink-50 text-xs"
                                >
                                  IG
                                </Badge>
                              </div>
                            ) : (
                              player.name
                            )}
                          </div>
                          {player.instagram && (
                            <div className="text-sm text-gray-600 mt-1 flex items-center gap-2">
                              <FaUser className="h-3 w-3" />
                              {player.name}
                            </div>
                          )}
                          <div className="flex items-center gap-2 mt-2">
                            <Badge
                              variant="secondary"
                              className="bg-blue-100 text-blue-700 border-blue-200 text-xs"
                            >
                              {player.games.length} game
                              {player.games.length !== 1 ? "s" : ""}
                            </Badge>
                            {player.games.length === 3 && (
                              <Badge
                                variant="outline"
                                className="bg-gradient-to-r from-yellow-50 to-amber-50 text-amber-700 border-amber-200 text-xs gap-1"
                              >
                                <FaCrown className="h-2.5 w-2.5" />
                                All-Star
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    {[1, 2, 3].map((gameNumber) => (
                      <TableCell key={gameNumber} className="py-5 px-6">
                        <div className="flex justify-center">
                          <div
                            className={`flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                              player.games.includes(gameNumber)
                                ? gameNumber === 1
                                  ? "bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 shadow-sm"
                                  : gameNumber === 2
                                  ? "bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200 shadow-sm"
                                  : "bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200 shadow-sm"
                                : "bg-gray-50 border-2 border-gray-200"
                            }`}
                          >
                            <Checkbox
                              checked={player.games.includes(gameNumber)}
                              disabled
                              className={`h-7 w-7 transition-transform duration-300 ${
                                player.games.includes(gameNumber)
                                  ? gameNumber === 1
                                    ? "data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-600 data-[state=checked]:to-purple-700 data-[state=checked]:border-0 shadow-md"
                                    : gameNumber === 2
                                    ? "data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-emerald-600 data-[state=checked]:to-emerald-700 data-[state=checked]:border-0 shadow-md"
                                    : "data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-amber-600 data-[state=checked]:to-amber-700 data-[state=checked]:border-0 shadow-md"
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

          {/* Table Footer */}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50/50">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Hippodrome</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span>Game 2</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span>Game 3</span>
                </div>
              </div>
              <div className="text-sm text-gray-700">
                <span className="font-medium">{playersData.length}</span>{" "}
                players •{" "}
                <span className="font-medium">
                  {playersWithAllGames.length}
                </span>{" "}
                All-Stars
              </div>
            </div>
          </div>
        </div>

        <BannerReviewsSection />
      </div>
    </div>
  );
}
