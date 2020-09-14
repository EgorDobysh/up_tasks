alert("Реализовать функцию от двух аргументов, которая возвращает true, если входные строки являются анаграммами, и false в противном случае. Анаграммами называются строки, которые состоят из одинаковых символов, но возможно в другом порядке. Например, ‘melon’ и ‘lemon’ являются анаграммами, а ‘ball’ и ‘lab’ не являются, потому что в них разное количество букв ‘l’.")
let str1=prompt("Введите первую строку: ", "");
let str2=prompt("Введите вторую строку: ", "");
function func(a, b) {
    if (a.length === b.length) {
        let mas1 = a.split('').sort();
        let mas2 = b.split('').sort();
        for (let i = 0; i < a.length; i++) {
            if (mas1[i] !== mas2[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
}

alert(func(str1,str2));