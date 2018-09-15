// Garden Gnome Software - Skin
// Pano2VR 5.2.2/15983
// Filename: controller_new_radar2.ggsk
// Generated mar. sep. 11 01:59:35 2018

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/left__o.png';
		preLoadImg.src=basePath + 'images/right__o.png';
		preLoadImg.src=basePath + 'images/up__o.png';
		preLoadImg.src=basePath + 'images/down__o.png';
		preLoadImg.src=basePath + 'images/zoom_in__o.png';
		preLoadImg.src=basePath + 'images/zoom_out__o.png';
		preLoadImg.src=basePath + 'images/auto_rotate__o.png';
		preLoadImg.src=basePath + 'images/fullscreen__o.png';
		preLoadImg.src=basePath + 'images/button_1__o.png';
		preLoadImg.src=basePath + 'images/button_1__a.png';
		preLoadImg.src=basePath + 'images/button_2__o.png';
		preLoadImg.src=basePath + 'images/button_2__a.png';
		preLoadImg.src=basePath + 'images/button_3__o.png';
		preLoadImg.src=basePath + 'images/button_3__a.png';
		preLoadImg.src=basePath + 'images/button_4__o.png';
		preLoadImg.src=basePath + 'images/button_4__a.png';
		preLoadImg.src=basePath + 'images/button_5__o.png';
		preLoadImg.src=basePath + 'images/button_5__a.png';
		preLoadImg.src=basePath + 'images/button_6__o.png';
		preLoadImg.src=basePath + 'images/button_6__a.png';
		preLoadImg.src=basePath + 'images/button_7__o.png';
		preLoadImg.src=basePath + 'images/button_7__a.png';
		preLoadImg.src=basePath + 'images/button_8__o.png';
		preLoadImg.src=basePath + 'images/button_8__a.png';
		preLoadImg.src=basePath + 'images/button_9__o.png';
		preLoadImg.src=basePath + 'images/button_9__a.png';
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._loading_image=document.createElement('div');
		this._loading_image__img=document.createElement('img');
		this._loading_image__img.className='ggskin ggskin_image';
		this._loading_image__img.setAttribute('src',basePath + 'images/loading_image.png');
		this._loading_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_image__img.className='ggskin ggskin_image';
		this._loading_image__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._loading_image__img);
		this._loading_image.appendChild(this._loading_image__img);
		this._loading_image.ggId="loading image";
		this._loading_image.ggLeft=-112;
		this._loading_image.ggTop=-32;
		this._loading_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_image.ggVisible=true;
		this._loading_image.className='ggskin ggskin_image ';
		this._loading_image.ggType='image';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -112px;';
		hs+='position : absolute;';
		hs+='top : -32px;';
		hs+='visibility : inherit;';
		hs+='width : 224px;';
		hs+='pointer-events:auto;';
		this._loading_image.setAttribute('style',hs);
		this._loading_image.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
			return false;
		}
		me._loading_image.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._loading_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._loading_text=document.createElement('div');
		this._loading_text__text=document.createElement('div');
		this._loading_text.className='ggskin ggskin_textdiv';
		this._loading_text.ggTextDiv=this._loading_text__text;
		this._loading_text.ggId="loading text";
		this._loading_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_text.ggVisible=true;
		this._loading_text.className='ggskin ggskin_text ';
		this._loading_text.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 14px;';
		hs+='visibility : inherit;';
		hs+='width : 198px;';
		hs+='pointer-events:auto;';
		this._loading_text.setAttribute('style',hs);
		this._loading_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loading_text__text.setAttribute('style',hs);
		this._loading_text.ggUpdateText=function() {
			var hs="<b>Loading... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loading_text.ggUpdateText();
		this._loading_text.appendChild(this._loading_text__text);
		me._loading_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_text.ggUpdatePosition=function (useTransition) {
		}
		this._loading_image.appendChild(this._loading_text);
		this._loading_bar=document.createElement('div');
		this._loading_bar.ggId="loading bar";
		this._loading_bar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_bar.ggVisible=true;
		this._loading_bar.className='ggskin ggskin_rectangle ';
		this._loading_bar.ggType='rectangle';
		hs ='';
		hs+='background : #4f4f4f;';
		hs+='border : 2px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 10px;';
		hs+='left : 11px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 198px;';
		hs+='pointer-events:auto;';
		this._loading_bar.setAttribute('style',hs);
		this._loading_bar.style[domTransform + 'Origin']='0% 50%';
		me._loading_bar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_bar.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_bar.ggUpdatePosition=function (useTransition) {
		}
		this._loading_image.appendChild(this._loading_bar);
		this._loading_close=document.createElement('div');
		this._loading_close__img=document.createElement('img');
		this._loading_close__img.className='ggskin ggskin_image';
		this._loading_close__img.setAttribute('src',basePath + 'images/loading_close.png');
		this._loading_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_close__img.className='ggskin ggskin_image';
		this._loading_close__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._loading_close__img);
		this._loading_close.appendChild(this._loading_close__img);
		this._loading_close.ggId="loading close";
		this._loading_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_close.ggVisible=true;
		this._loading_close.className='ggskin ggskin_image ';
		this._loading_close.ggType='image';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		this._loading_close.setAttribute('style',hs);
		this._loading_close.style[domTransform + 'Origin']='50% 50%';
		me._loading_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_close.onclick=function (e) {
			me._loading_image.style[domTransition]='none';
			me._loading_image.style.visibility='hidden';
			me._loading_image.ggVisible=false;
		}
		this._loading_close.ggUpdatePosition=function (useTransition) {
		}
		this._loading_image.appendChild(this._loading_close);
		this.divSkin.appendChild(this._loading_image);
		this._toolbar=document.createElement('div');
		this._toolbar.ggId="toolbar";
		this._toolbar.ggLeft=-138;
		this._toolbar.ggTop=-38;
		this._toolbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._toolbar.ggVisible=true;
		this._toolbar.className='ggskin ggskin_container ';
		this._toolbar.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -138px;';
		hs+='position : absolute;';
		hs+='top : -38px;';
		hs+='visibility : inherit;';
		hs+='width : 277px;';
		hs+='pointer-events:none;';
		this._toolbar.setAttribute('style',hs);
		this._toolbar.style[domTransform + 'Origin']='50% 50%';
		me._toolbar.ggIsActive=function() {
			return false;
		}
		me._toolbar.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._toolbar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._left=document.createElement('div');
		this._left__img=document.createElement('img');
		this._left__img.className='ggskin ggskin_button';
		this._left__img.setAttribute('src',basePath + 'images/left.png');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._left__img.className='ggskin ggskin_button';
		this._left__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._left__img);
		this._left.appendChild(this._left__img);
		this._left.ggId="left";
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		this._left.className='ggskin ggskin_button ';
		this._left.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._left.setAttribute('style',hs);
		this._left.style[domTransform + 'Origin']='50% 50%';
		me._left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._left.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._left.onmouseover=function (e) {
			me._left__img.src=basePath + 'images/left__o.png';
		}
		this._left.onmouseout=function (e) {
			me._left__img.src=basePath + 'images/left.png';
			me.elementMouseDown['left']=false;
		}
		this._left.onmousedown=function (e) {
			me.elementMouseDown['left']=true;
		}
		this._left.onmouseup=function (e) {
			me.elementMouseDown['left']=false;
		}
		this._left.ontouchend=function (e) {
			me.elementMouseDown['left']=false;
		}
		this._left.ggUpdatePosition=function (useTransition) {
		}
		this._toolbar.appendChild(this._left);
		this._right=document.createElement('div');
		this._right__img=document.createElement('img');
		this._right__img.className='ggskin ggskin_button';
		this._right__img.setAttribute('src',basePath + 'images/right.png');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._right__img.className='ggskin ggskin_button';
		this._right__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._right__img);
		this._right.appendChild(this._right__img);
		this._right.ggId="right";
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right.ggVisible=true;
		this._right.className='ggskin ggskin_button ';
		this._right.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._right.setAttribute('style',hs);
		this._right.style[domTransform + 'Origin']='50% 50%';
		me._right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._right.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._right.onmouseover=function (e) {
			me._right__img.src=basePath + 'images/right__o.png';
		}
		this._right.onmouseout=function (e) {
			me._right__img.src=basePath + 'images/right.png';
			me.elementMouseDown['right']=false;
		}
		this._right.onmousedown=function (e) {
			me.elementMouseDown['right']=true;
		}
		this._right.onmouseup=function (e) {
			me.elementMouseDown['right']=false;
		}
		this._right.ontouchend=function (e) {
			me.elementMouseDown['right']=false;
		}
		this._right.ggUpdatePosition=function (useTransition) {
		}
		this._toolbar.appendChild(this._right);
		this._up=document.createElement('div');
		this._up__img=document.createElement('img');
		this._up__img.className='ggskin ggskin_button';
		this._up__img.setAttribute('src',basePath + 'images/up.png');
		this._up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._up__img.className='ggskin ggskin_button';
		this._up__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._up__img);
		this._up.appendChild(this._up__img);
		this._up.ggId="up";
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		this._up.className='ggskin ggskin_button ';
		this._up.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._up.setAttribute('style',hs);
		this._up.style[domTransform + 'Origin']='50% 50%';
		me._up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._up.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._up.onmouseover=function (e) {
			me._up__img.src=basePath + 'images/up__o.png';
		}
		this._up.onmouseout=function (e) {
			me._up__img.src=basePath + 'images/up.png';
			me.elementMouseDown['up']=false;
		}
		this._up.onmousedown=function (e) {
			me.elementMouseDown['up']=true;
		}
		this._up.onmouseup=function (e) {
			me.elementMouseDown['up']=false;
		}
		this._up.ontouchend=function (e) {
			me.elementMouseDown['up']=false;
		}
		this._up.ggUpdatePosition=function (useTransition) {
		}
		this._toolbar.appendChild(this._up);
		this._down=document.createElement('div');
		this._down__img=document.createElement('img');
		this._down__img.className='ggskin ggskin_button';
		this._down__img.setAttribute('src',basePath + 'images/down.png');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._down__img.className='ggskin ggskin_button';
		this._down__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._down__img);
		this._down.appendChild(this._down__img);
		this._down.ggId="down";
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		this._down.className='ggskin ggskin_button ';
		this._down.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 105px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._down.setAttribute('style',hs);
		this._down.style[domTransform + 'Origin']='50% 50%';
		me._down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._down.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._down.onmouseover=function (e) {
			me._down__img.src=basePath + 'images/down__o.png';
		}
		this._down.onmouseout=function (e) {
			me._down__img.src=basePath + 'images/down.png';
			me.elementMouseDown['down']=false;
		}
		this._down.onmousedown=function (e) {
			me.elementMouseDown['down']=true;
		}
		this._down.onmouseup=function (e) {
			me.elementMouseDown['down']=false;
		}
		this._down.ontouchend=function (e) {
			me.elementMouseDown['down']=false;
		}
		this._down.ggUpdatePosition=function (useTransition) {
		}
		this._toolbar.appendChild(this._down);
		this._zoom_in=document.createElement('div');
		this._zoom_in__img=document.createElement('img');
		this._zoom_in__img.className='ggskin ggskin_button';
		this._zoom_in__img.setAttribute('src',basePath + 'images/zoom_in.png');
		this._zoom_in__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoom_in__img.className='ggskin ggskin_button';
		this._zoom_in__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._zoom_in__img);
		this._zoom_in.appendChild(this._zoom_in__img);
		this._zoom_in.ggId="zoom in";
		this._zoom_in.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoom_in.ggVisible=true;
		this._zoom_in.className='ggskin ggskin_button ';
		this._zoom_in.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 140px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._zoom_in.setAttribute('style',hs);
		this._zoom_in.style[domTransform + 'Origin']='50% 50%';
		me._zoom_in.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoom_in.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoom_in.onmouseover=function (e) {
			me._zoom_in__img.src=basePath + 'images/zoom_in__o.png';
		}
		this._zoom_in.onmouseout=function (e) {
			me._zoom_in__img.src=basePath + 'images/zoom_in.png';
			me.elementMouseDown['zoom_in']=false;
		}
		this._zoom_in.onmousedown=function (e) {
			me.elementMouseDown['zoom_in']=true;
		}
		this._zoom_in.onmouseup=function (e) {
			me.elementMouseDown['zoom_in']=false;
		}
		this._zoom_in.ontouchend=function (e) {
			me.elementMouseDown['zoom_in']=false;
		}
		this._zoom_in.ggUpdatePosition=function (useTransition) {
		}
		this._toolbar.appendChild(this._zoom_in);
		this._zoom_out=document.createElement('div');
		this._zoom_out__img=document.createElement('img');
		this._zoom_out__img.className='ggskin ggskin_button';
		this._zoom_out__img.setAttribute('src',basePath + 'images/zoom_out.png');
		this._zoom_out__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoom_out__img.className='ggskin ggskin_button';
		this._zoom_out__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._zoom_out__img);
		this._zoom_out.appendChild(this._zoom_out__img);
		this._zoom_out.ggId="zoom out";
		this._zoom_out.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoom_out.ggVisible=true;
		this._zoom_out.className='ggskin ggskin_button ';
		this._zoom_out.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 175px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._zoom_out.setAttribute('style',hs);
		this._zoom_out.style[domTransform + 'Origin']='50% 50%';
		me._zoom_out.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoom_out.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoom_out.onmouseover=function (e) {
			me._zoom_out__img.src=basePath + 'images/zoom_out__o.png';
		}
		this._zoom_out.onmouseout=function (e) {
			me._zoom_out__img.src=basePath + 'images/zoom_out.png';
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.onmousedown=function (e) {
			me.elementMouseDown['zoom_out']=true;
		}
		this._zoom_out.onmouseup=function (e) {
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.ontouchend=function (e) {
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.ggUpdatePosition=function (useTransition) {
		}
		this._toolbar.appendChild(this._zoom_out);
		this._auto_rotate=document.createElement('div');
		this._auto_rotate__img=document.createElement('img');
		this._auto_rotate__img.className='ggskin ggskin_button';
		this._auto_rotate__img.setAttribute('src',basePath + 'images/auto_rotate.png');
		this._auto_rotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._auto_rotate__img.className='ggskin ggskin_button';
		this._auto_rotate__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._auto_rotate__img);
		this._auto_rotate.appendChild(this._auto_rotate__img);
		this._auto_rotate.ggId="auto rotate";
		this._auto_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._auto_rotate.ggVisible=true;
		this._auto_rotate.className='ggskin ggskin_button ';
		this._auto_rotate.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 210px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._auto_rotate.setAttribute('style',hs);
		this._auto_rotate.style[domTransform + 'Origin']='50% 50%';
		me._auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._auto_rotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._auto_rotate.onclick=function (e) {
			me.player.toggleAutorotate();
		}
		this._auto_rotate.onmouseover=function (e) {
			me._auto_rotate__img.src=basePath + 'images/auto_rotate__o.png';
		}
		this._auto_rotate.onmouseout=function (e) {
			me._auto_rotate__img.src=basePath + 'images/auto_rotate.png';
		}
		this._auto_rotate.ggUpdatePosition=function (useTransition) {
		}
		this._toolbar.appendChild(this._auto_rotate);
		this._fullscreen=document.createElement('div');
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_button';
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.png');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fullscreen__img.className='ggskin ggskin_button';
		this._fullscreen__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._fullscreen__img);
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_button ';
		this._fullscreen.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 245px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fullscreen.onclick=function (e) {
			me.player.toggleFullscreen();
		}
		this._fullscreen.onmouseover=function (e) {
			me._fullscreen__img.src=basePath + 'images/fullscreen__o.png';
		}
		this._fullscreen.onmouseout=function (e) {
			me._fullscreen__img.src=basePath + 'images/fullscreen.png';
		}
		this._fullscreen.ggUpdatePosition=function (useTransition) {
		}
		this._toolbar.appendChild(this._fullscreen);
		this.divSkin.appendChild(this._toolbar);
		this._radar=document.createElement('div');
		this._radar__img=document.createElement('img');
		this._radar__img.className='ggskin ggskin_image';
		this._radar__img.setAttribute('src',basePath + 'images/radar.png');
		this._radar__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._radar__img.className='ggskin ggskin_image';
		this._radar__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._radar__img);
		this._radar.appendChild(this._radar__img);
		this._radar.ggId="radar";
		this._radar.ggLeft=-67;
		this._radar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._radar.ggVisible=true;
		this._radar.className='ggskin ggskin_image ';
		this._radar.ggType='image';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -67px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		this._radar.setAttribute('style',hs);
		this._radar.style[domTransform + 'Origin']='50% 50%';
		me._radar.ggIsActive=function() {
			return false;
		}
		me._radar.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._radar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._radar_beam=document.createElement('div');
		this._radar_beam__img=document.createElement('img');
		this._radar_beam__img.className='ggskin ggskin_image';
		this._radar_beam__img.setAttribute('src',basePath + 'images/radar_beam.png');
		this._radar_beam__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._radar_beam__img.className='ggskin ggskin_image';
		this._radar_beam__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._radar_beam__img);
		this._radar_beam.appendChild(this._radar_beam__img);
		this._radar_beam.ggId="radar beam";
		this._radar_beam.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._radar_beam.ggVisible=true;
		this._radar_beam.className='ggskin ggskin_image ';
		this._radar_beam.ggType='image';
		hs ='';
		hs+='height : 64px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		this._radar_beam.setAttribute('style',hs);
		this._radar_beam.style[domTransform + 'Origin']='50% 50%';
		me._radar_beam.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._radar_beam.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._radar_beam.ggUpdatePosition=function (useTransition) {
		}
		this._radar.appendChild(this._radar_beam);
		this._radar_dot=document.createElement('div');
		this._radar_dot__img=document.createElement('img');
		this._radar_dot__img.className='ggskin ggskin_image';
		this._radar_dot__img.setAttribute('src',basePath + 'images/radar_dot.png');
		this._radar_dot__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._radar_dot__img.className='ggskin ggskin_image';
		this._radar_dot__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._radar_dot__img);
		this._radar_dot.appendChild(this._radar_dot__img);
		this._radar_dot.ggId="radar dot";
		this._radar_dot.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._radar_dot.ggVisible=true;
		this._radar_dot.className='ggskin ggskin_image ';
		this._radar_dot.ggType='image';
		hs ='';
		hs+='height : 64px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		this._radar_dot.setAttribute('style',hs);
		this._radar_dot.style[domTransform + 'Origin']='50% 50%';
		me._radar_dot.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._radar_dot.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._radar_dot.ggUpdatePosition=function (useTransition) {
		}
		this._radar.appendChild(this._radar_dot);
		this.divSkin.appendChild(this._radar);
		this._rectangle_1=document.createElement('div');
		this._rectangle_1.ggId="Rectangle 1";
		this._rectangle_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_1.ggVisible=true;
		this._rectangle_1.className='ggskin ggskin_rectangle ';
		this._rectangle_1.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 156px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 281px;';
		hs+='pointer-events:auto;';
		this._rectangle_1.setAttribute('style',hs);
		this._rectangle_1.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		me._rectangle_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		this._svg_1=document.createElement('div');
		this._svg_1__img=document.createElement('img');
		this._svg_1__img.className='ggskin ggskin_svg';
		this._svg_1__img.setAttribute('src',basePath + 'images/svg_1.svg');
		this._svg_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._svg_1__img['ondragstart']=function() { return false; };
		this._svg_1.appendChild(this._svg_1__img);
		this._svg_1.ggId="Svg 1";
		this._svg_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_1.ggVisible=true;
		this._svg_1.className='ggskin ggskin_svg ';
		this._svg_1.ggType='svg';
		hs ='';
		hs+='height : 217px;';
		hs+='left : -26px;';
		hs+='position : absolute;';
		hs+='top : -31px;';
		hs+='visibility : inherit;';
		hs+='width : 335px;';
		hs+='pointer-events:auto;';
		this._svg_1.setAttribute('style',hs);
		this._svg_1.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_1.ggUpdatePosition=function (useTransition) {
		}
		this._button_1=document.createElement('div');
		this._button_1__img=document.createElement('img');
		this._button_1__img.className='ggskin ggskin_button';
		this._button_1__img.setAttribute('src',basePath + 'images/button_1.png');
		this._button_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_1__img.className='ggskin ggskin_button';
		this._button_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_1__img);
		this._button_1.appendChild(this._button_1__img);
		this._button_1.ggId="Button 1";
		this._button_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_1.ggVisible=true;
		this._button_1.className='ggskin ggskin_button ';
		this._button_1.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 229px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		this._button_1.setAttribute('style',hs);
		this._button_1.style[domTransform + 'Origin']='0% 0%';
		me._button_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_1.onclick=function (e) {
			me.player.openNext("{node7}","");
		}
		this._button_1.onmouseover=function (e) {
			me._button_1__img.src=basePath + 'images/button_1__o.png';
		}
		this._button_1.onmouseout=function (e) {
			me._button_1__img.src=basePath + 'images/button_1.png';
		}
		this._button_1.onmousedown=function (e) {
			me._button_1__img.src=basePath + 'images/button_1__a.png';
		}
		this._button_1.onmouseup=function (e) {
			me._button_1__img.src=basePath + 'images/button_1.png';
		}
		this._button_1.ggUpdatePosition=function (useTransition) {
		}
		this._svg_1.appendChild(this._button_1);
		this._button_2=document.createElement('div');
		this._button_2__img=document.createElement('img');
		this._button_2__img.className='ggskin ggskin_button';
		this._button_2__img.setAttribute('src',basePath + 'images/button_2.png');
		this._button_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_2__img.className='ggskin ggskin_button';
		this._button_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_2__img);
		this._button_2.appendChild(this._button_2__img);
		this._button_2.ggId="Button 2";
		this._button_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_2.ggVisible=true;
		this._button_2.className='ggskin ggskin_button ';
		this._button_2.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 201px;';
		hs+='position : absolute;';
		hs+='top : 27px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		this._button_2.setAttribute('style',hs);
		this._button_2.style[domTransform + 'Origin']='0% 0%';
		me._button_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_2.onclick=function (e) {
			me.player.openNext("{node2}","");
		}
		this._button_2.onmouseover=function (e) {
			me._button_2__img.src=basePath + 'images/button_2__o.png';
		}
		this._button_2.onmouseout=function (e) {
			me._button_2__img.src=basePath + 'images/button_2.png';
		}
		this._button_2.onmousedown=function (e) {
			me._button_2__img.src=basePath + 'images/button_2__a.png';
		}
		this._button_2.onmouseup=function (e) {
			me._button_2__img.src=basePath + 'images/button_2.png';
		}
		this._button_2.ggUpdatePosition=function (useTransition) {
		}
		this._svg_1.appendChild(this._button_2);
		this._button_3=document.createElement('div');
		this._button_3__img=document.createElement('img');
		this._button_3__img.className='ggskin ggskin_button';
		this._button_3__img.setAttribute('src',basePath + 'images/button_3.png');
		this._button_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_3__img.className='ggskin ggskin_button';
		this._button_3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_3__img);
		this._button_3.appendChild(this._button_3__img);
		this._button_3.ggId="Button 3";
		this._button_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_3.ggVisible=true;
		this._button_3.className='ggskin ggskin_button ';
		this._button_3.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 205px;';
		hs+='position : absolute;';
		hs+='top : 86px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		this._button_3.setAttribute('style',hs);
		this._button_3.style[domTransform + 'Origin']='0% 0%';
		me._button_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_3.onclick=function (e) {
			me.player.openNext("{node30}","");
		}
		this._button_3.onmouseover=function (e) {
			me._button_3__img.src=basePath + 'images/button_3__o.png';
		}
		this._button_3.onmouseout=function (e) {
			me._button_3__img.src=basePath + 'images/button_3.png';
		}
		this._button_3.onmousedown=function (e) {
			me._button_3__img.src=basePath + 'images/button_3__a.png';
		}
		this._button_3.onmouseup=function (e) {
			me._button_3__img.src=basePath + 'images/button_3.png';
		}
		this._button_3.ggUpdatePosition=function (useTransition) {
		}
		this._svg_1.appendChild(this._button_3);
		this._button_4=document.createElement('div');
		this._button_4__img=document.createElement('img');
		this._button_4__img.className='ggskin ggskin_button';
		this._button_4__img.setAttribute('src',basePath + 'images/button_4.png');
		this._button_4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_4__img.className='ggskin ggskin_button';
		this._button_4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_4__img);
		this._button_4.appendChild(this._button_4__img);
		this._button_4.ggId="Button 4";
		this._button_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_4.ggVisible=true;
		this._button_4.className='ggskin ggskin_button ';
		this._button_4.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 203px;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		this._button_4.setAttribute('style',hs);
		this._button_4.style[domTransform + 'Origin']='0% 0%';
		me._button_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_4.onclick=function (e) {
			me.player.openNext("{node39}","");
		}
		this._button_4.onmouseover=function (e) {
			me._button_4__img.src=basePath + 'images/button_4__o.png';
		}
		this._button_4.onmouseout=function (e) {
			me._button_4__img.src=basePath + 'images/button_4.png';
		}
		this._button_4.onmousedown=function (e) {
			me._button_4__img.src=basePath + 'images/button_4__a.png';
		}
		this._button_4.onmouseup=function (e) {
			me._button_4__img.src=basePath + 'images/button_4.png';
		}
		this._button_4.ggUpdatePosition=function (useTransition) {
		}
		this._svg_1.appendChild(this._button_4);
		this._button_5=document.createElement('div');
		this._button_5__img=document.createElement('img');
		this._button_5__img.className='ggskin ggskin_button';
		this._button_5__img.setAttribute('src',basePath + 'images/button_5.png');
		this._button_5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_5__img.className='ggskin ggskin_button';
		this._button_5__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_5__img);
		this._button_5.appendChild(this._button_5__img);
		this._button_5.ggId="Button 5";
		this._button_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_5.ggVisible=true;
		this._button_5.className='ggskin ggskin_button ';
		this._button_5.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 204px;';
		hs+='position : absolute;';
		hs+='top : 142px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		this._button_5.setAttribute('style',hs);
		this._button_5.style[domTransform + 'Origin']='0% 0%';
		me._button_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_5.onclick=function (e) {
			me.player.openNext("{node71}","");
		}
		this._button_5.onmouseover=function (e) {
			me._button_5__img.src=basePath + 'images/button_5__o.png';
		}
		this._button_5.onmouseout=function (e) {
			me._button_5__img.src=basePath + 'images/button_5.png';
		}
		this._button_5.onmousedown=function (e) {
			me._button_5__img.src=basePath + 'images/button_5__a.png';
		}
		this._button_5.onmouseup=function (e) {
			me._button_5__img.src=basePath + 'images/button_5.png';
		}
		this._button_5.ggUpdatePosition=function (useTransition) {
		}
		this._svg_1.appendChild(this._button_5);
		this._button_6=document.createElement('div');
		this._button_6__img=document.createElement('img');
		this._button_6__img.className='ggskin ggskin_button';
		this._button_6__img.setAttribute('src',basePath + 'images/button_6.png');
		this._button_6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_6__img.className='ggskin ggskin_button';
		this._button_6__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_6__img);
		this._button_6.appendChild(this._button_6__img);
		this._button_6.ggId="Button 6";
		this._button_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_6.ggVisible=true;
		this._button_6.className='ggskin ggskin_button ';
		this._button_6.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 271px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		this._button_6.setAttribute('style',hs);
		this._button_6.style[domTransform + 'Origin']='0% 0%';
		me._button_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_6.onclick=function (e) {
			me.player.openNext("{node10}","");
		}
		this._button_6.onmouseover=function (e) {
			me._button_6__img.src=basePath + 'images/button_6__o.png';
		}
		this._button_6.onmouseout=function (e) {
			me._button_6__img.src=basePath + 'images/button_6.png';
		}
		this._button_6.onmousedown=function (e) {
			me._button_6__img.src=basePath + 'images/button_6__a.png';
		}
		this._button_6.onmouseup=function (e) {
			me._button_6__img.src=basePath + 'images/button_6.png';
		}
		this._button_6.ggUpdatePosition=function (useTransition) {
		}
		this._svg_1.appendChild(this._button_6);
		this._button_7=document.createElement('div');
		this._button_7__img=document.createElement('img');
		this._button_7__img.className='ggskin ggskin_button';
		this._button_7__img.setAttribute('src',basePath + 'images/button_7.png');
		this._button_7__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_7__img.className='ggskin ggskin_button';
		this._button_7__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_7__img);
		this._button_7.appendChild(this._button_7__img);
		this._button_7.ggId="Button 7";
		this._button_7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_7.ggVisible=true;
		this._button_7.className='ggskin ggskin_button ';
		this._button_7.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 271px;';
		hs+='position : absolute;';
		hs+='top : 152px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		this._button_7.setAttribute('style',hs);
		this._button_7.style[domTransform + 'Origin']='0% 0%';
		me._button_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_7.onclick=function (e) {
			me.player.openNext("{node105}","");
		}
		this._button_7.onmouseover=function (e) {
			me._button_7__img.src=basePath + 'images/button_7__o.png';
		}
		this._button_7.onmouseout=function (e) {
			me._button_7__img.src=basePath + 'images/button_7.png';
		}
		this._button_7.onmousedown=function (e) {
			me._button_7__img.src=basePath + 'images/button_7__a.png';
		}
		this._button_7.onmouseup=function (e) {
			me._button_7__img.src=basePath + 'images/button_7.png';
		}
		this._button_7.ggUpdatePosition=function (useTransition) {
		}
		this._svg_1.appendChild(this._button_7);
		this._button_8=document.createElement('div');
		this._button_8__img=document.createElement('img');
		this._button_8__img.className='ggskin ggskin_button';
		this._button_8__img.setAttribute('src',basePath + 'images/button_8.png');
		this._button_8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_8__img.className='ggskin ggskin_button';
		this._button_8__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_8__img);
		this._button_8.appendChild(this._button_8__img);
		this._button_8.ggId="Button 8";
		this._button_8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_8.ggVisible=true;
		this._button_8.className='ggskin ggskin_button ';
		this._button_8.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 163px;';
		hs+='position : absolute;';
		hs+='top : 142px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		this._button_8.setAttribute('style',hs);
		this._button_8.style[domTransform + 'Origin']='0% 0%';
		me._button_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_8.onclick=function (e) {
			me.player.openNext("{node109}","");
		}
		this._button_8.onmouseover=function (e) {
			me._button_8__img.src=basePath + 'images/button_8__o.png';
		}
		this._button_8.onmouseout=function (e) {
			me._button_8__img.src=basePath + 'images/button_8.png';
		}
		this._button_8.onmousedown=function (e) {
			me._button_8__img.src=basePath + 'images/button_8__a.png';
		}
		this._button_8.onmouseup=function (e) {
			me._button_8__img.src=basePath + 'images/button_8.png';
		}
		this._button_8.ggUpdatePosition=function (useTransition) {
		}
		this._svg_1.appendChild(this._button_8);
		this._button_9=document.createElement('div');
		this._button_9__img=document.createElement('img');
		this._button_9__img.className='ggskin ggskin_button';
		this._button_9__img.setAttribute('src',basePath + 'images/button_9.png');
		this._button_9__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_9__img.className='ggskin ggskin_button';
		this._button_9__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_9__img);
		this._button_9.appendChild(this._button_9__img);
		this._button_9.ggId="Button 9";
		this._button_9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_9.ggVisible=true;
		this._button_9.className='ggskin ggskin_button ';
		this._button_9.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 88px;';
		hs+='position : absolute;';
		hs+='top : 138px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		this._button_9.setAttribute('style',hs);
		this._button_9.style[domTransform + 'Origin']='0% 0%';
		me._button_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_9.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_9.onclick=function (e) {
			me.player.openNext("{node102}","");
		}
		this._button_9.onmouseover=function (e) {
			me._button_9__img.src=basePath + 'images/button_9__o.png';
		}
		this._button_9.onmouseout=function (e) {
			me._button_9__img.src=basePath + 'images/button_9.png';
		}
		this._button_9.onmousedown=function (e) {
			me._button_9__img.src=basePath + 'images/button_9__a.png';
		}
		this._button_9.onmouseup=function (e) {
			me._button_9__img.src=basePath + 'images/button_9.png';
		}
		this._button_9.ggUpdatePosition=function (useTransition) {
		}
		this._svg_1.appendChild(this._button_9);
		this._rectangle_1.appendChild(this._svg_1);
		this.divSkin.appendChild(this._rectangle_1);
		this._information=document.createElement('div');
		this._information.ggId="information";
		this._information.ggLeft=-155;
		this._information.ggTop=-240;
		this._information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._information.ggVisible=false;
		this._information.className='ggskin ggskin_container ';
		this._information.ggType='container';
		hs ='';
		hs+='height : 500px;';
		hs+='left : -155px;';
		hs+='position : absolute;';
		hs+='top : -240px;';
		hs+='visibility : hidden;';
		hs+='width : 308px;';
		hs+='pointer-events:none;';
		this._information.setAttribute('style',hs);
		this._information.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		me._information.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._informationbg=document.createElement('div');
		this._informationbg.ggId="informationbg";
		this._informationbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._informationbg.ggVisible=true;
		this._informationbg.className='ggskin ggskin_rectangle ';
		this._informationbg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 438px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 306px;';
		hs+='pointer-events:auto;';
		this._informationbg.setAttribute('style',hs);
		this._informationbg.style[domTransform + 'Origin']='50% 50%';
		me._informationbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._informationbg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._informationbg.ggUpdatePosition=function (useTransition) {
		}
		this._information.appendChild(this._informationbg);
		this._info_title=document.createElement('div');
		this._info_title__text=document.createElement('div');
		this._info_title.className='ggskin ggskin_textdiv';
		this._info_title.ggTextDiv=this._info_title__text;
		this._info_title.ggId="info_title";
		this._info_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_title.ggVisible=true;
		this._info_title.className='ggskin ggskin_text ';
		this._info_title.ggType='text';
		hs ='';
		hs+='height : 15px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : 17px;';
		hs+='visibility : inherit;';
		hs+='width : 149px;';
		hs+='pointer-events:auto;';
		this._info_title.setAttribute('style',hs);
		this._info_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 149px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._info_title__text.setAttribute('style',hs);
		this._info_title__text.innerHTML="";
		this._info_title.appendChild(this._info_title__text);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_title.ggUpdatePosition=function (useTransition) {
		}
		this._information.appendChild(this._info_title);
		this._ht_info_close=document.createElement('div');
		this._ht_info_close__img=document.createElement('img');
		this._ht_info_close__img.className='ggskin ggskin_svg';
		this._ht_info_close__img.setAttribute('src',basePath + 'images/ht_info_close.svg');
		this._ht_info_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ht_info_close__img['ondragstart']=function() { return false; };
		this._ht_info_close.appendChild(this._ht_info_close__img);
		this._ht_info_close__imgo=document.createElement('img');
		this._ht_info_close__imgo.className='ggskin ggskin_svg';
		this._ht_info_close__imgo.setAttribute('src',basePath + 'images/ht_info_close__o.svg');
		this._ht_info_close__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._ht_info_close__imgo['ondragstart']=function() { return false; };
		this._ht_info_close.appendChild(this._ht_info_close__imgo);
		this._ht_info_close.ggId="ht_info_close";
		this._ht_info_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_info_close.ggVisible=true;
		this._ht_info_close.className='ggskin ggskin_svg ';
		this._ht_info_close.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 263px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._ht_info_close.setAttribute('style',hs);
		this._ht_info_close.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_info_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_info_close.onclick=function (e) {
			me._information.style[domTransition]='none';
			me._information.style.visibility='hidden';
			me._information.ggVisible=false;
		}
		this._ht_info_close.onmouseover=function (e) {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
		}
		this._ht_info_close.onmouseout=function (e) {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
		}
		this._ht_info_close.ggUpdatePosition=function (useTransition) {
		}
		this._information.appendChild(this._ht_info_close);
		this._info_text_parametros=document.createElement('div');
		this._info_text_parametros__text=document.createElement('div');
		this._info_text_parametros.className='ggskin ggskin_textdiv';
		this._info_text_parametros.ggTextDiv=this._info_text_parametros__text;
		this._info_text_parametros.ggId="info_text_parametros";
		this._info_text_parametros.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_text_parametros.ggVisible=true;
		this._info_text_parametros.className='ggskin ggskin_text ';
		this._info_text_parametros.ggType='text';
		hs ='';
		hs+='height : 320px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 278px;';
		hs+='pointer-events:auto;';
		this._info_text_parametros.setAttribute('style',hs);
		this._info_text_parametros.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 278px;';
		hs+='height: 320px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._info_text_parametros__text.setAttribute('style',hs);
		this._info_text_parametros__text.innerHTML="";
		this._info_text_parametros.appendChild(this._info_text_parametros__text);
		me._info_text_parametros.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_text_parametros.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_text_parametros.ggUpdatePosition=function (useTransition) {
		}
		this._information.appendChild(this._info_text_parametros);
		this._separador2=document.createElement('div');
		this._separador2__img=document.createElement('img');
		this._separador2__img.className='ggskin ggskin_image';
		this._separador2__img.setAttribute('src',basePath + 'images/separador2.png');
		this._separador2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._separador2__img.className='ggskin ggskin_image';
		this._separador2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._separador2__img);
		this._separador2.appendChild(this._separador2__img);
		this._separador2.ggId="SEPARADOR2";
		this._separador2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._separador2.ggVisible=true;
		this._separador2.className='ggskin ggskin_image ';
		this._separador2.ggType='image';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 11px;';
		hs+='position : absolute;';
		hs+='top : 370px;';
		hs+='visibility : inherit;';
		hs+='width : 285px;';
		hs+='pointer-events:auto;';
		this._separador2.setAttribute('style',hs);
		this._separador2.style[domTransform + 'Origin']='50% 50%';
		me._separador2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._separador2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._separador2.ggUpdatePosition=function (useTransition) {
		}
		this._information.appendChild(this._separador2);
		this._pdfmantenimiento=document.createElement('div');
		this._pdfmantenimiento__img=document.createElement('img');
		this._pdfmantenimiento__img.className='ggskin ggskin_button';
		this._pdfmantenimiento__img.setAttribute('src',basePath + 'images/pdfmantenimiento.png');
		this._pdfmantenimiento__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._pdfmantenimiento__img.className='ggskin ggskin_button';
		this._pdfmantenimiento__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._pdfmantenimiento__img);
		this._pdfmantenimiento.appendChild(this._pdfmantenimiento__img);
		this._pdfmantenimiento.ggId="PDFmantenimiento";
		this._pdfmantenimiento.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pdfmantenimiento.ggVisible=true;
		this._pdfmantenimiento.className='ggskin ggskin_button ';
		this._pdfmantenimiento.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 26px;';
		hs+='position : absolute;';
		hs+='top : 392px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		this._pdfmantenimiento.setAttribute('style',hs);
		this._pdfmantenimiento.style[domTransform + 'Origin']='50% 100%';
		me._pdfmantenimiento.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._pdfmantenimiento.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._pdfmantenimiento.onclick=function (e) {
			me.player.openUrl("https:\/\/1drv.ms\/b\/s!Au5UwBoGrJQKlwyswhuUzlcxeIHH","");
		}
		this._pdfmantenimiento.onmouseover=function (e) {
			me._tt_informpdf.style[domTransition]='none';
			me._tt_informpdf.style.visibility=(Number(me._tt_informpdf.style.opacity)>0||!me._tt_informpdf.style.opacity)?'inherit':'hidden';
			me._tt_informpdf.ggVisible=true;
			me.elementMouseOver['pdfmantenimiento']=true;
		}
		this._pdfmantenimiento.onmouseout=function (e) {
			me._tt_informpdf.style[domTransition]='none';
			me._tt_informpdf.style.visibility='hidden';
			me._tt_informpdf.ggVisible=false;
			me.elementMouseOver['pdfmantenimiento']=false;
		}
		this._pdfmantenimiento.ontouchend=function (e) {
			me.elementMouseOver['pdfmantenimiento']=false;
		}
		this._pdfmantenimiento.ggUpdatePosition=function (useTransition) {
		}
		this._tt_informpdf=document.createElement('div');
		this._tt_informpdf__text=document.createElement('div');
		this._tt_informpdf.className='ggskin ggskin_textdiv';
		this._tt_informpdf.ggTextDiv=this._tt_informpdf__text;
		this._tt_informpdf.ggId="tt_informPDF";
		this._tt_informpdf.ggLeft=7;
		this._tt_informpdf.ggTop=-24;
		this._tt_informpdf.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_informpdf.ggVisible=false;
		this._tt_informpdf.className='ggskin ggskin_text ';
		this._tt_informpdf.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 22px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : -24px;';
		hs+='visibility : hidden;';
		hs+='width : 225px;';
		hs+='pointer-events:auto;';
		this._tt_informpdf.setAttribute('style',hs);
		this._tt_informpdf.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 225px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.784314);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._tt_informpdf__text.setAttribute('style',hs);
		this._tt_informpdf__text.innerHTML="Solicitud Mantenimiento Manual";
		this._tt_informpdf.appendChild(this._tt_informpdf__text);
		me._tt_informpdf.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_informpdf.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_informpdf.ggCurrentLogicStateVisible = -1;
		this._tt_informpdf.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['pdfmantenimiento'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_informpdf.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_informpdf.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_informpdf.style[domTransition]='';
				if (me._tt_informpdf.ggCurrentLogicStateVisible == 0) {
					me._tt_informpdf.style.visibility=(Number(me._tt_informpdf.style.opacity)>0||!me._tt_informpdf.style.opacity)?'inherit':'hidden';
					me._tt_informpdf.ggVisible=true;
				}
				else {
					me._tt_informpdf.style.visibility="hidden";
					me._tt_informpdf.ggVisible=false;
				}
			}
		}
		this._tt_informpdf.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._pdfmantenimiento.appendChild(this._tt_informpdf);
		this._information.appendChild(this._pdfmantenimiento);
		this.divSkin.appendChild(this._information);
		this._image_1=document.createElement('div');
		this._image_1__img=document.createElement('img');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
		this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_1__img);
		this._image_1.appendChild(this._image_1__img);
		this._image_1.ggId="Image 1";
		this._image_1.ggLeft=-101;
		this._image_1.ggTop=-78;
		this._image_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_1.ggVisible=true;
		this._image_1.className='ggskin ggskin_image ';
		this._image_1.ggType='image';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -101px;';
		hs+='position : absolute;';
		hs+='top : -78px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		this._image_1.setAttribute('style',hs);
		this._image_1.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		me._image_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_1.onclick=function (e) {
			me.player.openUrl("..\/mantenimiento_equipos\/mantenimiento.php","_self");
		}
		this._image_1.onmouseover=function (e) {
			me._tt_inform.style[domTransition]='none';
			me._tt_inform.style.visibility=(Number(me._tt_inform.style.opacity)>0||!me._tt_inform.style.opacity)?'inherit':'hidden';
			me._tt_inform.ggVisible=true;
			me.elementMouseOver['image_1']=true;
		}
		this._image_1.onmouseout=function (e) {
			me._tt_inform.style[domTransition]='none';
			me._tt_inform.style.visibility='hidden';
			me._tt_inform.ggVisible=false;
			me.elementMouseOver['image_1']=false;
		}
		this._image_1.ontouchend=function (e) {
			me.elementMouseOver['image_1']=false;
		}
		this._image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._tt_inform=document.createElement('div');
		this._tt_inform__text=document.createElement('div');
		this._tt_inform.className='ggskin ggskin_textdiv';
		this._tt_inform.ggTextDiv=this._tt_inform__text;
		this._tt_inform.ggId="tt_inform";
		this._tt_inform.ggLeft=-101;
		this._tt_inform.ggTop=-85;
		this._tt_inform.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_inform.ggVisible=false;
		this._tt_inform.className='ggskin ggskin_text ';
		this._tt_inform.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 17px;';
		hs+='left : -101px;';
		hs+='position : absolute;';
		hs+='top : -85px;';
		hs+='visibility : hidden;';
		hs+='width : 125px;';
		hs+='pointer-events:auto;';
		this._tt_inform.setAttribute('style',hs);
		this._tt_inform.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 125px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.784314);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._tt_inform__text.setAttribute('style',hs);
		this._tt_inform__text.innerHTML="Generar Ticket";
		this._tt_inform.appendChild(this._tt_inform__text);
		me._tt_inform.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_inform.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_inform.ggCurrentLogicStateVisible = -1;
		this._tt_inform.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['image_1'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_inform.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_inform.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_inform.style[domTransition]='';
				if (me._tt_inform.ggCurrentLogicStateVisible == 0) {
					me._tt_inform.style.visibility=(Number(me._tt_inform.style.opacity)>0||!me._tt_inform.style.opacity)?'inherit':'hidden';
					me._tt_inform.ggVisible=true;
				}
				else {
					me._tt_inform.style.visibility="hidden";
					me._tt_inform.ggVisible=false;
				}
			}
		}
		this._tt_inform.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._image_1.appendChild(this._tt_inform);
		this.divSkin.appendChild(this._image_1);
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._loading_image.style[domTransition]='none';
			me._loading_image.style.visibility='hidden';
			me._loading_image.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.ggHotspotCallChildFunctions=function(functionname) {
		var stack = me.player.getCurrentPointHotspots();
		while (stack.length > 0) {
			var e = stack.pop();
			if (typeof e[functionname] == 'function') {
				e[functionname]();
			}
			if(e.hasChildNodes()) {
				for(var i=0; i<e.childNodes.length; i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		me._loading_text.ggUpdateText();
		var hs='';
		if (me._loading_bar.ggParameter) {
			hs+=parameterToTransform(me._loading_bar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loading_bar.style[domTransform]=hs;
		if (me.elementMouseDown['left']) {
			me.player.changePanLog(1,true);
		}
		if (me.elementMouseDown['right']) {
			me.player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['up']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['down']) {
			me.player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['zoom_in']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoom_out']) {
			me.player.changeFovLog(1,true);
		}
		var hs='';
		if (me._radar_beam.ggParameter) {
			hs+=parameterToTransform(me._radar_beam.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		hs+='scale(' + (Math.tan(me.player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		hs+='scale(1.0,' + (Math.cos(1*me.player.getTilt()*Math.PI/180.0 + 0)) + ') ';
		me._radar_beam.style[domTransform]=hs;
		if (me.elementMouseOver['pdfmantenimiento']) {
		}
		me._tt_informpdf.ggUpdateConditionTimer();
		if (me.elementMouseOver['image_1']) {
		}
		me._tt_inform.ggUpdateConditionTimer();
		me.ggHotspotCallChildFunctions('ggUpdateConditionTimer');
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='ht_node') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_node";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 123px;';
			hs+='position : absolute;';
			hs+='top : 339px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._svg_2=document.createElement('div');
			this._svg_2__img=document.createElement('img');
			this._svg_2__img.className='ggskin ggskin_svg';
			this._svg_2__img.setAttribute('src',basePath + 'images/svg_2.svg');
			this._svg_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_2__img['ondragstart']=function() { return false; };
			this._svg_2.appendChild(this._svg_2__img);
			this._svg_2__imgo=document.createElement('img');
			this._svg_2__imgo.className='ggskin ggskin_svg';
			this._svg_2__imgo.setAttribute('src',basePath + 'images/svg_2__o.svg');
			this._svg_2__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._svg_2__imgo['ondragstart']=function() { return false; };
			this._svg_2.appendChild(this._svg_2__imgo);
			this._svg_2.ggId="Svg 2";
			this._svg_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_2.ggVisible=true;
			this._svg_2.className='ggskin ggskin_svg ';
			this._svg_2.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 100px;';
			hs+='left : -49px;';
			hs+='position : absolute;';
			hs+='top : -38px;';
			hs+='visibility : inherit;';
			hs+='width : 100px;';
			hs+='pointer-events:auto;';
			this._svg_2.setAttribute('style',hs);
			this._svg_2.style[domTransform + 'Origin']='50% 50%';
			me._svg_2.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_2.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_2.onmouseover=function (e) {
				me._svg_2__img.style.visibility='hidden';
				me._svg_2__imgo.style.visibility='inherit';
			}
			this._svg_2.onmouseout=function (e) {
				me._svg_2__img.style.visibility='inherit';
				me._svg_2__imgo.style.visibility='hidden';
			}
			this._svg_2.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._svg_2);
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="ht_info";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 395px;';
			hs+='position : absolute;';
			hs+='top : 135px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._info_title.ggText="<b>"+me.hotspot.title+"<\/b>";
				me.skin._info_title.ggTextDiv.innerHTML=me.skin._info_title.ggText;
				if (me.skin._info_title.ggUpdateText) {
					me.skin._info_title.ggUpdateText=function() {
						var hs="<b>"+me.hotspot.title+"<\/b>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (me.skin._info_title.ggUpdatePosition) {
					me.skin._info_title.ggUpdatePosition();
				}
				me.skin._info_title.ggTextDiv.scrollTop = 0;
				me.skin._info_text_parametros.ggText=me.hotspot.description;
				me.skin._info_text_parametros.ggTextDiv.innerHTML=me.skin._info_text_parametros.ggText;
				if (me.skin._info_text_parametros.ggUpdateText) {
					me.skin._info_text_parametros.ggUpdateText=function() {
						var hs=me.hotspot.description;
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (me.skin._info_text_parametros.ggUpdatePosition) {
					me.skin._info_text_parametros.ggUpdatePosition();
				}
				me.skin._info_text_parametros.ggTextDiv.scrollTop = 0;
				me.skin._information.ggVisible = !me.skin._information.ggVisible;
				var flag=me.skin._information.ggVisible;
				me.skin._information.style[domTransition]='none';
				me.skin._information.style.visibility=((flag)&&(Number(me.skin._information.style.opacity)>0||!me.skin._information.style.opacity))?'inherit':'hidden';
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me._tt_information.style[domTransition]='none';
				me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
				me._tt_information.ggVisible=true;
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me._tt_information.style[domTransition]='none';
				me._tt_information.style.visibility='hidden';
				me._tt_information.ggVisible=false;
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._svg_5=document.createElement('div');
			this._svg_5__img=document.createElement('img');
			this._svg_5__img.className='ggskin ggskin_svg';
			this._svg_5__img.setAttribute('src',basePath + 'images/svg_5.svg');
			this._svg_5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_5__img['ondragstart']=function() { return false; };
			this._svg_5.appendChild(this._svg_5__img);
			this._svg_5.ggId="Svg 5";
			this._svg_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_5.ggVisible=true;
			this._svg_5.className='ggskin ggskin_svg ';
			this._svg_5.ggType='svg';
			hs ='';
			hs+='height : 32px;';
			hs+='left : -17px;';
			hs+='position : absolute;';
			hs+='top : -15px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			hs+='pointer-events:auto;';
			this._svg_5.setAttribute('style',hs);
			this._svg_5.style[domTransform + 'Origin']='50% 50%';
			me._svg_5.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_5.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_5.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._svg_5);
			this._tt_information=document.createElement('div');
			this._tt_information__text=document.createElement('div');
			this._tt_information.className='ggskin ggskin_textdiv';
			this._tt_information.ggTextDiv=this._tt_information__text;
			this._tt_information.ggId="tt_information";
			this._tt_information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_information.ggVisible=false;
			this._tt_information.className='ggskin ggskin_text ';
			this._tt_information.ggType='text';
			hs ='';
			hs+='z-index: 100;';
			hs+='height : 17px;';
			hs+='left : -63px;';
			hs+='position : absolute;';
			hs+='top : 17px;';
			hs+='visibility : hidden;';
			hs+='width : 120px;';
			hs+='pointer-events:auto;';
			this._tt_information.setAttribute('style',hs);
			this._tt_information.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 120px;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.784314);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tt_information__text.setAttribute('style',hs);
			this._tt_information__text.innerHTML=me.hotspot.title;
			this._tt_information.appendChild(this._tt_information__text);
			me._tt_information.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_information.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_information.ggCurrentLogicStateVisible = -1;
			this._tt_information.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._tt_information.style[domTransition]='';
					if (me._tt_information.ggCurrentLogicStateVisible == 0) {
						me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
						me._tt_information.ggVisible=true;
					}
					else {
						me._tt_information.style.visibility="hidden";
						me._tt_information.ggVisible=false;
					}
				}
			}
			this._tt_information.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._tt_information);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_information.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};