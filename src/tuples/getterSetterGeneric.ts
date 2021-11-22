
type Getter<T> = ()=>T;
type Setter<T> = (newValue: T)=>void;

function UseState<T>(variable: T):[Getter<T>, Setter<T>]{
  let x = variable;
  return [
    ()=>x,
    (value) => {x = value}
  ]
}

const [numVariableGetter, numVariableSetter] = UseState(0);

console.log(numVariableGetter());
numVariableSetter(10);
console.log(numVariableGetter());

const [stringVariableGetter, stringVariableSetter] = UseState("Hello");
console.log(stringVariableGetter())
stringVariableSetter('World')
console.log(stringVariableGetter())