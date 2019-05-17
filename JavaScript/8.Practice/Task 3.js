// Дано число, например, 3751. Отсортируйте цифры в нем (сделайте из него 1357) не используя цикл. 

var num = 3751;
var numStr = num.toString();
var result = numStr.split('').sort().join("");

alert(result);