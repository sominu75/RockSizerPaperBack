// JavaScript Document
function Math2(){
	this.random = function(ran){
		return parseInt(Math.random()*(ran));
	}
	this.ran = function(count, re_count){
		return Number(count) + this.random(re_count);
	}
	this.even = function(num){
		if(num == undefined){
			return "undefined";
		} else if(typeof(num) != "number"){
			return "매가 변수 타입은 숫자만 가능 합니다.현재입력된 data는 " + typeof(num) + "입니다.";
		} else {
			var i = num%2;
			if(i < 0){
				i = -1 * i;
			}
			switch(i){
				case 0: 
					return "짝";
				break;
				case 1: 
					return "홀";
				break;
			}
		}
	}
	this.won = function(num, str, point){
		var ma = false;
		var i = "";
		var n = 0;
		var won_v = "";
		if(point == undefined)point = ",";

		if(num == undefined || num == "")num = 0;
		if(typeof(num) == "string"){
			num = 1 * num;
		}
		if(num < 0){
			ma = true;
			num = -1 * num;
		}
		num = num.toString();

		n = num.length;
		while(n > 3){
		i=	num.substring(n, n-3);
		n = n-3;
			won_v = point + i + won_v;
		}
		i=	num.substring(n, n-3);
		won_v = i + won_v;
		if(ma)won_v = "-" + won_v;
		if(str != undefined){
			return won_v + str;
		} else {
			return won_v;
		}
	}
        this.r_uint = function(num){
            var a_array = [];
            var b_array = [];
            var r = 0;
            for(var i = 0; i < num; i++){
                a_array.push(i);
            }
            b_array = this.r_array(a_array);
            return b_array;
        }
        this.r_array = function(a_array){
            var b_array = [];
            var r = 0;
            var len = a_array.length;
            for(var i = 0; i < len; i++){
                r = this.random(a_array.length);
                b_array.push(a_array[r]);
                a_array.splice(r, 1);
            }
            return b_array;
        }
}
