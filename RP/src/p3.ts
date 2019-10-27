import isLetter from "is-letter";
import { StrictOmit, MarkRequired } from "ts-essentials";

type A = Array<string | null>;

type B = {
  a: A;
  x: number;
};

type C = {
  a: A;
  x?: number;
};

type CR = MarkRequired<C, "x">;

type D = StrictOmit<B, "x">;

const b: B = {
  a: ["a", "b", "def", "Bla", "z"],
  x: 2
};

const cr: CR = { a: [], x: 1 };

const d: D = {
  a: ["a", "b", "def", "Bla", "z"]
};

function p3(b: B): string {
  // [1,2,10] => ['(1) (2) (10)']

  if (b.a) {
    return b.a
      .filter(isLetter)
      .map((x: any) => `(${x})`)
      .slice(0, b.x)
      .join(" ");
  }

  return "";
}

console.log(p3(b));
