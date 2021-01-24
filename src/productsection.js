
    import { Food } from './fooditem.js'
    import { quantityChange } from './app.js'
    import axios from 'axios'
    import {addToCartClicked} from './addtocart.js'

    // Getting the Token from local storage and setting it to the axios header.
    let data = localStorage.getItem('Token');

    let products = [];
    async function loadData() {
        axios.defaults.headers.common['AUTH-TOKEN'] = data
        // Axios instance
        const axiosInstance = axios.create({
        baseURL: 'https://shopengine-wv5zffgqvq-uc.a.run.app'});

        let shopData = await axiosInstance.get('/api/user/categories')
        console.log ('here',shopData.data.data);
        return shopData.data.data;
    }

    
    loadData().then(data => {
        // TODO replace with a loop through categories and products
        let product1 = new Food(data[0].products[0].name, 2000, data[0].name, data[0].products[0].weight , 1, "./src/img/food1.jpg")
        let product2 = new Food(data[0].products[1].name, 500, data[0].name, data[0].products[1].weight, 1, "./src/img/food1.jpg")
        let product3 = new Food(data[0].products[2].name, 1000, data[0].name, data[0].products[2].weight, 1, "./src/img/food1.jpg")
        let product4 = new Food(data[0].products[3].name, 500, data[0].name, data[0].products[3].weight, 1, "./src/img/food1.jpg")
        let product5 = new Food(data[2].products[0].name, 500, data[2].name, data[2].products[0].weight , 1, "./src/img/food1.jpg")
        let product6 = new Food(data[2].products[1].name, 400, data[2].name, data[2].products[1].weight , 1, "./src/img/food1.jpg")
        let product7 = new Food(data[2].products[2].name, 500, data[2].name, data[2].products[2].weight , 1, "./src/img/food1.jpg")
        let product8 = new Food(data[2].products[3].name, 900, data[2].name, data[2].products[3].weight , 1, "./src/img/food1.jpg")
        let product9 = new Food(data[3].products[0].name, 100, data[3].name, data[3].products[0].weight, 1, "./src/img/food1.jpg")
        let product10 = new Food(data[3].products[1].name, 100 , data[3].name, data[3].products[1].weight, 1, "./src/img/food1.jpg")
        let product11 = new Food(data[3].products[2].name, 100, data[3].name, data[3].products[2].weight, 1, "./src/img/food1.jpg")
        let product12 = new Food(data[3].products[3].name, 100 , data[3].name, data[3].products[3].weight, 1, "./src/img/food1.jpg")

        products.push(product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12);
        
        productSect()
    });
        
   
        
    export function productSect() {
        products.forEach(product => {
            product.idgenerator
            let productitems = document.createElement('div')
            productitems.classList.add('food-item',product.id)

            
            let productHtml =  `
                
                <div class = "cart-row  ${product.id}"  >
                    <img class = "product-image" src="${product.img}" alt="img">
                    <h3 class = " is-size-5 has-text-primary-light product-title " >${product.title}</h3>
                    <h5 class = " is-size-6 has-background-warning-light product-price ">Price- #${product.price}</h3>
                    <h5 class = " is-size-6 has-background-dark has-text-link-light product-kg ">Weight- ${product.weight}kg</h5>
                    <input class= " my-2 input product-quantity-input is-primary is-small" type="number" id="quantity" name="qauntity" style = "width: 65px" placeholder="Quantity" value="${product.qty}"> <br>
                    
                    <h5> <button class = " mb-2 button is-primary is-small is-outlined cart1 add-cart" href="#" type ='button'>Add to Cart</button></h5>
                </div>
                
            `
            //the product.cat matches with the class names of the different product sessions
            let parent =  document.getElementsByClassName(product.cat)[0];
            productitems.innerHTML =  productHtml
            parent.append(productitems);

            let addToCarts = document.getElementsByClassName ('add-cart');
            //console.log('addtocarts', addToCarts)
        
            for  (let i = 0; i< addToCarts.length; i++) {
                let addToCart = addToCarts[i];
                addToCart.addEventListener('click', addToCartClicked);   
            };
           // console.log('look', parent)
        });
                
        quantityChange();   
 
    };
    
   
    

    


    export {products};
