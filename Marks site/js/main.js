$(document).ready(function(){
   $(".logo-an").fadeOut("slow");
	 $(".badd").fadeOut("slow");

})


$(document).ready(function(){
	if ($(window).width() < 720 ){
		$("ul a").removeClass("animated")
	}
$(".menu").click(function (){
		$("nav ul").toggleClass("click")
})
	$( window ).resize(function() {

				$(window).scroll(function(){

		if ($(window).width() > 1200 ){
		if ($(this).scrollTop() > 30) {
			$("header").css({
				  "height": "5.5em"
			})
			$('.logo').css({
				"width":"190px",
        "paddingTop": "9px"
			});
			$("nav ul a").css({
				"lineHeight": "5.1em",
				"font-size": "17px"
			})
		} else {
			$("header").css({
				  "height": "7em"
			})
			$('.logo').css({
				"width":" 234px",
        "paddingTop": "6px"
			});
			$("nav ul a").css({
				"lineHeight": "5.5em",
				"font-size": "20px"
			})
		}
		}
	});
	});


});

$(document).ready(function(){
			$('.customer-logos').slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000,
				arrows: false,
        speed:1000,
				dots: false,
					pauseOnHover: false,
					responsive: [{
					breakpoint: 768,
					settings: {
						slidesToShow: 3
					}
				}, {
					breakpoint: 520,
					settings: {
						slidesToShow: 2
					}
				}]
			});
		});



		$(".slider-box").vegas({
			timer:false,
			cover:true,
		    slides: [
		        { src: "../img/large-oil-refinery-plant-production-compressed.jpg" },
		        { src: "../img/banner_img1.jpg" },
		        { src: "../img/tco-onshore-oil-gas-1-l.jpg" }
		    ],
		     animation: 'fade'
		});

		$(".rslides").responsiveSlides({
		  auto: true,             // Boolean: Animate automatically, true or false
		  speed: 500,            // Integer: Speed of the transition, in milliseconds
		  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
		  pager: false,           // Boolean: Show pager, true or false
		  nav: true,             // Boolean: Show navigation, true or false
		  random: false,          // Boolean: Randomize the order of the slides, true or false
		  pause: false,           // Boolean: Pause on hover, true or false
		  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
		  prevText: "Previous",   // String: Text for the "previous" button
		  nextText: "Next",       // String: Text for the "next" button
		  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
		  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
		  manualControls: "",     // Selector: Declare custom pager navigation
		  namespace: "rslides",   // String: Change the default namespace used
		  before: function(){},   // Function: Before callback
		  after: function(){}     // Function: After callback
		});
