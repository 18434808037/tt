$(function() {

	var lileng = $("#titl ul li");
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

	var itemIndex = 0;
	var tab1LoadEnd = false;
	var tab2LoadEnd = false;
	// tab切换
	$('.tab .item').on('click', function() {
		var $this = $(this);
		itemIndex = $this.index();
		$this.addClass('cur').siblings('.item').removeClass('cur');
		$('.lists').eq(itemIndex).show().siblings('.lists').hide();
		// 如果选中tab一
		if(itemIndex == '0') {
			// 如果数据没有加载完
			if(!tab1LoadEnd) {
				// 解锁
				dropload.unlock();
				dropload.noData(false);   //有数据
			} else {
				// 锁定
				dropload.lock('down');
				dropload.lock('up');
				dropload.noData();      //当前无数据，下方出现暂无数据显示
			}
			// 如果选中tab二
		} else if(itemIndex == '1') {
			if(!tab2LoadEnd) {
				// 解锁
				dropload.unlock();
				dropload.noData(false); //有数据
			} else {
				// 锁定
				dropload.lock('down');
				dropload.lock('up');
				dropload.noData();
			}
		}
		// 重置
		dropload.resetload();
	});
	var counter = 1;      //页数
	var num = 10;         //每页显示的条数
	var pageStart = 0;     //每页第一条
	var	pageEnd = 0;       //每页最后一条
	var isfirst = 0;       //是不是第一次出现
	
	var counter2 = 1;
	var num2 = 5;
	var pageStart2 = 0;
	var	pageEnd2 = 0;
	var isfirst2 = 0;
	
	// 加载菜单一的数据
//	load();
	function load() {
		if(itemIndex == '0') {
			
			// 加载tab二的数据
		}else if(itemIndex == '1'){
			rightDownLoad();
		}
	}
	leftDownLoad();
	function leftDownLoad(){
		$.ajax({
			type: 'GET',
			url: 'json/moreLeft.json',
			dataType: 'json',
			success: function(data) {
				//进入页面默认加载前五条数据 
				result = '';
				pageEnd = num * counter;
				pageStart = pageEnd - num;
				console.log("pageEnd---" + pageEnd + "----------pageStart---" + pageStart + "----counter--" + counter);
				if(pageStart <= data.lists1.length) {
					for(var i = pageStart; i < pageEnd; i++) {
						result += '<tr class="cont">' +
							'<td class="kuan1 hui">' + data.lists1[i].jutiqishu + '</td>' +
							'<td class="kuan2">' + data.lists1[i].shijijieguo + '</td>' +
							'<td id="look" class="kuan2 chakan">' + data.lists1[i].zhongjiangmingdan + '</td>' +
							'</tr>';
					}
					if(pageStart == 0) {
						isfirst = 0;
					}
					// 为了测试，延迟1秒加载
					setTimeout(function() {
						$('.lists').eq(0).html(result);
						// 每次数据加载完，必须重置
						dropload.resetload();
					}, 1000);
				}

				var dropload = $('.inner').dropload({
					scrollArea: window,
					autoLoad: !0, //进入页面自动加载
					domDown: {
						domClass: 'dropload-down',
						domRefresh: '<div class="dropload-refresh">上拉加载更多</div>',
						domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
						domNoData: '<div class="dropload-noData">暂无相关数据!</div>'
					},
					loadUpFn: function(me) {
						
						console.log("下拉");
						$.ajax({
							url: 'json/updateLeft.json',
							dataType: 'json',
							success: function(me){
								console.log("0");
								result = '';
								for(var i=0;i < num;i++){
									result += 5
								}
								$('.lists').eq(0).html(result);
								dropload.unlock();
								dropload.noData();
							}
						});						
					},
					loadDownFn: function(me) {

						if(isfirst != 0) {

							console.info("总条数" + data.lists1.length)
							if(pageStart <= data.lists1.length) {
								console.log(data);
								console.log("上拉加载");
								console.log(" pageEnd---" + pageEnd + "----------pageStart---" + pageStart + "----counter--" + counter);
								for(var i = pageStart; i < pageEnd; i++) {
									//加载数据防止下标异常
									if(i < data.lists1.length) {
										console.log(data.lists1[i]);
										result += '<tr class="cont">' +
											'<td class="kuan1 hui">' + data.lists1[i].jutiqishu + '</td>' +
											'<td class="kuan2">' + data.lists1[i].shijijieguo + '</td>' +
											'<td id="look" class="kuan2 chakan">' + data.lists1[i].zhongjiangmingdan + '</td>' +
											'</tr>';
									}
									console.log("xiabiao" + i);
									var last = data.lists1.length - 1;
									if(i == last) {
										dropload.lock('down');
//										dropload.lock('up');
										dropload.noData();
									}
								}
								// 为了测试，延迟1秒加载
								setTimeout(function() {
									$('.lists').eq(0).html(result);
									// 每次数据加载完，必须重置
									dropload.resetload();
								}, 1000);
								counter++;
								pageEnd += num;
								pageStart += num;
							}

						} else {
							isfirst = 1;
							counter++;
							pageEnd += num;
							pageStart += num;
						}
						
					}
					
				});
			},
			error: function(xhr, type) {
				console.log('请求出现错误');
				// 即使加载出错，也得重置
				dropload.resetload();
			}
		});
	}
	
	function rightDownLoad(){
		$.ajax({
			type: 'GET',
			url: 'json/moreRight.json',
			dataType: 'json',
			success: function(data) {
				//进入页面默认加载前五条数据 
				result = '';
				pageEnd2 = num2 * counter2;
				pageStart2 = pageEnd2 - num2;
				console.log("pageEnd2---" + pageEnd2 + "----------pageStart2---" + pageStart2 + "----counter2--" + counter2);
				if(pageStart2 <= data.lists2.length) {
					for(var i = pageStart2; i < pageEnd2; i++) {
						result += '<tr class="cont">' +
							'<td class="kuan1 hui">' + data.lists2[i].jutiqishu + '</td>' +
							'<td class="kuan2">' + data.lists2[i].shijijieguo + '</td>' +
							'<td id="look" class="kuan2 chakan">' + data.lists2[i].zhongjiangmingdan + '</td>' +
							'</tr>';
					}
					if(pageStart2 == 0) {
						isfirst2 = 0;
					}
					// 为了测试，延迟1秒加载
					setTimeout(function() {
						$('.lists').eq(0).html(result);
						// 每次数据加载完，必须重置
						dropload.resetload();
					}, 1000);
				}

				dropload = $('.inner').dropload({
					scrollArea: window,
					autoLoad: !0, //进入页面自动加载
					domDown: {
						domClass: 'dropload-down',
						domRefresh: '<div class="dropload-refresh">上拉加载更多</div>',
						domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
						domNoData: '<div class="dropload-noData">暂无相关数据!</div>'
					},
					loadDownFn: function(me) {

						if(isfirst2 != 0) {

							console.info("总条数" + data.lists2.length)
							if(pageStart2 <= data.lists2.length) {
								console.log(data);
								console.log("上拉加载");
								console.log("pageEnd2---" + pageEnd2 + "----------pageStart2---" + pageStart2 + "----counter2--" + counter2);
								for(var i = pageStart2; i < pageEnd2; i++) {
									//加载数据防止下标异常
									if(i < data.lists2.length) {
										console.log(data.lists2[i]);
										result += '<tr class="cont">' +
											'<td class="kuan1 hui">' + data.lists2[i].jutiqishu + '</td>' +
											'<td class="kuan2">' + data.lists2[i].shijijieguo + '</td>' +
											'<td id="look" class="kuan2 chakan">' + data.lists2[i].zhongjiangmingdan + '</td>' +
											'</tr>';
									}
//									console.log("xiabiao" + i);
									var last = data.lists2.length - 1;
									if(i == last) {
										dropload.noData();
										dropload.lock('down');
									}
								}
								// 为了测试，延迟1秒加载
								setTimeout(function() {
									$('.lists').eq(0).html(result);
									// 每次数据加载完，必须重置
									dropload.resetload();
								}, 1000);
								counter2++;
								pageEnd2 += 5;
								pageStart2 += 5;
							}

						} else {
							isfirst2 = 1;
							counter2 ++;
							pageEnd2 += 5;
							pageStart2 += 5;
						}
						//				            }
					}
				});
			},
			error: function(xhr, type) {
				console.log('Ajax error!');
				// 即使加载出错，也得重置
				dropload.resetload();
			}
		});
	}
	
});