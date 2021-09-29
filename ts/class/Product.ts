

class Product {
    image : string; 
    title : string; 
    desc : string; 
    price : number; 
    caracts : {
        [index: string]: string
    }; 
    cod : string | number;

    constructor(image : string, 
                title : string, 
                desc : string, 
                price : number, 
                caracts : {
                    [index: string]: string
                }, 
                cod : string | number
    ) {
        this.image = image;
        this.title = title;
        this.desc = desc;
        this.price = price;
        this.caracts = caracts;
        this.cod = cod
    }
}