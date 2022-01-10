import {array_number, array_text} from "./data";

function forEach<T>(a: T[], fn: (x: T) => void): void{
  a.reduce<void>((_a, v) => fn(v), undefined);
}

forEach(array_number, console.log);
forEach(array_text, console.log);