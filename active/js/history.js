$(function() {
	//变量
	//选项卡切换
	var look = $("#look");
	var lileng = $("#titl ul li");
	var his = $("#hisData");
	var myGue = $("#myGuess");
	$.each(lileng, eac);
	//加载
	var counter = 0;
	// 每页展示4个
	var num = 4;
	var pageStart = 0,pageEnd = 0;
	
	//事件
	
	//	look.click(looked);

	function eac(i) {
		$(this).click(function() {
			//加载
			$(this).index = i;
			if(i == 0) {
				$(this).children().attr("src", "img/btm1-" + i + ".svg");
				$(this).next().children().attr("src", "img/btm2-" + (i + 1) + ".svg");
				$(".mydata").css({
					"display": "table"
				});
				$(".myGuess").css({
					"display": "none"
				});
//				up1();
			} else {
				$(this).children().attr("src", "img/btm2-" + (i - 1) + ".svg");
				$(this).prev().children().attr("src", "img/btm1-" + i + ".svg");
				$(".myGuess").css({
					"display": "table"
				});
				$(".mydata").css({
					"display": "none"
				});
//				up2();
			}
		});
		
	}
//	alert(i)
	

//	var d1 = $.Deferred();
//	var d2 = $.Deferred();

	up1();
	function up1() {
		
		var dropload = $('.inner').dropload({
//			domUp: {
//				domClass: 'dropload-up',
//				domRefresh: '<div class="dropload-refresh">↓下拉刷新</div>',
//				domUpdate: '<div class="dropload-update">↑释放更新</div>',
//				domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>'
//			},
//			domDown: {
//				domClass: 'dropload-down',
//				domRefresh: '<div class="dropload-refresh">↑上拉加载更多</div>',
//				domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
//				domNoData: '<div class="dropload-noData">暂无数据</div>'
//			},
			loadUpFn: function(me) {
				$.ajax({
					type: 'GET',
					url: 'json/update1.json',
					async:true,
					dataType: 'json',
					success: function(data) {
						var result = '';
						for(var i = 0; i < data.lists1.length; i++) {

							result += '<tr class="cont">' +
								'<td class="kuan1 hui">' + data.lists1[i].jutiqishu1 + '</td>' +
								'<td class="kuan2">' + data.lists1[i].shijijieguo + '</td>' +
								'<td id="look" class="kuan2 chakan">' + data.lists1[i].zhongjiangmingdan + '</td>' +
								'</tr>';
						}
						// 为了测试，延迟1秒加载
						setTimeout(function() {
							$('.lists1').html(result);
							// 每次数据加载完，必须重置
							dropload.resetload();
						}, 1000);
					},
					error: function(xhr, type) {
						//                  alert('Ajax error!');
						// 即使加载出错，也得重置
						dropload.resetload();
					}
				});
				
				
			},
			scrollArea: window,
			loadDownFn: function(me) {
				$.ajax({
					type: 'GET',
					url: 'json/more1.json',
					async:true,
					dataType: 'json',
					success: function(data) {
						var result = '';
						counter++;
						pageEnd = num * counter;
						pageStart = pageEnd - num;

						for(var i = pageStart; i < pageEnd; i++) {
							result += '<tr class="cont">' +
								'<td class="kuan1 hui">' + data.lists1[i].jutiqishu1 + '</td>' +
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
						// 为了测试，延迟1秒加载
						setTimeout(function() {
							$('.lists1').append(result);
							// 每次数据加载完，必须重置
							me.resetload();
						}, 1000);
						
					},
					error: function(xhr, type) {
						// console.log('Ajax error!');
						// 即使加载出错，也得重置
						me.resetload();
					}
				});
				
			}

		});
//		d1.resolve( "Fish" );/
	}
	
//	up2();
	function up2() {
		
		var dropload = $('.inner').dropload({
			
			loadUpFn: function(me) {
				$.ajax({
					type: 'GET',
					url: 'json/updata2.json',
					async:true,
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
						// 为了测试，延迟1秒加载
						setTimeout(function() {
							$('.lists2').html(result);
							// 每次数据加载完，必须重置
							dropload.resetload();
						}, 1000);
					},
					error: function(xhr, type) {
						//                  alert('Ajax error!');
						// 即使加载出错，也得重置
						dropload.resetload();
					}
				});
				
			},
//			scrollArea: window,
			loadDownFn: function(me) {
				$.ajax({
					type: 'GET',
					url: 'json/more2.json',
					async:true,
					dataType: 'json',
					success: function(data) {
						var result = '';
						counter++;
						pageEnd = num * counter;
						pageStart = pageEnd - num;

						for(var i = pageStart; i < pageEnd; i++) {
							
							result += '<tr class="cont">' +
								'<td class="kuan3 hui">' + data.lists2[i].qishu + '</td>' +
								'<td class="kuan4">' + data.lists2[i].jingcai + '</td>' +
								'<td class="kuan4 hui">' + data.lists2[i].Tb + '</td>' +
								'<td class="kuan4">' + data.lists2[i].jieguo + '</td>' +
								'<td class="kuan4 red">' + data.lists2[i].jiangli + '</td>' +
								'</tr>';
							if((i + 1) >= data.lists2.length) {
								// 锁定
								me.lock();
								// 无数据
								me.noData();
								break;
							}
						}
						// 为了测试，延迟1秒加载
						setTimeout(function() {
							$('.lists2').append(result);
							// 每次数据加载完，必须重置
							me.resetload();
						}, 1000);
					},
					error: function(xhr, type) {
						// console.log('Ajax error!');
						// 即使加载出错，也得重置
						me.resetload();
					}
				});
				
			}

		});
//		d2.resolve( "Pizza" );
	}
//$.when( d1, d2 ).done(function ( v1, v2 ) {
//	console.log( v1 + v2 + '已完成');
//});
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