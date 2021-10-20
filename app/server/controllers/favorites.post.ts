import { favoritesArray } from "../types/favorites";

import FavoritesAPI from "../classes/FavoritesAPI";
import ProductsAPI from "../classes/ProductsAPI";

module.exports = function favoritesPost(req: any, res: any) {
  const IDList: favoritesArray = new FavoritesAPI(req.params).getFavorites();
  const favorites = new ProductsAPI({
    body: {
      IDList,
    },
  }).getProductsById();
  return res.json({
    favorites,
  });
};
