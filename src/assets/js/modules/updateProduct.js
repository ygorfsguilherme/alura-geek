import { database } from "./database.js"

export const updateProduct = () => {
	const editItem = document.querySelectorAll('[data-edit-item]')
	editItem.forEach(editItem => {
		editItem.addEventListener('click', (event) => {

			const id = event.target.parentElement.parentElement.id;

			let IMAGE = document.querySelector('[data-drop]');
			let PRODUCT = document.querySelector('[data-update-product="PRODUCT"]');
			let PRICE = document.querySelector('[data-update-product="PRICE"]');
			let DESCRIPTION = document.querySelector('[data-update-product="DESCRIPTION"]');
			let CATEGORY = document.querySelectorAll('input[name="category"]');

			fetch(database(id))
			.then(response => response.json())
			.then(data => {
				IMAGE.innerHTML = `<img src="${data.IMAGE}" data-preview>`;
				PRODUCT.value = data.PRODUCT;
				PRICE.value = data.PRICE;
				DESCRIPTION.value = data.DESCRIPTION;
				CATEGORY.forEach(cat => {
					if(data.CATEGORY == cat.value){
						cat.checked = true
					}
				})
			})

			document.querySelector('.modal__container').style.display = 'flex'

			const update = document.querySelector('[data-update-product="update"]')
			if (update) {
				update.addEventListener('click', () => {
					console.log(id)
					setUpdateProduct(id)
				})
			}
		})
	})
}

const setUpdateProduct = (ids) => {
	const IMAGE = document.querySelector('[data-preview]').getAttribute('src')
	const PRODUCT = document.querySelector('[data-update-product="PRODUCT"]').value
	const PRICE = document.querySelector('[data-update-product="PRICE"]').value
	const DESCRIPTION = document.querySelector('[data-update-product="DESCRIPTION"]').value;
	const CATEGORY = document.querySelector('input[name="category"]:checked').value;
	const id = ids;
	const item = {id, PRODUCT, IMAGE, PRICE, DESCRIPTION, CATEGORY}

	fetch(database(), {
		method:'PUT',
		headers:{"Content-Type": "application/json;charset=UTF-8"},
		body: JSON.stringify(item)
	})
	.then(response => response.json())
	.then(status => {
		if(status == 200){
			location.reload()
		}
	})
}