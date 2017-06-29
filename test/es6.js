var obj = new Proxy({}, {
    get: function(target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    },
    set: function(target, key, value, receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
    }
});

obj.count = 1

++obj.count

// 2017年6月10日
//
function Person(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
}

var first = new Person('lisi', 12, 'male')
var second = new Person('li', 23, 'female')

Person.prototype.getName = function() {
        return this.name
    }
    //
console.log(second.getName())

// 2017年6月29日
//
// 解构赋值
//
let x = 1,
    y = 2;

[x, y] = [y, x]
console.log(x);