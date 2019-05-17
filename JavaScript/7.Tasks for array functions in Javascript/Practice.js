// Пусть дан массив ['1', '2', '3', '4', '5', '6']. Давайте сделаем из него строку '16-25-34'. Для решения задачи используем комбинацию методов shift, pop, push и join

var arr = ['1', '2', '3', '4', '5', '6'];
var result = [];

while (arr.length >0){
    var first = arr.shift();
    var last = arr.pop();
    var str = first+last;
    result.push(str);
}
result = result.join("-");
document.write(result);