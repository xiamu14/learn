(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

function greeter(person) {
    return "hello," + person.firstName + "" + person.lastName;
}
var user = { firstName: "Jane", "lastName": "User" };
console.log(greeter(user));

})));
//# sourceMappingURL=library.js.map
