// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.


var arr = [1,2,3,4,5,6,7,8,9];
var str = '';

for (var i = 0 ; i<arr.length;i++){
    str += ("-"+arr[i]);
}
document.write(str +'-');