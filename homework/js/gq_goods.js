//隐藏的菜单
var flag=true;
$('#nav').bind('touchend',function(){
	if(flag==true){
		$('.cate_nav').show();flag=false;
	}else if(flag==false){
		$('.cate_nav').hide();flag=true;
	}
});

$('.shaixuan_nav').bind('touchend',function(){
	if(flag==true){
		$('.shaixuan_warp').show();flag=false;
	}else if(flag==false){
		$('.shaixuan_warp').hide();flag=true;
		$('.shaixuan_ul li').eq(0).css('backgroundColor','#fff').siblings('li').css('backgroundColor','#F8F8F8');
		$('.shaixuan_content').children('ul').eq(0).show().siblings('ul').hide();
	}
});


$('.shaixuan_ul li').bind('touchend',function(){
	m=$(this).index();
	$(this).css('backgroundColor','#fff').siblings('li').css('backgroundColor','#F8F8F8');
	$('.shaixuan_content').children('ul').eq(m).show().siblings('ul').hide();
});

//选项卡
var i=0;
$('.lis').bind('touchend',function(){
	i=$(this).index();
	$(this).css('color','#000').siblings('li').css('color','#999');
	$('.warp_box').children('.box').eq(i).show().siblings('div').hide();
	$('.shaixuan_warp').hide();flag=true;
});

//返回顶部
$('.top').bind('touchend',back);
function back(){
	document.body.scrollTop -=30;
	document.documentElement.scrollTop-=30;
	if(document.body.scrollTop>0||document.documentElement.scrollTop>0){
		setTimeout("back()",1)
	}
}

