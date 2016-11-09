$(function() {

	//	var lileng = $("#titl ul li");
	//	$.each(lileng, eac);
	//	//	look.click(looked);
	//	function eac(i) {
	//		$(this).click(function() {
	//			//加载
	//			$(this).index = i;
	//		});
	//	}

	//	var value = sessionStorage.getItem("padding-top")
	//  console.log("155888======"+value);
	//	$(".lists1").css({"padding-top":value+"px"});

	var itemIndex = 0;
	var tab1LoadEnd = false;
	var tab2LoadEnd = false;
	// tab
	$('.tab .item').on('click', function() {
		var $this = $(this);
		itemIndex = $this.index();
		$this.addClass('cur').siblings('.item').removeClass('cur');
		$('.lists').eq(itemIndex).show().siblings('.lists').hide();
		// 如果选中菜单一
		if(itemIndex == '0') {
			$(this).children().attr("src", "../img/btm1-" + itemIndex + ".svg");
			$(this).next().children().attr("src", "../img/btm2-" + (itemIndex + 1) + ".svg");
			$(".mydata").css({
				"display": "table"
			});
			$(".myGuess").css({
				"display": "none"
			});
			// 如果数据没有加载完
			if(!tab1LoadEnd) {
				// 解锁
				dropload.unlock();
				dropload.noData(false);
			} else {
				// 锁定
				dropload.lock('down');
				dropload.noData();
			}
			// 如果选中菜单二
		} else if(itemIndex == '1') {
			$(this).children().attr("src", "../img/btm2-" + (itemIndex - 1) + ".svg");
			$(this).prev().children().attr("src", "../img/btm1-" + itemIndex + ".svg");
			$(".myGuess").css({
				"display": "table"
			});
			$(".mydata").css({
				"display": "none"
			});
			if(!tab2LoadEnd) {
				// 解锁
				dropload.unlock();
				dropload.noData(false);
			} else {
				// 锁定
				dropload.lock('down');
				dropload.noData();
			}
		}
		// 重置
		dropload.resetload();
	});
	var counter = 0;
	// 每页展示5个
	var num = 15;
	var pageStart = 0,
		pageEnd = 0;
	var counter2 = 0;
	// 每页展示5个
	var num2 = 15;
	var pageStart2 = 0,
		pageEnd2 = 0;

	var isfirst = 0;

	offT = $("table").offset().top
	console.log("79797979---" + offT);

	// dropload
	var dropload = $('.inner').dropload({
		scrollArea: window,
		autoLoad: !0, //进入页面自动加载
		distance: 50,
		domUp: {
			domClass: "dropload-up",
			domRefresh: '<div class="dropload-refresh"></div>',
			domUpdate: '<div class="dropload-update"></div>',
			domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>'
		},
		domDown: {
			domClass: 'dropload-down',
			domRefresh: '<div class="dropload-refresh">上拉加载更多</div>',
			domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
			domNoData: '<div class="dropload-noData">暂无数据</div>'
		},
		loadUpFn: function(me) {

			if(itemIndex == '0') {
				localStorage.getItem("padding-top");
				$.ajax({
					type: 'GET',
					url: 'json/moreLeft.json',
					dataType: 'json',
					success: function(data) {
						var result = '';
						for(var i = 0; i < num; i++) {
							result += '<tr class="cont">' +
								'<td class="kuan1 hui">' + data.lists1[i].jutiqishu + '</td>' +
								'<td class="kuan2">' + data.lists1[i].shijijieguo + i + '</td>' +
								'<td class="kuan2">' + data.lists1[i].zhongjiangmingdan + '</td>' +
								'</tr>';
						}
						setTimeout(function() {
							$('.lists').eq(0).html(result);
							// 每次数据加载完，必须重置
							me.resetload();
							// 重置索引值，重新拼接more.json数据
							counter = 0;
							// 解锁
							me.unlock();
							me.noData(false);
						}, 500);
					}
				});
			} else if(itemIndex == '1') {
				$.ajax({
					type: 'GET',
					url: 'json/moreRight.json',
					dataType: 'json',
					success: function(data) {
						var result = '';
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
							$('.lists').eq(1).html(result);
							// 每次数据加载完，必须重置
							me.resetload();
							// 重置索引值，重新拼接more.json数据
							counter2 = 0;
							// 解锁
							me.unlock();
							me.noData(false);
						}, 500);
					}
				});
			}

		},
		loadDownFn: function(me) {
			// 加载菜单一的数据
			if(itemIndex == '0') {

//				$(".lists1").on('touchmove', function() {
//					offT = $("table").offset().top
						//          		trHei = $("tr").height();
						//          		console.log("tr的高度"+trHei);
						//          		sessionStorage.setItem("padding-top",offT);
						//          		scroltop = $(document).scrollTop();
						//          		console.log("----------"+offT+"----------scroll-top-------"+scroltop);
						//          		$(".lists1").css({"padding-top":offT});
//				});

				//          	value = offT ;
				//          	localStorage.setItem("padding-top",offT);//保存数据
				//          	console.log("offset45555555========"+offT);
				var static_counter = 0;
				var old_counter=0;
				$.ajax({
					type: 'GET',
					url: 'json/moreLeft.json',
					dataType: 'json',
					success: function(data) {

						var result = '';
						autoLoad: 0;
						counter++;
						
						
						var static_counter = sessionStorage.getItem("static_counter");
						old_counter=counter;
						if(static_counter > 0) {
							
							counter = static_counter;
							sessionStorage.setItem("static_counter",0);
							
						}else{
							sessionStorage.setItem("static_counter",0);
							if(old_counter>0){
								counter=old_counter;
							}
						}
						console.log("我保存的"+counter +"----------"+static_counter);
//						sessionStorage.removeItem("static_counter");
						
						
						pageEnd = num * counter;
						pageStart = pageEnd - num;

						sessionStorage.setItem("counter", counter);

						console.log("counteeeeee------" + static_counter);
						if(pageStart <= data.lists1.length) {
							for(var i = pageStart; i < pageEnd; i++) {
								result += '<tr class="cont">' +
									'<td class="kuan1 hui">' + data.lists1[i].jutiqishu + '</td>' +
									'<td class="kuan2">' + data.lists1[i].shijijieguo + i + '</td>' +
									'<td class="kuan2">' + data.lists1[i].zhongjiangmingdan + '</td>' +
									'</tr>';
								if((i + 1) >= data.lists1.length) {
									// 数据加载完
									tab1LoadEnd = true;
									// 锁定
									me.lock();
									// 无数据
									me.noData();
									break;
								}
							}
							// 为了测试，延迟1秒加载
							setTimeout(function() {
								if(counter == 1) {
									//                          		console.log("1");
									$('.lists').eq(0).html(result);
								} else {
									//                          		console.log("not1");
									$('.lists').eq(0).append(result);
								}

								// 每次数据加载完，必须重置
								me.resetload();
							}, 500);
						}

					},
					error: function(xhr, type) {
						console.log('Ajax error!');
						// 即使加载出错，也得重置
						me.resetload();
					}
				});
				// 加载菜单二的数据
			} else if(itemIndex == '1') {
				$.ajax({
					type: 'GET',
					url: 'json/moreRight.json',
					dataType: 'json',
					success: function(data) {
						var result = '';
						counter2++;
						pageEnd2 = num2 * counter2;
						pageStart2 = pageEnd2 - num2;
						if(pageStart2 <= data.lists2.length) {
							for(var i = pageStart2; i < pageEnd2; i++) {
								result += '<tr class="cont">' +
									'<td class="kuan3 hui">' + data.lists2[i].qishu + '</td>' +
									'<td class="kuan4">' + data.lists2[i].jingcai + '</td>' +
									'<td class="kuan4 hui">' + data.lists2[i].Tb + '</td>' +
									'<td class="kuan4">' + data.lists2[i].jieguo + '</td>' +
									'<td class="kuan4 red">' + data.lists2[i].jiangli + '</td>' +
									'</tr>';
								if((i + 1) >= data.lists2.length) {
									// 数据加载完
									tab2LoadEnd = true;
									// 锁定
									me.lock();
									// 无数据
									me.noData();
									break;
								}
							}
							// 为了测试，延迟1秒加载
							setTimeout(function() {
								if(counter2 == 1) {
									console.log("1");
									$('.lists').eq(1).html(result);
								} else {
									console.log("not1");
									$('.lists').eq(1).append(result);
								}
								//	                            $('.lists').eq(1).append(result);
								// 每次数据加载完，必须重置
								me.resetload();
							}, 500);
						}
					},
					error: function(xhr, type) {
						console.log('Ajax error!');
						// 即使加载出错，也得重置
						me.resetload();
					}
				});
			}
		}
	});

	//          if(sessionStorage.pagecount){
	//			    sessionStorage.pagecount=Number(sessionStorage.pagecount) +1;
	//			}else{
	//			    sessionStorage.pagecount=1;
	//			}
	//			console.log("Visits "+ sessionStorage.pagecount + " time(s).");
	//  		if(sessionStorage.pagecount!=1){
	//  			console.log("!=1");
	//  			console.log(offT);
	//  		}

});