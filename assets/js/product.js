import {getData} from './modules/getData.js'
import {Card} from './modules/createCard.js'
import {geneTemplate} from './modules/loadHtml.js'
import {showProduct} from './modules/showItem.js'

let parans = new URLSearchParams(window.location.search)

showProduct(parans.get('id'))

export function generateCardOtherProducts(){
	const template = geneTemplate('templates/card.html')
	const data = getData()
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
}

generateCardOtherProducts()