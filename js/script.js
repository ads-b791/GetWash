"use strict"



const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', function () {
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
	document.body.classList.toggle('no-scroll');
});



$(function () {

	$('.slider').slick({
		arrows: true,
		fade: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/prev-arrow.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/next-arrow-blue.svg" alt=""></button>'
	});

});
