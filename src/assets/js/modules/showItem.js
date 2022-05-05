import {Card} from './createCard.js'
import {geneTemplate} from './loadHtml.js'

export const showProduct = (id)=>{
	setTimeout(()=>{
		fetch("http://127.0.0.1:8000/alura-geek")

		.then(response => response.json())
		
		.then(data => {
			let product = []
			data.forEach(data =>{
				if(data['id'] == id){
					product.push(data)
					const card = new Card(product, geneTemplate('templates/product.html'), '[data-product]',
						'product__container')
					card.create()
				}
			})

			if(!product.length){
				document.querySelector('[data-error]').style.display = 'flex'
			}
		})
	},100)
}

export const showItem = ()=>{
	setTimeout(()=>{
		let btn = document.querySelectorAll('[data-show-product]')
		btn.forEach(btn => btn.addEventListener('click', (event)=>{
			const id = event.target.parentElement.id;
			location.href = `product.html?id=${id}`
		}))
	}, 100)
}