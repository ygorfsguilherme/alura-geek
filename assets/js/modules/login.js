document.querySelector('[data-login]').addEventListener('click', (event) => {
	event.preventDefault()

	let email = document.querySelector('[data-email]').value;
	let password = document.querySelector('[data-password]').value;

	if(email == localStorage.getItem('email') && password == localStorage.getItem('password')){
		localStorage.removeItem('logado')
		localStorage.setItem('logado', 'true')
		location.href = 'cadastra-produtos.html'
	}else {
		document.querySelector('.alert').style.display = 'flex';
	}
});