//В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

var num = prompt();

if (num > 1 && num <= 10)
    alert("First decade");
else if (num > 10 && num <= 20)
    alert("Second decade");
else if (num > 20 && num <= 31)
    alert("Third decade");
else
    alert("You should put something between 1 and 31!");