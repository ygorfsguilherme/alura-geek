import {loadTemplate} from "./modules/loadHtml.js";

export const productPageAll = (){
	loadTemplate('src/view/templates/home.html', '[data-home]');
}