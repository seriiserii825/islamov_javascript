//variable init
let time = 18,
	name,
	open,
	price = 325,
	money,
	nameValue = document.getElementsByClassName('name-value')[0],
	budgetValue = document.getElementsByClassName('budget-value')[0],
	goodsItemBtn = document.getElementsByClassName('goods-item-btn')[0],
	goodsItem = document.getElementsByClassName('goods-item'),
	goodsValue = document.getElementsByClassName('goods-value')[0],
	chooseItem = document.getElementsByClassName('choose-item')[0],
	itemsValue = document.getElementsByClassName('items-value')[0],
	timeValue = document.getElementsByClassName('time-value')[0],
	isOpenValue = document.getElementsByClassName('isopen-value')[0],
	countBudgetBtn = document.getElementsByClassName('count-budget-btn')[0],
	countBudgetValue = document.getElementsByClassName('count-budget-value')[0],
	hireEmployersItems = document.getElementsByClassName('hire-employers-item'),
	hireEmployersBtn = document.getElementsByClassName('hire-employers-btn')[0],
	employersValue = document.getElementsByClassName('employers-value')[0],
	openBtn = document.getElementById('open-btn');

//project start	
openBtn.addEventListener('click', function(){
	//get budget from user
	money = prompt('How much is your budget?', '1000');

	//check data from user
	while(isNaN(money) || money === '' || money == null ){
		//get budget from user
		money = prompt('How much is your budget?', '1000');
	}

	//get name of shop from user
	name = prompt('What is your shop called?', 'Barber');

	//show budget 
	budgetValue.innerText = money;
	//show name 
	nameValue.innerText = name;
});

//show categories
goodsItemBtn.addEventListener('click', function(){
	for (let i = 0; i < goodsItem.length; i++){
		mainList.shopGoods[i] = goodsItem[i].value;
	}

	goodsValue.innerText = mainList.shopGoods.join(', ');
	console.log(goodsValue);
});

//input items
chooseItem.addEventListener('change', function(){
	let values = this.value;

	itemsValue.innerText = values;
});

//what time is 
timeValue.addEventListener('change', function(){
	time  = this.value;

	if(time > 8 && time < 22){
		isOpenValue.style.backgroundColor = 'green';
	}else{
		isOpenValue.style.backgroundColor = 'red';
	}
});

//count budget
countBudgetBtn.addEventListener('click', function(){
	countBudgetValue.value = budgetValue.innerText / 30;
});

//employers
hireEmployersBtn.addEventListener('click', function(){
	let employersArr = [];	

	for(let i = 0; i < hireEmployersItems.length; i++){
		employersArr[i] = hireEmployersItems[i].value;
	}

	employersValue.innerText = employersArr.join(', ');
});

let mainList = {
	budget: '',
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	showDiscount: function showDiscount(){
		if(mainList.discount === true){
			return price*0.8;
		}
	},
};


