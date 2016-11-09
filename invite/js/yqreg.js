// JavaScript Document
$(function(){

	/*邀请注册页面*/	
	var yanz = $("#yanz");
	var mobil = $("#mobil");
	var che = $("#chck");
	var chim = $(".chim");
	var pwd = $("#pwd");
	var sed = $("#sed");
	var nex = $("#nex");
	var complete = $("#complete");
	var nickn = $("#nickn"); 
	var yinsi = $("#yinsi");
	var tip = $(".tip");
	var ne = $("#ne");

	//提示
    ale();
	function ale(){
		var w=document.documentElement.clientWidth||document.body.clientWidth;
		var h=document.documentElement.clientHeight||document.body.clientHeight;
		$(".tip").css({
			"width":w+"px",
			"height":h+"px",
			"background-size":w+"px "+h+"px",
			"background-attachment":"fixed",
			"background-color":"rgba(0,0,0,0.5)"
		})	
	}
	//点击发送验证码
	sed.click(send);
	//同意条款
	che.click(selcted);
    
    //方法
	//点击发送验证码
	function send(){
		
		if($("#mobil").val()!=""){         //手机号不为空
			if(patte1.test(mobil.val())==true){	    //手机号正确
				var num=60;
				var min=0;
				function box(){
					num--;
					if(num==min){
						clearInterval(timer);
						$("#sed").text("重发验证码");
						sed.css({"background-color":"#66ccff"});
					}else{
						$("#sed").text(num);
						sed.css({"background-color":"#cccccc"});
					}
				}
				var timer = setInterval(box,1000);
				 //yan();
			}else{           //手机号不正确
				tip.css({"display":"block"});
				setTimeout(function(){tip.hide();},800);
				ne.text("请输入正确的手机号码！");
				$("#sed").text("发送验证码");
				sed.css({"background-color":"#66ccff"});
				mobil.focus();
			}	
		}else{                       //手机号为空
			tip.css({"display":"block"});
			setTimeout(function(){tip.hide();},800);
			ne.text("你还未输入手机号哦！");
			$("#sed").text("发送验证码");
			sed.css({"background-color":"#66ccff"});
			mobil.focus();
		}



	}

	//同意条款
	var a=1;
	function selcted(){
		if(a==1){
			chim.attr("src","img/check2@2x.png");	
			a=2;
		}else if(a==2){
			chim.attr("src","img/check1@2x.png");	
			a=1;
		}	
	}

//判断
//全局变量
var patte1 = /^[0-9]{11}$/;          //手机号
var patte2 = /^[0-9]{6}$/;          //验证码
var patte3 = /^(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{6,18}$/;    //密码
//var patte1 = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/;          //手机号
//mobil.focus();
nex.click(cli);
function cli(){
		if($("#yanz").val()==""){
			tip.css({"display":"block"});
			setTimeout(function(){tip.hide();},800);
			ne.text("需要输入验证码哦！");
		}else{

		   	if(patte2.test(yanz.val())==true){	    //验证码正确
					//mima();
				if($("#pwd").val()==""){
					tip.css({"display":"block"});
					setTimeout(function(){tip.hide();},800);
					ne.text("你还未输入密码哦！");
				}else{
					if(patte3.test(pwd.val())==true){	    //密码正确
						var xsrc=$(".chim").attr("src");
						if(xsrc=='img/check2@2x.png'){
							tip.css({"display":"block"});
							setTimeout(function(){tip.hide();},800);
							ne.text("你还未同意协议条款哦！");

						}
					}else{           //密码不正确
						tip.css({"display":"block"});
						setTimeout(function(){tip.hide();},800);
						ne.text("请输入6~18位登录密码，必须包含英文和数字哦！");
					}
				}
			}else{           //验证码不正确
				tip.css({"display":"block"});
				setTimeout(function(){tip.hide();},800);
				ne.text("请输入正确验证码！");
			}	
		}

		
		if((patte1.test(mobil.val())==true)&&(patte2.test(yanz.val())==true)&&(patte3.test(pwd.val())==true)&&(xsrc=='img/check1@2x.png')){
			window.location.href="dat.html";
		}
}


//cli();

yinsi.click(function(){
	window.location.href="yinsi.html";
})

	/*邀请注册页面结束*/	
	
	



/*完成注册页面*/	
//选择性别	
var xz = $("#xz").children();
$.each(xz,function(i){
	$(this).index=i;
	$(this).click(function(){
		if(i==0){
			$(this).children().attr("src","img/ico_00_man1@2x.png");
			$(this).next().children().attr("src","img/ico_00_woman2@2x.png");	
		}else{
			$(this).children().attr("src","img/ico_00_woman1@2x.png");
			$(this).prev().children().attr("src","img/ico_00_man2@2x.png");
		}
	});	
	
});	
	
//判断昵称
nickn.focus();
complete.click(nicheng);
function nicheng(){	
	var patte4 = /^.{4,18}$/;       //4-18位字符
	var patte5 = /^[^\s]{4,18}$/;       //4-18位字符不能包含空格
	
	//alert(pw.val());
	if(nickn.val()==""){
		tip.css({"display":"block"});
		setTimeout(function(){tip.hide();},1000);
		ne.text("你还未填写昵称哦！");
	}else{
//		if(patte4.test(nickn.val())==true){
		if(patte4.test(nickn.val().replace(/[^\x00-\xff]/g, '__'))==true){
    		//alert("正确");
//  		if(patte5.test(nickn.val())==null){
    		if (nickn.val().indexOf(" ") == -1) {
    			//alert(0);
				window.location.href="load.html";	
    		}else{
    			tip.css({"display":"block"});
				setTimeout(function(){tip.hide();},1000);
				ne.text("昵称中不能包含空格哦！");
				nickn.focus();	    		}
			
		}else{
			tip.css({"display":"block"});
			setTimeout(function(){tip.hide();},1000);
			ne.text("请填写4-18位字符哦！");
			nickn.focus();	
		}
	}
	
}
	
	/*complete.click(function(){
		window.location.href="load.html";	
	


		
	/*完成注册页面结束*/	
		
		
		
		
		
		
		
})