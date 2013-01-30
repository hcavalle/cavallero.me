
$(document).ready(function() {
	//$('#content-home').hide();
	
	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	
	//click skills ajax
	$('#skillsTitle').click(function(event){
		$('#content-home').hide();
		event.preventDefault();
		$('a').removeClass('active');
		$(this).addClass('active');
		$('#content-home').load("skillsv1.html", function(response, status, xhr) {
		  if (status == "error") {
		    var msg = "Sorry but there was an error: ";
		    $("#error").html(msg + xhr.status + " " + xhr.statusText);
  			}
  		$('#content-home').fadeIn('slow');
  		$('#recentwork').remove();
  		});
	});
	//skills accordion
	
	//click work ajax
	$('#workTitle').click(function(event){
		$('#content-home').hide();
		event.preventDefault();
		$('a').removeClass('active');
		$(this).addClass('active');
		$('#content-home').load("work.html", function(response, status, xhr) {
		  if (status == "error") {
		    var msg = "Sorry but there was an error: ";
		    $("#error").html(msg + xhr.status + " " + xhr.statusText);
  			}
  		$('#content-home').fadeIn('slow');
  		$('#recentwork').remove();
  		});
	});

	//bounce - docs here http://docs.jquery.com/UI/Effects/Bounce
	//$("#bounce").onload(function () {
      $('#bounce').effect("bounce", {times:100}, 3000);
	//});
});

$(function() {
			$( "#accordion" ).accordion();
});
		
		
