
import { Food } from './fooditem.js'
import { quantityChange } from './app.js'


let product1 = new Food("Fried-Rice", 2000, "Food", 1 , 1, "./src/img/food1.jpg")
let product2 = new Food("Eba", 500, "Food", 2, 1, "./src/img/food1.jpg")
let product3 = new Food("pounded-Yam", 1000, "Food", 2.5, 1, "./src/img/food1.jpg")
let product4 = new Food("Fish-Sauce", 500, "Food", 1, 1, "./src/img/food1.jpg")
let product5 = new Food("Doughnut", 500, "Snacks", 0, 1, "./src/img/food1.jpg")
let product6 = new Food("Sausage", 400, "Snacks", 0 , 1, "./src/img/food1.jpg")
let product7 = new Food("Meat-Pie", 500, "Snacks", 0, 1, "./src/img/food1.jpg")
let product8 = new Food("Chicken-Pie", 900, "Snacks", 0, 1, "./src/img/food1.jpg")
let product9 = new Food("Malt", 100, "Drinks", 0.2, 1, "./src/img/food1.jpg")
let product10 = new Food("Sprit", 100 , "Drinks", 0.2, 1, "./src/img/food1.jpg")
let product11 = new Food("Fanta", 100, "Drinks", 0.3, 1, "./src/img/food1.jpg")
let product12 = new Food("Coke", 100 , "Drinks", 0.3, 1, "./src/img/food1.jpg")


// src\img\beansandplantain.jpg

let products = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12]


export function productSect() {
    products.forEach(product => {
        product.idgenerator
        let productitems = document.createElement('div')
        productitems.classList.add('food-item',product.id)
        
        let productHtml = `
            
            <div class = "cart-row  ${product.id}"  >
                <img class = "product-image" src="${product.img}" alt="img">
                <h3 class = " is-size-3 has-text-warning product-title " >${product.title}</h3>
                <h5 class = "product-price">#${product.price}</h3>
                <h5 class = "product-kg">${product.weight}kg</h5>
                <input class= " input product-quantity-input " type="number" id="quantity" name="qauntity" style = "width: 65px" placeholder="Quantity" value="${product.qty}"> <br>
                
                <h5> <button class = "button is-primary add-cart cart1" href="#" type ='button'>Add to Cart</button></h5>
            </div>
            
        `
    //the product.cat matches with the class names of the different product sessions
    let parent = document.getElementsByClassName(product.cat)[0];
    productitems.innerHTML = productHtml
    parent.append(productitems);
    quantityChange()
    });
}
export {products}
