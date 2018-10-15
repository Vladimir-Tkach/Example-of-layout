/*<!--============ Плавный переход к якорю ===========-->*/
 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
	});
	
	$(".accordeon .p").hide().prev().click(function() {
		$(this).parents(".accordeon").find(".p").not(this).hide(500).prev().removeClass("active");
		$(this).next().not(":visible").show(500).prev().addClass("active");
	});

	$(".button-menu").click(function(){
		$(".nav").show(1000).toggleClass("activemenu inactivemenu");
	});
	$(".spanX").click(function(){
		$(".nav").show(1000).toggleClass("activemenu inactivemenu");
	});
	$("ul li a").click(function(){
		$(".nav").show(1000).toggleClass("activemenu inactivemenu");
	});

});