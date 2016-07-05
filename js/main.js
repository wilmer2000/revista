$(document).ready(function(){
	var magazine = $('.magazine > .page');
	magazine.each(function(index){
		$(this).css('z-index',-+index);
	});

	$('.navigator #next').on('click touchstart',function(event){
		event.preventDefault();
		console.log(magazine);
		magazine.each(function(){
			if (!$(this).hasClass('visible')){
				$(this).addClass('active visible');
				return false;
			}
		});

	});
	$('.navigator #back').on('click touchstart',function(event){
		event.preventDefault();
		console.log(magazine);
		$(magazine.get().reverse()).each(function(){
			if ($(this).hasClass('visible')){
				$(this).removeClass('active visible');
				return false;
			}
		});
	});
});