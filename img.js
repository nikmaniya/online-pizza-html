$(document).ready(function(){
    $('.img').mouseenter(function(){
           $(this).animate({width:'500px',height:'250px'});
    }); 
	$('.img').mouseleave(function(){
		$(this).animate({width:'390px',height:'195px'});
	});
});