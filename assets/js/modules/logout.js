const exit = document.querySelector('[data-exit]')

export const logout = ()=>{
	if(exit){
		exit.addEventListener('click', ()=>{
			sessionStorage.removeItem('logado')
			location.reload()
		})
	}
}

logout()