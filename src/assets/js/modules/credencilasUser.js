export const user = ()=>{
	const credencilasUser = {'email':'alura@email.com', 'password':'123456'}
	localStorage.setItem('credencilasUser', JSON.stringify(credencilasUser))
}