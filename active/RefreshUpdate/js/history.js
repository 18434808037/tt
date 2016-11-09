$(function() {
	//变量
	//选项卡切换
	var look = $("#look");
	var lileng = $("#titl ul li");
	var his = $("#hisData");
	var myGue = $("#myGuess");
	//事件
	$.each(lileng, eac);
	//	look.click(looked);
	function eac(i) {
		$(this).click(function() {
			//加载
			$(this).index = i;
			if(i == 0) {
				$(this).css({"background-color":"red"});
				$(this).next().css({"background-color":"blue"});
//				$(this).children().attr("src", "../img/btm1-" + i + ".svg");
//				$(this).next().children().attr("src", "../img/btm2-" + (i + 1) + ".svg");
				$(".mydata").css({
					"display": "table"
				});
				$(".myGuess").css({
					"display": "none"
				});
				//选项卡左边部分
				loadLeft();
				
			} else if(i==1){
				$(this).css({"background-color":"red"});
				$(this).prev().css({"background-color":"blue"});
//				$(this).children().attr("src", "../img/btm2-" + (i - 1) + ".svg");
//				$(this).prev().children().attr("src", "../img/btm1-" + i + ".svg");
				$(".myGuess").css({
					"display": "table"
				});
				$(".mydata").css({
					"display": "none"
				});
				//选型卡右边部分
				loadRight();
			}
		});
		
	}
	
//选项卡左边部分
loadLeft();
function loadLeft(){	
	//加载
	var counter = 0;
	// 每页展示5个
	var num = 5;
	var sum;
	var pageStart = 0;
//	var pageEnd = 0;
	dropload = $('.inner1').dropload({
		scrollArea: window,
		loadUpFn: function(me) {
			//左边部分下拉刷新
			
			$.ajax({
				type: 'GET',
				url: 'json/updateLeft.json',
				dataType: 'json',
				success: function(data) {
					var result = '';
					counter++;       //1
					$.each(i, function(data) {
						result += '<tr class="cont">' +
							'<td class="kuan1 hui">'+data.lists1[i].jutiqishu + '</td>' +
							'<td class="kuan2">' + data.lists1[i].shijijieguo + '</td>' +
							'<td id="look" class="kuan2 chakan">查看</td>' +
							'</tr>';
					});
					pageEnd = num * counter;
					pageStart = pageEnd - num;
					$('.lists1').html(result);      //重置，
					// 每次数据加载完，必须重置
					dropload.resetload();
				},
				error: function(xhr, type) {
					//console.log('Ajax error!');
					// 即使加载出错，也得重置
					dropload.resetload();
				}
			});
		},
		loadDownFn: function(me) {
			//左边部分上拉加载更多
			$.ajax({
				type: 'GET',
				url: 'json/moreLeft.json',
				dataType: 'json',
				success: function(data) {
					var result = '';
					counter++;
					pageEnd = num * counter;
					pageStart = pageEnd - num;
					for(var i = pageStart; i < pageEnd; i++) {
						result += '<tr class="cont">' +
							'<td class="kuan1 hui">'+data.lists1[i].jutiqishu + '</td>' +
							'<td class="kuan2">' + data.lists1[i].shijijieguo + '</td>' +
							'<td id="look" class="kuan2 chakan">' + data.lists1[i].zhongjiangmingdan + '</td>' +
							'</tr>';
						if((i + 1) >= data.lists1.length) {
							// 锁定
							me.lock();
							// 无数据
							me.noData();
							break;
						}
					}
					$('.lists1').append(result);   //加载更多，插入内容
					me.resetload();
				},
				error: function(xhr, type) {
					// console.log('Ajax error!');
					// 即使加载出错，也得重置
					me.resetload();
				}
			});
		}
	});
}
//选型卡右边部分
function loadRight(){
	dropload = $('.inner2').dropload({
		scrollArea: window,
		loadUpFn: function(me) {
		//右边那部分下拉刷新
			$.ajax({
				type: 'GET',
				url: 'json/updateRight.json',
				dataType: 'json',
				success: function(data) {
					var result = '';
					for(var i = 0; i < data.lists2.length; i++) {
						result += '<tr class="cont">' +
							'<td class="kuan3 hui">' + data.lists2[i].qishu + '</td>' +
							'<td class="kuan4">' + data.lists2[i].jingcai + '</td>' +
							'<td class="kuan4 hui">' + data.lists2[i].Tb + '</td>' +
							'<td class="kuan4">' + data.lists2[i].jieguo + '</td>' +
							'<td class="kuan4 red">' + data.lists2[i].jiangli + '</td>' +
							'</tr>';
					}
					$('.lists2').html(result);
					dropload.resetload();
				},
				error: function(xhr, type) {
					// console.log('Ajax error!');
					// 即使加载出错，也得重置
					dropload.resetload();
				}
			});
		},
		loadDownFn: function(me) {
		//右边部分上拉加载更多
			$.ajax({
				type: 'GET',
				url: 'json/moreRight.json',
				dataType: 'json',
				success: function(data) {
					var result = '';
                    for(var i = 0; i < data.lists2.length; i++){
                        result += '<tr class="cont">' +
							'<td class="kuan3 hui">' + data.lists2[i].qishu + '</td>' +
							'<td class="kuan4">' + data.lists2[i].jingcai + '</td>' +
							'<td class="kuan4 hui">' + data.lists2[i].Tb + '</td>' +
							'<td class="kuan4">' + data.lists2[i].jieguo + '</td>' +
							'<td class="kuan4 red">' + data.lists2[i].jiangli + '</td>' +
							'</tr>';
                    }
                    $('.lists2').append(result);
                    me.resetload();
				},
				error: function(xhr, type) {
					// console.log('Ajax error!');
					// 即使加载出错，也得重置
					me.resetload();
				}
			});
		}
	});
}
 //结束



	
	//点击查看跳转查看名单
	function looked() {
		window.location.href = "zdlList.html";
	}

	//  历史数据	
	//对比结果内容颜色设置
	var resu = $("#resu");
	//	涨:
	resu.text("涨");
	resu.addClass("red");

	//  我的竞猜      	
	//奖励
	var jiangli = $("#jiangli");
	//	涨:
	jiangli.text("100");
	jiangli.addClass("red");
	//进行中
	//		jiangli.text("进行中");
	//		jiangli.attr("class","hui");

	//查看  list.html
	//竞猜结果
	var jcjg = $("#jcjg");
	var jl = $("#jl");
	//涨
	jcjg.text("涨");
	jcjg.addClass("red");
	jl.text("100");
	jl.addClass("red");

});