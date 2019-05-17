/* Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. 
Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, а второй - по-английски. 
Выведите с помощью этого массива понедельник по-русски и среду по английски (пусть понедельник - это нулевой день). */


var arr = {
    'ru': ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    'en': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
};

alert('Понедельник по-русски ' + arr['ru'][0]);
alert('Среда по-английски ' + arr['en'][2]);