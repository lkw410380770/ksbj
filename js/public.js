$(function() {
    //公共右侧
    var comRight = $('.common-icon-nav>ul>li>i');
    comRight.on('mouseover',function(){
        comRight.next('div').removeClass('show-hover');
        $(this).next('div').addClass('show-hover');
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
    hideBtn.on('click', function() {
        mask.fadeIn();
        // oHideUl.css('right',"0");
        oHideUl.addClass('addTrans');
    });
    mask.on('click', function() {
        mask.fadeOut();
        oHideUl.removeClass('addTrans')
    })

    //comment right  js效果;
    var boot = true;
    $('.r-last').on('click', function() {
        var aLi = $(this).parent().find('li');
        var h = aLi.eq(0).outerHeight(true);
        if (boot) {
            aLi.eq(0).css({
                'transform': 'translate(0,0)'
            })
            aLi.eq(1).css({
                'transform': 'translate(0,0px)',
                'transition-delay': 0.2 + 's'
            })
            aLi.eq(2).css({
                'transform': 'translate(0,0px)',
                'transition-delay': 0.4 + 's'
            })
            aLi.find('div').css('display', 'block');
            boot = false;
            $(this).find('i').removeClass('icon-icon').addClass('icon-arrow');
        }else{
            aLi.eq(0).css({
                'transform': 'translate(0,155px)'
            })
            aLi.eq(1).css({
                'transform': 'translate(0,110px)',
                'transition-delay': 0.2 + 's'
            })
            aLi.eq(2).css({
                'transform': 'translate(0,65px)',
                'transition-delay': 0.4 + 's'
            })
            aLi.find('div').css('display', 'none');
            boot = true;
            $(this).find('i').removeClass('icon-arrow').addClass('icon-icon')
        }

    })

});
