
import {getProduct} from './getproduct.js'
import { cart } from './cart.js'
import { removeItem } from './app.js'
import { quantityChange } from './app.js'
import { totalPrice } from './gettotal.js'
import { totalQuantity } from './gettotal.js'


export function addToCartClicked(event){
    let productAddedToCart = getProduct(event)
    cart.addToCart(productAddedToCart[0])
    console.log(cart.productInCart)
}



console.log(cart.productInCart)
let cartItems = document.getElementsByClassName('cart-items')[0]
let cartItemsName = cartItems.getElementsByClassName('cart-item-title');
cartItems.innerHTML = ''

// function to add an item to  the cart session
export function added () {
cart.productInCart.forEach(product => {
        let cartRow = document.createElement('div')
       // cartItemsName = cartItems.getElementsByClassName('cart-item-title');
        console.log(cart.productInCart)
        cartRow.classList.add('cart-row',  product.id)
        for (let i= 0 ; i < cartItemsName.length; i++){
            if (cartItemsName[i].innerText === product.title ) {
                return 
            }; 
             
        };
        
       
        /*if (cartItemsName.innerText.includes(product.title)){
            alert('This item has already been added to the cart before')
            return
        }*/
        
       
        // let cartItemsName = cartItems.getElementsByClassName('cart-item-title');
        console.log('add to cart clicked')

        
        let cartRowContents = `
        <div class = "food-item cart-row  ${product.id}"  >
            <div class= "cart-product-image"> <img src="${product.img}" width = 100 height = 90 ></img> <br>
            <span class ="cart-item-title">${product.title}</span>
            </div> 
            <div class= "cart-product-price"> <div > ${product.price}</div> 
            </div>
            <div class = "cart-product-quantity"> <input class = "product-quantity-input" type="number" id="quntity" 
            name="quntity" style = "width: 65px" placeholder="${product.qty}" value="${product.qty}" >  <br>
            </td>
            </div>
            <div class = "cart-product-kg"> ${product.weight}kg </div>
            <div class = "cart-shipping-fee" >  ${product.shippingPrice}</div>
            
        
        <div ><ion-icon type = button name ="close-circle"class= "remove-btn" ></ion-icon></div> 
        <div>
             `

        cartRow.innerHTML = cartRowContents;
        cartItems.append(cartRow)

        console.log(cartRow)
        removeItem()
        quantityChange()
        totalPrice()
        totalQuantity()
       
    });
};