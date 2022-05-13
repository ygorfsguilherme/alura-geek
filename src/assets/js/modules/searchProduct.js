import {Card} from './createCard.js'
import {geneTemplate} from './loadHtml.js'
import {checkLogin} from './checkLogin.js'
import {checkAdm} from './checkAdm.js'
import {removeItem, modifyItem, updateItem} from './removeItem.js'
import {showItem} from "./showItem.js"

let palavra = []
let localSearchProduct = document.querySelector('[data-search-product]')

export const searchBar = setTimeout(()=>{document.querySelector('[data-searchbar-input]').addEventListener('keydown', (event)=>{
	let inputText = event.key
	const valor = document.querySelector('[data-searchbar-input]').value.toLowerCase();

	if (inputText == 'Enter') {
		fetch('http://192.168.42.5:5080/products')
		.then(response => response.json())
		.then(data => {
			data.forEach(product =>{
				if (product.PRODUCT.toLowerCase() == valor) {
					const item = [];
					item.push(product)
					const cards = new Card(item, geneTemplate('templates/card.html'), '[data-search-product]', 'u-card')
					cards.create()

					checkAdm()
					removeItem()
					modifyItem()
					showItem()
				}
			})
		})
	}else if (inputText == 'Backspace') {
		localSearchProduct.innerHTML = ''
	}
})}, 100)