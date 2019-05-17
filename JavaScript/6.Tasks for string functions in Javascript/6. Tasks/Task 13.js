// Преобразуйте первую букву каждого слова строки в верхний регистр.

var str = 'я учу javascript!';
var result = str.split(" ");

for (var i = 0; i < result.length; i++) {
    result[i] = result[i].slice(0, 1).toUpperCase() + result[i].slice(1);
}
alert(result.join(" "));