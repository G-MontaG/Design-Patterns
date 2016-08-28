module PrototypeModule {
  export abstract class Prototype {
    protected _type: string;

    get type(): string {
      return this._type;
    }
  }

  export class ConcretePrototype1 extends Prototype {
    protected _type: string;

    constructor(type) {
      super();
      this._type = type;
    }
  }

  export class ConcretePrototype2 extends Prototype {
    protected _type: string;

    constructor(type) {
      super();
      this._type = type;
    }
  }
}

//*********************************************
(function run() {
  let prototype1 = new PrototypeModule.ConcretePrototype1("ConcretePrototype1");
  let newPrototype1 = Object.create(prototype1);
  console.log(newPrototype1.type);

  let prototype2 = new PrototypeModule.ConcretePrototype2("ConcretePrototype2");
  let newPrototype2 = Object.create(prototype2);
  console.log(newPrototype2.type);
}());