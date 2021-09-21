class Product {
    static cod = 0;

    constructor(image, title, desc, price, caracts) {
        this.image = image;
        this.title = title;
        this.desc = desc;
        this.price = price;
        this.caracts = caracts;
        this.cod = ++Product.cod
    }
}