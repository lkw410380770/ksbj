//百度地图API功能
function loadJScript() {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "http://api.map.baidu.com/api?v=2.0&ak=Nj6F7YxqAEUhrXEsujW3fKM482MRQbc7&callback=init";
	document.body.appendChild(script);
}

function init() {
	var map = new BMap.Map("allmap"); // 创建Map实例
	var point = new BMap.Point(106.697331, 26.575015); // 创建点坐标
	map.centerAndZoom(point, 15);
	map.enableScrollWheelZoom();
	var marker = new BMap.Marker(point); // 创建标注
	map.addOverlay(marker); // 将标注添加到地图中
	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画                 //启用滚轮放大缩小
}
window.onload = loadJScript; //异步加载地图
//表单提交
$(".subBtn").click(function(){
	if(!$("#name").val()){
		$(".name label").html("请输入你的姓名");
		$(".name label").css("color","red");
	}else if(!$("#tel").val()){
		$(".name label").html("姓名");
		$(".name label").css("color","black");
		$(".tel label").html("请输入你的电话");
		$(".tel label").css("color","red");
	}else if(!(/^1[34578]\d{9}$/.test($("#tel").val()))){
		$(".tel label").html("请输入正确的电话号码");
		$(".tel label").css("color","red");
	}else if(!$("#email").val()){
		$(".tel label").html("电话");
		$(".tel label").css("color","black");
		$(".email label").html("请输入你的邮箱");
		$(".email label").css("color","red");
	}else if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($("#email").val()))){
		$(".email label").html("请输入正确的邮箱");
		$(".email label").css("color","red");
	}else if(!$("#text").val()){
		$(".email label").html("邮箱");
		$(".email label").css("color","black");
		$(".yl label").html("请输入你的留言");
		$(".ly label").css("color","red");
	}else{
		$(".yl label").html("给我们留言");
		$(".ly label").css("color","black");
	}
})



