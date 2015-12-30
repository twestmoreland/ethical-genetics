$(document).ready(function(){
	$('nav > ul > li').bind('mouseover', openSubMenu); //opens sub menu when li moused over
	$('nav > ul > li').bind('mouseout', closeSubMenu); //closed sub menu when li mouse leaves
	
	function openSubMenu() {
		$(this).find('ul').removeClass('no-show');
	};
	
	function closeSubMenu() {
		$(this).find('ul').addClass('no-show')
	};

	$('.glow-button').click(function(){
		$('.glow-button').addClass('active-glow');
		$('.carrot-button').removeClass('active-glow');
		$('.normal-button').removeClass('active-glow');
		$('.white-button').removeClass('active-glow');
		$('.glow').removeClass('hidden');
		$('.carrot').addClass('hidden');
		$('.normal').addClass('hidden');
		$('.white').addClass('hidden');
	});

	$('.normal-button').click(function(){
		$('.normal-button').addClass('active-glow');
		$('.carrot-button').removeClass('active-glow');
		$('.glow-button').removeClass('active-glow');
		$('.white-button').removeClass('active-glow');
		$('.normal').removeClass('hidden');
		$('.carrot').addClass('hidden');
		$('.glow').addClass('hidden');
		$('.white').addClass('hidden');
	});

	$('.white-button').click(function(){
		$('.white-button').addClass('active-glow');
		$('.carrot-button').removeClass('active-glow');
		$('.glow-button').removeClass('active-glow');
		$('.normal-button').removeClass('active-glow');
		$('.white').removeClass('hidden');
		$('.carrot').addClass('hidden');
		$('.glow').addClass('hidden');
		$('.normal').addClass('hidden');
	});

	$('.carrot-button').click(function(){
		$('.carrot-button').addClass('active-glow');
		$('.glow-button').removeClass('active-glow');
		$('.normal-button').removeClass('active-glow');
		$('.white-button').removeClass('active-glow');
		$('.carrot').removeClass('hidden');
		$('.white').addClass('hidden');
		$('.glow').addClass('hidden');
		$('.normal').addClass('hidden');
	});

});





