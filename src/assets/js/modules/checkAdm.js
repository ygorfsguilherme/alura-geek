import {loadTemplate} from './loadHtml.js';
import {checkLogin} from './checkLogin.js';

export const checkAdm = ()=>{
	setTimeout(()=>{
		if(checkLogin()){
			loadTemplate('src/view/templates/adm.html', '[data-login-adm]')
			const modoAdmin = document.querySelectorAll('[data-check="login"]')
			modoAdmin.forEach(btn =>{
				btn.classList.remove('is-disable')
			})
		}
	}, 1000)
}