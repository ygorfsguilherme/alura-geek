import {addProduct} from './modules/addProduct.js';
import {dropOver, dropLeave} from './modules/dropDown.js';
import {checkLogin} from './modules/checkLogin.js';

if(!checkLogin()){
	location.href = 'login.html'
}