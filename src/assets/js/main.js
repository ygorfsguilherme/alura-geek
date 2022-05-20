import {checkAdm} from "./modules/checkAdm.js"
import {user} from "./modules/credencilasUser.js"
import {showItem} from "./modules/showItem.js"

import {logging, logout} from "./modules/login.js"
import {buttonCheck, route} from "./modules/route.js"
import {allProducts} from "./modules/allProducts.js"
import * as home from "./home.js"
import { addProduct } from "./modules/addProduct.js"
import * as dropDown from "./modules/dropDown.js"
import { closeModal } from "./modules/closeModal.js"

window.onload = function(){
	checkAdm()
	route()
	buttonCheck()
	user()
	allProducts()
	addProduct()
	logging()
	logout()
	closeModal()
}