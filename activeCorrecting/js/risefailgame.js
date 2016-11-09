(function() {
    var serverPrefix = "http://192.168.1.29:8080/tniu/zhangdiele/";
    var auth_token = "5568daf1db802a43661cd8ef340e2382";
    parseInitData(testdata.data);
    // initInfo();
    function initInfo() {
    	"use strict";
        $.ajax({
            url: (serverPrefix + "getZDLInfo"),
            cache: false,
            beforeSend: function(httpRequest){
                httpRequest.setRequestHeader("auth_token", auth_token);
                console.log(auth_token);
            },
            success: function(d) {
                console.log("从服务器端获取数据", d);
                if (d && d.status){
                	parseInitData(d.data);
                }
            },
            error: function() {
            	console.log("返回失败");
            },
            complete:function(httpRequest, status){
            	if (status == "timeout"){
            		console.log("超时");
            	}
            }
        });
    }

    function riseAndFailTotal() {
        $.ajax({
            url: serverPrefix + "getRiseAndFailTotal",
            cache: false,
            beforeSend: (httpRequest) => {
                httpRequest.setRequestHeader("auth_token", auth_token);
            },
            success: (d) => {
            	var data = d.data;
            	var riseNum = data.riseNum;
            	var failNum = data.failNum;
            },
            error: () => {}
        });
    }

    // 解析初始化数据
    function parseInitData(data){

    	console.log(data);
        var openTime = data.kpsj; // 开盘时间
        var closeTime = data.spsj; // 收盘时间
        var countDown = data.quizCountDown; // 倒计时
        var guessRiseTotal = data.riseTbNum; // 猜涨总Ｔ币
        var guessFailTotal = data.fallTbNum; // 猜跌总T币
        var riseProfitRatio = data.riseProfitFactor; // 猜涨赢利系数
        var failProfitRatio = data.failprofitFactor; // 猜跌赢得系数
        var myTb = data.myTbNum;
        var uid = data.uid;
        for (var i = 1; i <= 8; i++) {
            data["historyQsZd" + i]
        }

        console.log(openTime.split(" "));
        $("#morningTime0").text(openTime.split(" ")[0]);
        $("#morningTime1").text(openTime.split(" ")[1]);
        $("#afternoonTime0").text(closeTime.split(" ")[0]);
        $("#afternoonTime1").text(closeTime.split(" ")[1]);
    }
})();
