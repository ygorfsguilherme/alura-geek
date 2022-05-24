import {Card} from './createCard.js'
import { database } from './database.js'
import {geneTemplate} from './loadHtml.js'
import { showItem } from './showItem.js'

export function otherProducts(){
	fetch(database())
	.then(response => response.json())
	.then(data => {
		const template = geneTemplate('src/view/templates/card.html')
		let limite = 6;

		if(data.length < 6){
			limite = data.length
		}

		for(let i = 0; i < limite; i++){
			let otherProducts = [];
			otherProducts.push(data[i])
			const card = new Card(otherProducts, template, '[data-card-other-product]', 'u-card')
			card.create()
		}

		showItem()
	})
}