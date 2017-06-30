$(function(){
	// 导航
	var navLi = $('.n-list>ul>li>a');
	navLi.mouseover(function(){
		navLi.removeClass('active');
		$(this).addClass('active');
	})
	/**
	 * [classLi_list description] 班级介绍 鼠标移入与滑屏
	 * @type {[type]}
	 */
	var classLi_list = $('.classInfo').find('li');
	classLi_list.on('mouseover',function(){
		$(this).css({
			'box-shadow':'4px 2px 15px 5px rgba(0,0,0,.1)'
		})
	});
	classLi_list.on('mouseleave',function(){
		$(this).css({
			'box-shadow':'none'
		})
	});

	var mySwiper = new Swiper('.classInfo', {
		autoplay: 5000,//可选选项，自动滑动
		pagination:'.iconList',
       	paginationClickable :true,
       	loop:true,
       	autoplayDisableOnInteraction : false,
       	prevButton:'.prev',
		nextButton:'.next',
	})
	var banner = new Swiper('.swiper-container', {
		autoplay: 5000,//可选选项，自动滑动
		pagination: '.swiper-pagination',
	})
})
