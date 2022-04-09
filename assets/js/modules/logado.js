import {loadTemplate} from './loadHtml.js';

const login = sessionStorage.getItem('logado')
console.log(login)

if (login) {
	loadTemplate('templates/adm.html', '[data-login-adm]')
	console.log('Você esta logado')
}