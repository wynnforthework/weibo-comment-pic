// ==UserScript==
// @name         微博评论图片下载
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*.weibo.com/*
// @match        https://*.weibo.com/*
// @match        https://m.weibo.cn/*
// @grant        none
// @require             http://ajax.aspnetcdn.com/ajax/jquery/jquery-1.7.2.js
// ==/UserScript==
var a = 0;
window.setInterval(function(){
    var n = $('.comment-con-img')
    var l = n.length;
    var ind = a++;
    if(ind<l){
        var m = n[ind];
        m.click();
        var x = $(".pswp__zoom-wrap img").eq(1).attr("src");
        console.log(x)
        var self = this;
        setTimeout(function () {
            $('.pswp__button--close').click();
        }, 1000);
    } else {
        a--;
        var h = $(document).height()-$(window).height();
        $(document).scrollTop(h);
    }
},2000);