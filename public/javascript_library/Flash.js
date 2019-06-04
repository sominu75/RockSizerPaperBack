function embed_flash(flash_dir, _width, _height, id, name, wmode){
	if(navigator.appName=="Microsoft Internet Explorer"){
		document.write("<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0\" width=\""+_width+"\" height=\""+_height+"\" id=\""+ id + "\" align=\"middle\" name=\""+ name + "\">");
		if(wmode)	document.write("<param name=\"wmode\" value=\"transparent\">");
		document.write("<param name=\"allowScriptAccess\" value=\"always\" />");
		document.write("<param name=\"movie\" value=\""+flash_dir+"\" />\n<param name=\"quality\" value=\"high\" />");
		document.write("<param name=\"allowFullScreen\" value=\"true\" />");
		//document.write("<param name=\"bgcolor\" value=\"#ffffff\" />");
		document.write("<embed src=\""+flash_dir+"\" allowFullScreen=\"true\" quality=\"high\" bgcolor=\"#ffffff\" width=\""+_width+"\" height=\""+_height+"\" name=\"left_menu\" align=\"middle\" allowScriptAccess=\"sameDomain\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" />");
		document.write("</object>");
	} else {
		if(wmode){
			document.write("<embed src='"+flash_dir+"' width='"+_width+"' height='"+_height+"' name='"+id+"' wmode='transparent' allowFullScreen='true' />");
		} else {
			document.write("<embed src='"+flash_dir+"' width='"+_width+"' height='"+_height+"' name='"+id+"' allowFullScreen='true' />");
		}
	}
}