function coll(obj1,obj2){	//判断两个元素是否碰撞的函数
	var div1All = obj1.getBoundingClientRect();	//获取移动元素的可视区位置
	var top1 = div1All.top;			
	var bottom1 = div1All.bottom;
	var left1 = div1All.left;
	var right1 = div1All.right;				
	var div2All = obj2.getBoundingClientRect();//获取固定元素的可视区位置
	var top2 = div2All.top;
	var bottom2 = div2All.bottom;
	var left2 = div2All.left;
	var right2 = div2All.right;		
	if(right1>=left2&&bottom1>top2&&left1<right2&&top1<bottom2){
		return true;
	}else{
		return false;
	}
}