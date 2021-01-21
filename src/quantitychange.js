
import {getProduct} from './getproduct.js'
// function to get what the input has been changed to and assign it to the quantity of that particular item in the array.
export function quantityChanged (event) {
    let inputs = event.target
    if (isNaN(inputs.value) || inputs.value <= 0) {
        inputs.value = 1
    } 
    let outcome = getProduct(event)
    console.log(this.value)
    outcome[0].qty= this.value
    console.log(outcome[0].qty, "quantity is changing")
}


