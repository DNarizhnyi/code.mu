// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых. 

var num = 379; //may be any, or even like num = Number(prompt());
var result = Math.sqrt(num);
document.write("Результат, округленный до целых = " + result.toFixed()+'<br>');
document.write("Результат, округленный до десятых = " + result.toFixed(1)+'<br>');
document.write("Результат, округленный до сотых=  " + result.toFixed(2)+'<br>' );