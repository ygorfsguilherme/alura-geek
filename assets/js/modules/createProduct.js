import {generateID} from "./generateID.js"
import {getData} from "./getData.js"

export function createProduct(item){
	const db = getData()
	const id = generateID()

	let product = db;
	product.push(item)

	localStorage.setItem('products', JSON.stringify(product))
}