let list = [];
let index;

export const removeItem = ()=>{
	let btnRemove = document.querySelectorAll('[data-remove-item]')
	btnRemove.forEach(btnRemove => btnRemove.addEventListener('click', (event)=>{
		const id = event.target.parentElement.parentElement.id;
		fetch(`http://127.0.0.1:8000/alura-geek/${id}`, {method:"DELETE"})
		document.querySelector(`#${id}`).remove()
	}))
}

export const modifyItem = ()=>{
	const editItem = document.querySelectorAll('[data-edit-item]')
	
	editItem.forEach(editItem =>{
		editItem.addEventListener('click', (event)=>{

			const id = event.target.parentElement.parentElement.id;
			let categorySelect = document.querySelectorAll('input[name="category"]')

			const productValue = ['PRODUCT', 'PRICE', 'DESCRIPTION'] 	
			for (let i = 0; i < list.length; i++) {
				if (list[i].ID == id) {
					productValue.forEach(productValue =>{
						document.querySelector(`[data-update-product=${productValue}]`).value = list[i][productValue]
					})

					document.querySelector('[data-drop]').innerHTML = `<img data-preview src="${list[i].IMAGE}">`;

					categorySelect.forEach(categorySelect =>{
						if (categorySelect.value == list[i]['CATEGORY']) {
							categorySelect.checked = true;
						}
					})

					index = [i];
				}
			}

			document.querySelector('.modal__container').style.display = 'flex'

			const update = document.querySelector("[data-update-product='update']")
			if (update) {
				update.addEventListener('click', (event)=>{
					updateItem(id)
				})
			}
		})
	})
}

export const updateItem = (ids)=>{
	const IMAGE = document.querySelector('[data-drop]').value
	const PRODUCT = document.querySelector('[data-update-product="PRODUCT"]').value
	const PRICE = document.querySelector('[data-update-product="PRICE"]').value
	const DESCRIPTION = document.querySelector('[data-update-product="DESCRIPTION"]').value
	const CATEGORY = document.querySelector('[data-update-product="CATEGORY"]').value
	const id = ids

	item(IMAGE, PRODUCT, PRICE, CATEGORY,DESCRIPTION, id)

	fetch("http://127.0.0.1:8000/alura-geek", {
		method:'PUT',
		headers:{"Content-Type": "application/json;charset=UTF-8"},
		body: JSON.stringify(item)
	})
}

export const closeModal = setTimeout(()=>{
	const close = document.querySelector('[data-modal="close"]');
	if (close){
		close.addEventListener('click', ()=>{
			document.querySelector('.modal__container').style.display = 'none'
		})
	}
}, 100)
