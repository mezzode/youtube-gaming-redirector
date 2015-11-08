// ==UserScript==
// @name        Youtube Gaming Feedly
// @namespace   numuon.me
// @description Change Youtube links in Feedly to Youtube Gaming links.
// @include     https://feedly.com/*
// @version     1.1
// @grant       none
// @require     http://code.jquery.com/jquery-1.9.1.min.js
// ==/UserScript==

$(document).ready(function() {
    window.setInterval(function() {
        $('a').each(function(i, thisLink) {
            thisLink.href = thisLink.href.replace('www.youtube.com/watch?','gaming.youtube.com/watch?');
        });
    }, 500);
});
