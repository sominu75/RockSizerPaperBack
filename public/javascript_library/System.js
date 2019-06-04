function MySystem(){
    this.checkMobileDevice = function(){
        var mobileKeyWords = new Array('Android', 'iPhone', 'iPod', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson');
        for (var info in mobileKeyWords) {
            if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
                // console.log("모바일(true)인지 pc(false)인지 확인 sys.checkMobileDevice(): " + "true");
                return true;
            }
        }
        if(window.orientation == undefined){
          return false;
        }
        // console.log("모바일(true)인지 pc(false)인지 확인 sys.checkMobileDevice(): " + "false");
        return false;
    }
    this.GetIEVersion = function() {
        var sAgent = window.navigator.userAgent;
        var Idx = sAgent.indexOf("MSIE");
        // If IE, return version number.
        if (Idx > 0) {
            return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

            // If IE 11 then look for Updated user agent string.
        } else if (!!navigator.userAgent.match(/Trident\/7\./)) {
                return 11;
        } else{
                return 0; //It
        }
    }
}
