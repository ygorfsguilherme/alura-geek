export const logging = ()=>{
	if(document.querySelector('[data-loging]')){
		document.querySelector('[data-loging]').addEventListener('click', (event)=>{
			event.preventDefault()
	
			const credencilasUser = JSON.parse(localStorage.getItem('credencilasUser'))
	
			let email = document.querySelector('[data-email]').value;
			let password = document.querySelector('[data-password]').value;
	
			if(email == credencilasUser.email && password == credencilasUser.password){
				sessionStorage.setItem('logado', true)
				window.location.href = '?page=products-all'
				loadTemplate('src/view/pages/products-all.html', '[data-home]');
			}else {
				document.querySelector('.alert').style.display = 'flex';
			}
		})
	}
}

export const logout = ()=>{
	const exit = document.querySelector('[data-exit]')
	if(exit){
		exit.addEventListener('click', ()=>{
			sessionStorage.removeItem('logado')
			location.reload()
		})
	}
}