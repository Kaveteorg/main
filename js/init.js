//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "16 July 2024 12:15:14",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	