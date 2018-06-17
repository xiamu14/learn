var Man = /** @class */ (function () {
    function Man(name, age) {
        this.name = name;
        this.age = age;
    }
    Man.prototype.say = function () {
        console.log("I'm " + this.name);
    };
    return Man;
}());
var batman = new Man('batman', 36);
batman.say();
