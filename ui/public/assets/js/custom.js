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
        autoplaySpeed: 3500,
        centerPadding: '20px',
        // the magic
        responsive: [{
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 31,
                    centerMode: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20px',
                }
            }
        ]
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
$(document).ready(function () {
    $('.blog-slider').slick({
        infinite: true,
        slidesToShow: 4, // Default setting for laptops
        centerMode: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        centerPadding: '20px',
        responsive: [
            {
                breakpoint: 2000, // Larger screens
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: true,
                    centerPadding: '30px',
                }
            },
            {
                breakpoint: 1800, // Larger screens
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: true,
                    centerPadding: '100px',
                }
            },
            {
                breakpoint: 1024, // Laptops and smaller desktops
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: true,
                    dots: true,
                    centerPadding: '20px',
                }
            },
            {
                breakpoint: 600, // Tablets and large mobile devices
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    slidesToScroll: 1,
                    centerPadding: '30px',
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
                breakpoint: 1024,
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
const newTextDelay = 2000;
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

document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});


$(document).ready(function(){
    if (window.matchMedia('(max-width: 600px)').matches) {
      $('.list-topics-content ul').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        // centerMode:true;
        // dots: true,
      });
    }
  });


  