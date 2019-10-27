"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_letter_1 = __importDefault(require("is-letter"));
var b = {
    a: ["a", "b", "def", "Bla", "z"],
    x: 2
};
var cr = { a: [], x: 1 };
var d = {
    a: ["a", "b", "def", "Bla", "z"]
};
function p3(b) {
    // [1,2,10] => ['(1) (2) (10)']
    if (b.a) {
        return b.a
            .filter(is_letter_1.default)
            .map(function (x) { return "(" + x + ")"; })
            .slice(0, b.x)
            .join(" ");
    }
    return "";
}
console.log(p3(b));
