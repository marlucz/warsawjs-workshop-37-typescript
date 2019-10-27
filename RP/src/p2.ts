import isLetter from "is-letter";

type A = Array<string | null>;

function p2(a: A): string {
  // [1,2,10] => ['(1) (2) (10)']

  if (a) {
    return a
      .filter(isLetter)
      .map((x: any) => `(${x})`)
      .join(" ");
  }

  return "";
}

console.log(p2(["a", "b", "def", "Bla", "z"]));
