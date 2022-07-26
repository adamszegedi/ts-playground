class Bird {
  constructor(private _name: string) { }

  get name() {
    return this._name.toLocaleUpperCase();
  }
}

// One of the niceest feature Imho;
const bird = new Bird('ted');
console.log(bird.name);