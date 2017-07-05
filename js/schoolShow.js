$(function(){
	/**
     * [oHj_picList description] 环境展示
     * @type {[type]}
     */
    var oHj_picList = $('.info-list>ul>li');
    oHj_picList.on('mouseover',function(){
    	$(this).find('div.maker').css({
    				'transform':'translate(0,0) rotate(0)',
    	});
    	$(this).find('div.lookdetail').css({
    				'transform':'translate(0,0) rotate(0)',
    	});
    })
     oHj_picList.on('mouseleave',function(){
    
    	$(this).find('div.maker').css({
    				'transform':'translate(-100%,0) rotate(-360deg)',
    	});
    	$(this).find('div.lookdetail').css({
    				'transform':'translate(-100%,0) rotate(-360deg)',
    	});
    })
})