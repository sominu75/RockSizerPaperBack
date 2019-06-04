function Open_class(){
	this.window_image = function(url, dir, image_width, image_height){
		var image_win = window.open(url+"?image_width="+image_width+"&image_height="+image_height+"&dir="+dir, "image", "menubar=no, width="+(Number(image_width))+", height="+(Number(image_height)));
		return image_win;
	}
}