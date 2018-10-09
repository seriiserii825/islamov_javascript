//Task1

// 1) Написать проверку, что пользователь может:
//  Ввести в типах товара только строку
//  Не может оставить строку пустой
//  Не может отменить вопрос

// 2) При помощи метода перебора массива(forEach) вывести на экран
// сообщение "У нас вы можете купить: " и полученные товары
// 
// Товары должны начинаться с 1, а не с 0. Этот пункт - часть
// одноименной функции

//Инициализация переменных
let time = 18,
	name,
	open,
	price = 325,
	money;

let mainList = {
	budget: '',
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	start: function start() {
		mainList.budget = prompt('How much is your budget?', '1000');

		while(isNaN(mainList.budget) || mainList.budget === '' || mainList.budget == null ){
			mainList.budget = prompt('How much is your budget?', '1000');
		}

		mainList.shopName = prompt('What is your shop called?', 'Barber');
	},
	workShop: function workShop(time){
		if(time > 8 && time < 22){
			mainList.open = true;
		}
	},
	getShopGoods: function getShopGoods(){
		for (let i = 0; i < 5; i++){
			mainList.shopGoods[i] = prompt('What kind of good you will sale?');
		}
	},
	getDailyBudget: function getDailyBudget(){
		return mainList.budget / 30;
	},
	showDiscount: function showDiscount(){
		if(mainList.discount === true){
			return price*0.8;
		}
	},
	getEmployers: function getEmployers(){
		for (var i = 0; i < 4; i++) {
			mainList.employers[i] = prompt('Введите имя нового сотрудника', ''); 
		}
	},
	showGoods: function showGoods(){
		let shopGoods = mainList.shopGoods;
		
		shopGoods.forEach(function(item, index, shopGoods){
			alert('У нас вы можете приобрести: ' + item);
		});
	}
};

console.log(mainList);
