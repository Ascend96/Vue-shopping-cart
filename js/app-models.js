function ShopCollection(){
    this.__proto__ = [];

    this.addProduct = function(item){
        this.push(new ShopItem(item))

        return this;
    }
}

function CartCollection(){
    this.__proto__ = [];

    this.addToCart = function(item){
        this.push(new ShopItem(item))
        console.log(JSON.stringify(item))
        return this;
    }
}





function ShopItem() {
    const STOCK = {OUT_OF_STOCK : 'out of stock', IN_STOCK: 'in stock'};

    // set default stock
    this.stock = STOCK.IN_STOCK;

    // methods
    this.inStock = function(){
        return this.stock === STOCK.IN_STOCK;
    }

    this.outOfStock = function () {
        this.stock = STOCK.OUT_OF_STOCK;
    }

    this.isAvailable = function (){
        return this.stock === STOCK.IN_STOCK;
    }


}

    function Mobile(name, price, make){
        // call the parent (product) constructor function
      //  ShopItem.call(this);

        this.name = name;
        this.price = price;
        this.make = make;
    }
    // set parent/prototype
    Mobile.prototype = Object.create(ShopItem.prototype);
    // reset the constructor
    Mobile.prototype.constructor = Mobile;

    function SmartDevice( name, price, make, size){
      //  ShopItem.call(this);

        this.name = name;
        this.price = price;
        this.make = make;
        this.size = size;
    }

    SmartDevice.prototype = Object.create(ShopItem.prototype);

    SmartDevice.prototype.constructor = SmartDevice;

    function Laptop(name, price, make, size, storage){
    //    ShopItem.call(this);

        this.name = name;
        this.price = price;
        this.make = make;
        this.size = size;
        this.storage = storage;
    }

    Laptop.prototype = Object.create(ShopItem.prototype);

    Laptop.prototype.constructor = Laptop;

    // class Tablet extends ShopItem{
    //     constructor(name, price, make, size) {
    //         super();
    //         this.name = name;
    //         this.price = price;
    //         this.make = make;
    //         this.size = size;
    //     }
    // }
    //
    // class Computer extends ShopItem{
    //     constructor(name, price, make, size, storage) {
    //         super();
    //         this.name = name;
    //         this.price = price;
    //         this.make = make;
    //         this.size = size;
    //         this.storage = storage;
    //
    //     }
    //
    // }







