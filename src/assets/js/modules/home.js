import {Card} from './createCard.js'
import { database } from './database.js';
import {geneTemplate} from './loadHtml.js'
import { showItem } from './showItem.js';

const classElement = 'u-card'

export const homePage = ()=>{
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