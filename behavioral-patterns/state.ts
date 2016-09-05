module StateModule {
  export abstract class State {
    public abstract handle(context: Context);
  }

  export class ConcreteStateA extends State {
    public handle(context: Context) {
      context.state = new ConcreteStateB();
    }
  }

  export class ConcreteStateB extends State {
    public handle(context: Context) {
        context.state = new ConcreteStateA();
    }
  }

  export class Context {
    private _state: State;

    constructor(state: State) {
      this.state = state;
    }

    public get state(): State {
      return this._state;
    }

    public set state(value: State) {
      this._state = value;
      console.log("State: " + this._state.constructor.name);
    }

    public request() {
      this._state.handle(this);
    }
  }
}

//*********************************************
(function run() {
  let c: StateModule.Context = new StateModule.Context(new StateModule.ConcreteStateA());

  c.request();
  c.request();
  c.request();
  c.request();
}());