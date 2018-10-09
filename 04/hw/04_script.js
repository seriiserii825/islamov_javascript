//1) У вас есть str = “урок-3-был слишком легким”
// Сделать так, чтобы строка начиналась с большой буквы

// 2) Теперь замените все “-” на пробелы

// Вывести в консоль
// 3) Из получившейся строки вырезать слово “легким”, заменить 2
// последние буквы на “о”

// Вывести на экран
// 4) У вас также есть массив arr = [20, 33, 1, “Человек”, 2, 3]

// Вывести в консоль квадратный корень из суммы кубов его элементов

let str = 'урок-3-был слишком легким'; 

let upperStr = str[0].toUpperCase() + str.slice(1);

console.log('upper ' + upperStr);

let replaceStr = upperStr.replace(/-/g, ' ');

console.log('replace ' + replaceStr);

let pos = replaceStr.indexOf('легким');
let sliceStr = replaceStr.slice(0, pos);

console.log('slice ' + sliceStr);

let arr = [20, 33, 1, 'Человек', 2, 3];

let numbers = arr.filter(function(number) {
	return parseInt(number);
});

let cubs = numbers.map(function(index){
	return index*index*index;
});

let sum = 0;

for(let i = 0; i < cubs.length; i++){
	sum += cubs[i];
}

console.log(cubs);
console.log(sum);
console.log(Math.sqrt(sum));


