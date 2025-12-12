import { games } from "./lib/games";
import {
  generateData,
  deleteDataFolder,
  generateReviewsForAllGames,
} from "./lib/func";

deleteDataFolder();

for (const game of games) {
  generateData({
    name: game.name,
    locationId: game.id,
  });
}

generateReviewsForAllGames(games);
