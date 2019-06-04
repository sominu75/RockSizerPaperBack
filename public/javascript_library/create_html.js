function Div_class(){
	this.move_visible = function(e, id, str){
		var ele = document.createElement("DIV");
		var body = document.body;
		var div = body.appendChild(ele);
		//div = body.insertBefore(ele, body.childNodes[0]);
		div.setAttribute("id", id);
		div.style.position = "absolute";
		if(navigator.appName=="Microsoft Internet Explorer"){
			x = event.clientX + document.body.scrollLeft + 10;
			y = event.clientY + document.body.scrollTop + 20;
			div.style.posLeft = x;
			div.style.posTop = y;
		} else {
			x = e.pageX + 10;
			y = e.pageY + 20;
			div.style.left = x;
			div.style.top = y;
		}
		div.innerHTML = str;
		div.style.visibility = "visible";
		div.floatEnabled = true;
		div.boundEnabled = false;
		return div;
	}
	this.div_hidden = function(div){
		var body = document.body;
		div.style.display='none';
		body.removeChild(div);
	}
	this.static_div = function(id, str, x, y){
		var ele = document.createElement("DIV");
		var body = document.body;
		var div = body.appendChild(ele);
		div.setAttribute("id", id);
		div.style.position = "absolute";
		div.innerHTML = str;
		div.style.visibility = "visible";
		div.floatEnabled = true;
		div.boundEnabled = false;
		div.style.left = x;
		div.style.top = y;
		return div;
	}
	this.move_move = function(e, div){
		if(navigator.appName=="Microsoft Internet Explorer"){
			x = event.clientX + document.body.scrollLeft + 10;
			y = event.clientY + document.body.scrollTop + 20;
			div.style.posLeft = x;
			div.style.posTop = y;
		} else {
			x = e.pageX + 10;
			y = e.pageY + 20;
			div.style.left = x;
			div.style.top = y;
		}
	}
}
function Form_class(form_str){
	var id = form_str;
	this.select_disabled = function(str, boo){
		var oj = document[id];
		oj[str].disabled = boo;
	}
	this.select_selected = function(str, num){
		var oj = document[id];
		oj[str].selectedIndex = (num - 1);
	}
}