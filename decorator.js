var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decorateArmour(target, key, descriptor) {
    var method = descriptor.value;
    var moreDef = 100;
    var ret;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args[0] += moreDef;
        ret = method.apply(target, args);
        return ret;
    };
    return descriptor;
}
var Man = /** @class */ (function () {
    function Man(def, atk, hp) {
        if (def === void 0) { def = 2; }
        if (atk === void 0) { atk = 3; }
        if (hp === void 0) { hp = 3; }
        this.init(def, atk, hp);
    }
    Man.prototype.init = function (def, atk, hp) {
        Man.def = def; // 防御值
        Man.atk = atk; // 攻击力
        Man.hp = hp; // 血量
    };
    Man.prototype.toString = function () {
        return "\u9632\u5FA1\u529B:" + Man.def + ",\u653B\u51FB\u529B:" + Man.atk + ",\u8840\u91CF:" + Man.hp;
    };
    __decorate([
        decorateArmour
    ], Man.prototype, "init");
    return Man;
}());
var tony = new Man();
console.log("\u5F53\u524D\u72B6\u6001 ===> " + tony);
// 输出：当前状态 ===> 防御力:102,攻击力:3,血量:3
