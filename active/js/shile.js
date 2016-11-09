//var w = document.documentElement.clientWidth || document.body.clientWidth;
//var h = document.documentElement.clientHeight || document.body.clientHeight;
//document.onreadystatechange = subSomething;//当页面加载状态改变的时候执行这个方法. 
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
//Top柱图动画
//var data = [[140,150,200,285,120,140,150,200,285,120]]; 
//				var data_max = 1580; //Y轴最大刻度
//				var line_title = []; //曲线名称
//				var y_label = ""; //Y轴标w题
//				var x_label = ""; //X轴标题
//				var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //定义X轴刻度值
//				var title = ""; //统计图标标题
//				j.jqplot.diagram.base("chart2", data, line_title, "", x, x_label, y_label, data_max, 2);
//				


	//	document.body.addEventListener('touchstart', function () { //...空函数即可
	//	});

	var w = document.documentElement.clientWidth || document.body.clientWidth;
	var h = document.documentElement.clientHeight || document.body.clientHeight;
	alert(w+"-----"+h)
	//10-27loading
	load();
	function load(){
		$("#loading").css({
//			"width": w + "px",
//			"height": h + "px",
//			"background-size": w + "px " + h + "px",
			"background-attachment": "fixed",
			"background-color":"rgba(0,0,0,0.4)"
		})
	}
	
	
	
	
	//结束
	
	
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
	function daoji() {
		var time1 = new Date();
		var time2 = new Date();
		time1.setSeconds(20);
		var time3 = time1 - time2;
		var sec = Math.floor((time3 / 1000) % 60);
		if(sec.toString().length == 1) {
			$("#daoji").text("0" + sec);
		} else {
			$("#daoji").text(sec);
		}

		tim = $("#daoji").text();
		//console.log(tim);
		if(tim < 20) {
			le.text("剩余开始时间");
		} else {
			le.text("剩余下注时间");
		}
	}
	//daojiout = setInterval(daoji,1000);

	var num = 20;
	var min = -1;

	function box() {
		num--;
		if(num == min) {
			clearInterval(timer);
		} else {
			if(num.toString().length == 1) {
				$("#daoji").text("0" + num);
			} else {
				$("#daoji").text(num);
			}
		}
	}
	var timer = setInterval(box, 1000);

	//最新指数结束

	l = (w - $(".jian").width() * 5) / 2;
	lis = $("#ull").children();
	$.each(lis, function(i) {
		$(this).on('touchstart',function(e) {
			$(this).index = i;
//			console.log("1");
			$(this).attr("src", "img/2-" + (i - 1) + "@2x.png");
//			css({"background-img":"../img/2-0@2x.png"});
		
		$(this).on('touchend',function(e) {
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
			
			$("#loading").css({"display":"block"});
			$.ajax({
				type:"get",
				url:"json/more1.json",
				dataType:"json",
				success: function(data){
//					console.log("请求成功");
					setTimeout(function(){
						$("#loading").css({"display":"none"});
					},1000);
					
					if($("#loading").css("display")=="none"){
//						console.log(0);
						var childimg = $('<img />');
						childimg.attr('src', 'img/ico_01_tip@2x.png');
						$(".jian").text("-10T币");
						$(".jian").append(childimg);
			
						$(".jian").css({
							display: "block",
							opacity: 1,
							width: 7 + "em",
							height: 2 + "em",
							marginTop: 3.5 + "em",
							//						marginRight:l+"px",
							marginLeft: l + "px"
			
						}).stop(!0, !1).animate({
							opacity: 0,
							width: 7 + "em",
							height: 2 + "em",
							marginTop: 3.5 + "em",
							//						marginRight:l+"px",
							marginLeft: l + "px"
						}, 1200, function() {
							$(".jian").hide();
			
						});
						e.stopPropagation();
					}
//					else{
//						console.log(0)
//					}
					
					
					
				}
			});
			
	});
	
	});
	})

	function a() {
		alert(0);
	}
	$("#three").on("click", a);
	a = 0;
	if(a == 0) {
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


	//  点击历史记录跳转进入饼图 
	var right = $("#right");
	right.click(function() {
		window.location.href = "sslRate.html";
	});
	
	//Top柱图
	var canvas0 = document.getElementById("canvas0"); 
	var canvas1 = document.getElementById("canvas1"); 
	var canvas2 = document.getElementById("canvas2"); 
	var canvas3 = document.getElementById("canvas3"); 
	var canvas4 = document.getElementById("canvas4"); 
	var canvas5 = document.getElementById("canvas5"); 
	var canvas6 = document.getElementById("canvas6"); 
	var canvas7 = document.getElementById("canvas7"); 
	var canvas8 = document.getElementById("canvas8"); 
	var canvas9 = document.getElementById("canvas9"); 
    ctx0 = canvas0.getContext("2d");  ctx1 = canvas1.getContext("2d");  
    ctx2 = canvas2.getContext("2d");  ctx3 = canvas3.getContext("2d");  
    ctx4 = canvas4.getContext("2d");  ctx5 = canvas5.getContext("2d");  
    ctx6 = canvas6.getContext("2d");  ctx7 = canvas7.getContext("2d");  
    ctx8 = canvas8.getContext("2d");  ctx9 = canvas9.getContext("2d");  
    img0 = new Image(); img1 = new Image(); img2 = new Image(); img3 = new Image(); img4 = new Image(); 
    img5 = new Image(); img6 = new Image(); img7 = new Image(); img8 = new Image(); img9 = new Image(); 
    img0.src = "img/0.svg"; 
    img1.src = "img/1.svg"; 
    img2.src = "img/2.svg";
    img3.src = "img/3.svg";
    img4.src = "img/4.svg"; 
    img5.src = "img/5.svg"; 
    img6.src = "img/6.svg"; 
    img7.src = "img/7.svg";
    img8.src = "img/8.svg";  
    img9.src = "img/9.svg";
    img0.onload = function() { ctx0.drawImage(img0, -600, -500,1500,1000); } 
    img1.onload = function() { ctx1.drawImage(img1, -600, -500,1500,1000); } 
    img2.onload = function() { ctx2.drawImage(img2, -600, -500,1500,1000); } 
    img3.onload = function() { ctx3.drawImage(img3, -600, -500,1500,1000); } 
    img4.onload = function() { ctx4.drawImage(img4, -600, -500,1500,1000); } 
    img5.onload = function() { ctx5.drawImage(img5, -600, -500,1500,1000); } 
    img6.onload = function() { ctx6.drawImage(img6, -600, -500,1500,1000); } 
    img7.onload = function() { ctx7.drawImage(img7, -600, -500,1500,1000); } 
    img8.onload = function() { ctx8.drawImage(img8, -600, -500,1500,1000); } 
    img9.onload = function() { ctx9.drawImage(img9, -600, -500,1500,1000); } 
    
    
		var sho0 = $("#sho0");   //柱状图上边显示出现次数
		var sho1 = $("#sho1");   
		var sho2 = $("#sho2");   
		var sho3 = $("#sho3");   
		var sho4 = $("#sho4");   
		var sho5 = $("#sho5");   
		var sho6 = $("#sho6");   
		var sho7 = $("#sho7");   
		var sho8 = $("#sho8");   
		var sho9 = $("#sho9");   
	//计算
		var sho0_val = 156; //0出现的次数
		var sho1_val = 145;       //1出现的次数
		var sho2_val = 140;       //2出现的次数
		var sho3_val = 141;       //3出现的次数
		var sho4_val = 137;       //4出现的次数
		var sho5_val = 128;       //5出现的次数
		var sho6_val = 134;       //6出现的次数
		var sho7_val = 120;       //7出现的次数
		var sho8_val = 143;       //8出现的次数
		var sho9_val = 141;       //9出现的次数
		var arr = [sho0_val,sho1_val,sho2_val,sho3_val,sho4_val,sho5_val,sho6_val,sho7_val,sho8_val,sho9_val];
		max = Math.max.apply(null,arr);
//		console.log(max);
		sum = max+30;
//		console.log(sum);
//		var sum = 200;       //0-9出现次数总和
		var percent0 = sho0_val/sum;    //0出现次数占总次数的百分比
		var percent1 = sho1_val/sum;    //1出现次数占总次数的百分比
		var percent2 = sho2_val/sum;    //2出现次数占总次数的百分比
		var percent3 = sho3_val/sum;    //3出现次数占总次数的百分比
		var percent4 = sho4_val/sum;    //4出现次数占总次数的百分比
		var percent5 = sho5_val/sum;    //5出现次数占总次数的百分比
		var percent6 = sho6_val/sum;    //6出现次数占总次数的百分比
		var percent7 = sho7_val/sum;    //7出现次数占总次数的百分比
		var percent8 = sho8_val/sum;    //8出现次数占总次数的百分比
		var percent9 = sho9_val/sum;    //9出现次数占总次数的百分比
		
		
	//显示	
		sho0.text(sho0_val);      //柱状图上边显示出现次数
		sho1.text(sho1_val);      //柱状图上边显示出现次数
		sho2.text(sho2_val);      //柱状图上边显示出现次数
		sho3.text(sho3_val);      //柱状图上边显示出现次数
		sho4.text(sho4_val);      //柱状图上边显示出现次数
		sho5.text(sho5_val);      //柱状图上边显示出现次数
		sho6.text(sho6_val);      //柱状图上边显示出现次数
		sho7.text(sho7_val);      //柱状图上边显示出现次数
		sho8.text(sho8_val);      //柱状图上边显示出现次数
		sho9.text(sho9_val);      //柱状图上边显示出现次数
//		alert(percent);
		sho0.css({"bottom":(percent0*5+0.5)+'em'});
		sho1.css({"bottom":(percent1*5+0.5)+'em'});
		sho2.css({"bottom":(percent2*5+0.5)+'em'});
		sho3.css({"bottom":(percent3*5+0.5)+'em'});
		sho4.css({"bottom":(percent4*5+0.5)+'em'});
		sho5.css({"bottom":(percent5*5+0.5)+'em'});
		sho6.css({"bottom":(percent6*5+0.5)+'em'});
		sho7.css({"bottom":(percent7*5+0.5)+'em'});
		sho8.css({"bottom":(percent8*5+0.5)+'em'});
		sho9.css({"bottom":(percent9*5+0.5)+'em'});
	
		$("#dynamic").html(
			'@-webkit-keyframes myfirst0{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent0)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-khtml-keyframes myfirst0{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent0)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-moz-keyframes myfirst0{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent0)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-ms-keyframes myfirst0{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent0)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-o-keyframes myfirst0{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent0)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@keyframes myfirst0{0%{height:0em;width:100%;position:absolute;bottom:0em;}100%{height:'+(5*percent0)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			
			'@-webkit-keyframes myfirst1{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent1)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-moz-keyframes myfirst1{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent1)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-ms-keyframes myfirst1{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent1)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-o-keyframes myfirst1{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent1)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@keyframes myfirst1{0%{height:0em;width:100%;position:absolute;bottom:0em;}100%{height:'+(5*percent1)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			
			'@-webkit-keyframes myfirst2{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent2)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-moz-keyframes myfirst2{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent2)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-ms-keyframes myfirst2{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent2)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-o-keyframes myfirst2{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent2)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@keyframes myfirst2{0%{height:0em;width:100%;position:absolute;bottom:0em;}100%{height:'+(5*percent2)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			
			'@-webkit-keyframes myfirst3{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent3)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-moz-keyframes myfirst3{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent3)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-ms-keyframes myfirst3{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent3)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-o-keyframes myfirst3{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent3)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@keyframes myfirst3{0%{height:0em;width:100%;position:absolute;bottom:0em;}100%{height:'+(5*percent3)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			
			'@-webkit-keyframes myfirst4{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent4)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-moz-keyframes myfirst4{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent4)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-ms-keyframes myfirst4{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent4)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-o-keyframes myfirst4{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent4)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@keyframes myfirst4{0%{height:0em;width:100%;position:absolute;bottom:0em;}100%{height:'+(5*percent4)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			
			'@-webkit-keyframes myfirst5{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent5)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-moz-keyframes myfirst5{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent5)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-ms-keyframes myfirst5{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent5)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-o-keyframes myfirst5{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent5)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@keyframes myfirst5{0%{height:0em;width:100%;position:absolute;bottom:0em;}100%{height:'+(5*percent5)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			
			'@-webkit-keyframes myfirst6{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent6)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-moz-keyframes myfirst6{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent6)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-ms-keyframes myfirst6{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent6)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-o-keyframes myfirst6{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent6)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@keyframes myfirst6{0%{height:0em;width:100%;position:absolute;bottom:0em;}100%{height:'+(5*percent6)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			
			'@-webkit-keyframes myfirst7{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent7)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-moz-keyframes myfirst7{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent7)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-ms-keyframes myfirst7{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent7)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-o-keyframes myfirst7{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent7)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@keyframes myfirst7{0%{height:0em;width:100%;position:absolute;bottom:0em;}100%{height:'+(5*percent7)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			
			'@-webkit-keyframes myfirst8{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent8)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-moz-keyframes myfirst8{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent8)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-ms-keyframes myfirst8{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent8)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-o-keyframes myfirst8{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent8)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@keyframes myfirst8{0%{height:0em;width:100%;position:absolute;bottom:0em;}100%{height:'+(5*percent8)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			
			'@-webkit-keyframes myfirst9{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent9)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-moz-keyframes myfirst9{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent9)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-ms-keyframes myfirst9{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent9)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@-o-keyframes myfirst9{0%{height:0em;position:absolute;width:100%;bottom:0em;}100%{height:'+(5*percent9)+'em;width:100%;position:absolute;bottom: 0em;}}\n'+
			'@keyframes myfirst9{0%{height:0em;width:100%;position:absolute;bottom:0em;}100%{height:'+(5*percent9)+'em;width:100%;position:absolute;bottom: 0em;}}'
			
			);
//			
//		);
		var canvas0 = $('#canvas0');canvas0.addClass("canvas0");
	    var canvas1 = $('#canvas1');canvas1.addClass("canvas1");
	    var canvas2 = $('#canvas2');canvas2.addClass("canvas2");
	    var canvas3 = $('#canvas3');canvas3.addClass("canvas3");
	    var canvas4 = $('#canvas4');canvas4.addClass("canvas4");
	    var canvas5 = $('#canvas5');canvas5.addClass("canvas5");
	    var canvas6 = $('#canvas6');canvas6.addClass("canvas6");
	    var canvas7 = $('#canvas7');canvas7.addClass("canvas7");
	    var canvas8 = $('#canvas8');canvas8.addClass("canvas8");
	    var canvas9 = $('#canvas9');canvas9.addClass("canvas9");
	    
		
	    
//	}, 1000);
	
//	setInterval(function(){
//	},4000)
//	alert($("#dynamic").text());
	
	
	
	
	
	
	
	
	
	
});
window.onload = function() {
	window.addEventListener("load", function() {
		FastClick.attach(document.body);
	}, false);
	
	
}