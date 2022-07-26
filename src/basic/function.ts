
// return type infers best practice not to override it
export function addNumbers(a: number, b: number) {
  return a + b;
}

// const addString: (str1: string, str2: string) => string
export const addString = (str1: string, str2 = " ") => {
  return `${str1} ${str2}`;
};

// you can collect leftover parameters and setup the type for them
export function greetEveryBody(greeter: string, ...people: string[]) {
  return `${greeter}, ${people.join(" ,")} `;
}

// double check for JS runtime if the input parameter exists
export function getName(user: { first: string, last: string }) {
  return `${user?.first ?? 'firstname placeholder'} ${user?.last ?? 'lastname placeholder'}`;
}

// should avoid default export
// https://basarat.gitbook.io/typescript/main-1/defaultisbad