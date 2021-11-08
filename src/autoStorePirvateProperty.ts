class Bird {
  constructor(private _name: string) { }

  get name() {
    return this._name;
  }
}


const bird = new Bird('Ted');
console.log(bird.name)