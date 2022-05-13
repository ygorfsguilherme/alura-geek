var inputFile = document.querySelector('#file')

setTimeout(()=>{
	inputFile.addEventListener('change', ()=>{
		const file = inputFile.files[0];
		addImage(file)
	})
	
	const dropOver = document.querySelector('[data-drop]').addEventListener('dragover', (event)=>{
		event.preventDefault()
		event.stopPropagation()
		return false
	})

	const dropLeave = document.querySelector('[data-drop]').addEventListener('drop', (event)=>{
		event.preventDefault()
		event.stopPropagation()
		const file = event.dataTransfer.files[0]

		addImage(file)

		return false
	})

	const dropClick = document.querySelector('[data-drop]').addEventListener('click', (event)=>{
		event.preventDefault()
		event.stopPropagation()
		inputFile.click()
		return false
	})

	function addImage(file){
		var reader  = new FileReader();
		
		reader.onload =  () =>{
			let preview = document.querySelector('[data-drop]')
			const fileUrl = reader.result
			preview.innerHTML = `<img src="${fileUrl}" data-preview>`;
		}

		reader.readAsDataURL(file)
	}
}, 110);

