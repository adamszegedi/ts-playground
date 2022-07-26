const text = "Lorem ipsum dolorem";

// you can pass a generic type and apply to the value and the function paramater aswell
function printToFile<T>(text: T, fn: (x: T) => void) {
  fn(text);
}

function printer(text: string) {
  console.log(text);
}

// this is how you should call a function parameter with generic type
printToFile<string>(text, printer);

// same principle as before just the first parameter is a list now
// also the returned list will be type[]
function Mutator<type>(data: type[], fn: (x: type) => type) {
  return data.map((x) => fn(x));
}

const original = [1, 2, 3];
const mutated = Mutator<number>(original, (x) => x * 3);

console.log("the original: " + original);
console.log("the mutated: " + mutated);

const textOriginal = ["alpha", "beta", "gamma"];

const mutatedText = Mutator(textOriginal, (x) => x.toUpperCase());
console.log("original text " + textOriginal);
console.log("mutated text: " + mutatedText);

// the return type of a function also infered later on
function multiplierFactory(by: number) {
  return (x: number) => x * by;
}

const double = multiplierFactory(2);

// here doubled will be number[] what an awsome feature
const doubled = [1, 2, 3, 4].map((x) => double(x));
console.log(doubled);