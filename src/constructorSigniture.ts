type someObject = { swim: () => void }

type constuctorSigniture = {
  new(s: string): someObject;
}

function createNewFish(ctor: constuctorSigniture) {
  return new ctor("hello fishy");
}

class Fish {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  public swim() {
    console.log(`I am swimming - bye ${this.name}`)
  }
}


export default function constructorSigniture() {
  const fish = createNewFish(Fish);
  fish.swim();
}