module DecoratorModule {
  export abstract class Component {
    public abstract operation();
  }

  export class ConcreteComponent extends Component {
    public operation() {
      console.log("ConcreteComponent.Operation()");
    }
  }

  export abstract class Decorator extends Component {
    protected _component: Component;

    public set component(component: Component) {
      this._component = component;
    }

    public operation() {
      if (this._component != null) {
        this._component.operation();
      }
    }
  }

  export class ConcreteDecoratorA extends Decorator {
    public operation() {
      super.operation();
      console.log("ConcreteDecoratorA.Operation()");
    }
  }

  export class ConcreteDecoratorB extends Decorator {
    public operation() {
      super.operation();
      this.addedBehavior();
      console.log("ConcreteDecoratorB.Operation()");
    }

    public addedBehavior() {
    }
  }
}

//*********************************************
(function run() {
  let c: DecoratorModule.ConcreteComponent = new DecoratorModule.ConcreteComponent();
  let d1: DecoratorModule.ConcreteDecoratorA = new DecoratorModule.ConcreteDecoratorA();
  let d2: DecoratorModule.ConcreteDecoratorB = new DecoratorModule.ConcreteDecoratorB();

  // Link decorators
  d1.component = c;
  d2.component = d1;

  d2.operation();
}());