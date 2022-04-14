import {getData} from './modules/getData.js'
import {Card} from './modules/createCard.js'
import {loadData} from './loadData.js'
import {geneTemplate} from './modules/loadHtml.js'

if (!localStorage.getItem('products')) {
	const catalogo = () => {
		const createBase = loadData();

		localStorage.setItem('products', JSON.stringify(createBase))

		const db_starting = []

		for (var i = 0; i < db_starting.length; i++) {
			let item = db_starting[i]
			createProduct(item)
		}
	}

	catalogo()
}

const template = geneTemplate('templates/card.html')

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
