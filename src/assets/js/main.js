import {loadTemplate} from "./modules/loadHtml.js"
import {Card} from "./modules/createCard.js"
import * as dropDown from "./modules/dropDown.js"
import {removeItem, modifyItem, closeModal, updateItem} from "./modules/removeItem.js"
import {addProductButton} from "./modules/logado.js"
import {logout} from "./modules/logout.js"
import {user} from "./modules/credencilasUser.js"
import {searchBar} from "./modules/searchProduct.js"
import {showItem} from "./modules/showItem.js"


window.onload = function(){
	showItem()
	removeItem()
	addProductButton()
	modifyItem()
	logout()
}

//import * as dataBase from "./modules/dataBase.js"


