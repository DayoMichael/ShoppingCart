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
}

//

let product1 = new Food("Fried-Rice", 2000, "Food", 1 , 1, "../img/food1.jpg")
let product2 = new Food("Eba", 500, "Food", 2, 1, "../img/food1.jpg")
let product3 = new Food("pounded-Yam", 1000, "Food", 2.5, 1, "../img/food1.jpg")
let product4 = new Food("Fish-Sauce", 500, "Food", 1, 1, "../img/food1.jpg")
let product5 = new Food("Doughnut", 500, "Snacks", 0, 1, "../img/food1.jpg")
let product6 = new Food("Sausage", 400, "Snacks", 0 , 1, "../img/food1.jpg")
let product7 = new Food("Meat-Pie", 500, "Snacks", 0, 1, "../img/food1.jpg")
let product8 = new Food("Chicken-Pie", 900, "Snacks", 0, 1, "../img/food1.jpg")
let product9 = new Food("Malt", 100, "Drinks", 0.2, 1, "../img/food1.jpg")
let product10 = new Food("Sprit", 100 , "Drinks", 0.2, 1, "../img/food1.jpg")
let product11 = new Food("Fanta", 100, "Drinks", 0.3, 1, "../img/food1.jpg")
let product12 = new Food("Coke", 100 , "Drinks", 0.3, 1, "../img/food1.jpg")

let products = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12]
let cart = new Cart()

// This is to iterate through the products array and update the products in the appropriate session
products.forEach(product => {
    product.idgenerator
    let productitems = document.createElement('div')
    productitems.classList.add('food-item',product.id)
    
    let productHtml = `
        
        <div class = "cart-row  ${product.id}"  >
            <img class = "product-image" src="${product.img}" alt="img">
            <h3 class = "product-title" >${product.title}</h3>
            <h5 class = "product-price">#${product.price}</h3>
            <h5 class = "product-kg">${product.weight}kg</h5>
            <input class= "product-quantity-input" type="number" id="quantity" name="qauntity" style = "width: 65px" placeholder="Quantity" value="${product.qty}"> <br>
            
            <h5> <button class = "add-cart cart1" href="#" type ='button'>Add to Cart</button></h5>
        </div>
        
    `
  //the product.cat matches with the class names of the different product sessions
   let parent = document.getElementsByClassName(product.cat)[0];
   productitems.innerHTML = productHtml
   parent.append(productitems);
   quantityChange()
});

// event listener for the add to cart button
addToCarts = document.getElementsByClassName ('add-cart');
for  (let i = 0; i< addToCarts.length; i++) {
    let addToCart = addToCarts[i];
    addToCart.addEventListener('click', addToCartClicked);
    console.log('i have been added')
};

// function to get the parentelement, the id attached to the product clicked, and the product in the array
function getProduct(event){
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

//fu
function addToCartClicked(event){
    let productAddedToCart = getProduct(event)
    cart.addToCart(productAddedToCart[0])
    console.log(cart.productInCart)
}



console.log(cart.productInCart)
let cartItems = document.getElementsByClassName('cart-items')[0]
cartItemsName = cartItems.getElementsByClassName('cart-item-title');
cartItems.innerHTML = ''

// function to add an item to  the cart session
function added () {
cart.productInCart.forEach(product => {
        let cartRow = document.createElement('div')
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

//function to check if a product about to  be added already exist in the cart session.
function checkRepeated(product){
    if (cart.productInCart.some(food => food.id ===product.id)){
        console.log('item present')
        alert('This item has already been added to the cart before.')
           
        return
    }else {
        cart.productInCart.push(product)  
        return
    }; 
}

//event listener for 'remove from cart' button
function removeItem () {
    removeFromCart = document.getElementsByClassName ('remove-btn');
    for  (let i = 0; i< removeFromCart.length; i++) {
        let removeFromCarts = removeFromCart[i];
        removeFromCarts.addEventListener('click', removeFromCartClicked);
        console.log('remove clicked')
    };
    
    
}
//function to pass the event listener into other functions
function removeFromCartClicked(event){
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
// function to listen to quantity change
function quantityChange(){
    quantityOfItems = document.getElementsByClassName ("product-quantity-input");
    for (let i = 0; i< quantityOfItems.length; i++) {
        let inputs = this.quantityOfItems[i];
        inputs.addEventListener('change', quantityChanged);
      
         
    };
    totalPrice()
    totalQuantity()
}
// function to get what the input has been changed to and assign it to the quantity of that particular item in the array.
function quantityChanged (event) {
    let inputs = event.target
    if (isNaN(inputs.value) || inputs.value <= 0) {
        inputs.value = 1
    } 
    outcome = getProduct(event)
    console.log(this.value)
    outcome[0].qty= this.value
    console.log(outcome[0].qty)
    
}
//function to get the total price
function totalPrice(){
    var total = 0

    cart.productInCart.forEach(product => {
        return total += product.totalPrice

    })
    cart.getCartTotal(total)
    
}
//function to get the total quantity in the cart
function totalQuantity(){
    var totalQty = 0

    cart.productInCart.forEach(product => {
        return totalQty += parseFloat(product.qty)

    })
    cart.getQuantityTotal (totalQty)

}
