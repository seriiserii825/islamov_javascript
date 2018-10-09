//Task1

//Инициализация переменных
let time = 18,
	name,
	open,
	price = 325,
	money;

//Функция при инициализации
function start() {
	money = prompt('How much is your budget?', '1000');

	while(isNaN(money) || money === '' || money == null ){
		money = prompt('How much is your budget?', '1000');
	}

	name = prompt('What is your shop called?', 'Barber');
}

start();

//Рабоатает ли магазин
function workShop(time){
	if(time > 8 && time < 22){
		return true;
	}else{
		return false;
	}
}

open = workShop(9);

//Insert goods in shop
function getShopGoods(){
	for (let i = 0; i < 5; i++){
		mainList.shopGoods[i] = prompt('What kind of good you will sale?');
	}
}

// getShopGoods();

//count daily budget
function getDailyBudget(){
	return mainList.budget / 30;
}

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: open,
	discount: true
};


function showDiscount(){
	if(mainList.discount === true){
		return price*0.8;
	}
}

console.log('discount is ' + showDiscount());

console.log('Daily budget is ' + getDailyBudget());

console.log(mainList);
