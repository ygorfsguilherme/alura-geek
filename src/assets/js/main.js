import {loadTemplate} from "./modules/loadHtml.js"
import {Card} from "./modules/createCard.js"
import {removeItem, modifyItem, closeModal, updateItem} from "./modules/removeItem.js"
import {checkAdm} from "./modules/checkAdm.js"
import {user} from "./modules/credencilasUser.js"
import {searchBar} from "./modules/searchProduct.js"
import {showItem} from "./modules/showItem.js"

import {loging, logout} from "./modules/login.js"
import {route} from "./modules/route.js"
import {allProducts} from "./modules/allProducts.js"
import * as home from "./home.js"
import { addProduct } from "./modules/addProduct.js"
import * as dropDown from "./modules/dropDown.js"

window.onload = function(){
	checkAdm()
	route()
	user()
	allProducts()
	addProduct()
	showItem()
	removeItem()
	modifyItem()
	loging()
	logout()
}