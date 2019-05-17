// Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.

var str = prompt();
var splitted = str.split("_");

for (var i = 1; i < splitted.length; i++) {
    splitted[i] = splitted[i].slice(0, 1).toUpperCase() + splitted[i].slice(1);
}

alert(splitted.join(""));