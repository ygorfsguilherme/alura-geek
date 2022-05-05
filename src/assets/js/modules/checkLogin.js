export function checkLogin(){
	const login = sessionStorage.getItem('logado')
	return login
}