chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    console.log("test");
    if (changeInfo.status == 'complete' && tab.url.match("^http")){
        console.log("test");
        chrome.storage.sync.get({
            redirect: true,
            linker: true,
            feedly: true
        }, function(items) {
            if (items.redirect && tab.url.match("^https:\/\/www\.youtube\.com\/*")) {
                chrome.tabs.executeScript(tabId, {file: "Youtube_Gaming_Redirect.user.js"});
            }
            if (items.linker && !(tab.url.match("^https:\/\/www\.youtube\.com\/*"))) {
                chrome.tabs.executeScript(tabId, {file: "Youtube_Gaming_Linker.user.js"});
            }
            if (items.feedly && tab.url.match("^https:\/\/feedly\.com\/*")){
                chrome.tabs.executeScript(tabId, {file: "jquery-2.1.4.min.js"});
                chrome.tabs.executeScript(tabId, {file: "Youtube_Gaming_Feedly.user.js"});
            }
        });
    }
});
