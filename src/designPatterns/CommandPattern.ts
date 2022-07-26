abstract class Command<State> {
  abstract execute(state: State): State;
  abstract undo(state: State): State;
}

class CommandStack<State> {
  private stack: Command<State>[] = [];

  constructor(private _state: State) { }

  get state() {
    return this._state;
  }

  execute(command: Command<State>) {
    this._state = command.execute(this._state);
    this.stack.push(command);
  }

  undo() {
    const command = this.stack.pop();
    if (command) {
      this._state = command.undo(this._state);
      return;
    }
    console.log("No more undo stack!");
  }
}

class SetValue extends Command<number> {
  private _originalValue?: number;

  constructor(private _value: number) {
    super();
    this._value = _value;
  }

  execute(state: number) {
    this._originalValue = state;
    return this._value;
  }

  undo() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this._originalValue!;
  }
}


class AddONe extends Command<number> {
  execute(state: number) {
    return state + 1;
  }

  undo(state: number) {
    return state - 1;
  }
}

class SubtractOne extends Command<number> {
  execute(state: number) {
    return state - 1;
  }

  undo(state: number) {
    return state + 1;
  }
}

const cs = new CommandStack<number>(0);
console.log(cs.state);
cs.execute(new AddONe());
console.log(cs.state);
cs.execute(new SetValue(32));
console.log(cs.state);
cs.execute(new AddONe());
console.log(cs.state);
cs.undo();
console.log(cs.state);
cs.execute(new SubtractOne());
console.log(cs.state);
cs.undo();
console.log(cs.state);
cs.execute(new SetValue(102));
console.log(cs.state);
cs.execute(new AddONe());
console.log(cs.state);
cs.undo();
console.log(cs.state);
cs.undo();
console.log(cs.state);
cs.undo();
cs.undo();
console.log("We managed to undo every action");
cs.undo();
console.log(cs.state);