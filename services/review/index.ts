import { games } from "./lib/games";
import {
  generateData,
  deleteDataFolder,
  generateReviewsForAllGames,
} from "./lib/func";

async function Review() {
  deleteDataFolder();

  for (const game of games) {
    await generateData({
      name: game.name,
      locationId: game.id,
    });
  }

  generateReviewsForAllGames(games);
}

Review();
