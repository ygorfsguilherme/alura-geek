import {loadTemplate} from './loadHtml.js';
import {checkLogin} from './checkLogin.js';

let btnAdd = document.querySelector('[data-check-login]')

if (checkLogin()) {
	loadTemplate('templates/adm.html', '[data-login-adm]')

	if (btnAdd) {
		btnAdd.classList.remove('u-button--disable')
	}

	setTimeout(()=>{
	const btnEdit = document.querySelectorAll('[data-check-edit]')
	if(checkLogin()){
		btnEdit.forEach(btn =>{
			btn.classList.remove('u-card__edit--disable')
		})
	}
}, 100)
}