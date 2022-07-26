type DescribeableFunction = {
  description: string,
  (someArg: number): boolean
}

function onlyProperFunctionPassable(fn: DescribeableFunction) {
  const returnValue = fn(6);
  return `The function value was ${returnValue} and the function description is ${fn.description}`;
}

const isOdd = (i: number): boolean => {
  return !(i % 2);
};
isOdd.description = "Check if the given number is Odd;";


const callSigniture = () => {
  const x = onlyProperFunctionPassable(isOdd);
  console.log(x);
};

export default callSigniture;

if (typeof require !== 'undefined' && require.main === module) {
  callSigniture();
}