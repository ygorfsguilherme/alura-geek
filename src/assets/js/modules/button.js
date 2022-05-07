const buttonCheck = document.querySelectorAll('[data-page]')
buttonCheck.addEventListener('click', (event)=>{
    console.log(OK)
})

if(!page || page == 'home'){
	const banner = document.querySelector('[data-banner]')
	loadTemplate('src/view/pages/home.html', '[data-home]');
	banner.classList.remove('is-disable')
}

if (document.querySelector('[data-page="product-all"]')){
	document.querySelector('[data-page="product-all"]').addEventListener('click', ()=>{
		window.location.href = '?page=products-all'
		loadTemplate('src/view/pages/products-all.html', '[data-home]');
	})
}

if (document.querySelector('[data-page="login"]')){
	document.querySelector('[data-page="login"]').addEventListener('click', ()=>{
		window.location.href = '?page=login'
		loadTemplate('src/view/pages/login.html', '[data-home]');
	})
}

if (document.querySelector('[data-page="product-add"]')){
	document.querySelector('[data-page="product-add"]').addEventListener('click', ()=>{
		window.location.href = '?page=product-add'
		loadTemplate('src/view/pages/product-add.html', '[data-home]');
	})
}