import { favoritesArray } from "../types/favorites";

import FavoritesAPI from "../classes/FavoritesAPI";

module.exports = function favoritesIDsPost(req: any, res: any) {
  const favorites: favoritesArray = new FavoritesAPI(req.params).getFavorites();
  return res.json({
    favorites,
  });
};
