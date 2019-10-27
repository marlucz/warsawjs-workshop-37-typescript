"use strict";
function p1(a) {
    // [1,2,10] => ['(1) (2) (10)']
    if (a)
        return a.map(function (x) { return "(" + x + ")"; }).join(" ");
}
console.log(p1([1, 20, 15]));
