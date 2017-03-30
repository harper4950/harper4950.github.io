$(function(){
	var arr =["http://bbs.rednet.cn/","http://www.yakult.com.cn/","sport/index.html","拼图.html","index2.html","日历组件.html"];
	$("figure").each(function(i,ele){
		$(ele).on("click",function(){
			window.open(arr[i]);
			return false;
		})
	})
})
