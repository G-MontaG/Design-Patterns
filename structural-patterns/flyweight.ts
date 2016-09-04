module FlyweightModule {
  export class FlyweightFactory {
    private flyweights: Map<any, any> = new Map();

    constructor() {
      this.flyweights.set("X", new ConcreteFlyweight());
      this.flyweights.set("Y", new ConcreteFlyweight());
      this.flyweights.set("Z", new ConcreteFlyweight());
    }

    public getFlyweight(key: string): Flyweight {
      return this.flyweights.get(key);
    }
  }

  export abstract class Flyweight {
    public abstract operation(extrinsicstate: number);
  }

  export class ConcreteFlyweight extends Flyweight {
    public operation(extrinsicstate: number) {
      console.log("ConcreteFlyweight: " + extrinsicstate);
    }
  }

  export class UnsharedConcreteFlyweight extends Flyweight {
    public operation(extrinsicstate: number) {
      console.log("UnsharedConcreteFlyweight: " + extrinsicstate);
    }
  }
}

//*********************************************
(function run() {
  // Arbitrary extrinsic state
  let extrinsicstate = 22;

  let factory: FlyweightModule.FlyweightFactory = new FlyweightModule.FlyweightFactory();

  // Work with different flyweight instances
  let fx: FlyweightModule.Flyweight = factory.getFlyweight("X");
  fx.operation(--extrinsicstate);

  let fy: FlyweightModule.Flyweight = factory.getFlyweight("Y");
  fy.operation(--extrinsicstate);

  let fz: FlyweightModule.Flyweight = factory.getFlyweight("Z");
  fz.operation(--extrinsicstate);

  let fu: FlyweightModule.UnsharedConcreteFlyweight = new FlyweightModule.UnsharedConcreteFlyweight();

  fu.operation(--extrinsicstate);
}());