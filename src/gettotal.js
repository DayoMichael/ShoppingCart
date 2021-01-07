

import { cart } from './cart.js'
//function to get the total price
export function totalPrice(){
    var total = 0

    cart.productInCart.forEach(product => {
        return total += product.totalPrice

    })
    cart.getCartTotal(total)
}

//function to get the total quantity
export function totalQuantity(){
    var totalQty = 0

    cart.productInCart.forEach(product => {
        return totalQty += parseFloat(product.qty)

    })
    cart.getQuantityTotal (totalQty)

}