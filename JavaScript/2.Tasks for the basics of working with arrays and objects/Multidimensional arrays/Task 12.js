/* Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то), 
 а в переменной day - номер дня. Выведите словом день недели, соответствующий переменным lang и day.
 То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'. */


var arr = {
    'ru': ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    'en': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
};

var lang = 'ru',
    day = 3;
alert(arr[lang][day-1]);