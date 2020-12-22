const pricePerKg = 1000
class Food {
    constructor(title, price, weight, img, quantity){
        this.title = title;
        this.price = price;
        this.weight = weight;
        this.img = img;
        this.quantity = quantity;
    };
    get shippingPrice(){
        return this.weight * pricePerKg 
    };
    get productPrice(){
        return this.quantity * this.price
    };
    get unitTotal(){
        return productPrice + this.shippingPrice
    };
};

class Cart{
    addToCarts(Product){
        let cartRow = document.createElement('div');
        cartRow.classList.add('cart-row');
        let cartItems = document.getElementsByClassName('cart-items')[0]
        let cartItemsName = cartItems.getElementsByClassName('cart-item-title');
        console.log('add to cart clicked')
        
        for (let i=0 ; i < cartItemsName.length; i++){
            if (cartItemsName[i].innerText == productTitle){
                alert ('This item has already been to the cart before.')
                return
            };
        };
        
        let cartRowContents = ` 
            
            <div class= "cart-product-image"> <img src="${productImage}" width = 100 height = 90 ></img> <br>
            <span class ="cart-item-title">${productTitle}</span>
            </div> 
            <div class= "cart-product-price"> <div > ${productPrice}</div> 
            </div>
            <div class = "cart-product-quantity"> <input class = "product-quantity-input" type="number" id="quntity" 
            name="quntity" style = "width: 65px" placeholder="${productQuantity}" value="${productQuantity}" >  <br>
            </td>
            </div>
            <div class = "cart-product-kg"> ${productWeight}kg </div>
            <div class = "cart-shipping-fee" >  ${Product.shippingPrice}</div>
            
            <div > <ion-icon name ="close-circle" class= "remove-btn"></ion-icon></div>


        `
        cartRow.innerHTML =cartRowContents;
        cartItems.append(cartRow)

        console.log(cartRow)

    };
    updateCartTotal(){
        
        let cartItemContainer = document.getElementsByClassName("cart-items")[0]
        let cartRow = cartItemContainer.getElementsByClassName("cart-row")
        let total = 0
        let totalProduct = 0

        for (let i=0 ; i < cartRow.length; i++) {
            let cartRows = cartRow[i]
            let priceOfItem = cartRows.getElementsByClassName ("cart-product-price")[0]
            let priceOfShipping = cartRows.getElementsByClassName ("cart-shipping-fee")[0]
            let quantityOfItem = cartRows.getElementsByClassName ("product-quantity-input")[0]
    
            let shippingPrice = parseFloat(priceOfShipping.innerText.replace('#', ''))
            let productPrice = parseFloat(priceOfItem.innerText)
            let productQuantity = parseFloat(quantityOfItem.value)
    
            total = total + ((productPrice*productQuantity) + shippingPrice)
            totalProduct = totalProduct +productQuantity
            console.log ( priceOfItem , priceOfShipping , quantityOfItem)
            console.log(shippingPrice, productPrice, productQuantity , total)
            console.log(totalProduct)
        };
        document.getElementsByClassName('grandTotal')[0].innerText = " # "+ total
        document.getElementsByClassName('cart-amount')[0].innerText = totalProduct

    };
};

let cart = new Cart()


function addToCart (){
    let addToCartss = document.getElementsByClassName ('add-cart');
    for  (let i = 0; i < addToCartss.length; i++) {
        let addToCart = addToCartss[i];
        addToCart.addEventListener('click', addToCartClicked);
        console.log('addedd')
    };
};

function addToCartClicked (event){
    cartAddition = event.target
    foodItems = cartAddition.parentElement.parentElement ;
    productImage = foodItems.getElementsByClassName('product-image')[0].src;
    productTitle = foodItems.getElementsByClassName('product-title')[0].innerText;
    productPrice = parseFloat(foodItems.getElementsByClassName('product-price')[0].innerText.replace('#',''));
    productWeight = parseFloat(foodItems.getElementsByClassName('product-kg')[0].innerText.replace('kg',''));
    productQuantity = parseFloat (foodItems.getElementsByClassName('product-quantity-input')[0].value);
    console.log (productWeight,productImage,productQuantity, productTitle)

    let Product = new Food(productTitle, productPrice, productWeight , productImage, productQuantity);

    cart.addToCarts(Product);
    cart.updateCartTotal()
    quantityChange()
    removeItem()
}

function quantityChange (){
    let quantityOfItems = document.getElementsByClassName ("product-quantity-input");
    for (let i = 0; i< quantityOfItems.length; i++) {
        let inputs = quantityOfItems[i];
        inputs.addEventListener('change', quantityChanged);  
    };
};

function quantityChanged (event) {
    let inputs = event.target
    if (isNaN(inputs.value) || inputs.value <= 0) {
        inputs.value = 1
    } 
    cart.updateCartTotal()
}

function removeItem () {
    let removeBtn = document.getElementsByClassName('remove-btn')
    for (let i=0 ; i < removeBtn.length; i++) {
        let removeBtns = removeBtn[i];
        removeBtns.addEventListener('click',(event) => {
            let removeClicked = event.target
            removeClicked.parentElement.parentElement.remove()   

            cart.updateCartTotal ();

        });
    };
};



                
                    
quantityChange()
addToCart()
removeItem()
