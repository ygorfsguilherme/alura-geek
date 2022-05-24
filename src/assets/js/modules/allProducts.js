import { modoAdm } from "./checkAdm.js"
import {Card} from "./createCard.js"
import { database } from "./database.js"
import {geneTemplate} from "./loadHtml.js"
import { showItem } from "./showItem.js"

export function allProducts(){
	const template = geneTemplate('src/view/templates/card.html')
	const localAllProducts = document.querySelector('[data-all-products]')
	
	if(localAllProducts){
		fetch(database())
		.then(response => response.json())
		.then(data => {
			data.forEach(product => {
				let item = [];
				item.push(product)
				const cards = new Card(item, template, '[data-all-products]', 'u-card')
				cards.create()
			})
			
			modoAdm()
			showItem()
		})
	}
}