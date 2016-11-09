$(document).ready(function() { 
//	$.ajax({
//		type: "get", 
//		url:"json/new.json", 
//		async: true, 
//		data:null,
//		dataType: "json", 
//		timeout: 5000, 
//		success: function(response) {
//			console.log(response);
////			if (data.status == "1") {
////				var result = data.result;
//////				$("#dapanzhishu").text(result.dapanzhishu);
////				document.getElementById("dapanzhishu").innerHTML = result.dapanzhishu;
////			}
//		},
//		error:function(){ 
//			console.log("error");  
//		}
//	});

 	aa = $.ajax({  
        //请求方式为get  
        type:"get",  
        //json文件位置  
        url:"new.json",  
        //返回数据格式为json  
        dataType: "json", 
        async:false,
        //请求成功完成后要执行的方法  
        success: function(data){  
//          //使用$.each方法遍历返回的数据date,插入到id为#result中  
//          $.each(data,function(i,item){  
//              var content=item.name;  
                $("#dapanzhishu").text("23");  
//          });  
        }
//      error:function(){
//      	console.log("error");
//      }
    });  
	$("#dapanzhishu").text(aa.data);  

}); 
