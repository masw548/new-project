'use strict';



var output = document.getElementById('box');
var btn = document.getElementById('btn')

btn.addEventListener("click", function () {

    var num = Math.floor(Math.random(0,18) * 19);
    console.log(num);
    

    if (num == 0) {
        output.innerHTML = "رز بحمص مع خيار بلبن";
    } else if (num == 1) {
        output.innerHTML = "يقطين يابس مع سلطة خس";
    } else if (num == 2) {
        output.innerHTML = "ورق دوالي";
    } else if (num == 3) {
        output.innerHTML = "الاكلة المقرفة";
    } else if (num == 4) {
        output.innerHTML = "مكسيكي";
    } else if (num == 5) {
        output.innerHTML = "برغل بحمص ";
    } else if (num == 6) {
        output.innerHTML = "مجدرة رز مع خيار بلبن";
    } else if (num == 7) {
        output.innerHTML = "شاورما";
    } else if (num == 8) {
        output.innerHTML = "فطاير";
    } else if (num == 9) {
        output.innerHTML = "فلافل";
    } else if (num == 10) {
        output.innerHTML = "ملوخية";
    } else if (num == 11) {
        output.innerHTML = "شاكرية";
    } else if (num == 12) {
        output.innerHTML = "مقلوبة";
    } else if (num == 13) {
        output.innerHTML = "رز ببازيلا";
    } else if (num == 14) {
        output.innerHTML = "مجدرة رز";
    } else if (num == 15) {
        output.innerHTML = "مجدرة برغل";
    } else if (num == 16) {
        output.innerHTML = "فاهيتا";
    } else if (num == 17) {
        output.innerHTML = "همبرغر";
    } else if (num == 18) {
           output.innerHTML = "شيش برك";
       }    
});
