$(function() {

    // 返回顶部
    var oGoTop = $('.goTop');
    oGoTop.on('click',function(ev){
          ev.preventDefault();
          $("html,body").animate({scrollTop:0}, 500);
    })

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
     var hideBtn = $('.hideBtn');
    var oHideUl = $('.navListBox');
    var mask = $('.mask');
    hideBtn.on('click',function(){
        mask.fadeIn();
        // oHideUl.css('right',"0");
       oHideUl.addClass('addTrans');
    });
    mask.on('click',function(){
      mask.fadeOut();
      oHideUl.removeClass('addTrans')
    })
    /**
     * [mySwiper description] 班级介绍动画
     * @type {Swiper}
     */
    var mySwiper = new Swiper('.classBox', {
        pagination: '.iconList',
        paginationClickable: true,
        loop: true,
        prevButton: '.prev',
        nextButton: '.next',
    });
    var mySwiper2 = new Swiper('.techBox', {
       
        pagination: '.iconList',
        paginationClickable: true,
        loop: true,
        
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
