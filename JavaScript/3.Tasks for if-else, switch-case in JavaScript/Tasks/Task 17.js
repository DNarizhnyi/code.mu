// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

var num = Number(prompt());

switch (num) {
    case 1:
    case 2:
    case 12:
        alert("It is winter");
        break;

    case 3:
    case 4:
    case 5:
        alert("It is spring");
        break;

    case 6:
    case 7:
    case 8:
        alert("It is summer");
        break;

    case 9:
    case 10:
    case 11:
        alert("It is fall");
        break;

}
// Second way by using "if"

// var num = Number(prompt());

// if (month == 12 || month <= 2) {
//     var result = 'Winter';
// }
// if (month >= 3 && month <= 5) {
//     result = 'Spring';
// }
// if (month >= 6 && month <= 8) {
//     result = 'Summer';
// }
// if (month >= 9 && month <= 11) {
//     result = 'Fall';
// }
// alert(result);