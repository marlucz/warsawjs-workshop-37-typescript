import isLetter from "is-letter";

type A = Array<string> | null;

export function p1(a: A): string {
  // [1,2,10] => ['(1) (2) (10)']

  if (a) {
    return a.map((x: any) => `(${x})`).join(" ");
  }

  return "";
}
