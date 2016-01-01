$(document).ready(function(){
	$('nav > ul > li').bind('mouseover', openSubMenu); //opens sub menu when li moused over
	$('nav > ul > li').bind('mouseout', closeSubMenu); //closed sub menu when li mouse leaves
	
	function openSubMenu() {
		$(this).find('ul').removeClass('hidden');
	};
	
	function closeSubMenu() {
		$(this).find('ul').addClass('hidden')
	};

	$('.button.clear').click(function(){
		$('input, textarea').val('');
		$('.pop-up').removeClass('hidden');
		$('.lightbox').removeClass('hidden');
	});
	$('.button.ok').click(function(){
		$('.pop-up').addClass('hidden');
		$('.lightbox').addClass('hidden');
	});
});