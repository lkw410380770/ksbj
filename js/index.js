$(function() {
    var numEle = $('.introNum>ul>li');
    var arr = ['个', '㎡', '名'];
    var num1 = $('.num1');
    var num2 = $('.num2');
    var num3 = $('.num3');
    var introduce = $('.introduce');
    var bootS = true;
    var count1 = num1.text();
    var count2 = num2.text();
    var count3 = num3.text();
    $(window).scroll(function() {
        if (bootS) {
            if (checkScroll(introduce)) {
                num1.numberRock({
                    speed: 14,
                    count: count1
                })
                num2.numberRock({
                    speed: 14,
                    count: count2
                })
                num3.numberRock({
                    speed: 14,
                    count: count3
                })
                bootS = false;
            }
        }


    })

    $('.lasChild').on('click', function() {
        $(this).parents('div.links').css('display', 'none');
    })

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
        paginationClickable: true,
        autoplayDisableOnInteraction: false,
        autoHeight: true, //高度随内容变化
        initialSlide: 1,
        // loopAdditionalSlides : 1,

    });

    /**
     * [oHj_picList description] 环境展示
     * @type {[type]}
     */
    var oHj_picList = $('.hj-picList>ul>li');
    oHj_picList.on('mouseover', function() {
        $(this).find('div.maker').css({
            'transform': 'translate(0,0) rotate(0)',
        });
        $(this).find('div.lookdetail').css({
            'transform': 'translate(0,0) rotate(0)',
        });
    })
    oHj_picList.on('mouseleave', function() {

        $(this).find('div.maker').css({
            'transform': 'translate(-100%,0) rotate(-360deg)',
        });
        $(this).find('div.lookdetail').css({
            'transform': 'translate(-100%,0) rotate(-360deg)',
        });
    })

});

function checkScroll(obj) {
    var oH = obj.offset().top + (obj.outerHeight(true) / 2);

    var wH = $(window).height();
    var scroTop = $(document).scrollTop();
    return (oH < wH + scroTop) ? true : false;
}
// 数字滚动
;
(function($) {
    $.fn.numberRock = function(options) {
        var defaults = {
            speed: 24,
            count: 100
        };
        var opts = $.extend({}, defaults, options);

        var div_by = 100,
            count = opts["count"],
            speed = Math.floor(count / div_by),
            sum = 0,
            $display = this,
            run_count = 1,
            int_speed = opts["speed"];
        var int = setInterval(function() {
            if (run_count <= div_by && speed != 0) {
                $display.text(sum = speed * run_count);
                run_count++;
            } else if (sum < count) {
                $display.text(++sum);
            } else {
                clearInterval(int);
            }
        }, int_speed);
    }

})(jQuery);
