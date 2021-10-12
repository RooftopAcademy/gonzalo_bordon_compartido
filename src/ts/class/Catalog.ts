import apiProduct from "../interfaces/ApiProduct";
import Product from "../interfaces/Product";

export default class Catalog {
    public static convertProducts(
        apiProducts: apiProduct[],
        page: number
    ): Product[] {
        const PRODUCTS: Product[] = [];

        apiProducts.splice(0, (page - 1) * 10);
        apiProducts.slice(0, 10).forEach(product => {
            PRODUCTS.push(Catalog.generateProduct(product))
        })

        return PRODUCTS
    }

    public static convertProduct(
        product: apiProduct
    ): Product {
        return Catalog.generateProduct(product)
    }

    private static generateProduct(
        product: apiProduct
    ): Product {
        return {
            image: "src/img/noprew-index.png",
            title: product.title,
            desc: product.body,
            price: product.body.length * 20,
            caracts: {
                "Caraterística 1": "Especificación 1",
                "Caraterística 2": "Especificación 2",
                "Caraterística 3": "Especificación 3",
                "Caraterística 4": "Especificación 4",
                "Caraterística 5": "Especificación 5"
            },
            cod: product.id
        }
    }
}