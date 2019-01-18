$(document).ready(function(){
	$('.hamburger-shell').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	});
	$('.bg-cover').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
    })
    $('#grid2 img').each(function(){
        var $this = $(this); 
        $this.wrap('<div class="item"><a></a></div>');
        $('a').removeAttr('href');  
    });
    $('#grid2').addClass('effect-2');
    
    var $container = $('.grid');
    // initialize
    $container.masonry({
    //columnWidth: 200,
    itemSelector: '.item'
    })
    $('.item > a').removeAttr('href')
});