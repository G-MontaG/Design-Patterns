module BridgeModule {
  export class Abstraction {
    protected _implementor: Implementor;

    set implementor(value) {
      this._implementor = value;
    }

    public operation() {
      this._implementor.operation();
    }
  }

  export abstract class Implementor {
    public abstract operation();
  }

  export class RefinedAbstraction extends Abstraction {
    public operation() {
      this._implementor.operation();
    }
  }

  export class ConcreteImplementorA extends Implementor {
    public operation() {
      console.log("ConcreteImplementorA Operation");
    }
  }

  export class ConcreteImplementorB extends Implementor {
    public operation() {
      console.log("ConcreteImplementorB Operation");
    }
  }
}

//*********************************************
(function run() {
  let abstraction = new BridgeModule.RefinedAbstraction();

  abstraction.implementor = new BridgeModule.ConcreteImplementorA();
  abstraction.operation();

  abstraction.implementor = new BridgeModule.ConcreteImplementorB();
  abstraction.operation();
}());