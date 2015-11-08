// ==UserScript==
// @name        Youtube Gaming Linker
// @namespace   numuon.me
// @description Change all Youtube links to Youtube Gaming links.
// @exclude     https://www.youtube.com/*
// @version     1
// @grant       none
// ==/UserScript==

var links,thisLink;
links = document.evaluate("//a[@href]",
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null);
for (var i=0;i<links.snapshotLength;i++) {
    var thisLink = links.snapshotItem(i);
    thisLink.href = thisLink.href.replace('www.youtube.com','gaming.youtube.com');
}
