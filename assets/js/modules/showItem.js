import {getData} from './getData.js'
import {Card} from './createCard.js'
import {geneTemplate} from './loadHtml.js'

const templateShow = `
<img class="product__image" src="IMAGE">
<div>
<h1 class="product__title">PRODUCT</h1>
<span class="product__price">R$ PRICE</span>
<p class="product__description">DESCRIPTION</p>
</div>`

export function showProduct(id){
	const data = getData()

	for(let i = 0; i < data.length; i++){
		if(data[i].ID == id){
			const item = [];
			item.push(data[i])

			const card = new Card(item, templateShow, '[data-product]', 'product__container')
			card.create()
		}
	}
}

export const showItem = ()=>{setTimeout(()=>{
	let btn = document.querySelectorAll('[data-show-product]')
	btn.forEach(btn => btn.addEventListener('click', (event)=>{
		const id = event.target.parentElement.id;
		localStorage.setItem('ID', id)
		location.href = 'product.html'
	}))
}, 100)}