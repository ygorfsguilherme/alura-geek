import {loadTemplate} from './loadHtml.js';
import {checkLogin} from './checkLogin.js';

let btnAdd = document.querySelector('[data-check-login]')

export const addProductButton = ()=>{
	setTimeout(()=>{
		const btnEdit = document.querySelectorAll('[data-check-edit]')

		if(checkLogin()){
			btnEdit.forEach(btn =>{
				btn.classList.remove('u-card__edit--disable')
			})
		}

		if (checkLogin()) {
			loadTemplate('templates/adm.html', '[data-login-adm]')

			if (btnAdd) {
				btnAdd.classList.remove('is-disable')
			}
		}

	}, 100)
}