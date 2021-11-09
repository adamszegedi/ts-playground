// types get infered from variables
const username = 'Adam';
const fullName = username + 'Szegedi';
const loggedIn = true;
const listOfNames = fullName.split(" ");

// genereate interface if the used type is more like an object
interface Person {
  firstname: string,
  surename: string,
  cool?: boolean
}

// 
const me: Person = { firstname: "Adam", surename: "Szegedi", cool: true };

const meWithoutOptional: Person = { firstname: "Adam", surename: "Szegedi" };


// basic diffrence between a record and a map is that tha Map uses the es6 MAP 
const ids: Record<number, string> = {
  10: "a",
  20: "b"
}
// You cann add these key-value pairs without any error
ids[30] = "c";


const mapOfId = new Map<number, string>();
mapOfId.set(10, "ten")
mapOfId.set(20, "twenty")
mapOfId.set(30, "thirty")
const nameOf10 = mapOfId.get(10);

if (nameOf10) {
  // eliminated undefined by checking if nameOf10 is thurthy
  nameOf10
}

// the for loop i variable also infers the type 
for (let i = 0; i < 10; i++) {
  console.log(i)
}

[1, 2, 3].forEach((x) => console.log(x * 2));

// the new array also infers the type number[]
const multipledByTen = [4, 5].map((x) => x * 10)
