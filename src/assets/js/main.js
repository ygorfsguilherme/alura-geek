import {loadTemplate} from "./modules/loadHtml.js"
import {Card} from "./modules/createCard.js"
import * as dropDown from "./modules/dropDown.js"
import {removeItem, modifyItem, closeModal, updateItem} from "./modules/removeItem.js"
import {addProductButton} from "./modules/logado.js"
import {user} from "./modules/credencilasUser.js"
import {searchBar} from "./modules/searchProduct.js"
import {showItem} from "./modules/showItem.js"
import {loging, logout} from "./modules/login.js"

import {route} from "./modules/route.js"


window.onload = function(){
	route()
	showItem()
	removeItem()
	addProductButton()
	modifyItem()
	loging()
	logout()
}


//import * as dataBase from "./modules/dataBase.js"


