// Даны переменные a и b. Проверьте, что a делится без остатка на b. 
// Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.

var a = Number(prompt("Введите первое число")),
    b = Number(prompt("Введите второе число"));

if (a % b == 0)
    alert("Делится нацело : " + a + " / " + b + " = " + a / b);
else
    alert("Делится с остатком : " + a + " / " + b + " = " + a % b + " где '" + a % b + "' - остаток от деления");