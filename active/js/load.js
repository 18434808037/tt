$(function(){
//loading
	var ajaxbg = $("<div id='loadingDiv' style='position: fixed;width:100%;height:100%;overflow:hidden; background-color:#fff;z-index:999999;'><iframe style=' overflow: hidden;width: 24em;height: 30em;position: absolute;background-color: #fff;left: 50%;top: 50%;-webkit-transform: translateX(-50%) translateY(-50%);-moz-transform: translateX(-50%) translateY(-50%);-ms-transform: translateX(-50%) translateY(-50%);-o-transform: translateX(-50%) translateY(-50%);transform: translateX(-50%) translateY(-50%);' scrolling='no' frameborder=0 src='load.html'></iframe></div>");


	$(document).ajaxStart(function () {
		ajaxbg.appendTo("body");
	}).ajaxStop(function () {
		ajaxbg.fadeOut("slow");
	});

	$("#ajaxCon").load("shile.html");
    
}); 