$(function(){
	var imgWidth = $(".col_img").width();
	$(".col_img").css({"height":imgWidth+"px"});
	var digits = $(".digit");
	console.log("digits的长度"+digits);
	for(var i=0;i<digits.length;i++){
		this.index = i;
		var content = digits.text();
		console.log(content);
	}
});
