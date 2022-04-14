import {getData} from './modules/getData.js'
import {Card} from './modules/createCard.js'
import {geneTemplate} from './modules/loadHtml.js'
import {showProduct} from './modules/showItem.js'

showProduct(localStorage.getItem('ID'))

function generateCardOtherProducts(){
	const template = geneTemplate('templates/card.html')
	const data = getData()

	for(let i = 0; i < 6; i++){
		let infoElement = [];
		infoElement.push(data[i])
		const card = new Card(infoElement, template, '[data-card-other-product]', 'u-card')
		card.create()
	}
}

generateCardOtherProducts()

