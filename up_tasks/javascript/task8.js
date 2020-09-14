alert("Создать класс Fridge, который наследуется от Machine. У Fridge есть приватное свойство food и публичные методы addFood(..) и getFood(..).)");
function Machine(power) {
    this._power = power;
    this._enabled = false;
    var self = this;
    this.enable = function() { self._enabled = true;
    alert("Холодильник включен!")};
    this.disable = function() { self._enabled = false; };
}
class Fridge extends Machine {
    #food = [];
    #numberofprod = this._power / 100;
    addFood() {
        if (this._enabled){
            if (this.#numberofprod > 0) {
                for (var i = 0; i < arguments.length; i++) {
                    if (this.#numberofprod > 0) {
                        this.#food.push(arguments[i]);
                        this.#numberofprod--;
                        alert("Добавлены " + arguments[i]);
                    }else{alert("Холодильник заполнен!");break;}
                }

            } else {
            alert("Холодильник заполнен!");
            }
        }else{
            alert("Холодильник выключен!");
        }
    }
    getFood() {
        return this.#food;
    }
}
var m = new Fridge(700);
m.addFood("картошка");
m.enable();
m.addFood("Макароны");
m.addFood("Огурцы");
m.addFood("помидоры", "сыр","грибы");
m.addFood("молоко", "яйца","салат");
alert(m.getFood());