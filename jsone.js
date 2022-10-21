document.getElementById("nav-hamburger").checked=true;
function hideNav(){
    document.getElementById("nav-hamburger").checked=false;}

function palindromeCheck2(str) { 
    const nonAlphaNum = /[\W_]/g;
    let firstVersion= str.toLowerCase().replace(nonAlphaNum, '');
    let reversedVersion = firstVersion.split('').reverse().join('');
    return reversedVersion === firstVersion;}
//console.log(palindromeCheck2("car")) 
    let submitButtonEvent = document.getElementById("submitButton");
submitButtonEvent.addEventListener("click", function() {
    'use strict'; //you can't use undeclared variables
    var value = document.getElementById("inputString").value;
    var notification = document.getElementById("notification");
    var displayWord = document.getElementById("displayWord");
    if(palindromeCheck2(value)) {
    notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `is a palindrome`;
    displayWord.innerHTML =
    `Forwards: ` + value.toLowerCase().replace(/[\W_]/g, '') + "<br>" + `Backwards: ` + value.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');}
   else {notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `is not a palindrome`;
       displayWord.innerHTML = `Forwards: ` +value.toLowerCase().replace(/[W_]/g, '') + "<br>" + `Backwards: ` + value.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');}});

function convertToRoman(num){
    let romanNumeral='';
    while(num>0){
        if(num<4){
            romanNumeral +='I';
            num-=1;}
        else if(num==4){
            romanNumeral+='IV';
            num-=4;}
        else if(num>=5 && num<9){
            romanNumeral+='V';
            num-=5;}
            else if(num==9){
                romanNumeral+='IX';
                num-=9;}
        else if(num>=10 && num<40){
            romanNumeral+='X';
            num-=10;}
        else if(num>=40 && num<50){
            romanNumeral+='XL';
            num-=40;}
        else if(num>=50 && num<90){
                romanNumeral+='L';
                num-=50;}
        else if(num>=90 && num<100){
            romanNumeral+='XC';
            num-=90;}
        else if(num>=100 && num<400){
            romanNumeral+='C';
            num-=100;}
        else if(num>=400 && num<500){
            romanNumeral+='CD';
            num-=400; }
        else if(num>=500 && num<900){
            romanNumeral+='D';
            num-=500;}
        else if(num>=900 && num<1000){
            romanNumeral+='CM';
            num-=900;}
        else if(num>=1000){
            romanNumeral+='M';
            num-=1000;}
            else{romanNumeral+='Error';
            num-=1;}}
    return romanNumeral;}
//console.log(convertToRoman(1450))
let submitButtonEventa = document.getElementById("submitButtona");
submitButtonEventa.addEventListener("click", function() {
    'use strict'; //you can't use undeclared variables
    var valuea = document.getElementById("inputStringa").value;
    var notificationa = document.getElementById("notificationa");
 if(convertToRoman(valuea)) {
    notificationa.innerHTML=convertToRoman(valuea); }
   else{ notificationa.innerHTML= `Value not appropriate`; }});

function rott(str){
    let decodedResult='';
    let alphabetStart='abcdefghijklm'.toUpperCase().toLowerCase();
    let alphabetEnd='nopqrstuvwxyz'.toUpperCase().toLowerCase();
   for(let i=0;i<str.length;i+=1){
    let letterToDecode=str[i];
    if (alphabetStart.indexOf(letterToDecode)>=0){
        decodedResult+=alphabetEnd[alphabetStart.indexOf(letterToDecode)]; }
    else if(alphabetEnd.indexOf(letterToDecode)>=0){
        decodedResult+=alphabetStart[alphabetEnd.indexOf(letterToDecode)]; }
    else{decodedResult+=letterToDecode;}}
   return decodedResult;}
//let result=rot13('SERR PBQR PNZC')
//console.log(result)
let submitButtonEventb = document.getElementById("submitButtonb");
submitButtonEventb.addEventListener("click", function() {
    'use strict'; //you can't use undeclared variables
    var valueb = document.getElementById("inputStringb").value;
    var notificationb = document.getElementById("notificationb");
    if(rott(valueb)) {
    notificationb.innerHTML=rott(valueb);}
    else {notificationb.innerHTML='Text not appropriate'; }});