import {Card} from "./createCard.js"
import {geneTemplate} from "./loadHtml.js"

function productAll(){
	const template = geneTemplate('templates/card.html')

	fetch("http://127.0.0.1:8000/alura-geek")
	.then(response => response.json())
	.then(data => {
		data.forEach(product => {
			let item = [];
			item.push(product)
			const cards = new Card(item, template, '[data-all-products]', 'u-card')
			cards.create()
		})
	})
}

productAll()