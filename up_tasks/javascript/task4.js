alert("Перевернуть данное число n (123 -> 321). Результат вывести на консоль. ");
var n = prompt("Введите число n: ", 123);
var b=0;
for(; n; n = Math.floor(n / 10)) {
    b *= 10;
    b += n % 10;
}
alert("Перевернутое число: "+b);