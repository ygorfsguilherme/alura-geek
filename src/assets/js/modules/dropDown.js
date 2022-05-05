var preview = document.querySelector('[data-drop]')
var inputFile = document.querySelector('#file')

export const dropOver = document.querySelector('[data-drop]').addEventListener('dragover', (event)=>{
	event.preventDefault()
	event.stopPropagation()
	return false
})

export const dropClick = document.querySelector('[data-drop]').addEventListener('click', (event)=>{
	event.preventDefault()
	event.stopPropagation()
	inputFile.click()

	return false
})

export const dropLeave = document.querySelector('[data-drop]').addEventListener('drop', (event)=>{
	
	event.preventDefault()
	event.stopPropagation()
	const file = event.dataTransfer.files[0]

	addImage(file)

	return false
})

inputFile.addEventListener('change', ()=>{
	const file = inputFile.files[0];
	addImage(file)
})

function addImage(file){
	var reader  = new FileReader();
	
	reader.onload =  () =>{
		const fileUrl = reader.result
		preview.innerHTML = `<img data-preview src="${fileUrl}">`;
	}

	reader.readAsDataURL(file)
}