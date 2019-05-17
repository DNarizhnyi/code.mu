// Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

var arr = [12, 15, 20, 25, 59, 79],
    average, sum = 0;

for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
average = sum / arr.length;

alert(average);