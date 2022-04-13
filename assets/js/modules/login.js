document.querySelector('[data-login]').addEventListener('click', (event) => {
	event.preventDefault()

	const credencilasUser = JSON.parse(localStorage.getItem('credencilasUser'))

	let email = document.querySelector('[data-email]').value;
	let password = document.querySelector('[data-password]').value;

	if(email == credencilasUser.email && password == credencilasUser.password){
		sessionStorage.setItem('logado', true)
		location.href = 'all-products.html'
	}else {
		document.querySelector('.alert').style.display = 'flex';
	}
});