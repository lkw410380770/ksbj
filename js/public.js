$(function(){
	//屏幕小于768时出现的导航按钮
	var mediaShow = $('.mediaShow');
	var navListBox = $('.navListBox');
	var liChil = navListBox.find('li');
	var oneHeight = liChil.first().outerHeight(true);
	var boot = true;
	 mediaShow.click(function(){
	 	var disEle = navListBox.css('display');
	 		if(boot){
	 			navListBox.css({
	 					'height':liChil.length*oneHeight,
	 					
	 			});
	 			boot = false;
	 		}else{
	 			navListBox.css({
	 					'height':0,
	 					
	 			});
	 			boot = true;
	 		}

	 })

	 $('.link-btn').on('click',function(){
	 	var self = $(this);
	 	var oUl = $('.ulList');
	 	var t = new TimelineMax();
	 	var w = oUl.outerWidth(true);
	 	var h = oUl.outerHeight(true);
	 	oUl.css({
	 		'display':'block',
	 		'margin-left':-w/2,
	 		'margin-top':-h/2
	 	});
	 	t.set(oUl,{x:-25+'%'})
	 	t.to(oUl,0.5,{
	 		y:-50+'%',
	 			
	 	})
	 })
});