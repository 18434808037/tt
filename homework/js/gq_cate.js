//隐藏的菜单
var flag=true;
$('#nav').bind('touchend',function(){
	if(flag==true){
		$('.cate_nav').show();flag=false;
	}else if(flag==false){
		$('.cate_nav').hide();flag=true;
	}
});

//选项卡
var i=0;
$('.nav_ul span').bind('touchend',function(){
	i=$(this).parent('li').index();
	$(this).css('color','#000').parent('li').siblings('li').children('span').css('color','#999');
	$('.box').children('div').eq(i).show().siblings('div').hide();
	$('.box').children('div').eq(i).find('.box_nav li').eq(0).css('backgroundColor','#fff').siblings('li').css('backgroundColor','#F8F8F8');
	$('.box_content').eq(i).children('ul').eq(0).show().siblings('ul').hide();
});

$('.box_nav li').bind('touchend',function(){
	var n=$(this).index();
	$(this).css('backgroundColor','#fff').siblings('li').css('backgroundColor','#F8F8F8');
	$('.box_content').eq(i).children('ul').eq(n).show().siblings('ul').hide();
});



