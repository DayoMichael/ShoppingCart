
import { Food } from './fooditem.js'
import { quantityChange } from './app.js'
import axios from 'axios'

// Getting the Token from local storage and setting it to the axios header.
let data = localStorage.getItem('Token');
//var defr =[]
console.log('the token',data)
async function loadData() {
    axios.defaults.headers.common['AUTH-TOKEN'] = data
// Axios instance
const axiosInstance = axios.create({
    baseURL: 'https://shopengine-wv5zffgqvq-uc.a.run.app/api/user/categories'
})

let shopData = await axiosInstance.get('')
//.then(res => {res.data.data[0].products }  )
//.catch (err => {
 //   if (err.response) {
 //       console.log(err.response.data);
  //      console.log(err.response.status);
  //      console.log(err.response.headers);
 //   };
//}); 


//defr
console.log ('here',shopData.data.data)
// getData()
 return shopData.data.data
}


let finaldata = loadData()//.then(data => data) ;;
//console.log(defrr)


console.log('final',finaldata.then().data)



let product1 = new Food("Fried-Rice", 2000, "Food", 1 , 1, "./src/img/food1.jpg")
let product2 = new Food("Eba", 500, "Food", 2, 1, "./src/img/food1.jpg")
let product3 = new Food("Pounded-Yam", 1000, "Food", 2.5, 1, "./src/img/food1.jpg")
let product4 = new Food("Fish-Sauce", 500, "Food", 1, 1, "./src/img/food1.jpg")
let product5 = new Food("Doughnut", 500, "Snacks", 0, 1, "./src/img/food1.jpg")
let product6 = new Food("Sausage", 400, "Snacks", 0 , 1, "./src/img/food1.jpg")
let product7 = new Food("Meat-Pie", 500, "Snacks", 0, 1, "./src/img/food1.jpg")
let product8 = new Food("Chicken-Pie", 900, "Snacks", 0, 1, "./src/img/food1.jpg")
let product9 = new Food("Malt", 100, "Drinks", 0.2, 1, "./src/img/food1.jpg")
let product10 = new Food("Sprite", 100 , "Drinks", 0.2, 1, "./src/img/food1.jpg")
let product11 = new Food("Fanta", 100, "Drinks", 0.3, 1, "./src/img/food1.jpg")
let product12 = new Food("Coke", 100 , "Drinks", 0.3, 1, "./src/img/food1.jpg")


// src\img\beansandplantain.jpg

let products = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12]

function productArray(res){
    console.log ('here again', res)
    console.log(products)
    products.forEach(product =>{console.log (product.id)
    })
    ;
    for  (let i = 0; i< res.length; i++) {
        let ress = res[i];
    console.log(ress.id)};
 return products
};

console.log(products)
export function productSect() {
    loadData()
    products.forEach(product => {
        product.idgenerator
        let productitems = document.createElement('div')
        productitems.classList.add('food-item',product.id)
        
        let productHtml = `
            
            <div class = "cart-row  ${product.id}"  >
                <img class = "product-image" src="${product.img}" alt="img">
                <h3 class = " is-size-5 has-text-primary-light product-title " >${product.title}</h3>
                <h5 class = " is-size-6 has-background-warning-light product-price ">Price- #${product.price}</h3>
                <h5 class = " is-size-6 has-background-dark has-text-link-light product-kg ">Weight- ${product.weight}kg</h5>
                <input class= " my-2 input product-quantity-input is-primary is-small" type="number" id="quantity" name="qauntity" style = "width: 65px" placeholder="Quantity" value="${product.qty}"> <br>
                
                <h5> <button class = " mb-2 button is-primary is-small is-outlined add-cart cart1" href="#" type ='button'>Add to Cart</button></h5>
            </div>
            
        `
    //the product.cat matches with the class names of the different product sessions
    let parent = document.getElementsByClassName(product.cat)[0];
    productitems.innerHTML = productHtml
    parent.append(productitems);
    quantityChange()
    });

    var rows = [
        { id: 3,
         title: "sometitle", 
         catid: 55, 
         img: "file" },
        { id: 4,
         title: "sometitle", 
         catid: 55, 
         img: "file" },
        { id: 5,
         title: "sometitle", 
         catid: 55, 
         img: "file" },
        ];
        
        var newArr = rows.map(function(elem) {
            return {
                id: elem.id,
                img: elem.img
            };
        });
        
        console.log('newArr', newArr);
}
export {products}
