import {getProduct} from './getproduct.js'
import { cart } from './cart.js'
import { totalPrice } from './gettotal.js'
import { totalQuantity } from './gettotal.js'

//function to pass the event listener into other functions
export function removeFromCartClicked(event){
    let productRemovedFromCart = getProduct(event)
    //cart.removeFromCart(productRemovedFromCart[1],productRemovedFromCart[2])
    removeFromArray(productRemovedFromCart[1], productRemovedFromCart[2].replace('cart-row ',''))
    console.log(productRemovedFromCart[1])
    totalPrice()
    totalQuantity()
}

//function to get the index of a product clicked in the array
function removeFromArray(product, productId){
    let productPosition = cart.productInCart.find(product => {
        return product.id === productId
    })
    let productPos = cart.productInCart.indexOf(productPosition)
    cart.removeFromCart(product,productPos)
}