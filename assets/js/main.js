import * as loadHtml from "./modules/loadHtml.js"
import {createProduct} from "./modules/createProduct.js"
import {getData} from "./modules/getData.js"
import {Card} from "./modules/createCard.js"
import * as dropDown from "./modules/dropDown.js"
import {removeItem, modifyItem, closeModal, updateItem} from "./modules/removeItem.js"
import * as logado from "./modules/logado.js"
import {logout} from "./modules/logout.js"
import {user} from "./modules/credencilasUser.js"
import {searchBar} from "./modules/searchProduct.js"
import {showItem} from "./modules/showItem.js"

showItem()
console.log(getData())
