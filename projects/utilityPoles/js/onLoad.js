$(document).ready(function(){

	$( '.logo' ).animate(
				{ 'top' : "+=100%" },
				1100, "swing");

	$( '.nav' ).animate(
				{ 'top' : "+=100%" },
				700, "swing");

	$( '.welcometext' ).animate(
				{ 'top' : "+=150%" },
				1150, "swing");

	$( '.welcomebutton' ).animate(
				{ 'top' : "+=150%" },
				1300, "swing");

	$( '.welcomepostit' ).animate(
				{ 'top' : "+=148%" },
				1400, "swing");

	$(".welcomepostittext a").click(function(e) {
		/* delay */
			e.preventDefault();

			setTimeout(function() {
			  window.location.href = "pdfs/cfw_mediaWorks_2016.pdf";
			}, 1500);

		/* animations */
			$( '.logo' ).animate(
				{ 'top' : "+=200%" },
				1100, "swing");

			$( '.nav' ).animate(
				{ 'top' : "+=200%" },
				700, "swing");

			$( '.welcometext' ).animate(
				{ 'top' : "+=200%" },
				1150, "swing");

			$( '.welcomebutton' ).animate(
				{ 'top' : "+=200%" },
				1300, "swing");

			$( '.welcomepostit' ).animate(
				{ 'top' : "+=200%" },
				1400, "swing");
		});

	});