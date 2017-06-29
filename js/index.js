$(function(){
	/**
	 * [classLi_list description] 班级介绍 鼠标移入与滑屏
	 * @type {[type]}
	 */
	var classLi_list = $('.classInfo').find('li');
	classLi_list.on('mouseover',function(){
		$(this).css({
			'box-shadow':'4px 4px 5px 5px rgba(0,0,0,.3)'
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
	})
})
