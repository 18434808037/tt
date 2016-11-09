$(function() {
	//变量
	//选项卡切换
	var look = $("#look");
	var lileng = $("#titl ul li");
	var his = $("#hisData");
	var myGue = $("#myGuess");
	//事件
	
	var j = 0;
	//json总数
	var count = 0;
	//分页总数
	var page = 0;
	// 每页展示10个
	var num = 10;
	var pageIndex = 1;
	var pageStart, pageEnd = 0;
	
	load();
	function load() {
		dropload = $('.inner').dropload({
			scrollArea: window,
//			loadUpFn: function(me) {
//				$.ajax({
//					type: 'GET',
//					url: './json/moreLeft.json',
//					dataType: 'json',
//					success: function(data) {
//						var result = '';
//						pageIndex = 1;
//						pageStart = (pageIndex - 1) * num;
//						pageEnd = pageIndex * num;
//						console.log(pageIndex);
//						for(var i = 0; i < num; i++) {
//							result += '<tr class="cont">' +
//								'<td class="kuan1 hui">' + data.lists1[i].jutiqishu + '</td>' +
//								'<td class="kuan2">' + data.lists1[i].shijijieguo + '</td>' +
//								'<td id="look" class="kuan2 chakan">' + data.lists1[i].zhongjiangmingdan + '</td>' +
//								'</tr>';
//						}
//						setTimeout(function() {
//							$('.lists').html(result); //替换
//							// 每次数据加载完，必须重置
//							dropload.resetload();
//						}, 1000);
//					},
//					error: function(xhr, type) {
//						console.log('Ajax error!');
//						// 即使加载出错，也得重置
//						dropload.resetload();
//					}
//				});
//			},
			loadDownFn: function(me) {
				if(j == page && pageIndex != 1) {
					return false;
				}
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
							$('.lists').append(result); //加载更多，插入内容
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

});