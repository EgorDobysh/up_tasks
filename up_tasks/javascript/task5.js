alert("Дан числовой массив A. Нужно внести элементы > 0 в массив В, элементы < 0 в массив С. Вывести на консоль полученные массивы.");
let mas = [];
var n = prompt("Введите количество элементов: ", 0);
for(var i = 0; i < n; i++){
    mas.push(prompt("Введите элементы: ", 1));
}
let mas1 = [];
let mas2 = [];
for(i = 0; i < n; i++){
    if(mas[i] > 0){
        mas1.push(mas[i]);
    }
    else if(mas[i] < 0){
        mas2.push(mas[i]);
    }
}
alert("Массив 1: "+mas1);
alert("Массив 2: "+mas2);