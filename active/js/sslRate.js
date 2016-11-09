$(function() {
	
	var num0 = 2000;
	var num1 = 2000;
	var num2 = 2000;
	var num3 = 2000;
	var num4 = 2000;
	var num5 = 2000;
	var num6 = 2000;
	var num7 = 2000;
	var num8 = 2000;
	var num9 = 2000;
	
	$('#pie').highcharts({
		 chart: {  
  
                renderTo: 'container',  
  
                plotBackgroundColor: null,  
  
                plotBorderWidth: null,  
  
                plotShadow: false  
  
            },  
		title: {
			verticalAlign: 'middle',
			y: 40
		},
	 	colors: [       //颜色设置
	 			'#FF0000', '#ff6600', '#ff9900', '#ffcc00','#698c00', '#00664c',
	 			'#006dd9', '#00468c', '#69008c','#d9007e'
             ],
		tooltip: {                //提示信息
		    shared: true,
		    useHTML: true,
//		    headerFormat: '<small>{point.key}</small><table>',
		    pointFormat:           //提示信息内容
		        '<td style="text-align: right"><b>{point.y}</b></td></tr>',
		    footerFormat: '</table>',
		    valueDecimals: 0    //小数的位数
		},
		
		plotOptions: {
			column:{
				borderColor: "",//去边框
	            shadow: false		//去阴影
			},
			pie: {
				//文字显示
				dataLabels: {
//					enabled: true,
					distance: -50,
//					style: {
//						fontWeight: 'bold',
//						color: 'white'
//					}
				},
				startAngle: 0,    //起始角度
				endAngle: 360,         //旋转角度
				center: ['50%', '50%']     //饼图位置
			}
		},
		series: [{
			type: 'pie',
			innerSize: '65%',      //内圆大小，值越大圆越大
			data: [           //各部分所占百分比
				['0', num0],
				['1', num1],
				['2', num2],
				['3', num3],
				['4', num4],
				['5', num5],
				['6', num6],
				['7', num7],
				['8', num8],
				['9', num9],
				{
//					name: 'Proprietary or Undetectable',
					y: 0,       
					dataLabels: {
						enabled: false
					}
				}
			]
//			 events: {//事件
//              click: function(e) {
//
//						borderColor: "",//去边框
////			            shadow: false		//去阴影
//
//              } 
//          }
		}]
	});
	
	$("path").attr("stroke","none");
	$("path").css({"stroke":"none"});
	$(".highcharts-button").css({"display":"none"});
	$(".highcharts-contextbutton").css({"display":"none"});
	$(".highcharts-button-normal").css({"display":"none"});
	$(".highcharts-credits").css({"display":"none"});
	$("tspan").css({"display":"none"});
	$(".highcharts-background").css({"display":"none"});
	
	var ws0 = $("#ws0");
	var ws1 = $("#ws1");
	var ws2 = $("#ws2");
	var ws3 = $("#ws3");
	var ws4 = $("#ws4");
	var ws5 = $("#ws5");
	var ws6 = $("#ws6");
	var ws7 = $("#ws7");
	var ws8 = $("#ws8");
	var ws9 = $("#ws9");
	
	//色块部分显示
	ws0.text(num0);
	ws1.text(num1);
	ws2.text(num2);
	ws3.text(num3);
	ws4.text(num4);
	ws5.text(num5);
	ws6.text(num6);
	ws7.text(num7);
	ws8.text(num8);
	ws9.text(num9);
	
	
});




















