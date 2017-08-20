LPSiteNotification=function(){var t=!1,e=!1,n=!1,r=function(){var e=function(t){for(var e=0;e<t.fields.length;++e)if("password"===t.fields[e].type)return!0;return!1};return function(n){e(n)?(n.generatedPassword||(t=!0),bg.LPTabState.processPasswordSubmit({formData:n,callback:n.generatedPassword||LPContentScriptTools.isUnloading()?null:s})):(n.fields.length>0&&bg.LPTabState.processTextSubmit(n),bg.LPTabState.clear())}}(),i=function(){var t=function(t){return t.value&&(t.value!==t.getAttribute("value")||t.value.length>1)&&LPContentScriptTools.isVisible(t)},e=function(e){for(var n=e||document.body,r=[],i=n.querySelectorAll('input:not([type]),input[type="text"],input[type="email"],input[type="password"]'),a=0;a<i.length;++a)t(i[a])&&r.push(i[a]);return r},n=function(){var t=["mouseup","keydown","submit"],e={},n=!1;return function(r,i){t.indexOf(r)>-1?(e[r]=i,n||(n=!0,setTimeout(function(){for(var r=0;r<t.length;++r){var i=t[r];if(e.hasOwnProperty(i)){e[i]();break}}n=!1,e={}},0))):i()}}(),i=function(t){for(var e=[],n={},r={},i=0;i<t.length;++i){var a=t[i];switch(a.type){case"hidden":case"text":case"email":!a.value||"hidden"!==a.type&&LPContentScriptTools.isVisible(a)||(n.hasOwnProperty(a.value)?delete r[a.value]:(r[a.value]=a,n[a.value]=!0))}}var o=LPContentScriptTools.findTextNodes({searches:Object.keys(r),searchAll:!0,exactMatch:!0,allowEmails:!0}),u={};return o.filter(function(t){return!u.hasOwnProperty(t.match)&&(u[t.match]=!0,!0)}).forEach(function(t){t.parent&&"OPTION"!==t.parent.nodeName&&LPContentScriptTools.isVisible(t.parent)&&e.push(r[t.match])}),e},a=function(t){var e={type:t.type,value:t.value,id:t.id,label:LPContentScriptTools.getLabel(t),attributes:LPContentScriptTools.getAttributes(t,["name","ng-model","data-reactid"])};return"password"!==e.type&&"disc"===LPContentScriptTools.getCSS(t,"text-security")&&(e.type="password"),e},o=function(t,e){for(var n=[],r=0;r<t.length;++r){var i=t[r];"password"!==i.inputData.type&&(i.inputData.value=p.getUnmaskedValue({input:i.input,inputValue:i.inputData.value,form:e.form})),i.inputData.formname=e.form&&e.form.getAttribute("name")||"",n.push(i.inputData)}return{url:document.location.href,top:window===top,fields:n,generatedPassword:e.generatedPassword,username:p.getUsername()}};return function(t){var u=e(t.form);t.form&&(u=i(t.form).concat(u));for(var s=[],c=0;c<u.length;++c){var f=u[c],l=a(f);s.push({input:f,inputData:l})}var d=o(s,t);return t.deferred||n(t.type,function(){r(d)}),d}}(),a=function(){var t=null,e=function(){t=null};return function(n){return function(r){if(t=!1!==r.isTrusted&&!1!==t)try{n(r)}catch(t){console.log(t)}setTimeout(e,0)}}}(),o=function(){var n=function(t,n,i){var a=r(t);return!(!a||!LPContentScriptTools.isVisible(a))&&(i&&!LPContentScriptTools.isClickable(a)?(e=!0,!1):!n.passwordChangeForm||a.val()===t.value)},r=function(t){if(t.id)return document.getElementById(t.id);for(var e in t.attributes){var n=document.querySelector("input["+e+'="'+t.attributes[e]+'"]');if(n)return n}return null},i=function(t,e){for(var r=0;r<t.fields.length;++r){var i=t.fields[r];if("password"===i.type)return n(i,t,e)}return!1},o=function(){var t=function(t,e){var n=r(t);n&&n.addEventListener("input",a(function(){e(!0)}))};return function(e,n){for(var r=0;r<e.fields.length;++r){var i=e.fields[r];"password"===i.type&&t(i,n)}}}();return function(e,n){var r=0,a=null,u=!1,s=function(e){u||(t=!1,u=!0,clearInterval(a),n(e))};t?(a=setInterval(function(){++r;var t=5===r,n=i(e,t);n&&!t||s(n)},1e3),o(e,s)):s(i(e))}}(),u=function(t){if(!n){n=!0,t.postSetup=function(){Topics.get(Topics.SITE_NOTIFICATION).publish(r)};var e=bg.get("LPContentScriptFeatures");if(e.angularFrontendEnabled)var r=LPFrame.openAngularDialog("save-new",t,{css:{top:0,right:0}});else if(e.bunk2)var r=LPFrame.openDialog("contentScriptSiteBunk2",t,{css:{top:10,right:10}});else var r=LPFrame.openDialog("contentScriptSite",t,{css:{top:10,right:10}});r.onClose(function(){n=!1})}},s=function(t){LPContentScriptTools.isUnloading()||(Topics.get(Topics.SITE_NOTIFICATION_STATE).publish(t),bg.get("LPContentScriptFeatures").new_save_site&&t.dialogData&&!e&&csTop.LPSiteNotification.showSiteNotification(t))},c=function(){var t=function(t){return t=t.toLowerCase(),t.indexOf("submit")>-1||t.indexOf("save")>-1},e=function(e){for(var n=e.attributes,r=0;r<n.length;++r){var i=n[r];if(t(i.name)||t(i.value))return!0}return!1};return function(t){if("INPUT"===t.nodeName)return"submit"===t.type||"button"===t.type&&e(t);for(var n=t;n&&0===n.getElementsByTagName("input").length;){if("BUTTON"===n.nodeName)return"submit"===n.type||e(n);if(e(n))return!0;n=n.parentElement}return!1}}(),f=function(t){switch(t.nodeName){case"TEXTAREA":case"SELECT":return!0;case"INPUT":switch(t.type){case"button":case"submit":return!1;default:return!0}default:return!1}},l=function(){var t=null,e=[],n=function(){t&&(t.disconnect(),t=null),e=[]},r=function(t){for(var e=0;e<t.length;++e){var n=t[e];switch(n.type){case"attributes":if(n.target.getAttribute(n.attributeName)!==n.oldValue)return!0;break;default:return!0}}return!1},i=function(t){r(t)&&(e.forEach(function(t){t()}),n())};return{reset:n,onChange:function(r){"undefined"!=typeof MutationObserver&&(t||(t=new MutationObserver(i),t.observe(document.body,{childList:!0,attributes:!0,characterData:!0,subtree:!0,attributeOldValue:!0})),-1===e.indexOf(r)&&e.push(r),setTimeout(function(){n()},0))}}}(),d=function(){var t=[],e=function(){t.forEach(function(t){window.removeEventListener("lprequeststart",t)}),t=[]};return{startTracking:function(e,n){var r=function(t){if(e(t.detail)){window.removeEventListener("lprequeststart",r);var i=function(e){t.detail.requestID===e.detail.requestID&&(window.removeEventListener("lprequestend",i),n(e.detail))};window.addEventListener("lprequestend",i)}};window.addEventListener("lprequeststart",r),t.push(r)},stopTracking:e}}(),p=function(){var e=null,n=!1,o=[];Topics.get(Topics.FILLED_GENERATED_PW).subscribe(function(t){u({target:t.element,generatedPassword:t.password})}),Topics.get(Topics.CLEAR_DATA).subscribe(function(t){L()}),Topics.get(Topics.LOGIN).subscribe(function(t){bg.LPTabState.getState(function(t){t.enabled&&w(t)})});var u=function(t){return t.form=LPContentScriptTools.getForm(t.target),i(t)},s=function(){t=!1,bg.LPTabState.clear()},p=function(t){try{return decodeURIComponent(t)}catch(t){}return null},v=function(t){var e=t&&t.formData;e&&e.fields.length>0&&(d.stopTracking(),d.startTracking(function(t){if(t&&t.data)for(var n=p(t.data),r=0;r<e.fields.length;++r){var i=e.fields[r].value;if(n&&n.indexOf(i)>-1||t.data.indexOf(i)>-1)return!0}return!1},t.responseHandler))},g=function(){var t=/^2[0-9][0-9]$/;return function(e){return t.test(e)}}(),m=function(t){v({formData:t,responseHandler:function(t){g(t.statusCode)||s()}})},b=function(t){var e=u({target:t,deferred:!0});v({formData:e,responseHandler:function(t){g(t.statusCode)&&r(e)}})},h={submit:a(function(t){l.reset(),m(i({form:LPContentScriptTools.getForm(t.target),type:t.type}))}),lpsubmit:function(t){l.reset(),i({form:t.target,type:"submit"})},mouseup:a(function(e){var n=e.target;c(n)?(l.reset(),m(u({target:n,type:e.type}))):f(n)||(t&&l.onChange(s),b(n))}),keydown:a(function(e){if(13===(e.keyCode||e.which)){var n=e.target;f(n)||c(n)?(l.reset(),m(u({target:n,type:e.type}))):(t&&l.onChange(s),b(n))}}),change:a(function(t){var e=t.target;if("INPUT"===e.nodeName&&e.value)switch(e.type){case"text":case"email":for(var n=0;n<o.length;++n)if(o[n].input===e)return void(o[n].value=e.value);o.push({input:e,value:e.value})}}),paste:a(function(t){var e=t.target;f(t.target)&&bg.LPTabState.getCopiedGeneratedPassword(function(t){e.value===t&&u({target:e,generatedPassword:t})})})},T=function(t){e=t},S=function(){if(e.usernames&&e.usernames.length>0)return LPContentScriptTools.findText({searches:e.usernames,wordMatch:!0})},w=function(t){if(T(t),!n){for(var e in h)document.addEventListener(e,h[e],!0);n=!0}},L=function(){if(n){for(var t in h)document.removeEventListener(t,h[t],!0);n=!1}o=[]},P=function(t){return t.indexOf("*")>-1||t.indexOf(String.fromCharCode(8226))>-1},y=function(t,e){return t.value&&!P(t.value)&&t.value.length===e.length&&(t.value[0]===e[0]||t.value[t.value.length-1]===e[e.length-1])},C=function(t){if(P(t.inputValue)){var e;for(e=0;e<o.length;++e){var n=o[e];if(n.input===t.input&&n.value!==t.inputValue)return n.value}if(t.form)for(e=0;e<t.form.length;++e){var r=t.form[e];if(y(r,t.inputValue))return r.value}}return t.inputValue};return function(){var t=document.documentElement;if(t&&"HTML"===t.nodeName)if(g_ischrome){var e=document.createElement("script");e.appendChild(document.createTextNode(LPContentScriptConstants.JS.PageWebRequestEvents)),t.appendChild(e),t.removeChild(e)}else Topics.get(Topics.INITIALIZED).subscribe(function(){var e=bg.get("extensionBaseURL");if(e){var n=document.createElement("script");n.src=e+"pageWebRequestEvents.js",t.appendChild(n),t.removeChild(n)}})}(),{setup:w,teardown:L,getUnmaskedValue:C,getUsername:S}}(),v=LPContentScriptTools.debounce(function(){bg.LPTabState.getSiteNotification({callback:s})},1e3,!0);return Topics.get(Topics.INITIALIZED).subscribe(function(){bg.LPTabState.getState(function(t){t.enabled&&(p.setup(t),window===top?v():t.formSubmittedFrame&&csTop.LPSiteNotification.getSiteNotification())})}),window!==top&&window.addEventListener("beforeunload",function(){t&&csTop.LPSiteNotification.getSiteNotification()},!0),{formExists:o,showSiteNotification:u,getSiteNotification:v}}();