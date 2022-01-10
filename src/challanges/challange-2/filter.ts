import {array_number, array_text} from "./data";

function filter<T>(array: T[], fn: (v: T) => boolean): T[]{
  return array.reduce<T[]>(
    (a, v) => fn(v) ? [...a, v] : a, []);
}


console.log(filter(array_number, (v) => Boolean(v%2) ));
console.log(filter(array_text, (v) => v.startsWith("a") ));