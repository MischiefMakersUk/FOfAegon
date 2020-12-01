// ==UserScript==
// @name         Fuck off fAegon
// @namespace    www.mischiefmakers.uk
// @version      0.1
// @description  replaces fAegon with Young Griff on the asoiaf subreddit
// @author       Zaphod,he's just like, you know, this guy
// @match        https://www.reddit.com/r/asoiaf/*
// @grant        none
// ==/UserScript==

var els = document.getElementsByTagName("*");
for(var i = 0, l = els.length; i < l; i++) {
  var el = els[i];
  el.innerHTML = el.innerHTML.replace(/faegon/gi, 'Young Griff');
}