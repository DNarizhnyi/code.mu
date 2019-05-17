// Переменная num может принимать 4 значения: 1, 2, 3 или 4.
// Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

var num = prompt();
var result;


switch (num) {
    case '1':
        result = 'Winter';
        break;
    case '2':
        result = 'Spring';
        break;
    case '3':
        result = 'Summer';
        break;
    case '4':
        result = 'Fall';
        break;
    default:
        alert("Enter only digits 1,2,3 or 4");
        break;
}
