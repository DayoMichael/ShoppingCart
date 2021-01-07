import { cart } from './cart.js'

//function to check if a product about to  be added already exist in the cart session.
export function checkRepeated(product){
    if (cart.productInCart.some(food => food.id ===product.id)){
        console.log('item present')
        alert('This item has already been added to the cart before.')
           
        return
    }else {
        cart.productInCart.push(product)  
        return
    }; 
}