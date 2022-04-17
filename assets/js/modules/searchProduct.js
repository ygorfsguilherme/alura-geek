import {Card} from './createCard.js'
import {getData} from './getData.js'
import {geneTemplate} from './loadHtml.js'
import {checkLogin} from './checkLogin.js'
import {addProductButton} from './logado.js'
import {removeItem, modifyItem, updateItem} from './removeItem.js'
import {showItem} from "./showItem.js"


let dataBase = getData()
let palavra = []
let localSearchProduct = document.querySelector('[data-search-product]')

export const searchBar = document.querySelector('[data-searchbar-input]').addEventListener('keydown', (event)=>{
	let inputText = event.key
	const valor = inputText.replace(/([^0-9a-zA-Z\s])/g, '').toLowerCase().split();
	
	if (inputText == 'Backspace') {
		palavra.pop()
		localSearchProduct.innerHTML = ''
	}else {
		if (valor) {
			palavra.push(valor)
		}
	}

	for (let i = 0; i < dataBase.length; i++) {
		if(dataBase[i].PRODUCT.toLowerCase() == palavra.join('')){
			const item = [];
			item.push(dataBase[i])
			const cards = new Card(item, geneTemplate('templates/card.html'), '[data-search-product]', 'u-card')
			cards.create()

			addProductButton()
			removeItem()
			modifyItem()
			showItem()
		}
	}
})