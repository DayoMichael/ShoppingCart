import {addToCartClicked} from './addtocart.js'
import { quantityChanged } from './quantitychange.js'
import { removeFromCartClicked} from './removeItem.js'
import { totalPrice } from './gettotal.js'
import { totalQuantity } from './gettotal.js'
// import { onSignIn } from './signin.js'


// event listener for the add to cart button
export function addEventListener(){
    let addToCarts = document.getElementsByClassName ('add-cart');
    console.log('addtocarts', addToCarts.length)
   
    for  (let i = 0; i< addToCarts.length; i++) {
        let addToCart = addToCarts[i];
        addToCart.addEventListener('click', addToCartClicked);   
    }; 
}

// function to listen to quantity change
export function quantityChange(){
    let quantityOfItems = document.getElementsByClassName ("product-quantity-input");
    console.log('quantity', quantityOfItems)
    for (let i = 0; i< quantityOfItems.length; i++) {
        let inputs = quantityOfItems[i];
        inputs.addEventListener('change', quantityChanged);  
    };
    totalPrice()
    totalQuantity()
}

//event listener for 'remove from cart' button
export function removeItem () {
    let removeFromCart = document.getElementsByClassName ('remove-btn');
    for  (let i = 0; i< removeFromCart.length; i++) {
        let removeFromCarts = removeFromCart[i];
        removeFromCarts.addEventListener('click', removeFromCartClicked);
        console.log('remove clicked')
    };  
}

//event listener for the google signin button
export function googleSignIn () {
    let signIn = document.getElementsByClassName ('g-signin');
    for  (let i = 0; i< signIn.length; i++) {
        let signIns = signIn[i];
        signIn.addEventListener('click', onSignIn);
        console.log('google signin clicked')
    };  
}
