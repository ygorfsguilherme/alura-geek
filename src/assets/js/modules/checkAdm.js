import {loadTemplate} from './loadHtml.js';
import {checkLogin} from './checkLogin.js';
import { updateProduct } from './updateProduct.js';
import { deleteProduct } from './deleteProduct.js';

export const checkAdm = ()=>{
	if(checkLogin()){
		loadTemplate('src/view/templates/adm.html', '[data-login-adm]')
	}
}

export const modoAdm = ()=>{
	if(checkLogin()){
		const modoAdmin = document.querySelectorAll('[data-check="login"]')
		modoAdmin.forEach(btn =>{
			btn.classList.remove('is-disable')
		})
	
		updateProduct()
		deleteProduct()
	}
}