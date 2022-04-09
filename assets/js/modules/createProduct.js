import {generateID} from "./generateID.js"

export function createProduct(item){
	const db = getData()
	const id = generateID()

	let product = db;
	product.push(item)

	localStorage.setItem('products', JSON.stringify(product))
}

export function getData(){
	const db = localStorage.getItem('products')
	return JSON.parse(db)
}