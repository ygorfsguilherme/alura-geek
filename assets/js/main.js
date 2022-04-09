import * as loadHtml from "./modules/loadHtml.js"
import {createProduct} from "./modules/createProduct.js"
import {getData} from "./modules/createProduct.js"
import {Card} from "./modules/createCard.js"

function user(){
	localStorage.setItem('email','alura@email.com')
	localStorage.setItem('password','123456')
}

if (!localStorage.getItem('products')) {
	const catalogo = () => {
		const createBase = [];

		localStorage.setItem('products', JSON.stringify(createBase))

		const db_starting = []

		for (var i = 0; i < db_starting.length; i++) {
			let item = db_starting[i]
			createProduct(item)
		}
	}

	catalogo()
}

const template = `<img class="u-card__image" src=IMAGE>
<span class="u-card__tile" >PRODUCT</span>
<span class="u-card__price">R$ PRICE</span>
<a class="u-card__link" href="#">Ver produto</a>`

const classElement = 'u-card'

function generateCard(){
	const data = getData()
	var starwars = 0;
	var consoles = 0;
	var diversos = 0;

	for(let i = 0; i < data.length; i++){
		let targetElement = '';
		let infoElement = [];
		let cat = data[i].CATEGORY;

		if(cat == 'starwars'){
			if(starwars < 6){			
				targetElement = '[data-card-starwars]'
				infoElement.push(data[i])
				starwars++
			}
		}

		if(cat == 'consoles'){
			if(consoles < 6){			
				targetElement = '[data-card-consoles]'
				infoElement.push(data[i])
				consoles++
			}
		}

		if(cat == 'diversos'){
			if(diversos < 6){			
				targetElement = '[data-card-diversos]'
				infoElement.push(data[i])
				diversos++
			}
		}

		if (!infoElement == '') {
			const card = new Card(infoElement, template, targetElement, classElement)
			card.create()
		}
	}
}

generateCard()

