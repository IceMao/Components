###progress 文档说明 ###
######1. 引入插件######
    $scope.progress = {
		total: 0,//总值
		had: 0,//已完成数值
		//样式接口
		option:{
	    }
	}
######2. 接口######
    $scope.progress = {
		//样式调整
		option:{
	        bgColor:"#1ABC9C",//进度条颜色
	        progressWidth: "260",//整体宽度
	        stripHeight: "12"//整体高度
	    }
	}