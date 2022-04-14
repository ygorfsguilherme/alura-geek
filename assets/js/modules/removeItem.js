import {getData} from './getData.js'
import {setData} from './getData.js'

let list = getData()

export function removeItem(id){
	list = list.filter((item) => item.ID !== id)
	setData(list)
}