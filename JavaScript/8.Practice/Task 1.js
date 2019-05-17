// Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения. 

var str = "я люблю JS";
str = str.split("");
str[0] = str[0].toUpperCase();
var result = str.join("");
alert(result);

//

var str1 = prompt();
str1 = str1[0].toUpperCase() + str1.substr(1);

alert(str1);