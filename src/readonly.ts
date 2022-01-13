interface Cat {
  name: string, 
  readonly breed: string
}

const makeCat = (name: string, breed: string): Cat => {
  return {name, breed};
};

const cat = makeCat("Bob", "merlot");
console.log(cat);
cat.name = "Thomas";

// property Cat.breed: any
// Cannot assign to 'breed' because it is a read-only property.ts(2540)
// cat.breed = "black";

console.log(cat);

const makeReadonlyCat = (name: string, breed: string): Readonly<Cat> => {
  return {name, breed};
};

const readonlyCat = makeReadonlyCat("Bob", "white");
// Cannot assign to 'name' because it is a read-only property.ts(2540)
// readonlyCat.name = "merlot";
// Cannot assign to 'breed' because it is a read-only property.ts(2540)
// readonlyCat.breed = "merlot";
console.log(readonlyCat);


const favNumbers = [1,2,3];
favNumbers.push(2);

const favNumbersImmutable = [1,2,3] as const;
//this does not workProperty 'push' does not exist on type 'readonly [1, 2, 3]'.ts(2339)
//favNumbersImmutable.push(2); 
// Cannot assign to '2' because it is a read-only property.ts(2540)
// favNumbersImmutable[2] = 12;
console.log(favNumbersImmutable);

interface Cordinate {
  x: number,
  y: number
}

const createCordinate = (x: number, y: number): Readonly<Cordinate> => {
  return {x, y};
};

const cordinate_1 = createCordinate(2,3);
console.log(cordinate_1);