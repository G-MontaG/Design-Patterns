module MediatorModule {
  export abstract class Mediator {
    public abstract send(message: string,colleague: Colleague);
  }

  export class ConcreteMediator extends Mediator {
    private _colleague1: ConcreteColleague1;
    private _colleague2: ConcreteColleague2;

    public set colleague1(value: ConcreteColleague1) {
      this._colleague1 = value;
    }

    public set colleague2(value: ConcreteColleague2) {
      this._colleague2 = value;
    }


    public send(message: string, colleague: Colleague) {
      if (colleague == this._colleague1) {
        this._colleague2.notify(message);
      } else {
        this._colleague1.notify(message);
      }
    }
  }

  export abstract class Colleague {
    protected mediator: Mediator;

    constructor(mediator: Mediator) {
      this.mediator = mediator;
    }
  }

  export class ConcreteColleague1 extends Colleague {
    constructor(mediator: Mediator) {
      super(mediator);
    }

    public send(message: string) {
      this.mediator.send(message, this);
    }

    public notify(message: string) {
      console.log("Colleague1 gets message: " + message);
    }
  }

  export class ConcreteColleague2 extends Colleague {
    constructor(mediator: Mediator) {
      super(mediator);
    }

    public send(message: string) {
      this.mediator.send(message, this);
    }

    public notify(message: string) {
      console.log("Colleague2 gets message: " + message);
    }
  }
}

//*********************************************
(function run() {
  let m: MediatorModule.ConcreteMediator = new MediatorModule.ConcreteMediator();

  let c1: MediatorModule.ConcreteColleague1 = new MediatorModule.ConcreteColleague1(m);
  let c2: MediatorModule.ConcreteColleague2 = new MediatorModule.ConcreteColleague2(m);

  m.colleague1 = c1;
  m.colleague2 = c2;

  c1.send("How are you?");
  c2.send("Fine, thanks");
}());