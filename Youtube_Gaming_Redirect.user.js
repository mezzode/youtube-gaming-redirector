// ==UserScript==
// @name        Youtube Gaming Redirect
// @namespace   numuon.me
// @description Redirects Youtube to Youtube Gaming.
// @include     https://www.youtube.com*
// @version     1
// @grant       none
// ==/UserScript==

window.location.replace(window.location.href.replace("www.youtube.com","gaming.youtube.com"));
