app.directive('vSwitch', ['$compile', function($compile) {
    return {
        resitrict: "EA",
        replace: true,
        scope: {
            switch: "=",
            value: '='
        },
        template: switchTempl,
        link: function(scope, iElem, iAttrs) {
            console.log(scope.switch)
            if (!scope.switch.content && !(scope.switch.content instanceof Array)) {
                scope.switch.content = ["ON", "OFF"]                
            }
            if (!scope.switch.values && !(scope.switch.values instanceof Array)) {
                scope.switch.values = [true, false]
            }
            scope.before = scope.switch.content[0] || "ON"
            
            scope.after = scope.switch.content[1] || "OFF" 
           
            var switchBtn = scope.value || true;

            if (scope.value == scope.switch.values[0]) {
                scope.boxAction = {
                    'left': '0px',
                }
            } else {
                scope.boxAction = {
                    'left': '-22px',
                    'background': '#ddd',
                }
            }
            scope.clickBtn = function() {               
                if (switchBtn == true || switchBtn == scope.switch.values[0]) {
                    switchBtn = scope.switch.values[1] || false;
                    scope.value = switchBtn
                    scope.boxAction = {
                        'left': '-22px',
                        'background': '#ddd',
                    }
                } else {
                    switchBtn = scope.switch.values[0] || true;
                    scope.value = switchBtn
                    scope.boxAction = {
                        'left': '0px',
                    }
                }
            }
        }
    }
}]);
