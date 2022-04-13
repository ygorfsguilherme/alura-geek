export function getData(){
	const db = localStorage.getItem('products')
	return JSON.parse(db)
}

export function setData(data){
	const db = localStorage.setItem('products', data)
}