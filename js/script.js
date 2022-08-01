'use strict'
var words = [{
   id: 1,

   language: 'Январь',
   description: 'Первый месяц года в юлианском и григорианском календарях, одиннадцатый месяц староримского года, начинавшегося до реформы Цезаря с марта. '
}, {

   language: 'Февраль',
   description: 'Второй месяц в юлианском и григорианском календарях, двенадцатый месяц староримского года, начинавшегося до реформы Цезаря с марта. '
}, {
   language: 'Март',
   description: 'Третий месяц года в юлианском и григорианском календарях, первый месяц староримского года, начинавшегося до реформы Цезаря с марта. '
}, {

   language: 'Апрель',
   description: 'Четвёртый месяц года в юлианском и григорианском календарях, второй месяц староримского года, начинавшегося до реформы Цезаря с марта.'
}, {

   language: 'Май',
   description: 'Пятый месяц года в юлианском и григорианском календарях, третий месяц староримского года, начинавшегося до реформы Цезаря с марта.'
}, {

   language: 'Июнь',
   description: 'шестой месяц года в юлианском и григорианском календарях, четвёртый месяц староримского года, начинавшегося до реформы Цезаря с марта.   '
}, {

   language: 'Июль',
   description: 'Седьмой месяц года, расположенный между июнем и августом, в юлианском и григорианском календарях, пятый месяц староримского года, начинавшегося до реформы Юлия Цезаря с марта. '
}, {

   language: 'Август',
   description: 'восьмой месяц года в юлианском и григорианском календарях, шестой месяц староримского года, начинавшегося до реформы Цезаря с марта.'
}, {

   language: 'Сентябрь',
   description: 'Девятый месяц григорианского календаря, один из четырёх григорианских месяцев с тридцатью днями. Сентябрь — начало осени в северном полушарии Земли и начало весны в южном. '
}, {

   language: 'Октябрь',
   description: 'десятый месяц Григорианского календаря. Восьмой месяц староримского года, начинавшегося до реформы Цезаря с марта. Один из семи месяцев длиной в 31 день.'
}, {

   language: 'Ноябрь',
   description: 'Одиннадцатый месяц Григорианского календаря. Девятый месяц староримского года, начинавшегося до реформы Цезаря с марта..'
}, {

   language: 'Декабрь',
   description: 'Двенадцатый месяц григорианского календаря. Десятый месяц староримского года, начинавшегося до реформы Цезаря с марта.'
}];

let body = document.body,
   card = document.getElementById('card'),
   cardWord = document.getElementById('word'),
   cardLang = document.getElementById('language'),
   cardDesc = document.getElementById('description'),
   bgWordBehind = document.getElementById('behind'),
   bgWordInfront = document.getElementById('infront'),
   lastBtn = document.getElementById('last'),
   nextBtn = document.getElementById('next'),
   i = 0,
   numWords = words.length,
   cardUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/380275/lightpaperfibers.png',
   cardImg = new Image();

bgWordBehind.textContent = words[i].word;
bgWordInfront.textContent = words[i].word;
cardWord.textContent = words[i].word;
cardLang.textContent = words[i].language;
cardDesc.textContent = words[i].description;

cardImg.onload = function () {
   card.style.background = "#FFF url(" + cardUrl + ") repeat fixed center";
}
cardImg.src = cardUrl;

document.onkeydown = checkKey;
function checkKey(e) {
   e = e || window.event;
   if (e.keyCode == '37') {
      goLeft();
   } else if (e.keyCode == '39') {
      goRight();
   }
}
lastBtn.addEventListener("click", function (e) {
   goLeft();
}, false);
nextBtn.addEventListener("click", function (e) {
   goRight();
}, false);

function goLeft() {
   if (i > 0)
      i--;
   else
      i = numWords - 1;
   changeCard();
}

function goRight() {
   if (i < numWords - 1)
      i++;
   else
      i = 0;
   changeCard();
}

function changeCard() {
   setTimeout(loadBG, 400);
   setTimeout(loadCard, 900);
   card.className += " fadeout";
   body.className += " fadeout";
}

function loadBG() {
   bgWordBehind.textContent = words[i].word;
   bgWordInfront.textContent = words[i].word;
   removeClass(body, "fadeout");
}

function loadCard() {
   removeClass(card, "fadeout");
   cardWord.textContent = words[i].word;
   cardLang.textContent = words[i].language;
   cardDesc.textContent = words[i].description;
}

//Function to easily remove classes, it takes two parameters: 
//1. The element to have a class removed
//2. The name of the class we want to remove from our element
function removeClass(el, _class) {
   //Check if the element exists, 
   //if it has a class,
   //& specifically if it has the class we want to remove
   if (el && el.className && el.className.indexOf(_class) >= 0) {
      //Find the class to be removed (including any white space around it) using a regex search pattern
      var pattern = new RegExp('\\s*' + _class + '\\s*');
      //Replace that search with white space, therefore removing the class 
      el.className = el.className.replace(pattern, ' ');
   }
}