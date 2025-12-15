"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    instagram: "@elif.demir",
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
    instagram: "@ayse.yilmaz",
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
    instagram: "@zeynep.aydin",
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
    instagram: "@ece.koc",
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
    instagram: "@melis.karaca",
    games: [1, 2],
  },
];

export default function DashboardPage() {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);

  const filteredPlayers = selectedGame
    ? playersData.filter((player) => player.games.includes(selectedGame))
    : playersData;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Players Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            View player information and their game participation
          </p>
        </div>

        {/* Stats Cards */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Players</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{playersData.length}</div>
          </CardContent>
        </Card>

        {/* Players Table */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Players List</CardTitle>
            <CardDescription>
              Showing {filteredPlayers.length} player
              {filteredPlayers.length !== 1 ? "s" : ""}
              {selectedGame ? ` who played in Game ${selectedGame}` : ""}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">#</TableHead>
                  <TableHead>Player</TableHead>
                  <TableHead className="text-center">Game 1</TableHead>
                  <TableHead className="text-center">Game 2</TableHead>
                  <TableHead className="text-center">Game 3</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPlayers.map((player) => (
                  <TableRow key={player.number}>
                    <TableCell className="font-medium">
                      <Badge variant="secondary" className="font-bold">
                        #{player.number}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        {player.instagram ? (
                          <>
                            <span className="font-medium flex items-center gap-2">
                              <span className="text-pink-500">📸</span>
                              {player.instagram}
                            </span>
                            <span className="text-sm text-gray-500">
                              {player.name}
                            </span>
                          </>
                        ) : (
                          <span className="font-medium flex items-center gap-2">
                            <span className="text-gray-600">👤</span>
                            {player.name}
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <Checkbox
                        checked={player.games.includes(1)}
                        disabled
                        className="mx-auto"
                      />
                    </TableCell>
                    <TableCell className="text-center">
                      <Checkbox
                        checked={player.games.includes(2)}
                        disabled
                        className="mx-auto"
                      />
                    </TableCell>
                    <TableCell className="text-center">
                      <Checkbox
                        checked={player.games.includes(3)}
                        disabled
                        className="mx-auto"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* No results message */}
            {filteredPlayers.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">
                  No players found for the selected game filter.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
