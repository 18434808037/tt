$(function(){
	var imgWidth = $(".col_img").width();
	$(".col_img").css({"height":imgWidth+"px"});
	var digits = $(".digit").length;
	console.log("digits的长度"+digits);
	$.each(digits, function(i) {
//		$(this).index = i;
		console.log(i);
	});
	if(content==""){
		console.log(9);
		$(".digit_one").text("--");
	}
});
