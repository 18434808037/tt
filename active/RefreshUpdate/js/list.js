$(function() {
	//变量
	var look = $("#look");
	var his = $("#hisData");
//加载
var counter = 0;
// 每页展示5个
var num = 5;
var pageStart = 0,pageEnd = 0;

loadCenter();
function loadCenter(){	
	dropload = $('.inner').dropload({
		scrollArea: window,
		loadUpFn: function(me) {
			//左边部分下拉刷新
			$.ajax({
				type: 'GET',
				url: 'json/updateLeft.json',
				dataType: 'json',
				success: function(data) {
					var result = '';
					for(var i = 0; i < data.lists1.length; i++) {
						result += '<tr class="cont">' +
							'<td class="kuan1 hui">' + data.lists1[i].jutiqishu + '</td>' +
							'<td class="kuan2">' + data.lists1[i].shijijieguo + '</td>' +
							'<td id="look" class="kuan2 chakan">' + data.lists1[i].zhongjiangmingdan + '</td>' +
							'</tr>';
					}
					setTimeout(function() {
						$('.lists').html(result);      //重置，
						// 每次数据加载完，必须重置
						dropload.resetload();
					},1000);
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
					}
					setTimeout(function() {
						$('.lists').append(result);   //加载更多，插入内容
						me.resetload();
					},1000);
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