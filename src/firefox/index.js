// Import the self API
var self = require('sdk/self');

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;

var preferences = require("sdk/simple-prefs").prefs;

// Import the page-mod API
var pageMod = require("sdk/page-mod");
 
if (preferences["redirect"]){
    pageMod.PageMod({
        include: "https://www.youtube.com/watch?*",
        contentScriptFile: self.data.url("Youtube_Gaming_Redirect.user.js")
    });
}
if (preferences["linker"]){
    pageMod.PageMod({
        include: "*",
        exclude: "https://www.youtube.com/*",
        contentScriptFile: self.data.url("Youtube_Gaming_Linker.user.js")
    });
}
if (preferences["feedly"]){
    pageMod.PageMod({
        include: "https://feedly.com/*",
        contentScriptFile: [self.data.url("jquery-2.1.4.min.js"),
                            self.data.url("Youtube_Gaming_Feedly.user.js")]
    });
}
