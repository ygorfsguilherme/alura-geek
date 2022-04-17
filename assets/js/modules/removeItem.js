import {setData, getData} from './getData.js'

let list = getData()
let index;

export const removeItem = ()=>{setTimeout(()=>{
	let btnRemove = document.querySelectorAll('[data-remove-item]')
	btnRemove.forEach(btnRemove => btnRemove.addEventListener('click', (event)=>{
		const id = event.target.parentElement.parentElement.id;
		list = list.filter((item) => item.ID !== id)
		setData(list)
		document.querySelector(`#${id}`).remove()
	}))
}, 100)}
removeItem()

export const modifyItem = ()=>{setTimeout(()=>{
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
		})
	})
}, 100)}
modifyItem()

export const updateItem = ()=>{setTimeout(()=>{
	const update = document.querySelector("[data-update-product='update']")
	if (update) {
		update.addEventListener('click', (event)=>{
			const productValue = ['PRODUCT', 'PRICE', 'DESCRIPTION']
			productValue.forEach(productValue =>{
				list[index][productValue] = document.querySelector(`[data-update-product=${productValue}]`).value
			})
			list[index]['IMAGE'] = document.querySelector('[data-preview]').getAttribute("src")
			list[index]['CATEGORY'] = document.querySelector('input[name="category"]:checked').value

			setData(list)
			location.reload()
		})
	}
}, 100)}
updateItem()

export const closeModal = setTimeout(()=>{
	const close = document.querySelector('[data-modal="close"]');
	if (close){
		close.addEventListener('click', ()=>{
			document.querySelector('.modal__container').style.display = 'none'
		})
	}
}, 100)


