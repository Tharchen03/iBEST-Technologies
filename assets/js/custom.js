$(document).ready(function () {
	"use strict";
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
	$(".team-carousel").slick({
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

	// $(window).load(function () {
	// 	$(".welcome-hero-txt h2,.welcome-hero-txt p").removeClass("animated fadeInUp").css({
	// 		'opacity': '0'
	// 	});
	// 	$(".welcome-hero-serch-box").removeClass("animated fadeInDown").css({
	// 		'opacity': '0'
	// 	});
	// });

	// $(window).on('load', function () {
	// 	$(".welcome-hero-txt h2 ").addClass("line-1 anim-typewriter").css({
	// 		'opacity': '1'
	// 	})
	// });
	// 	$(".welcome-hero-serch-box").addClass("animated fadeInDown").css({
	// 		'opacity': '0'
	// 	});
	// });

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

document.addEventListener("DOMContentLoaded", function () {
	// Simulate loading time
	setTimeout(function () {
		// Hide the loader
		document.getElementById('loading-container').style.display = 'none';
		// Show the main content
		document.querySelector('.main-content').style.display = 'block';
	}, 3000); // Adjust the time as needed
});

// document.addEventListener('DOMContentLoaded', function () {
// 	const mainText = document.querySelector('.main-text');
// 	mainText.style.opacity = '1';

// 	setTimeout(function () {
// 		const slogan = document.querySelector('.slogan');
// 		slogan.style.display = 'block'; // Show the slogan container
// 		const words = document.querySelectorAll('.slogan .word');
// 		words.forEach((word, index) => {
// 			word.style.animationDelay = `${index * 0.5}s`;
// 		});
// 	}, 500); 

// 	const words = document.querySelectorAll('.slogan .word');
// 	const sloganAnimationDuration = words.length * 500;

// 	setTimeout(function () {
// 		document.getElementById('loading-screen').style.display = 'none';
// 		document.getElementById('main-content').style.display = 'block';
// 	}, 500 + sloganAnimationDuration + 500);
// });


$(document).ready(function () {
	$('.blog-slider').slick({
		infinite: true,
		slidesToShow: 3,
		centerMode: true,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		centerPadding: '10px',
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					centerMode: true,
					dots: true,
					centerPadding: '10px',
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					// centerMode: true,
					slidesToScroll: 1
				}
			}
		]
	});
});

$(document).ready(function () {
	$('.topic-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		responsive: [{
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

$(document).ready(function () {
	$('.client-topics-content ul').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '30px',
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [{
				breakpoint: 1024, // Tablet breakpoint
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					centerMode: true,
					centerPadding: '20px',
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2.5,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '5px',
					// dots: true,
				}
			}
		]
	});
});


const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["the 21st century.", "the digital age."];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
	if (charIndex < textArray[textArrayIndex].length) {
		if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
		typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
		charIndex++;
		setTimeout(type, typingDelay);
	} else {
		cursorSpan.classList.remove("typing");
		setTimeout(erase, newTextDelay);
	}
}

function erase() {
	if (charIndex > 0) {
		if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
		typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
		charIndex--;
		setTimeout(erase, erasingDelay);
	} else {
		cursorSpan.classList.remove("typing");
		textArrayIndex++;
		if (textArrayIndex >= textArray.length) textArrayIndex = 0;
		setTimeout(type, typingDelay + 1100);
	}
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
	if (textArray.length) setTimeout(type, newTextDelay + 250);
});