$(document).ready(function () {
	"use strict";

	/*==================================
* Author        : "ThemeSine"
* Template Name : Listrace directory HTML Template
* Version       : 1.0
==================================== */




	/*=========== TABLE OF CONTENTS ===========
	1. Scroll To Top 
	2. slick carousel
	3. welcome animation support
	4. feather icon
	5. counter
	======================================*/

	// 1. Scroll To Top 
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 600) {
			$('.return-to-top').fadeIn();
		} else {
			$('.return-to-top').fadeOut();
		}
	});
	$('.return-to-top').on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500);
		return false;
	});


	// 2. slick carousel

	$(".testimonial-carousel").slick({
		infinite: true,
		centerMode: true,
		autoplay: true,
		slidesToShow: 5,
		slidesToScroll: 3,
		autoplaySpeed: 2500,
		// the magic
		responsive: [{

				breakpoint: 1440,
				settings: {
					slidesToShow: 3
				}

			},
			{

				breakpoint: 1024,
				settings: {
					slidesToShow: 2,

				}

			},
			{

				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					centerMode: false,
				}

			},
			{

				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}

			}
		]
	});



	// 3. welcome animation support

	$(window).load(function () {
		$(".welcome-hero-txt h2,.welcome-hero-txt p").removeClass("animated fadeInUp").css({
			'opacity': '0'
		});
		$(".welcome-hero-serch-box").removeClass("animated fadeInDown").css({
			'opacity': '0'
		});
	});

	$(window).load(function () {
		$(".welcome-hero-txt h2,.welcome-hero-txt p").addClass("animated fadeInUp").css({
			'opacity': '0'
		});
		$(".welcome-hero-serch-box").addClass("animated fadeInDown").css({
			'opacity': '0'
		});
	});

	// 4. feather icon
	feather.replace();

	// 5. counter
	$(window).on('load', function () {
		$('.counter').counterUp({
			delay: 10,
			time: 3000
		});
	});

});

document.addEventListener('DOMContentLoaded', function() {
    // Show the main text immediately
    const mainText = document.querySelector('.main-text');
    mainText.style.opacity = '1';

    // Show the slogan with word-by-word animation
    setTimeout(function() {
        const slogan = document.querySelector('.slogan');
        slogan.style.display = 'block'; // Show the slogan container
        const words = document.querySelectorAll('.slogan .word');
        words.forEach((word, index) => {
            word.style.animationDelay = `${index * 0.5}s`;
        });
    }, 500); // Delay to start the slogan animation

    // Calculate the total duration of the slogan animation
    const words = document.querySelectorAll('.slogan .word');
    const sloganAnimationDuration = words.length * 500;

    // Hide loading screen and show main content after both animations complete
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 500 + sloganAnimationDuration + 500); 
});


$(document).ready(function(){
	$('.blog-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});

$(document).ready(function(){
	$('.topic-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});







