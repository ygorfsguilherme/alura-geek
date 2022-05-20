import {Card} from './createCard.js'
import { database } from './database.js'
import {geneTemplate} from './loadHtml.js'

export const showProduct = (id)=>{
	fetch(database(id))
	.then(response => response.json())
	.then(status => {
		if(status.id == id){
			const product = [];
			product.push(status)
			const template = geneTemplate('src/view/templates/product.html')
			const card = new Card(product, template, '[data-product]', 'c-product__area')
			card.create()
		}else{
			console.log('ERROR')
			document.querySelector('[data-error]').style.display = 'flex'
		}
	})
}

export const showItem = ()=>{
	let btn = document.querySelectorAll('[data-show-product]')
	btn.forEach(btn => btn.addEventListener('click', (event)=>{
		const id = event.target.parentElement.id;
		location.href = `?page=product&id=${id}`
	}))
}