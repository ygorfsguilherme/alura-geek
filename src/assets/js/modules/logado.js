import {loadTemplate} from './loadHtml.js';
import {checkLogin} from './checkLogin.js';

let btnAdd = document.querySelector('[data-check-login]')

export const addProductButton = ()=>{
	setTimeout(()=>{
		const btnEdit = document.querySelectorAll('[data-check="login"]')

		if(checkLogin()){
			loadTemplate('src/view/templates/adm.html', '[data-login-adm]')
			btnEdit.forEach(btn =>{
				btn.classList.remove('is-disable')
			})
		}
	}, 100)
}