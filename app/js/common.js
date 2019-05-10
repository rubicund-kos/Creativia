$(function() {
	var burger = document.getElementById("burger");
	var navbar = document.getElementById("navbar");
	var closeBtn = document.getElementById("close");

	closeBtn.addEventListener("click", function(event) {
		event.preventDefault();
		navbar.classList.toggle("nav-active");
	});
	
	burger.addEventListener("click", adaptiveMenu);

	function adaptiveMenu(event) {
		event.preventDefault();
		navbar.classList.toggle("nav-active");
	};

	
  $('.header_content').slick({
		
		// autoplaySpeed: 2000,
		// autoplay: true,
		prevArrow: '<i class="fas fa-chevron-right"></i>',
		nextArrow: '<i class="fas fa-chevron-left"></i>',
		infinite: false,		
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					infinite: true,
					dots: true,
					dotsClass: "my-dots"
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					infinite: true,
					dots: true,
					dotsClass: "my-dots"
				}
			}
		]

	});
    
	
	
	

});
