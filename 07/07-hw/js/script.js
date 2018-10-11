window.addEventListener('DOMContentLoaded', function(){
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
});

