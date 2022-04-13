import {createProduct} from "./createProduct.js"
import {generateID} from "./generateID.js"

export const addProduct = document.querySelector('[data-addProduto]').addEventListener('click', () => {
	const PRODUCT = document.querySelector('[data-produtoName]').value;
	const PRICE = document.querySelector('[data-produtoPrice]').value;
	const DESCRIPTION = document.querySelector('[data-productDescription]').value;
	const CATEGORY = document.querySelector('input[name="category"]:checked').value
	const ID = generateID()
	const IMAGE = document.querySelector('[data-preview]').getAttribute('src')
	const item = {ID, IMAGE, PRODUCT, PRICE, DESCRIPTION,CATEGORY}

	createProduct(item)
	location.href = 'all-products.html'
});
