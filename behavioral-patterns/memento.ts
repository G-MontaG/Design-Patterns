module MementoModule {
  export class Originator {
    private _state: string;

    public get state(): string {
      return this._state;
    }

    public set state(value: string) {
      this._state = value;
      console.log("State = " + this._state);
    }

    public createMemento(): Memento {
      return (new Memento(this._state));
    }

    // Restores original state
    public setMemento(memento: Memento) {
      console.log("Restoring state...");
      this.state = memento.state;
    }
  }

  export class Memento {
    private _state: string;

    constructor(state: string) {
      this._state = state;
    }

    public get state(): string {
      return this._state;
    }

    public set state(value: string) {
      this._state = value;
      console.log("State = " + this._state);
    }
  }

  export class Caretaker {
    private _memento: Memento;

    public get memento(): Memento {
      return this._memento;
    }

    public set memento(value: Memento) {
      this._memento = value;
    }
  }
}

//*********************************************
(function run() {
  let o: MementoModule.Originator = new MementoModule.Originator();
  o.state = "On";

  // Store internal state
  let c: MementoModule.Caretaker = new MementoModule.Caretaker();
  c.memento = o.createMemento();

  // Continue changing originator
  o.state = "Off";

  // Restore saved state
  o.setMemento(c.memento);
}());