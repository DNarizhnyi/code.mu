// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

for (var i = 0 ; i<days.length;i++){
    if (days[i] == 'Saturday' || days[i] == 'Sunday'){
        document.write('<b>'+days[i]+'</b>'+'<br>')
    }
    else 
    document.write(days[i] + '<br>');
}