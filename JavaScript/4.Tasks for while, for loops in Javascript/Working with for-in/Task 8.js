// Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'.
//  С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.

var obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
};

for (man in obj) {
    document.write(man + ' - зарплата ' + obj[man] + ' долларов' + '<br>');
}