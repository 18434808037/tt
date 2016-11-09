$(function(){
   var counter = 0;
    // 每页展示5个
    var num = 5;
    var pageStart = 0,pageEnd = 0;

    // dropload
    $('.inner').dropload({
        scrollArea : window,
        domDown : {
            domClass   : 'dropload-down',
            domRefresh : '<div class="dropload-refresh">上拉加载更多</div>',
            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
            domNoData  : '<div class="dropload-noData">暂无数据</div>'
        },
        loadUpFn:function(me){
        	$.ajax({
					type: 'GET',
					url: 'json/moreLeft.json',
					dataType: 'json',
					success: function(data) {
						var result = '';
						for(var i = 0; i < data.lists1.length; i++) {
							result += '<tr class="cont">' +
							'<td class="kuan1 hui">'+data.lists1[i].jutiqishu + '</td>' +
							'<td class="kuan2">' + data.lists1[i].shijijieguo + '</td>' +
							'<td id="look" class="kuan2 chakan">' + data.lists1[i].zhongjiangmingdan +'</td>' +
							'</tr>';
						}
						setTimeout(function() {
							$('.lists').html(result);
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
        },
        loadDownFn : function(me){
            $.ajax({
                type: 'GET',
                url: './json/moreLeft.json',
                dataType: 'json',
                success: function(data){
                    var result = '';
                    counter++;
                    pageEnd = num * counter;
                    pageStart = pageEnd - num;
                    for(var i = pageStart; i < pageEnd; i++){
                        result += '<tr class="cont">' +
							'<td class="kuan1 hui">'+data.lists1[i].jutiqishu + '</td>' +
							'<td class="kuan2">' + data.lists1[i].shijijieguo + '</td>' +
							'<td id="look" class="kuan2 chakan">' + data.lists1[i].zhongjiangmingdan +'</td>' +
							'</tr>';
                        if((i + 1) >= data.lists1.length){
                            // 锁定
                            me.lock();
                            // 无数据
                            me.noData();
                            break;
                        }
                    }
                    // 为了测试，延迟1秒加载
                    setTimeout(function(){
                        $('.lists').append(result);
                        // 每次数据加载完，必须重置
                        me.resetload();
                    },1000);
                },
                error: function(xhr, type){
                    console.log('Ajax error!');
                    // 即使加载出错，也得重置
                    me.resetload();
                }
            });
        }
    });
});