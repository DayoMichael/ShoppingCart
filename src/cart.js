import { checkRepeated } from './checkRepeated.js'
import { added } from './addtocart.js'


class Cart {
	constructor () {
  	this.productInCart = []
  }
   // to add to the cart session
  addToCart (productt) {
      checkRepeated(productt)  
      added()
      console.log(productt)
    }
  // to remove from the cart session
  removeFromCart (product, productPos) {
     product.parentElement.remove()
     this.productInCart.splice(productPos, 1)
     console.log(this.productInCart)
    }
  // to get the total amount from
  getCartTotal (total) {
    document.getElementsByClassName('grandTotal')[0].innerText = " # "+ total
  	
  }
  getQuantityTotal (totalQty){
    document.getElementsByClassName('cart-amount')[0].innerText = totalQty
   }
};

let cart = new Cart();

export {cart} ;