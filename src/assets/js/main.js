import {loadTemplate} from "./modules/loadHtml.js"
import {Card} from "./modules/createCard.js"
import * as dropDown from "./modules/dropDown.js"
import {removeItem, modifyItem, closeModal, updateItem} from "./modules/removeItem.js"
import {addProductButton} from "./modules/logado.js"
import {logout} from "./modules/logout.js"
import {user} from "./modules/credencilasUser.js"
import {searchBar} from "./modules/searchProduct.js"
import {showItem} from "./modules/showItem.js"


window.onload = function(){
	showItem()
	removeItem()
	addProductButton()
	modifyItem()
	logout()
}

let params = new URLSearchParams(window.location.search);
const page = params.get('page')

if(!page || page == 'home'){
	const banner = document.querySelector('[data-banner]')
	loadTemplate('src/view/pages/home.html', '[data-home]');
	banner.classList.remove('is-disable')
}

if(page == 'login'){
	loadTemplate('src/view/pages/login.html', '[data-home]');
}

if(page == 'products-all'){
	loadTemplate('src/view/pages/all-products.html', '[data-home]');
}

if(page == 'add-product'){
	loadTemplate('src/view/pages/add-products.html', '[data-home]');
}

if (document.querySelector('[data-page="product-all"]')){
	document.querySelector('[data-page="product-all"]').addEventListener('click', ()=>{
		window.location.href = '?page=products-all'
		loadTemplate('src/view/pages/all-products.html', '[data-home]');
	})
}

if (document.querySelector('[data-page="login"]')){
	document.querySelector('[data-page="login"]').addEventListener('click', ()=>{
		window.location.href = '?page=login'
		loadTemplate('src/view/pages/login.html', '[data-home]');
	})
}

if (document.querySelector('[data-loging]')){
	document.querySelector('[data-loging]').addEventListener('click', ()=>{
		window.location.href = '?page=products-all'
		loadTemplate('src/view/pages/all-products.html', '[data-home]');
	})
}

//import * as dataBase from "./modules/dataBase.js"


