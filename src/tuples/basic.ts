type ThreeDCoordinates = [number, number, number];

function create3DCordinate(x: number, y: number, z:number): ThreeDCoordinates {
  return [x,y,z]
}

function cordinateAdder(cordinate1:ThreeDCoordinates, cordinate2: ThreeDCoordinates): ThreeDCoordinates {
  return [cordinate1[0]+cordinate2[0], cordinate1[1]+cordinate2[1], cordinate1[2]+cordinate2[2]]
}

const cordinate1 = create3DCordinate(1, 3, 8);
const cordinate2 = create3DCordinate(2,89, 2);

const sumOfCordinate = cordinateAdder(cordinate1, cordinate2);

console.log(sumOfCordinate);
