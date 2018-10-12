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

			console.log('href: ' + href);
			console.log('elem: ' + elem);
			console.log('scrollTarget: ' + scrollTarget);

			let currentPos = window.pageYOffset;

			console.log('currentPos: ' + currentPos);

			let fps = 50; // 50 кадров в секунду 

			var timer = setInterval(function() { 
				if (currentPos == scrollTarget){
					console.log('equal');
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
			}, 1000 / fps);
		});

	}

	scrollToMenu('js-menu');
});

