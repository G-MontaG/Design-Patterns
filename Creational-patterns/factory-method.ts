module FactoryMethodModule {
  export abstract class Product {
    protected _type: string;

    get type(): string {
      return this._type;
    }
  }

  export class ConcreteProductA extends Product {
    protected _type = "ConcreteProductA";

    get type(): string {
      return this._type;
    }
  }

  export class ConcreteProductB extends Product {
    protected _type = "ConcreteProductB";

    get type(): string {
      return this._type;
    }
  }

  export abstract class Creator {
    public abstract factoryMethod(): Product;
  }

  export class ConcreteCreatorA extends Creator {
    public factoryMethod(): Product {
      return new ConcreteProductA();
    }
  }

  export class ConcreteCreatorB extends Creator {
    public factoryMethod(): Product {
      return new ConcreteProductB();
    }
  }
}

//*********************************************
(function run() {
  let creator1 = new FactoryMethodModule.ConcreteCreatorA();
  let productA = creator1.factoryMethod();
  console.log(productA.type);

  let creator2 = new FactoryMethodModule.ConcreteCreatorB();
  let productB = creator2.factoryMethod();
  console.log(productB.type);
}());