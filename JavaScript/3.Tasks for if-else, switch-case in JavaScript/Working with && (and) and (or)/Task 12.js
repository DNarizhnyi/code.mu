// Если переменная a равна нулю или равна двум, 
// то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. 
// Проверьте работу скрипта при a, равном 5, 0, -3, 2.

var a = prompt();
if (a == 0 || a == 2) {
    a += 7;
} else {
    a /= 10;
}

alert(a);