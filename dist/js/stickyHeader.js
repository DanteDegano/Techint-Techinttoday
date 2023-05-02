



$(document).ready(function(){

    $(".Header-sticky").click(function(e){
        e.preventDefault();
        console.log("Prueba");
        $(this).toggleClass("on");
        $(this).focus();
    });

  	$(".Header-sticky").blur(function(){
		console.log("sin focus");
    	$(this).removeClass("on");
  	});

});




