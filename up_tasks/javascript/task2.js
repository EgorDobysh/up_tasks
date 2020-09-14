alert("Проверить, является ли данное число простым. Вывести на консоль true либо false.")
var n=prompt("Введите число :",7);
var temp=true;
for(var i=2;i<=Math.round(Math.sqrt(n));i++){
    if(n%i===0){
        temp=false;
        break;
    }
}
if(temp){
    alert("Число "+n+" простое");
}else{
    alert("Число "+n+" составное");
}