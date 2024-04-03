window.onscroll = function showHeader (){
	var header = document.querySelector ('.header');
	if(window.pageYOffset > 50){
		header.classList.add('header_active');
	}
	else{
		header.classList.remove('header_active');
	}
}