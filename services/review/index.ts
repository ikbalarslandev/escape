import { games } from "./lib/games";
import { generateData } from "./lib/func";

// delete the data folder under services/review/data.

for (const game of games) {
  generateData({
    name: game.name,
    locationId: game.id,
  });
}
