// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day.

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var currentDay = prompt();


for (var i = 0; i < days.length; i++) {
    if (days[i] == currentDay) 
        document.write('<i><b>' + days[i] + '</b></i>' + '<br>');
     else 
        document.write(days[i]+'<br>');
    
}