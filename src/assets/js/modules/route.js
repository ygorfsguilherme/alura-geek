import {loadTemplate} from "./loadHtml.js"
import { otherProducts } from "./otherProducts.js";
import { showProduct } from "./showItem.js";
import { homePage } from "./home.js"

export const pageActive = ()=>{
	let params = new URLSearchParams(window.location.search);
	const page = params.get('page')

	if(!page){
		return 'home'
	}

	return page
}

const getID = ()=>{
	let paramsId = new URLSearchParams(window.location.search);
	const idProduct = paramsId.get('id')
	return idProduct;
}

export const route = ()=>{
	const page = pageActive()

	const routePage = ['login', 'products-all', 'product-add', 'product', 'home']
	routePage.forEach(route => {
		if(page == route){
			const routes = `src/view/pages/${page}.html`
			loadTemplate(routes, '[data-home]');

			if(page == 'product'){
				showProduct(getID())
				otherProducts()
			}

			if (page == 'home') {
				homePage()
			}
		}
	});
}

export const buttonCheck = ()=>{
	const btnCheck = document.querySelectorAll('[data-page]')
	btnCheck.forEach( btn =>{
	btn.addEventListener('click', (event)=>{
		let page = event.target.getAttribute('data-page')
		
		if (!page){
			page = 'home'
		}

		window.location.href = `?page=${page}`
		loadTemplate(`src/view/pages/${page}.html`, '[data-home]');

		})
	})
}