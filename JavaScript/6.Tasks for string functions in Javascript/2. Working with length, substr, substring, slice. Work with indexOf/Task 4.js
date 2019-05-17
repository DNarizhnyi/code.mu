// Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

var str = "я учу javascript!",
    substr = str.substr(2, 3),
    substring = str.substring(2, 5),
    slice = str.slice(2, 5);

alert("Substr = " + substr); // FROM : position number 2. HOW MUCH : 3
alert("Substring = " + substring); // FROM : position number 2. UNTIL WHAT SYMBOL : 5
alert("Slice = " + slice); // FROM : position number 2. UNTIL WHAT SYMBOL : 5