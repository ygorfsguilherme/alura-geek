import {loadTemplate} from './loadHtml.js';
import {checkLogin} from './checkLogin.js';

let btnAdd = document.querySelector('[data-check-login]')

if (checkLogin()) {
	loadTemplate('templates/adm.html', '[data-login-adm]')

	if (btnAdd) {
		document.querySelector('[data-check-login]').style.display = 'flex';
	}
}