var magazine = $('.magazine > .page');
var contlist = $('.modal_cantidad ul');
var cantlist = magazine.length;

magazine.each(function(index){
	$(this).css('z-index',-+index).addClass('index_'+index).css('opacity','1');
	contlist.append('<li><a href="'+ 'index_' + index +'">'+index+'</a></li>');
});


$('.navigator #next').on('click touchstart',function(event){
	event.preventDefault();
	back_();
});

$('.navigator #back').on('click touchstart',function(event){
	event.preventDefault();
	next_();
});
$('.navigator #list').on('click touchstart',function(event){
	event.preventDefault();
	$('.modal_cantidad').slideToggle('fast');
	$('.magazine,body').toggleClass('back__');
});


$("body").keydown(function(e) {
  if(e.keyCode == 37) { // left
    next_();
  }
  else if(e.keyCode == 39) { // right
		back_();
  }
});

function next_(){
	magazine.each(function(){
		if (!$(this).hasClass('visible')){
			$(this).addClass('active visible');
			return false;
		}
	});
}
function back_(){
	$(magazine.get().reverse()).each(function(){
		if ($(this).hasClass('visible')){
			$(this).removeClass('active visible');
			return false;
		}
	});
}
$(document).ready(function(){

});