// JavaScript Document
$(function() {
	ale();

	function ale() {
		var w = document.documentElement.clientWidth || document.body.clientWidth;
		var h = document.documentElement.clientHeight || document.body.clientHeight;
		/*var w=$("#viewport").width();
		var h=$("#viewport").height();*/
		$("#zd").css({
			"width": w + "px",
			"height": h + "px",
			"background-size": w + "px " + h + "px",
			"background-attachment": "fixed"
		})
		$(".tip").css({
			"width": w + "px",
			"height": h + "px",
			"background-size": w + "px " + h + "px",
			"background-attachment": "fixed",
			"background-color": "rgba(0,0,0,0.5)"
		})
	}
	zd = $("#zd");
	zdh = $("#zdh");
	czcd = $("#czcd");
	tip = $(".tip");
	succ = $(".succ");
	zdco = $(".zdco");
	know = $(".know");

	
	
	

	$(".vk1").click(function() {
//		$("iframe").attr("src","zdl.html");
//		$("iframe").css({"z-index":"9999999","background-color":"rgba(0,0,0,0.5)"});
		$("#ttsx1").css({
			"background-color":"#8c0000",
			"color":"#ffffff"
			});
		$("#ttsx2").css({
			"background-color":"#ffffff",
			"color":"#009245"
			});
	});
	$(".vk2").click(function() {
//		$("iframe").attr("src","zdr.html");
//		$("iframe").css({"z-index":"9999999","background-color":"rgba(0,0,0,0.5)"});
		$("#ttsx2").css({
			"background-color":"#006600",
			"color":"#ffffff"
			});
		$("#ttsx1").css({
			"background-color":"#ffffff",
			"color":"#8c0000"
			});
		
	});
	
	

	$(".once").click(function() {
		tip.css({
			"display": "block"
		});
		succ.css({
			"display": "block"
		});
//		setTimeout(tip.hide(),2000);
//		setTimeout(succ.hide(),2000);
		//修改
		setTimeout(function(){tip.hide();},1000);
		setTimeout(function(){succ.hide();},1000); 

	})

	//修改
	know.click(function(e) {
		//zd.css({"display":"none"});
		tip.css({
			"display": "none"
		});
		e.stopPropagation();
	})

	zd.click(function(e) {
		//		e.stopPropagation();
		zd.css({
			"display": "none"
		});
//		window.location.href = "vs.html";
		window.history.go(1);
		$('#iframe', window.parent.document).css({"z-index":"-1","background":"none"});
	})
	zdco.click(function(e) {
			e.stopPropagation();
		})
		//	
	
	
	function qq(){ 
//		console.log(2);
//		$(window.frames["iframe"].document).find("#inn");
		$("#inn").focus(function(){
			console.log(0);
			$(this).keypress(function(event){  
				var keyCode = event.which;  
				if ((keyCode >= 48 && keyCode <=57)&&($(this).text().length==0)){ 
					return true;  
				}else{  
					return false;  
				}
			}).focus(function () {  
				this.style.imeMode='disabled';  
			});
		}) 
	}
	qq();
//	window.frames['iframe'].qq();
//	document.getElementById("iframe").contentWindow.qq();


	
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if(isiOS) {
		$(".sp").text("平台所有活动和苹果公司无关");
//		alert(0);
	} else {
		$(".sp").text("");
	}
	//alert('是否是Android：'+isAndroid); 
	//alert('是否是iOS：'+isiOS)

})