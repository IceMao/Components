// var app = angular.module('myApp', []);
app.controller('myCtrl',['$scope', function($scope) {
	$scope.progress = {
		total: 0,
		complete: 0,
		//样式调整
		option:{
	        bgColor:"#1ABC9C",//进度条颜色
	        progressWidth: "260",//整体宽度
	        stripHeight: "12"//整体高度
	    }
	}
	// $scope.calendar = {
	// 	year:2000
	// }
}]);