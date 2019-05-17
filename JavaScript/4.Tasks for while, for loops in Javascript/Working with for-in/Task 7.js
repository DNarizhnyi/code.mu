// Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.

	// var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}

var obj = {green: 'зеленый', red:'красный', blue:'голубой'};

for (color in obj){
    document.write(color +'<br>');
    document.write(obj[color]+'<br>');
}