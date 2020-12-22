function Run (){
    this.addToCarts = document.getElementsByClassName ('add-cart');
    for  (let i = 0; i< addToCarts.length; i++) {
        let addToCart = this.addToCarts[i];
        addToCart.addEventListener('click', addToCartClicked);
    };

    this.quantityOfItems = document.getElementsByClassName ("product-quantity-input");
    for (let i = 0; i< quantityOfItems.length; i++) {
        let inputs = this.quantityOfItems[i];
        inputs.addEventListener('change', quantityChanged);
      
         
    };
};

function addToCartClicked (event) {
    let cartAddition = event.target
    let foodItems = cartAddition.parentElement.parentElement ;
    let productImage = foodItems.getElementsByClassName('product-image')[0].src;
    let productTitle = foodItems.getElementsByClassName('product-title')[0].innerText;
    let productPrice = parseFloat(foodItems.getElementsByClassName('product-price')[0].innerText.replace('#',''));
    let kgPerPrice = parseFloat(foodItems.getElementsByClassName('product-kg')[0].innerText.replace('kg',''));
    let productQuantity = parseFloat (foodItems.getElementsByClassName('product-quantity-input')[0].value);

    
    shippingPrice = (kgPerPrice * 1000 );

    console.log(productQuantity, productTitle,productPrice, productImage, shippingPrice);
    AddedToCart(productImage, productTitle, productPrice, productQuantity, shippingPrice, kgPerPrice);
    
    RemoveItem();
    updateCartTotal(); 
}

function AddedToCart(productImage,productTitle,productPrice, productQuantity, shippingPrice, kgPerPrice){
    this.cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    this.cartItems = document.getElementsByClassName('cart-items')[0];
    this.cartItemsName = this.cartItems.getElementsByClassName('cart-item-title');
    console.log( this.cartItemsName ,",", this.productTitle);

    for (let i= 0 ; i < cartItemsName.length; i++){
        if (cartItemsName[i].innerText == productTitle ) {
            alert('This item has already been added to the cart before.')
            return
        };
    };
    alert ( productTitle + ' added')
    this.cartRowContents = `
        

        <div class= "cart-product-image"> <img src="${productImage}" width = 100 height = 90 ></img> <br>
        <span class ="cart-item-title">${productTitle}</span>
        </div> 
        <div class= "cart-product-price"> <div > ${productPrice}</div> 
        </div>
        <div class = "cart-product-quantity"> <input class = "product-quantity-input" type="number" id="quntity" name="quntity" style = "width: 65px" placeholder="${productQuantity}" value="${productQuantity}" >  <br>
            </td>
        </div>
        <div class = "cart-product-kg"> ${kgPerPrice}kg </div>
        <div class = "cart-shipping-fee" >  ${shippingPrice}</div>

        <div > <ion-icon name ="close-circle" class= "remove-btn"></ion-icon></div>
    

    `
    this.cartRow.innerHTML = this.cartRowContents;
    this.cartItems.append(cartRow);
};

function quantityChanged (event) {
    let inputs = event.target
    if (isNaN(inputs.value) || inputs.value <= 0) {
        inputs.value = 1
    } 
    updateCartTotal()
}

function RemoveItem () {
    this.removeBtn = document.getElementsByClassName('remove-btn')
    for (let i=0 ; i < removeBtn.length; i++) {
        let removeBtns = this.removeBtn[i];
        removeBtns.addEventListener('click',(event) => {
            let removeClicked = event.target
            removeClicked.parentElement.parentElement.remove()   

            updateCartTotal ();

        });
    };
};


function updateCartTotal () {
   
    var cartItemContainer = document.getElementsByClassName("cart-items")[0]
    var cartRow = cartItemContainer.getElementsByClassName("cart-row")
    console.log(cartRow)
    let total = 0
    let totalProduct = 0
    
    for (let i=0 ; i < cartRow.length; i++) {
        var cartRows = cartRow[i]
        var priceOfItem = cartRows.getElementsByClassName ("cart-product-price")[0]
        var priceOfShipping = cartRows.getElementsByClassName ("cart-shipping-fee")[0]
        var quantityOfItem = cartRows.getElementsByClassName ("product-quantity-input")[0]

        var shippingPrice = parseFloat(priceOfShipping.innerText.replace('#', ''))
        var productPrice = parseFloat(priceOfItem.innerText)
        var productQuantity = parseFloat(quantityOfItem.value)

        total = total + ((productPrice*productQuantity) + shippingPrice)
        totalProduct = totalProduct +productQuantity
        console.log ( priceOfItem , priceOfShipping , quantityOfItem)
        console.log(shippingPrice, productPrice, productQuantity , total)
        console.log(totalProduct)
    };
    document.getElementsByClassName('grandTotal')[0].innerText = " # "+ total
    document.getElementsByClassName('cart-amount')[0].innerText = totalProduct
    Run()
};

RemoveItem ();
Run();
