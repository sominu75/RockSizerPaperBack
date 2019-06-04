var SpriteTool = function(){
    this.setReg = function(mc, regx, regy, x, y, sx, sy){
        mc.regX = mc.getTransformedBounds().width*regx;
        mc.regY = mc.getTransformedBounds().height*regy;
        if(x != undefined)mc.x = x;
        if(y != undefined)mc.y = y;
        if(sx != undefined)mc.scaleX = sx;
        if(sy != undefined)mc.scaleY = sy;
    }
    this.getCurrentFrame = function(_mc){
        return Math.ceil(_mc.currentAnimationFrame);
    }
    this.getTotalFrame = function(_mc){
        return _mc._animation.frames.length;
    }
    this.getFrameValuse = function(_mc, _index){
        return _mc._animation.frames[_index];
    }
    this.makeMc = function(_source, _ani_name, _center, x, y){
        var _mc = new createjs.Sprite(_source, _ani_name);
        if(_center){
            _mc.regX = _mc.getTransformedBounds().width / 2;
            _mc.regY = _mc.getTransformedBounds().height / 2;
        }
        _mc.x = x || 0;
        _mc.y = y || 0;
        return _mc;
    }
}