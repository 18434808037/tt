// JavaScript Document
$(function() {
	//收盘指数切换背景色
	loadImg("img/bg02@2x.png",addImg);
	function loadImg(url,callback){
		var img = new Image();
		img.onload = function(){
			img.onload = null;
			callback(img);
		}
		img.src=url;
		// img.width ="202";
		// img.height = "202";
		// img.attr("defaulturl","img/bg02@2x.png");

	}
	function addImg(img){
		// $(img).appendTo($(".imgload li"))
	}


	var zd = $(".three").text();
	if(zd.indexOf('+') > 0) {
		$("#new1").removeClass("gree");
		$("#new1").attr("class", "re");

	} else {
		$("#new1").removeClass("re");
		$("#new1").attr("class", "gree");
	}

	function nu(event) {
		var keyCode = event.which;
		if((keyCode >= 48 && keyCode <= 57) && ($(this).text().length == 0))
			return true;
		else
			return false;
	}

	function ale() {
		var w = document.documentElement.clientWidth || document.body.clientWidth;
		var h = document.documentElement.clientHeight || document.body.clientHeight;
		$(".tip").css({
			"width": w + "px",
			"height": h + "px",
			"background-size": w + "px " + h + "px",
			"background-attachment": "fixed",
			"background-color": "rgba(20,20,20,0.7)"
		})
	}
	
	$("#dg1").attr("readonly","readonly");
//	$("#dg1").click(function(){
//		alert(0);
//	})
	$("#dg1").on("click keyup select", function(e) {
		$("#dg1").removeAttr("readonly");
//		
		
		var $val = $(this).val();
		var len = $val.length;
		if(/\d$/.test($val)==false) {
			$(this).val($val.slice(0, -1));
			len--;
		}
		if(len <0) {
			len = 0;
		} 
		
		var kong = $("#myForm .hid");
		kong.eq(len).addClass("active").siblings(".hid").removeClass("active");
	}).val("");
	
	$("#dg1").on("keyup", function() {
		
		var $val = $(this).val();
		var len = $val.length;
		var kong = $("#myForm .hid");
		if(/\d$/.test($val) == false) {
			$(this).val($val.slice(0, -1));
			len--
		}
		if(len < 0) {
			len = 0;
		}
		if (len==kong.eq(-1).index()) {
			$(this).blur();
//			$(".footer").show();
//			$(".footer").css({"position":"fixed"});
		}
		kong.eq(len).addClass("active").siblings(".hid").removeClass("active");
	}).val("");
	
//	$("#dg1").attr("disabled","disabled");
	
	
	var tip = $(".tip");
	var succ = $(".succ");
	$(".sub").click(function() {
		$(this).text("进行中");
		ale();
		$(this).css({
			"background-color": "rgba(241,90,36,0.4)"
		});
		$(".tip").css({
			"display": "block"
		});
		$(".succ").css({
			"display": "block"
		});
		setTimeout(function() {
			tip.hide();
		}, 2000);
		setTimeout(function() {
			succ.hide();
		}, 2000);
	})
	
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
//	h = $(window).height()/1.5+1.6*$(".footer").outerHeight();
	h1 = $(window).height()-$(".footer").outerHeight();
	$("#dg1").focus(function() {
		$(".footer").css({"position":"absolute","top":h1});
	});
//	v = 2*$('body').scrollTop()-$(".footer").outerHeight();
	if(isiOS){
		$(".foospan").text("平台所有活动和苹果公司无关");
		
		//alert(0);   h1
		
	}else{
		$(".foospan").text();
	}
//	$("#dg1").on("click keyup select", function(e) {
//		$("#dgkey").css({"display":"block"});    h
//			
//		
//	}).val("");
//	
//	$(".fh_four").click(function(){
//		$("#dgkey").css({"display":"none"});
//	});
//	
//	
//	var lis = $(".tes").parent();
//	console.log(lis.length);
//	$.each(lis, function() {
//		$(this).click(function(){
//				var keyva = $(this).find("span").first().text();    //键盘div值
////				var inva = $("#dg1").val(keyva);  //input值
//				var y = $("#dg1").val($("#dg1").val()+keyva);
//				console.log(y.val());
//				console.log(y.val().length--);
//				if(y.val()>6){
//					$(this).off("click");
//				}
////				console.log($("#dg1").length);
////				var len = y.length;
////				console.log(($("#dg1").val($("#dg1").val()+keyva)).length);
//				
//				
//		});
//	});
	
	
	
	
	
	
})