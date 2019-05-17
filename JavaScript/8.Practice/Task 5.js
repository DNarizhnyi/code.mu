// Проверьте, что строка заканчивается на .html.

var str = prompt();

if (str.substr(-5) == ".html") {
    alert("Заканчивается на .html");
} else {
    alert("Не заканчивается на .html");
}