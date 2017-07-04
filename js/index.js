$(function() {

   
    
    /**
     * [mySwiper description] 班级介绍动画
     * @type {Swiper}
     */
    var mySwiper = new Swiper('.classBox', {
        pagination: '.iconOne',
        nextButton: '.class-next',
        prevButton: '.class-prev',
        paginationClickable: true,
        loop: true,
    
    });
    var mySwiper2 = new Swiper('.techBox', {
       
        pagination: '.iconTwo',
        prevButton: '.prev',
        nextButton: '.next',
        paginationClickable: true,
        loop: true,
        
    });
    /**
     * [mySwiper1 description] bannerd动画
     * @type {Swiper}
     */
    var mySwiper1 = new Swiper('.banner', {
        autoplay: 3500, //可选选项，自动滑动
        loop: true,
         pagination: '.page-icon',
         paginationClickable :true,
         autoplayDisableOnInteraction : false,
          autoHeight: true, //高度随内容变化
          initialSlide: 1,
          // loopAdditionalSlides : 1,

    });


    var oHj_picList = $('.hj-picList>ul>li');
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
   
});
