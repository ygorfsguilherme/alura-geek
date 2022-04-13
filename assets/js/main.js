import * as loadHtml from "./modules/loadHtml.js"
import {createProduct} from "./modules/createProduct.js"
import {getData} from "./modules/getData.js"
import {Card} from "./modules/createCard.js"
import * as logado from "./modules/logado.js"

function user(){
	const credencilasUser = {'email':'alura@email.com', 'password':'123456'}
	localStorage.setItem('credencilasUser', JSON.stringify(credencilasUser))
}
user()

const exit = document.querySelector('[data-exit]')

if(exit){
	exit.addEventListener('click', ()=>{
		sessionStorage.removeItem('logado')
		location.href = 'index.html'
	})
}

setTimeout(()=>{
	let btn = document.querySelectorAll('[data-show-product]')
	btn.forEach(btn => btn.addEventListener('click', (event)=>{
		const id = event.target.parentElement.id;
		localStorage.setItem('ID', id)
		location.href = 'product.html'
	}))
}, 100)
