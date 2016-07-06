// JavaScript Document
jQuery(document).ready(function(){
	//alert("hey");
	$("#hide").click(function(){
			$("#face").hide();
	$("button").click(function(){
        $("#face").fadeIn();
        $("#face").fadeIn("slow");
        $("#face").fadeIn(3000);
    });
		
		});
		$( "#clickme" ).click(function() {
  $( "#face" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});
	
});

