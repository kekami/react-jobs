LPFrame=function(){var e=0,t={},n=null,i=function(){var e=function(e){return"string"==typeof e?e:"number"==typeof e?e+"px":""};return function(t,n){for(var i in n)t.style.setProperty(i,e(n[i]),"important");return t}}(),r=function(n){var r=++e,o=n.tracking,a=null,s=new LPEventManager,c=[],l=null,u=null,f=n.interfaceDefinition;t[r]=this;var d=function(){var e=document.createElement("iframe"),t=getchromeurl(n.url);t.indexOf(":id")>-1?t=t.replace(":id",r):t+=(t.indexOf("?")>-1?"&":"?")+"dialogID="+r,g_isfirefoxsdk?e.setAttribute("lpsrc",t):e.src=t,i(e,{border:"none",position:"relative",height:"100%",width:"100%",visibility:"visible"}),e.setAttribute("scrolling","no");var o=document.createElement("div");return i(o,{position:"fixed","z-index":"2147483647",display:"none",width:"100%",height:"100%"}),o.appendChild(e),document.body.appendChild(o),o}();this.close=function(){s.publishEvent("close"),d.parentElement.removeChild(d),window.removeEventListener("resize",this.refreshPosition),window.removeEventListener("scroll",this.refreshPosition),delete t[r]},this.onClose=function(e){s.addEventListener("close",e)},this.css=function(e){i(d,e),this.refreshPosition()};var h=function(e,t,n){if(n){if("string"==typeof n){if(!n.indexOf("%"))throw"trackElement only supports numbers or percentages for translations";n=e[t]*parseInt(n.substring(0,n.indexOf("%")))/100}return n}return 0};this.refreshPosition=function(){if(o){var e=o.element.getBoundingClientRect(),t=e.top,n=e.left;o.frameTranslation&&(t+=h(d,"clientHeight",o.frameTranslation.y),n+=h(d,"clientWidth",o.frameTranslation.x)),o.targetTranslation&&(t+=h(o.element,"clientHeight",o.targetTranslation.y),n+=h(o.element,"clientWidth",o.targetTranslation.x)),i(d,{top:t,left:n})}},this.trackElement=function(e){o=e,window.addEventListener("resize",this.refreshPosition),window.addEventListener("scroll",this.refreshPosition)},this.getInterface=function(){return null===u&&(l=function(e){null===a?c.push(e):LPPlatform.requestFramework.sendRequest({type:"contentScriptRequest",data:e,frameID:a})},u=Interfaces.createInstance(f,{direct:!1,context:"contentScript",requestFunction:l})),u},this.initialize=function(e){a=e;for(var t=0;t<c.length;++t)l(c[t])},this.getParams=function(){return n.dialogData},this.getDialogID=function(){return r},o&&this.trackElement(o)};Topics.get(Topics.CLEAR_DATA).subscribe(function(){for(var e in t)t[e].close()});var o=function(e){if(e){var n=t[e.id];n&&n.css(e.css)}"function"==typeof e.callback&&e.callback()},a=function(e,n){n(t[e].getParams())},s=function(e){var n=t[e];n&&n.close()},c=function(e,n,i){var r=t[e];r&&r.initialize(i,n)},l=function(e){null===n&&(n=document.createElement("div"),i(n,{position:"fixed","z-index":"2147483646",top:"0px",right:"0px",bottom:"0px",left:"0px","background-color":"rgba(52, 61, 68, 0.6)"})),document.body.appendChild(n)},u=function(){n&&document.body.removeChild(n)},f=function(e){return new r(e)};return{css:o,close:s,openDialog:function(e,t,n){var i=f({url:"contentScriptDialog.html",interfaceDefinition:Interfaces.ContentScriptDialogInterface});return i.getInterface().LPDialog.openDialog(e,t),n&&(n.css&&i.css(n.css),n.callback&&n.callback(i.getDialogID())),i},openAngularDialog:function(e,t,n){var i="lastpass/index.html#/sandbox/:id/"+e,r=f({url:i,dialogData:t});return n&&(n.css&&r.css(n.css),n.callback&&n.callback(r.getDialogID())),r},openFrame:f,initializeRequestFramework:c,getParams:a,showModal:l,hideModal:u,hasDialogs:function(){return!(t&&0===Object.keys(t).length&&t.constructor===Object)}}}();