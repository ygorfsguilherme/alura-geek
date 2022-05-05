import {generateID} from "./generateID.js"

export const addProduct = document.querySelector('[data-addProduto]').addEventListener('click', () => {
	const PRODUCT = document.querySelector('[data-produtoName]').value;
	const PRICE = document.querySelector('[data-produtoPrice]').value;
	const DESCRIPTION = document.querySelector('[data-productDescription]').value;
	const CATEGORY = document.querySelector('input[name="category"]:checked').value
	const id = generateID()
	const IMAGE = document.querySelector('[data-preview]').getAttribute('src')
	
	const item = {id, IMAGE, PRODUCT, PRICE, DESCRIPTION,CATEGORY}

	fetch("http://127.0.0.1:8000/alura-geek", {
		method:'POST',
		headers:{"Content-Type": "application/json;charset=UTF-8"},
		body: JSON.stringify(item)
	})

});
