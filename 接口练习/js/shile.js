//var w = document.documentElement.clientWidth || document.body.clientWidth;
//var h = document.documentElement.clientHeight || document.body.clientHeight;
//document.onreadystatechange = subSomething;//当页面加载状态改变的时候执行这个方法. 
//var myFrame = document.getElementById("myFrame");
//var fra = document.getElementById("fra");
//myFrame.style.height = h+"px";
//myFrame.style.width = w+"px";
//fra.style.height = h+"px";
//fra.style.width = w+"px";
//function subSomething() 
//{ 
//	if(document.readyState == "complete"){
//		myFrame.style.display="none";   
//	}else{
////		console.log(0);
//		
//		myFrame.style.display="block";
//	} //当页面加载状态
//}

$(function() {
	
//	document.body.addEventListener('touchstart', function () { //...空函数即可
//	});
	
	var w = document.documentElement.clientWidth || document.body.clientWidth;
	var h = document.documentElement.clientHeight || document.body.clientHeight;
	//遮罩效果
//	console.log(w+"----"+h);
	function zhao() {
		
		//var w=$("#viewport").width();
		//var h=$("#viewport").height();
		$("#zhezhao").css({
			"width": w + "px",
			"height": h + "px",
			"background-size": w + "px " + h + "px",
			"background-attachment": "fixed"
				//			"background-color":"rgba(20,20,20,0.4)"
		})
	}

	//最新指数切换背景色
	var zd = $("#three").text();
	if(zd.indexOf('+') > 0) {
		$("#new1").removeClass("gree");
		$("#new1").attr("class", "re");

	} else {
		$("#new1").removeClass("re");
		$("#new1").attr("class", "gree");
	}

le = $("#le");
tim = $("#daoji").text();
	//倒计时
function daoji(){
	var time1 = new Date();
	var time2 = new Date();
	time1.setSeconds(20);
	var time3 =time1-time2;
	var sec= Math.floor((time3/1000)%60);
	if(sec.toString().length==1){
		$("#daoji").text("0"+sec);
	}else{
		$("#daoji").text(sec);
	}
	
	tim = $("#daoji").text();
	//console.log(tim);
	if(tim<20){
		le.text("剩余开始时间");
	}else{
		le.text("剩余下注时间");
	}
}
//daojiout = setInterval(daoji,1000);
	
	var num=20;
	var min=-1;
	function box(){
		num--;
		if(num==min){
			clearInterval(timer);
		}else{
			if(num.toString().length==1){
				$("#daoji").text("0"+num);
			}else{
				$("#daoji").text(num);
			}
		}
	}
	var timer = setInterval(box,1000);

	//最新指数结束
	
	l = (w-$(".jian").width()*5)/2;
	lis = $("#ull").children();
	$.each(lis, function(i) {
			$(this).click(function(e) {
					$(this).index = i;
					$(this).children(":first").attr("src", "img/1-" + i + "@2x.png");
					$(this).prevAll().children(":first").attr("src", "img/0-" + (i - 1) + "@2x.png");
					$(this).nextAll().children(":first").attr("src", "img/0-" + (i + 1) + "@2x.png");
					//alert(i);
					//点击0-9图片颜色切换
					for(var n = 0; n < lis.length; n++) {
						if(i == n) {
							for(var m = (i + 2); m < lis.length; m++) {
								$(lis[m]).children(":first").attr("src", "img/0-" + m + "@2x.png");
							}
							for(var m = 0; m < i; m++) {
								$(lis[m]).children(":first").attr("src", "img/0-" + m + "@2x.png");
							}
						}
					}
//					$(".jian").text($("<img src='../img/ico_01_tip@2x.png'  />")+"-10T币");

					var childimg=$('<img />');        
    				childimg.attr('src','img/ico_01_tip@2x.png');            
					$(".jian").text("-10T币"); 
					$(".jian").append(childimg);
					
				
					$(".jian").css({ 
						display: "block",
						opacity: 1,
						width: 7 + "em",
						height: 2 + "em",
						marginTop: 3.5 + "em",
//						marginRight:l+"px",
						marginLeft:l+"px"

					}).stop(!0, !1).animate({
						opacity: 0,
						width: 7 + "em",
						height: 2 + "em",
						marginTop: 3.5 + "em",
//						marginRight:l+"px",
						marginLeft:l+"px"
					}, 1200, function() {
						$(".jian").hide();
	
					});
					e.stopPropagation();
			})
	})
	function a(){
		alert(0);
	}
	$("#three").on("click",a);
	a=0;
	if(a==0){
		$("#three").off("click");
	}
	
//	 var w=0;
//,tip=$("<b>"); 

//    tip.css({
//
// "z-index":99999,position:"absolute",color:"red",display:"none"
//
//            }),

//    $("body").append(tip),//页面创建b标签用来显示数字

//$(document).on("click", function(e) {
//
//	//          var x=e.pageX,y=e.pageY;//获取点击页面坐标
//
//	//          $("#zhezhao").text("+"+ ++w).css({//数字加1
//	//              display:"block",left:10+"px",opacity:1//定位显示
//	//              
//	//          }).stop(!0,!1).animate({top:y-180,opacity:0},800,function(){
//	//                  $("#zhezhao").hide();
//	//
//	//          }),
//
//});

//切换乘以多少T币下注 
function bi() {
	xias = $(".xiazhu").children();
	$.each(xias, function(k) {
		$(this).click(function() {
			$(this).index = k;
			$(this).attr("class", "hong");
			$(this).prevAll().attr("class", "hui");
			$(this).nextAll().attr("class", "hui");
			$(this).prevAll().removeClass("hong");
			$(this).nextAll().removeClass("hong");
			//xiazhu();
			if(k == 1) {
				$(".ulspan").text("x100T币");
				$(".jian").text("-100T币");

			} else {
				$(".ulspan").text("x10T币");
				$(".jian").text("-10T币");
			}

		})

	})
}
bi();

var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
if(isiOS) {
	$(".foospan").text("平台所有活动和苹果公司无关");
	//alert(0);
} else {
	$(".foospan").text();
}
//alert('是否是Android：'+isAndroid); 
//alert('是否是iOS：'+isiOS);

	
});
window.onload=function(){
	window.addEventListener( "load", function() {
	    FastClick.attach( document.body );
	}, false );
}

