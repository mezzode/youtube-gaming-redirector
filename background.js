chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete'){
        chrome.storage.sync.get({
            redirect: true,
            linker: true,
            feedly: true
        }, function(items) {
            if (items.redirect) {
                chrome.tabs.executeScript(null, {file: "Youtube_Gaming_Redirect.user.js"});
            }
            if (items.linker) {
                chrome.tabs.executeScript(null, {file: "Youtube_Gaming_Linker.user.js"});
            }
            if (items.feedly){
                chrome.tabs.executeScript(null, {file: "jquery-2.1.4.min.js"});
                chrome.tabs.executeScript(null, {file: "Youtube_Gaming_Feedly.user.js"});
            }
        });
    }
});
