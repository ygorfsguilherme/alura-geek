export const deleteProduct = () => {
	let btnRemove = document.querySelectorAll('[data-remove-item]')

	btnRemove.forEach(remove => remove.addEventListener('click', (event) => {
		const id = event.target.parentElement.parentElement.id;

		fetch(`https://alura-geek-database.herokuapp.com/alura-geek/${id}`, {method: "DELETE" })
		.then(response => response.json())
		.then(status => {
			if(status == 200){
				document.querySelector(`#${id}`).remove()
			}
		})
	}))
}