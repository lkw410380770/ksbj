$(function() {

    // 导航
    var navLi = $('.n-list>ul>li>a');
    navLi.mouseover(function() {
        navLi.removeClass('active');
        $(this).addClass('active');
    });
    var navBottom = $('.nav-bottom>ul>li>a');
    navBottom.mouseover(function() {
        navBottom.removeClass('active');
        $(this).addClass('active');
    });
    var mediaShow = $('.hideBtn');
    var mask = $('.mask');
    var hideNav = $('.hidenav');
    var aLi = hideNav.find('a');
    aLi.mouseover(function() {
        aLi.removeClass('active');
        $(this).addClass('active');

    });
    mediaShow.on('click',function(){
          mask.css({
              'display':'block',
              'opacity':1
          });
      hideNav.css('display','block');
       hideNav.animate({
            'right':0
       },0.2)
    });
    mask.on('click',function(){
       mask.animate({
        'opacity':0
       },1,function(){
        $(this).css('display','none');
       });
     
       hideNav.animate({
            'right':'-30%'
       },1,function(){
         $(this).css('display','none');
       })
    })
    /**
     * [mySwiper description] 班级介绍动画
     * @type {Swiper}
     */
    var mySwiper = new Swiper('.classBox', {
        autoplay: 5000, //可选选项，自动滑动
        pagination: '.iconList',
        paginationClickable: true,
        loop: true,
        autoplayDisableOnInteraction: false,
        prevButton: '.prev',
        nextButton: '.next',
    });
    var mySwiper2 = new Swiper('.techBox', {
        autoplay: 5000, //可选选项，自动滑动
        pagination: '.iconList',
        paginationClickable: true,
        loop: true,
        autoplayDisableOnInteraction: false,
        prevButton: '.prev',
        nextButton: '.next',
    });
    /**
     * [mySwiper1 description] bannerd动画
     * @type {Swiper}
     */
    var mySwiper1 = new Swiper('.banner', {
        autoplay: 3500, //可选选项，自动滑动
        loop: true,
         pagination: '.page-icon',
         autoplayDisableOnInteraction : false,
          autoHeight: true, //高度随内容变化
          initialSlide: 1,
          observer:true,
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
