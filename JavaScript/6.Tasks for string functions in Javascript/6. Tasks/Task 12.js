// Преобразуйте первую букву строки в верхний регистр.

var str = "test stRinGG";
var newStr = str.slice(0, 1).toUpperCase() + str.slice(1);

alert(newStr);