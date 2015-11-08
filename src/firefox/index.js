// Import the self API
var self = require('sdk/self');

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;

// Import the page-mod API
var pageMod = require("sdk/page-mod");
 
pageMod.PageMod({
    include: "https://www.youtube.com/watch?*",
    contentScriptFile: self.data.url("Youtube_Gaming_Redirect.user.js")
});

pageMod.PageMod({
    include: "http*",
    exclude: "https://www.youtube.com/*",
    contentScriptFile: self.data.url("Youtube_Gaming_Linker.user.js")
});

pageMod.PageMod({
    include: "https://feedly.com/*",
    contentScriptFile: [self.data.url("jquery-2.1.4.min.js"),
                        self.data.url("Youtube_Gaming_Feedly.user.js")]
});
