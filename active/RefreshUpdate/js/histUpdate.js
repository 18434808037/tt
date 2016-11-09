$(function(){
	showData();
	var i=0;
	
	//判断移动端手势滑动方向-----touchstart-----touchmove
	$(".inner").on('touchstart',function(e){
		e.preventDefault();
		startX = e.originalEvent.changedTouches[0].pageX;
		startY = e.originalEvent.changedTouches[0].pageY;
	});
	$(".inner").on('touchmove',function(e){
		e.preventDefault();
		moveEndX = e.originalEvent.changedTouches[0].pageX;
		moveEndY = e.originalEvent.changedTouches[0].pageY;
		X = moveEndX - startX;
		Y = moveEndY - startY;
		if(Math.abs(X) > Math.abs(Y) && X > 0){
			console.log("left to right");
		}
		else if(Math.abs(X) > Math.abs(Y) && X < 0){
			console.log("right to left");
		}
		else if(Math.abs(Y) > Math.abs(X) && Y > 0){
//			$(".inner").css({"margin-top":"10em"});
			var margT = $('.inner').offset().top; 
//			console.log(margT);
			mtop = margT+1;
//			console.log(mtop);
			if(mtop==180){
				mtop = margT-50;
				return false;
			}
//			mtop = i++;
//			if(mtop>300){
//				mtop = i--;
//				return false;
//			}
			$(".inner").css({"margin-top":mtop+"px"});
//			console.log("top to bottom");
//			i++;
//			console.log('总共滑动了'+i+'次');
			
		}
		else if(Math.abs(Y) > Math.abs(X) && Y < 0){
			console.log("bottom to top");
		}
		else{
			console.log("just touch");
		}
	});
	$(".inner").on('touchend',function(e){
		if(mtop==180){
			mtop = margT-50;
			return false;
		}
		$(".inner").css({"margin-top":mtop+"px"});
	});
	
	function showData(){
		$.ajax({
			type:'GET',
			url:'json/updateLeft.json',
			dataType:'json',
			success:function(data){
				console.log("请求成功");
				var result = '';
				var num = 0;   
				var count = 5;      //显示的条数
				var page = 1;
				console.log("数据的条数--------"+data.lists1.length);
				for(var i=0;i<data.lists1.length;i++){
					result += '<tr class="cont">' +
									'<td class="kuan1 hui">' + data.lists1[i].jutiqishu + '</td>' +
									'<td class="kuan2">' + data.lists1[i].shijijieguo + '</td>' +
									'<td id="look" class="kuan2 chakan">' + data.lists1[i].zhongjiangmingdan + '</td>' +
									'</tr>';
				}
				 $('.lists').eq(0).html(result);
			},
			error:function(){
				console.log("请求出错!");
			}
		});
	}
})
