$(function(){
	//屏幕小于768时出现的导航按钮
	var mediaShow = $('.mediaShow');
	var navListBox = $('.navListBox');
	var liChil = navListBox.find('li');
	var oneHeight = liChil.first().outerHeight(true);
	 mediaShow.click(function(){
	 	var disEle = navListBox.css('display');
	 	if(disEle == 'none'){
	 		navListBox.css({
	 			'display':'block',
	 		}).animate({
	 			'height':245
	 		});

	 	}else{
	 		navListBox.animate({
	 			'height':0
	 		},function(){
	 			navListBox.css('display','none');
	 		})
	 	}
	 })
	 window.onresize = function(){
	 	var w = document.documentElement.clientWidth || document.body.clientWidth;
	 	if(w<768){
	 		navListBox.css('display','none');
	 	}else if(w>768 && w<821){
	 		navListBox.css('display','none');
	 	}else{
	 		navListBox.css('display','block');
	 	}
	 }
});