const shippingWeightPricePerKg = 1000
class Food {
	constructor (title, price, category, weight, qty, img) {
  	this.title= title
    this.price = price
    this.cat= category
    this.weight = weight
    this.qty = qty
    this.img = img
    this.id = " "
}
  
  get idgenerator() {
    var random_string = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz'
    for(var i, i = 0; i < 6; i++){
        random_string += characters.charAt(Math.floor(Math.random() * characters.length))
    };
    return this.id = random_string
   
  }
  
  get shippingPrice() {
  	return this.weight * shippingWeightPricePerKg
  }
  
  get productPrice () {
  	return (this.qty * this.price) 
  }
  
  get totalPrice () {
  	return this.productPrice + this.shippingPrice
  }
}

export {Food};