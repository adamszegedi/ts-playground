import houses from "./houses.json"

interface House {
  name: string
  planets: string|string[]
}

interface HouseWithID extends House {
  id: number;  
}

function findHouses(houses: string): HouseWithID[];
function findHouses(houses: string, filter: (house: House) => boolean): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(houses: House[], filter: (house: House) => boolean): HouseWithID[];

function findHouses(input: string|House[], filter?: (house: House) => boolean): HouseWithID[]{
  
  const houses: House[] = typeof input === "string" ? JSON.parse(input): input;

  const HousesWithId: HouseWithID[] = houses.map((element, index) => ({id:index, ...element}));

  return HousesWithId.filter(filter || (() => true));
}
  

console.log('json string', findHouses(JSON.stringify(houses)));
console.log('json string & filter', findHouses(JSON.stringify(houses), ({ name }) => name === 'Harkonnen'));
console.log('json object', findHouses(houses));
console.log('json object & filter', findHouses(houses, ({ name }) => name === 'Harkonnen'));