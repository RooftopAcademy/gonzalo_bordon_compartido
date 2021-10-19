import FavoritesAPI from "../classes/FavoritesAPI";

module.exports = function favoritesPut(req: any, res: any) {
  const createState: boolean = new FavoritesAPI(req.params).toggleFavorites();

  res.json({
    createState,
  });
};
