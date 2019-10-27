"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_letter_1 = __importDefault(require("is-letter"));
function p2(a) {
    // [1,2,10] => ['(1) (2) (10)']
    if (a) {
        return a
            .filter(is_letter_1.default)
            .map(function (x) { return "(" + x + ")"; })
            .join(" ");
    }
    return "";
}
console.log(p2(["a", "b", "def", "Bla", "z"]));
