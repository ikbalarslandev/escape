"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">Number</TableHead>
                  <TableHead>Player</TableHead>
                  <TableHead className="text-center">Hippodrome</TableHead>
                  <TableHead className="text-center">Game 2</TableHead>
                  <TableHead className="text-center">Game 3</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {playersData.map((player) => (
                  <TableRow key={player.number}>
                    <TableCell className="font-medium">
                      <Badge variant="secondary" className="font-bold">
                        {player.number}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        {player.instagram ? (
                          <>
                            <span className="font-medium flex items-center gap-2">
                              <FaInstagram />
                              {player.instagram}
                            </span>
                          </>
                        ) : (
                          <span className="font-medium flex items-center gap-2">
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
