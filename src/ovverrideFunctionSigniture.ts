type Greeter = { name: string, polite: boolean }
type PoliteGreet = { message: string };

function greet(name: string): string;
function greet(name: Greeter): PoliteGreet;
function greet(x: string | Greeter): string | PoliteGreet {
  if (typeof x == "object") {
    return { message: `Dear Sir Madam, I greet you ${x.name}` };
  } else {
    const unpoliteGreet = `Hello ${x}`;
    return unpoliteGreet;
  }

}

const OverrideFunctionSigniture = () => {
  const greet1 = greet("Adam");
  const greet2 = greet({ name: "Bela", polite: true } as Greeter);
  console.log(greet1);
  console.log(greet2);
};

export default OverrideFunctionSigniture;

if (typeof require !== 'undefined' && require.main === module) {
  OverrideFunctionSigniture();
}


