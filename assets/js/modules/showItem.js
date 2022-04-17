import {getData} from './getData.js'
import {Card} from './createCard.js'
import {geneTemplate} from './loadHtml.js'

export function showProduct(id){
	const data = getData()
	const item = [];

	for(let i = 0; i < data.length; i++){
		if(data[i].ID == id){
			item.push(data[i])
			const card = new Card(item, geneTemplate('templates/product.html'), '[data-product]', 'product__container')
			card.create()
		}
	}

	if(!item.length){
		document.querySelector('[data-error]').style.display = 'flex'
	}
}

export const showItem = ()=>{setTimeout(()=>{
	let btn = document.querySelectorAll('[data-show-product]')
	btn.forEach(btn => btn.addEventListener('click', (event)=>{
		const id = event.target.parentElement.id;
		location.href = `product.html?id=${id}`
	}))
}, 100)}