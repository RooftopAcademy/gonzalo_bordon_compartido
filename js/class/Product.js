class Product {
    constructor(image /* : string */ , 
                title /* : string */ , 
                desc /* : string */ , 
                price /* : number */ , 
                caracts /* : object */ , 
                cod /* : string | number */ 
    ) {
        this.image = image;
        this.title = title;
        this.desc = desc;
        this.price = price;
        this.caracts = caracts;
        this.cod = cod
    }
}