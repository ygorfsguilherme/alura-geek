import {loadTemplate} from './loadHtml.js';
import {checkLogin} from './checkLogin.js';


export const checkAdm = ()=>{
	setTimeout(()=>{
		const modoAdmin = document.querySelectorAll('[data-check="login"]')

		if(checkLogin()){
			loadTemplate('src/view/templates/adm.html', '[data-login-adm]')
			modoAdmin.forEach(btn =>{
				btn.classList.remove('is-disable')
			})
		}
	}, 100)
}