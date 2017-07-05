$(function(){
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

	 
});