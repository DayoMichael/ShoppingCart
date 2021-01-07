import {products} from './productsection.js'


// function to get the parentelement, the id attached to the product clicked, and the product in the array
export function getProduct(event){
    let cartAddition = event.target
    let parentItemClicked = cartAddition.parentElement.parentElement;
    let idClicked = parentItemClicked.className.replace('food-item ' , '').replace('cart-row  '   , '')
    let product = products.find(product => {
        return product.id ===idClicked
    });
    console.log('this -->',product)
    console.log('then this -->',parentItemClicked)
    return [product , parentItemClicked, idClicked]
    
   
};