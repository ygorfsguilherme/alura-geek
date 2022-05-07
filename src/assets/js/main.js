import {loadTemplate} from "./modules/loadHtml.js"
import {Card} from "./modules/createCard.js"
import * as dropDown from "./modules/dropDown.js"
import {removeItem, modifyItem, closeModal, updateItem} from "./modules/removeItem.js"
import {addProductButton} from "./modules/logado.js"
import {user} from "./modules/credencilasUser.js"
import {searchBar} from "./modules/searchProduct.js"
import {showItem} from "./modules/showItem.js"
import {loging, logout} from "./modules/login.js"


window.onload = function(){
	showItem()
	removeItem()
	addProductButton()
	modifyItem()
	loging()
	logout()
}

let params = new URLSearchParams(window.location.search);
const page = params.get('page')

if(page == 'login'){
	loadTemplate('src/view/pages/login.html', '[data-home]');
}

if(page == 'products-all'){
	loadTemplate('src/view/pages/product-all.html', '[data-home]');
}

if(page == 'product-add'){
	loadTemplate('src/view/pages/product-add.html', '[data-home]');
}

if(!page || page == 'home'){
	const banner = document.querySelector('[data-banner]')
	loadTemplate('src/view/pages/home.html', '[data-home]');
	banner.classList.remove('is-disable')
}

const buttonCheck = document.querySelectorAll('[data-page]')
buttonCheck.forEach( btn =>{
	btn.addEventListener('click', (event)=>{
		const page = event.target.getAttribute('data-page')
		const local = `src/view/pages/${page}.html`
		window.location.href = `?page=${page}`
		loadTemplate(local, '[data-home]');
	})
})


//import * as dataBase from "./modules/dataBase.js"


