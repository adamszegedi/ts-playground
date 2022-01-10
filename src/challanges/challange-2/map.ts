import {array_number, array_text} from "./data";

function myMap<T, R>(array: T[], fn: (v:T)=> R): R[]{
  return array.reduce<R[]>((a, v)=> [...a, fn(v)], []);
}

console.log(myMap(array_number, (v)=>v*-1));
console.log(myMap(array_number, v => v.toString()));
console.log(myMap(array_text, v => v.toUpperCase()));