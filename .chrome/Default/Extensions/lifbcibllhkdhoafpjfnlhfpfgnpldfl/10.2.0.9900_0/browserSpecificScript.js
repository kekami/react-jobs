// Our extension id is fixed and known because we use the same chrome_ext.pem file
// during the build when making the crx file.
var resourceURL = "chrome-extension://lifbcibllhkdhoafpjfnlhfpfgnpldfl/";

/**
* Returns the document
*/
function getDocument() {
    return document;
}

/**
* Our name
*/
function getPluginName() {
    return "CHROMETB";
}

/**
* Writes a log line to the JS console
*
* @param item - Item to log
*/
function Log(item) {
    // console.log(item);
}

/**
* Writes a timestamp (milliseconds since epoch) and a message to the JS console
* Separate function from Log so that it can be enabled/disabled separately
*/
function LogTimestamp(message) {
    // console.log(performance.now() + " ms since navigationStart: " + message);
}