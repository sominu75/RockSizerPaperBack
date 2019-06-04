function form_fu(array1, array2, str){
	var re = new RegExp("^([ \s]+)$", "gi");
	for(var i=0;i<array1.length;i++){
		if(re.test($("#" + array1[i]).val()) || $("#" + array1[i]).val() == ""){
			$("#" + array1[i]).val("");
			alert(array2[i] + str);
			$("#" + array1[i]).focus();
			return false;
		}
	}
	return true;
}
//숫자만 가능
function number_check(array1, array2, str){
	var re = new RegExp("[^0-9]+", "gi");
	var str_var = "";
	for(var i=0;i<array1.length;i++){
		str_var = $("#" + array1[i]).val();
		if(re.test(str_var)){
			$("#" + array1[i]).val("");
			alert(array2[i] + str);
			$("#" + array1[i]).focus();
			return false;
		}
	}
	return true;
}
function number_change(str){
	var re = new RegExp("[^0-9]+", "gi");
	return str.replace(re, "");
}
function en_check(oj, array1, array2){
	var re = new RegExp("[^a-z_]+", "g");
	var str_var = "";
	for(var i=0;i<array1.length;i++){
		str_var = oj.form[array1[i]].value;
		if(re.test(str_var)){
			oj.form[array1[i]].value = "";
			alert(array2[i]);
			oj.form[array1[i]].focus();
			return false;
		} else if(str_var == ""){
			oj.form[array1[i]].value = "";
			alert("게시판 이름을 적어 주세요.");
			oj.form[array1[i]].focus();
			return false;
		} else if(str_var.length < 3){
			oj.form[array1[i]].value = "";
			alert("게시판 이름은 3자 이상입니다.");
			oj.form[array1[i]].focus();
			return false;
		}
	}
	return true;
}
function email_check(str){
	var re = new RegExp("^[-/\_a-zA-Z0-9.]+(@[-/\_a-zA-Z0-9]+)((.[a-z]{2,3})(.[a-z]{2,3})?)$", "gi");
	if(re.test(str)){
		return true;
	}
	return false;
}
function void_check(str){
    var regExp = /\s/g;
    var result = str.replace(regExp,'');
    if(result != ""){
        return false;
    } else {
        return true;
    }
}
function void_return(str){
    var regExp = /\s/g;
    var result = str.replace(regExp,'');
    return result;
}
