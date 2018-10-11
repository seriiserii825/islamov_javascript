window.addEventListener('DOMContentLoaded', function(){
	let container = document.querySelector('.container');
	let box = document.querySelector('.box');
	let pos = 0;

	let timerId = setInterval(moveBox, 20);

	function moveBox(){
		if(pos != 550){
			pos++;

			box.style.top = pos + 'px';
			box.style.left = pos + 'px';
		}else{
			clearInterval(timerId);
		}
	}

});