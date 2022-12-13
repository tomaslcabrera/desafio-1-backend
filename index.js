class ProductManager {
    constructor() {
      this.products = []; 
      this.product = Product;
    }
    
    getProducts(){
        return this.products;
    }
    addProduct(product) {
      
      if (this.getProducts().find(product => product.code === code)){
        return console.log(`El producto con el codigo ${product.code} ya existe`)
      }else{product.id = this.getProducts().length + 1;
            this.products.push(product)}
      }
    }
  class Product extends ProductManager{
    constructor(title, description, price, thumbnail, code, stock){
        super()
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail
        this.code = code;
        this.stock = stock;
    }
  }
