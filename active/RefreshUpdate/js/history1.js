$(function() {
	//变量
	//选项卡切换
	var look = $("#look");
	var lileng = $("#titl ul li");
	var his = $("#hisData");
	var myGue = $("#myGuess");
	//事件
	$.each(lileng, eac);
	function eac(i) {
		$(this).click(function() {
			//加载
			$(this).index = i;
			if(i == 0) {
				$(this).children().attr("src", "../img/btm1-" + i + ".svg");
				$(this).next().children().attr("src", "../img/btm2-" + (i + 1) + ".svg");
				$(".mydata").css({"display": "table"});
				$(".myGuess").css({"display": "none"});

			} else if(i == 1) {
				$(this).children().attr("src", "../img/btm2-" + (i - 1) + ".svg");
				$(this).prev().children().attr("src", "../img/btm1-" + i + ".svg");
				$(".myGuess").css({"display": "table"});
				$(".mydata").css({"display": "none"});
			}
		});

	}
	var j = 0;
	//json总数
	var count = 0;
	//分页总数
	var page = 0;
	// 每页展示10个
	var num = 10;
	var pageIndex = 1;
	var pageStart, pageEnd = 0;
	
//	var j2 = 0;
//	var count2 = 0;
//	var page2 = 0;
//	var num2 = 10;
//	var pageIndex2 = 1;
//	var pageStart2, pageEnd2 = 0;
	//选项卡左边部分
	loadLeft();
//	loadRight();
	function loadLeft() {

		dropload = $('.inner1').dropload({
			scrollArea: window,
			domDown : {
	            domClass   : 'dropload-down',
	            domRefresh : '<div class="dropload-refresh">上拉加载更多</div>',
	            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
	            domNoData  : '<div class="dropload-noData">暂无相关数据!</div>'
	        },
			loadUpFn: function(me) {
				//左边部分下拉刷新
				$.ajax({
					type: 'GET',
					url: './json/moreLeft.json',
					dataType: 'json',
					success: function(data) {
						var result = '';
						pageIndex = 1;
						pageStart = (pageIndex - 1) * num;
						pageEnd = pageIndex * num;
						console.log(pageIndex);
						for(var i = 0; i < num; i++) {
							result += '<tr class="cont">' +
								'<td class="kuan1 hui">' + data.lists1[i].jutiqishu + '</td>' +
								'<td class="kuan2">' + data.lists1[i].shijijieguo + '</td>' +
								'<td id="look" class="kuan2 chakan">' + data.lists1[i].zhongjiangmingdan + '</td>' +
								'</tr>';
						}
						setTimeout(function() {
							$('.lists1').html(result); //重置，
							// 每次数据加载完，必须重置
							dropload.resetload();
						}, 1000);
					},
					error: function(xhr, type) {
						console.log('Ajax error!');
						// 即使加载出错，也得重置
						dropload.resetload();
					}
				});
			},
			loadDownFn: function(me) {
				if(j == page && pageIndex != 1) {
					return false;
				}
				//左边部分上拉加载更多
				$.ajax({
					type: 'GET',
					url: './json/moreLeft.json',
					dataType: 'json',
					success: function(data) {
						var result = '';
						if(pageIndex == 1) {
							//计算读取的总数 
							count = data.lists1.length;
							page = Math.ceil(count / num);
						}
						pageStart = (pageIndex - 1) * num;
						pageEnd = pageIndex * num;
						for(var i = 0; i < num; i++) {
							if(j == count - 1) {
								break;
							}
							j = pageStart + i;

							result += '<tr class="cont">' +
								'<td class="kuan1 hui">' + data.lists1[j].jutiqishu + '</td>' +
								'<td class="kuan2">' + data.lists1[j].shijijieguo + '</td>' +
								'<td id="look" class="kuan2 chakan">' + data.lists1[j].zhongjiangmingdan + '</td>' +
								'</tr>';
						}
						if (pageIndex < page){
							pageIndex++;
						}
						
						setTimeout(function() {
							$('.lists1').append(result); //加载更多，插入内容
							me.resetload();
						}, 1000);
					},
					error: function(xhr, type) {
						 console.log('Ajax error!');
						// 即使加载出错，也得重置
						me.resetload();
					}
				});
			}
		});
	}
	//选型卡右边部分
	function loadRight() {
		dropload = $('.inner2').dropload({
			scrollArea: window,
			loadUpFn: function(me) {
				//右边那部分下拉刷新
				$.ajax({
					type: 'GET',
					url: './json/updateRight.json',
					dataType: 'json',
					success: function(data) {
						var result = '';
						pageIndex2 = 1;
						pageStart2 = (pageIndex2 - 1) * num2;
						pageEnd2 = pageIndex2 * num2;
						console.log(pageIndex2);
						for(var i = 0; i < num2; i++) {
							result += '<tr class="cont">' +
								'<td class="kuan3 hui">' + data.lists2[i].qishu + '</td>' +
								'<td class="kuan4">' + data.lists2[i].jingcai + '</td>' +
								'<td class="kuan4 hui">' + data.lists2[i].Tb + '</td>' +
								'<td class="kuan4">' + data.lists2[i].jieguo + '</td>' +
								'<td class="kuan4 red">' + data.lists2[i].jiangli + '</td>' +
								'</tr>';
						}
						setTimeout(function() {
							$('.lists2').html(result); //重置，
							// 每次数据加载完，必须重置
							dropload.resetload();
						}, 1000);
					},
					error: function(xhr, type) {
						console.log('Ajax error!');
						// 即使加载出错，也得重置
						dropload.resetload();
					}
				});
			},
			loadDownFn: function(me) {
				//右边部分上拉加载更多
				$.ajax({
					type: 'GET',
					url: './json/moreRight.json',
					dataType: 'json',
					success: function(data) {
						var result = '';
						if(pageIndex2 == 1) {
							//计算读取的总数 
							count2 = data.lists2.length;
							page2 = Math.ceil(count2 / num2);
						}
						pageStart2 = (pageIndex2 - 1) * num2;
						pageEnd2 = pageIndex2 * num2;
						for(var i = 0; i < num2; i++) {
							if(j2 == count2 - 1) {
								break;
							}
							j2 = pageStart2 + i;

							result += '<tr class="cont">' +
								'<td class="kuan3 hui">' + data.lists2[i].qishu + '</td>' +
								'<td class="kuan4">' + data.lists2[i].jingcai + '</td>' +
								'<td class="kuan4 hui">' + data.lists2[i].Tb + '</td>' +
								'<td class="kuan4">' + data.lists2[i].jieguo + '</td>' +
								'<td class="kuan4 red">' + data.lists2[i].jiangli + '</td>' +
								'</tr>';
						}
						if (pageIndex2 < page2){
							pageIndex2++;
						}
						
						setTimeout(function() {
							$('.lists2').append(result); //加载更多，插入内容
							me.resetload();
						}, 1000);
					},
					error: function(xhr, type) {
						 console.log('Ajax error!');
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