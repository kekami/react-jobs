function do_submit(){var l=document.getElementById("pin").value;return null!=omnikey_callback&&(omnikey_callback_called=!0,omnikey_callback(l)),setTimeout(function(){window_close("omnikey.html")},0),!1}function load(l){if(!l)return void get_data("omnikey",function(){load(!0)});null!=getBG().g_omnikey_callback&&(omnikey_callback=getBG().g_omnikey_callback,getBG().g_omnikey_callback=null),document.getElementById("pin").focus()}var omnikey_callback=null,omnikey_callback_called=!1;