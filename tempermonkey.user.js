// ==UserScript==
// @name         Indiehacker.com Word Count
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Count how many word
// @author       Github@1c7
// @match        https://www.indiehackers.com/businesses/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var question_count = 0;
    var paragraph_count = 0;
    var word_count = 0;

    window.onload = function () {
        count();
        var container = document.createElement('div');
        container.id = 'indiehacker_read_word_count';
        container.style.cssText = `position: fixed;
top: 43%;
left: 0px;
background: rgba(0,0,0,0.5);
z-index: 1000;
padding: 10px 20px;
border-radius: 4px;
font-size:1.4rem;`;
        var intro = document.createElement('div');
        var name = document.createElement('div');
        var p = document.createElement('div');

        var introText = document.createTextNode(question_count + ' Question');
        var nameText = document.createTextNode(word_count + ' Word');
        var pText = document.createTextNode(paragraph_count + ' Paragraph');

        name.appendChild(nameText);
        intro.appendChild(introText);
        p.appendChild(pText);

        container.appendChild(intro);
        container.appendChild(p);
        container.appendChild(name);

        document.body.appendChild(container);
    };

    function count(){
        var interview = document.querySelector('.interview-body');
        var h2 = interview.querySelectorAll('h2');
        var p = interview.querySelectorAll('p');
        var total_word_count = 0;
        for(var i in p) {
            //console.log(p[i]);
            if (p[i].innerText !== undefined){
                total_word_count += p[i].innerText.split(' ').length;
            }

        }
        question_count = h2.length;
        paragraph_count = p.length;
        word_count = total_word_count;
    }
})();
