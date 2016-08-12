app.directive('iCalendar',['$compile',function($compile){
	return {
		resitrict: "EA",
		replace: true,
		template: calendarTempl,
		scope: {
			calendar: "="
		},
		link: function(scope,iElem,iAttrs){
			let currentDate = new Date();
			scope.year = currentDate.getFullYear();//哪一年
			scope.month = currentDate.getMonth()+1;;//哪一月
			scope.day = currentDate.getDate();//哪一天
			scope.isDay = null;//一个月是几天
			scope.monthDay = [];//遍历一个月
			scope.allDay = [];
			//初始化日历
			for(let i=0, len= 42;i<42;i++){
				scope.allDay.push("");
			}
			//判断闰年
			scope.isLeapYear = function(year){
				return year%4 == 0 && (year%100 != 0 || year%400 == 0);
			};
			//判断每月天数，并返回天数
			scope.getMonth = function(month){
				if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
					return 31;
				}else if(month == 2){
					if(scope.isLeapYear(scope.year)){
						return 29;
					}else{
						return 28;
					}
				}else if(month == 4 || month == 6 || month == 9 || month == 11){
					return 30;
				}else{
					alert("不是月份");
				}
				
			};
			
			//计算某一天是星期几 return 星期的代号（0为周日....）
			scope.weekDay = function(year,month,day){
				//把年拆成一半（c和y）世纪和后两位(转换成string，转换成数组，截取两位，转换成string，再转成数字！注意一定要转成数字，否则后面计算会按照字符串相加)
				let c = parseInt(year.toString().split("").splice(0,2).join(""));
				let y = parseInt(year.toString().split("").splice(2).join(""));
				let m = parseInt(month);
				let d = parseInt(day);
				//判断是不是1月和2月
				if(month == 1 || month == 2){
					m += 12;
					y -= 1;
				}
				//取整parseInt()  ,计算星期
				let week = (y + parseInt(y/4) + parseInt(c/4) - (2*c) + parseInt((26*(m+1))/10) + parseInt(d) - 1) % 7;
				//判断是不是负数
				if(week < 0){
					week = (parseInt(week)+7)%7;
				}				//星期日为0 依次类推
				return week;
			}
			//每个月的日期样子
			/**
			 * @param  {[type]}
			 * @param  {[type]}
			 * @return {[type]}
			 */
			scope.calenderFn = function(year,month,day){
				for(let i=0, len= 42;i<42;i++){
					scope.allDay[i] = "";
				}
				//获取该月第一天是星期几
				let w = scope.weekDay(year,month,1);//(0-6)
				let k = 1;
				console.log(scope.getMonth(month),"scope.getMonth(month)");
				for(let i = 1,len = scope.getMonth(month); i<=len ; i++){
					scope.allDay[i+w-1] = k;
					k++;
				}
			}
			//上一个月日历
			scope.beforeMonth = function(year,month){
				if(month == 1){
					scope.year = year-1;
					scope.month = 12;
					scope.calenderFn(scope.year,scope.month);
				}else{
					scope.month = month-1;
					scope.calenderFn(scope.year,scope.month);
				}
			}
			//下一个月日历
			scope.afterMonth = function(year,month){
				if(month == 12){
					scope.year = year+1;
					scope.month = 1;
					scope.calenderFn(scope.year,scope.month);
				}else{
					scope.month = month+1;
					scope.calenderFn(scope.year,scope.month);
				}
			}

			
			//初始化当前月
			scope.calenderFn(scope.year, scope.month, scope.day);
		}
	}
}])
// //循环输出一个月的天数
			// scope.oneMonth = function(isDay){
			// 	scope.monthDay = [];
			// 	for(let i = 1,len = scope.isDay; i<=len ; i++){
			// 		scope.monthDay.push(i);
			// 	}
			// };
// switch(month){
				// 	case month>10:console.log("我是1"); break;
				// 	case month<9:alert("我是2");break;
				// 	default:alert("default")
					// case 1:alert(1)
					// case 3:
					// case 5:
					// case 7:
					// case 8:
					// case 10:
					// case 12: 
					// 	return scope.isDay = 31;
					// 	console.log(scope.month,"月 ",scope.isDay," 天");
					// 	break;
					// case 4:
					// case 6:
					// case 9:
					// case 11:
					// 	scope.isDay = 30;
					// 	console.log(scope.month,"月 ",scope.isDay," 天");
					// 	break;
					// case 2:
					// 	if(scope.isLeapYear(scope.isYear)){
					// 		scope.isDay = 29;
					// 		console.log(scope.month,"月 ",scope.isDay," 天");
					// 	}else{
					// 		scope.isDay = 28;
					// 		console.log(scope.month,"月 ",scope.isDay," 天");
					// 	}
					// 	break;
					// default:
					// 	alert("不是月份");
				// }