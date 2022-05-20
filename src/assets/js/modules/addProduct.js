import { database } from "./database.js";
import {generateID} from "./generateID.js"
import { pageActive } from "./route.js";

const getInformationProduct = ()=>{
	const PRODUCT = document.querySelector('[data-produtoName]').value;
	const PRICE = document.querySelector('[data-produtoPrice]').value;
	const DESCRIPTION = document.querySelector('[data-productDescription]').value;
	const CATEGORY = document.querySelector('input[name="category"]:checked').value;
	const id = generateID()
	const IMAGE = document.querySelector('[data-preview]').getAttribute('src')

	const item = {id, IMAGE, PRODUCT, PRICE, DESCRIPTION,CATEGORY}
	
	return item
}

const setAddProduct = ()=>{
	fetch(database(), {
		method:'POST',
		headers:{"Content-Type": "application/json;charset=UTF-8"},
		body: JSON.stringify(getInformatin())
	})
	.then(response => response.json())
	.then(status => {
		if(status == 200){
			location.reload()
		}
	})
}

export const addProduct = ()=>{
	if(pageActive() == 'product-add'){
		document.querySelector('[data-addProduto]').addEventListener('click', () => {
			setAddProduct()
		});
	}
}