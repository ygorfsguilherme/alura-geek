export const logout = ()=>{setTimeout(()=>{
	const exit = document.querySelector('[data-exit]')
	if(exit){
		exit.addEventListener('click', ()=>{
			sessionStorage.removeItem('logado')
			location.reload()
		})
	}
}, 100)}