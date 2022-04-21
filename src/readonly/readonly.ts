interface Gecko {
  readonly name: string;
  breed: string;
}

function makeGecko(name: string, breed: string): Gecko {
  return { name, breed };
}

const rango = makeGecko("Rango", "blue");


// (property) breed: any
// Cannot assign to 'breed' because it is a read-only property.ts(2540)
// rango.name = "hello";


function makeImmutable(gecko: Gecko): Readonly<Gecko> {
  return gecko;
}

const rangoImmutable = makeImmutable(rango);


// (property) breed: any
// Cannot assign to 'breed' because it is a read-only property.ts(2540)
// rangoImmutable.breed = "green";

console.log(rango);
console.log(rangoImmutable);

function makeCoordinate(a: number, b: number, c: number): Readonly<[number, number, number]> {
  return [a, b, c];
}

const x1 = makeCoordinate(1, 2, 3);

// Cannot assign to '0' because it is a read-only property.
// x1[0] = 3;
console.log(x1);

const x2 = [1, 3, 6] as const;

// Cannot assign to '2' because it is a read-only property.
// x2[2] = 3;

console.log(x2);

const bob = { name: "Bob", age: 32 } as const;

// Cannot assign to 'name' because it is a read-only property.
// bob.name = "Tim";

console.log(bob);