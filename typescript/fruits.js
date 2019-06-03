/**
 * 定义一种底层数据类型
 *
 */
var fruits = [
    {
        iid: 0,
        desc: "苹果",
        endValue: 1
    },
    {
        iid: 1,
        desc: "橘子",
        endValue: 2
    },
    {
        iid: 2,
        desc: "桃花",
        endValue: 3
    }
];
var Enum = /** @class */ (function () {
    /**
     * 定义具有多值的枚举属性类
     * @param data
     */
    function Enum(data) {
        this.data = data;
    }
    /**
     * 获取数组中此键名的值组成的数组
     * @param key
     */
    Enum.prototype.getValArr = function (key) {
        var result = this.data.map(function (item) { return item[key]; });
        return result;
    };
    /**
     * 根据特定的 key value 获取到数组子项
     * @param obj key - val
     */
    Enum.prototype.getItemByObj = function (obj) {
        var result = {};
        this.data.forEach(function (item) {
            if ((item[obj.key] === obj.val)) {
                result = item;
                return true;
            }
        });
        return result;
    };
    return Enum;
}());
var fruitsEnum = new Enum(fruits);
console.log(fruitsEnum.getValArr("iid"));
console.log(fruitsEnum.getItemByObj({ key: "iid", val: 1 }));
