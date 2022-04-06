function loadTemplate(template, local){
	let addTemplate = document.querySelector(`${local}`)

	fetch(template)
	.then( r => r.text() )
	.then( t => addTemplate.innerHTML = t);
}

loadTemplate('../../page/templates/header.html', '[data-header]');
loadTemplate('../../page/templates/footer.html', '[data-footer]');
