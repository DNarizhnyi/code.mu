// Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'. 

var num = prompt();
var str1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
var str2 = Number(num[3]) + Number(num[4]) + Number(num[5]);
if (str1 == str2)
    alert("Yes");
else alert("No");