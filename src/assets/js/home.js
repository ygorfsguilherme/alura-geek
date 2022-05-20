import { checkAdm } from './modules/checkAdm.js';
import {Card} from './modules/createCard.js'
import { database } from './modules/database.js';
import {geneTemplate} from './modules/loadHtml.js'
import { pageActive } from './modules/route.js';
import { showItem } from './modules/showItem.js';

const classElement = 'u-card'

function generateCard(){
	var starwars = 0;
	var consoles = 0;
	var diversos = 0;

	fetch(database())
	.then(response => response.json())
	.then(data => {
		const template = geneTemplate('src/view/templates/card.html')
		let limite = 6;

		data.forEach(product =>{
			let targetElement = '';
			let infoElement = [];
			let cat = product.CATEGORY;

			if(cat == 'starwars'){
				if(starwars < limite){			
					targetElement = '[data-card-starwars]'
					infoElement.push(product)
					starwars++
				}
			}

			if(cat == 'consoles'){
				if(consoles < limite){			
					targetElement = '[data-card-consoles]'
					infoElement.push(product)
					consoles++
				}
			}

			if(cat == 'diversos'){
				if(diversos < limite){			
					targetElement = '[data-card-diversos]'
					infoElement.push(product)
					diversos++
				}
			}

			if (!infoElement == '') {
				const card = new Card(infoElement, template, targetElement, classElement)
				card.create()
			}
		})

		showItem()
	})
}


if(pageActive() == 'home'){
	generateCard()
}