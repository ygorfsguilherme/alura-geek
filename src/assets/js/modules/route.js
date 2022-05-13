import {loadTemplate} from "./loadHtml.js"

export const pageActive = ()=>{
	let params = new URLSearchParams(window.location.search);
	const page = params.get('page')

	if(!page){
		return 'home'
	}

	return page
}

export const route = ()=>{
	const page = pageActive()

	const routePage = ['home','login','product-all', 'product-add']
	routePage.forEach(route => {
		if(page == route){
			const routes = `src/view/pages/${page}.html`
			loadTemplate(routes, '[data-home]');
		}
	});

    const buttonCheck = document.querySelectorAll('[data-page]')
    buttonCheck.forEach( btn =>{
	btn.addEventListener('click', (event)=>{
		let page = event.target.getAttribute('data-page')
		
		if (!page){
			page = 'home'
		}

		const local = `src/view/pages/${page}.html`

		window.location.href = `?page=${page}`
		loadTemplate(local, '[data-home]');
		
		if(page == 'home'){
			const banner = document.querySelector('[data-banner]')
			banner.classList.remove('is-disable')
		}
	})
})
}