import {getData} from "./getData.js"
import {Card} from "./createCard.js"
import {geneTemplate} from "./loadHtml.js"

function generateCardAll(){
	const template = geneTemplate('templates/card.html')
	const dataAll = getData()
	let info = [];

	for(let i = 0; i < 6; i++){
		info.push(dataAll[i])
	}

	const cards = new Card(info, template, '[data-all-products]', 'u-card')
	cards.create()
}

generateCardAll()