import * as loadHtml from "./modules/loadHtml.js"
import * as login from "./modules/login.js"

function starting(){
	localStorage.setItem('email','alura@email.com')
	localStorage.setItem('password','123456')
	localStorage.setItem('consoles', JSON.stringify([
		{'produto': 'playstation 2', 'preco': '2099'},
		{'produto': 'xbox one', 'preco': '3499'},]))
	
	localStorage.removeItem('logado')
	localStorage.setItem('logado', 'false')
}

starting()