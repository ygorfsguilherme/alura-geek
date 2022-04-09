var preview = document.querySelector('[data-drop]')

export const dropOver = document.querySelector('[data-drop]').addEventListener('dragover', (event)=>{
	event.preventDefault()
	event.stopPropagation()
	return false
})

export const dropLeave = document.querySelector('[data-drop]').addEventListener('drop', (event)=>{
	
	event.preventDefault()
	event.stopPropagation()
	const file = event.dataTransfer.files[0]

	var reader  = new FileReader();
	
	reader.onload =  () =>{
		const fileUrl = reader.result
		preview.innerHTML = `<img data-preview src="${fileUrl}">`;
	}

	reader.readAsDataURL(file)

	return false
})