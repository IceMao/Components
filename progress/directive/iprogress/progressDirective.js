app.directive('vProgress', ['$compile', function($compile) {
    return {
        resitrict: "EA",
        replace: true,
        template: progressTempl,
        scope: {
            progress: "="
        },
        link: function(scope, iElem, iAttrs) {
            scope.option = {
                bgColor: scope.progress.option.bgColor,
                progressWidth: scope.progress.option.progressWidth,
                stripHeight: scope.progress.option.stripHeight
            };
            // scope.total=scope.progress.total;
            // scope.had=scope.progress.had;
            
            scope.$watch('progress.total + progress.had', function(newVal,oldVal){
                console.log(scope.progress.had);
                console.log(isNaN(scope.progress.had));
                scope.hadWidth = scope.progress.had/scope.progress.total*100;
                console.log("scope.hadWidth: ",scope.hadWidth);
                if(isNaN(scope.hadWidth) || Math.abs(scope.hadWidth) == Infinity){
                    scope.hadWidth =  0;
                }else if(scope.hadWidth>=100){
                    scope.hadWidth = 100;
                }
                if(isNaN(scope.progress.had)){
                    scope.progress.had = "不是数字，请检查。"
                }
            })
        }

    };
}]);
