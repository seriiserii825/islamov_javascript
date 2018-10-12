window.addEventListener('DOMContentLoaded', function(){
	/*tabs
	=======================================*/ 
	let infoHeader = document.querySelector('.info-header');
	let infoHeaderTab = document.querySelectorAll('.info-header-tab');
	let infoTabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabs(n){
		for(let i = n; i < infoTabContent.length; i++){
			infoTabContent[i].classList.remove('show');
			infoTabContent[i].classList.add('hide');
		}
	}

	hideTabs(1);

	infoHeader.addEventListener('click', function(e){
		let target = e.target;

		if(target.className == 'info-header-tab'){
			for(let i = 0; i < infoHeaderTab.length; i++){
				if(target === infoHeaderTab[i]){
					showTab(i);
					break;
				}
			}
		}

	});

	function showTab(e){
		if(infoTabContent[e].classList.contains('hide')){
			hideTabs(0);

			infoTabContent[e].classList.remove('hide');
			infoTabContent[e].classList.add('show');
		}
	}

	/*timer
	=======================================*/ 
	let deadline = '2018-10-13';

	function getTimeData(endtime){
		let timeMillisec = Date.parse(endtime) - Date.parse(new Date());
		let seconds = Math.floor((timeMillisec/1000) % 60);
		let minutes = Math.floor((timeMillisec/1000/60) % 60);
		let hours = Math.floor((timeMillisec/(1000*60*60)));


		return {
			t: timeMillisec,
			seconds: seconds,
			minutes: minutes,
			hours: hours,
		};
	}

	function setClock(elemId, endtime){
		let timer = document.getElementById(elemId);
		let hours = document.getElementsByClassName('hours')[0];
		let minutes = document.getElementsByClassName('minutes')[0];
		let seconds = document.getElementsByClassName('seconds')[0];
		if(seconds < 10){
			seconds = '0' + seconds;
		}

		function updateClock(){
			let t = getTimeData(endtime);

		if(t.hours < 10){
			t.hours = '0' + t.hours;
		}
		if(t.minutes < 10){
			t.minutes = '0' + t.minutes;
		}
		if(t.seconds < 10){
			t.seconds = '0' + t.seconds;
		}
			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;
		}


		updateClock();

		let timeInterval = setInterval(updateClock, 1000);
	}

	setClock('timer', deadline);

	/*scroll to menu elements
	=======================================*/ 

	function scrollToMenu(menuId){
		let menu = document.getElementById(menuId);

		menu.addEventListener('click', function(e){
			e.preventDefault();
			let target = e.target;
			let href = target.getAttribute('href');
			let elem = document.querySelector(href);
			let scrollTarget = elem.offsetTop - 100;


			let currentPos = window.pageYOffset;


			let fps = 50; // 50 кадров в секунду 

			var timer = setInterval(function() { 
				if (currentPos == scrollTarget){
					clearInterval(timer);
					return;
				} else {
					if(scrollTarget > currentPos){
						currentPos++;
						window.scrollTo(0, currentPos);
					}else{
						currentPos--;
						window.scrollTo(0, currentPos);
					}
				} 			
			}, 50 / fps);
		});
	}

	scrollToMenu('js-menu');

	/*modals
	=======================================*/ 
	function showModal(){
		let ageDiv = document.createElement('div');
		let descrBtn = document.querySelectorAll('.description-btn');
		let ageInputFamily = document.createElement('input');
		let ageInputName = document.createElement('input');
		let ageInputAge = document.createElement('input');
		let ageBtn = document.createElement('input');
		ageInputFamily.classList.add('age-input', 'age-input-family');
		ageInputName.classList.add('age-input', 'age-input-name');
		ageInputAge.classList.add('age-input', 'age-input-age');
		ageBtn.classList.add('age-input', 'age-input-btn');
		ageInputFamily.setAttribute('placeholder', 'Ваша фамилия');
		ageInputName.setAttribute('placeholder', 'Ваше имя');
		ageInputAge.setAttribute('placeholder', 'Ваш возраст');
		ageBtn.setAttribute('value', 'Отправить');
		ageDiv.classList.add('age-modal', 'hidden');
		ageDiv.innerHTML = '<h1>Данные пользователя</h1>';
		ageDiv.appendChild(ageInputFamily);
		ageDiv.appendChild(ageInputName);
		ageDiv.appendChild(ageInputAge);
		ageDiv.appendChild(ageBtn);

		for(let i = 0; i < descrBtn.length; i++){
			descrBtn[i].addEventListener('click', function(){
				document.body.appendChild(ageDiv);
				ageDiv.classList.remove('hidden');
			});
		}

		let age = document.getElementsByClassName('age')[0];

		ageBtn.addEventListener('click', function(){
			ageDiv.classList.add('hidden');
		});

	}

	showModal();
});

