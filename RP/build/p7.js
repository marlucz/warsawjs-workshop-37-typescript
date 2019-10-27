"use strict";
var Y = /** @class */ (function () {
    function Y() {
    }
    Y.prototype.minus5 = function (x) {
        return x - 5;
    };
    Y.prototype.plus5 = function (x) {
        return x + 5;
    };
    return Y;
}());
var o = new Y();
function f(x) {
    console.log(x.plus5(10));
}
f(o);
