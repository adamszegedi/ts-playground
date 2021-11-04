type Greeter = { name: string, polite: boolean }
type PoliteGreet = { message: string };
type UnpoliteGreet = string;

function greet(name: string): UnpoliteGreet;
function greet(name: Greeter): PoliteGreet;
function greet(x: string | Greeter): UnpoliteGreet | PoliteGreet {
  if (typeof x == "object") {
    return { message: `Dear Sir\Madam, I greet you ${x.name}` };
  } else {
    const politeGreet: PoliteGreet = `Hello ${x}` as unknown as PoliteGreet;
    return politeGreet;
  };

}

const OverrideFunctionSigniture = () => {
  const greet1 = greet("Adam");
  const greet2 = greet({ name: "Bela", polite: true } as Greeter)
  console.log(greet1);
  console.log(greet2);
}


export default OverrideFunctionSigniture;


