import { database } from "./database.js";

export const deleteProduct = () => {
	let btnRemove = document.querySelectorAll('[data-remove-item]')

	btnRemove.forEach(remove => remove.addEventListener('click', (event) => {
		const id = event.target.parentElement.parentElement.id;

		fetch(database(id), {method: "DELETE" })
		.then(response => response.json())
		.then(status => {
			if(status == 200){
				document.querySelector(`#${id}`).remove()
			}
		})
	}))
}