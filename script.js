/*--selecting the carts so as to make it functional--*/

let carts = document.querySelectorAll('.add-cart')

/*--An array for the product so as to be able to record it features--*/
/*--This is more like a record store--*/
let products = [
    {
        name: "Fried Rice",
        tag: "friedrice",
        price: 2000,
        inCart: 0
        
    },
    {
        name: "Eba",
        tag: "swallow",
        price: 500,
        inCart: 0
    },
    {
        name: "Pounded Yam",
        tag: "poundedyam",
        price: 1000,
        inCart: 0
    },
    {
        name: "Fish Sauce",
        tag: "fishsauce",
        price: 500,
        inCart: 0
    },
    {
        name: "Rice and Beans",
        tag: "riceandbeans",
        price: 1000,
        inCart: 0
    },
    {
        name: "Beans and plantain",
        tag: "beansandplantain",
        price: 800,
        inCart: 0
    },
    {
        name: "Jollof Rice",
        tag: "jollofrice",
        price: 2000,
        inCart: 0
    },
    {
        name: "Porridge",
        tag: "porridge",
        price: 900,
        inCart: 0
    },
];

/*---function to fix an event listener to the the button--*/
/*--it loops through the selected carts and adds a listener to them all-*/
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onloadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumber')
    
    if (productNumbers) {
        document.querySelector(".cart-btn span").textContent = productNumbers ;
    }

    
}

/*--function to use the local storage. It stores in the local storage
and also updates for addition product 
it then updates the number on the 'cart' menu bar. --*/
function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumber')
    productNumbers = parseInt(productNumbers)
    
    if(productNumbers) {
        localStorage.setItem('cartNumber', productNumbers + 1)
        document.querySelector(".cart-btn span").textContent = productNumbers + 1
    } else{
        localStorage.setItem('cartNumber', 1)
        document.querySelector(".cart-btn span").textContent = 1
    }
    setItems(product);
}

/*--function to create the product xtics which is in an object format then 
we use JSON to make it readeable after which the incart att is updated to show how many times a particular product
was selected--*/
function setItems(product) {
    
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems)

    if(cartItems != null){
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }
        }

        cartItems[product.tag].inCart += 1;
    }else {
        product.inCart = 1;
        cartItems = {
            [product.tag]:product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}
function totalCost(product) {
    console.log(product, "clicked");
    
    let cartCost = localStorage.getItem('totalCost')
    

    if (cartCost!=null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost+ product.price)


    } else {
        localStorage.setItem("totalCost",product.price)
    }

    
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".products");
    let cartCost = localStorage.getItem('totalCost')
    
    
    if (cartItems && productContainer) {
        productContainer.innerHTMl ='';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
        
                <div class= "product">
                    <div>
                        <button><ion-icon name ="close-circle"></ion-icon></button>
                        <img src="../img/food1.jpg" alt="img" width = 100 height = 90 ></img>
                        <span>${item.name}</span>

                    </div>
                    
                    <div class = "price">${item.price}</div>
                    <div class = "quantity">
                        <span>${item.inCart}</span>
                    </div>
                    <div class ="total">
                        #${item.inCart * item.price}.00
                    </div>
            
                </div>

            `;
            
        });

        productContainer.innerHTML += `
            <div class = "grandTotalContainer">
                <h4 class = "grandTotalTitle">
                    Grand Total
                </h4>
                <h4 class ="grandTotal">
                    $${cartCost}.00
                </h4>
            </div>
        
        `
    }
}
function deleteItem(){

}

onloadCartNumbers();
displayCart();