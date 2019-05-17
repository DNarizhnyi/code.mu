// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

var num = 587,
    sqrt = Math.sqrt(num),
    obj = {
        floor: Math.floor(sqrt),
        ceil: Math.ceil(sqrt)
    };


alert(obj.floor);
alert(obj.ceil);