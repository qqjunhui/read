$(function(){
	let btn=document.querySelector('.welldown');
	btn.addEventListener('touchend',function(e){
		e.preventDefault();
		$('.shadow').css('display','block');
		location.href='L-head-2.html'
	})
})
