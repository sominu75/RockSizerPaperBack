function Date2(){
	var day_a = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	var month_a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	var week = ["일", "월", "화", "수", "목", "금", "토"];

	this.intercalary = function(year){
		if((year%4 == 0 && year%100 != 0) || year%400 == 0){
			return true;
		} else {
			return false;
		}
	}
	this.getDay = function(year, month, day){
		var day_array = new Array();
		day_array = day_a.slice();
		var num = 0;
		if(this.intercalary(year)){
			day_array[1]++;

			if(month > 1){
				for(i = 0; i < month-1; i++){
					num += 	day_array[i];
				}
				num = (num + day)%7;
			} else {
				num = day%7;
			}
			if(month == 2){
				return [day_array[month - 1], week[num]];
			} else {
				return [day_array[month - 1], week[num]];
			}
		} else {
			if(month > 1){
				for(i = 0; i < month-1; i++){
					num += day_array[i];
				}
				num = (num + day)%7;
			} else {
				num = day%7;
			}
			return [day_array[month - 1], week[num]];
		}
	}
	this.getStringDay = function(day){
		var d = new Date();
		return d.getFullYear(day) + "년 " + (d.getMonth(day)+1) + "월 " + d.getDate(day) + "일";
	}
	this.changeNumber = function(sec, side, num){
            if(num == undefined)num = 2;
            if(side == undefined)side = ":";
            sec = parseInt(sec);
            var s = parseInt(sec/60);
            
            var str_sec = parseInt(sec%60);
            if(str_sec < 10){
                str_sec = "0" + str_sec;
            } else {
                str_sec = "" + str_sec;
            }
            var str_s = parseInt(s%60);
            if(str_s < 10){
                str_s = "0" + str_s + side;
            } else {
                str_s = str_s + side;
            }
            var time = str_s + str_sec;
            if(num >= 3){
                var ho = parseInt(sec/60);
                var str_ho = parseInt(ho%60);
                if(str_ho < 10){
                    str_ho = "0" + str_ho + side;
                } else {
                    str_ho = str_ho + side;
                }
                time = str_ho + time;
            }
            return time;
	}
}