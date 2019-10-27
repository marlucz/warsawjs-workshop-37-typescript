"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function p1(a) {
    // [1,2,10] => ['(1) (2) (10)']
    if (a) {
        return a.map(function (x) { return "(" + x + ")"; }).join(" ");
    }
    return "";
}
exports.p1 = p1;
