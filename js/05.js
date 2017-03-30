$(function(){
	//导航部分
	var on =true;	//创建开关
	$(".ul1 li").each(function(i,ele){	//循环每个导航的li
		$(ele).on("mouseenter",function(){	//鼠标移进事件
			$(".ss").hide();	//下拉列表全部隐藏
			$(".ss").eq(i).show();	//当前列表出现
			$(".ul1 li").css("background","");	//全部li颜色清空
			$(this).css("background","rgba(0,0,0,.4)")	//当前li改变颜色
			on =true;	//开关为true
		})
		$(ele).on("mouseleave",function(){	//鼠标移出事件
			on =false;	//开关为false
			setTimeout(function(){	//延迟100ms后执行
				if(on ==false){		//判断开关为false才执行
					$(".ss").hide();	//下拉列表全部隐藏
					$(".ul1 li").css("background","");	//导航li颜色全部清除
				}
			},100)
		})
	})
	$(".ss li").on("mouseenter",function(){		//下拉列表每个li移进事件
		on =true;	//开关为true
		$(".ss li").children().css("opacity",0);	//全部小箭头透明度为0（隐藏）
		$(this).children().css("opacity",1)		//当前li的小箭头透明度为1（显示）
	})
	$(".ss").on("mouseleave",function(){	//下拉列表每个li移出事件
		$(".ul1 li").css("background","");	//清除导航全部li颜色
		$(".ss li").children().css("opacity",0)	//下拉列表全部箭头隐藏
		$(".ss").hide();	//全部下拉列表隐藏
	})	
	
	//轮播部分
		
	$(".banner").on("mouseenter",function(){	//鼠标移进事件
		$(".a1").css("opacity",1);	//a1显示
		$(".a2").css("opacity",1);	//a2显示
	})
		//移出隐藏
	$(".banner").on("mouseleave",function(){	//鼠标移出事件
		$(".a1").css("opacity",0);	//a1隐藏
		$(".a2").css("opacity",0);	//a2隐藏
	})
	var num =0;	//创建num变量
	$(".lunbo li").eq(0).css("opacity",1)
	$(".oo li").eq(0).css("background","red");	//默认一个圆点变色
	$(".a2").on("click",function(){	 //点击下一张
		num++;	
		if(num>2){	//限制num
			num =0
		}
		$(".lunbo li").stop().animate({	//全部图片的li隐藏
			"opacity":0			
		},1000)
		$(".lunbo li").eq(num).stop().animate({	//第num张图片显示出来
			"opacity":1
		},1000)
		//小圆点的第num个加上颜色，除了自身其他全部圆点清空颜色
		$(".oo li").eq(num).css("background","red").siblings("li").css("background","");
	})
	$(".a1").on("click",function(){	//点击上一张
		num--;
		if(num<0){	//限制num
			num =2
		}
		$(".lunbo li").stop().animate({	//全部图片的li隐藏
			"opacity":0			
		},1000)
		$(".lunbo li").eq(num).stop().animate({	//第num张图片显示出来
			"opacity":1
		},1000)
		//小圆点的第num个加上颜色，除了自身其他全部圆点清空颜色
		$(".oo li").eq(num).css("background","red").siblings("li").css("background","");
	})
	$(".oo li").each(function(i,ele){	
		$(ele).on("click",function(){	//点击每个小点
			$(".lunbo li").stop().animate({	//全部图片的li隐藏
				"opacity":0			
			},500);
			$(".lunbo li").eq($(this).index()).stop().animate({	//轮播图片根据小圆点的下标数显示出来
				"opacity":1
			},500)
			//小圆点根据当前坐标加上颜色，除了当前其他全部圆点清空颜色
			$(".oo li").eq(i).css("background","red").siblings("li").css("background","");
			num =$(this).index();	//把当前下标赋值给num
		})
	})
	//list 移进移出效果
	$(".listBox").on("mouseenter",function(){	//鼠标移进事件
		$(this).css("opacity",1);	//当前的box显示出来
		$(this).next().css("background","#fff");	//当前的下一个兄弟节点背景变白
	})
	$(".listBox").on("mouseleave",function(){	//鼠标移出事件
		$(this).css("opacity",0);	//当前的box消失
		$(this).next().css("background","");	//当前的下一个兄弟节点颜色清除
	})
})
