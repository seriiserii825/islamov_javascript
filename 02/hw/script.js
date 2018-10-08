//Task1

// let budget = prompt('How much is your budget?', '1000');

// let shopName = prompt('What is your shop called?', 'Barber');

// let mainList = {
// 	budget: 32000,
// 	shopName: '',
// 	shopGoods: [],
// 	employers: {},
// 	open: false
// };

// mainList.budget = budget;
// mainList.shopName = shopName; 

// for (let i = 0; i < 5; i++){
// 	mainList.shopGoods[i] = prompt('What kind of good you will sale?');
// }

// let dailyBudget = mainList.budget / 30;

// console.log(mainList);

//Task2

//Task3

// 1) Создать массив week и записать в него дни недели
// ·        Вывести на экран все дни недели
// ·        Каждый из них с новой строчки
// ·        Выходные дни - жирным шрифтом
// ·        Текущий день - курсивом

// let week = ['sun', 'mon', 'tue', 'wed', 'thus', 'fri', 'sat'];
// let holydays = [];
// let anotherDays = [];

// let date = new Date();
// let today = date.getDay();

// for(let i = 0; i < week.length; i++){
// 	if (i == today){
// 		today = week[i];
// 	}

// 	if(i == 6 || i === 0){
// 		holydays.push(week[i]);
// 	}else{
// 		anotherDays.push(week[i]);
// 	}
// }

// let jsWeek = document.getElementById('js-weeks');

// jsWeek.innerHTML = '<ul>';
// jsWeek.innerHTML = '<li> <strong>' + holydays[0] + '</strong></li>';

// for(let i = 0; i < anotherDays.length; i++){
// 	if(anotherDays[i] === today) {
// 		jsWeek.innerHTML += '<li><ins>' + today + '</ins></li>';
// 	} else {
// 		jsWeek.innerHTML += '<li>' + anotherDays[i] + '</li>';
// 	}
// }

// jsWeek.innerHTML += '<li><strong>' + holydays[1] + '</strong></li>' + '</ul>';

// Task 3
// 2) Создать массив arr = []
// ·        Записать в него 7 многозначных чисел в виде строк
// ·        Вывести в консоль только те, что начинаются с цифры 3 или 7 (Должны присутствовать в массиве)

// let arr = ['342', '543', '123', '798', '322', '890', '777'];

// for(let i = 0; i < arr.length; i++){
// 	if(arr[i][0] == 3 || arr[i][0] == 7){
// 		console.log(arr[i]);
// 	}
// }





