// Проверьте, что строка начинается на http://.

var string = prompt();

if (string.substr(0, 7) == "http://") {
    alert("Да, начинается с http://");
} else {
    alert("Начинается с других символов");
}