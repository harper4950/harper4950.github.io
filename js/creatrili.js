(function($) {

	$("head").append($('<link rel="stylesheet" href="js/style.css" />'));

	var opation = {
		clet: ['下', '上'],	
		week: ['日', '一', '二', '三', '四', '五', '六'],
		timer2: ['-', '-', '-'],
		timer3: ['年', '月']
	}

	var setting = {};
	var parent = null;
	var num  =0;
	var box = $('<div id="box">');

	function rili(obj) {

		$.extend(setting, opation, obj);
		parent = this; //把父级给存储起来	
		box.html(creatBox());
		parent.append(box);

		time();
		creatLi();
		nextFn();
	}

	function creatBox() {
		var html = '<div>' +
			'<p class="item1">1</p>' +
			'<p class="item2">2</p>' +
			'<div id="" class="item3">' +
			'<p></p>' +
			'<div id="">' +
			'<span id="">' + setting.clet[0] + '</span>' +
			'<span id="">' + setting.clet[1] + '</span>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'<div id="header">' +
			'<ul>';
		$.each(setting.week, function(i, ele) {
			html += '<li>' + setting.week[i] + '</li>'
		})

		html += '</ul>' +
			'</div>' +
			'<div id="content">' +
			'<ul></ul>' +
			'</div>';
		return html;
	}

	function time() {

		function changeTime() {
			var oDate = new Date();
			var iH = oDate.getHours();
			var iM = oDate.getMinutes();
			var iS = oDate.getSeconds();

			var iY = oDate.getFullYear();
			var iMon = oDate.getMonth() + 1;
			var iD = oDate.getDate();
			var day = oDate.getDay();

			var item1 = $('.item1');
			var item2 = $('.item2');
			item1.html(tDo(iH) + ':' + tDo(iM) + ':' + tDo(iS));
			item2.html(tDo(iY) + setting.timer2[0] + tDo(iMon) + setting.timer2[0] + tDo(iD) + ', 星期 ' + setting.week[day]);
		}
		var timer = null;
		changeTime();
		timer = setInterval(changeTime, 1000);

	}

	function creatLi() {
		
		var dateDate = $('#content ul');
		dateDate.html('');
		/*
		 	生成空白li
		*/
		var oDate = new Date();
		oDate.setMonth(oDate.getMonth() + num);

		oDate.setMonth(oDate.getMonth());

		oDate.setDate(1);

		var d = oDate.getDay(); //获取的是当前的星期天

		/*
		 	获取上个月的天数
		 */

		var oDate = new Date();
		oDate.setMonth(oDate.getMonth() + num); //一月份	
		oDate.setDate(0);
		var m = oDate.getDate();

		var star = m - d;

		for(var i = star; i < m; i++) {
			var li = $('<li>' + (++star) + '</li>');
			li.addClass('over')
			dateDate.append(li);
		}

		//生成当月的天数
		var oDate = new Date();
		var nowDate = oDate.getDate();
		oDate.setMonth(oDate.getMonth() + num);
		var p1 = $('.item3 p');
		p1.html(tDo(oDate.getFullYear()) + '年' + tDo(oDate.getMonth() + 1) + '月');

		oDate.setMonth(oDate.getMonth() + 1);
		oDate.setDate(0); //为了获取这个月的天数
		var len = oDate.getDate();
		for(var i = 0; i < len; i++) {
			var li = $('<li>' + (i + 1) + '</li>');
			if(i == nowDate - 1 && num == 0) {
				li.addClass('active');
			}
			dateDate.append(li);
		}

		var allLi = 42; //总的li数量
		var liNub = dateDate.find('li').size();
		for(var i = 0; i < allLi - liNub; i++) {
			var li = $('<li>' + (i + 1) + '</li>');
			dateDate.append(li);
			li.addClass('over')
		}

	}


	function nextFn(){
		var spans = $('.item3 span');
		
		spans.eq(0).on('click',function(){
		 	num++;
		 	creatLi();
		})	
		spans.eq(1).on('click',function(){
		 	num--;
		 	creatLi(); 	
		 })
	}
	
	function tDo(n) {
		return n = n > 9 ? '' + n : '0' + n;
	}

	$.fn.extend({
		rilis: rili
	})

})(jQuery)