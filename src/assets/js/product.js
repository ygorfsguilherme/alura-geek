import {Card} from './modules/createCard.js'
import {geneTemplate} from './modules/loadHtml.js'
import {showProduct} from './modules/showItem.js'

let parans = new URLSearchParams(window.location.search)

showProduct(parans.get('id'))

export function generateCardOtherProducts(){
	fetch('http://192.168.42.5:5080/products')
	.then(response => response.json())
	.then(data => {
		const template = geneTemplate('templates/card.html')
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
	})
}

generateCardOtherProducts()