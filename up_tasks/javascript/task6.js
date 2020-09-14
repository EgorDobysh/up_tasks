alert("Дан числовой массив. Нужно найти количество повторений каждого элемента в массиве и вывести результат на консоль. Например, для массива [ 1, 2, 1, 2, 3.14, 4, 2, 1] должно быть выведено:\n" +
    "1 - 3, 2 - 3, 3.14 - 1, 4 - 1 (необязательно в этом порядке)")
var massiv = [];
const n1 = prompt("Введите количество элементов: ", 0);
for(let i = 0; i < n1; i++){
    massiv.push(prompt("Введите элементы: ", 0));
}
function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}
var str="";
let result=unique(massiv);
for (var i=0;i<result.length;i++) {
    var temp = 0;
    for (var j = 0; j < massiv.length; j++) {
        if(result[i]===massiv[j]){
            temp++;
        }
    }
    str+=result[i]+" - "+temp+"      ";
}
alert(str);
