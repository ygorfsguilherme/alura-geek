import {getData} from "./getData.js"
import {Card} from "./createCard.js"

const template = `<img class="u-card__image" src=IMAGE>
<span class="u-card__tile" >PRODUCT</span>
<span class="u-card__price">R$ PRICE</span>
<a class="u-card__link" href="#">Ver produto</a>`

function generateCardAll(){
	const dataAll = getData()
	let info = [];

	for(let i = 0; i < dataAll.length; i++){
		info.push(dataAll[i])
	}

	const cards = new Card(info, template, '[data-all-products]', 'u-card')
	cards.create()
}

generateCardAll()