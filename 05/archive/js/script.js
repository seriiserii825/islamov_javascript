
//1. Восстановить порядок в меню, добавить пятый пункт

let menu = document.querySelector('#js-menu');
let fifthMenuItem = document.createElement('li');

fifthMenuItem.classList.add('menu-item');
let fifthMenuItemText = document.createTextNode('Пятый пункт');
fifthMenuItem.appendChild(fifthMenuItemText);
menu.appendChild(fifthMenuItem);

//2.Заменить картинку заднего фона на другую из папки img

let body = document.querySelector('body');
body.style.backgroundImage  = 'url(img/apple_true.jpg)';

//3. Поменять заголовок, добавить слово "подлинную"

let title = document.querySelector('#js-title');
let titleText = title.innerHTML;
let titleArr = titleText.split(' ');
let newStr = 'подлинную';

title.innerText = '';

function cleanArray(actual) {
  var newArray = new Array();
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}

let newArr = cleanArray(titleArr);

newArr.splice(4, 0, newStr);

let newTextTitle = document.createTextNode(newArr.join(' '));

title.appendChild(newTextTitle);

//4.  Удалить рекламу со страницы

let adv = document.querySelector('.adv');

adv.remove();

//  Спросить у пользователя отношение к технике apple и записать ответ в
// поле "prompt"
let promptItem = document.querySelector('#prompt');

setTimeout(function(){
	let answer = prompt('Как вы относитесь к технике Apple?', '');
	promptItem.innerText = answer;
},3000);







